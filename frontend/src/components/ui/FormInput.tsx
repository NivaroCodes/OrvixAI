"use client";

interface FormInputProps {
  name: string;
  type: string;
  label: string;
  value: string;
  placeholder: string;
  error?: string;
  maxLength?: number;
  onChangeAction: (value: string) => void;
}

export function FormInput({
  name,
  type,
  label,
  value,
  placeholder,
  error,
  maxLength,
  onChangeAction,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-text-secondary">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={(e) => onChangeAction(e.target.value)}
        className={`rounded-lg border bg-bg-input px-3 py-2.5 text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors ${
          error
            ? "border-accent-red focus:border-accent-red"
            : "border-border focus:border-accent-neon"
        }`}
      />
      <p className={`min-h-4 text-xs ${error ? "text-accent-red" : "text-transparent"}`}>
        {error ?? "\u00A0"}
      </p>
    </div>
  );
}
