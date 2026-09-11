import Link from "next/link";
import { PageIntro } from "@/components/ui";
export default function NotFound() {
  return (
    <>
      <PageIntro eyebrow="404 / NOT FOUND" title="This route doesn’t exist.">
        <p>The page may have moved, or the address may be incorrect.</p>
      </PageIntro>
      <Link className="button" href="/">
        Return home →
      </Link>
    </>
  );
}
