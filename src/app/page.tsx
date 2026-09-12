import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { CloudExpertise } from "@/components/cloud-expertise";
import { SectionHeading } from "@/components/ui";
import { FeaturedCertifications } from "@/components/certifications";
import { projects } from "@/content/projects";

export default function Home() {
  return (
    <div className="home-layout">
      <header className="home-intro">
        <Image
          className="intro-portrait"
          src="/images/austin-dennis.jpeg"
          alt="Austin Dennis"
          width={800}
          height={800}
          loading="eager"
        />
        <h1>
          Austin Dennis<span className="name-period">.</span>
        </h1>
        <p className="intro-role">
          Security Engineer.
          <br />
          Building cloud platforms.
        </p>
        <p className="intro-description">
          I build, secure, automate, and operate cloud infrastructure. This is
          where I share the systems and what I learn along the way.
        </p>
        <p className="intro-disciplines">
          Platform Engineering · DevSecOps · Cloud Security
        </p>
        <nav className="section-nav" aria-label="On this page">
          <a href="#about">About</a>
          <a href="#systems">Selected systems</a>
          <a href="#expertise">Cloud expertise</a>
          <a href="#writing">Writing</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="social-links">
          <a className="text-link" href="https://github.com/cyberproaustin">
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a
            className="text-link"
            href="https://www.linkedin.com/in/cyberproaustin/"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <div className="home-content">
        <section id="about" className="home-section home-about">
          <SectionHeading title="A little about me" />
          <p>
            I’m a Security Engineer moving deeper into platform engineering,
            DevSecOps, and software engineering. My work is grounded in Azure,
            with Terraform and CI/CD central to how I build.
          </p>
          <p>
            I built{" "}
            <a href="https://bankvaultacademy.org">Bank Vault Academy</a> from
            the ground up on my own, including the application and its Azure
            infrastructure. I continue to operate the platform, which serves
            real users today.
          </p>
          <p>
            I’m expanding my experience into AWS and GCP. This portfolio,
            austindennis.dev, is my hands-on AWS engineering project.
          </p>
          <Link className="text-link" href="/about/">
            More about me <span aria-hidden="true">→</span>
          </Link>
        </section>

        <section id="systems" className="home-section">
          <SectionHeading title="Selected systems" />
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <Link className="text-link" href="/projects/">
            Explore all systems <span aria-hidden="true">→</span>
          </Link>
        </section>

        <section id="expertise" className="home-section">
          <SectionHeading title="Cloud expertise" />
          <CloudExpertise />
          <FeaturedCertifications />
          <Link className="text-link" href="/expertise/">
            Experience and learning <span aria-hidden="true">→</span>
          </Link>
        </section>

        <section id="writing" className="home-section">
          <SectionHeading title="Writing" />
          <p>
            I’m preparing notes on infrastructure, secure delivery, and the
            decisions behind my projects. There are no published articles yet.
          </p>
          <Link className="text-link" href="/writing/">
            Visit the writing desk <span aria-hidden="true">→</span>
          </Link>
        </section>

        <section id="contact" className="home-section">
          <SectionHeading title="Get in touch" />
          <p>
            For conversations about cloud platforms, security, and engineering.
            You can reach me on LinkedIn.
          </p>
          <Link className="text-link" href="/contact/">
            Contact information <span aria-hidden="true">→</span>
          </Link>
        </section>
      </div>
    </div>
  );
}
