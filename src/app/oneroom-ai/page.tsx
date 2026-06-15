import React from "react";
import type { Metadata } from "next";
import OneRoomContent from "@/components/OneRoomContent";

export const metadata: Metadata = {
  title: "OneRoom AI | AI-Powered Operating System for Organizations",
  description:
    "Discover OneRoom OS, an AI-powered operating system that simplifies team communication, captures organizational memory, automates workflows, and assists complex companies in decision-making. Request a live demo today.",
  alternates: {
    canonical: "/oneroom-ai",
  },
  openGraph: {
    title: "OneRoom AI | AI-Powered Operating System for Organizations | Lamb Strategy",
    description:
      "Discover OneRoom OS, an AI-powered operating system that simplifies team communication, captures organizational memory, automates workflows, and assists complex companies in decision-making. Request a live demo today.",
    url: "https://lambstrategy.com/oneroom-ai",
    images: [
      {
        url: "/oneroom-mockup.png",
        width: 1200,
        height: 630,
        alt: "OneRoom OS AI-Powered Operating System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OneRoom AI | AI-Powered Operating System for Organizations | Lamb Strategy",
    description:
      "Discover OneRoom OS, an AI-powered operating system that simplifies team communication, captures organizational memory, automates workflows, and assists complex companies in decision-making. Request a live demo today.",
    images: ["/oneroom-mockup.png"],
  },
};

export default function OneRoomAIPage() {
  return <OneRoomContent />;
}
