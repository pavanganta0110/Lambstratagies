"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Brain, Shield, Check, X, MessageSquare, Search, Database, Layers, BarChart, Settings, Smartphone } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import PageTransition from "@/components/PageTransition";

const problemList = [
  {
    title: "Scattered Team Communication",
    label: "Scattered communication across Slack, email, and texts leads to missed client details and operational delays.",
    icon: MessageSquare
  },
  {
    title: "Lost Organizational Knowledge",
    label: "Lost organizational knowledge when employees leave forces teams to spend hours recreating processes and documents.",
    icon: Database
  },
  {
    title: "Slow Decision-Making",
    label: "Slow decision-making due to fragmented data pools inside separate systems prevents rapid pivots.",
    icon: Layers
  },
  {
    title: "Disconnected Teams",
    label: "Disconnected teams working in isolated functional silos create communication gaps and redundant efforts.",
    icon: Layers
  },
  {
    title: "Manual Admin Work",
    label: "Manual admin work taking hours from primary projects limits the productivity of creative and strategy roles.",
    icon: Settings
  },
  {
    title: "Poor Visibility Across Departments",
    label: "Poor visibility across departments for management makes it difficult to measure project velocities.",
    icon: BarChart
  },
  {
    title: "Difficulty Scaling Internal Operations",
    label: "Difficulty scaling internal operations and onboarding new hires slows down company growth phases.",
    icon: Smartphone
  },
];

const featureList = [
  {
    title: "Ryan — AI Assistant for Org Knowledge",
    desc: "Ryan is an intelligent, context-aware AI co-pilot that answers operational questions based on your specific protocols, SOPs, and historical data.",
    icon: Brain,
  },
  {
    title: "Team Communication Hub",
    desc: "Brings departments, managers, and external partners together in structured rooms that automatically record summary notes.",
    icon: MessageSquare,
  },
  {
    title: "Internal Workflows",
    desc: "Automates repetitive handoffs, document reviews, and project step checks without requiring manual follow-ups.",
    icon: Settings,
  },
  {
    title: "Smart Search",
    desc: "Find files, chats, decisions, or customer histories instantly with semantic queries instead of keyword matches.",
    icon: Search,
  },
  {
    title: "Knowledge Base & Memory",
    desc: "Automatically documents system changes, client updates, and internal decisions, creating a living company directory.",
    icon: Database,
  },
  {
    title: "Role-Based Access Control",
    desc: "Maintains high data privacy with enterprise-grade permission settings, ensuring personnel see only what is relevant to their job.",
    icon: Shield,
  },
  {
    title: "Task & Project Support",
    desc: "Extracts action items from chats and meetings automatically, mapping them to project boards and assignees.",
    icon: Layers,
  },
  {
    title: "CRM & System Integrations",
    desc: "Syncs with HubSpot, Salesforce, Google Workspace, and office directories to keep customer records updated.",
    icon: Settings,
  },
  {
    title: "Reports & Insights",
    desc: "Displays workflow speeds, bottlenecks, and communication analytics to help managers make data-backed adjustments.",
    icon: BarChart,
  },
  {
    title: "Web & Mobile Experience",
    desc: "Fully responsive system accessible on phones, tablets, or desktop browsers, keeping field teams connected.",
    icon: Smartphone,
  },
];

