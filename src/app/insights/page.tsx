import React from "react";
import type { Metadata } from "next";
import InsightsContent from "@/components/InsightsContent";

export const metadata: Metadata = {
  title: "Insights & Strategy Articles | Lamb Strategy",
  description:
    "Read operational guides, GTM strategy playbooks, and AI systems research written by the Lamb Strategy consulting team.",
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    title: "Insights & Strategy Articles | Lamb Strategy",
    description:
      "Read operational guides, GTM strategy playbooks, and AI systems research written by the Lamb Strategy consulting team.",
    url: "https://lambstrategy.com/insights",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Lamb Strategy Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights & Strategy Articles | Lamb Strategy",
    description:
      "Read operational guides, GTM strategy playbooks, and AI systems research written by the Lamb Strategy consulting team.",
    images: ["/logo.png"],
  },
};

export default function InsightsPage() {
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
        "name": "Insights",
        "item": "https://lambstrategy.com/insights",
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
      <InsightsContent />
    </>
  );
}
