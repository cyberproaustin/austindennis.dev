"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  ["/about/", "About"],
  ["/projects/", "Systems"],
  ["/expertise/", "Expertise"],
  ["/writing/", "Writing"],
  ["/contact/", "Contact"],
] as const;
export function Navigation() {
  const pathname = usePathname();
  return (
    <nav aria-label="Main navigation">
      {links.map(([href, label]) => (
        <Link
          href={href}
          key={href}
          aria-current={
            pathname === href.slice(0, -1) || pathname.startsWith(href)
              ? "page"
              : undefined
          }
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
