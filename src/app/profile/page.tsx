import { AppShell } from "@/components/layout/AppShell";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { User, BookOpen } from "lucide-react";
import { mockStudent } from "@/lib/mock-data";

export default function ProfilePage() {
  const student = mockStudent;
  const progressPct = Math.round(
    (student.usedLessons / student.totalLessons) * 100
  );

  return (
    <AppShell>
      <div className="mb-10 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-[var(--text-primary)] tracking-tight mb-2">
          Profil
        </h1>
        <p className="text-base text-[var(--text-secondary)]">
          Hesap bilgilerini görüntüle ve güncelle.
        </p>
      </div>

      {/* Student info */}
      <Card padding="lg" className="mb-3">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-primary)] flex items-center justify-center shrink-0">
            <User size={20} className="text-[var(--text-muted)]" />
          </div>
          <div>
            <p className="text-xl font-semibold text-[var(--text-primary)]">
              {student.name}
            </p>
            <p className="text-sm text-[var(--text-secondary)] mt-0.5">{student.email}</p>
          </div>
        </div>

        <div className="space-y-3 pt-4 border-t border-[var(--border-primary)]">
          {[
            { label: "Ad Soyad", value: student.name },
            { label: "E-posta", value: student.email },
            { label: "Paket", value: student.packageName },
          ].map((row) => (
            <div key={row.label} className="flex items-center justify-between">
              <span className="text-xs text-[var(--text-muted)]">{row.label}</span>
              <span className="text-xs font-medium text-[var(--text-primary)]">
                {row.value}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <Button variant="secondary" size="sm">
            Düzenle
          </Button>
        </div>
      </Card>

      {/* Lesson package */}
      <Card padding="md">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen size={13} className="text-[var(--text-muted)]" />
          <p className="text-[11px] font-medium text-[var(--text-muted)] uppercase tracking-widest">
            Ders Hakkı
          </p>
        </div>
        <div className="flex items-end gap-2 mb-4">
          <span className="text-4xl font-semibold text-[var(--text-primary)] leading-none">
            {student.remainingLessons}
          </span>
          <span className="text-sm text-[var(--text-muted)] mb-0.5">
            kalan / {student.totalLessons} toplam
          </span>
        </div>
        <div className="h-1.5 rounded-full bg-[var(--bg-primary)] overflow-hidden">
          <div
            className="h-full rounded-full bg-[var(--accent-primary)]"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <p className="text-xs text-[var(--text-muted)] mt-2">
          {student.usedLessons} ders tamamlandı · %{progressPct} ilerleme
        </p>
      </Card>
    </AppShell>
  );
}
