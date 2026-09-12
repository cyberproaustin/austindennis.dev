import {
  certifications,
  credentialCategories,
  type Certification,
} from "@/content/certifications";

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

export function CertificationList() {
  return (
    <div className="credential-groups">
      {credentialCategories.map((category) => (
        <section
          key={category.id}
          aria-labelledby={`credentials-${category.id}`}
        >
          <h3 id={`credentials-${category.id}`}>{category.name}</h3>
          {category.id === "associate" && (
            <p className="credential-note">
              An associate designation, separate from full certification.
            </p>
          )}
          <ul className="credential-list">
            {certifications
              .filter((credential) => credential.category === category.id)
              .sort((a, b) => b.issuedOn.localeCompare(a.issuedOn))
              .map((credential) => (
                <li key={credential.id}>
                  <h4>{credential.name}</h4>
                  <p className="credential-issuer">{credential.issuer}</p>
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
        </section>
      ))}
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
