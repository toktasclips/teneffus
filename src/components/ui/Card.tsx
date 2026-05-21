"use client";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  padding?: "sm" | "md" | "lg" | "xl";
}

const paddingMap = {
  sm: "p-5",
  md: "p-6",
  lg: "p-7",
  xl: "p-8",
};

export function Card({ children, className = "", hover = false, padding = "md", ...props }: CardProps) {
  const base = "rounded-2xl border border-[var(--border-primary)] bg-[var(--bg-secondary)] [box-shadow:var(--shadow-card)]";
  const hoverClass = hover ? "transition-all duration-200 cursor-pointer hover:-translate-y-[2px] hover:[box-shadow:var(--shadow-hover)]" : "transition-shadow duration-200";
  return (
    <div className={[base, hoverClass, paddingMap[padding], className].filter(Boolean).join(" ")} {...props}>
      {children}
    </div>
  );
}
