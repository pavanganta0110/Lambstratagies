import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  variant?: "sky" | "dark" | "flat";
}

export default function CTASection({
  title = "Ready to Transform Your Business or Product?",
  subtitle = "Schedule a free consultation today to help get your business ahead of the game.",
  primaryText = "Schedule a Free Consultation",
  primaryHref = "/contact",
  secondaryText = "Explore Our Services",
  secondaryHref = "/services",
  variant = "dark",
}: CTASectionProps) {
  const isDark = variant === "dark";
  const isSky = variant === "sky";

  return (
    <div
      className={`relative rounded p-8 sm:p-12 md:p-16 text-center shadow border ${
        isDark
          ? "bg-[#0F294A] text-white border-[#0A1D37]"
          : isSky
          ? "bg-slate-900 text-white border-slate-800"
          : "bg-slate-50 text-slate-900 border-slate-200 shadow-none"
      }`}
    >
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-4 font-sans">
          {title}
        </h2>
        
        <p
          className={`text-base sm:text-lg font-normal leading-relaxed mb-8 max-w-2xl font-sans ${
            isDark || isSky ? "text-slate-200" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
          {primaryText && (
            <Link
              href={primaryHref}
              className={`inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-bold rounded transition-all duration-200 active:scale-95 shadow ${
                isDark
                  ? "bg-white hover:bg-slate-100 text-[#0F294A]"
                  : isSky
                  ? "bg-[#0F294A] hover:bg-[#0A1D37] text-white"
                  : "bg-[#0F294A] hover:bg-[#0A1D37] text-white"
              }`}
            >
              <Calendar className="w-4.5 h-4.5" />
              {primaryText}
            </Link>
          )}

          {secondaryText && (
            <Link
              href={secondaryHref}
              className={`inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-bold rounded border transition-all duration-200 active:scale-95 ${
                isDark
                  ? "border-white/30 bg-white/5 hover:bg-white/10 text-white"
                  : isSky
                  ? "border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-slate-200 hover:text-white"
                  : "border-slate-300 bg-white hover:bg-slate-50 text-slate-700"
              }`}
            >
              {secondaryText}
              <ArrowRight className="w-4.5 h-4.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
