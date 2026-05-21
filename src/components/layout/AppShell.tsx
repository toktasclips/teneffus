import { Sidebar } from "./Sidebar";
import { MobileNav } from "./MobileNav";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Sidebar />

      <main className="md:pl-60 pb-24 md:pb-0 min-h-screen">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 py-8 md:py-10">
          {children}
        </div>
      </main>

      <MobileNav />
    </div>
  );
}
