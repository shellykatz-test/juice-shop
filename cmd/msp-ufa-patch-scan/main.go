package main

import (
	"context"
	"errors"
	"fmt"
	"os"
	"os/signal"
	"path/filepath"
	"strings"
	"syscall"
	"time"

	opswatlib "github.com/nable-patch/opswat-lib/pkg/client"

	"github.com/nable-fusion/msp-ufa-common-library/pkg/codes"
	"github.com/nable-fusion/msp-ufa-common-library/pkg/configstorage"
	"github.com/nable-fusion/msp-ufa-common-library/pkg/fileops"
	flagPkg "github.com/nable-fusion/msp-ufa-common-library/pkg/flags"
	commonIPC "github.com/nable-fusion/msp-ufa-common-library/pkg/ipc"
	loggerPkg "github.com/nable-fusion/msp-ufa-common-library/pkg/logger"
	osCommon "github.com/nable-fusion/msp-ufa-common-library/pkg/os"
	versionPkg "github.com/nable-fusion/msp-ufa-common-library/pkg/version"
	"github.com/nable-fusion/msp-ufa-patch-scan/internal/action"
	"github.com/nable-fusion/msp-ufa-patch-scan/internal/constants"
	"github.com/nable-fusion/msp-ufa-patch-scan/internal/scan"
)

const (
	retryCount = 0
	ipcTimeout = 45 * time.Minute
)

var (
	passKey string // injected at build via ldflags.

	// ErrUnsupportedOS is returned when the current OS is not supported for dynamic library resolution.
	ErrUnsupportedOS = errors.New("unsupported OS")

	// ErrNoSMSLibrariesLocation is returned when none of the supplied additional artefact locations point at the SMS libraries directory.
	ErrNoSMSLibrariesLocation = errors.New("no software-management-service-requirements location found in the additional artefact locations")

	// ErrArtifactOutsideComponentDir is returned when a matched artefact location resolves outside the component's own directory.
	ErrArtifactOutsideComponentDir = errors.New("artefact location resolves outside the component directory")
)

func main() {
	// listen for interrupt signals.
	ctx, cancel := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)

	fileHandler := fileops.Instance()

	log := loggerPkg.NewLogger("", fileHandler)

	exitCode := run(ctx, log)

	log.Stop()
	cancel()

	os.Exit(exitCode)
}

func run(ctx context.Context, log *loggerPkg.Logger) int {
	flagsCfg, err := parseFlags(log)
	if err != nil {
		log.ErrorWithErr("failed to validate flags", err)

		return codes.InvalidArguments
	}

	if flagsCfg.Version {
		fmt.Println(versionPkg.GetVersion())

		return codes.Success
	}

	opswatClient, ipcClient, exitCode := initializeClients(log, flagsCfg)
	defer func() { closeIPCClient(log, ipcClient) }()

	if exitCode != 0 {
		return exitCode
	}

	configMessage, exitCode := action.FetchAndUnmarshalConfig(
		log,
		ipcClient,
		flagsCfg.ReqCryptoOnce,
	)
	if exitCode != 0 {
		log.Error("couldn't get or process Core configuration")

		return codes.FailedToFetchConfig
	}

	if exitCode = initOPSWAT(log, opswatClient, configMessage.AdditionalArtifactsLocations); exitCode != 0 {
		return exitCode
	}

	defer func() { teardownOPSWAT(log, opswatClient) }()

	config, exitCode := initConfigStorage(log)
	if exitCode != 0 {
		return exitCode
	}

	actionProcessor, err := createProcessor(log, opswatClient, ipcClient, config, configMessage.DeviceGUID)
	if err != nil {
		log.ErrorWithErr("Error creating action processor", err)

		return codes.ComponentInternalError
	}

	exitCode, err = actionProcessor.RunAction(ctx, configMessage)
	if err != nil {
		log.ErrorWithErr("An error occurred when running the action:", err)
	}

	return exitCode
}

func initConfigStorage(log *loggerPkg.Logger) (config *configstorage.ConfigStorage, exitCode int) {
	config, err := configstorage.NewConfigStorage(nil, log, nil)
	if err != nil {
		log.ErrorWithErr("Error initialising config storage", err)

		return nil, codes.ComponentInternalError
	}

	if err = config.Start(); err != nil {
		log.ErrorWithErr("Error starting config storage", err)

		return nil, codes.ComponentInternalError
	}

	return config, 0
}

func createProcessor(log *loggerPkg.Logger, opswatClient *opswatlib.Client, ipcClient *commonIPC.Client, configStorage *configstorage.ConfigStorage, deviceGUID string) (*action.Processor, error) {
	differ, err := scan.NewHashDiffer(configStorage)
	if err != nil {
		return nil, fmt.Errorf("creating hash differ: %w", err)
	}

	processor := action.NewProcessor(log, ipcClient, versionPkg.GetVersion())
	osTypeProvider := osCommon.NewOperatingSystemInfo()

	// register patch scan handler.
	patchScanHandler := scan.NewPatchScanHandler(log, opswatClient, osTypeProvider, deviceGUID)
	processor.Register(string(action.ScanAction), patchScanHandler)

	// register os info scan handler.
	osInfoScanHandler := scan.NewOSInfoScanHandler(log, opswatClient, osTypeProvider, differ, deviceGUID)
	processor.Register(string(action.OsInfoAction), osInfoScanHandler)

	return processor, nil
}

