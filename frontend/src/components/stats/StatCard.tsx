import { cn } from "@/lib/utils";

type Variant = "default" | "warning" | "success";

const variantStyles: Record<Variant, string> = {
  default: "text-text-primary",
  warning: "text-accent-orange",
  success: "text-accent-green",
};

interface StatCardProps {
  label: string;
  value: string | number;
  suffix?: string;
  variant?: Variant;
  icon?: string;
}

export function StatCard({
  label,
  value,
  suffix,
  variant = "default",
  icon,
}: StatCardProps) {
  return (
    <div className="rounded-lg border border-border bg-bg-card p-4 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-card-hover)]">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
          {label}
        </span>
        {icon && <span className="text-lg">{icon}</span>}
      </div>
      <div className="mt-2 flex items-baseline gap-1">
        <span className={cn("text-2xl font-bold font-heading", variantStyles[variant])}>
          {value}
        </span>
        {suffix && (
          <span className="text-sm text-text-muted">{suffix}</span>
        )}
      </div>
    </div>
  );
}
