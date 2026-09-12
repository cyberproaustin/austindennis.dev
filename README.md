# austindennis.dev

Austin Dennis’s professional portfolio and a practical platform engineering project: cloud infrastructure, DevSecOps, and security-minded software delivery.

This repository contains the application and infrastructure supporting austindennis.dev. It is public primarily for portfolio and educational purposes. Production secrets, Terraform state, and sensitive configuration are maintained outside the repository.

No open-source license is granted. Public visibility does not imply general permission to reuse the work.

## Current status

The initial local milestone is implemented and committed as `1c63214`. Austin reviewed the site at the end of the September 10–11, 2026 session. The portfolio includes the homepage, About, Contact, cloud expertise, a draft-aware writing section, and three completed case studies:

- **TerraLift:** source-backed architecture, migration tradeoffs, validation limits, and roadmap.
- **SAST engine / DevSecOps Platform:** implemented analysis capabilities and a clearly separated proposed platform roadmap.
- **Bank Vault Academy:** independently built and operated product, with real usage confirmed by the owner and sensitive implementation details excluded.

The headshot, GitHub links, LinkedIn contact link, and Bank Vault Academy public website link are integrated. No certification claims or published articles have been invented. AWS deployment and GitHub publication have not happened.

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

Git, Terraform, AWS CLI, GitHub CLI, and Homebrew were present at initial inspection. Node and npm were missing from PATH. Terraform and AWS credentials are not needed to run this milestone. The existing local directory and Git repository were retained; the package/project is named `austindennis-dev`.

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

The seven automated tests cover publication gating, content validation, project lookup, complete and placeholder case studies, and safe Markdown rendering. Lint, formatting, strict type checking, tests, and production export passed at the session close. Local page routes and unknown-route 404 handling were verified. Owner site review is complete; dedicated keyboard, mobile viewport, and automated accessibility checks remain launch follow-ups. CI runs install, lint, formatting, type checking, tests, production export, and a production dependency audit. GitHub execution requires publishing this repository; no remote or deployment is configured.

## Stack and structure

Next.js App Router, React, strict TypeScript, Tailwind CSS, React Markdown, Vitest, ESLint, Prettier, Terraform foundation, and GitHub Actions. Compatibility exception: ESLint 9.39.5 is retained because ESLint 10 fails in the React plugin bundled with eslint-config-next 16.3.4 (`contextOrFilename.getFilename is not a function`). Upgrade once the plugin supports ESLint 10; Dependabot tracks updates. Exact dependency versions are recorded in package-lock.json. System fonts avoid an external font service.

| Directory                         | Purpose                                                        |
| --------------------------------- | -------------------------------------------------------------- |
| `src/app/`                        | Routes, metadata, layout, design tokens and styles             |
| `src/components/`                 | Navigation, system cards, shared case studies, cloud expertise |
| `src/content/`                    | Typed project/credential data and Markdown writing             |
| `src/lib/`                        | Build-time content loading and validation                      |
| `public/`                         | Public static assets                                           |
| `tests/`                          | Focused behavior tests                                         |
| `infrastructure/`                 | Credential-free Terraform environment foundation               |
| `docs/architecture/`, `docs/adr/` | Architecture and decision records                              |
| `docs/runbooks/`                  | Development and production readiness                           |
| `.github/`                        | CI and dependency update automation                            |

Application code lives under `src/`; `@/` imports resolve there. Keep `public/` and tool configuration at the repository root, as expected by Next.js. Tests stay in `tests/`, with infrastructure and documentation maintained independently.

The headshot is stored once at `public/images/austin-dennis.jpeg`. Generated `.next/`, `out/`, and `node_modules/` directories are ignored by Git. TypeScript incremental build data lives in `.next/cache/`.

## Content

Edit `src/content/projects.ts` to update systems and approved case-study sections. Long-form project case studies live in `src/content/case-studies/`. Case-study sections support Markdown with raw HTML disabled. Link technical claims to the reviewed source revision for public projects. Keep Bank Vault Academy’s case study at a public-safe level without linking internal source. Missing sections visibly say content pending. Do not add proprietary details. Maintain owner-confirmed credentials in `src/content/certifications.ts`. Each entry includes an issuer, category, credential type, current/background emphasis, and issue month, with optional expiration month, credential ID, verification URL, and homepage feature flag. Add supplied verification links through `credentialUrl`; omitted expiration dates do not imply lifetime validity. Cloud experience summaries remain in `src/content/expertise.ts`. LinkedIn is the current public contact channel. A public email link and additional biography remain optional content follow-ups. Verification links are supplied for 24 credentials; Tenable Cloud Security Administrator and Linux Essentials currently have no links. The repository commit email is not automatically treated as a public contact address.

Writing is Markdown with a fenced JSON metadata block. Copy `src/content/writing/first-article.md`, use a lowercase hyphenated filename, supply title, summary and ISO date, and set `published` to true only after review. Drafts are excluded from routes, indexes, and sitemap. The optional catch-all writing route allows an empty publication list without inventing an article. Raw HTML is disabled, and React Markdown filters unsafe URLs. No MDX execution or runtime CMS is needed. Draft source is still visible in this public repository: never put private drafts or secrets here.

## Architecture and infrastructure

Target: Internet → Route 53 DNS → CloudFront → private S3 REST origin with Origin Access Control. Route 53 resolves the domain; it is not an HTTP proxy. Static Next.js output keeps runtime cost and operational surface small. Terraform currently declares only a version constraint; it creates nothing and needs no provider, backend, or credentials.

See [architecture overview](docs/architecture/overview.md), [ADR-001](docs/adr/ADR-001-static-hosting.md), and [infrastructure README](infrastructure/README.md). CloudFront URL rewriting for directory indexes, certificate validation, response headers, and access policies are explicit launch prerequisites.

## Security and deployment

No deployment workflow, AWS access keys, or AWS resources are included. Future GitHub Actions deployment will exchange GitHub OIDC tokens for short-lived AWS STS credentials with separate least-privilege infrastructure and content roles. S3 stays private. State will use a deliberately bootstrapped encrypted S3 backend with native locking.

See [SECURITY.md](SECURITY.md). Enable private reporting, secret scanning, push protection, and branch protection when the remote is created. Dependency updates are reviewed through Dependabot. Static site headers belong at CloudFront; they are not falsely configured in Next.js.

## Roadmap

See [the running roadmap](docs/roadmap.md). Next session should focus on GitHub publication and repository security controls, followed by remaining accessibility checks and the first technical article. AWS account/state bootstrap, hosting infrastructure, and OIDC deployment are separate milestones requiring explicit approval. API Gateway/Lambda/SES are deferred until a contact form is needed; DynamoDB requires a real persistence need. EC2, ECS, and EKS are not justified for this workload.
