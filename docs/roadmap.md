# Roadmap

Updated at the close of the September 10–11, 2026 session. The initial local milestone is committed as `1c63214`; Austin has reviewed the site. GitHub publication and AWS deployment remain pending.

## Local milestone

- [x] Inspect local tooling and preserve the existing Git repository.
- [x] Build static Next.js pages and reusable case studies.
- [x] Refine the design with open layouts, restrained styling, and personal copy.
- [x] Organize application code under `src/` and remove the duplicate headshot.
- [x] Model certifications without inventing credentials.
- [x] Add Git-maintained Markdown with draft gating.
- [x] Configure quality scripts, focused tests, CI, and dependency updates.
- [x] Document architecture, ADR-001, security, and a no-resource Terraform foundation.
- [x] Pass local lint, formatting, type checking, seven tests, and production export.
- [x] Validate both Terraform foundations without credentials or deployment.
- [x] Verify local routes, true 404 handling, exported links, and case-study anchors.
- [x] Review candidate files for credential patterns and exclude generated artifacts.
- [x] Record the no-em-dash rule and visual direction in project instructions.
- [x] Complete owner site review.
- [x] Create the first commit using the repository-specific author email.

## Content

- [x] Add the headshot, GitHub links, LinkedIn contact, and public Bank Vault Academy link.
- [x] Complete TerraLift’s source-backed case study with implementation limits.
- [x] Complete the SAST engine case study and proposed DevSecOps platform roadmap.
- [x] Complete Bank Vault Academy’s public-safe case study, including solo ownership and real users.
- [x] Add 26 owner-supplied credentials, grouped on Expertise, with three featured certifications on the homepage. Exclude the expired Tenable MSSP and Thinkful entries.
- [x] Add 24 direct credential links supplied by the owner.
- [ ] Add verification URLs for Tenable Cloud Security Administrator and Linux Essentials if available.
- [ ] Add further biography when supplied.
- [ ] Add a public email link only if requested; Git author configuration is separate.
- [ ] Publish the first technical article.
- [ ] Keep case studies aligned with future implementation and release changes.

## Next session: publication readiness

- [ ] Create the austindennis-dev GitHub remote and push the local history.
- [ ] Enable private security reporting, available secret-scanning/push-protection features, branch protection, and required CI checks.
- [ ] Verify CI passes on GitHub.
- [ ] Complete dedicated keyboard, mobile viewport, and automated accessibility checks. Owner review is complete; those specific checks have not been recorded.

## AWS platform milestone (explicit approval required)

- [ ] Agree account structure, budgets, naming, DNS ownership, and recovery.
- [ ] Record Terraform, OIDC, account, and security-header ADRs.
- [ ] Bootstrap S3 state with native locking.
- [ ] Implement and test private S3 + CloudFront/OAC + Route 53 + ACM.
- [ ] Verify nested routes, 404s, CSP/headers, cache behavior, and accessibility on the deployed site.
- [ ] Add least-privilege OIDC delivery with retained releases and rollback.
- [ ] Add budgets, monitoring, and operating runbooks.

## Maintenance

- [ ] Upgrade ESLint 9 after the Next.js React lint plugin supports ESLint 10.

## Only when justified

- [ ] API Gateway/Lambda/SES contact workflow with validation and abuse controls.
- [ ] Persistence only if a feature needs it. No speculative DynamoDB or persistent application compute.
