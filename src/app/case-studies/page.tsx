import React from "react";
import type { Metadata } from "next";
import CaseStudiesContent from "@/components/CaseStudiesContent";

export const metadata: Metadata = {
  title: "Case Studies & Client Success | Lamb Strategy",
  description:
    "Read how Lamb Strategy helped SMBs and product founders scale operational systems, accelerate SaaS GTM timelines, and achieve average 40%+ growth.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Case Studies & Client Success | Lamb Strategy",
    description:
      "Read how Lamb Strategy helped SMBs and product founders scale operational systems, accelerate SaaS GTM timelines, and achieve average 40%+ growth.",
    url: "https://lambstrategy.com/case-studies",
    images: [
      {
        url: "/retro-planes.jpg",
        width: 1200,
        height: 630,
        alt: "Lamb Strategy Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies & Client Success | Lamb Strategy",
    description:
      "Read how Lamb Strategy helped SMBs and product founders scale operational systems, accelerate SaaS GTM timelines, and achieve average 40%+ growth.",
    images: ["/retro-planes.jpg"],
  },
};

export default function CaseStudiesPage() {
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
        "name": "Case Studies",
        "item": "https://lambstrategy.com/case-studies",
      },
    ],
  };

  return (
    <>
      {/* Inject Breadcrumb JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchemaJson) }}
      />
      <CaseStudiesContent />
    </>
  );
}
