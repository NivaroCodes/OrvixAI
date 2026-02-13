export type TaskStatus = "todo" | "in_progress" | "done";
export type TaskPriority = "low" | "medium" | "high";

export interface Task {
  task_id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  deadline: string | null;
  created_at: string;
  updated_at: string;
}

export interface DayStats {
  totalPlanned: number;
  completed: number;
  avgTimePerTask: number;
  realisticLoad: number;
  overloadBy: number;
}

export interface BehaviorPattern {
  id: string;
  pattern: string;
  description: string;
  icon: string;
}

export interface AiRecommendation {
  id: string;
  title: string;
  message: string;
  actionable: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface FormFieldError {
  email?: string;
  password?: string;
  confirmPassword?: string;
}
