# ADR-001: Static Next.js hosting with CloudFront and private S3

- Status: Accepted for implementation; AWS deployment deferred
- Date: 2026-09-10

## Context

The initial workload is a public portfolio with project case studies and Git-maintained writing. It requires neither per-request computation nor authenticated user state. The project should demonstrate secure cloud engineering at low operational cost.

## Decision

Export Next.js App Router pages at build time and serve them through CloudFront from a private S3 REST origin using OAC. Manage future AWS infrastructure in Terraform. Keep the initial milestone entirely local.

## Alternatives considered

- Persistent Node.js on EC2, ECS, or EKS: supports runtime rendering, but adds patching, scaling, and cost without a workload need.
- Managed Next.js hosting: reduces setup effort, but does not meet the intended AWS infrastructure learning focus as directly.
- S3 public website hosting: simple, but conflicts with the private origin requirement.
- Plain HTML or another static site generator: viable, but Next.js meets the selected stack and allows reusable React components.

## Consequences

Low runtime complexity and globally cacheable output. Content changes require a build. Server actions, ISR, runtime authentication, and the default image optimization server are unavailable. Directory URL routing, correct 404s, caching, response headers, and CSP need deliberate CloudFront configuration. Future dynamic capabilities must be separate services or trigger a new hosting decision.

## Future considerations

Record separate ADRs for Terraform/state bootstrap, AWS account boundaries, OIDC trust, security headers, and any serverless backend. Revisit hosting when an actual feature requires runtime rendering, not for architectural appearance.
