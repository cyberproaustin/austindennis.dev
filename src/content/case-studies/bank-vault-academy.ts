export const bankVaultAcademySections = {
  Problem: `A financial-literacy platform needs more than lesson pages. Learners need a coherent experience, parents need ways to manage access and follow progress, and the product needs dependable enrollment, identity, and subscription workflows.

I built Bank Vault Academy on my own, from the application through its Azure infrastructure, and continue to operate it for real users. The engineering challenge is keeping those product workflows connected while making the platform maintainable as its curriculum and capabilities grow.`,

  Architecture: `The codebase separates user-facing applications, backend services, infrastructure, database migrations, and shared delivery templates. React and TypeScript power the main application experiences, while Node.js Azure Functions provide backend APIs and Azure SQL provides relational persistence.

The education portal brings learner and parent workflows together, with separate learning experiences for lessons and assessments. The repository also contains financial-simulation and school-oriented functionality at different stages of development. Their presence in the code does not mean every feature is available to current users.

At a high level, the system connects a browser-based learning experience to authenticated APIs, persisted learning state, and external identity and payment services. This public description omits internal endpoints, network configuration, resource identifiers, and customer information.`,

  "Design decisions": `**Organize around product capabilities.** Separate applications let learning experiences evolve independently, while the portal provides a common point of access. That flexibility also creates coordination work around identity, navigation, and integration contracts.

**Make schema changes a platform concern.** Versioned migrations live in a central database directory. A schema change can affect more than one application, so it needs an explicit release sequence rather than an untracked change during deployment.

**Share delivery mechanics.** Reusable pipeline templates capture common frontend and backend build and deployment steps. Application-specific configuration stays with the application.

**Bring the code together without losing its history.** The current monorepo consolidates previously separate repositories. Path-scoped pipelines keep deployment tied to the relevant application or service.`,

  Infrastructure: `Azure is the production cloud for Bank Vault Academy. The repository includes Terraform definitions for static frontend hosting, Function Apps, SQL, storage, secret management, telemetry, and edge services. Application infrastructure is separated from shared services and environment configuration.

The documented infrastructure approach adopts existing resources into Terraform rather than rebuilding them solely to establish infrastructure as code. Stateful resources and schema changes require particular care during that transition.

The code and documentation establish the intended configuration and operating approach. They do not, by themselves, prove that every current resource matches Terraform or that every planned control is deployed. No Azure access or infrastructure changes were performed for this case study.`,

  Security: `Identity and authorization are part of the application design. The education frontend integrates with Microsoft identity tooling, and backend authentication code validates signed tokens and constructs application user context. Role-aware workflows distinguish the people using the platform; authorization must also enforce access to the specific records involved.

Embedded learning experiences introduce another trust boundary. The portal includes origin allowlisting for cross-window messages, so messages must be evaluated in the context of their sender rather than trusted simply because they reach the browser.

Infrastructure and delivery code use managed identity and workload identity federation patterns where supported. Secret-management configuration is kept separate from application source. These are implementation details observed in the repository, not a claim of comprehensive security certification or compliance.

Customer records, credentials, internal security findings, and operational access details are excluded from this public case study.`,

  "CI/CD": `Azure DevOps pipelines define the application delivery workflow. Shared templates build and deploy frontend applications and Function App backends, with path filters controlling which part of the monorepo triggers a release.

The templates use federated service connections for Azure access. Where a deployment task requires a token, the documented approach retrieves it during the job rather than keeping a long-lived copy in source control.

Database changes follow a separate versioned migration workflow using Flyway. The documented release process applies migrations to development before a production approval stage. Approval configuration and successful production execution were not independently verified during this source review.

Keeping application releases, infrastructure changes, and schema migrations distinct makes their dependencies easier to review, even when they must ship together.`,

  Reliability: `The repository contains application tests and synthetic user journeys in addition to health checks. This reflects two different questions: whether individual behavior is correct, and whether a deployed user workflow still works across its dependencies.

The simulation implementation is a useful example of state coordination. It combines user actions with time-based progression, so concurrent updates must not produce inconsistent outcomes. Its code uses database transactions and shared locking helpers to coordinate mutations. This is an implementation example, not a claim that the development simulation is fully released.

Backup, restore, and recovery procedures remain essential operational concerns. This case study does not claim a tested recovery time, recovery point, uptime percentage, or completed disaster-recovery exercise. Those outcomes need separate evidence.`,

  Observability: `Application Insights and Log Analytics appear in the application and infrastructure code. The repository also contains a catalog-driven health service and Playwright journeys that exercise user-facing workflows.

A versioned check catalog makes monitoring coverage reviewable alongside code. Liveness checks establish that a service responds; API checks inspect a response contract; browser journeys test whether a user can complete a workflow. Each answers a different question.

Monitoring documentation includes later-stage capabilities as well as implemented components. This review did not execute authenticated journeys, change alerting, or verify which checks currently run in production. No live monitoring data or user activity is published here.`,

  "Lessons learned": `Building and operating the whole product brings several engineering concerns together:

- **The user workflow crosses repository boundaries.** Frontend code, identity, APIs, payments, and persistence all contribute to whether an experience works.
- **A database change is a release dependency.** Central migrations help make that dependency explicit across applications.
- **Reusable automation still needs clear ownership.** Templates reduce repetition, while each application remains responsible for its build inputs and release behavior.
- **Availability and usability are different checks.** A responding endpoint does not prove that a learner can complete a lesson or that a parent can view progress.

These are engineering lessons supported by the implementation and operating model. User counts, revenue, performance improvements, and customer outcomes have not been supplied and are not inferred.`,

  Roadmap: `**The next steps below are proposed priorities, not promises of released functionality.**

- Continue bringing development features through explicit release checks, with particular attention to schema compatibility and existing learner progress.
- Keep the monitoring catalog aligned with released workflows and distinguish planned checks from checks that are running.
- Expand regression coverage around identity, enrollment, subscriptions, and persisted learning state as those workflows change.
- Document and exercise restore and recovery procedures before publishing reliability targets.
- Reconcile operating documentation with the monorepo and the actual deployment state, so development plans are not mistaken for production capabilities.

The immediate public evidence is the live product at [bankvaultacademy.org](https://bankvaultacademy.org). Future case-study updates can add approved operational results without exposing customer data or proprietary implementation details.`,
};
