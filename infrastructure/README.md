# AWS infrastructure

The portfolio is deployed in account `521595302924`, primarily in `us-east-1`. Development stays local; `environments/dev` only declares Terraform compatibility.

## Production resources

`environments/prod` manages the private, versioned site bucket, CloudFront distribution and OAC, routing function, response headers, Route 53 zone and aliases, ACM certificate and validation records, resource group, and GitHub OIDC provider and deployment role. GoDaddy remains the registrar; DNS is delegated to Route 53.

Default tags are `Project=austindennis-dev`, `Environment=prod`, and `ManagedBy=Terraform`. The resource group selects project resources; it is not an Azure-style lifecycle or permission boundary.

The state bucket `austindennis-dev-tfstate-521595302924` was bootstrapped separately. It uses encryption and versioning. The production backend uses key `portfolio/prod/terraform.tfstate` and native S3 locking (`use_lockfile = true`), without DynamoDB. It is not managed by this production configuration. Keep state, saved plans, credentials, and real variable files outside Git. Commit the provider lockfile.

## Owner-operated Terraform workflow

Use the IAM Identity Center profile `portfolio-admin`:

```sh
aws sso login --profile portfolio-admin
export AWS_PROFILE=portfolio-admin
aws sts get-caller-identity
terraform fmt -check -recursive infrastructure
terraform -chdir=infrastructure/environments/prod init
terraform -chdir=infrastructure/environments/prod validate
terraform -chdir=infrastructure/environments/prod plan
```

Confirm the account and review the plan before running `terraform -chdir=infrastructure/environments/prod apply`. Infrastructure changes are separate from site publication. A production init uses the remote backend and needs AWS access; local application builds do not.

## Site delivery

Run **Deploy portfolio** from GitHub Actions on `main` after merging and reviewing changes. The workflow is manual, not push-triggered. It builds and checks the export, then authenticates through OIDC. Configure these repository variables:

| Variable                     | Value                                                           |
| ---------------------------- | --------------------------------------------------------------- |
| `AWS_DEPLOY_ROLE_ARN`        | `arn:aws:iam::521595302924:role/austindennis-dev-github-deploy` |
| `SITE_BUCKET`                | `austindennis-dev-site-521595302924`                            |
| `CLOUDFRONT_DISTRIBUTION_ID` | `E70OXMXYVQOS3`                                                 |

Trust is restricted to the repository's immutable owner/repository IDs and `refs/heads/main`. The role can publish site objects and invalidate this distribution; it cannot administer infrastructure or access Terraform state. No static AWS keys are configured in the workflow.

Hashed assets upload first with one-year immutable caching. Supporting files, including route payloads, and then HTML use revalidation. CloudFront invalidation runs last and the workflow waits for completion. This is an ordered upload, not an atomic release switch.

GitHub build artifacts are retained for 14 days. S3 noncurrent object versions expire after 30 days; incomplete multipart uploads are removed after one day. The workflow does not delete old objects, so old hashed assets and removed pages can remain. A tested rollback procedure and safe cleanup policy are still pending.

## Budgets and operations

The owner confirmed a USD 50 monthly account budget with notifications to `cyberproaustin@gmail.com`. Planned thresholds are actual spend at 50%, 80%, and 100%, plus forecast spend at 100%.

The USD 5 monthly project budget remains unconfirmed, pending activation of the cost allocation tag `Project=austindennis-dev`. The account budget includes the portfolio and covers charges outside the project tag filter. Budgets are notifications, not spending caps. These budgets are configured separately from the Terraform resources in this repository.

Dedicated uptime/error monitoring, logging retention, and recovery drills remain pending. See the [production checklist](../docs/runbooks/production-readiness.md) and [roadmap](../docs/roadmap.md).
