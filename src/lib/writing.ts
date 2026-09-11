import fs from "node:fs";
import path from "node:path";
export type Article = {
  slug: string;
  title: string;
  summary: string;
  published: boolean;
  date: string;
  body: string;
};
// Each article starts with a JSON metadata block followed by a Markdown body.
export function parseArticle(source: string, slug: string): Article {
  const match = source.match(/^```json\r?\n([\s\S]*?)\r?\n```\r?\n([\s\S]*)$/);
  if (!match?.[1] || match[2] === undefined)
    throw new Error(`Invalid article format: ${slug}`);
  const data: unknown = JSON.parse(match[1]);
  if (typeof data !== "object" || data === null)
    throw new Error(`Invalid metadata: ${slug}`);
  const meta = data as Record<string, unknown>;
  if (
    typeof meta.title !== "string" ||
    !meta.title.trim() ||
    typeof meta.summary !== "string" ||
    typeof meta.published !== "boolean" ||
    typeof meta.date !== "string" ||
    (meta.published &&
      (!/^\d{4}-\d{2}-\d{2}$/.test(meta.date) ||
        Number.isNaN(Date.parse(meta.date))))
  )
    throw new Error(`Invalid metadata: ${slug}`);
  return {
    slug,
    title: meta.title,
    summary: meta.summary,
    published: meta.published,
    date: meta.date,
    body: match[2],
  };
}
export function getArticles(): Article[] {
  const directory = path.join(process.cwd(), "src/content/writing");
  return fs
    .readdirSync(directory)
    .filter((name) => name.endsWith(".md"))
    .map((name) => {
      const slug = name.slice(0, -3);
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))
        throw new Error(`Invalid article slug: ${slug}`);
      return parseArticle(
        fs.readFileSync(path.join(directory, name), "utf8"),
        slug,
      );
    })
    .filter((article) => article.published)
    .sort((a, b) => b.date.localeCompare(a.date));
}
