import { AppShell } from "@/components/layout/AppShell";
import { Card } from "@/components/ui/Card";
import {
  CalendarDays,
  BookOpen,
  GraduationCap,
  ShieldCheck,
  ArrowRight,
  Clock,
} from "lucide-react";
import { mockStudent, mockUpcomingLessons, mockTeachers } from "@/lib/mock-data";

export default function DashboardPage() {
  const student = mockStudent;
  const nextLesson = mockUpcomingLessons[0];
  const selectedTeacher = mockTeachers[0];
  const progressPct = Math.round(
    (student.usedLessons / student.totalLessons) * 100
  );

  return (
    <AppShell>
      {/* Page header */}
      <div className="mb-8">
        <p className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-widest mb-1">
          Hoş geldin
        </p>
        <h1 className="text-[26px] font-semibold text-[var(--text-primary)] tracking-tight leading-tight">
          {student.name}
        </h1>
      </div>

      {/* Remaining lessons — hero stat */}
      <Card padding="lg" className="mb-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-widest mb-3">
              Kalan Ders Hakkı
            </p>
            <div className="flex items-end gap-2">
              <span className="text-5xl font-semibold text-[var(--text-primary)] leading-none">
                {student.remainingLessons}
              </span>
              <span className="text-sm text-[var(--text-muted)] mb-1">
                / {student.totalLessons} ders
              </span>
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-3">
              {student.packageName}
            </p>
          </div>
          <div className="flex flex-col items-end gap-3">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: "rgba(95,112,93,0.08)" }}
            >
              <BookOpen size={22} className="text-[var(--accent-primary)]" />
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-[var(--text-muted)]">İlerleme</span>
            <span className="text-xs font-medium text-[var(--accent-primary)]">
              %{progressPct}
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-[var(--bg-primary)] overflow-hidden">
            <div
              className="h-full rounded-full bg-[var(--accent-primary)] transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
      </Card>

      {/* Upcoming lesson + Teacher */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* Upcoming lesson */}
        <Card hover padding="md">
          <div className="flex items-center gap-2 mb-4">
            <CalendarDays size={13} className="text-[var(--text-muted)]" />
            <p className="text-[11px] font-medium text-[var(--text-muted)] uppercase tracking-widest">
              Yaklaşan Ders
            </p>
          </div>
          <p className="text-base font-semibold text-[var(--text-primary)] leading-tight">
            {nextLesson.subject}
          </p>
          <p className="text-sm text-[var(--text-secondary)] mt-0.5">
            {nextLesson.teacherName}
          </p>
          <div className="mt-4 pt-3 border-t border-[var(--border-primary)]">
            <div className="flex items-center gap-1.5">
              <Clock size={11} className="text-[var(--text-muted)]" />
              <span className="text-xs text-[var(--text-muted)]">
                {nextLesson.date}, {nextLesson.time}
              </span>
            </div>
            <p className="text-xs font-medium text-[var(--accent-primary)] mt-1">
              {nextLesson.duration} dakika
            </p>
          </div>
        </Card>

        {/* Selected teacher */}
        <Card hover padding="md">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap size={13} className="text-[var(--text-muted)]" />
            <p className="text-[11px] font-medium text-[var(--text-muted)] uppercase tracking-widest">
              Öğretmenim
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-primary)] flex items-center justify-center shrink-0">
              <span className="text-sm font-semibold text-[var(--accent-primary)]">
                {selectedTeacher.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                {selectedTeacher.name}
              </p>
              <p className="text-xs text-[var(--text-secondary)]">
                {selectedTeacher.subject}
              </p>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-[var(--border-primary)] flex items-center justify-between">
            <span className="text-xs text-[var(--text-muted)]">
              {selectedTeacher.experience} yıl deneyim
            </span>
            <span className="text-xs font-semibold text-[var(--accent-primary)]">
              {selectedTeacher.rating} / 5.0
            </span>
          </div>
        </Card>
      </div>

      {/* Quick links row */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {[
          { label: "Öğretmenlere Bak", href: "/teachers", icon: GraduationCap },
          { label: "Tüm Derslerim", href: "/lessons", icon: BookOpen },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex items-center justify-between px-4 py-3.5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-primary)] [box-shadow:var(--shadow-soft)] hover:-translate-y-0.5 hover:[box-shadow:0_8px_30px_rgba(0,0,0,0.07)] transition-all duration-200 cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <item.icon size={14} className="text-[var(--text-muted)]" />
              <span className="text-sm font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                {item.label}
              </span>
            </div>
            <ArrowRight
              size={13}
              className="text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] transition-colors"
            />
          </a>
        ))}
      </div>

      {/* Trust notice */}
      <div className="flex items-start gap-3 px-4 py-3.5 rounded-2xl border border-[var(--border-primary)] bg-[var(--bg-secondary)]">
        <ShieldCheck
          size={14}
          className="text-[var(--accent-primary)] shrink-0 mt-0.5"
        />
        <p className="text-xs text-[var(--text-muted)] leading-relaxed">
          Ders sürecin, öğretmen seçimin ve tüm takibin Teneffüs üzerinden
          güvenli şekilde yönetilir.
        </p>
      </div>
    </AppShell>
  );
}
