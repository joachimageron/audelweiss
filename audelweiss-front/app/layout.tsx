import type { Metadata } from "next";
import { DM_Sans, Aboreto } from "next/font/google";
import "./assets/css/style.css";

import LayoutWrapper from "@/components/LayoutWrapper";

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['200', '400', '500', '700'],
  variable: '--font-dm-sans',
})

const aboreto = Aboreto({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-aboreto',
})

export const metadata: Metadata = {
  title: "Créations artisanales uniques",
  description: "Découvre des créations fabriqués avec soin, inspirées par la nature et l’artisanat. Des pièces uniques, faites à la main, qui allient authenticité et douceur. ✨",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${dmSans.variable} ${aboreto.variable} antialiased`}>
      <body className="overflow-x-hidden">
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
