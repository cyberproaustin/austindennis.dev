const source =
  "https://github.com/cyberproaustin/sast-engine/blob/818e04581f72b16c20b34b6bcd116c04fc6eb6dd";

export const devsecopsSections = {
  Problem: `A security check only helps a delivery team if its findings are understandable and worth investigating. A source-code pattern can look dangerous while a framework or application control makes it safe. Conversely, an authenticated route can still lack an ownership check.

The SAST engine explores how to produce findings with reviewable evidence, explicit assumptions, and a clear account of what was analyzed. It is the first implemented component of a planned DevSecOps platform. SCA, dedicated secret scanning, infrastructure scanning, container security, and centralized orchestration are not implemented platform capabilities in this case study.`,

  Architecture: `Language-specific frontends turn source code into a shared Program intermediate representation, or IR. The TypeScript/JavaScript frontend uses the TypeScript compiler, while the Python frontend uses Python’s standard-library AST. A Go core consumes the IR rather than parsing each source language itself.

1. **Lower the source:** represent functions, values, calls, entry points, and supported control-flow information. Frontends declare the capabilities they provide.
2. **Model the application:** enumerate the exposed surface and associated controls using framework models and team declarations.
3. **Analyze behavior:** follow classified values into modeled destinations and evaluate policies, alongside analyses of control expectations and other supported code properties.
4. **Explain the results:** emit text or SARIF findings with locations, evidence, confidence, and coverage information.
5. **Apply delivery policy:** account for baselines and changed-file scope when deciding which findings should fail a run.

Express and Flask are examples of supported framework modeling. Two language frontends do not imply complete coverage of every framework or language feature.

[IR contract](${source}/docs/IR.md) · [Analysis orchestration](${source}/core/internal/scan/scan.go)`,

  "Design decisions": `**Make the IR the boundary.** Frontends describe program semantics; the core performs security analysis. This allows shared policies to operate across languages while keeping differences in frontend capability visible.

**Describe the reasoning.** Models classify values and describe destination channels. Policies express which combinations are unsafe or require a relationship, such as relating a caller-selected record to the caller’s identity. A finding should explain the violated condition rather than merely name a matched pattern.

**Distinguish inference from declared intent.** A route that differs from its peers can merit investigation without proving a defect. Inferred control expectations are advisory. Team declarations provide explicit application facts and require a rationale.

**Keep historical findings visible.** A baseline records known findings so they do not keep blocking adoption. Those findings remain in the report. Recording history is different from declaring that behavior is safe.

[Architecture and policy decisions](${source}/docs/DESIGN-DECISIONS.md)`,

  Infrastructure: `The implemented system runs as local processes: a frontend produces IR, and the Go core analyzes it. The CLI supports scanning a directory or consuming an existing IR document. The TypeScript frontend requires Node.js and its compiler dependency; the Python frontend uses the standard library.

No hosted control plane, multi-tenant service, or production AWS deployment is established by this repository. A delivery runner can execute the scanner, but a platform around those runs remains future work.

A future service would need explicit decisions about job isolation, repository access, artifact retention, and identity. Containerized workers may become useful for isolation and reproducibility. Kubernetes would require a demonstrated orchestration need, not simply the presence of security scans.

[CLI entry point](${source}/core/cmd/sast/main.go) · [Local workflow](${source}/Makefile)`,

  Security: `Implemented analyses include source-to-sink reasoning, such as untrusted input reaching a shell operation, and checks involving exposed data and access-control expectations. Sanitizer treatment depends on the destination context: a transformation suitable for one channel is not automatically adequate for another.

The distinction between authentication and authorization matters. A route can require login and still act on a caller-selected record without relating that record to the caller. Framework and application semantics are necessary to assess that behavior; route names alone are insufficient evidence.

**Current boundary:** this is an early static analyzer, not proof that an application is secure or a replacement for an established scanner and human review. Unmodeled behavior and incomplete resolution limit the claims it can make. Future platform integrations must also treat source repositories and scan artifacts as sensitive inputs.

[Implemented scope and limits](${source}/README.md) · [Policy declarations](${source}/core/internal/policy/policy.go)`,

  "CI/CD": `The CLI already exposes delivery-oriented controls:

- **Baselines:** keep known findings in reports while excluding them from normal gating.
- **Changed-file scope:** limit gating to findings that touch the supplied change set. This scopes the decision, not necessarily the analysis workload.
- **Evidence and confidence:** default gating considers whether a finding is actionable, new, and in scope.
- **Interoperable output:** SARIF carries findings and supporting evidence for downstream consumers.

Exit codes distinguish a run with no gating findings, a run with gating findings, an error, and analysis that was not applicable. Pipeline integration must preserve those distinctions instead of treating every non-finding result as a clean scan.

The repo provides Makefile workflows for testing and fixture scans. The reviewed checkout does not include a GitHub Actions workflow. Automated pull-request execution, report upload, and protected policy changes are proposed next steps, not a deployed integration.

[CLI flags and exit codes](${source}/core/cmd/sast/main.go) · [Gating logic](${source}/core/internal/scan/scan.go)`,

  Reliability: `Tests exercise the Go core with checked-in IR fixtures and expected results, including evidence, ownership reasoning, baselines, reporting, and coverage behavior. During the September 2026 local review, \`go test ./... -count=1\` passed in \`core/\`.

That check did not regenerate every frontend fixture or repeat the repository’s external application evaluations. It validates the core test suite at the reviewed revision, not end-to-end accuracy on an arbitrary codebase.

The project documents a broader evaluation process that compares scanner output with independent review of real applications and feeds adjudicated results back into regression cases. Those reported measurements remain separate from the checks repeated for this case study. No blanket precision, recall, or production-readiness claim is made here.

[Evaluation process](${source}/docs/review-loop.md) · [Test workflow](${source}/Makefile)`,

  Observability: `The report makes the modeled application visible as well as the findings. Entry points, associated controls, evidence paths, and analysis limitations help a reviewer judge whether the scanner understood the application sufficiently to support its conclusions.

Coverage reporting distinguishes evaluated assertions from work that was skipped, not built, or outside the analyzer’s reach. Finding fingerprints support baseline tracking, while SARIF provides a machine-readable interface for other systems.

For a future platform, operational telemetry would answer a different set of questions: which jobs completed, which failed, how long they took, which tool and policy versions ran, and whether artifacts were delivered. That job-level monitoring is proposed platform work.

[Text reporting](${source}/core/internal/report/text.go) · [SARIF reporting](${source}/core/internal/report/sarif.go)`,

  "Lessons learned": `The design and evaluation records support several lessons:

- **A missing finding can mean missing analysis.** Capability and coverage reporting must make that distinguishable from a successful check.
- **Context matters as much as propagation.** Following a value is only useful if the model understands the framework control or destination it reaches.
- **Adoption needs a manageable gate.** Baselines and change scope let a team work with historical findings without hiding them.
- **Fixture success has limits.** Real applications expose modeling gaps that carefully constructed examples can miss.

These lessons shape the intended platform: preserve each tool’s evidence and limitations rather than flattening all results into a severity label.`,

  Roadmap: `**The following is a proposed sequence for the broader DevSecOps platform. The SAST engine is the working component today; the integrations and services below remain planned.**

### First: strengthen the engine

Continue improving framework models, coverage, and evidence quality. Regenerate fixtures alongside core regression tests, expand independent evaluation, and verify CLI exit behavior before making the scanner a required delivery gate.

### Next: integrate with pull requests

Run scans in isolated CI jobs, retain SARIF and scan metadata, and make analysis failures visible. Start with advisory reporting, then enable narrowly scoped gates after reviewing results. Define ownership and review rules for baselines and application policy declarations.

### Then: connect complementary checks

Introduce SCA, dedicated secret scanning, IaC scanning, container scanning, and SBOM generation where each adds distinct coverage. Evaluate existing tools before building another engine. Define a shared findings envelope that preserves repository and commit identity, tool version, location, fingerprint, evidence, and the original severity and confidence semantics.

### Build the shared workflow when it is needed

Add policy-as-code decisions, triage ownership, exception rationale and expiry, and remediation status. Finding quality and organizational risk prioritization are separate concerns; asset context and business impact should not be invented by the scanner.

A persistent service or database should follow an actual need for shared history and workflow. Choose orchestration based on isolation, concurrency, and operating cost. Kubernetes remains an option to evaluate, not an assumed prerequisite.

[Engine exploration areas](${source}/README.md#areas-of-exploration) · [Separation from risk prioritization](${source}/README.md#relationship-to-adjacent-projects)`,
};
