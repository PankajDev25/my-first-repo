import Link from "next/link";

import { site } from "../data/portfolio";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10">
        <div className="flex flex-row flex-wrap items-center justify-between gap-6">
          <div className="flex flex-col">
            <span className="text-sm font-semibold uppercase tracking-[0.2em]">
              {site.name}
            </span>
            <span className="text-sm text-muted">{site.tagline}</span>
          </div>
          <div className="flex flex-row flex-wrap items-center gap-4">
            {site.socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="text-sm font-semibold text-foreground transition-colors hover:text-accent"
              >
                {social.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-between gap-4 text-xs text-muted">
          <span>Copyright (c) 2026 {site.name}. All rights reserved.</span>
          <span>{site.location}</span>
        </div>
      </div>
    </footer>
  );
}
