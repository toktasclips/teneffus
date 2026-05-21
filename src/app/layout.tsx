import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Teneffüs — Öğrenci Portalı",
  description: "Güvenli öğrenci portalı. Ders sürecin, öğretmen seçimin ve tüm takibin Teneffüs üzerinden yönetilir.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
