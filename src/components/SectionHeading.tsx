import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  badge,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isLeft = align === "left";

  return (
    <div
      className={`max-w-3xl mb-10 ${
        isLeft ? "text-left" : "mx-auto text-center"
      } ${className}`}
    >
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0F294A] bg-slate-100 rounded border border-slate-200 mb-3">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-sans mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans font-normal">
          {subtitle}
        </p>
      )}
      
      {/* Traditional corporate solid divider */}
      <div className={`mt-4 flex ${isLeft ? "justify-start" : "justify-center"}`}>
        <div className="w-12 h-1 bg-[#0F294A] rounded" />
      </div>
    </div>
  );
}
