# Roadmap

## Local milestone

- [x] Inspect local tooling and preserve the existing Git repository.
- [x] Build static Next.js pages, a responsive design system, and reusable case studies.
- [x] Model certifications without inventing credentials.
- [x] Add Git-maintained Markdown with draft gating.
- [x] Configure quality scripts, focused tests, CI, and dependency updates.
- [x] Document architecture, ADR-001, security, and a no-resource Terraform foundation.
- [x] Pass local lint, formatting, type checking, six tests, production export, Terraform validation, and HTTP smoke checks.
- [ ] Complete browser visual and keyboard review (browser integration unavailable; macOS computer-use permissions pending).

## Content and publication

- [ ] Supply a verified contact address and profile/source URLs.
- [ ] Supply certification records, additional biography, and reviewed case-study evidence.
- [ ] Publish the first technical article.
- [ ] Create the austindennis-dev GitHub remote and enable repository security controls.

## AWS platform milestone (explicit approval required)

- [ ] Agree account structure, budgets, naming, DNS ownership, and recovery.
- [ ] Record Terraform, OIDC, account, and security-header ADRs.
- [ ] Bootstrap S3 state with native locking.
- [ ] Implement and test private S3 + CloudFront/OAC + Route 53 + ACM.
- [ ] Verify nested routes, 404s, CSP/headers, cache behavior, and accessibility.
- [ ] Add least-privilege OIDC delivery with retained releases and rollback.
- [ ] Add budgets, monitoring, and operating runbooks.

## Maintenance

- [ ] Upgrade ESLint 9 after the Next.js React lint plugin supports ESLint 10.

## Only when justified

- [ ] API Gateway/Lambda/SES contact workflow with validation and abuse controls.
- [ ] Persistence only if a feature needs it. No speculative DynamoDB or persistent application compute.
