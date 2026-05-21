import { AppShell } from "@/components/layout/AppShell";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Star } from "lucide-react";
import { mockTeachers } from "@/lib/mock-data";

export default function TeachersPage() {
  return (
    <AppShell>
      <div className="mb-8">
        <p className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-widest mb-1">
          Keşfet
        </p>
        <h1 className="text-[26px] font-semibold text-[var(--text-primary)] tracking-tight">
          Öğretmenler
        </h1>
      </div>

      <div className="space-y-3">
        {mockTeachers.map((teacher) => (
          <Card key={teacher.id} hover padding="md">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-primary)] flex items-center justify-center shrink-0">
                <span className="text-sm font-semibold text-[var(--accent-primary)]">
                  {teacher.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                      {teacher.name}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">
                      {teacher.subject} · {teacher.experience} yıl deneyim
                    </p>
                  </div>
                  <Button variant="secondary" size="sm" className="shrink-0">
                    İncele
                  </Button>
                </div>
                <p className="text-xs text-[var(--text-secondary)] mt-2.5 leading-relaxed">
                  {teacher.bio}
                </p>
                <div className="flex items-center gap-1.5 mt-3">
                  <Star
                    size={11}
                    className="text-[var(--accent-primary)] fill-[var(--accent-primary)]"
                  />
                  <span className="text-xs font-semibold text-[var(--text-primary)]">
                    {teacher.rating}
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">
                    ({teacher.reviewCount} değerlendirme)
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
