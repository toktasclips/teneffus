import { AppShell } from "@/components/layout/AppShell";
import { Card } from "@/components/ui/Card";
import {
  CalendarDays,
  BookOpen,
  GraduationCap,
  ShieldCheck,
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
      {/* HERO SECTION */}
      <div className="mb-12 md:mb-16">
        <p className="text-sm text-[var(--text-muted)] mb-3">Bugün, 21 Mayıs</p>
        <h1 className="text-4xl md:text-5xl font-semibold text-[var(--text-primary)] tracking-tight leading-tight mb-4">
          Merhaba, Ali
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-lg">
          Teneffüs ile ders sürecini sakin ve düzenli şekilde yönet.
        </p>
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          {
            label: "Kalan Ders",
            value: String(student.remainingLessons),
            sub: "ders hakkı",
          },
          {
            label: "Tamamlanan",
            value: String(student.usedLessons),
            sub: "ders yapıldı",
          },
          {
            label: "İlerleme",
            value: `%${progressPct}`,
            sub: "paket kullanımı",
          },
          {
            label: "Paket",
            value: "Standart",
            sub: student.packageName,
          },
        ].map((stat) => (
          <Card key={stat.label} padding="lg">
            <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-3">
              {stat.label}
            </p>
            <p className="text-4xl font-semibold text-[var(--text-primary)] tracking-tight leading-none">
              {stat.value}
            </p>
            <p className="text-sm text-[var(--text-muted)] mt-2">{stat.sub}</p>
          </Card>
        ))}
      </div>

      {/* UPCOMING LESSON + TEACHER */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Upcoming lesson */}
        <Card hover padding="md">
          <div className="flex items-center gap-2 mb-5">
            <CalendarDays size={13} className="text-[var(--text-muted)]" />
            <p className="text-[11px] font-medium text-[var(--text-muted)] uppercase tracking-widest">
              Yaklaşan Ders
            </p>
          </div>
          <p className="text-base font-semibold text-[var(--text-primary)] leading-tight">
            {nextLesson.subject}
          </p>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            {nextLesson.teacherName}
          </p>
          <div className="mt-5 pt-4 border-t border-[var(--border-primary)]">
            <div className="flex items-center gap-1.5 mb-1">
              <Clock size={11} className="text-[var(--text-muted)]" />
              <span className="text-xs text-[var(--text-muted)]">
                {nextLesson.date}, {nextLesson.time}
              </span>
            </div>
            <p className="text-xs font-medium text-[var(--accent-primary)]">
              {nextLesson.duration} dakika
            </p>
          </div>
        </Card>

        {/* Selected teacher */}
        <Card hover padding="md">
          <div className="flex items-center gap-2 mb-5">
            <GraduationCap size={13} className="text-[var(--text-muted)]" />
            <p className="text-[11px] font-medium text-[var(--text-muted)] uppercase tracking-widest">
              Öğretmenim
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-primary)] flex items-center justify-center shrink-0">
              <span className="text-sm font-semibold text-[var(--accent-primary)]">
                {selectedTeacher.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
            <div>
              <p className="text-base font-semibold text-[var(--text-primary)]">
                {selectedTeacher.name}
              </p>
              <p className="text-sm text-[var(--text-secondary)]">
                {selectedTeacher.subject}
              </p>
            </div>
          </div>
          <div className="mt-5 pt-4 border-t border-[var(--border-primary)] flex items-center justify-between">
            <span className="text-xs text-[var(--text-muted)]">
              {selectedTeacher.experience} yıl deneyim
            </span>
            <span className="text-xs font-semibold text-[var(--accent-primary)]">
              {selectedTeacher.rating} / 5.0
            </span>
          </div>
        </Card>
      </div>

      {/* PROGRESS CARD */}
      <Card padding="md" className="mb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <BookOpen size={13} className="text-[var(--text-muted)]" />
            <p className="text-[11px] font-medium text-[var(--text-muted)] uppercase tracking-widest">
              {student.packageName}
            </p>
          </div>
          <span className="text-xs font-semibold text-[var(--accent-primary)]">
            %{progressPct}
          </span>
        </div>
        <div className="h-2 rounded-full bg-[var(--bg-primary)] overflow-hidden">
          <div
            className="h-full rounded-full bg-[var(--accent-primary)] transition-all duration-500"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <div className="flex items-center justify-between mt-3">
          <span className="text-xs text-[var(--text-muted)]">
            {student.usedLessons} ders tamamlandı
          </span>
          <span className="text-xs text-[var(--text-muted)]">
            {student.remainingLessons} kalan / {student.totalLessons} toplam
          </span>
        </div>
      </Card>

      {/* TRUST MESSAGE */}
      <div className="flex items-center gap-3 px-1 py-2">
        <ShieldCheck size={13} className="text-[var(--text-muted)] shrink-0" />
        <p className="text-xs text-[var(--text-muted)] leading-relaxed">
          Ders sürecin, öğretmen seçimin ve tüm takibin Teneffüs üzerinden güvenli şekilde yönetilir.
        </p>
      </div>
    </AppShell>
  );
}
