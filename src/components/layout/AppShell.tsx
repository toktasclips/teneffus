import { Sidebar } from "./Sidebar";
import { MobileNav } from "./MobileNav";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      <Sidebar />
      <div className="app-shell-main">
        <div className="app-shell-inner">
          {children}
        </div>
      </div>
      <MobileNav />
    </div>
  );
}
