# Architecture overview

Status: deployed at https://austindennis.dev. Infrastructure is managed with Terraform; site releases run through a manual GitHub Actions workflow.

Next.js exports HTML, CSS, JavaScript, route payloads, and metadata into `out/`. Public routes are generated at build time. There is no production Node server, application database, or runtime API. Development stays local.

## Hosting and routing

Route 53 resolves the apex and www names to CloudFront. ACM supplies the certificate in `us-east-1`. CloudFront signs origin requests through OAC to a private S3 REST endpoint. Public access is blocked, ownership is bucket-enforced, and the bucket policy requires TLS and scopes CloudFront read access to the distribution.

CloudFront redirects HTTP to HTTPS. A viewer-request function redirects www to the apex and extensionless paths to trailing slashes, preserving query strings. Directory requests resolve to `index.html`; asset and RSC file paths remain intact. Origin 403 and 404 responses use the exported `/404.html` with HTTP 404. The owner verified deployed nested routes, redirects, and unknown-route status.

## Delivery and caching

The manual workflow runs on `main`, checks and builds the application, and uploads a retained build artifact. The deploy job obtains short-lived credentials through GitHub OIDC and a scoped IAM role. Trust checks the audience and exact subject containing the owner/repository IDs and main branch. The role has site publishing and distribution invalidation permissions, without infrastructure or state administration.

Hashed assets upload first with immutable one-year caching. Supporting files and HTML use `max-age=0,must-revalidate`; HTML uploads last. The cache policy permits zero TTL. A full invalidation follows publication and the workflow waits for completion.

Uploads are not atomic. Artifacts are retained for 14 days and noncurrent S3 versions for 30 days. Old objects are not deleted during deployment. Tested rollback and cleanup of obsolete objects remain follow-ups.

## HTTP security headers

CloudFront supplies HSTS, nosniff, frame denial, a strict-origin-when-cross-origin referrer policy, and a Permissions-Policy disabling camera, microphone, and geolocation. The current CSP is deliberately limited to `base-uri 'self'; object-src 'none'; frame-ancestors 'none';`.

Script restrictions are not implemented. A stricter CSP needs inspection of the generated inline Next.js scripts and validation of hydration and navigation. Static export cannot supply per-request nonces. Do not describe the baseline policy as comprehensive script protection.

## State and operations

Production state uses a separately bootstrapped encrypted, versioned S3 bucket with native locking. The owner administers infrastructure through IAM Identity Center and applies Terraform separately from content releases. Development has no AWS resources.

A USD 50 account budget is owner-confirmed; the USD 5 tag-filtered project budget still needs confirmation. Monitoring, recovery drills, repository protections, and dedicated accessibility checks are tracked in the [roadmap](../roadmap.md). See the [infrastructure guide](../../infrastructure/README.md) for operational details and [ADR-001](../adr/ADR-001-static-hosting.md) for the hosting decision.

## Future backend

A contact endpoint may eventually use API Gateway, Lambda, and SES if needed. Validation, abuse controls, and retention must be designed before collecting data. Persistence or continuously running compute requires a concrete feature need.
