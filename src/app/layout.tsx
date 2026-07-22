import type { Metadata } from "next";
import {
  IBM_Plex_Sans_Thai,
  Inter,
  Space_Grotesk,
  Noto_Sans_Thai,
} from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const sansFont = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const displayFont = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const numberFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-number",
  display: "swap",
});

const interFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | AI ACADEMY",
    default: "AI ACADEMY — คิดเป็น สั่ง AI เป็น ใช้ได้ทุกสายงาน",
  },
  description:
    "ระบบพัฒนาความคิด ทักษะ และกระบวนการทำงานด้วย AI ตั้งแต่บุคคลถึงองค์กร เรียนจริง ลงมือทำจริง ได้ผลลัพธ์จริง",
  openGraph: {
    title: "AI ACADEMY — คิดเป็น สั่ง AI เป็น ใช้ได้ทุกสายงาน",
    description:
      "ระบบพัฒนาความคิด ทักษะ และกระบวนการทำงานด้วย AI ตั้งแต่บุคคลถึงองค์กร",
    siteName: "AI ACADEMY",
    locale: "th_TH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
          lang="th"
          className={`h-full ${sansFont.variable} ${displayFont.variable} ${numberFont.variable} ${interFont.variable}`}
        >
        <body className="min-h-dvh flex flex-col bg-navy-deep text-white-ice antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
