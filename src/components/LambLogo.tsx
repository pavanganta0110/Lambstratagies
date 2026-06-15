import React from "react";
import Image from "next/image";

interface LambLogoProps {
  className?: string;
  showText?: boolean;
  textColor?: string;
  iconOnly?: boolean;
}

export default function LambLogo({
  className = "",
  showText = true,
  textColor = "text-[#0F294A]",
  iconOnly = false,
}: LambLogoProps) {
  const isDark = textColor.includes("white");

  return (
    <div className={`flex items-center gap-2.5 select-none group ${className}`}>
      <Image
        src="/logo.png"
        alt="Lamb Strategy Logo"
        width={80}
        height={80}
        className="h-20 w-auto object-contain flex-shrink-0 transition-all duration-350 ease-out group-hover:scale-108 group-hover:rotate-2"
        priority
      />
      {showText && !iconOnly && (
        <span className={`font-sans text-xl font-extrabold tracking-tight leading-none whitespace-nowrap transition-colors duration-300 ${textColor} ${isDark ? "group-hover:text-sky-300" : "group-hover:text-sky-600"}`}>
          Lamb Strategy
        </span>
      )}
    </div>
  );
}
