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
        <h2>How I got here</h2>
        <p>
          I started in security in October 2022 through a bootcamp offered by my
          employer while I was working in a Walmart distribution center. After
          that, I enrolled in WGU’s B.S. in Cybersecurity and Information
          Assurance and completed the degree and its certifications in six
          months.
        </p>
        <p>
          As AI became more capable at writing code, I wanted to understand what
          it takes to build software that a professional developer could work
          with: organized repositories, maintainable code, and reliable
          delivery. That pushed me deeper into software and platform
          engineering.
        </p>
        <h2>Building and operating the whole platform</h2>
        <p>
          Azure is where I have the most hands-on cloud experience, alongside
          extensive work with Terraform and CI/CD. My work spans infrastructure,
          security, software delivery, and the operations that keep a platform
          running, including handling incidents at 2 a.m.
        </p>
        <p>
          I independently built the entire{" "}
          <a href="https://bankvaultacademy.org">Bank Vault Academy</a> platform
          and operate it on Azure for real users today. Its mission is to help
          young people entering adult life learn the financial skills school
          hasn’t adequately prepared them for. That project brings application
          development and cloud operations together in a product I’m responsible
          for end to end. I built it both to serve that mission and to gain
          experience running a real application.
        </p>
        <h2>What I’m working on</h2>
        <p>
          I’m building <Link href="/projects/terralift/">TerraLift</Link>, a Go
          CLI for bringing existing cloud infrastructure into Terraform. I’m
          also developing a{" "}
          <Link href="/projects/devsecops-platform/">SAST engine</Link> as the
          first working component of a broader DevSecOps platform. The engine is
          a work in progress; the broader platform is still a roadmap.
        </p>
        <h2>This site is part of the practice</h2>
        <p>
          I’m expanding my AWS experience by building and operating this
          portfolio. It runs on private S3 behind CloudFront, with Route 53,
          ACM, and Terraform managing the hosting setup. GitHub Actions
          publishes the static site using short-lived AWS credentials.
        </p>
        <p>
          I’m also expanding into GCP. My{" "}
          <Link href="/expertise/">cloud experience and credentials</Link> show
          both my current focus and the security and infrastructure foundation
          behind it.
        </p>
        <Link className="text-link" href="/projects/">
          Explore the systems →
        </Link>
      </div>
    </>
  );
}
