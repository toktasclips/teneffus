import { AppShell } from "@/components/layout/AppShell";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Star } from "lucide-react";
import { mockTeachers } from "@/lib/mock-data";

export default function TeachersPage() {
  return (
    <AppShell>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-[var(--text-primary)] tracking-tight">
          Öğretmenler
        </h1>
        <p className="text-[var(--text-secondary)] text-sm mt-1">
          Sana uygun öğretmeni bul, dersini planla.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {mockTeachers.map((teacher) => (
          <Card key={teacher.id} hover padding="md">
            <div className="flex items-start justify-between gap-4">
              {/* Avatar placeholder */}
              <div className="flex items-start gap-4 flex-1 min-w-0">
                <div className="w-11 h-11 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-primary)] flex items-center justify-center shrink-0">
                  <span className="text-sm font-semibold text-[var(--accent-primary)]">
                    {teacher.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-[var(--text-primary)] font-semibold text-sm">
                      {teacher.name}
                    </h3>
                    <span className="text-xs text-[var(--text-muted)] bg-[var(--bg-primary)] px-2 py-0.5 rounded-full">
                      {teacher.subject}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
                    {teacher.bio}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[var(--border-primary)] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star size={12} className="text-[var(--accent-primary)] fill-[var(--accent-primary)]" />
                  <span className="text-xs font-medium text-[var(--text-primary)]">
                    {teacher.rating}
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">
                    ({teacher.reviewCount} değerlendirme)
                  </span>
                </div>
                <span className="text-xs text-[var(--text-muted)]">
                  {teacher.experience} yıl deneyim
                </span>
              </div>
              <Button variant="secondary" size="sm">
                İncele
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
