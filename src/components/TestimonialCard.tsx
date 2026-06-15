"use client";

import React from "react";
import { Quote } from "lucide-react";
import { motion, Variants } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role?: string;
  company: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // easeOutExponential
    },
  },
  hover: {
    y: -4,
    scale: 1.005,
    borderColor: "rgba(56, 189, 248, 0.3)", // subtle sky-400 tint on border
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export default function TestimonialCard({
  quote,
  name,
  role,
  company,
}: TestimonialCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="relative p-8 sm:p-10 bg-slate-900 text-white rounded border border-slate-800 shadow-lg max-w-4xl mx-auto transition-colors duration-300"
    >
      <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
        <div className="flex-shrink-0 p-3 bg-slate-850 text-sky-400 rounded border border-slate-800">
          <Quote className="w-6 h-6 transform rotate-180" />
        </div>

        <div className="flex-grow">
          <blockquote className="text-base sm:text-lg md:text-xl font-normal text-slate-100 leading-relaxed font-sans italic mb-6">
            &ldquo;{quote}&rdquo;
          </blockquote>

          <div className="flex items-center justify-between border-t border-slate-800 pt-6">
            <div>
              <cite className="not-italic font-bold text-white text-sm sm:text-base block font-sans">
                {name}
              </cite>
              <span className="text-xs sm:text-sm text-slate-400 font-sans">
                {role ? `${role}, ` : ""}{company}
              </span>
            </div>
            
            <div className="flex items-center gap-1 text-[10px] sm:text-xs text-sky-400 font-semibold tracking-wider uppercase font-sans px-2.5 py-1 bg-sky-950 rounded border border-sky-900">
              Verified Client
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
