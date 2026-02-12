import type { TaskStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

const config: Record<TaskStatus, { label: string; className: string }> = {
  todo: {
    label: "Todo",
    className: "bg-text-muted/15 text-text-muted",
  },
  in_progress: {
    label: "In Progress",
    className: "bg-accent-cyan/15 text-accent-cyan",
  },
  done: {
    label: "Done",
    className: "bg-accent-green/15 text-accent-green",
  },
};

interface StatusBadgeProps {
  status: TaskStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const { label, className } = config[status];

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
