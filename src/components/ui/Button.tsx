"use client";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const variants = {
  primary: "bg-[var(--accent-primary)] text-white border-transparent hover:bg-[var(--accent-hover)]",
  secondary: "bg-transparent text-[var(--text-primary)] border-[var(--border-primary)] hover:bg-[var(--bg-primary)]",
  ghost: "bg-transparent text-[var(--text-secondary)] border-transparent hover:text-[var(--text-primary)] hover:bg-[rgba(0,0,0,0.04)]",
};

const sizes = {
  sm: "text-[13px] px-3.5 py-1.5 rounded-lg",
  md: "text-sm px-4 py-2 rounded-xl",
  lg: "text-sm px-5 py-2.5 rounded-xl",
};

export function Button({ children, className = "", variant = "primary", size = "md", ...props }: ButtonProps) {
  return (
    <button
      className={["inline-flex items-center gap-2 border font-medium transition-all duration-150 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed", variants[variant], sizes[size], className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
