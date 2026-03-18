import type { Metadata } from "next";
import { Archivo, Space_Grotesk, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
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
        className={`${archivo.variable} ${spaceGrotesk.variable} ${notoSansThai.variable} antialiased`}
        style={{ fontFamily: "var(--font-space-grotesk), var(--font-noto-thai), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
