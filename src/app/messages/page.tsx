import { AppShell } from "@/components/layout/AppShell";
import { Card } from "@/components/ui/Card";
import { ShieldCheck, MessageSquare } from "lucide-react";
import { mockMessages } from "@/lib/mock-data";

export default function MessagesPage() {
  return (
    <AppShell>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-[var(--text-primary)] tracking-tight">
          Mesajlar
        </h1>
        <p className="text-[var(--text-secondary)] text-sm mt-1">
          Öğretmenlerinle platform içinde güvenli iletişim.
        </p>
      </div>

      {/* Security notice */}
      <Card padding="md" className="mb-6">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-[rgba(95,112,93,0.1)] flex items-center justify-center shrink-0 mt-0.5">
            <ShieldCheck size={15} className="text-[var(--accent-primary)]" />
          </div>
          <div>
            <p className="text-sm font-medium text-[var(--text-primary)]">
              Güvenli İletişim
            </p>
            <p className="text-sm text-[var(--text-secondary)] mt-1 leading-relaxed">
              Güvenliğiniz ve ders takibiniz için tüm iletişim Teneffüs platformu
              içinde tutulur. Öğretmenlerinizin kişisel iletişim bilgileri
              paylaşılmaz.
            </p>
          </div>
        </div>
      </Card>

      {/* Message list */}
      <div className="space-y-2">
        {mockMessages.map((msg) => (
          <Card key={msg.id} hover padding="md">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-primary)] flex items-center justify-center shrink-0">
                <MessageSquare size={14} className="text-[var(--text-muted)]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-[var(--text-primary)] truncate">
                    {msg.senderName}
                  </span>
                  <span className="text-xs text-[var(--text-muted)] shrink-0">{msg.time}</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] mt-0.5 line-clamp-2">
                  {msg.preview}
                </p>
              </div>
              {msg.unread && (
                <div className="w-2 h-2 rounded-full bg-[var(--accent-primary)] shrink-0 mt-1.5" />
              )}
            </div>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
