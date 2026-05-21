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
    <aside
      className="hidden md:flex flex-col fixed top-0 left-0 h-full bg-[var(--bg-secondary)] border-r border-[var(--border-primary)]"
      style={{ width: "var(--sidebar-width)" }}
    >
      {/* Logo */}
      <div className="px-6 py-6 border-b border-[var(--border-primary)]">
        <span className="text-[var(--text-primary)] font-semibold text-[17px] tracking-tight">
          Teneffüs
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium",
                "transition-all duration-150 group",
                isActive
                  ? "bg-[var(--accent-primary)] text-white"
                  : "text-[var(--text-secondary)] hover:bg-[var(--bg-primary)] hover:text-[var(--text-primary)]",
              ].join(" ")}
            >
              <Icon
                size={16}
                className={[
                  "shrink-0 transition-colors",
                  isActive ? "text-white" : "text-[var(--text-muted)] group-hover:text-[var(--text-primary)]",
                ].join(" ")}
              />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-5 py-5 border-t border-[var(--border-primary)]">
        <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
          Güvenli eğitim platformu
        </p>
      </div>
    </aside>
  );
}
