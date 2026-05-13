import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
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
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
