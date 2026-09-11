import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { caseStudySections, type Project } from "@/content/projects";
import { PageIntro, Tags } from "@/components/ui";
export function CaseStudy({ project }: { project: Project }) {
  return (
    <>
      <Link className="text-link back-link" href="/projects/">
        ← All systems
      </Link>
      <PageIntro eyebrow={project.category} title={project.name}>
        <p>{project.summary}</p>
      </PageIntro>
      <p className="notice">
        {project.caseStudyNote ??
          `${project.status}. This page is a case-study outline; unprovided details are marked below.`}
      </p>
      <Tags items={project.themes} />
      {project.websiteUrl && (
        <a className="text-link" href={project.websiteUrl}>
          Visit {project.name} <span aria-hidden="true">↗</span>
        </a>
      )}
      <div className="case-layout">
        <aside>
          <p className="eyebrow">IN THIS CASE STUDY</p>
          <nav aria-label="Case study sections">
            <a href="#overview">Overview</a>
            {caseStudySections.map((section, index) => (
              <a key={section} href={`#section-${index}`}>
                {section}
              </a>
            ))}
          </nav>
        </aside>
        <div className="prose">
          <section id="overview">
            <h2>Overview</h2>
            <p>{project.overview}</p>
          </section>
          {caseStudySections.map((section, index) => (
            <section key={section} id={`section-${index}`}>
              <h2>{section}</h2>
              <ReactMarkdown skipHtml>
                {project.sections?.[section] ??
                  "Content pending. Approved details will be added here."}
              </ReactMarkdown>
            </section>
          ))}
          <section>
            <h2>Source code</h2>
            {project.sourceUrl ? (
              <a href={project.sourceUrl}>
                {project.sourceLabel ?? "View source code"}{" "}
                <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <p>
                {project.sourceNote ??
                  "No public source link has been provided."}
              </p>
            )}
          </section>
        </div>
      </div>
    </>
  );
}
