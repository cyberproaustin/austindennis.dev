# Roadmap

Updated September 12, 2026. The site is live on AWS, GitHub CI and manual OIDC delivery are working, and the certifications feature is merged. The owner is reviewing mobile and accessibility behavior.

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
- [x] Add 26 owner-supplied credentials, split into 3 expert, 10 other current-focus, and 13 collapsed background entries on Expertise, with three featured certifications on the homepage. Exclude the expired Tenable MSSP and Thinkful entries.
- [x] Add 24 direct credential links supplied by the owner.
- Tenable Cloud Security Administrator and Linux Essentials intentionally have no verification links; the owner has none to supply.
- [x] Complete About with the owner’s security education, AI-assisted development motivation, Bank Vault Academy mission, and operational experience.
- [x] Update AWS experience copy and documentation to reflect the deployed platform.
- [ ] Add a public email link only if requested; Git author configuration is separate.
- [ ] Publish the first technical article.
- [ ] Keep case studies aligned with future implementation and release changes.

## Publication and operations

- [x] Publish the repository at `cyberproaustin/austindennis.dev` and verify GitHub CI.
- [x] Enable GitHub private vulnerability reporting (owner-confirmed).
- [ ] Confirm available secret-scanning/push-protection features, branch protection, and required CI checks.
- [ ] Complete dedicated keyboard, mobile viewport, and automated accessibility checks. Owner review is in progress.

## AWS platform

- [x] Establish account, IAM Identity Center access, region, resource tags, and DNS ownership.
- [x] Configure the USD 50 monthly account budget, as confirmed by the owner.
- [ ] Activate the project cost allocation tag and confirm the USD 5 monthly project budget.
- [x] Bootstrap encrypted/versioned S3 state with native locking.
- [x] Deploy private S3, CloudFront/OAC, Route 53, and ACM.
- [x] Verify deployed nested routes, redirects, true 404s, and baseline security headers.
- [x] Add scoped OIDC delivery with ordered uploads, retained artifacts, and invalidation.
- [x] Document deployed architecture and the owner-operated infrastructure/release workflow.
- [ ] Record separate Terraform/state, account, OIDC, and security-header decision records.
- [ ] Validate caching across releases and develop a stricter script CSP.
- [ ] Implement and test rollback; document state and DNS recovery.
- [ ] Define cleanup of old assets and removed pages.
- [ ] Add appropriate uptime/error monitoring and logging retention.

## Maintenance

- [ ] Upgrade ESLint 9 after the Next.js React lint plugin supports ESLint 10.
- [ ] Revisit TypeScript 7 when the lint toolchain supports it. Keep Node type definitions aligned with the Node 24 runtime.

## Only when justified

- [ ] API Gateway/Lambda/SES contact workflow with validation and abuse controls.
- [ ] Persistence only if a feature needs it. No speculative DynamoDB or persistent application compute.
