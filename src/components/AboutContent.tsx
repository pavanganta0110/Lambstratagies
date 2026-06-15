"use client";

import React from "react";
import Image from "next/image";
import { Compass, Shield, Users, Heart } from "lucide-react";
import { motion, Variants } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import PageTransition from "@/components/PageTransition";

const coreValues = [
  {
    title: "Direct Implementation",
    desc: "We don't deliver generic slideshows and walk away. We build the databases, integrate the CRMs, and launch the websites we recommend.",
    icon: Compass,
  },
  {
    title: "Uncompromising Integrity",
    desc: "We prioritize security, clean data structures, and role-based permissions to protect your organizational knowledge.",
    icon: Shield,
  },
  {
    title: "Simplifying Complexity",
    desc: "We love bringing order into chaos, eliminating scattered spreadsheets, and creating unified workflows that team members love.",
    icon: Users,
  },
  {
    title: "Accessible Operations",
    desc: "We build digital systems around strict accessibility standards. We believe every user deserves a smooth experience.",
    icon: Heart,
  },
];

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

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
    y: -4,
    borderColor: "#0F294A",
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

export default function AboutContent() {
  return (
    <PageTransition>
      <div className="relative py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="sr-only">About Lamb Strategy</h1>

          <SectionHeading
            title="Who We Are & What We Believe"
            subtitle="Discover the co-pilot consulting philosophy behind Lamb Strategy."
            badge="Our Story"
          />

          {/* Co-Pilot Philosophy Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="lg:col-span-7 space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F294A] font-sans">
                Our &ldquo;Co-Pilot&rdquo; Philosophy
              </h2>
              <p className="text-slate-655 text-base leading-relaxed font-sans font-light">
                In aviation, a co-pilot sits alongside the captain, monitoring dials, managing radio channels, coordinating routes, and taking the controls during challenging phases. We apply this exact model to business operations. 
              </p>
              <p className="text-slate-655 text-base leading-relaxed font-sans font-light">
                We don&apos;t take the controls away from you. You remain the captain of your company. As your co-pilot, Lamb Strategy sits beside you to audit current operational turbulence, design clean database frameworks, streamline CRM systems, and integrate patented AI solutions like OneRoom OS.
              </p>
              <p className="text-slate-655 text-base leading-relaxed font-sans font-light border-l-4 border-[#0F294A] pl-6 italic">
                &ldquo;We love simplicity, getting the job done, and making the world a better place — one task and interface at a time.&rdquo;
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.98, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative h-[300px] sm:h-[400px] w-full rounded border border-slate-200 overflow-hidden shadow-md bg-slate-50"
            >
              <Image
                src="/retro-planes.jpg"
                alt="Retro toy airplanes representing the journey from launch to active flight"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Core Values Section */}
          <div className="my-20">
            <SectionHeading
              title="Our Core Values"
              subtitle="The foundational standards we hold ourselves to on every consulting engagement."
              badge="Foundations"
            />

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8"
            >
              {coreValues.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <motion.div 
                    key={idx} 
                    variants={cardVariants}
                    whileHover="hover"
                    className="bg-slate-50 border border-slate-200 p-6 rounded transition-all shadow-sm"
                  >
                    <div className="inline-flex p-2 bg-white rounded border border-slate-100 text-[#0F294A] mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 font-sans mb-2">{val.title}</h3>
                    <p className="text-slate-655 text-xs sm:text-sm leading-relaxed font-sans font-light">{val.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* External Authority Link Info */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-slate-50 rounded border border-slate-200 max-w-3xl mx-auto text-center text-xs text-slate-500 font-sans space-y-2"
          >
            <p>
              Lamb Strategy designs and builds digital assets around industry-standard methodologies. We align web platforms with the strict guidelines set forth in the {" "}
              <a
                href="https://www.w3.org/WAI/standards-guidelines/wcag/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 hover:text-sky-500 underline font-semibold"
              >
                WCAG Accessibility Guidelines (W3C Web Accessibility Initiative)
              </a>.
            </p>
          </motion.div>

          {/* Bottom CTA */}
          <div className="mt-20">
            <CTASection
              title="Let Us Be Your Co-Pilot"
              subtitle="Take the first step toward scaling your business operations. Schedule your free consultation or request a OneRoom OS demo."
              primaryText="Schedule a Consultation"
              primaryHref="/contact"
              secondaryText="Explore Services"
              secondaryHref="/services"
              variant="dark"
            />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
