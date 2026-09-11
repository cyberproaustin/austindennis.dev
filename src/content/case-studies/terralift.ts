const source =
  "https://github.com/cyberproaustin/terralift/blob/e9ed63a9582c9cd96a5f10de6d126814bd3111b5";

export const terraliftSections = {
  Problem: `Existing cloud environments often grow through console changes, scripts, and multiple provisioning tools. Moving them into Terraform requires more than writing resource blocks: import IDs must be correct, dependencies must be represented, and the configuration must match what is already running.

TerraLift addresses that adoption step. Its goal is to capture existing infrastructure for review and import, while making unsupported resources and configuration drift visible. It does not assume that a generated repository is automatically safe to apply.`,

  Architecture: `TerraLift is a Go CLI built with Cobra. A shared provider interface separates cloud-specific discovery and export from the common processing pipeline.

1. **Preflight:** inspect tool dependencies, authentication, and the requested cloud scope.
2. **Enumerate:** collect resources into a cloud-neutral inventory, including IAM and public-exposure information where available.
3. **Export:** derive Terraform addresses and import IDs, then generate and curate resource configuration.
4. **Reconcile:** replace literal resource IDs with Terraform references, organize stacks, and produce coverage and security reports.
5. **Correctness:** validate generated stacks and, in import mode, inspect Terraform plan JSON for unchanged resources and drift.
6. **Package:** assemble the generated repository and reports into a ZIP for handoff.

AWS discovery uses Resource Explorer with supplemental service queries. GCP uses Cloud Asset Inventory. Azure uses Resource Graph. AWS and GCP generate configuration through Terraform; Azure uses aztfexport. All three feed the shared reconciliation, correctness, and packaging code.

[Provider interface](${source}/internal/provider/provider.go) · [Shared pipeline](${source}/internal/pipeline/pipeline.go)`,

  "Design decisions": `**Adopt first, refactor later.** The generated repository uses one live stack per container, such as a region, resource group, or project. It deliberately avoids extracting shared modules during onboarding. Mirroring the current environment keeps adoption easier to inspect; module design can follow as a separate change.

**Preserve real dependencies.** Literal cloud identifiers are rewritten to Terraform expressions where a matching resource is available. The reference must use the right attribute, such as an ID, self-link, or service-account email.

**Measure coverage and correctness separately.** Capturing a resource does not prove its configuration is correct. Coverage distinguishes exported resources, intentional exclusions, and gaps. Plan inspection separately records unchanged resources, drift, and failed stacks.

**Keep cloud differences explicit.** Shared interfaces reduce repetition without forcing every cloud to use the same discovery API or export mechanism.`,

  Infrastructure: `The output is a Terraform repository under \`repo/live/<container>/\`, with resource configuration, import blocks, provider configuration, and backend templates. IAM configuration is authored separately where applicable.

For Azure, TerraLift derives import blocks from the exporter’s local state rather than shipping that state as part of the generated repository. The resulting adoption workflow uses import blocks across all three clouds.

Onboard mode targets existing resources. Clone mode removes import blocks and parameterizes selected scope attributes for a new environment. Cloning still requires review of embedded source identifiers, secrets, application artifacts, service identities, and target-cloud constraints. Infrastructure configuration alone is not a full application backup.

[Output layout and modes](${source}/README.md)`,

  Security: `The intended scope is resource configuration, rather than copying database rows or object contents. That boundary does not make the output secret-free: application settings and environment variables can contain credentials returned through control-plane APIs.

TerraLift preserves application configuration because deleting it can break the migrated application. Suspected secrets in those settings are flagged for operator review. Narrowly defined secret attributes, such as standalone passwords and private keys, receive separate redaction treatment. Reports identify what needs review or replacement.

This is an explicit migration tradeoff. Generated files must be reviewed before committing or sharing them, and real secrets should be moved into an appropriate managed store. Hygiene reports also highlight public exposure and privileged access based on the collected inventory.

[Secret-handling decision](${source}/docs/DESIGN-DECISIONS.md) · [Configuration scanner](${source}/internal/reconcile/secrets_review.go)`,

  "CI/CD": `TerraLift’s GitHub Actions workflow checks Go formatting, runs \`go vet\`, builds the project, and runs \`go test ./...\` on pushes and pull requests. The tests cover behavior including import IDs, resource classification, configuration rewriting, secret handling, and report generation.

The generated Terraform repository also includes cloud-specific CI and backend starter templates. AWS uses an S3 backend template with native locking and OIDC-oriented authentication; GCP uses GCS with Workload Identity Federation support. These are starting points that require environment-specific identity, state, stack selection, and workflow configuration, not a deployed delivery system.

[Project CI](${source}/.github/workflows/ci.yml) · [AWS templates](${source}/internal/providers/aws/aws.go) · [GCP templates](${source}/internal/providers/gcp/gcp.go)`,

  Reliability: `Correctness checks run in temporary copies without the generated remote backend. In import mode, the pipeline reads Terraform plan JSON and distinguishes unchanged managed resources from changes. HCL-only mode does not perform the import round-trip check.

**Current limitation:** failed stacks and drift are recorded in reports, but the correctness phase returns success and packaging can continue. An empty or incomplete run is not proof of a successful migration. Operators need to inspect coverage, schema diagnostics, and correctness reports before adoption.

The repository contains live integration tests that create cloud fixtures, run onboarding, check the results, and tear down the fixtures. They are opt-in because they need credentials and provision billable resources. During the September 2026 local review, \`go test ./...\` passed; live cloud integration tests were not run. That result establishes local test success, not universal resource coverage or production reliability.

[Correctness implementation](${source}/internal/pipeline/pipeline.go#L297) · [Live test scope](${source}/test/integration/doc.go)`,

  Observability: `For this CLI, observability centers on understanding a run and inspecting its artifacts. Logs include UTC timestamps, severity, and pipeline phase, and are written to stderr. The logger serializes concurrent writes so messages do not interleave.

JSON and Markdown reports capture coverage gaps, drift, failed stacks, schema errors, suspected secrets, redactions, and exposure findings. Inventory is also persisted as JSON. These artifacts help an operator trace what was captured, what was changed, and what still needs attention.

[Logger](${source}/internal/core/logger.go) · [Report generation](${source}/internal/pipeline/pipeline.go)`,

  "Lessons learned": `The implementation illustrates three lessons that matter beyond infrastructure import:

- **Generation needs verification.** Syntactically valid Terraform can still be incomplete or propose unwanted changes. Discovery coverage and plan behavior answer different questions.
- **Security controls need migration context.** Removing a suspected secret can also remove required application configuration. Preserving, flagging, and selectively redacting are different operations with different consequences.
- **Abstractions should follow real differences.** Cloud APIs, import identifiers, and generated provider defaults vary. Shared processing is useful where the behavior truly overlaps; provider-specific rules remain necessary.

These are conclusions supported by the code and design record. Adoption metrics, time savings, and production outcomes have not been supplied.`,

  Roadmap: `The documented v2 direction prioritizes reusable export and curation helpers, broader coverage within AWS, Azure, and GCP, and more live validation before expanding to additional providers.

Some groundwork already exists in the reviewed code, including shared enumeration helpers and provider capability declarations. The roadmap’s unchecked items should therefore be read as planning notes, not an exact inventory of missing implementation.

Additional clouds and SaaS providers are future directions. No support for those providers is claimed here.

[Development roadmap](${source}/V2-ROADMAP.md)`,
};
