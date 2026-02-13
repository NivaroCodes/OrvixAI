"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { FormInput } from "@/components/ui/FormInput";
import { validateLoginForm, hasErrors } from "@/lib/validation";
import type { FormFieldError } from "@/lib/types";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FormFieldError>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const clearError = useCallback((field: keyof FormFieldError) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const formErrors = validateLoginForm(email, password);
      setErrors(formErrors);
      if (hasErrors(formErrors)) return;

      setIsSubmitting(true);
      // TODO: replace with API call
      console.log("Login:", { email, password });
      setIsSubmitting(false);
    },
    [email, password]
  );

  return (
    <div className="rounded-lg border border-border bg-bg-card p-6 shadow-[var(--glow-neon)] sm:p-8">
      <h2 className="mb-6 font-heading text-2xl font-bold text-text-primary">
        Welcome back
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={email}
          placeholder="you@example.com"
          error={errors.email}
          maxLength={50}
          onChangeAction={(v) => { setEmail(v); clearError("email"); }}
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          placeholder="Enter your password"
          error={errors.password}
          maxLength={20}
          onChangeAction={(v) => { setPassword(v); clearError("password"); }}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 rounded-lg bg-accent-neon px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-40"
        >
          {isSubmitting ? "Signing in..." : "Sign in"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-text-secondary">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-medium text-accent-neon hover:underline"
        >
          Create one
        </Link>
      </p>
    </div>
  );
}
