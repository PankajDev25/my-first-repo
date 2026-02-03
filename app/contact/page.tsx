import Link from "next/link";

import Badge from "../components/Badge";
import Section from "../components/Section";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";
import { contact, site } from "../data/portfolio";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-6 py-16">
        <Section eyebrow="Contact" title={contact.headline}>
          <div className="flex w-full flex-col gap-6 rounded-2xl border border-border bg-card p-6 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-1 flex-col gap-4">
              <p className="max-w-xl text-base text-muted">{contact.body}</p>
              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                  Email
                </span>
                <Link href={`mailto:${site.email}`} className="text-sm text-accent">
                  {site.email}
                </Link>
              </div>
              <div className="flex flex-row flex-wrap gap-3">
                {site.socials.map((social) => (
                  <Badge key={social.label}>{social.label}</Badge>
                ))}
              </div>
            </div>
            <form className="flex w-full max-w-md flex-col gap-4">
              <label className="flex flex-col gap-2 text-sm font-semibold text-foreground">
                Name
                <input
                  type="text"
                  placeholder="Your name"
                  className="flex h-12 w-full items-center rounded-xl border border-border bg-background px-4 text-sm text-foreground"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-foreground">
                Email
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="flex h-12 w-full items-center rounded-xl border border-border bg-background px-4 text-sm text-foreground"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-foreground">
                Project Details
                <textarea
                  placeholder="Tell me about your project goals, timeline, and budget."
                  className="flex min-h-[140px] w-full items-start rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground"
                />
              </label>
              <button
                type="submit"
                className="flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-background"
              >
                {contact.buttonLabel}
              </button>
            </form>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
