"use client";

import React from "react";
import { Search, Compass, Cpu, Rocket } from "lucide-react";
import { motion, Variants } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Discover",
    description:
      "We understand your business, team, systems, customers, and current growth challenges.",
    icon: Search,
  },
  {
    step: "02",
    title: "Strategize",
    description:
      "We create a clear roadmap for product, operations, marketing, technology, or AI implementation.",
    icon: Compass,
  },
  {
    step: "03",
    title: "Build",
    description:
      "We help design, develop, organize, or improve the systems needed to execute the strategy.",
    icon: Cpu,
  },
  {
    step: "04",
    title: "Launch & Grow",
    description:
      "We support implementation, measure results, and help the business scale with confidence.",
    icon: Rocket,
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.15,
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
    },
  }),
};

export default function ProcessSection() {
  return (
    <div className="relative py-8">
      {/* Horizontal connector line on desktop - self-drawing gradient line */}
      <div className="hidden lg:block absolute top-[68px] left-[15%] right-[15%] h-0.5 bg-slate-250 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.1 }}
          className="h-full bg-gradient-to-r from-sky-400 via-[#0F294A] to-sky-400 origin-left"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {steps.map((step, idx) => {
          const IconComponent = step.icon;
          return (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col items-center text-center p-6 bg-white rounded border border-slate-200 shadow-sm hover:border-slate-350 transition-colors duration-200"
            >
              {/* Step indicator circle */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative flex items-center justify-center w-14 h-14 rounded-full bg-slate-50 border border-slate-200 text-[#0F294A] mb-6 font-bold font-sans transition-colors"
              >
                {step.step}
              </motion.div>

              <div className="inline-flex p-2 rounded bg-slate-50 text-[#0F294A] border border-slate-100 mb-4">
                <IconComponent className="w-5 h-5 stroke-[1.75]" />
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-2 font-sans">
                {step.title}
              </h3>
              
              <p className="text-slate-650 text-xs sm:text-sm leading-relaxed max-w-xs font-sans font-light">
                {step.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
