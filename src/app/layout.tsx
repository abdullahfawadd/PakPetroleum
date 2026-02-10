import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Fraunces } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ClientProviders from "@/components/providers/ClientProviders";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

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

export const viewport: Viewport = {
  themeColor: "#020c1b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pakpetroleum.com"),
  title: {
    default: "PAK Petroleum | Powering Pakistan's Future",
    template: "%s | PAK Petroleum",
  },
  description:
    "Mission-critical petroleum trading, distribution, and logistics across Pakistan. Building the nation's most trusted energy network since 2026.",
  keywords: [
    "petroleum",
    "fuel",
    "Pakistan",
    "Islamabad",
    "energy",
    "trading",
    "distribution",
    "fuel stations",
    "oil and gas",
    "logistics",
  ],
  authors: [{ name: "PAK Petroleum Team" }],
  creator: "PAK Petroleum",
  publisher: "PAK Petroleum",
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
  openGraph: {
    title: "PAK Petroleum | Powering Pakistan's Future",
    description:
      "Mission-critical petroleum trading, distribution, and logistics across Pakistan.",
    url: "https://pakpetroleum.com",
    siteName: "PAK Petroleum",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PAK Petroleum Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PAK Petroleum",
    description:
      "Mission-critical petroleum trading & distribution across Pakistan.",
    creator: "@pakpetroleum",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${fraunces.variable} ${geistMono.variable} bg-body text-primary antialiased selection:bg-teal-400 selection:text-navy-950`}
      >
        <ClientProviders>
          <Navigation />
          {children}
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
