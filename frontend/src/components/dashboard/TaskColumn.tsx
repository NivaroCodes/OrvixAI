"use client";

import type { Task } from "@/lib/types";
import { TaskInput } from "@/components/tasks/TaskInput";
import { TaskList } from "@/components/tasks/TaskList";

interface TaskColumnProps {
  tasks: Task[];
  onAdd: (title: string) => void;
  onToggle: (taskId: string) => void;
}

export function TaskColumn({ tasks, onAdd, onToggle }: TaskColumnProps) {
  const activeCount = tasks.filter((t) => t.status !== "done").length;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-lg font-bold text-text-primary">Tasks</h2>
        <span className="rounded-full bg-accent-purple/15 px-2.5 py-0.5 text-xs font-medium text-accent-purple">
          {activeCount} active
        </span>
      </div>
      <TaskInput onAdd={onAdd} />
      <TaskList tasks={tasks} onToggle={onToggle} />
    </div>
  );
}
