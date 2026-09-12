import type { Metadata } from "next";
import { PageIntro } from "@/components/ui";
import { CloudExpertise } from "@/components/cloud-expertise";
import { CertificationList } from "@/components/certifications";
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
      <section className="home-section" aria-labelledby="credentials-heading">
        <h2 id="credentials-heading">Certifications and credentials</h2>
        <p>
          Cloud architecture, secure delivery, and the foundations behind the
          work.
        </p>
        <CertificationList />
      </section>
    </>
  );
}
