"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const headlineVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
    },
  },
};

const subheadlineVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ctaVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-16 md:py-20 border-b border-slate-200 bg-white overflow-hidden" aria-label="Introduction">
      {/* Background Flight Path SVG */}
      <svg 
        className="absolute inset-0 w-full h-full text-slate-100 pointer-events-none hidden md:block" 
        fill="none" 
        preserveAspectRatio="none"
      >
        <path
          d="M-50,220 C200,120 400,320 800,180 C1200,40 1400,280 1600,100"
          stroke="#E2E8F0"
          strokeWidth="1.5"
          strokeDasharray="6,6"
        />
      </svg>

      {/* Floating Paper Plane tracing the path */}
      <motion.div
        initial={{ x: "-10%", y: 220, rotate: 10, opacity: 0 }}
        animate={{
          x: ["-5%", "25%", "55%", "85%", "115%"],
          y: [200, 140, 240, 90, 50],
          rotate: [-10, -20, 20, -15, -30],
          opacity: [0, 1, 1, 1, 0],
        }}
        transition={{
          duration: 25,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="absolute pointer-events-none hidden md:block"
        style={{ left: 0, top: 0 }}
      >
        <svg
          className="w-5 h-5 text-[#0F294A]/25 transform -rotate-45"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (Hero content) */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            <motion.span 
              variants={badgeVariants}
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0F294A] bg-slate-100 rounded border border-slate-200"
            >
              Let us be your co-pilot
            </motion.span>

            {/* Keyword-rich H1 for SEO, visually hidden but indexable */}
            <h1 className="sr-only">
              Revenue Growth & Digital Strategy Consulting for Small and Medium Businesses
            </h1>

            {/* Branded styled header for visual layout */}
            <motion.div 
              variants={headlineVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] font-sans" 
              aria-hidden="true"
            >
              Discover. Innovate. <br />
              Launch. Grow. <span className="text-[#0F294A]">Fly.</span>
            </motion.div>

            <motion.p 
              variants={subheadlineVariants}
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans font-normal"
            >
              We help your business, products, and services shine online and offline. Revenue growth, digital strategy, and strategic ops implementation for small to medium-sized companies.
            </motion.p>

            <motion.div 
              variants={ctaVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-2"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-bold text-white bg-[#0F294A] hover:bg-[#0A1D37] rounded transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-sm"
              >
                Schedule a Free Consultation
              </Link>
              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 rounded border border-slate-200 transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
              >
                Start Exploring
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column (Hero Image) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative h-[300px] sm:h-[400px] w-full rounded border border-slate-200 overflow-hidden shadow-md bg-slate-50"
          >
            <Image
              src="/hero-pilot.png"
              alt="Aspiring pilot child looking to the sky - Lamb Strategy Co-Pilot concept"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
