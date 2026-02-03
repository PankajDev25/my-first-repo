import Image from "next/image";
import Link from "next/link";

import Badge from "./Badge";

type Project = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  image: string;
  links: { label: string; href: string }[];
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex w-full flex-col gap-6 rounded-2xl border border-border bg-card p-6 shadow-sm transition-transform hover:-translate-y-1">
      <div className="flex w-full flex-col gap-4 md:flex-row md:items-center">
        <div className="flex w-full flex-1 flex-col gap-4">
          <div className="flex flex-row flex-wrap items-center gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
          <p className="text-base text-muted">{project.summary}</p>
          <div className="flex flex-row flex-wrap items-center gap-4">
            {project.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-[0.2em] text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex w-full max-w-sm items-center justify-center rounded-xl border border-border bg-background p-4">
          <Image
            src={project.image}
            alt={`${project.title} cover`}
            width={420}
            height={280}
            className="h-auto w-full"
          />
        </div>
      </div>
    </article>
  );
}
