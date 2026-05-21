import { AppShell } from "@/components/layout/AppShell";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Star } from "lucide-react";
import { mockTeachers } from "@/lib/mock-data";

export default function TeachersPage() {
  return (
    <AppShell>
      <div className="mb-10 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-[var(--text-primary)] tracking-tight mb-2">
          Öğretmenler
        </h1>
        <p className="text-base text-[var(--text-secondary)]">
          Sana uygun öğretmeni bul, dersini planla.
        </p>
      </div>

      <div className="space-y-4">
        {mockTeachers.map((teacher) => (
          <Card key={teacher.id} hover padding="md">
            {/* Top row: avatar + name/subject/experience */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-primary)] flex items-center justify-center shrink-0">
                <span className="text-sm font-semibold text-[var(--accent-primary)]">
                  {teacher.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-[var(--text-primary)]">
                  {teacher.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mt-0.5">
                  {teacher.subject} · {teacher.experience} yıl deneyim
                </p>
              </div>
            </div>

            {/* Bio */}
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
              {teacher.bio}
            </p>

            {/* Footer: rating + button */}
            <div className="flex items-center justify-between pt-4 border-t border-[var(--border-primary)]">
              <div className="flex items-center gap-1.5">
                <Star
                  size={13}
                  className="text-[var(--accent-primary)] fill-[var(--accent-primary)]"
                />
                <span className="text-sm font-semibold text-[var(--text-primary)]">
                  {teacher.rating}
                </span>
                <span className="text-xs text-[var(--text-muted)]">
                  ({teacher.reviewCount} değerlendirme)
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
