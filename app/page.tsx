import Link from "next/link";

import Badge from "./components/Badge";
import ProjectCard from "./components/ProjectCard";
import Section from "./components/Section";
import SiteFooter from "./components/SiteFooter";
import SiteNav from "./components/SiteNav";
import {
  about,
  contact,
  experience,
  hero,
  projects,
  site,
  skills,
  testimonials,
} from "./data/portfolio";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-20 px-6 py-16">
        <section className="flex w-full flex-col gap-10">
          <div className="flex w-full flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-1 flex-col gap-6">
              <div className="flex flex-row flex-wrap items-center gap-3">
                <Badge>Portfolio</Badge>
                <Badge>{site.location}</Badge>
              </div>
              <h1 className="text-4xl font-semibold text-foreground md:text-6xl">
                {hero.headline}
              </h1>
              <p className="max-w-2xl text-lg text-muted">{hero.subhead}</p>
              <div className="flex flex-row flex-wrap items-center gap-4">
                <Link
                  href={hero.ctaPrimary.href}
                  className="flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-background"
                >
                  {hero.ctaPrimary.label}
                </Link>
                <Link
                  href={hero.ctaSecondary.href}
                  className="flex items-center justify-center rounded-full border border-foreground px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-foreground"
                >
                  {hero.ctaSecondary.label}
                </Link>
              </div>
            </div>
            <div className="flex w-full max-w-sm flex-col gap-4 rounded-2xl border border-border bg-card p-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Availability
              </span>
              <span className="text-lg font-semibold">{site.availability}</span>
              <span className="text-sm text-muted">{site.email}</span>
              <div className="flex flex-row flex-wrap items-center gap-3">
                {site.socials.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="text-sm font-semibold text-accent"
                  >
                    {social.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Section eyebrow="Featured" title="Selected Projects">
          <div className="flex w-full flex-col gap-6">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="flex">
            <Link
              href="/projects"
              className="text-sm font-semibold uppercase tracking-[0.2em] text-accent"
            >
              View all projects
            </Link>
          </div>
        </Section>

        <Section eyebrow="Experience" title="Design Leadership">
          <div className="flex w-full flex-col gap-4">
            {experience.map((item) => (
              <div
                key={`${item.company}-${item.period}`}
                className="flex w-full flex-col gap-3 rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex flex-row flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold text-foreground">
                      {item.role}
                    </span>
                    <span className="text-sm text-muted">{item.company}</span>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    {item.period}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  {item.highlights.map((highlight) => (
                    <span key={highlight} className="text-sm text-muted">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Skills" title="Capabilities">
          <div className="flex w-full flex-col gap-6 md:flex-row md:flex-wrap">
            {skills.map((group) => (
              <div
                key={group.group}
                className="flex min-w-[240px] flex-1 flex-col gap-4 rounded-2xl border border-border bg-card p-6"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                  {group.group}
                </span>
                <div className="flex flex-row flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Testimonials" title="Trusted By Teams">
          <div className="flex w-full flex-col gap-6 md:flex-row md:flex-wrap">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex min-w-[260px] flex-1 flex-col gap-4 rounded-2xl border border-border bg-card p-6"
              >
                <p className="text-base text-foreground">{testimonial.quote}</p>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </span>
                  <span className="text-xs text-muted">{testimonial.title}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow={about.title} title="Design Philosophy">
          <div className="flex w-full flex-col gap-6 rounded-2xl border border-border bg-card p-6">
            <p className="text-base text-muted">{about.body}</p>
            <div className="flex flex-row flex-wrap gap-3">
              {about.values.map((value) => (
                <Badge key={value}>{value}</Badge>
              ))}
            </div>
          </div>
        </Section>

        <Section eyebrow="Contact" title={contact.headline}>
          <div className="flex w-full flex-col gap-6 rounded-2xl border border-border bg-card p-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl text-base text-muted">{contact.body}</p>
            <Link
              href="/contact"
              className="flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white"
            >
              {contact.buttonLabel}
            </Link>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
