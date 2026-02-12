import type { BehaviorPattern, AiRecommendation } from "@/lib/types";
import { BehaviorAnalysis } from "@/components/ai/BehaviorAnalysis";
import { Recommendation } from "@/components/ai/Recommendation";

interface AiColumnProps {
  patterns: BehaviorPattern[];
  recommendations: AiRecommendation[];
}

export function AiColumn({ patterns, recommendations }: AiColumnProps) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-heading text-lg font-bold text-text-primary">AI Insights</h2>
      <Recommendation recommendations={recommendations} />
      <BehaviorAnalysis patterns={patterns} />
    </div>
  );
}
