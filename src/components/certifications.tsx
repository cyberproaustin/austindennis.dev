import { certifications, type Certification } from "@/content/certifications";

function monthLabel(value: string) {
  const [year, month] = value.split("-");
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${months[Number(month) - 1]} ${year}`;
}

export function CredentialDates({ credential }: { credential: Certification }) {
  return (
    <p className="credential-dates">
      Issued{" "}
      <time dateTime={credential.issuedOn}>
        {monthLabel(credential.issuedOn)}
      </time>
      {credential.expiresOn && (
        <>
          {" · Expires "}
          <time dateTime={credential.expiresOn}>
            {monthLabel(credential.expiresOn)}
          </time>
        </>
      )}
    </p>
  );
}

function CredentialEntries({
  group,
}: {
  group: "expert" | "current" | "background";
}) {
  return (
    <ul className="credential-list">
      {certifications
        .filter((credential) => {
          if (group === "expert") return credential.featured;
          if (group === "current")
            return credential.emphasis === "current" && !credential.featured;
          return credential.emphasis === "background";
        })
        .sort((a, b) => b.issuedOn.localeCompare(a.issuedOn))
        .map((credential) => (
          <li key={credential.id}>
            <h4>{credential.name}</h4>
            <p className="credential-issuer">{credential.issuer}</p>
            {credential.kind === "designation" && (
              <p className="credential-note">
                Associate designation, separate from full certification.
              </p>
            )}
            <CredentialDates credential={credential} />
            {credential.credentialUrl && (
              <a
                className="text-link"
                href={credential.credentialUrl}
                aria-label={`Verify ${credential.name}`}
              >
                Verify credential <span aria-hidden="true">↗</span>
              </a>
            )}
          </li>
        ))}
    </ul>
  );
}

export function CertificationList() {
  return (
    <div className="credential-groups">
      <section aria-labelledby="credentials-expert">
        <h3 id="credentials-expert">Expert Credentials</h3>
        <CredentialEntries group="expert" />
      </section>
      <section aria-labelledby="credentials-current">
        <h3 id="credentials-current">Current focus</h3>
        <p className="credential-note">
          Cloud platforms, secure delivery, and security engineering.
        </p>
        <CredentialEntries group="current" />
      </section>
      <section aria-labelledby="credentials-background">
        <h3 id="credentials-background">Background and foundations</h3>
        <p className="credential-note">
          My background spans IT operations, networking, defensive security, and
          hands-on security testing.
        </p>
        <details className="credential-background">
          <summary>View additional credentials</summary>
          <CredentialEntries group="background" />
        </details>
      </section>
    </div>
  );
}

export function FeaturedCertifications() {
  return (
    <div className="featured-credentials">
      <h3>Selected certifications</h3>
      <ul>
        {certifications
          .filter((credential) => credential.featured)
          .map((credential) => (
            <li key={credential.id}>
              {credential.name.replace(/^Microsoft Certified: /, "")}
            </li>
          ))}
      </ul>
    </div>
  );
}
