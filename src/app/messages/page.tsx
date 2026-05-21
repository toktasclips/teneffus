import { AppShell } from "@/components/layout/AppShell";
import { Card } from "@/components/ui/Card";
import { ShieldCheck } from "lucide-react";
import { mockMessages } from "@/lib/mock-data";

export default function MessagesPage() {
  return (
    <AppShell>
      <div className="mb-10 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-[var(--text-primary)] tracking-tight mb-2">
          Mesajlar
        </h1>
        <p className="text-base text-[var(--text-secondary)]">
          Öğretmenlerinle ve Teneffüs ile iletişimde kal.
        </p>
      </div>

      {/* Security notice — subtle inline, no heavy card border */}
      <div className="flex items-center gap-3 px-1 py-2 mb-6">
        <ShieldCheck size={13} className="text-[var(--text-muted)] shrink-0" />
        <p className="text-xs text-[var(--text-muted)] leading-relaxed">
          Güvenliğiniz için tüm iletişim Teneffüs içinde tutulur. Öğretmen iletişim bilgileri paylaşılmaz.
        </p>
      </div>

      <div className="space-y-2">
        {mockMessages.map((msg) => (
          <Card key={msg.id} hover padding="md">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-primary)] flex items-center justify-center shrink-0">
                <span className="text-[13px] font-semibold text-[var(--accent-primary)]">
                  {msg.senderName[0]}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-[var(--text-primary)] truncate">
                    {msg.senderName}
                  </span>
                  <span className="text-xs text-[var(--text-muted)] shrink-0">
                    {msg.time}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] mt-0.5 line-clamp-1">
                  {msg.preview}
                </p>
              </div>
              {msg.unread && (
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] shrink-0 mt-2" />
              )}
            </div>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
