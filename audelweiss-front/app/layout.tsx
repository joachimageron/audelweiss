import type { Metadata } from "next";
import { DM_Sans, Aboreto, Allura } from "next/font/google";

import "@/src/styles/global.css";

import Providers from "@/src/components/providers/providers";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import ScrollToTopButton from "@/src/components/baseElements/ToTopButton";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
  variable: "--font-dm-sans",
});

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-aboreto",
});

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-allura",
});

export const metadata: Metadata = {
  title: "Créations artisanales uniques",
  description:
    "Découvre des créations fabriqués avec soin, inspirées par la nature et l’artisanat. Des pièces uniques, faites à la main, qui allient authenticité et douceur. ✨",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${dmSans.variable} ${aboreto.variable} ${allura.variable} antialiased`}>
      <body className="overflow-x-hidden" suppressHydrationWarning>
        <Providers>
          <Header />
          <main className="lg:pt-0 pt-[7.4rem]">{children}</main>
          <Footer />
          <ScrollToTopButton />
        </Providers>
      </body>
    </html>
  );
}
