import type { Metadata } from "next";
import { Space_Grotesk, Fraunces } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PAK Petroleum | Powering Pakistan's Future",
  description:
    "Mission-critical petroleum trading, distribution, and logistics across Pakistan. Building the nation's most trusted energy network since 2026.",
  keywords:
    "petroleum, fuel, Pakistan, Islamabad, energy, trading, distribution, fuel stations, oil marketing, logistics",
  authors: [{ name: "PAK Petroleum" }],
  creator: "PAK Petroleum",
  publisher: "PAK Petroleum",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "PAK Petroleum | Powering Pakistan's Future",
    description:
      "Mission-critical petroleum trading, distribution, and logistics across Pakistan.",
    url: "https://pakpetroleum.com",
    siteName: "PAK Petroleum",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PAK Petroleum",
    description:
      "Mission-critical petroleum trading & distribution across Pakistan.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${fraunces.variable} ${geistMono.variable}`}
        style={{ background: '#13101C', color: '#FFFFFF' }}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-md">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
