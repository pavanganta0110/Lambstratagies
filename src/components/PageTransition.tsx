"use client";

import React from "react";
import { motion } from "framer-motion";
import { pageTransition } from "@/lib/animations";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageTransition}
      className="flex-grow flex flex-col w-full"
    >
      {children}
    </motion.div>
  );
}
