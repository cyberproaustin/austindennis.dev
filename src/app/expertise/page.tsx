import type { Metadata } from "next";
import { PageIntro } from "@/components/ui";
import { CloudExpertise } from "@/components/cloud-expertise";
export const metadata: Metadata = { title: "Cloud expertise" };
export default function Expertise() {
  return (
    <>
      <PageIntro
        eyebrow="EXPERTISE / CONTINUOUS LEARNING"
        title="Cloud fluency. Engineering depth."
      >
        <p>
          Strong Azure experience, extensive Terraform and CI/CD work, and an
          intentional expansion into AWS and GCP.
        </p>
      </PageIntro>
      <CloudExpertise />
      <section className="home-section prose">
        <h2>Certifications support the work.</h2>
        <p>
          Credentials belong alongside hands-on systems, design decisions, and
          operational lessons. Verified certifications will appear here grouped
          by cloud, with earned, in progress, or planned status.
        </p>
        <p className="notice">
          Certification details pending. No completed credentials have been
          supplied.
        </p>
      </section>
    </>
  );
}
