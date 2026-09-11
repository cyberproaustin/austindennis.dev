import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { getArticles } from "@/lib/writing";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "projects/",
    "expertise/",
    "writing/",
    "about/",
    "contact/",
    ...projects.map((p) => `projects/${p.slug}/`),
    ...getArticles().map((a) => `writing/${a.slug}/`),
  ].map((route) => ({ url: `https://austindennis.dev/${route}` }));
}
