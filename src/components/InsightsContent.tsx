"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Calendar, ArrowRight, User } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import PageTransition from "@/components/PageTransition";

const articles = [
  {
    title: "How to Scale Operations for a 10-Person Team",
    slug: "scale-operations-10-person-team",
    category: "Operations Strategy",
    date: "June 10, 2026",
    author: "Lamb Strategy Team",
    synopsis: "As teams hit the double-digit mark, ad-hoc communications fail. We map the 3 essential SOPs to document immediately to prevent key-person dependency and administrative fatigue.",
  },
  {
    title: "What is a Go-to-Market (GTM) Strategy?",
    slug: "what-is-go-to-market-strategy",
    category: "Product Development",
    date: "May 28, 2026",
    author: "Lamb Strategy Team",
    synopsis: "A go-to-market strategy is not just a marketing plan. It is a cross-functional blueprint linking pricing, channel distribution, and customer data. Learn to structure one in 5 steps.",
  },
  {
    title: "OneRoom OS vs. Notion vs. Slack: The Knowledge Stack",
    slug: "oneroom-os-vs-notion-vs-slack",
    category: "System Engineering",
    date: "April 15, 2026",
    author: "Lamb Strategy Team",
    synopsis: "Standard productivity suites are excellent for text editing and real-time chat, but fail to capture decentralized organizational memory. We analyze search queries, database syncs, and security.",
  },
  {
    title: "Why Answer Engine Optimization (AEO) is the New SEO",
    slug: "why-aeo-is-the-new-seo",
    category: "Digital Strategy",
    date: "March 3, 2026",
    author: "Lamb Strategy Team",
    synopsis: "AI answer engines like ChatGPT, Claude, and Perplexity are redefining how B2B buyers source consulting firms. Learn to structure company entity signals for AI search visibility.",
  },
];

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export default function InsightsContent() {
  return (
    <PageTransition>
      <div className="relative py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="sr-only">Lamb Strategy Insights & Articles</h1>

          <SectionHeading
            title="Insights & Playbooks"
            subtitle="Direct operational guides, system architecture papers, and GTM strategy articles."
            badge="Company Blog"
          />

          {/* Featured Card */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.005, transition: { duration: 0.2 } }}
            className="bg-slate-900 text-white rounded border border-slate-800 p-8 sm:p-12 mb-16 shadow-lg relative overflow-hidden max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block font-sans">
                  Featured Insight
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-sans leading-tight">
                  {articles[0].title}
                </h2>
                <p className="text-slate-350 text-sm sm:text-base leading-relaxed font-sans font-light">
                  {articles[0].synopsis}
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-slate-400 font-sans pt-2">
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    By {articles[0].author}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {articles[0].date}
                  </span>
                </div>
              </div>
              <div className="lg:col-span-4 flex justify-end">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-4 bg-sky-500 hover:bg-sky-450 text-slate-900 font-bold rounded shadow transition-colors"
                  >
                    Request Operations Audit
                    <ArrowRight className="w-4 h-4 text-slate-950" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Articles Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {articles.map((art, idx) => (
              <motion.article
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -4, borderColor: "#0f294a", transition: { duration: 0.25, ease: "easeOut" } }}
                className="bg-white border border-slate-200 rounded p-6 sm:p-8 flex flex-col justify-between transition-colors shadow-sm"
              >
                <div className="space-y-4">
                  <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-500 bg-slate-50 rounded border border-slate-100 font-sans">
                    {art.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 font-sans leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-slate-655 text-xs sm:text-sm leading-relaxed font-sans font-light">
                    {art.synopsis}
                  </p>
                </div>

                <div className="border-t border-slate-100 mt-6 pt-4 flex items-center justify-between text-xs text-slate-400 font-sans">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {art.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {art.date}
                  </span>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <div className="mt-20">
            <CTASection
              title="Want Custom Strategy Insights?"
              subtitle="Connect with our consulting team to discuss GTM canvas blueprints, internal system audits, or custom OneRoom OS integrations."
              primaryText="Schedule a Consultation"
              primaryHref="/contact"
              secondaryText="Read Case Studies"
              secondaryHref="/case-studies"
              variant="dark"
            />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
