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
    "Premium petroleum trading, distribution, and logistics across Pakistan. Building the nation's most trusted energy network since 2026.",
  keywords:
    "petroleum, fuel, Pakistan, Islamabad, energy, trading, distribution, fuel stations",
  openGraph: {
    title: "PAK Petroleum | Powering Pakistan's Future",
    description:
      "Premium petroleum trading, distribution, and logistics across Pakistan.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PAK Petroleum",
    description:
      "Premium petroleum trading & distribution across Pakistan.",
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
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${fraunces.variable} ${geistMono.variable} font-sans antialiased bg-bg text-text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
