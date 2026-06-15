import React from "react";
import type { Metadata } from "next";
import ServicesContent from "@/components/ServicesContent";
import { servicesData } from "@/data/services";

export const metadata: Metadata = {
  title: "Consulting Services | Product Development, Growth Strategy & Systems Engineering",
  description:
    "Lamb Strategy delivers expert consulting in product development, systems engineering, UX design, and AI integration to help SMBs scale faster.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Consulting Services | Product Development, Growth Strategy & Systems Engineering | Lamb Strategy",
    description:
      "Lamb Strategy delivers expert consulting in product development, systems engineering, UX design, and AI integration to help SMBs scale faster.",
    url: "https://lambstrategy.com/services",
    images: [
      {
        url: "/retro-planes.jpg",
        width: 1200,
        height: 630,
        alt: "Lamb Strategy Consulting Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consulting Services | Product Development, Growth Strategy & Systems Engineering | Lamb Strategy",
    description:
      "Lamb Strategy delivers expert consulting in product development, systems engineering, UX design, and AI integration to help SMBs scale faster.",
    images: ["/retro-planes.jpg"],
  },
};

const AeoServiceDescriptions: Record<string, string> = {
  "product-development": "Product Development is a strategic consulting engagement that helps product founders and growing businesses transform software or physical ideas into commercial market entries. Our product development services streamline your product lifecycle from ideation to market entry, leveraging industry insights, current technology, and best practices to deliver results that resonate with your target audience.",
  "internal-systems-engineering": "Internal Systems Engineering is an operational consulting engagement that helps growing teams streamline CRM, email marketing, and workflow automation databases. We specialize in internal systems engineering to streamline and optimize business processes, providing guidance on CRMs, email marketing campaigns, website functionality, workflow systems, and office operations to elevate your operational framework.",
  "innovative-growth-solutions": "Innovative Growth Solutions is a growth strategy consulting engagement that helps small and medium-sized businesses discover new revenue channels and competitive advantages. Experience the power of innovative solutions through expert consulting, creative problem-solving, and collaborative strategy workshops, using tools like the Business Model Canvas to identify transformation opportunities that create measurable results.",
  "ai-powered-operating-system": "AI-Powered Operating System is a technology consulting engagement that helps complex organizations deploy OneRoom OS to capture organizational memory. Our patented AI-powered decentralized learning information system and communication solution helps businesses and organizations use AI to improve communication, knowledge sharing, and operational efficiency.",
  "user-research-ux-design": "User Research + UX Design is an experience strategy consulting engagement that helps businesses understand customer needs and design user-friendly digital wireframes. We help you understand your customers' real needs and design user-friendly digital experiences. From research to wireframes to experience strategy, we shape solutions that solve user challenges and improve customer satisfaction.",
  "mobile-web-development": "Mobile + Web Development is a front-end engineering consulting engagement that helps businesses design, develop, and launch WCAG-accessible web and mobile applications. We design, redesign, and optimize websites and mobile applications that are accessible, engaging, and built around real user needs. Whether you need a sleek website or functional application, we help you stand out.",
};

export default function ServicesPage() {
  // Generate Services & Breadcrumb JSON-LD Schemas
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
        "name": "Services",
        "item": "https://lambstrategy.com/services",
      },
    ],
  };

  const servicesSchemaJson = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Lamb Strategy Consulting Services",
    "description": "We offer six core consulting disciplines designed to optimize corporate operations, product launches, and AI systems.",
    "itemListElement": servicesData.map((service, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": AeoServiceDescriptions[service.id],
        "provider": {
          "@type": "Organization",
          "name": "Lamb Strategy",
        },
        "serviceType": "Management Consulting",
      },
    })),
  };

  return (
    <>
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchemaJson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchemaJson) }}
      />
      <ServicesContent />
    </>
  );
}
