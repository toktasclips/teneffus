import { Sidebar } from "./Sidebar";
import { MobileNav } from "./MobileNav";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Sidebar />
      <div className="md:pl-60 min-h-screen">
        <main className="pb-24 md:pb-0">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10 py-8 md:py-12">
            {children}
          </div>
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
