import { Variants } from "framer-motion";

// Standard route entrance transition
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
    },
  },
};

// Custom fade-in-up animation with duration and delay configuration
export const fadeInUp = (delay: number = 0, duration: number = 0.5): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: [0.25, 0.1, 0.25, 1], // ease
    },
  },
});

// Stagger parent container variant
export const staggerContainer = (staggerChildren: number = 0.1, delayChildren: number = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Child element under a stagger container
export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// General fade-in variant
export const fadeIn = (delay: number = 0, duration: number = 0.45): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration,
      delay,
      ease: "easeOut",
    },
  },
});

// General card hover lift
export const hoverLift = {
  hover: {
    y: -5,
    scale: 1.01,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};
