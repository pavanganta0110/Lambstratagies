"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LambLogo from "./LambLogo";
import { mainNavItems } from "@/data/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on route change
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setIsOpen(false);
  }

  // Handle scroll trigger for backdrop blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Listen to escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-md border-b border-slate-200/50 shadow-sm"
          : "bg-white border-b border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo area */}
          <Link
            href="/"
            className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500 rounded-lg p-1.5"
            aria-label="Lamb Strategy Home"
          >
            <LambLogo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8" aria-label="Main Navigation">
            <ul className="flex items-center gap-4 xl:gap-6">
              {mainNavItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href} className="relative py-2">
                    <Link
                      href={item.href}
                      className={`relative text-sm font-semibold tracking-wide whitespace-nowrap transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500 rounded px-2 py-1 font-sans ${
                        isActive ? "text-[#0F294A] font-bold" : "text-slate-650 hover:text-[#0F294A]"
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <motion.span
                          layoutId="activeUnderline"
                          className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#0F294A]"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#0F294A] hover:bg-[#0A1D37] text-white text-sm font-semibold rounded transition-all duration-200 active:scale-95 hover:-translate-y-0.5 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500"
            >
              Consultation
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </nav>

          {/* Mobile hamburger menu toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-500 hover:text-[#0F294A] hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors z-50 relative"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu using AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-slate-900 z-40 lg:hidden"
            />

            {/* Slide-in Drawer */}
            <motion.div
              id="mobile-menu"
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-white shadow-2xl z-40 lg:hidden flex flex-col pt-24 px-6 border-l border-slate-200"
            >
              <nav aria-label="Mobile Navigation" className="flex flex-col justify-between h-full pb-10">
                <ul className="space-y-4">
                  {mainNavItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`block px-4 py-2.5 rounded text-base font-semibold tracking-wide transition-colors font-sans ${
                            isActive
                              ? "bg-slate-100 text-[#0F294A]"
                              : "text-slate-650 hover:bg-slate-50 hover:text-[#0F294A]"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href="/contact"
                    className="group flex items-center justify-center gap-1.5 w-full py-3 bg-[#0F294A] hover:bg-[#0A1D37] text-white font-semibold rounded text-center transition-all shadow-sm hover:-translate-y-0.5 active:scale-95"
                  >
                    Schedule a Free Consultation
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
