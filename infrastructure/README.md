# Terraform foundation

## Agreed deployment settings

- Budget notification email: `cyberproaustin@gmail.com`.
- Monthly portfolio budget: USD 5, filtered by the activated cost allocation tag `Project=austindennis-dev` across regions.
- Monthly account budget: USD 50, covering all account spending, including the portfolio.
- Planned actual-spend notifications: 50%, 80%, and 100% of each budget, plus a forecast notification at 100%.
- Budgets notify about spending; they do not enforce spending caps. Untagged and unallocated charges remain covered by the account budget.
- AWS account and authentication are pending. No budgets have been created yet.
- Proposed deployment region: `us-east-1`, with development kept local initially.

## Current implementation

No AWS resources, providers, or backend are configured. Both environments only declare Terraform compatibility. This is intentionally a no-op foundation, not production infrastructure.

```sh
terraform fmt -check -recursive infrastructure
terraform -chdir=infrastructure/environments/dev init -backend=false
terraform -chdir=infrastructure/environments/dev validate
terraform -chdir=infrastructure/environments/prod init -backend=false
terraform -chdir=infrastructure/environments/prod validate
```

These commands require no AWS credentials. Do not apply or configure remote state until account, region, budget, naming, and ownership are agreed. Future state uses an encrypted versioned S3 bucket with native locking, bootstrapped independently. Add the AWS provider and its committed lockfile only when implementing real resources. Keep dev/prod state and permissions isolated; a dev AWS environment is optional if local previews suffice.

Introduce modules when a coherent reusable boundary exists. There are no placeholder resource modules. Planned scope is Route 53, ACM, private S3, CloudFront/OAC, security headers, IAM/OIDC, and appropriate monitoring. Contact services remain deferred.
