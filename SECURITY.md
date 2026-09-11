# Security

Do not post credentials, customer data, exploit details, or sensitive infrastructure information in public issues or pull requests.

When this repository is published on GitHub, enable private vulnerability reporting in repository settings. Use **Security → Report a vulnerability** for confidential reports. A private reporting address has not yet been supplied; if private reporting is unavailable, open only a nonsensitive request for a private contact channel. Do not disclose vulnerability details publicly while establishing that channel.

Reports should include affected revisions, impact, and minimal reproduction steps without live secrets. No response-time commitment is currently published.

The latest mainline revision is the maintenance target. Dependency updates use Dependabot and CI; review lockfile changes and npm audit findings. Enable GitHub secret scanning and push protection when publishing. No general reuse license is granted.

Secrets, local environment files, credentials, Terraform plans, and state must stay outside Git. Treat all static output and NEXT_PUBLIC variables as public. Ignore rules are a safeguard, not a substitute for review. If a secret is exposed, revoke/rotate it immediately, assess access, then coordinate history cleanup.

Production controls (private S3, OAC, HTTPS, response headers, scoped OIDC deployment roles) are planned, not deployed. See docs/architecture/overview.md and docs/runbooks/production-readiness.md.
