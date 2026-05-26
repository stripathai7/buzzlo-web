import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Buzzlo AI — AI Marketing Co-Pilot for Indian SMBs",
    template: "%s | Buzzlo AI",
  },
  description: siteConfig.description,
  keywords: [
    "ai marketing india",
    "whatsapp marketing tool",
    "small business marketing automation india",
    "hindi ai content",
    "festival marketing india",
    "smb marketing platform",
  ],
  authors: [{ name: "Buzzlo AI" }],
  creator: "Buzzlo AI",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: "Buzzlo AI — AI Marketing Co-Pilot for Indian SMBs",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Buzzlo AI — India's AI Marketing Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buzzlo AI — AI Marketing Co-Pilot for Indian SMBs",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Buzzlo AI",
  applicationCategory: "BusinessApplication",
  description: siteConfig.description,
  url: siteConfig.url,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
    description: "Free plan available. Pro at ₹999/month.",
  },
  operatingSystem: "Web, iOS, Android",
  audience: {
    "@type": "Audience",
    audienceType: "Small Business, Nonprofit",
  },
  inLanguage: ["en", "hi", "ta", "te", "kn", "mr"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
