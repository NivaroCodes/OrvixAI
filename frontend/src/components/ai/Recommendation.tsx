import type { AiRecommendation } from "@/lib/types";

interface RecommendationProps {
  recommendations: AiRecommendation[];
}

export function Recommendation({ recommendations }: RecommendationProps) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
        AI Recommendations
      </h3>
      <div className="flex flex-col gap-3">
        {recommendations.map((r) => (
          <div
            key={r.id}
            className="rounded-lg border border-accent-purple/30 bg-bg-card p-4 shadow-[var(--glow-purple)] transition-all hover:border-accent-purple/50"
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-accent-purple/15 text-xs">
                {"\u2728"}
              </span>
              <h4 className="text-sm font-semibold text-text-primary">{r.title}</h4>
            </div>
            <p className="text-xs leading-relaxed text-text-secondary">{r.message}</p>
            <div className="mt-3 rounded-md bg-accent-purple/10 px-3 py-2">
              <p className="text-xs font-medium text-accent-purple">{r.actionable}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
