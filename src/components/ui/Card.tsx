"use client";

import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

const paddingMap = {
  sm: "p-4",
  md: "p-5",
  lg: "p-6",
};

export function Card({ children, className = "", hover = false, padding = "md", ...props }: CardProps) {
  return (
    <div
      className={[
        "rounded-2xl border transition-all duration-200",
        "bg-[var(--bg-secondary)] border-[var(--border-primary)]",
        "[box-shadow:var(--shadow-soft)]",
        paddingMap[padding],
        hover
          ? "cursor-pointer hover:-translate-y-0.5 hover:[box-shadow:0_8px_30px_rgba(0,0,0,0.07)]"
          : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
