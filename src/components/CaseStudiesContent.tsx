"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, CheckCircle, Flame, Target, Trophy } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import PageTransition from "@/components/PageTransition";

const caseStudies = [
  {
    title: "Accelerating SaaS Launch & UX Blueprints",
    client: "Optima Flow (Software-as-a-Service)",
    challenge: "The client was building a complex workflow automation platform but struggled with UX wireframe alignment, database sync delays, and timeline scheduling.",
    approach: "We audited their user journeys and designed a clean Figma UX blueprint. We mapped their GTM (go-to-market) timeline using the Business Model Canvas principles and aligned database schemas for developers.",
    outcome: "Launched product 3x faster than previous developer forecasts. Reduced pre-launch friction, saving approximately $40,000 in redundant engineering costs.",
    stat: "3x GTM Speed",
  },
  {
    title: "Unifying Decentralized Operations with OneRoom OS",
    client: "Vanguard Alliance Group (Operations & Logistics)",
    challenge: "A rapidly growing, decentralized logistics team struggled with scattered documents in Slack, disjointed spreadsheets, and high operational chaos.",
    approach: "We implemented our patented OneRoom OS. We integrated their customer records, configured role-based dashboards (Admin, Employee, and Client), and trained their Ryan AI assistant to index company SOPs.",
    outcome: "Saved 8+ weekly hours per employee. Reduced onboarding time for new logistics hires from weeks to days. Unified organizational memory completely.",
    stat: "8h Saved / Wk",
  },
  {
    title: "Automating CRM & Revenue Cross-Selling",
    client: "Greenleaf Botanicals (B2B Supply & E-Commerce)",
    challenge: "A wholesale plant supplier faced low average transaction values and heavy phone volumes from customers asking repetitive plant-care questions.",
    approach: "We redesigned their client portal and integrated a smart CRM workflow. We automated post-purchase care email sequences and integrated automated cross-selling suggestions.",
    outcome: "Achieved a 42% revenue increase within 6 months. Customer support phone volume decreased by 50% due to automated care resources.",
    stat: "+42% B2B Revenue",
  },
];

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
      staggerChildren: 0.1,
    },
  },
};

export default function CaseStudiesContent() {
  return (
    <PageTransition>
      <div className="relative py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="sr-only">Lamb Strategy Client Case Studies</h1>

          <SectionHeading
            title="Our Success Stories"
            subtitle="Real examples of how we serve as operations and GTM co-pilots."
            badge="Case Studies"
          />

          {/* Global Metric Banner */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.005, transition: { duration: 0.2 } }}
            className="bg-slate-900 text-white rounded p-8 sm:p-12 mb-16 border border-slate-800 shadow-md text-center max-w-4xl mx-auto space-y-4"
          >
            <Trophy className="w-12 h-12 text-sky-400 mx-auto" />
            <h2 className="text-3xl sm:text-4xl font-extrabold font-sans">
              Average Client Growth of 40%+:
            </h2>
            <p className="text-slate-350 text-sm sm:text-base leading-relaxed font-sans font-light max-w-2xl mx-auto">
              By auditing database bottlenecks, automating CRM outreach, and implementing OneRoom OS, we help small and medium companies eliminate operational chaos and scale predictably.
            </p>
          </motion.div>

          {/* Case Studies Stack */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12"
          >
            {caseStudies.map((cs, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch border border-slate-200 rounded bg-white p-6 sm:p-8 md:p-10 shadow-sm transition-all duration-300 ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Metric/Highlight Column */}
                  <div className="flex-1 flex flex-col justify-between space-y-6 lg:max-w-sm">
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1 font-sans">
                        Client Profile
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 font-sans">{cs.client}</h3>
                    </div>

                    <div className="p-6 bg-slate-50 border border-slate-200 rounded text-center">
                      <span className="block text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1 font-sans">
                        Key Result
                      </span>
                      <span className="block text-3xl font-extrabold text-[#0F294A] font-sans">
                        {cs.stat}
                      </span>
                    </div>

                    <div>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1.5 px-5 py-3 bg-[#0F294A] hover:bg-[#0A1D37] text-white text-sm font-bold rounded transition-colors w-full justify-center"
                        >
                          Replicate This Success
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </motion.div>
                    </div>
                  </div>

                  {/* Narrative Details Column */}
                  <div className="flex-1 space-y-6">
                    <h4 className="text-xl font-extrabold text-[#0F294A] font-sans border-b border-slate-100 pb-4">
                      {cs.title}
                    </h4>

                    <div className="space-y-4">
                      <div className="flex gap-3 items-start">
                        <Flame className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="block text-xs font-bold uppercase text-slate-400 tracking-wider font-sans">
                            The Challenge
                          </span>
                          <p className="text-slate-655 text-sm sm:text-base font-sans font-light leading-relaxed">
                            {cs.challenge}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3 items-start">
                        <Target className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="block text-xs font-bold uppercase text-slate-400 tracking-wider font-sans">
                            Our Approach
                          </span>
                          <p className="text-slate-655 text-sm sm:text-base font-sans font-light leading-relaxed">
                            {cs.approach}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3 items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="block text-xs font-bold uppercase text-slate-400 tracking-wider font-sans">
                            The Outcome
                          </span>
                          <p className="text-slate-655 text-sm sm:text-base font-sans font-light leading-relaxed">
                            {cs.outcome}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Methodology Outbound Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 p-6 bg-slate-50 border border-slate-200 rounded max-w-3xl mx-auto text-center text-xs text-slate-500 font-sans space-y-2"
          >
            <p>
              We optimize go-to-market strategies using the industry-proven {" "}
              <a
                href="https://www.strategyzer.com/library/the-business-model-canvas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 hover:text-sky-500 underline font-semibold"
              >
                Business Model Canvas Methodology (Strategyzer Library)
              </a>. This structured framework ensures that all operations are directly aligned with core value propositions.
            </p>
          </motion.div>

          {/* Bottom CTA */}
          <div className="mt-20">
            <CTASection
              title="Ready to Scale Your Operations?"
              subtitle="Let us audit your internal systems and build a roadmap configured for 40%+ revenue growth."
              primaryText="Schedule a Consultation"
              primaryHref="/contact"
              secondaryText="Learn About Us"
              secondaryHref="/about"
              variant="sky"
            />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
