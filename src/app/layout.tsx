import type { Metadata } from "next";
import { Syne, DM_Sans, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Full-Stack Developer with 3+ years building scalable web and mobile apps with React, Next.js, Node.js, NestJS, and React Native. Available for freelance and contract work.";

export const metadata: Metadata = {
  title: {
    default: "Kirill Vitoshkin — Full-Stack Developer",
    template: "%s | Kirill Vitoshkin",
  },
  description,
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "NestJS",
    "React Native Developer",
    "TypeScript",
    "JavaScript",
    "Freelance Developer",
    "Web Developer",
    "Mobile Developer",
    "Kirill Vitoshkin",
    "cheesteer",
  ],
  authors: [{ name: "Kirill Vitoshkin", url: "https://github.com/Cheastear" }],
  creator: "Kirill Vitoshkin",
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000",
  ),
  openGraph: {
    type: "website",
    title: "Kirill Vitoshkin — Full-Stack Developer",
    description,
    siteName: "Kirill Vitoshkin",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kirill Vitoshkin — Full-Stack Developer",
    description,
    creator: "@Cheesteer",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      className={`${syne.variable} ${dmSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#111111]">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