func initOPSWAT(log *loggerPkg.Logger, opswatClient *opswatlib.Client, additionalArtifactLocations []string) int {
	dylibLibraryPath, err := GetDynamicLibraryPath(additionalArtifactLocations)
	if err != nil {
		log.ErrorWithErr("Error getting dynamic library path", err)

		return codes.FailedToFetchConfig
	}

	log.Info("Using dynamic library path: " + dylibLibraryPath)

	if err = opswatClient.Init(passKey, dylibLibraryPath); err != nil {
		log.ErrorWithErr("Error initialising OPSWAT client", err)

		return codes.ComponentInternalError
	}

	log.Info("OPSWAT client initialised successfully")

	return 0
}

func parseFlags(log *loggerPkg.Logger) (*flagPkg.FlagConfig, error) {
	flagValidator := flagPkg.NewFlagValidator(log)

	validatedFlags, err := flagValidator.ParseAndValidateFlags()
	if err != nil {
		return nil, err
	}

	return validatedFlags, nil
}

func teardownOPSWAT(log *loggerPkg.Logger, opswatClient *opswatlib.Client) {
	log.Debug("Tearing down OPSWAT client...")

	if opswatClient != nil {
		if err := opswatClient.Teardown(); err != nil {
			log.ErrorWithErr("Error de-initialising OPSWAT client", err)
		}
	}
}

func closeIPCClient(log *loggerPkg.Logger, client *commonIPC.Client) {
	log.Debug("Closing IPC client...")

	if client != nil {
		if err := client.Close(); err != nil {
			log.ErrorWithErr("Error closing IPC client", err)
		}
	}
}

// GetDynamicLibraryPath returns the platform-specific path to the SMS dynamic libraries.
//
// On Windows the libraries sit alongside the component executable, so the component's own
// directory is used. On Linux and macOS the libraries are delivered as additional artefacts,
// whose already-resolved absolute locations are supplied by Core; the directory containing
// them is derived from those locations.
func GetDynamicLibraryPath(additionalArtifactLocations []string) (string, error) {
	osi := osCommon.NewOperatingSystemInfo()

	execPath, err := os.Executable()
	if err != nil {
		return "", fmt.Errorf("unable to determine executable path: %w", err)
	}

	componentDir := filepath.Dir(execPath)

	switch {
	case osi.IsWindowsGOOS():
		return filepath.Clean(filepath.Join(componentDir, constants.DefaultWindowsX64LibrariesPath)), nil
	case osi.IsDarwinGOOS(), osi.IsLinuxGOOS():
		return librariesDirFromArtifacts(additionalArtifactLocations, componentDir)
	default:
		return "", ErrUnsupportedOS
	}
}

// librariesDirFromArtifacts derives the SMS libraries directory from the first additional
// artefact location under a software-management-service-requirements directory. Locations are
// always file paths — Core resolves each configured artefact target (a file) onto the component
// directory — so the containing directory is taken with filepath.Dir. Matching on the
// requirements path segment (rather than taking the first location) keeps resolution correct if
// unrelated artefacts are later added to the config. As Core always delivers component
// artefacts inside the component's own directory, a matched location that resolves outside
// that directory is rejected so libraries are never loaded from an unexpected path.
func librariesDirFromArtifacts(additionalArtifactLocations []string, componentDir string) (string, error) {
	for _, location := range additionalArtifactLocations {
		if !strings.Contains(location, constants.SMSLibrariesKey) {
			continue
		}

		librariesDir := filepath.Clean(filepath.Dir(location))
		if !isWithinDir(componentDir, librariesDir) {
			return "", fmt.Errorf("%w: %s", ErrArtifactOutsideComponentDir, librariesDir)
		}

		return librariesDir, nil
	}

	return "", ErrNoSMSLibrariesLocation
}

// isWithinDir reports whether path is baseDir itself or a descendant of it.
func isWithinDir(baseDir, path string) bool {
	rel, err := filepath.Rel(baseDir, path)
	if err != nil {
		return false
	}

	return rel != ".." && !strings.HasPrefix(rel, ".."+string(filepath.Separator))
}

func initializeClients(log *loggerPkg.Logger, flagCfg *flagPkg.FlagConfig) (opswatClient *opswatlib.Client, ipcClient *commonIPC.Client, exitCode int) {
	opswatClient = opswatlib.NewClient(log)

	ipcClient, err := commonIPC.CreateAndStartIPCClient(
		flagCfg.PipeName,
		flagCfg.GUID,
		flagCfg.ConfigGUID,
		retryCount,
		ipcTimeout,
		nil,
	)
	if err != nil {
		log.ErrorWithErr("couldn't create IPC client", err)

		return opswatClient, nil, codes.IpcClientError
	}

	return opswatClient, ipcClient, 0
}
