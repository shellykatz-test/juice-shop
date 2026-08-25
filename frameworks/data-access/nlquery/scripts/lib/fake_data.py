"""Ephemeral synthetic-data seeding + teardown - a capability any lane can opt into.

When a subcommand is run with ``--fake-data`` the harness seeds FK-coherent
synthetic monitoring data (customers → devices → appliancetasks → cim_patch →
patchapproval) onto the dev VM at a chosen scale, optionally links it into one
user's RLS visibility, runs the lane against that prod-like volume, then ALWAYS
purges it again on the way out. The same primitives power the ``perf`` lane.

The lifecycle is driven by the companion shell + SQL under ``livetesting/``
(``seed-fake-perf-data.sh``, ``purge-fake-perf-data.sh``, ``lib/health-check.sh``,
``sql/``), copied to the VM and run there - exactly as the original PowerShell
tooling did. Everything is keyed off a reserved id floor + the ``NLPERF_FAKE``
sentinel, so purge is idempotent and never touches real rows.

*** Runs destructive seed/purge on the shared single-tenant dev VM. Ensure no
    Robot/EP run is active. Assumes the NL RLS stack is present on the target
    (true for ``--use-remote`` against a deployed VM); visibility linkage is
    skipped with a warning if ``nl.refresh_user_visibility`` is absent. ***
"""

from __future__ import annotations

import contextlib
import os
import shlex
import tarfile
import tempfile
from pathlib import Path
from typing import Optional

from . import ssh_exec

SCRIPTS_DIR = Path(__file__).resolve().parent.parent
# VM-deployed assets (copied to the box and removed on exit) live under lib/remote/.
REMOTE_ASSETS = Path(__file__).resolve().parent / "remote"

FAKE_BASE = 900000000
FAKE_EXTERNALID = "NLPERF_FAKE"   # sentinel on every synthetic customer; purge scopes by it
REMOTE_ROOT = "/tmp/nlperf_measure"
DB = "mickey"

# customerid/deviceid/taskid/applianceid are all PostgreSQL INTEGER (max 2147483647).
# Synthetic ids are assigned as ``effective_base + g``; on a long-lived box the live
# sequences can climb close to the ceiling (e.g. ltp/aws dev boxes sit at ~2.146B),
# leaving little headroom. We seed at most 95% of whatever id space remains.
INT4_MAX = 2147483647
SEED_HEADROOM_FRACTION = 0.95


# ---- CLI flags --------------------------------------------------------------

def add_flags(sp) -> None:
    """Fake-data flags shared by every subcommand.

    Seeding activates when ``--fake-data`` is set OR when any volume flag
    (``--customers``, ``--devices-per-customer``, ``--patches-per-device``) is
    passed with a non-default value - so you don't have to remember to add
    ``--fake-data`` alongside volume overrides.
    """
    sp.add_argument("--fake-data", dest="fake_data", action="store_true",
                    help="seed ephemeral synthetic data before the run and purge it after")
    # Seed volume. The --seed-* aliases match the legacy measure-phase1-indexes.ps1
    # parameters (-SeedCustomers / -SeedDevicesPerCustomer / -SeedPatchesPerDevice).
    sp.add_argument("--customers", "--seed-customers", dest="customers", type=int, default=200,
                    help="synthetic customers to seed (with --fake-data / perf)")
    sp.add_argument("--devices-per-customer", "--seed-devices-per-customer",
                    dest="devices_per_customer", type=int, default=50,
                    help="devices per seeded customer")
    sp.add_argument("--patches-per-device", "--seed-patches-per-device",
                    dest="patches_per_device", type=int, default=20,
                    help="patches per seeded device")
    sp.add_argument("--tasks-per-device", "--seed-tasks-per-device",
                    dest="tasks_per_device", type=int, default=1,
                    help="monitoring tasks per seeded device (default 1)")
    sp.add_argument("--fake-user", dest="fake_user", default="",
                    help="email whose RLS visibility the seeded data is linked to "
                         "(default: the lane's --user; else seeded but unlinked)")


def volumes(args) -> tuple[int, int, int]:
    return (args.customers, args.devices_per_customer, args.patches_per_device)


# ---- low-level remote primitives (shared with perf_runner) ------------------

def run_remote(cfg, command: str, *, stdin_text: Optional[str] = None, on_devbox: bool,
               timeout: int = 120, logger=None) -> ssh_exec.RemoteResult:
    return ssh_exec.run(dev_box=cfg.devBox, command=command, ssh_user=cfg.sshUser,
                        ssh_key=cfg.sshKey, ssh_password=cfg.sshPassword,
                        stdin_text=stdin_text, on_devbox=on_devbox, timeout=timeout,
                        logger=logger)


def pg_scalar(cfg, sql: str, *, on_devbox, logger) -> str:
    """Run a query as the postgres superuser; return its last non-empty line.

    Raises on a non-zero remote exit (SSH transport abort, sudo failure, or a psql
    ERROR). Without this guard an empty stdout from a *failed* command is
    indistinguishable from a legitimately empty result - historically that turned a
    transient SSH connection abort mid-run into a misleading domain error (e.g.
    "No non-deleted luser with email1=..." for a user that plainly exists)."""
    res = run_remote(cfg, f'sudo -n -u postgres psql -X -tA -d {DB} -c "{sql}"',
                     on_devbox=on_devbox, logger=logger)
    if res.returncode != 0:
        detail = (res.stderr or res.stdout).strip()
        raise RuntimeError(
            f"remote psql failed (exit {res.returncode}) for query: {sql[:200]}\n{detail}")
    lines = [ln for ln in res.stdout.splitlines() if ln.strip()]
    return lines[-1].strip() if lines else ""


