import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/ui";
export const metadata: Metadata = { title: "About" };
export default function About() {
  return (
    <>
      <div className="about-intro">
        <PageIntro
          eyebrow="ABOUT / AUSTIN DENNIS"
          title="From securing systems to shaping platforms."
        >
          <p>
            I’m a Security Engineer moving deeper into Platform Engineering,
            DevSecOps, Cloud Infrastructure, and Software Engineering.
          </p>
        </PageIntro>
        <Image
          className="about-portrait"
          src="/images/austin-dennis.jpeg"
          alt="Austin Dennis"
          width={800}
          height={800}
          loading="eager"
        />
      </div>
      <div className="prose">
        <h2>How I approach the work</h2>
        <p>
          I bring strong Azure experience and extensive work with Terraform and
          CI/CD. I’m now intentionally expanding into AWS and GCP, applying the
          same focus on secure, repeatable infrastructure and dependable
          operations.
        </p>
        <h2>This site is part of the practice.</h2>
        <p>
          This portfolio is also an engineering project: a place to build AWS
          skills, document architectural decisions, and demonstrate software
          delivery and security practices.
        </p>
        <p className="notice">
          Additional biography, career history, and approved project outcomes
          will be added when available.
        </p>
        <Link className="text-link" href="/projects/">
          Explore the systems →
        </Link>
      </div>
    </>
  );
}
