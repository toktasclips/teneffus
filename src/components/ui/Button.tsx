"use client";

import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const variantMap = {
  primary:
    "bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-hover)] border-transparent",
  secondary:
    "bg-transparent text-[var(--text-primary)] border-[var(--border-primary)] hover:bg-[var(--bg-primary)]",
  ghost:
    "bg-transparent text-[var(--text-secondary)] border-transparent hover:text-[var(--text-primary)] hover:bg-[var(--bg-primary)]",
};

const sizeMap = {
  sm: "text-xs px-3 py-1.5 rounded-lg",
  md: "text-sm px-4 py-2 rounded-xl",
  lg: "text-sm px-5 py-2.5 rounded-xl",
};

export function Button({
  children,
  className = "",
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        "inline-flex items-center gap-2 border font-medium",
        "transition-all duration-150 cursor-pointer",
        "disabled:opacity-40 disabled:cursor-not-allowed",
        variantMap[variant],
        sizeMap[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
