FROM alpine

RUN apk add curl

COPY smoke-test.sh smoke-test.sh

CMD ["sh", "smoke-test.sh", "http://app:3000"]

# ================ ARNICA SECURITY ANNOTATION BLOCK START ================
LABEL org.opencontainers.image.source="https://github.com/shellykatz-test/juice-shop"
LABEL org.opencontainers.image.path="test/smoke/Dockerfile"
# These automated labels, added by the security team, enhance traceability and security.
# For more details, see: https://docs.arnica.io/arnica-documentation/developers/adding-oci-tags-to-docker-images.
# To exclude this file, please replace this change with: #test-mock-unreal-token-\d+ followed by the dismissal reason.
# ================ ARNICA SECURITY ANNOTATION BLOCK END ================
