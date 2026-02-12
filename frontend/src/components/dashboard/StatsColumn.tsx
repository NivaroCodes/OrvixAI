import type { DayStats } from "@/lib/types";
import { StatCard } from "@/components/stats/StatCard";
import { ProgressBar } from "@/components/stats/ProgressBar";

interface StatsColumnProps {
  stats: DayStats;
}

export function StatsColumn({ stats }: StatsColumnProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-heading text-lg font-bold text-text-primary">Today</h2>

      <div className="grid grid-cols-2 gap-3">
        <StatCard
          label="Planned"
          value={stats.totalPlanned}
          icon={"\u{1F4CB}"}
        />
        <StatCard
          label="Completed"
          value={stats.completed}
          icon={"\u2705"}
          variant="success"
        />
        <StatCard
          label="Avg Time"
          value={stats.avgTimePerTask}
          suffix="hrs"
          icon={"\u23F1\uFE0F"}
        />
        <StatCard
          label="Realistic"
          value={stats.realisticLoad}
          suffix="tasks"
          icon={"\u{1F3AF}"}
        />
      </div>

      <ProgressBar completed={stats.completed} total={stats.totalPlanned} />

      {stats.overloadBy > 0 ? (
        <div className="rounded-lg border border-accent-orange/30 bg-accent-orange/10 p-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">{"\u26A0\uFE0F"}</span>
            <div>
              <p className="text-sm font-medium text-accent-orange">
                Overloaded by {stats.overloadBy} tasks
              </p>
              <p className="text-xs text-text-secondary">
                Consider moving low-priority items to tomorrow
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
