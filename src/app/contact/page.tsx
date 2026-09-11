import type { Metadata } from "next";
import { PageIntro } from "@/components/ui";
export const metadata: Metadata = { title: "Contact" };
export default function Contact() {
  return (
    <>
      <PageIntro
        eyebrow="CONTACT / START A CONVERSATION"
        title="Let’s talk systems."
      >
        <p>
          Cloud platforms, secure delivery, infrastructure automation, and the
          work of keeping systems dependable.
        </p>
      </PageIntro>
      <div className="contact-panel prose">
        <h2>Connect on LinkedIn</h2>
        <p>
          Reach out on LinkedIn for conversations about cloud platforms,
          security, and engineering.
        </p>
        <a href="https://www.linkedin.com/in/cyberproaustin/">
          Austin Dennis on LinkedIn <span aria-hidden="true">↗</span>
        </a>
      </div>
    </>
  );
}