// Motion variants
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
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
  hover: {
    y: -4,
    borderColor: "#0f294a",
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

export default function OneRoomContent() {
  return (
    <PageTransition>
      <div className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Pulsing Gradient Backdrop Glow */}
        <div className="absolute top-[5%] left-1/4 w-[400px] h-[400px] bg-sky-200/10 blur-[100px] rounded-full pointer-events-none" />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[10%] right-1/4 w-[350px] h-[350px] bg-[#0F294A]/5 blur-[120px] rounded-full pointer-events-none"
        />

        {/* Abstract Network Lines & Nodes */}
        <svg className="absolute inset-0 w-full h-[600px] text-sky-500/10 pointer-events-none hidden md:block" fill="none">
          {/* Nodes */}
          <motion.circle
            cx="15%"
            cy="15%"
            r="3"
            fill="currentColor"
            animate={{ cx: ["15%", "17%", "15%"], cy: ["15%", "18%", "15%"] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="22%"
            cy="40%"
            r="4.5"
            fill="currentColor"
            animate={{ cx: ["22%", "20%", "22%"], cy: ["40%", "36%", "40%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="85%"
            cy="25%"
            r="3.5"
            fill="currentColor"
            animate={{ cx: ["85%", "83%", "85%"], cy: ["25%", "29%", "25%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="78%"
            cy="55%"
            r="4"
            fill="currentColor"
            animate={{ cx: ["78%", "80%", "78%"], cy: ["55%", "50%", "55%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Connecting Paths */}
          <motion.line
            x1="15%"
            y1="15%"
            x2="22%"
            y2="40%"
            stroke="currentColor"
            strokeWidth="0.75"
            strokeDasharray="4 4"
            animate={{
              x1: ["15%", "17%", "15%"],
              y1: ["15%", "18%", "15%"],
              x2: ["22%", "20%", "22%"],
              y2: ["40%", "36%", "40%"],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.line
            x1="85%"
            y1="25%"
            x2="78%"
            y2="55%"
            stroke="currentColor"
            strokeWidth="0.75"
            strokeDasharray="4 4"
            animate={{
              x1: ["85%", "83%", "85%"],
              y1: ["25%", "29%", "25%"],
              x2: ["78%", "80%", "78%"],
              y2: ["55%", "50%", "55%"],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Page Header */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center mb-16 space-y-6"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0F294A] bg-slate-100 rounded border border-slate-200 mb-3">
              Product Focus
            </span>
            
            {/* Keyword-focused H1 */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight font-sans">
              OneRoom OS — AI-Powered Operating System for Teams & Organizations
            </h1>
            
            <p className="text-base sm:text-lg text-slate-650 leading-relaxed font-sans max-w-3xl mx-auto font-light">
              An AI-powered operating system designed to help complex organizations work in a streamlined, unified, and intelligent way.
            </p>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="pt-2 inline-block"
            >
              <Link
                href="/contact?service=oneroom-ai"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0F294A] hover:bg-[#0A1D37] text-white font-bold rounded shadow transition-all duration-155"
              >
                Schedule a OneRoom AI Demo
              </Link>
            </motion.div>
          </motion.div>

          {/* Not Just Another Chatbot Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="border border-slate-200 rounded bg-white p-8 sm:p-12 my-12 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-4 flex justify-center lg:justify-start">
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.05 }}
                  className="p-5 bg-slate-50 rounded border border-slate-200 text-[#0F294A] inline-flex items-center justify-center transition-all"
                >
                  <Brain className="w-16 h-16 stroke-[1.25]" />
                </motion.div>
              </div>
              <div className="lg:col-span-8 space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 font-sans">
                  What Makes OneRoom OS Different from AI Chatbots?
                </h2>
                
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-sans font-light">
                  <strong>OneRoom OS</strong> is a patented AI-powered decentralized operating system designed to serve as the complete memory and communications hub for growing organizations. Built by Lamb Strategy, it automatically captures company knowledge, indexes files, and streamlines workflows to eliminate administrative overhead. By combining organizational intelligence with role-based access, it enables teams to make faster, more informed decisions.
                </p>
                
                <p className="text-slate-600 text-sm leading-relaxed font-sans font-light">
                  Unlike traditional chatbots, it actively connects to your CRMs, files, and email sequences to auto-document system changes and client updates in real-time, forming a living company directory.
                </p>
              </div>
            </div>
          </motion.div>

          {/* PRODUCT VISUAL PREVIEW */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="my-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0F294A] text-white rounded p-8 sm:p-12 overflow-hidden shadow-lg border border-slate-800"
          >
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block font-sans">
                System Interface Preview
              </span>
              <h2 className="text-3xl font-extrabold font-sans leading-tight">
                A Clean, Intuitive Interface Built for Real Work
              </h2>
              <p className="text-slate-350 text-sm sm:text-base leading-relaxed font-sans font-light">
                OneRoom OS provides a unified company memory hub that runs natively on mobile devices and desktop browsers. It eliminates the friction of jumping between Slack channels, Notion docs, and file repositories.
              </p>
              <ul className="space-y-3 pt-2 text-sm text-slate-200">
                <li className="flex gap-2.5 items-start">
                  <span className="text-sky-400">✔</span>
                  <span><strong>Instant Search:</strong> Query Ryan to fetch customer logs or technical procedures in seconds.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="text-sky-400">✔</span>
                  <span><strong>Meeting Summaries:</strong> Structured rooms auto-generate notes and action items from conversations.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="text-sky-400">✔</span>
                  <span><strong>Role Personas:</strong> Tailored dashboard modules for team managers, employees, and client representatives.</span>
                </li>
              </ul>
            </div>
            <motion.div 
              initial={{ scale: 0.98, opacity: 0.9 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative h-[350px] sm:h-[450px] w-full rounded overflow-hidden flex items-center justify-center bg-slate-800/50 border border-slate-700"
            >
              <Image
                src="/oneroom-mockup.png"
                alt="OneRoom OS iPhone Interface Mockup showing team channels and Ryan AI chat interface"
                fill
                className="object-contain p-4"
              />
            </motion.div>
          </motion.div>

          {/* Problems Solved vs Challenges */}
          <div className="my-20">
            <SectionHeading
              title="Operational Problems OneRoom OS Solves for Growing Teams"
              subtitle="Complex teams run into operational bottlenecks as they grow. OneRoom OS streamlines documentation and communication to eliminate friction."
              badge="Challenges Solved"
            />

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8"
            >
              {problemList.map((prob, idx) => {
                return (
                  <motion.div 
                    key={idx} 
                    variants={cardVariants}
                    whileHover="hover"
                    className="bg-slate-50 border border-slate-200 p-6 rounded flex gap-4 items-start transition-all"
                  >
                    <div className="p-1.5 bg-red-50 text-red-500 border border-red-100 rounded flex-shrink-0">
                      <X className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-slate-900 text-sm font-bold font-sans mb-1">
                        {prob.title}
                      </h3>
                      <p className="text-slate-605 text-xs sm:text-sm font-sans leading-relaxed font-light">
                        {prob.label}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
              {/* Resolution Block */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="bg-slate-900 text-white p-6 rounded flex gap-4 items-start md:col-span-2 lg:col-span-1 border border-slate-800 transition-all"
              >
                <div className="p-1.5 bg-white/10 text-white rounded flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-bold font-sans mb-1">The Resolution</h3>
                  <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed font-light">
                    OneRoom OS consolidates these processes into a centralized, searchable platform that saves hours of weekly meetings.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Key Features Grid */}
          <div className="my-20">
            <SectionHeading
              title="OneRoom OS Features & Capabilities"
              subtitle="An overview of the structural capabilities OneRoom OS brings to your business network."
              badge="Features"
            />

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
            >
              {featureList.map((feat, idx) => {
                const IconComponent = feat.icon;
                return (
                  <motion.div 
                    key={idx} 
                    variants={cardVariants}
                    whileHover="hover"
                    className="bg-white border border-slate-200 p-6 sm:p-8 rounded transition-all duration-150"
                  >
                    <div className="inline-flex p-2 rounded bg-slate-50 text-[#0F294A] border border-slate-100 mb-4">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 font-sans mb-2">{feat.title}</h3>
                    <p className="text-slate-655 text-xs sm:text-sm leading-relaxed font-sans font-light">{feat.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* ROLE PERSONAS */}
          <div className="my-20">
            <SectionHeading
              title="Tailored Dashboards for Every Role"
              subtitle="OneRoom OS adapts its workspace modules depending on who is logging in, keeping work focused and secure."
              badge="Role-Based Modules"
            />
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
            >
              {[
                {
                  role: "Parent / Client Representative",
                  wixEquivalent: "Parent Focus",
                  desc: "Access real-time reports, securely sign transaction documents, and view status sheets on project roadmaps."
                },
                {
                  role: "Admin / Manager",
                  wixEquivalent: "Admin Focus",
                  desc: "Oversee team channels, query Ryan for compliance reports, and manage database integrations and user accesses."
                },
                {
                  role: "Student / Employee",
                  wixEquivalent: "Student Focus",
                  desc: "Access daily task boards, search internal SOPs via Ryan, and share files across departments without friction."
                },
                {
                  role: "Teacher / External Partner",
                  wixEquivalent: "Teacher Focus",
                  desc: "Deliver updates, collaborate in temporary joint rooms, and publish training or resource files to client boards."
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  variants={fadeInUp}
                  whileHover={{ y: -5, borderColor: "#0F294A" }}
                  className="bg-white border border-slate-200 p-6 rounded shadow-sm transition-all"
                >
                  <div className="h-1.5 w-10 bg-[#0F294A] rounded mb-4" />
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 font-sans mb-1">{item.wixEquivalent}</span>
                  <h4 className="text-[#0F294A] font-bold text-base font-sans mb-2">{item.role}</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans font-light">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* INDUSTRY VERTICALS */}
          <div className="my-20">
            <SectionHeading
              title="Industries We Serve"
              subtitle="OneRoom OS is configured to support complex workflows and communication guidelines across multiple specialized sectors."
              badge="Target Sectors"
            />
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-8"
            >
              {[
                { name: "Education", label: "AI knowledge base for education teams" },
                { name: "Defence", label: "Secure collaboration for defence sectors" },
                { name: "Healthcare", label: "Communication platform for healthcare teams" },
                { name: "Nonprofits", label: "AI tools for nonprofit resource boards" },
                { name: "Churches", label: "Operations sync for faith organizations" },
                { name: "Retail", label: "Inventory and SOP search for retail sites" },
                { name: "Automotive", label: "Integrated databases for automotive groups" },
                { name: "Housing Associations", label: "Client portals for housing networks" },
                { name: "Service Industries", label: "Automated workflows for consulting firms" },
                { name: "Conferences & Events", label: "Coordination rooms for event production" }
              ].map((ind, idx) => (
                <motion.div 
                  key={idx} 
                  variants={fadeInUp}
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="bg-slate-50 border border-slate-200 p-4 rounded text-center cursor-default transition-all duration-150"
                >
                  <span className="block text-slate-900 font-bold text-sm font-sans mb-1">{ind.name}</span>
                  <span className="block text-[10px] sm:text-xs text-slate-500 font-sans font-light leading-normal">{ind.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ORIGIN STORY SECTION */}
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="py-16 bg-slate-50 rounded border border-slate-200 px-6 sm:px-12 my-20" 
            aria-label="OneRoom Origin Story"
          >
            <div className="max-w-4xl mx-auto space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0F294A] block text-center font-sans">
                Our Journey
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 text-center font-sans">
                How OneRoom OS Started
              </h2>
              <div className="space-y-4 text-slate-655 text-sm sm:text-base leading-relaxed font-sans font-light">
                <p>
                  The seed for OneRoom OS was planted in 2014. Lamb Strategy envisioned a communication and database architecture that could unite decentralized organizations without forcing them to compromise their privacy or deal with disjointed tool chains. It was a bold idea, built around long-term strategic alignment.
                </p>
                <p>
                  Then came 2020. The remote-work surge forced the entire world to scramble for operational systems overnight. The irony was unmistakable: the exact scenario our team had spent years building for was suddenly the global standard. Yet, launching a software product in the middle of a global crisis was anything but simple.
                </p>
                <p>
                  The team battled complex cross-border requirements, balanced growth phases, and kept the company alive on bootstrap funds while refining the platform. Through persistence, the decentralized operate-anywhere model of OneRoom OS was polished into a patented operating system that now scales small and medium B2B operations.
                </p>
              </div>
              {/* Tagline trademark pulls quote */}
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="mt-8 p-6 bg-[#0F294A] text-white rounded border border-slate-800 text-center font-sans shadow"
              >
                <p className="text-lg sm:text-xl font-medium italic">
                  &ldquo;OneRoom: For Such a Time as This&trade;&rdquo;
                </p>
                <p className="text-xs text-sky-400 font-bold uppercase tracking-wider mt-2">
                  Patented Operations &amp; Strategy Slogan
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* Bottom CTA */}
          <div className="mt-20">
            <CTASection
              title="Experience OneRoom OS"
              subtitle="Let us walk you through a customized test environment. We'll show you how Ryan automates knowledge databases and streamlines your team communication."
              primaryText="Request a OneRoom OS Demo"
              primaryHref="/contact?service=oneroom-ai"
              secondaryText="Schedule General Consultation"
              secondaryHref="/contact"
              variant="sky"
            />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
