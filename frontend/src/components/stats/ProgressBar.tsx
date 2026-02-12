interface ProgressBarProps {
  completed: number;
  total: number;
}

export function ProgressBar({ completed, total }: ProgressBarProps) {
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-text-secondary">
          {completed} of {total} completed
        </span>
        <span className="font-medium text-text-primary">{percent}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-bg-input">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent-purple to-accent-cyan transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
