# Security

Do not post credentials, customer data, exploit details, or sensitive infrastructure information in public issues or pull requests.

Private vulnerability reporting is enabled for this repository. Use [Report a vulnerability](https://github.com/cyberproaustin/austindennis.dev/security/advisories/new), or open **Security → Report a vulnerability** on GitHub, to submit a confidential report. If that channel is unavailable, open only a nonsensitive request for a private contact channel. Do not disclose vulnerability details publicly while establishing that channel.

Reports should include affected revisions, impact, and minimal reproduction steps without live secrets. No response-time commitment is currently published.

The latest mainline revision is the maintenance target. Dependency updates use Dependabot and CI; review lockfile changes and npm audit findings. Configuration of available GitHub secret scanning, push protection, branch protection, and required CI checks still needs confirmation. No general reuse license is granted.

Secrets, local environment files, credentials, Terraform plans, and state must stay outside Git. Treat all static output and NEXT_PUBLIC variables as public. Ignore rules are a safeguard, not a substitute for review. If a secret is exposed, revoke/rotate it immediately, assess access, then coordinate history cleanup.

Production uses private S3 behind CloudFront with Origin Access Control, HTTPS, and response security headers. Manual GitHub Actions deployments use short-lived OIDC credentials with trust restricted to this repository and the main branch. The deployment role is scoped to the site bucket and distribution, without Terraform state access.

The current Content Security Policy restricts framing, object embedding, and base URLs; it does not restrict scripts. A stricter script policy, tested rollback, obsolete-object cleanup, and monitoring remain follow-ups. See the [architecture overview](docs/architecture/overview.md) and [production checklist](docs/runbooks/production-readiness.md).
