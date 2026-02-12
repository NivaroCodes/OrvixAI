import type { BehaviorPattern } from "@/lib/types";

interface BehaviorAnalysisProps {
  patterns: BehaviorPattern[];
}

export function BehaviorAnalysis({ patterns }: BehaviorAnalysisProps) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
        Behavior Patterns
      </h3>
      <div className="flex flex-col gap-2">
        {patterns.map((p) => (
          <div
            key={p.id}
            className="flex gap-3 rounded-lg border border-border bg-bg-card p-3 shadow-[var(--glow-cyan)] transition-all hover:border-border-hover"
          >
            <span className="mt-0.5 text-xl leading-none">{p.icon}</span>
            <div>
              <p className="text-sm font-medium text-text-primary">{p.pattern}</p>
              <p className="mt-0.5 text-xs text-text-secondary">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
