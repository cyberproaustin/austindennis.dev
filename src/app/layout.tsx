import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://austindennis.dev"),
  title: {
    default: "Austin Dennis | Platform Engineering & Cloud Security",
    template: "%s | Austin Dennis",
  },
  description:
    "Security engineering, platform automation, and cloud infrastructure. Systems and engineering notes by Austin Dennis.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div className="shell">
          <header className="site-header">
            <Link href="/" className="brand" aria-label="Austin Dennis home">
              <span className="brand-mark" aria-hidden="true">
                ad<span>.</span>
              </span>
              <span>Austin Dennis</span>
            </Link>
            <Navigation />
          </header>
          <main id="main">{children}</main>
          <footer className="site-footer">
            <Link href="/" className="footer-name">
              Austin Dennis
            </Link>
            <p>
              <span>© {new Date().getFullYear()} Austin Dennis</span>
            </p>
            <a href="#main" className="text-link">
              Back to top ↑
            </a>
          </footer>
        </div>
      </body>
    </html>
  );
}
