import { AppShell } from "@/components/layout/AppShell";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { User, Package, BookOpen } from "lucide-react";
import { mockStudent } from "@/lib/mock-data";

export default function ProfilePage() {
  const student = mockStudent;
  const progressPct = Math.round((student.usedLessons / student.totalLessons) * 100);

  return (
    <AppShell>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-[var(--text-primary)] tracking-tight">
          Profil
        </h1>
        <p className="text-[var(--text-secondary)] text-sm mt-1">
          Hesap bilgilerin ve paket detayları.
        </p>
      </div>

      {/* Student info */}
      <Card padding="lg" className="mb-4">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-primary)] flex items-center justify-center">
            <User size={22} className="text-[var(--text-muted)]" />
          </div>
          <div>
            <h2 className="text-[var(--text-primary)] font-semibold text-lg">
              {student.name}
            </h2>
            <p className="text-sm text-[var(--text-secondary)]">{student.email}</p>
          </div>
        </div>

        <div className="space-y-3 pt-4 border-t border-[var(--border-primary)]">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[var(--text-secondary)]">Ad Soyad</span>
            <span className="text-sm font-medium text-[var(--text-primary)]">
              {student.name}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-[var(--text-secondary)]">E-posta</span>
            <span className="text-sm font-medium text-[var(--text-primary)]">
              {student.email}
            </span>
          </div>
        </div>

        <div className="mt-5">
          <Button variant="secondary" size="md">
            Bilgileri Düzenle
          </Button>
        </div>
      </Card>

      {/* Package info */}
      <Card padding="md" className="mb-4">
        <div className="flex items-center gap-2 mb-4">
          <Package size={15} className="text-[var(--text-muted)]" />
          <p className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wide">
            Paket Bilgisi
          </p>
        </div>
        <p className="text-[var(--text-primary)] font-semibold">{student.packageName}</p>
        <p className="text-sm text-[var(--text-secondary)] mt-0.5">
          {student.totalLessons} ders hakkı
        </p>
      </Card>

      {/* Remaining lessons */}
      <Card padding="md">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen size={15} className="text-[var(--text-muted)]" />
          <p className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wide">
            Kalan Ders Hakkı
          </p>
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-[var(--text-secondary)]">İlerleme</span>
          <span className="text-sm font-medium text-[var(--text-primary)]">
            {student.usedLessons} / {student.totalLessons}
          </span>
        </div>
        <div className="h-2 rounded-full bg-[var(--bg-primary)] overflow-hidden mb-2">
          <div
            className="h-full rounded-full bg-[var(--accent-primary)]"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <p className="text-xs text-[var(--text-muted)]">
          {student.remainingLessons} ders hakkın kaldı
        </p>
      </Card>
    </AppShell>
  );
}
