import Link from "next/link";

import { site } from "../data/portfolio";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-row items-center justify-between px-6 py-4">
        <Link href="/" className="flex flex-row items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background">
            <span className="text-sm font-semibold">AC</span>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-semibold">{site.name}</span>
            <span className="text-xs text-muted">{site.role}</span>
          </div>
        </Link>
        <div className="flex flex-row flex-wrap items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
