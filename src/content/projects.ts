import { bankVaultAcademySections } from "@/content/case-studies/bank-vault-academy";
import { devsecopsSections } from "@/content/case-studies/devsecops-platform";
import { terraliftSections } from "@/content/case-studies/terralift";

export const caseStudySections = [
  "Problem",
  "Architecture",
  "Design decisions",
  "Infrastructure",
  "Security",
  "CI/CD",
  "Reliability",
  "Observability",
  "Lessons learned",
  "Roadmap",
] as const;
export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  status: string;
  themes: string[];
  overview: string;
  sections?: Partial<Record<(typeof caseStudySections)[number], string>>;
  sourceUrl?: string;
  websiteUrl?: string;
  sourceNote?: string;
  sourceLabel?: string;
  caseStudyNote?: string;
};
export const projects: Project[] = [
  {
    slug: "terralift",
    sourceUrl: "https://github.com/cyberproaustin/terralift",
    sourceLabel: "TerraLift on GitHub",
    name: "TerraLift",
    category: "Platform automation",
    summary:
      "Bringing existing AWS, Azure, and GCP infrastructure under Terraform management.",
    status: "Implemented CLI · Active development",
    themes: ["Go", "Terraform", "Azure", "AWS", "GCP", "CI/CD"],
    overview:
      "I built TerraLift to turn existing cloud infrastructure into a reviewable Terraform repository. It discovers resources, generates importable configuration, reconciles dependencies, and reports coverage and plan results. The focus is the difficult step between an environment that already runs and infrastructure that can be maintained in Git.",
    caseStudyNote:
      "Based on source revision e9ed63a, reviewed September 2026. Validation scope and current limitations are documented below.",
    sections: terraliftSections,
  },
  {
    slug: "devsecops-platform",
    sourceUrl: "https://github.com/cyberproaustin/sast-engine",
    sourceLabel: "SAST Engine on GitHub",
    name: "DevSecOps Platform",
    category: "Secure delivery",
    summary:
      "A working SAST engine and the first piece of a planned DevSecOps platform.",
    status: "SAST engine · Work in progress",
    themes: [
      "Go",
      "TypeScript",
      "Python",
      "SAST",
      "SARIF",
      "Application security",
    ],
    overview:
      "I’m building a SAST engine that analyzes source code and explains its findings through evidence, application context, and explicit policy. TypeScript/JavaScript and Python frontends share a Go analysis core. It is working software under active development and the first component of a planned DevSecOps platform. The wider platform roadmap is a proposed direction, not a set of completed capabilities.",
    caseStudyNote:
      "Based on SAST engine revision 818e045, reviewed September 2026. The engine is a work in progress. Broader platform milestones are proposed future work.",
    sections: devsecopsSections,
  },
  {
    slug: "bank-vault-academy",
    name: "Bank Vault Academy",
    websiteUrl: "https://bankvaultacademy.org",
    sourceNote:
      "Application source code is not published with this case study.",
    category: "Product engineering & cloud operations",
    summary:
      "A SaaS platform I built entirely on my own and continue to operate for real users.",
    status: "Live platform · Built and operated independently",
    themes: [
      "React",
      "TypeScript",
      "Azure Functions",
      "Azure SQL",
      "Terraform",
      "Identity",
      "Observability",
      "Disaster recovery",
      "CI/CD",
    ],
    overview:
      "I built Bank Vault Academy from the ground up on my own and continue to operate it for real users. The work spans the learning experience, application APIs, identity, subscriptions, data, Azure infrastructure, and software delivery. This case study describes the engineering at a high level, with development work distinguished from the live product.",
    caseStudyNote:
      "Based on a September 2026 source review and owner-confirmed live usage. Internal deployment details and customer data are omitted. Production controls and recovery outcomes were not independently tested.",
    sections: bankVaultAcademySections,
  },
];
export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
