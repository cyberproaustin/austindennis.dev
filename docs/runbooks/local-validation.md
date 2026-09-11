# Initial local validation

Validated on macOS arm64, 2026-09-10 (local time), with an official Node.js 24.21.0 archive extracted to `/tmp`. Its SHA-256 matched the official distribution checksum. No system Node installation was changed.

- Dependency installation succeeded; `npm ci --ignore-scripts` also verified lockfile reproducibility.
- ESLint, Prettier, strict TypeScript, and six Vitest behavior tests passed.
- `npm run build` generated the static export successfully. The restricted tool sandbox blocked a Turbopack internal port; the same command passed with execution approval outside that sandbox.
- Twelve exported HTML files passed internal-link and single-h1 checks. The unpublished draft was absent from generated article routes and sitemap.
- The development server returned HTTP 200 for home and TerraLift, and HTTP 404 for an unknown route. It was stopped after verification.
- Terraform formatting, initialization with backend disabled, and validation passed for dev and prod with no AWS provider or credentials.
- npm audit reported zero vulnerabilities. A source/configuration credential-pattern review found no matches, and Git ignore rules were checked for environment files, private keys, state, and real Terraform variable files. This is not an exhaustive security audit.
- Browser visual/keyboard inspection remains pending: no connected browser was available and macOS computer-use permissions were pending. Responsive CSS is implemented, but no visual accessibility certification is claimed.
- CI is configured but has not run on GitHub. No remote was created and nothing was deployed to AWS.

ESLint 9 is a documented compatibility exception; the current Next.js React lint plugin failed under ESLint 10. See the roadmap for the upgrade follow-up.
