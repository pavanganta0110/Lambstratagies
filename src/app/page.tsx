"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, ChevronRight, TrendingUp, Cpu, Award, Zap } from "lucide-react";
import { motion, Variants } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import ProcessSection from "@/components/ProcessSection";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import PageTransition from "@/components/PageTransition";
import { servicesData, strategicOpsTags } from "@/data/services";

// Who we help cards data
const audienceList = [
  { title: "Small & Medium Businesses", desc: "For companies ready to formalize operations and accelerate revenue streams." },
  { title: "Product Founders", desc: "For visionaries taking an application, SaaS, or physical product from napkin sketch to market launch." },
  { title: "Nonprofits & Churches", desc: "For mission-driven groups looking to simplify workflows and boost community outreach." },
  { title: "Growing Teams", desc: "For organizations needing clear SOPs, training materials, and workflow integrations." },
  { title: "Consultants & Services", desc: "For agency owners scaling operations, client management, and lead generation." },
  { title: "Scattered Organizations", desc: "For businesses struggling with fragmented tools, spreadsheets, and communications." },
  { title: "AI-Ready Operations", desc: "For teams wanting to integrate intelligent systems and OneRoom OS for automatic documentation." },
];

const testimonialsList = [
  {
    quote: "We sell plants and I always worry that our customers don’t know how to properly look after them. Lamb Strategy was able to provide our company with innovative strategies to provide customers with education and support while also helping our company increase revenue through cross-selling initiatives.",
    name: "J. Wilson",
    role: "Head of Operations",
    company: "Big Box Retailer",
  },
  {
    quote: "As a SaaS founder, launching our product was chaotic until we partnered with Lamb Strategy. They wireframed our core UX, streamlined our database pipeline, and guided our go-to-market plan. They truly acted as our co-pilot.",
    name: "Sarah Jenkins",
    role: "Founder & CEO",
    company: "Optima Flow",
  },
  {
    quote: "Lamb Strategy transformed our decentralized operations. By implementing OneRoom OS, our scattered internal channels were unified into a single searchable knowledge database, saving our team hours of weekly documentation.",
    name: "Marcus Vance",
    role: "Director of Operations",
    company: "Vanguard Alliance Group",
  },
];

const faqList = [
  {
    question: "What does a digital strategy consultant do?",
    answer: "A digital strategy consultant analyzes your company's digital footprint, database integrations, and customer touchpoints. We align your product roadmap, marketing campaigns, and workflow engines to increase market reach and accelerate operational efficiency.",
  },
  {
    question: "How much does business operations consulting cost?",
    answer: "Consulting costs vary based on organization size, system complexity, and project timelines. Lamb Strategy offers customized proposals tailored to your budget range, starting with short-term strategy workshops up to full-scale systems implementations.",
  },
  {
    question: "What is OneRoom OS?",
    answer: "OneRoom OS is our patented AI-powered decentralized operating system designed to capture team knowledge, automate documents, and streamline communications. It acts as a unified company memory hub to help growing organizations eliminate scattered spreadsheets and operational chaos.",
  },
  {
    question: "How do I scale my small business operations?",
    answer: "Scaling operations begins by auditing your current workflow blockers, documenting standard SOPs, and optimizing internal systems like CRMs and email marketing tools. Lamb Strategy guides you through this lifecycle to ensure delegation works profitably.",
  },
];

// Animation variants
const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const tagContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const tagVariants: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.04,
    borderColor: "#0f294a",
    backgroundColor: "#f8fafc",
    color: "#0f294a",
    transition: { duration: 0.18, ease: "easeInOut" },
  },
};

const statCardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: custom * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function HomePage() {
  // Generate FAQ JSON-LD Schema
  const faqSchemaJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <PageTransition>
      {/* Inject FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaJson) }}
      />

      {/* HERO SECTION */}
      <HeroSection />

      {/* STATISTICS STRIP */}
      <section className="bg-slate-50 py-10 border-b border-slate-200" aria-label="Key Performance Metrics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, value: "40%+", label: "Average Client Growth" },
              { icon: Award, value: "15+ Yrs", label: "Active Experience" },
              { icon: Zap, value: "3x", label: "Faster Product GTM" },
              { icon: Cpu, value: "Patented", label: "OneRoom OS Solutions" }
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={statCardVariants}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="bg-white p-5 rounded border border-slate-200 text-center shadow-sm"
                >
                  <div className="inline-flex p-1.5 bg-slate-100 text-[#0F294A] rounded mb-2">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0F294A] mb-0.5 font-sans">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase text-slate-500 font-sans tracking-wide">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARTNER LOGOS STRIP */}
      <section className="bg-white py-8 border-b border-slate-200" aria-label="Tools We Integrate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6 font-sans">
            Tools & Platforms We Work With
          </p>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.75, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
          >
            <div className="text-base sm:text-lg font-bold tracking-tight text-slate-450 font-sans">HubSpot</div>
            <div className="text-base sm:text-lg font-bold tracking-tight text-slate-450 font-sans">Salesforce</div>
            <div className="text-base sm:text-lg font-bold tracking-tight text-slate-450 font-sans">Notion</div>
            <div className="text-base sm:text-lg font-bold tracking-tight text-slate-450 font-sans">Slack</div>
            <div className="text-base sm:text-lg font-bold tracking-tight text-slate-450 font-sans">Apollo.io</div>
          </motion.div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-16 bg-slate-900 text-white relative border-b border-slate-800 overflow-hidden" aria-label="Philosophy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Pain points & key question */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="lg:col-span-5 space-y-4"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block font-sans">
                Corporate Alignment
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-sans leading-tight">
                Are you building the plane while flying it?
              </h2>
              <div className="space-y-4 pt-2 border-t border-slate-800">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 text-sky-400 font-bold">?</div>
                  <p className="text-slate-300 text-sm sm:text-base font-sans font-light">
                    Ready to grow but not sure how to delegate or scale profitably?
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 text-sky-400 font-bold">?</div>
                  <p className="text-slate-300 text-sm sm:text-base font-sans font-light">
                    Struggling with disconnected databases, spreadsheets, or manual tracking?
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: Core message & description */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="lg:col-span-7 space-y-6"
            >
              <p className="text-lg sm:text-xl font-medium text-slate-100 leading-relaxed font-sans border-l-4 border-sky-500 pl-6">
                &ldquo;We provide the right tools, insights, and connections to help your business, team, and customers make better, faster, more informed decisions that help them thrive.&rdquo;
              </p>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans font-light">
                We love bringing order into chaos and creating systems that work for teams and customers. We understand what&apos;s involved in designing and launching products, apps, and websites that delight users. We love simplicity, getting the job done, and making the world a better place — one task and interface at a time.
              </p>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-1.5 px-6 py-3 bg-sky-500 hover:bg-sky-450 text-slate-900 font-bold rounded transition-colors"
                >
                  Let us be your co-pilot
                  <ArrowRight className="w-4 h-4 text-slate-950 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT IS LAMB STRATEGY? */}
      <section className="py-20 bg-slate-50 border-b border-slate-200" aria-label="About the Firm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: About */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="lg:col-span-7 space-y-6"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0F294A] bg-slate-100 rounded border border-slate-200">
                Company Overview
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 font-sans">
                What is Lamb Strategy?
              </h2>
              <p className="text-slate-650 text-base leading-relaxed font-sans font-light">
                Based in Kansas City, Missouri, <strong>Lamb Strategy</strong> is a professional management consulting firm focused on Revenue Growth, Digital Strategy, and Strategic Operations implementation for small and medium-sized companies.
              </p>
              <p className="text-slate-650 text-base leading-relaxed font-sans font-light">
                We design and optimize CRM frameworks, email marketing funnels, workflow operations, and high-conversion client websites. Additionally, we integrate our patented, AI-powered decentralized communication solution, <strong>OneRoom OS</strong>, to unify organizational memory and automate administrative paperwork.
              </p>
            </motion.div>

            {/* Right Column: Differentiators */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5 p-8 bg-slate-900 text-white rounded border border-slate-800 shadow-md"
            >
              <h3 className="text-lg font-bold font-sans mb-4 text-sky-400">Our Core Differentiators</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <span className="text-sky-400">✔</span>
                  <p className="text-slate-200 text-sm font-sans font-light">
                    <strong>Direct Implementation:</strong> We don&apos;t just consult; we design, build, and deploy the CRMs and workflows we propose.
                  </p>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-sky-400">✔</span>
                  <p className="text-slate-200 text-sm font-sans font-light">
                    <strong>Patented AI System:</strong> Integration with OneRoom OS provides decentralized organizational learning models directly in your workspace.
                  </p>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-sky-400">✔</span>
                  <p className="text-slate-200 text-sm font-sans font-light">
                    <strong>A11y Compliance:</strong> Digital strategies and developments are built around strict WCAG accessibility standards.
                  </p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHO DOES LAMB STRATEGY WORK WITH? */}
      <section className="py-20 bg-white border-b border-slate-200" aria-label="Who We Serve">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Who does Lamb Strategy work with?"
            subtitle="Whether you are launching a product, improving internal systems, or trying to scale without chaos, Lamb Strategy helps turn complexity into clarity."
            badge="Target Partners"
          />

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
          >
            {audienceList.map((aud, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover={{ y: -4, borderColor: "#0F294A" }}
                className="bg-slate-50 p-6 rounded border border-slate-200 transition-colors duration-150"
              >
                <div className="h-1 w-8 bg-[#0F294A] rounded mb-4" />
                <h3 className="text-base font-bold text-slate-900 mb-2 font-sans">{aud.title}</h3>
                <p className="text-slate-605 text-xs sm:text-sm leading-relaxed font-sans font-light">{aud.desc}</p>
              </motion.div>
            ))}
            
            {/* Custom CTA block inside grid */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="bg-slate-900 p-6 rounded text-white flex flex-col justify-between items-start border border-slate-800"
            >
              <div>
                <ShieldCheck className="w-7 h-7 text-sky-400 mb-4" />
                <h3 className="text-base font-bold font-sans mb-1">Tailored Operations</h3>
                <p className="text-slate-300 text-xs leading-relaxed font-sans font-light">
                  We don&apos;t do boilerplate templates. Every system is customized to fit your team size, budget, and growth phase.
                </p>
              </div>
              <Link href="/contact" className="mt-6 flex items-center gap-1 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors uppercase tracking-wider font-sans">
                Book standard assessment <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHAT SERVICES DOES LAMB STRATEGY OFFER? */}
      <section className="py-20 bg-slate-50 border-b border-slate-200" id="services" aria-label="Our Services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What services does Lamb Strategy offer?"
            subtitle="Here’s how we help create a winning growth strategy."
            badge="Core Disciplines"
          />

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
          >
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded border border-slate-200 shadow-sm transition-colors duration-150"
            >
              Learn More About Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* STRATEGIC OPS SECTION */}
      <section className="py-20 bg-white border-b border-slate-200" aria-label="Capabilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0F294A] bg-slate-100 rounded border border-slate-200 mb-3">
              Strategic Ops Support
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 font-sans mb-3">
              Core Capabilities We Deliver
            </h2>
            <p className="text-slate-605 font-sans text-sm sm:text-base leading-relaxed">
              We provide deep support across various operational and marketing areas. Here is a directory of key competencies we integrate into client systems.
            </p>
          </div>

          <motion.div 
            variants={tagContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto"
          >
            {strategicOpsTags.map((tag, idx) => (
              <motion.span
                key={idx}
                variants={tagVariants}
                whileHover="hover"
                className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-slate-650 bg-slate-50 rounded border border-slate-200 cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HOW DOES LAMB STRATEGY'S CONSULTING PROCESS WORK? */}
      <section className="py-20 bg-slate-50 border-b border-slate-200" aria-label="Our Process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How does Lamb Strategy's consulting process work?"
            subtitle="A structured, collaborative approach to taking your systems from discovery to active scaling."
            badge="Methodology"
          />

          <ProcessSection />
        </div>
      </section>

      {/* SOCIAL PROOF / TESTIMONIALS */}
      <section className="py-20 bg-white border-b border-slate-200" aria-label="Client Success Stories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Clients Say"
            subtitle="Real transformations from companies that scaled operations with Lamb Strategy."
            badge="Testimonials"
          />

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8"
          >
            {testimonialsList.map((test, idx) => (
              <TestimonialCard
                key={idx}
                quote={test.quote}
                name={test.name}
                role={test.role}
                company={test.company}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-white border-b border-slate-200" aria-label="Frequently Asked Questions">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Authoritative answers to common operations and consulting queries."
            badge="FAQ"
          />

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="mt-8 space-y-6"
          >
            {faqList.map((faq, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover={{ scale: 1.005, transition: { duration: 0.2 } }}
                className="p-6 bg-slate-50 rounded border border-slate-200 transition-colors"
              >
                <h3 className="text-base font-bold text-slate-900 font-sans mb-2">
                  {faq.question}
                </h3>
                <p className="text-slate-655 text-sm font-sans leading-relaxed font-light">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTACT / CTA FORM SECTION */}
      <section className="py-20 bg-slate-50" id="contact" aria-label="Get in touch">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-white rounded border border-slate-200 shadow-lg overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Info column */}
              <div className="lg:col-span-5 bg-slate-900 text-white p-8 sm:p-12 flex flex-col justify-between relative">
                <div className="space-y-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block">
                    Let&apos;s fly together
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-sans">
                    Ready to Transform Your Business?
                  </h2>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans font-light">
                    Schedule a free consultation today to help get your business ahead of the game. Let us analyze your workflows and build a customized execution roadmap.
                  </p>
                </div>

                <div className="mt-12 pt-6 border-t border-slate-800 space-y-4 text-xs font-sans text-slate-400">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>Free 30-Minute Consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>Tailored Systems Architecture Proposal</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>OneRoom OS Demo Access Included</span>
                  </div>
                </div>
              </div>

              {/* Form column */}
              <div className="lg:col-span-7 p-8 sm:p-12">
                <ContactForm />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
