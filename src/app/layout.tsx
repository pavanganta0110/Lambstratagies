import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Revenue Growth & Digital Strategy Consulting | Lamb Strategy",
    template: "%s | Lamb Strategy",
  },
  description:
    "Lamb Strategy helps small and medium businesses scale revenue, streamline operations, and launch products faster — with expert consulting and AI-powered systems like OneRoom OS. Book a free consultation.",
  metadataBase: new URL("https://lambstrategy.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Revenue Growth & Digital Strategy Consulting | Lamb Strategy",
    description:
      "Lamb Strategy helps small and medium businesses scale revenue, streamline operations, and launch products faster — with expert consulting and AI-powered systems like OneRoom OS. Book a free consultation.",
    url: "https://lambstrategy.com",
    siteName: "Lamb Strategy",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Lamb Strategy | Consulting & Operating Systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revenue Growth & Digital Strategy Consulting | Lamb Strategy",
    description:
      "Lamb Strategy helps small and medium businesses scale revenue, streamline operations, and launch products faster — with expert consulting and AI-powered systems like OneRoom OS. Book a free consultation.",
    images: ["/logo.png"],
  },
  keywords: [
    "management consulting",
    "digital strategy",
    "revenue growth",
    "product development consulting",
    "operations consulting",
    "AI operating system",
    "OneRoom AI",
    "UX design",
    "web development",
    "internal systems",
    "business growth strategy",
    "CRM optimization",
    "go-to-market strategy",
  ],
  authors: [{ name: "Lamb Strategy Team" }],
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Global organization schema setup
  const orgSchemaJson = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lamb Strategy",
    "url": "https://lambstrategy.com",
    "logo": "https://lambstrategy.com/logo.png",
    "description": "Lamb Strategy is a management consulting firm focused on Revenue Growth, Digital Strategy, and Strategic Ops implementation for small to medium-sized companies.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-512-555-0199",
      "contactType": "customer service",
      "email": "co-pilot@lambstrategy.com",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1200 Main St",
      "addressLocality": "Kansas City",
      "addressRegion": "MO",
      "postalCode": "64105",
      "addressCountry": "US"
    }
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-sky-500 selection:text-white">
        {/* Inject Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchemaJson) }}
        />
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
