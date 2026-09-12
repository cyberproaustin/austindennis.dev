# austindennis.dev

Austin Dennis’s professional portfolio and a practical platform engineering project: cloud infrastructure, DevSecOps, and security-minded software delivery.

This repository contains the application and infrastructure supporting austindennis.dev. It is public primarily for portfolio and educational purposes. Production secrets, Terraform state, and sensitive configuration are maintained outside the repository.

No open-source license is granted. Public visibility does not imply general permission to reuse the work.

## Current status

The portfolio is live at https://austindennis.dev, with Terraform-managed AWS hosting and manual GitHub Actions deployments. It includes About, Contact, cloud expertise, owner-supplied certifications, a draft-aware writing section, and three case studies:

- **TerraLift:** source-backed architecture, migration tradeoffs, validation limits, and roadmap.
- **SAST engine / DevSecOps Platform:** working analysis capabilities, with the proposed platform roadmap clearly separated.
- **Bank Vault Academy:** a platform Austin independently built and operates for real users on Azure, with sensitive implementation details excluded.

Credentials are presented as three expert credentials, ten other current-focus entries, and thirteen background entries. Writing has no published articles yet.

## Local development

Use Node.js 24 LTS (npm included). On macOS, if missing:

```sh
brew install node@24
export PATH="$(brew --prefix node@24)/bin:$PATH"
node --version
npm --version
npm ci
npm run dev
```

Open http://localhost:3000. Restart the development server after moving route directories or changing project structure; a server started before the move to `src/app` can retain stale routes. Add the PATH line to your shell configuration if you want it to persist. `.nvmrc` is provided for developers who already use nvm. `npm install` also works; CI uses the committed lockfile with `npm ci`.

AWS credentials and Terraform are not needed for local application development.

## Validation

```sh
npm run lint
npm run format:check
npm run typecheck
npm test
npm run build
# Or run all of the above:
npm run check
```

`npm run format` applies formatting. The build exports the site to `out/`; there is no production Node server and `next start` is not used. Preview with any static file server that serves directory indexes (for example `python3 -m http.server 3000 --directory out`). Test deep links directly, including `/projects/terralift/`, and verify unknown paths return 404. Local preview does not emulate CloudFront headers or rewrites.

The ten automated tests cover publication gating, content validation, project lookup, case-study rendering, safe Markdown, and credential presentation. CI runs installation, lint, formatting, type checking, tests, production export, and a production dependency audit. The owner has verified deployed routes, redirects, 404 status, and response headers. Dedicated keyboard, mobile viewport, and automated accessibility checks remain follow-ups.

## Stack and structure

Next.js App Router, React, strict TypeScript, Tailwind CSS, React Markdown, Vitest, ESLint, Prettier, Terraform, and GitHub Actions. Compatibility exception: ESLint 9.39.5 is retained because ESLint 10 fails in the React plugin bundled with eslint-config-next 16.3.4 (`contextOrFilename.getFilename is not a function`). Upgrade once the plugin supports ESLint 10; Dependabot tracks updates. Exact dependency versions are recorded in package-lock.json. System fonts avoid an external font service.

| Directory                         | Purpose                                                        |
| --------------------------------- | -------------------------------------------------------------- |
| `src/app/`                        | Routes, metadata, layout, design tokens and styles             |
| `src/components/`                 | Navigation, system cards, shared case studies, cloud expertise |
| `src/content/`                    | Typed project/credential data and Markdown writing             |
| `src/lib/`                        | Build-time content loading and validation                      |
| `public/`                         | Public static assets                                           |
| `tests/`                          | Focused behavior tests                                         |
| `infrastructure/`                 | Production AWS configuration and local dev foundation          |
| `docs/architecture/`, `docs/adr/` | Architecture and decision records                              |
| `docs/runbooks/`                  | Development and production readiness                           |
| `.github/`                        | CI and dependency update automation                            |

Application code lives under `src/`; `@/` imports resolve there. Keep `public/` and tool configuration at the repository root, as expected by Next.js. Tests stay in `tests/`, with infrastructure and documentation maintained independently.

The headshot is stored once at `public/images/austin-dennis.jpeg`. Generated `.next/`, `out/`, and `node_modules/` directories are ignored by Git. TypeScript incremental build data lives in `.next/cache/`.

## Content

Edit `src/content/projects.ts` to update systems and approved case-study sections. Long-form project case studies live in `src/content/case-studies/`. Case-study sections support Markdown with raw HTML disabled. Link technical claims to the reviewed source revision for public projects. Keep Bank Vault Academy’s case study at a public-safe level without linking internal source. Missing sections visibly say content pending. Do not add proprietary details. Maintain owner-confirmed credentials in `src/content/certifications.ts`. Each entry includes an issuer, category, credential type, current/background emphasis, and issue month, with optional expiration month, credential ID, verification URL, and homepage feature flag. Add supplied verification links through `credentialUrl`; omitted expiration dates do not imply lifetime validity. Cloud experience summaries remain in `src/content/expertise.ts`. LinkedIn is the current public contact channel. A public email link remains optional. Verification links are supplied for 24 credentials; Tenable Cloud Security Administrator and Linux Essentials currently have no links. The repository commit email is not automatically treated as a public contact address.

Writing is Markdown with a fenced JSON metadata block. Copy `src/content/writing/first-article.md`, use a lowercase hyphenated filename, supply title, summary and ISO date, and set `published` to true only after review. Drafts are excluded from routes, indexes, and sitemap. The optional catch-all writing route allows an empty publication list without inventing an article. Raw HTML is disabled, and React Markdown filters unsafe URLs. No MDX execution or runtime CMS is needed. Draft source is still visible in this public repository: never put private drafts or secrets here.

## Architecture and infrastructure

Route 53 resolves the domain to CloudFront, which serves the static Next.js export from a private S3 REST origin through Origin Access Control. ACM provides the TLS certificate. Terraform manages the production resources, with encrypted, versioned S3 state and native locking. Development stays local.

See the [architecture overview](docs/architecture/overview.md), [hosting decision](docs/adr/ADR-001-static-hosting.md), and [infrastructure guide](infrastructure/README.md).

## Security and deployment

The **Deploy portfolio** GitHub Actions workflow runs manually on `main`. It validates and builds the site, obtains short-lived AWS credentials through OIDC, uploads hashed assets and supporting files before HTML, then invalidates CloudFront and waits. Pushing to `main` does not automatically publish. Terraform changes are planned and applied separately by the owner.

The deployment role is scoped to the site bucket and distribution, with no Terraform state access. CloudFront supplies HTTPS redirects and security headers, including a baseline CSP. A stricter script policy, tested rollback, and monitoring are still pending. No long-lived AWS keys are used by the workflow.

See [SECURITY.md](SECURITY.md) and the [production checklist](docs/runbooks/production-readiness.md). Repository protection and security feature configuration still need confirmation. Dependabot updates are reviewed before merging.

## Roadmap

See [the running roadmap](docs/roadmap.md). Next priorities are the project budget, accessibility review, repository protections, recovery, and the first technical article. API Gateway/Lambda/SES are deferred until a contact form is needed; DynamoDB requires a real persistence need. EC2, ECS, and EKS are not justified for this workload.
