import { Sidebar } from "./Sidebar";
import { MobileNav } from "./MobileNav";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Sidebar />

      {/* Main content area */}
      <main
        className="md:pl-[var(--sidebar-width)] pb-20 md:pb-0"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 md:py-8">
          {children}
        </div>
      </main>

      <MobileNav />
    </div>
  );
}
