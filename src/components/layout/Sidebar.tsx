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
    <aside className="hidden md:flex flex-col fixed top-0 left-0 h-full w-60 bg-[var(--bg-secondary)] border-r border-[var(--border-primary)]">
      {/* Logo */}
      <div className="px-5 h-14 flex items-center shrink-0">
        <span className="text-[var(--text-primary)] font-semibold text-[15px] tracking-tight select-none">
          Teneffüs
        </span>
      </div>

      <hr className="border-[var(--border-primary)] mx-0" />

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(item.href + "/");
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "flex items-center gap-3 px-3 h-9 rounded-lg text-sm transition-all duration-150",
                isActive
                  ? "bg-[var(--accent-light)] text-[var(--accent-primary)] font-medium"
                  : "text-[var(--text-secondary)] hover:bg-[rgba(0,0,0,0.04)] hover:text-[var(--text-primary)]",
              ].join(" ")}
            >
              <Icon size={15} className="shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <hr className="border-[var(--border-primary)] mx-0" />

      {/* Bottom: student name */}
      <div className="px-5 h-12 flex items-center gap-2.5 shrink-0">
        <User size={13} className="text-[var(--text-muted)] shrink-0" />
        <span className="text-[13px] text-[var(--text-secondary)] truncate">Ali Yılmaz</span>
      </div>
    </aside>
  );
}
