<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Site writing rules

Do not use em dashes anywhere in site content, including page copy, project data, articles, metadata, labels, and generated text. Rewrite sentences using periods, commas, colons, or parentheses as appropriate. Do not encode em dashes as HTML entities or Unicode escapes.

## Visual direction

Prefer open layouts, readable typography, restrained teal accents, and personal, factual copy. Use spacing and subtle separators to group content. Avoid dashboard-like cards, decorative process diagrams, numbered section labels, and generic engineering slogans. Keep project maturity and placeholders explicit.

## Repository organization

Application routes, components, content, and helpers live under `src/`. The `@/` import alias resolves to `src/`. Keep `public/`, `tests/`, `docs/`, and `infrastructure/` at the root. Keep standard tool configuration at the root and generated caches under `.next/`. Store the headshot only in `public/images/`.
