import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="font-heading text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
          OrvixAI
        </h1>
        <p className="mt-1 text-sm text-text-secondary">
          Smart task planning with AI behavior analysis
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Link
          href="/login"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-bg-card transition-all hover:border-border-hover hover:bg-bg-hover"
          aria-label="Sign in"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-text-secondary"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
