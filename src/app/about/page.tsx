import React from "react";
import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About Us | Business Strategy & Operations Consulting | Lamb Strategy",
  description:
    "Learn about Lamb Strategy, our Kansas City-based consulting team, and our co-pilot philosophy. We help SMBs scale without operational chaos.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Business Strategy & Operations Consulting | Lamb Strategy",
    description:
      "Learn about Lamb Strategy, our Kansas City-based consulting team, and our co-pilot philosophy. We help SMBs scale without operational chaos.",
    url: "https://lambstrategy.com/about",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Lamb Strategy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Business Strategy & Operations Consulting | Lamb Strategy",
    description:
      "Learn about Lamb Strategy, our Kansas City-based consulting team, and our co-pilot philosophy. We help SMBs scale without operational chaos.",
    images: ["/logo.png"],
  },
};

export default function AboutPage() {
  // Breadcrumb schema
  const breadcrumbSchemaJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://lambstrategy.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://lambstrategy.com/about",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchemaJson) }}
      />
      <AboutContent />
    </>
  );
}
