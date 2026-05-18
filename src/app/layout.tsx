import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://moniqueranauro.adv.br";
const SITE_TITLE = "Monique Ranauro | Advogada Criminalista em Nova Iguaçu";
const SITE_DESCRIPTION =
  "Advocacia criminal estratégica em Nova Iguaçu e Baixada Fluminense. Atuação técnica, sigilosa e individualizada em Direito Penal. Plantão 24h para urgências criminais.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: "%s | Monique Ranauro Advocacia Criminal",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "advogada criminalista Nova Iguaçu",
    "advocacia criminal Baixada Fluminense",
    "defesa criminal Grande Rio",
    "advogada penal Nova Iguaçu",
    "prisão em flagrante Baixada Fluminense",
    "habeas corpus Nova Iguaçu",
    "Monique Ranauro advogada",
  ],
  authors: [{ name: "Monique Ranauro" }],
  creator: "Monique Ranauro",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Monique Ranauro Advocacia Criminal",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Monique Ranauro — Advogada Criminalista",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
