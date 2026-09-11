import Link from "next/link";
import type { ReactNode } from "react";
export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <header className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <div className="lede">{children}</div>
    </header>
  );
}
export function SectionHeading({
  title,
  href,
  linkText,
}: {
  title: string;
  href?: string;
  linkText?: string;
}) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      {href && (
        <Link className="text-link" href={href}>
          {linkText} <span aria-hidden="true">↗</span>
        </Link>
      )}
    </div>
  );
}
export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags" aria-label="Technologies and themes">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
