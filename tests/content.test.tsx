import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import ReactMarkdown from "react-markdown";
import { CaseStudy } from "@/components/case-study";
import { getProject, projects, caseStudySections } from "@/content/projects";
import { getArticles, parseArticle } from "@/lib/writing";

const article = (metadata: Record<string, unknown>, body = "## Hello") =>
  `\`\`\`json\n${JSON.stringify(metadata)}\n\`\`\`\n${body}`;

describe("writing publication", () => {
  it("excludes unpublished drafts from the public catalog", () => {
    expect(getArticles().every((entry) => entry.published)).toBe(true);
    expect(
      getArticles().find((entry) => entry.slug === "first-article"),
    ).toBeUndefined();
  });
  it("loads valid metadata and preserves Markdown", () => {
    expect(
      parseArticle(
        article({
          title: "A system",
          summary: "Decisions",
          published: true,
          date: "2026-09-10",
        }),
        "a-system",
      ),
    ).toMatchObject({ slug: "a-system", published: true, body: "## Hello" });
  });
  it("rejects invalid metadata and missing publication dates", () => {
    expect(() => parseArticle("invalid", "test")).toThrow();
    expect(() =>
      parseArticle(
        article({
          title: "Test",
          summary: "Test",
          published: "true",
          date: "2026-09-10",
        }),
        "test",
      ),
    ).toThrow();
    expect(() =>
      parseArticle(
        article({ title: "Test", summary: "Test", published: true, date: "" }),
        "test",
      ),
    ).toThrow();
  });
  it("does not render raw HTML or executable link URLs", () => {
    const html = renderToStaticMarkup(
      <ReactMarkdown skipHtml>
        {"<script>alert(1)</script>\n\n[bad](javascript:alert%281%29)"}
      </ReactMarkdown>,
    );
    expect(html).not.toContain("<script");
    expect(html).not.toContain("javascript:");
  });
});

describe("case studies", () => {
  it("resolves known systems and rejects unknown slugs", () => {
    expect(getProject("terralift")?.name).toBe("TerraLift");
    expect(getProject("not-a-system")).toBeUndefined();
    expect(new Set(projects.map((project) => project.slug)).size).toBe(
      projects.length,
    );
  });
  it("renders all outline sections with honest placeholders and an optional source", () => {
    const project = getProject("terralift")!;
    const html = renderToStaticMarkup(
      <CaseStudy
        project={{
          ...project,
          caseStudyNote: undefined,
          sections: { Problem: "Approved problem statement" },
          sourceUrl: "https://example.com/source",
        }}
      />,
    );
    for (const section of caseStudySections) expect(html).toContain(section);
    expect(html).toContain("Approved problem statement");
    expect(html).toContain("Content pending");
    expect(html).toContain('href="https://example.com/source"');
  });
  it("renders a complete case study with Markdown and no placeholder notice", () => {
    const project = getProject("terralift")!;
    const html = renderToStaticMarkup(<CaseStudy project={project} />);
    expect(html).not.toContain("Content pending");
    expect(html).not.toContain("case-study outline");
    expect(html).toContain("<ol>");
    expect(html).toContain("<strong>Current limitation:</strong>");
    expect(html).toContain("/blob/e9ed63a9582c9cd96a5f10de6d126814bd3111b5/");
    const unsafe = renderToStaticMarkup(
      <CaseStudy
        project={{
          ...project,
          sections: {
            Problem:
              "<script>alert(1)</script>\n\n[bad](javascript:alert%281%29)",
          },
        }}
      />,
    );
    expect(unsafe).not.toContain("<script");
    expect(unsafe).not.toContain("javascript:");
  });
});
