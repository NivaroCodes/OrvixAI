"use client";

import type { Task } from "@/lib/types";
import { cn, formatDate } from "@/lib/utils";
import { PriorityBadge } from "@/components/ui/PriorityBadge";

interface TaskItemProps {
  task: Task;
  onToggle: (taskId: string) => void;
}

export function TaskItem({ task, onToggle }: TaskItemProps) {
  const isDone = task.status === "done";

  return (
    <div
      className={cn(
        "group flex items-start gap-3 rounded-lg border border-border bg-bg-card p-3 transition-all",
        "hover:border-border-hover hover:shadow-[var(--shadow-card-hover)]",
        isDone && "opacity-60"
      )}
    >
      <button
        onClick={() => onToggle(task.task_id)}
        className={cn(
          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors",
          isDone
            ? "border-accent-green bg-accent-green/20 text-accent-green"
            : "border-border hover:border-accent-purple"
        )}
        aria-label={isDone ? "Mark as todo" : "Mark as done"}
      >
        {isDone && (
          <svg
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      <div className="min-w-0 flex-1">
        <p
          className={cn(
            "text-sm font-medium text-text-primary",
            isDone && "line-through text-text-muted"
          )}
        >
          {task.title}
        </p>

        <div className="mt-1.5 flex flex-wrap items-center gap-2">
          <PriorityBadge priority={task.priority} />
          {task.deadline && (
            <span className="text-xs text-text-muted">
              {formatDate(task.deadline)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
