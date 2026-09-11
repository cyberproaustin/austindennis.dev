import type { Metadata } from "next";
import { PageIntro } from "@/components/ui";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";
export const metadata: Metadata = { title: "Systems" };
export default function Projects() {
  return (
    <>
      <PageIntro
        eyebrow="SYSTEMS / ENGINEERING PORTFOLIO"
        title="The systems behind the work."
      >
        <p>
          A growing collection of platform, security, and infrastructure case
          studies. Each project makes its current publication status explicit.
        </p>
      </PageIntro>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
