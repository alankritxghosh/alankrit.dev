import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alankrit Ghosh - Product Builder | Looking for YC Startup Role",
  description:
    "20-year-old builder shipping apps and websites. Looking for first product role at US-based YC startup. Available April 2026.",
  keywords: [
    "product builder",
    "YC startup",
    "remote work",
    "SwiftUI",
    "Next.js",
    "portfolio",
  ],
  authors: [{ name: "Alankrit Ghosh" }],
  openGraph: {
    title: "Alankrit Ghosh - Product Builder",
    description:
      "Fast-shipping builder seeking remote product role at US-based YC startup.",
    url: "https://alankrit.dev",
    siteName: "Alankrit Ghosh Portfolio",
    images: [
      {
        url: "https://alankrit.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alankrit Ghosh - Product Builder",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alankrit Ghosh - Product Builder",
    description:
      "Fast-shipping builder seeking remote product role at US-based YC startup.",
    images: ["https://alankrit.dev/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alankrit Ghosh",
  url: "https://alankrit.dev",
  jobTitle: "Product Builder",
  description:
    "Fast-shipping builder seeking remote product role at US-based YC startup",
  sameAs: [
    "https://x.com/alankritxghosh",
    "https://www.linkedin.com/in/alankrit-ghosh-140614276",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
