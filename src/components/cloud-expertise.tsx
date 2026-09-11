import { certifications, clouds } from "@/content/expertise";
export function CloudExpertise() {
  return (
    <div className="cloud-grid">
      {clouds.map((cloud) => (
        <article key={cloud.name} className="cloud-card">
          <p className="eyebrow">{cloud.label}</p>
          <h3>{cloud.name}</h3>
          <p>{cloud.description}</p>
          {certifications
            .filter((cert) => cert.cloud === cloud.name)
            .map((cert) => (
              <p key={cert.name}>
                {cert.name} ·{" "}
                <span className="credential-status">{cert.status}</span>
                {cert.credentialUrl && (
                  <>
                    {" "}
                    · <a href={cert.credentialUrl}>Credential</a>
                  </>
                )}
              </p>
            ))}
        </article>
      ))}
    </div>
  );
}