def pg_cmd(cfg, sql: str, *, on_devbox, logger, timeout: int = 300) -> ssh_exec.RemoteResult:
    """Run a (possibly multi-statement) command as the postgres superuser via stdin.

    SQL travels on stdin (``-f -``): in password mode ``sudo -S`` consumes the
    leading password line and psql reads the rest, so this is auth-mode-agnostic
    and never has to shell-quote the SQL."""
    return run_remote(cfg, f"sudo -n -u postgres psql -X -q -v ON_ERROR_STOP=1 -d {DB} -f -",
                      stdin_text=sql, on_devbox=on_devbox, timeout=timeout, logger=logger)


def _seed_or_purge(cfg, script: str, env_vars: str, *, on_devbox, logger, log_path: Path,
                   action: str, timeout: int = 1200) -> str:
    """Run seed/purge AS ROOT (it pipes SQL to ``sudo -u postgres`` internally).

    The combined stdout+stderr is ALWAYS written to ``log_path`` first, then a
    non-zero remote exit is raised as a ``RuntimeError`` carrying the log tail.

    Historically the exit code was IGNORED: a ``die`` inside the script (e.g. the
    int4 id-headroom guard, or a failed health gate) was swallowed, the truncated
    log was written, and the run continued - surfacing later as a misleading
    "0/0 probes ... PASS" with nothing actually seeded. Raising here turns that
    silent miss into an accurate, loud failure while preserving the full remote
    output on disk so the real cause is never lost."""
    # Expose the sudo password to the remote script's _hc_sudo (health-check.sh) in
    # PASSWORD mode, so its `sudo -S` path works even when health-check is invoked
    # outside an outer-root context. On these dev boxes sudo needs a password even
    # under key login, but only a configured sshPassword is the sudo secret; a pure
    # key-auth box with NOPASSWD sudo leaves this unset and _hc_sudo uses `sudo -n`.
    # The value is a registered secret (config.SECRET_KEYS) so it is scrubbed from
    # harness logs; it is only briefly visible in the remote `ps` (accepted trade).
    _sudo_pw = getattr(cfg, "sshPassword", "") or ""
    sudo_pw_env = f"NLPERF_SUDO_PW={shlex.quote(_sudo_pw)} " if _sudo_pw else ""
    # 2>&1 merges the remote script's stderr into stdout so the captured log holds
    # the FULL output in order - psql ERRORs, the `die` message, and any partial
    # output on a mid-run abort. Without it the remote stderr could be lost and the
    # log truncated, leaving failures undiagnosable. (plink's own transport errors
    # still surface on res.stderr, so ssh_exec's transient-retry detection is intact.)
    res = run_remote(cfg, f"sudo -n env {sudo_pw_env}{env_vars} bash {REMOTE_ROOT}/{script} 2>&1",
                     on_devbox=on_devbox, timeout=timeout, logger=logger)
    output = res.stdout + ("\n" + res.stderr if res.stderr else "")
    log_path.write_text(output, encoding="utf-8")
    if res.returncode != 0:
        tail = "\n".join(ln for ln in output.splitlines() if ln.strip())
        tail = "\n".join(tail.splitlines()[-15:])
        raise RuntimeError(
            f"fake-data {action} failed (remote exit {res.returncode}); see {log_path.name}.\n{tail}")
    return output


# ---- id-headroom clamp ------------------------------------------------------

def _seed_id_offset(n_customers: int, devices_per: int, tasks_per: int) -> int:
    """Largest synthetic id offset above the base that the seed will assign.

    Synthetic ids are ``base + g``: task ids span 1..(customers*devices*tasks),
    device/appliance ids span 1..(customers*devices), and customer ids span
    0..customers (the SO at the base + one per customer). Task ids dominate
    whenever tasks_per >= 1; the device and customer spans are floors that only
    bind for tiny volumes. ``patches_per`` is absent on purpose - cim_patch's PK
    is (deviceid, recordid) so patches reuse device ids and consume no id space."""
    return max(n_customers * devices_per * tasks_per,
               n_customers * devices_per,
               n_customers + 1)


