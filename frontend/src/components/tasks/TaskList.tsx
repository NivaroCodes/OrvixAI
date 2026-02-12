"use client";

import { useMemo, useState } from "react";
import type { Task, TaskStatus } from "@/lib/types";
import { cn } from "@/lib/utils";
import { TaskItem } from "@/components/tasks/TaskItem";

type Filter = "all" | TaskStatus;

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "todo", label: "Todo" },
  { value: "in_progress", label: "Active" },
  { value: "done", label: "Done" },
];

interface TaskListProps {
  tasks: Task[];
  onToggle: (taskId: string) => void;
}

export function TaskList({ tasks, onToggle }: TaskListProps) {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return tasks;
    return tasks.filter((t) => t.status === filter);
  }, [tasks, filter]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-1 rounded-lg bg-bg-secondary p-1">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={cn(
              "flex-1 rounded-md px-2 py-1.5 text-xs font-medium transition-colors",
              filter === f.value
                ? "bg-bg-card text-text-primary shadow-sm"
                : "text-text-muted hover:text-text-secondary"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        {filtered.length > 0 ? (
          filtered.map((task) => (
            <TaskItem key={task.task_id} task={task} onToggle={onToggle} />
          ))
        ) : (
          <p className="py-8 text-center text-sm text-text-muted">
            No tasks in this category
          </p>
        )}
      </div>
    </div>
  );
}
