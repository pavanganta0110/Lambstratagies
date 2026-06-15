"use client";

import React from "react";
import * as Icons from "lucide-react";
import { ServiceItem } from "@/data/services";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface ServiceCardProps {
  service: ServiceItem;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  hover: {
    y: -6,
    boxShadow: "0 12px 20px -3px rgba(15, 41, 74, 0.08), 0 4px 12px -2px rgba(15, 41, 74, 0.04)",
    borderColor: "#0f294a",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const iconVariants: Variants = {
  hover: {
    scale: 1.1,
    rotate: 8,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
};

export default function ServiceCard({ service }: ServiceCardProps) {
  // Dynamically map icon names to Lucide icons
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[service.iconName];

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="flex flex-col justify-between p-8 bg-white rounded border border-slate-200 shadow-sm transition-all duration-300"
    >
      <div>
        <motion.div
          variants={iconVariants}
          className="inline-flex items-center justify-center p-3 rounded bg-slate-50 text-[#0F294A] border border-slate-100 mb-6"
        >
          {IconComponent ? (
            <IconComponent className="w-6 h-6 stroke-[1.75]" />
          ) : (
            <Icons.HelpCircle className="w-6 h-6" />
          )}
        </motion.div>

        <h3 className="text-lg font-bold text-slate-900 mb-3 font-sans">
          {service.title}
        </h3>

        <p className="text-slate-650 text-sm leading-relaxed mb-6 font-sans font-light">
          {service.description}
        </p>
      </div>

      <div>
        <div className="border-t border-slate-100 pt-4 mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block font-sans">
            {service.tagline}
          </span>
        </div>

        <Link
          href={`/contact?service=${encodeURIComponent(service.id)}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-[#0F294A] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500 rounded"
        >
          Request strategy
          <Icons.ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.div>
  );
}
