interface BadgeProps {
  label: string;
  variant?: "default" | "success" | "warning" | "danger" | "neutral";
}

const variantMap = {
  default: "bg-[rgba(95,112,93,0.1)] text-[var(--accent-primary)]",
  success: "bg-[rgba(95,112,93,0.1)] text-[var(--accent-primary)]",
  warning: "bg-[rgba(212,167,72,0.1)] text-[#A07820]",
  danger: "bg-[rgba(180,70,70,0.1)] text-[#A04040]",
  neutral: "bg-[var(--bg-primary)] text-[var(--text-secondary)]",
};

export function Badge({ label, variant = "default" }: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full",
        variantMap[variant],
      ].join(" ")}
    >
      {label}
    </span>
  );
}
