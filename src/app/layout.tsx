import type { Metadata } from "next";
import { Syne, DM_Sans, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { JsonLd } from "@/components/json-ld";
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
  "Full-Stack Developer — React, Next.js, Node.js, NestJS & React Native. Designing web UIs, REST APIs & PostgreSQL systems. Open to freelance work.";

const ogDescription =
  "Full-Stack Dev · React, Next.js, Node.js, React Native. Open to freelance work.";

export const metadata: Metadata = {
  title: {
    default: "Kyrylo Vitoshkin — Full-Stack React & Next.js Developer",
    template: "%s | Kyrylo Vitoshkin",
  },
  description,
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  keywords: [
    "Full-Stack",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "React Native",
    "TypeScript",
    "JavaScript",
    "Freelance Developer",
    "Web Developer",
    "Mobile Developer",
    "Kyrylo Vitoshkin",
    "cheesteer",
  ],
  authors: [{ name: "Kyrylo Vitoshkin", url: "https://github.com/Cheastear" }],
  creator: "Kyrylo Vitoshkin",
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000",
  ),
  openGraph: {
    type: "website",
    url: "/",
    title: "Kyrylo Vitoshkin — Full-Stack React & Next.js Developer",
    description: ogDescription,
    siteName: "Kyrylo Vitoshkin",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Cheesteer",
    title: "Kyrylo Vitoshkin — Full-Stack React & Next.js Developer",
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
        <JsonLd />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
