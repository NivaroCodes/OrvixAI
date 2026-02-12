"use client";

import { useCallback, useState } from "react";
import type { Task, DayStats, BehaviorPattern, AiRecommendation } from "@/lib/types";
import { generateId } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { TaskColumn } from "@/components/dashboard/TaskColumn";
import { StatsColumn } from "@/components/dashboard/StatsColumn";
import { AiColumn } from "@/components/dashboard/AiColumn";

export default function DashboardPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [patterns] = useState<BehaviorPattern[]>([]);
  const [recommendations] = useState<AiRecommendation[]>([]);

  const handleAddTask = useCallback((title: string) => {
    const now = new Date().toISOString();
    const newTask: Task = {
      task_id: generateId(),
      title,
      description: "",
      status: "todo",
      priority: "medium",
      deadline: null,
      created_at: now,
      updated_at: now,
    };
    setTasks((prev) => [newTask, ...prev]);
  }, []);

  const handleToggleTask = useCallback((taskId: string) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.task_id === taskId
          ? {
              ...t,
              status: t.status === "done" ? "todo" : "done",
              updated_at: new Date().toISOString(),
            }
          : t
      )
    );
  }, []);

  const completedCount = tasks.filter((t) => t.status === "done").length;

  const stats: DayStats = {
    totalPlanned: tasks.length,
    completed: completedCount,
    avgTimePerTask: 0,
    realisticLoad: 0,
    overloadBy: 0,
  };

  return (
    <div className="mx-auto min-h-screen max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
            OrvixAI
          </h1>
          <p className="mt-1 text-sm text-text-secondary">
            Smart task planning with AI behavior analysis
          </p>
        </div>
        <ThemeToggle />
      </header>

      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <TaskColumn
          tasks={tasks}
          onAdd={handleAddTask}
          onToggle={handleToggleTask}
        />
        <StatsColumn stats={stats} />
        <div className="md:col-span-2 lg:col-span-1">
          <AiColumn
            patterns={patterns}
            recommendations={recommendations}
          />
        </div>
      </main>
    </div>
  );
}
