import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import {
  CertificationList,
  CredentialDates,
  FeaturedCertifications,
} from "@/components/certifications";
import { certifications } from "@/content/certifications";

describe("credential presentation", () => {
  it("preserves month precision and leaves unspecified expiration unstated", () => {
    const dated = certifications.find(
      (entry) => entry.id === "devops-engineer",
    )!;
    const html = renderToStaticMarkup(<CredentialDates credential={dated} />);
    expect(html).toContain('dateTime="2026-09"');
    expect(html).toContain("Sep 2027");
    const undated = certifications.find((entry) => entry.id === "oswp")!;
    expect(
      renderToStaticMarkup(<CredentialDates credential={undated} />),
    ).not.toContain("Expires");
  });

  it("keeps current credentials visible and background credentials collapsed", () => {
    const html = renderToStaticMarkup(<CertificationList />);
    const [current = "", background = ""] = html.split(
      '<details class="credential-background">',
    );
    expect(current).toContain("Associate of ISC2");
    expect(current).toContain("DevOps Engineer Expert");
    expect(current.match(/<li>/g)).toHaveLength(13);
    expect(background.match(/<li>/g)).toHaveLength(13);
    expect(background).toContain("Linux Essentials");
    expect(background).toContain("Tenable Cloud Security Administrator");
    expect(html).not.toMatch(/<details[^>]*\bopen/);
  });

  it("separates associate status and renders no invented verification links", () => {
    const html = renderToStaticMarkup(<CertificationList />);
    expect(html).toContain("Associate of ISC2");
    expect(html).not.toContain("Associate CCSP");
    expect(html).not.toContain("Thinkful");
    expect(html).not.toContain("MSSP");
    expect(html.match(/>Verify credential/g)).toHaveLength(24);
    for (const credential of certifications) {
      if (credential.credentialUrl) {
        expect(new URL(credential.credentialUrl).protocol).toBe("https:");
        expect(credential.credentialUrl).not.toContain("linkedin.com/safety");
        expect(html).toContain(`href="${credential.credentialUrl}"`);
      }
    }
    expect(
      certifications
        .filter((entry) => !entry.credentialUrl)
        .map((entry) => entry.id),
    ).toEqual(["tenable-cloud", "linux"]);
    expect(html).not.toContain("details pending");
    const featured = renderToStaticMarkup(<FeaturedCertifications />);
    expect(featured.match(/<li>/g)).toHaveLength(3);
    expect(featured).not.toContain("Associate of ISC2");
  });
});
