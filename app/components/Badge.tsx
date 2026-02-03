import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="flex items-center justify-center rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-muted">
      {children}
    </span>
  );
}
