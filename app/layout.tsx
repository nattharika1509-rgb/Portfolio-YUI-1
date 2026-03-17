import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-thai",
  subsets: ["thai"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nattarika Thepphot - Portfolio",
  description: "Portfolio of Miss Nattarika Thepphot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansThai.variable} antialiased`}
        style={{ fontFamily: "var(--font-noto-thai), var(--font-geist-sans), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
