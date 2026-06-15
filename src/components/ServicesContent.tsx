"use client";

import React from "react";
import Link from "next/link";
import * as Icons from "lucide-react";
import { motion, Variants } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import PageTransition from "@/components/PageTransition";
import { servicesData } from "@/data/services";

const serviceDetailsList = [
  {
    id: "product-development",
    points: [
      "Product lifecycle management from blueprint to release",
      "Prototyping, minimum viable product (MVP) design, and testing",
      "Strategic pricing structures and feature prioritizing",
      "Technology stack selections and partner matching",
    ],
  },
  {
    id: "internal-systems-engineering",
    points: [
      "Custom CRM customization, data syncing, and tracking integrations",
      "Automated email marketing structures and transaction sequences",
      "Workspace organization (Slack, Notion, linear process trackers)",
      "Standard Operating Procedures (SOPs) development and training",
    ],
  },
  {
    id: "innovative-growth-solutions",
    points: [
      "Business Model Canvas reviews and competitive positioning audits",
      "Dynamic brainstorming sessions to unlock brand transformations",
      "GTM (Go-to-market) timeline mapping and partnership pipelines",
      "Financial projection models and pitch deck support for fundraising",
    ],
  },
  {
    id: "ai-powered-operating-system",
    points: [
      "OneRoom OS custom integration, deployment, and onboarding",
      "Internal knowledge database modeling and query tuning",
      "Automated summary generations and documentation flows",
      "Role-based communication channels and file indexing",
    ],
  },
  {
    id: "user-research-ux-design",
    points: [
      "In-depth customer interviews, persona definitions, and journey mapping",
      "Wireframe blueprints, high-fidelity prototypes, and user flows",
      "Usability testing, friction audits, and conversion optimization review",
      "Design systems creations for developer-friendly handoffs",
    ],
  },
  {
    id: "mobile-web-development",
    points: [
      "Fully responsive corporate landing pages and mobile applications",
      "A11y (accessibility) WCAG compliance audits and structural rewrites",
      "Performance optimization (speed audits, SEO compliance, asset caching)",
      "Front-end framework builds (Next.js, React, Tailwind CSS)",
    ],
  },
];

const AeoServiceDescriptions: Record<string, string> = {
  "product-development": "Product Development is a strategic consulting engagement that helps product founders and growing businesses transform software or physical ideas into commercial market entries. Our product development services streamline your product lifecycle from ideation to market entry, leveraging industry insights, current technology, and best practices to deliver results that resonate with your target audience.",
  "internal-systems-engineering": "Internal Systems Engineering is an operational consulting engagement that helps growing teams streamline CRM, email marketing, and workflow automation databases. We specialize in internal systems engineering to streamline and optimize business processes, providing guidance on CRMs, email marketing campaigns, website functionality, workflow systems, and office operations to elevate your operational framework.",
  "innovative-growth-solutions": "Innovative Growth Solutions is a growth strategy consulting engagement that helps small and medium-sized businesses discover new revenue channels and competitive advantages. Experience the power of innovative solutions through expert consulting, creative problem-solving, and collaborative strategy workshops, using tools like the Business Model Canvas to identify transformation opportunities that create measurable results.",
  "ai-powered-operating-system": "AI-Powered Operating System is a technology consulting engagement that helps complex organizations deploy OneRoom OS to capture organizational memory. Our patented AI-powered decentralized learning information system and communication solution helps businesses and organizations use AI to improve communication, knowledge sharing, and operational efficiency.",
  "user-research-ux-design": "User Research + UX Design is an experience strategy consulting engagement that helps businesses understand customer needs and design user-friendly digital wireframes. We help you understand your customers' real needs and design user-friendly digital experiences. From research to wireframes to experience strategy, we shape solutions that solve user challenges and improve customer satisfaction.",
  "mobile-web-development": "Mobile + Web Development is a front-end engineering consulting engagement that helps businesses design, develop, and launch WCAG-accessible web and mobile applications. We design, redesign, and optimize websites and mobile applications that are accessible, engaging, and built around real user needs. Whether you need a sleek website or functional application, we help you stand out.",
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const pointVariants: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export default function ServicesContent() {
  return (
    <PageTransition>
      <div className="relative py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* H1 Title added for SEO */}
          <h1 className="sr-only">
            Business Consulting Services for Small and Medium Companies
          </h1>

          {/* Section Heading reframed as a question for AEO */}
          <SectionHeading
            title="What services does Lamb Strategy offer?"
            subtitle="Revenue Growth, Digital Strategy, and Strategic Ops implementation for small to medium-sized companies."
            badge="Expertise Directory"
          />

          {/* Detailed services breakdown */}
          <div className="mt-12 space-y-12">
            {servicesData.map((service, idx) => {
              const detail = serviceDetailsList.find((d) => d.id === service.id);
              const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[service.iconName];
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={service.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.002, transition: { duration: 0.2 } }}
                  className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch border border-slate-200 rounded bg-white p-6 sm:p-8 md:p-10 hover:border-slate-350 transition-colors duration-200 ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Info block */}
                  <div className="flex-1 flex flex-col justify-between space-y-6">
                    <div>
                      <motion.div 
                        whileHover={{ rotate: 5, scale: 1.05 }}
                        className="inline-flex items-center justify-center p-3 rounded bg-slate-50 text-[#0F294A] border border-slate-100 mb-6"
                      >
                        {IconComponent && <IconComponent className="w-6 h-6 stroke-[1.75]" />}
                      </motion.div>
                      <h3 className="text-xl font-bold text-slate-900 font-sans mb-3">
                        {service.title}
                      </h3>
                      
                      <p className="text-slate-655 text-sm sm:text-base leading-relaxed font-sans font-light mb-6">
                        {AeoServiceDescriptions[service.id]}
                      </p>
                      
                      <div className="bg-slate-50 rounded px-3 py-1.5 border border-slate-200 inline-block text-xs font-semibold uppercase tracking-wider text-slate-500 font-sans">
                        {service.tagline}
                      </div>
                    </div>

                    <div>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                        <Link
                          href={`/contact?service=${encodeURIComponent(service.id)}`}
                          className="inline-flex items-center gap-1.5 px-5 py-3 bg-[#0F294A] hover:bg-[#0A1D37] text-white text-sm font-bold rounded transition-colors"
                        >
                          Request {service.title} Strategy
                          <Icons.ArrowRight className="w-4 h-4" />
                        </Link>
                      </motion.div>
                    </div>
                  </div>

                  {/* Focus points block */}
                  <motion.div 
                    variants={staggerContainer}
                    className="flex-1 bg-slate-50 border border-slate-200 rounded p-6 sm:p-8 flex flex-col justify-center"
                  >
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6 font-sans">
                      {service.title} Deliverables
                    </h4>
                    <ul className="space-y-4">
                      {detail?.points.map((point, pIdx) => (
                        <motion.li 
                          key={pIdx} 
                          variants={pointVariants}
                          className="flex items-start gap-3 text-sm text-slate-700 font-sans font-light"
                        >
                          <Icons.Check className="w-4.5 h-4.5 text-[#0F294A] flex-shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA section at bottom */}
          <div className="mt-20">
            <CTASection
              title="Start Your Growth Strategy"
              subtitle="Connect with our experts today to analyze your product lifecycle, digital touchpoints, or internal operational workflows."
              primaryText="Schedule a Consultation"
              primaryHref="/contact"
              secondaryText="Learn About OneRoom AI"
              secondaryHref="/oneroom-ai"
              variant="dark"
            />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
