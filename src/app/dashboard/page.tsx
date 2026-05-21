import { AppShell } from "@/components/layout/AppShell";
import { Card } from "@/components/ui/Card";
import { CalendarDays, BookOpen, GraduationCap, TrendingUp, ShieldCheck } from "lucide-react";
import { mockStudent, mockUpcomingLessons, mockTeachers } from "@/lib/mock-data";

export default function DashboardPage() {
  const student = mockStudent;
  const nextLesson = mockUpcomingLessons[0];
  const selectedTeacher = mockTeachers[0];
  const progressPct = Math.round((student.usedLessons / student.totalLessons) * 100);

  return (
    <AppShell>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-[var(--text-primary)] tracking-tight">
          Merhaba, {student.name.split(" ")[0]}
        </h1>
        <p className="text-[var(--text-secondary)] text-sm mt-1">
          Teneffüs&apos;e hoş geldin. Bugün nasıl gidiyor?
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <Card padding="sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wide">
                Kalan Ders
              </p>
              <p className="text-3xl font-semibold text-[var(--text-primary)] mt-1">
                {student.remainingLessons}
              </p>
            </div>
            <div className="w-9 h-9 rounded-xl bg-[rgba(95,112,93,0.1)] flex items-center justify-center">
              <BookOpen size={16} className="text-[var(--accent-primary)]" />
            </div>
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-2">
            {student.usedLessons} / {student.totalLessons} kullanıldı
          </p>
        </Card>

        <Card padding="sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wide">
                Tamamlanan
              </p>
              <p className="text-3xl font-semibold text-[var(--text-primary)] mt-1">
                {student.usedLessons}
              </p>
            </div>
            <div className="w-9 h-9 rounded-xl bg-[rgba(95,112,93,0.1)] flex items-center justify-center">
              <TrendingUp size={16} className="text-[var(--accent-primary)]" />
            </div>
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-2">
            Toplam {student.totalLessons} ders paketi
          </p>
        </Card>

        <Card padding="sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wide">
                İlerleme
              </p>
              <p className="text-3xl font-semibold text-[var(--text-primary)] mt-1">
                %{progressPct}
              </p>
            </div>
            <div className="w-9 h-9 rounded-xl bg-[rgba(95,112,93,0.1)] flex items-center justify-center">
              <TrendingUp size={16} className="text-[var(--accent-primary)]" />
            </div>
          </div>
          <div className="mt-2 h-1 rounded-full bg-[var(--bg-primary)] overflow-hidden">
            <div
              className="h-full rounded-full bg-[var(--accent-primary)] transition-all"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </Card>
      </div>

      {/* Main cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Upcoming lesson */}
        <Card hover padding="md">
          <div className="flex items-center gap-2 mb-3">
            <CalendarDays size={15} className="text-[var(--text-muted)]" />
            <p className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wide">
              Yaklaşan Ders
            </p>
          </div>
          <p className="text-[var(--text-primary)] font-semibold">
            {nextLesson.subject}
          </p>
          <p className="text-sm text-[var(--text-secondary)] mt-0.5">
            {nextLesson.teacherName}
          </p>
          <div className="mt-4 pt-3 border-t border-[var(--border-primary)] flex items-center justify-between">
            <span className="text-xs text-[var(--text-muted)]">
              {nextLesson.date}
            </span>
            <span className="text-xs font-medium text-[var(--accent-primary)]">
              {nextLesson.time} — {nextLesson.duration} dk
            </span>
          </div>
        </Card>

        {/* Selected teacher */}
        <Card hover padding="md">
          <div className="flex items-center gap-2 mb-3">
            <GraduationCap size={15} className="text-[var(--text-muted)]" />
            <p className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wide">
              Seçili Öğretmen
            </p>
          </div>
          <p className="text-[var(--text-primary)] font-semibold">
            {selectedTeacher.name}
          </p>
          <p className="text-sm text-[var(--text-secondary)] mt-0.5">
            {selectedTeacher.subject}
          </p>
          <div className="mt-4 pt-3 border-t border-[var(--border-primary)] flex items-center justify-between">
            <span className="text-xs text-[var(--text-muted)]">
              {selectedTeacher.experience} yıl deneyim
            </span>
            <span className="text-xs font-medium text-[var(--accent-primary)]">
              {selectedTeacher.rating} / 5.0
            </span>
          </div>
        </Card>
      </div>

      {/* Progress card */}
      <Card padding="md" className="mb-4">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp size={15} className="text-[var(--text-muted)]" />
          <p className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wide">
            Ders İlerlemesi
          </p>
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-[var(--text-secondary)]">
            {student.packageName}
          </span>
          <span className="text-sm font-medium text-[var(--text-primary)]">
            {student.usedLessons} / {student.totalLessons} ders
          </span>
        </div>
        <div className="h-2 rounded-full bg-[var(--bg-primary)] overflow-hidden">
          <div
            className="h-full rounded-full bg-[var(--accent-primary)] transition-all"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <p className="text-xs text-[var(--text-muted)] mt-2">
          {student.remainingLessons} ders hakkın kaldı
        </p>
      </Card>

      {/* Trust message */}
      <Card padding="md">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-[rgba(95,112,93,0.1)] flex items-center justify-center shrink-0 mt-0.5">
            <ShieldCheck size={15} className="text-[var(--accent-primary)]" />
          </div>
          <div>
            <p className="text-sm font-medium text-[var(--text-primary)]">
              Güvenli Eğitim Platformu
            </p>
            <p className="text-sm text-[var(--text-secondary)] mt-1 leading-relaxed">
              Ders sürecin, öğretmen seçimin ve tüm takibin Teneffüs üzerinden güvenli
              şekilde yönetilir.
            </p>
          </div>
        </div>
      </Card>
    </AppShell>
  );
}
