import Badge from "../components/Badge";
import Section from "../components/Section";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";
import { about, experience, site, skills } from "../data/portfolio";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-6 py-16">
        <Section eyebrow="About" title={`Meet ${site.name}`}>
          <div className="flex w-full flex-col gap-6 rounded-2xl border border-border bg-card p-6">
            <p className="text-base text-muted">{about.body}</p>
            <div className="flex flex-row flex-wrap gap-3">
              {about.values.map((value) => (
                <Badge key={value}>{value}</Badge>
              ))}
            </div>
          </div>
        </Section>

        <Section eyebrow="Experience" title="Where I Have Worked">
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

        <Section eyebrow="Skills" title="Toolbox">
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
      </main>
      <SiteFooter />
    </div>
  );
}
