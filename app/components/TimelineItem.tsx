type TimelineItemProps = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

export default function TimelineItem({
  role,
  company,
  period,
  highlights,
}: TimelineItemProps) {
  return (
    <div className="flex w-full flex-col gap-3 rounded-2xl border border-border bg-card p-6">
      <div className="flex flex-row flex-wrap items-center justify-between gap-2">
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-foreground">{role}</span>
          <span className="text-sm text-muted">{company}</span>
        </div>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          {period}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {highlights.map((item) => (
          <span key={item} className="text-sm text-muted">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
