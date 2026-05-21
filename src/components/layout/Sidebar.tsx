"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  GraduationCap,
  BookOpen,
  MessageSquare,
  User,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Öğretmenler", href: "/teachers", icon: GraduationCap },
  { label: "Derslerim", href: "/lessons", icon: BookOpen },
  { label: "Mesajlar", href: "/messages", icon: MessageSquare },
  { label: "Profil", href: "/profile", icon: User },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="app-shell-sidebar">
      {/* Logo */}
      <div style={{ padding: "0 1.25rem", height: "3.5rem", display: "flex", alignItems: "center", flexShrink: 0 }}>
        <span style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "15px", letterSpacing: "-0.01em", userSelect: "none" }}>
          Teneffüs
        </span>
      </div>

      <div style={{ height: "1px", background: "var(--border-primary)", flexShrink: 0 }} />

      {/* Navigation */}
      <nav style={{ flex: 1, padding: "1rem 0.75rem", overflowY: "auto", display: "flex", flexDirection: "column", gap: "2px" }}>
        {navItems.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(item.href + "/");
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0 0.75rem",
                height: "2.25rem",
                borderRadius: "0.5rem",
                fontSize: "14px",
                fontWeight: isActive ? 500 : 400,
                textDecoration: "none",
                transition: "background 0.1s, color 0.1s",
                background: isActive ? "var(--accent-light)" : "transparent",
                color: isActive ? "var(--accent-primary)" : "var(--text-secondary)",
              }}
            >
              <Icon size={15} style={{ flexShrink: 0 }} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div style={{ height: "1px", background: "var(--border-primary)", flexShrink: 0 }} />

      {/* Bottom: student name */}
      <div style={{ padding: "0 1.25rem", height: "3rem", display: "flex", alignItems: "center", gap: "0.625rem", flexShrink: 0 }}>
        <User size={13} style={{ color: "var(--text-muted)", flexShrink: 0 }} />
        <span style={{ fontSize: "13px", color: "var(--text-secondary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          Ali Yılmaz
        </span>
      </div>
    </aside>
  );
}
