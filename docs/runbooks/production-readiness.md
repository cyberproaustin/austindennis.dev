# Production readiness

AWS deployment requires explicit owner approval. This checklist is not an authorization to deploy.

1. Supply verified contact details, certifications if desired, and approved project narratives. Review every public artifact and remove confidential material.
2. Create the GitHub remote named austindennis-dev; enable private security reporting, secret scanning/push protection, branch protection, and required CI. Confirm the protected default branch.
3. Agree AWS account boundaries, budget, region, DNS ownership, recovery contacts, and access model; document decisions.
4. Bootstrap encrypted/versioned S3 state with native locking and restricted roles. Confirm state recovery.
5. Implement and review Terraform for the static architecture; review the plan privately before applying.
6. Verify certificate/DNS, OAC-only access, blocked public S3, HTTPS, directory routing, asset/RSC requests, true 404 status, security headers, and CSP.
7. Add OIDC delivery with protected environment approval and narrowly scoped trust/permissions. Never use access keys in GitHub.
8. Test upload ordering, caching, invalidation, release rollback, and recovery with a retained prior artifact. Establish budget/availability alerts and logging retention.
9. Check keyboard navigation, mobile layouts, automated accessibility, link integrity, metadata, and performance on the deployed site.
