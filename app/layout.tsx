import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taqieuddin | Portfolio",
  description:
    "Full-stack developer portfolio showcasing projects, skills, and experience.",
  metadataBase: new URL("https://taqieuddin-portfolio.vercel.app"),
  openGraph: {
    title: "Taqieuddin | Portfolio",
    description:
      "Full-stack developer portfolio showcasing projects, skills, and experience.",
    url: "https://taqieuddin-portfolio.vercel.app",
    siteName: "Taqieuddin Portfolio",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "bHntsusS79gLX_HmGgaW-e4FWUsNFLPbY9Zb_bkAf-8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
