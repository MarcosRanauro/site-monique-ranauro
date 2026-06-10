import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acesso",
  robots: { index: false, follow: false },
};

export default function AcessoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-admin-background text-admin-foreground">
      {children}
    </div>
  );
}
