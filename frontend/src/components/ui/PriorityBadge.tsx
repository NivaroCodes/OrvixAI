import type { TaskPriority } from "@/lib/types";
import { cn } from "@/lib/utils";

const config: Record<TaskPriority, { label: string; className: string }> = {
  low: {
    label: "Low",
    className: "bg-accent-green/15 text-accent-green",
  },
  medium: {
    label: "Med",
    className: "bg-accent-yellow/15 text-accent-yellow",
  },
  high: {
    label: "High",
    className: "bg-accent-red/15 text-accent-red",
  },
};

interface PriorityBadgeProps {
  priority: TaskPriority;
}

export function PriorityBadge({ priority }: PriorityBadgeProps) {
  const { label, className } = config[priority];

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium",
        className
      )}
    >
      {label}
    </span>
  );
}
