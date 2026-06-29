import React from "react";
import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Schedule a Free Business Consultation | Lamb Strategy",
  description:
    "Get in touch with Lamb Strategy. Email support@lambstrategy.com or book a 30-minute consultation online.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Schedule a Free Business Consultation | Lamb Strategy",
    description:
      "Get in touch with Lamb Strategy. Email support@lambstrategy.com or book a 30-minute consultation online.",
    url: "https://lambstrategy.com/contact",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Lamb Strategy Contact Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schedule a Free Business Consultation | Lamb Strategy",
    description:
      "Get in touch with Lamb Strategy. Email support@lambstrategy.com or book a 30-minute consultation online.",
    images: ["/logo.png"],
  },
};

export default function ContactPage() {
  // Generate Contact, LocalBusiness, and Breadcrumb JSON-LD schemas
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
        "name": "Contact",
        "item": "https://lambstrategy.com/contact",
      },
    ],
  };

  const contactSchemaJson = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Lamb Strategy Contact Hub",
    "description": "Schedule a free 30-minute consultation or reach out for technical support options.",
    "url": "https://lambstrategy.com/contact",
  };

  const localBusinessSchemaJson = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Lamb Strategy",
    "image": "https://lambstrategy.com/logo.png",
    "email": "support@lambstrategy.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4011 NE Woodridge Drive",
      "addressLocality": "Lees Summit",
      "addressRegion": "MO",
      "postalCode": "64064",
      "addressCountry": "US",
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00",
    },
  };

  return (
    <>
      {/* Inject JSON-LD Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchemaJson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchemaJson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchemaJson) }}
      />
      <ContactContent />
    </>
  );
}
