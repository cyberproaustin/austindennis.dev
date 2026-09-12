import { clouds } from "@/content/expertise";
export function CloudExpertise() {
  return (
    <div className="cloud-grid">
      {clouds.map((cloud) => (
        <article key={cloud.name} className="cloud-card">
          <p className="eyebrow">{cloud.label}</p>
          <h3>{cloud.name}</h3>
          <p>{cloud.description}</p>
        </article>
      ))}
    </div>
  );
}
