import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { seo } from "@/data/info";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  openGraph: {
    title: seo.og.title,
    description: seo.description,
    type: "website",
    url: seo.og.url,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} antialiased min-h-screen bg-gradient-to-br from-ninja-white via-background to-ninja-silver dark:from-ninja-black dark:via-background dark:to-ninja-charcoal transition-colors duration-300`}>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
