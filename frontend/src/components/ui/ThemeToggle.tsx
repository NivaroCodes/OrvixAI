"use client";

import { useTheme } from "@/lib/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-bg-card text-lg transition-all hover:border-border-hover hover:bg-bg-hover"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? "\u2600\uFE0F" : "\u{1F319}"}
    </button>
  );
}