def _clamp_volumes_to_budget(budget: int, n_customers: int, devices_per: int,
                             tasks_per: int) -> tuple[int, int, int]:
    """Reduce (customers, devices_per, tasks_per) so the id offset fits ``budget``.

    Reduces customers first (this preserves each device's patch/task shape, which
    the perf probes depend on), then devices_per, then tasks_per - each floored at
    1. Returns the input unchanged when it already fits. Raises when the box has no
    room for even a single synthetic row."""
    if budget < _seed_id_offset(1, 1, 1):
        raise RuntimeError(
            f"No INTEGER id headroom to seed even one synthetic row (budget={budget}). "
            "The box's id sequences are exhausted - rebuild it or seed on another box.")
    if _seed_id_offset(n_customers, devices_per, tasks_per) <= budget:
        return n_customers, devices_per, tasks_per
    # 1) Reduce customers, keeping each customer's devices x tasks shape intact.
    #    The (budget - 1) cap covers the +1 SO id when devices_per*tasks_per == 1.
    per_customer = devices_per * tasks_per
    if per_customer <= budget:
        nc = max(1, min(budget // per_customer, budget - 1))
        if _seed_id_offset(nc, devices_per, tasks_per) <= budget:
            return nc, devices_per, tasks_per
    # 2) One customer; reduce devices_per.
    if tasks_per <= budget:
        dp = max(1, min(budget // tasks_per, budget - 1))
        if _seed_id_offset(1, dp, tasks_per) <= budget:
            return 1, dp, tasks_per
    # 3) One customer, one device; reduce tasks_per.
    return 1, 1, max(1, min(tasks_per, budget))


def _resolve_seed_budget(cfg, *, on_devbox, logger) -> tuple[int, int]:
    """Read the live max ids and return (effective_base, id-offset budget).

    effective_base mirrors the seed script's own preflight: the greater of the
    reserved floor and one past the current max id across the seeded tables.
    budget = floor(0.95 * (INT4_MAX - effective_base)). The 5% margin absorbs id
    drift between this read and the seed's own preflight read on a live box."""
    raw = pg_scalar(
        cfg,
        "SELECT GREATEST("
        f"{FAKE_BASE},"
        "(SELECT COALESCE(max(customerid),0)+1 FROM customer),"
        "(SELECT COALESCE(max(deviceid),0)+1 FROM device),"
        "(SELECT COALESCE(max(taskid),0)+1 FROM appliancetask),"
        "(SELECT COALESCE(max(applianceid),0)+1 FROM appliance));",
        on_devbox=on_devbox, logger=logger)
    effective_base = int(raw) if raw.lstrip("-").isdigit() else FAKE_BASE
    budget = int((INT4_MAX - effective_base) * SEED_HEADROOM_FRACTION)
    return effective_base, max(budget, 0)


def clamp_volumes(cfg, *, n_customers, devices_per, patches_per, tasks_per,
                  on_devbox, logger) -> tuple[int, int, int]:
    """Clamp (customers, devices_per, tasks_per) to 95% of the box's free INTEGER
    id space, telling the user with a clear before/after when it bites. Returns the
    (possibly reduced) triple. ``patches_per`` passes through untouched (it consumes
    no id space and is independently bounded by the real patch pool)."""
    effective_base, budget = _resolve_seed_budget(cfg, on_devbox=on_devbox, logger=logger)
    requested = _seed_id_offset(n_customers, devices_per, tasks_per)
    if requested <= budget:
        return n_customers, devices_per, tasks_per
    nc, dp, tp = _clamp_volumes_to_budget(budget, n_customers, devices_per, tasks_per)
    logger.warning(
        "Requested seed volume (%d customers x %d devices x %d tasks/device => %d ids) "
        "exceeds this box's free INTEGER id space (effective base %d, ~%d ids free, "
        "95%% budget %d ids). Clamping to %d customers x %d devices x %d tasks/device "
        "(=> %d ids) - the maximum that fits minus 5%%.",
        n_customers, devices_per, tasks_per, requested,
        effective_base, INT4_MAX - effective_base, budget,
        nc, dp, tp, _seed_id_offset(nc, dp, tp))
    return nc, dp, tp


# ---- post-seed verification -------------------------------------------------

def _expected_seed_counts(n_customers, devices_per, tasks_per, parent_cid) -> tuple[int, int, int]:
    """Deterministic synthetic row counts the seed must produce: (customer, device,
    appliancetask). appliance is 1:1 with device. cim_patch/patchapproval depend on
    the live `patch` pool size, so they are checked as non-empty, not exact.

    A synthetic SO is created only in the default (non ``--fake-user``) mode; in
    ``--fake-user`` mode customers hang directly off the caller's base customer."""
    so = 0 if parent_cid is not None else 1
    customers = n_customers + so
    devices = n_customers * devices_per
    tasks = devices * tasks_per
    return customers, devices, tasks


def verify_seed(cfg, *, n_customers, devices_per, patches_per, tasks_per, parent_cid,
                on_devbox, logger) -> None:
    """Read back the synthetic counts (externalid-scoped, same contract as
    30_counts.sql) and assert they match the clamped projection.

    This is the catch for a seed that "succeeded" at the shell level but inserted
    nothing - or fewer rows than asked. device/appliance/appliancetask are
    deterministic and checked exactly; cim_patch is checked as non-empty (its count
    tracks the live patch pool)."""
    raw = pg_scalar(
        cfg,
        f"WITH cust AS (SELECT customerid FROM customer "
        f"WHERE externalid='NLPERF_FAKE' AND customerid >= {FAKE_BASE}), "
        f"dev AS (SELECT deviceid FROM device WHERE customerid IN (SELECT customerid FROM cust)) "
        f"SELECT (SELECT count(*) FROM cust), (SELECT count(*) FROM dev), "
        f"(SELECT count(*) FROM appliance WHERE deviceid IN (SELECT deviceid FROM dev)), "
        f"(SELECT count(*) FROM appliancetask WHERE deviceid IN (SELECT deviceid FROM dev)), "
        f"(SELECT count(*) FROM cim_patch WHERE deviceid IN (SELECT deviceid FROM dev));",
        on_devbox=on_devbox, logger=logger)
    parts = raw.split("|")
    if len(parts) != 5 or not all(p.strip().lstrip("-").isdigit() for p in parts):
        raise RuntimeError(f"Post-seed verification could not read synthetic counts (got '{raw}').")
    got_c, got_d, got_a, got_t, got_p = (int(p) for p in parts)
    exp_c, exp_d, exp_t = _expected_seed_counts(n_customers, devices_per, tasks_per, parent_cid)
    logger.info("Post-seed counts: customer=%d/%d device=%d/%d appliance=%d/%d "
                "appliancetask=%d/%d cim_patch=%d",
                got_c, exp_c, got_d, exp_d, got_a, exp_d, got_t, exp_t, got_p)
    mism = []
    if got_c != exp_c:
        mism.append(f"customer {got_c}!={exp_c}")
    if got_d != exp_d:
        mism.append(f"device {got_d}!={exp_d}")
    if got_a != exp_d:
        mism.append(f"appliance {got_a}!={exp_d}")
    if got_t != exp_t:
        mism.append(f"appliancetask {got_t}!={exp_t}")
    if mism:
        raise RuntimeError(
            "Post-seed verification FAILED - synthetic rows do not match the seeded volume "
            f"({'; '.join(mism)}). The seed reported success but the data is wrong/absent; "
            "check raw/fake-seed.log.")
    if got_p == 0 and got_d > 0 and patches_per > 0:
        logger.warning("Seed produced 0 cim_patch rows for %d devices - the live `patch` "
                       "master may be empty; patch-compliance probes will be trivial.", got_d)


# ---- lifecycle steps --------------------------------------------------------

def _copy_or_die(cfg, *, local: Path, remote: str, on_devbox, logger, recursive=False) -> None:
    """copy_to_vm + a returncode check. The recursive directory copy used to fail
    SILENTLY on Windows/PuTTY (``pscp -r`` needs the dest dir to pre-exist, unlike
    OpenSSH ``scp -r``), so the SQL never landed and the seed/purge later died with
    a confusing 'No such file'. Always check the copy actually succeeded."""
    res = ssh_exec.copy_to_vm(dev_box=cfg.devBox, local=local, remote=remote,
                              ssh_user=cfg.sshUser, ssh_key=cfg.sshKey,
                              ssh_password=cfg.sshPassword, recursive=recursive,
                              on_devbox=on_devbox, logger=logger)
    if res is not None and not res.ok:
        raise RuntimeError(f"copy to {remote} failed (exit {res.returncode}): "
                           f"{(res.stderr or res.stdout).strip()[:300]}")


def copy_harness(cfg, *, on_devbox, logger) -> None:
    """Copy the seed/purge/health scripts + SQL to the VM (world-readable so the
    postgres role can read the -f'd SQL).

    The whole asset set (scripts + lib + SQL) is bundled into ONE gzip tarball,
    transferred in a single connection, and extracted on the box. Copying the ~17
    files individually meant ~17 separate pscp/scp connections; on a flaky link
    (plink WSAECONNABORTED) any one exhausting its retries failed the entire deploy
    (observed: 0/14 SQL landed). One transfer collapses that to a single abort
    window, and re-sending one small tarball is cheap. The deployed SQL set is then
    verified against the local set."""
    logger.info("Copying fake-data harness to %s:%s", cfg.devBox, REMOTE_ROOT)
    sql_files = sorted((REMOTE_ASSETS / "sql").glob("*.sql"))
    if not sql_files:
        raise RuntimeError(f"no SQL files found under {REMOTE_ASSETS / 'sql'} to deploy")
    # (tar member arcname -> local path); arcnames mirror the layout seed/purge expect
    # (scripts at the root, lib/health-check.sh, sql/*.sql).
    members = [("seed-fake-perf-data.sh", REMOTE_ASSETS / "seed-fake-perf-data.sh"),
               ("purge-fake-perf-data.sh", REMOTE_ASSETS / "purge-fake-perf-data.sh"),
               ("lib/health-check.sh", REMOTE_ASSETS / "lib" / "health-check.sh")]
    members += [(f"sql/{sf.name}", sf) for sf in sql_files]
    fd, tgz_local = tempfile.mkstemp(prefix="nlperf_harness_", suffix=".tgz")
    os.close(fd)
    remote_tgz = "/tmp/nlperf_harness.tgz"
    try:
        with tarfile.open(tgz_local, "w:gz") as tar:
            for arcname, path in members:
                tar.add(path, arcname=arcname)
        # /tmp always exists, so the tarball copy needs no pre-created dir; the extract
        # then (re)creates REMOTE_ROOT. copy_to_vm/_copy_or_die retry transient aborts.
        _copy_or_die(cfg, local=Path(tgz_local), remote=remote_tgz,
                     on_devbox=on_devbox, logger=logger)
        run_remote(cfg, f"rm -rf {REMOTE_ROOT} && mkdir -p {REMOTE_ROOT} && "
                        f"tar -xzf {remote_tgz} -C {REMOTE_ROOT} && "
                        f"chmod -R a+rX {REMOTE_ROOT} && rm -f {remote_tgz}",
                   on_devbox=on_devbox, logger=logger)
    finally:
        with contextlib.suppress(OSError):
            os.unlink(tgz_local)
    # Verify the SQL actually landed - the seed/purge are useless without it.
    res = run_remote(cfg, f"ls -1 {REMOTE_ROOT}/sql/*.sql 2>/dev/null | wc -l",
                     on_devbox=on_devbox, logger=logger)
    landed = res.stdout.strip()
    if not landed.isdigit() or int(landed) != len(sql_files):
        raise RuntimeError(f"fake-data harness SQL deploy incomplete: expected {len(sql_files)} "
                           f"*.sql in {REMOTE_ROOT}/sql, found {landed or '0'}. Check SSH copy "
                           "(scp/pscp) and permissions.")
    logger.debug("Harness deployed: %d SQL file(s) verified in %s/sql", len(sql_files), REMOTE_ROOT)


def reap_orphans(cfg, *, on_devbox, logger) -> str:
    """Terminate orphaned NLPERF backends left lock-holding by a Ctrl-C'd prior run."""
    reaped = pg_scalar(
        cfg, "SELECT count(*) FROM (SELECT pg_terminate_backend(pid) FROM pg_stat_activity "
             "WHERE datname = current_database() AND pid <> pg_backend_pid() "
             "AND state <> 'idle' AND query ILIKE '%nlperf%') t;",
        on_devbox=on_devbox, logger=logger)
    if reaped and reaped != "0":
        logger.warning("Terminated %s orphaned NLPERF backend(s) from a prior run", reaped)
    return reaped


def resolve_user(cfg, user_email: str, *, on_devbox, logger) -> int:
    """Resolve a measurement/link user id from the --user label, else the broadest
    non-builtin-admin. The label is matched against BOTH ``username`` (the N-central
    login name - what the UI shows as "Login Name", and how built-in admins like
    productadmin@example.com are keyed) AND ``email1`` (the contact email, often a
    different address), so either identifier works."""
    if user_email:
        ident = user_email.replace("'", "''")
        raw = pg_scalar(cfg, f"SELECT userid FROM luser WHERE (username='{ident}' OR "
                             f"email1='{ident}') AND NOT deleted ORDER BY userid LIMIT 1;",
                        on_devbox=on_devbox, logger=logger)
        if not raw.isdigit():
            raise RuntimeError(
                f"No non-deleted luser with username or email1 = '{user_email}' (got '{raw}').")
        return int(raw)
    raw = pg_scalar(
        cfg, "SELECT u.userid FROM luser u JOIN accessgroupusermap m ON m.userid=u.userid "
             "AND NOT m.deleted WHERE NOT u.deleted AND u.userid NOT IN "
             "(SELECT userid FROM srd_ref.nl_builtin_admin) GROUP BY u.userid "
             "ORDER BY count(*) DESC, u.userid LIMIT 1;", on_devbox=on_devbox, logger=logger)
    if not raw.isdigit():
        raw = pg_scalar(cfg, "SELECT userid FROM luser WHERE NOT deleted AND userid NOT IN "
                             "(SELECT userid FROM srd_ref.nl_builtin_admin) ORDER BY userid LIMIT 1;",
                        on_devbox=on_devbox, logger=logger)
    if not raw.isdigit():
        raise RuntimeError(f"Could not resolve a non-builtin-admin user (got '{raw}'). "
                           "Pass --fake-user/--user explicitly.")
    return int(raw)


def seed(cfg, *, n_customers, devices_per, patches_per, tasks_per=1, test_user_id=None,
         parent_cid: Optional[int] = None, on_devbox, logger, raw_dir: Path) -> None:
    env = (f"FAKE_ID_BASE={FAKE_BASE} N_CUSTOMERS={n_customers} "
           f"DEVICES_PER_CUSTOMER={devices_per} PATCHES_PER_DEVICE={patches_per} "
           f"TASKS_PER_DEVICE={tasks_per} DB={DB}")
    if test_user_id:
        env += f" TEST_USER_ID={test_user_id}"
    if parent_cid is not None:
        env += f" PARENT_CUSTOMER_ID={parent_cid}"
    logger.info("Seeding %d customers x %d devices x %d patches (%d task(s)/device) ...",
                n_customers, devices_per, patches_per, tasks_per)
    _seed_or_purge(cfg, "seed-fake-perf-data.sh", env, on_devbox=on_devbox, logger=logger,
                   log_path=raw_dir / "fake-seed.log", action="seed")


def _link_sql(home_customer_id: int, test_user_id: int) -> str:
    # Wrapped in a single transaction (BEGIN/COMMIT) so that - under psql's
    # ON_ERROR_STOP - a failure anywhere (e.g. a missing NL object) rolls the whole
    # thing back rather than leaving the access-group rows committed but orphaned.
    return f"""BEGIN;
SET session_replication_role = replica;
UPDATE customer SET parentid = {home_customer_id}, lastupdated = now()
 WHERE externalid = 'NLPERF_FAKE' AND customerid <> {home_customer_id};
INSERT INTO accessgroup (groupid, customerid, groupname, description, grouptype, deleted, lastupdated, autoincludenewcustomer, accessgroupapplication)
 SELECT {FAKE_BASE}, {home_customer_id}, 'NLPERF_FAKE_GROUP', 'ephemeral perf-test group', g.grouptype, false, now(), false, g.accessgroupapplication
   FROM (SELECT grouptype, accessgroupapplication FROM accessgroup WHERE NOT deleted ORDER BY groupid LIMIT 1) g
  WHERE NOT EXISTS (SELECT 1 FROM accessgroupusermap WHERE userid = {test_user_id} AND NOT deleted)
 ON CONFLICT DO NOTHING;
INSERT INTO accessgroupusermap (userid, groupid, deleted, lastupdated)
 SELECT {test_user_id}, {FAKE_BASE}, false, now()
  WHERE EXISTS (SELECT 1 FROM accessgroup WHERE groupid = {FAKE_BASE})
 ON CONFLICT DO NOTHING;
INSERT INTO accessgroupcustomermap (groupid, customerid, deleted, lastupdated)
 SELECT m.groupid, c.customerid, false, now()
   FROM accessgroupusermap m
   CROSS JOIN customer c
  WHERE m.userid = {test_user_id} AND NOT m.deleted
    AND c.externalid = 'NLPERF_FAKE'
    AND NOT EXISTS (SELECT 1 FROM accessgroupcustomermap x WHERE x.groupid = m.groupid AND x.customerid = c.customerid);
SET session_replication_role = origin;
DO $do$
BEGIN
  IF to_regprocedure('nl.refresh_user_visibility(integer)') IS NOT NULL THEN
    PERFORM nl.refresh_user_visibility({test_user_id});
  ELSE
    RAISE NOTICE 'nl.refresh_user_visibility absent - NL RLS stack not installed; skipping visibility refresh';
  END IF;
END
$do$;
COMMIT;
"""


def link_user(cfg, *, test_user_id: int, on_devbox, logger, raw_dir: Path) -> int:
    """Re-home the synthetic subtree under the user and grant it to their access
    group so the data is visible under RLS. Returns the visible-customer count
    (0 for a truly unrestricted principal - nl.user_is_unrestricted bypasses RLS,
    no grant needed; a merely-listed admin that is not unrestricted IS linked).

    No-ops with a warning when the NL RLS stack is absent: without
    nl.refresh_user_visibility there is no visibility to materialize, and the
    nl_ref/nl reads below would otherwise error. Mirrors the shell seed, which
    guards the same refresh call."""
    if pg_scalar(cfg, "SELECT to_regprocedure('nl.refresh_user_visibility(integer)') IS NOT NULL;",
                 on_devbox=on_devbox, logger=logger) != "t":
        logger.warning("NL RLS stack absent (nl.refresh_user_visibility missing) - skipping "
                       "visibility link for uid=%s.", test_user_id)
        return 0
    # Only a TRULY unrestricted principal bypasses RLS and sees every row without a
    # grant. Per nl.user_is_unrestricted that means: SYSTEM-home customer AND no
    # access-group memberships AND listed in srd_ref.nl_builtin_admin. Being merely
    # LISTED in nl_builtin_admin is NOT enough - such a user is still RLS-scoped, so
    # the old "is in nl_builtin_admin -> skip the grant" was wrong: it left the
    # synthetic data invisible to the measured user (the seeded rows got fully
    # filtered out, every probe a full scan returning ~0). Use the real predicate;
    # link the data whenever the user is not actually unrestricted.
    unrestricted = "f"
    if pg_scalar(cfg, "SELECT to_regprocedure('nl.user_is_unrestricted(integer)') IS NOT NULL;",
                 on_devbox=on_devbox, logger=logger) == "t":
        unrestricted = pg_scalar(cfg, f"SELECT nl.user_is_unrestricted({test_user_id});",
                                 on_devbox=on_devbox, logger=logger)
    if unrestricted == "t":
        logger.info("uid=%s is unrestricted (RLS bypass) - sees all rows; no grant needed.",
                    test_user_id)
        return 0
    is_listed_admin = pg_scalar(cfg, f"SELECT EXISTS(SELECT 1 FROM srd_ref.nl_builtin_admin "
                                f"WHERE userid={test_user_id});", on_devbox=on_devbox, logger=logger) == "t"
    if is_listed_admin:
        logger.warning("uid=%s is listed in nl_builtin_admin but is NOT unrestricted "
                       "(nl.user_is_unrestricted=false - needs a SYSTEM-home customer AND no "
                       "access-group memberships). It is RLS-scoped, so linking the synthetic "
                       "data into its visibility (otherwise the probes measure an empty scope).",
                       test_user_id)
    home = pg_scalar(cfg, f"SELECT customerid FROM luser WHERE userid={test_user_id};",
                     on_devbox=on_devbox, logger=logger)
    if not home.isdigit():
        logger.warning("Could not resolve home customerid for uid=%s; skipping visibility link.",
                       test_user_id)
        return 0
    res = pg_cmd(cfg, _link_sql(int(home), test_user_id), on_devbox=on_devbox, logger=logger)
    (raw_dir / "fake-link.log").write_text(res.stdout + res.stderr, encoding="utf-8")
    vis = pg_scalar(cfg, f"SELECT count(*) FROM nl.nl_visible_customer "
                         f"WHERE user_id={test_user_id} AND customer_id >= {FAKE_BASE};",
                    on_devbox=on_devbox, logger=logger)
    logger.info("Synthetic customers now visible to uid=%s: %s", test_user_id, vis)
    if vis in ("", "0"):
        logger.warning("uid=%s sees 0 synthetic customers - seeded data will not affect "
                       "its RLS-scoped results (check fake-link.log).", test_user_id)
    return int(vis) if vis.isdigit() else 0


def purge(cfg, *, on_devbox, logger, raw_dir: Path, label: str = "fake-purge.log") -> None:
    _seed_or_purge(cfg, "purge-fake-perf-data.sh", f"FAKE_ID_BASE={FAKE_BASE} DB={DB}",
                   on_devbox=on_devbox, logger=logger, log_path=raw_dir / label, action="purge")


# ---- last-resort removal guarantee ------------------------------------------

def count_residue(cfg, *, on_devbox, logger) -> int:
    """Total synthetic rows still present across the seeded tables, scoped by the
    externalid sentinel (same model as 30_counts.sql). -1 if the count can't be read."""
    raw = pg_scalar(
        cfg,
        f"WITH cust AS (SELECT customerid FROM customer WHERE externalid='{FAKE_EXTERNALID}' "
        f"AND customerid >= {FAKE_BASE}), "
        "dev AS (SELECT deviceid FROM device WHERE customerid IN (SELECT customerid FROM cust)) "
        "SELECT (SELECT count(*) FROM cust) "
        "+ (SELECT count(*) FROM device WHERE customerid IN (SELECT customerid FROM cust)) "
        "+ (SELECT count(*) FROM appliance WHERE deviceid IN (SELECT deviceid FROM dev)) "
        "+ (SELECT count(*) FROM appliancetask WHERE deviceid IN (SELECT deviceid FROM dev)) "
        "+ (SELECT count(*) FROM cim_patch WHERE deviceid IN (SELECT deviceid FROM dev)) "
        "+ (SELECT count(*) FROM patchapproval WHERE customerid IN (SELECT customerid FROM cust));",
        on_devbox=on_devbox, logger=logger)
    return int(raw) if raw.lstrip("-").isdigit() else -1


def _force_purge_sql() -> str:
    """Direct child-first scoped DELETEs of all synthetic rows, with NO health/cache
    app-steps (those are what can flake under RLS-install load). nl.nl_visible_*
    rows are cleared first (guarded - only if the schema is present, before the
    customers/devices they reference are gone); session_replication_role=replica
    keeps any visibility triggers from firing during the data deletes."""
    cust = (f"SELECT customerid FROM customer WHERE externalid='{FAKE_EXTERNALID}' "
            f"AND customerid >= {FAKE_BASE}")
    dev = f"SELECT deviceid FROM device WHERE customerid IN ({cust})"
    return f"""DO $$ BEGIN
  IF to_regclass('nl.nl_visible_device') IS NOT NULL THEN
    DELETE FROM nl.nl_visible_device   WHERE device_id   IN ({dev});
    DELETE FROM nl.nl_visible_customer WHERE customer_id IN ({cust});
    DELETE FROM nl.user_assignable_customer WHERE customer_id IN ({cust});
  END IF;
END $$;
SET session_replication_role = replica;
DELETE FROM parameters    WHERE taskid IN (SELECT taskid FROM appliancetask WHERE deviceid IN ({dev}));
DELETE FROM threshold     WHERE taskid IN (SELECT taskid FROM appliancetask WHERE deviceid IN ({dev}));
DELETE FROM appliancetask WHERE deviceid   IN ({dev});
DELETE FROM appliance     WHERE deviceid   IN ({dev});
DELETE FROM cim_patch     WHERE deviceid   IN ({dev});
DELETE FROM patchapproval WHERE customerid IN ({cust});
DELETE FROM device        WHERE customerid IN ({cust});
DELETE FROM customer      WHERE externalid='{FAKE_EXTERNALID}' AND customerid >= {FAKE_BASE};
SET session_replication_role = origin;
"""


def force_purge(cfg, *, on_devbox, logger) -> None:
    """Last-resort direct removal of synthetic data (bypasses the purge script's
    app-steps). Raises on a non-zero remote exit."""
    res = pg_cmd(cfg, _force_purge_sql(), on_devbox=on_devbox, logger=logger)
    if res.returncode != 0:
        raise RuntimeError(f"force-purge failed (exit {res.returncode}): "
                           f"{(res.stderr or res.stdout).strip()[:400]}")


def ensure_purged(cfg, *, on_devbox, logger) -> int:
    """Guarantee no synthetic data remains on exit. Independently counts residue
    (so a purge whose app-steps failed but whose DELETEs succeeded is still
    confirmed clean), force-removes anything left, re-counts, and logs the outcome
    loudly. Returns the final residue (0 = clean, -1 = unverifiable). NEVER raises -
    teardown must not mask the lane result."""
    try:
        residue = count_residue(cfg, on_devbox=on_devbox, logger=logger)
    except Exception as e:  # noqa: BLE001
        logger.error("Could not verify synthetic-data residue - VERIFY MANUALLY "
                     "(livetesting/purge-fake-perf-data.sh): %s", e)
        return -1
    if residue <= 0:
        logger.info("Teardown: confirmed no synthetic data remains (residue=%d).", max(residue, 0))
        return 0
    logger.warning("Teardown: %d synthetic row(s) remain after purge - forcing direct removal.",
                   residue)
    try:
        force_purge(cfg, on_devbox=on_devbox, logger=logger)
        residue = count_residue(cfg, on_devbox=on_devbox, logger=logger)
    except Exception as e:  # noqa: BLE001
        logger.error("CRITICAL: force-purge failed - MANUAL CLEANUP REQUIRED "
                     "(run livetesting/purge-fake-perf-data.sh): %s", e)
        return residue
    if residue == 0:
        logger.info("Teardown: force-purge removed all synthetic data.")
    else:
        logger.error("CRITICAL: %d synthetic row(s) could NOT be removed - MANUAL CLEANUP "
                     "REQUIRED (run livetesting/purge-fake-perf-data.sh).", residue)
    return residue


def delete_access_groups(cfg, *, on_devbox, logger) -> None:
    """Remove the ephemeral access-group linkage (before the row purge, which the
    FK references). session_replication_role=replica skips the visibility fan-out."""
    pg_cmd(cfg, "SET session_replication_role = replica; "
                f"DELETE FROM accessgroupcustomermap WHERE customerid >= {FAKE_BASE}; "
                f"DELETE FROM accessgroupusermap WHERE groupid >= {FAKE_BASE}; "
                f"DELETE FROM accessgroup WHERE groupid >= {FAKE_BASE}; "
                "SET session_replication_role = origin;", on_devbox=on_devbox, logger=logger)


def remove_remote(cfg, *, on_devbox, logger) -> None:
    run_remote(cfg, f"rm -rf {REMOTE_ROOT}", on_devbox=on_devbox, logger=logger)


# ---- high-level opt-in session ---------------------------------------------

@contextlib.contextmanager
def session(cfg, *, run, logger, on_devbox, n_customers, devices_per, patches_per,
            tasks_per=1, link_email: Optional[str] = None):
    """Seed synthetic data (optionally linked to one user's visibility), run the
    enclosed lane, then ALWAYS purge. Assumes the NL RLS stack is already present
    on the target. Raw logs land in ``run.raw_dir``.

    Built-in admin users (BYPASSRLS) see the seeded rows automatically - no access
    group entries are created for them.

    ``link_email`` - when set, fake customers are seeded directly under that user's
    base customer (not under a synthetic SO at SYSTEM level) so RLS scoping works
    without re-parenting.  Access group grants and visibility refresh run after seeding.
    """
    raw = run.raw_dir
    copy_harness(cfg, on_devbox=on_devbox, logger=logger)
    reap_orphans(cfg, on_devbox=on_devbox, logger=logger)
    purge(cfg, on_devbox=on_devbox, logger=logger, raw_dir=raw, label="fake-pre-purge.log")

    uid = None
    parent_cid = None
    if link_email is not None:
        uid = resolve_user(cfg, link_email, on_devbox=on_devbox, logger=logger)
        # Resolve the user's home customer so the seed creates rows under their SO
        # from the start - hierarchy is correct without a subsequent re-parent step.
        home = pg_scalar(cfg, f"SELECT customerid FROM luser WHERE userid={uid};",
                         on_devbox=on_devbox, logger=logger)
        if home.isdigit():
            parent_cid = int(home)
            logger.info("--fake-user mode: seeding under uid=%s home customer %s", uid, parent_cid)
        else:
            logger.warning("Could not resolve home customerid for uid=%s; "
                           "falling back to synthetic SO under SYSTEM", uid)

    # Clamp the requested volume to the box's free INTEGER id space (95% of
    # headroom) BEFORE seeding, telling the user when the request is reduced. On a
    # near-exhausted box this is what lets the run produce data instead of the seed
    # script's int4 guard aborting. The seed's own guard remains a backstop.
    n_customers, devices_per, tasks_per = clamp_volumes(
        cfg, n_customers=n_customers, devices_per=devices_per, patches_per=patches_per,
        tasks_per=tasks_per, on_devbox=on_devbox, logger=logger)

    # Seed (and the optional visibility link) run INSIDE the try so the teardown
    # purge below ALWAYS gets a chance to remove rows. The seed is single-
    # transaction (a pre-commit failure rolls back cleanly and seeds nothing), but
    # post-insert steps - ANALYZE, the visibility refresh, the post-seed health
    # gate - can fail with rows already committed; the finally must still purge.
    try:
        seed(cfg, n_customers=n_customers, devices_per=devices_per, patches_per=patches_per,
             tasks_per=tasks_per, test_user_id=uid, parent_cid=parent_cid,
             on_devbox=on_devbox, logger=logger, raw_dir=raw)
        verify_seed(cfg, n_customers=n_customers, devices_per=devices_per,
                    patches_per=patches_per, tasks_per=tasks_per, parent_cid=parent_cid,
                    on_devbox=on_devbox, logger=logger)

        if uid is not None:
            link_user(cfg, test_user_id=uid, on_devbox=on_devbox, logger=logger, raw_dir=raw)

        yield
    finally:
        logger.info("Tearing down synthetic data (always) ...")
        try:
            delete_access_groups(cfg, on_devbox=on_devbox, logger=logger)
            purge(cfg, on_devbox=on_devbox, logger=logger, raw_dir=raw)
        except Exception as e:  # noqa: BLE001 - teardown must never mask the lane result
            logger.error("FAKE-DATA PURGE FAILED - run livetesting/purge-fake-perf-data.sh "
                         "on the VM manually and verify nko.pl --status + login: %s", e)
        # IMPERATIVE: data created MUST be gone on exit - verify independently and
        # force-remove any residue even if the purge above raised.
        ensure_purged(cfg, on_devbox=on_devbox, logger=logger)
        remove_remote(cfg, on_devbox=on_devbox, logger=logger)


_VOLUME_DEFAULTS = {"customers": 200, "devices_per_customer": 50, "patches_per_device": 20}


@contextlib.contextmanager
def maybe_session(cfg, args, *, run, logger, on_devbox, link_email: Optional[str] = None):
    """``session`` when ``--fake-data`` is set (or any volume flag differs from its default), else a no-op.

    Passing ``--customers``, ``--devices-per-customer``, or ``--patches-per-device`` to a
    non-default value implicitly enables fake-data seeding so callers don't have to combine
    volume flags with an explicit ``--fake-data`` flag.
    """
    volume_implied = any(getattr(args, k, v) != v for k, v in _VOLUME_DEFAULTS.items())
    if not getattr(args, "fake_data", False) and not volume_implied:
        yield
        return
    if volume_implied and not getattr(args, "fake_data", False):
        logger.info("Fake-data seeding activated implicitly (non-default volume flag detected).")
    n, d, p = volumes(args)
    chosen = (args.fake_user or link_email) or None
    with session(cfg, run=run, logger=logger, on_devbox=on_devbox,
                 n_customers=n, devices_per=d, patches_per=p,
                 tasks_per=getattr(args, "tasks_per_device", 1), link_email=chosen):
        yield
