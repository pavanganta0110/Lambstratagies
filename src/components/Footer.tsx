"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import LambLogo from "./LambLogo";
import { footerNavItems } from "@/data/navigation";
import { fadeInUp } from "@/lib/animations";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 overflow-hidden" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Brand info & NAP data */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp(0, 0.5)}
            className="md:col-span-5 space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02, x: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="inline-block"
            >
              <Link
                href="/"
                className="inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500 rounded-lg p-1"
              >
                <LambLogo textColor="text-white" />
              </Link>
            </motion.div>
            
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm font-sans">
              A management consulting firm focused on Revenue Growth, Digital Strategy, and Strategic Ops implementation for small to medium-sized companies. We act as your co-pilot, helping you scale without chaos.
            </p>

            {/* Consistent NAP Data */}
            <div className="text-xs text-slate-500 font-sans space-y-1.5 pt-2 border-t border-slate-900 max-w-sm">
              <p className="flex items-center gap-2">
                <span>📍</span>
                <span>Lamb Strategy, 4011 NE Woodridge Drive, Lees Summit, MO 64064, United States</span>
              </p>
              <p className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:support@lambstrategy.com" className="hover:text-slate-300 transition-colors">
                  support@lambstrategy.com
                </a>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-3 border-t border-slate-900 max-w-sm">
              <a
                href="https://www.linkedin.com/company/lamb-strategy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-500 hover:text-sky-400 flex items-center gap-1.5 transition-colors font-sans"
              >
                <span>🔗</span> LinkedIn Profile
              </a>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp(0.1, 0.5)}
            className="md:col-span-3 space-y-4"
          >
            <p className="text-sm font-bold uppercase tracking-wider text-slate-200 font-sans">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {footerNavItems.slice(0, 7).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500 rounded font-sans"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal / Policy links */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp(0.2, 0.5)}
            className="md:col-span-4 space-y-4"
          >
            <p className="text-sm font-bold uppercase tracking-wider text-slate-200 font-sans">
              Trust & Security
            </p>
            <ul className="space-y-2.5">
              {footerNavItems.slice(7).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500 rounded font-sans"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <div className="text-xs text-slate-500 font-sans mt-4">
                  Need direct assistance?
                  <Link
                    href="/contact"
                    className="block text-sky-400 hover:text-sky-300 font-semibold mt-1"
                  >
                    Get in touch with an expert →
                  </Link>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Footer bottom details */}
        <div className="border-t border-slate-900 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-sans">
          <p>© {currentYear} Lamb Strategy. All rights reserved.</p>
          <div className="flex gap-6">
            <p>Traditional Management Consulting</p>
            <span>•</span>
            <p>Designed for Accessibility & Performance</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
