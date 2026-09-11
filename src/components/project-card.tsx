import Link from "next/link";
import type { Project } from "@/content/projects";
import { Tags } from "@/components/ui";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <p className="project-category">{project.category}</p>
      <h3>
        <Link href={`/projects/${project.slug}/`}>
          {project.name} <span aria-hidden="true">↗</span>
        </Link>
      </h3>
      <p className="project-description">{project.summary}</p>
      <Tags items={project.themes} />
      <div className="project-meta">
        <p className="status">{project.status}</p>
        {project.sourceUrl && (
          <a className="text-link" href={project.sourceUrl}>
            {project.sourceLabel ?? "View source code"}{" "}
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}
