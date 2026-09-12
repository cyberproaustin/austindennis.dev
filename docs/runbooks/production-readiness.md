# Production checks and follow-ups

The site is live. The owner controls Terraform applies and manual GitHub Actions releases. This checklist records remaining work rather than authorizing a deployment.

## Established

- [x] Publish the repository at `cyberproaustin/austindennis.dev` and pass GitHub CI.
- [x] Configure IAM Identity Center access and encrypted/versioned S3 state with native locking.
- [x] Deploy private S3, CloudFront/OAC, ACM, and Route 53 DNS.
- [x] Publish through scoped GitHub OIDC credentials and ordered uploads.
- [x] Verify the domain, redirects, nested routes, true 404 status, and baseline response headers.
- [x] Configure the USD 50 account budget, as confirmed by the owner.

## Remaining

- [ ] Confirm the USD 5 project budget after cost allocation tag activation.
- [ ] Confirm private security reporting, available secret scanning/push protection, branch protection, and required CI checks.
- [ ] Verify keyboard navigation, mobile layouts, automated accessibility, link integrity, metadata, and performance on the deployed site.
- [ ] Test cache behavior across a release, including client navigation and previously loaded pages.
- [ ] Design and test a stricter script CSP against the static export.
- [ ] Test rollback from a retained artifact and document recovery for state and DNS.
- [ ] Define safe cleanup for obsolete site objects, including removed routes.
- [ ] Establish uptime/error monitoring and appropriate logging retention.

## After each site release

Run **Deploy portfolio** on `main` and confirm both jobs succeed. Check the homepage and a nested project URL directly, exercise client navigation, and confirm an unknown URL returns HTTP 404. Inspect the browser console for hydration or blocked-resource errors. Pushing a commit alone does not publish the site.

See the [infrastructure guide](../../infrastructure/README.md) for variables, authentication, retention, and Terraform operations. A rollback workflow is not implemented yet; retained artifacts alone do not establish a tested recovery process.
