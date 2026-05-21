import { AppShell } from "@/components/layout/AppShell";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CalendarDays, Clock } from "lucide-react";
import { mockUpcomingLessons, mockPastLessons } from "@/lib/mock-data";
import type { Lesson } from "@/types";

function statusLabel(status: Lesson["status"]) {
  if (status === "upcoming") return { label: "Yaklaşıyor", variant: "success" as const };
  if (status === "completed") return { label: "Tamamlandı", variant: "neutral" as const };
  return { label: "İptal", variant: "danger" as const };
}

function LessonCard({ lesson }: { lesson: Lesson }) {
  const { label, variant } = statusLabel(lesson.status);
  return (
    <Card padding="md">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-semibold text-[var(--text-primary)]">
              {lesson.subject}
            </span>
            <Badge label={label} variant={variant} />
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-1">{lesson.teacherName}</p>
        </div>
      </div>
      <div className="mt-3 pt-3 border-t border-[var(--border-primary)] flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <CalendarDays size={11} className="text-[var(--text-muted)]" />
          <span className="text-xs text-[var(--text-muted)]">{lesson.date}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock size={11} className="text-[var(--text-muted)]" />
          <span className="text-xs text-[var(--text-muted)]">
            {lesson.time} · {lesson.duration} dk
          </span>
        </div>
      </div>
    </Card>
  );
}

export default function LessonsPage() {
  return (
    <AppShell>
      <div className="mb-8">
        <p className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-widest mb-1">
          Takip
        </p>
        <h1 className="text-[26px] font-semibold text-[var(--text-primary)] tracking-tight">
          Derslerim
        </h1>
      </div>

      <section className="mb-8">
        <p className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-widest mb-3">
          Yaklaşan
        </p>
        <div className="space-y-2">
          {mockUpcomingLessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      </section>

      <section>
        <p className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-widest mb-3">
          Geçmiş
        </p>
        <div className="space-y-2">
          {mockPastLessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      </section>
    </AppShell>
  );
}
