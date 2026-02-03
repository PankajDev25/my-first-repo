import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  children: ReactNode;
};

export default function Section({ eyebrow, title, children }: SectionProps) {
  return (
    <section className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-2">
        {eyebrow ? (
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
            {eyebrow}
          </span>
        ) : null}
        <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
