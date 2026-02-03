import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";
import { projects } from "../data/portfolio";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-6 py-16">
        <Section eyebrow="Portfolio" title="Projects">
          <p className="max-w-2xl text-base text-muted">
            A curated set of product and platform work focused on bold visuals,
            clean systems, and measurable outcomes.
          </p>
        </Section>
        <div className="flex w-full flex-col gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
