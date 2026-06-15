"use client";

import React from "react";
import { Mail, Clock, Calendar, Phone } from "lucide-react";
import { motion, Variants } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import PageTransition from "@/components/PageTransition";

const meetingSteps = [
  {
    title: "1. Select Service Interests",
    desc: "Fill out the questionnaire indicating your budget range, timeline, and current operational friction points.",
  },
  {
    title: "2. Review & Connect",
    desc: "A Lamb Strategy consultant reviews your details and coordinates a 30-minute video conference.",
  },
  {
    title: "3. Strategy Roadmap",
    desc: "We deliver a tailored operational proposal detailing CRM optimization, UX wireframes, or OneRoom OS setups.",
  },
];

const contactFaqs = [
  {
    question: "Is the consultation really free?",
    answer: "Yes, our introductory 30-minute consultation is entirely free of charge. It serves to identify your current operational roadblocks and determine if our product or operational consulting aligns with your needs.",
  },
  {
    question: "How long is the consultation?",
    answer: "The introductory consultation is scheduled for 30 minutes, which is ample time to review your questionnaire, identify core workflows, and discuss direct next steps.",
  },
  {
    question: "What happens after the consultation?",
    answer: "Following the session, we prepare a tailored systems architecture proposal outlining recommended CRM optimization steps, UX wireframes, or OneRoom OS setups, including concrete cost tiers and GTM timelines.",
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function ContactContent() {
  return (
    <PageTransition>
      <div className="relative py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* H1 promoted for SEO */}
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-center text-slate-900 font-sans mb-3">
            Contact Lamb Strategy | Schedule a Free Consultation
          </h1>

          <SectionHeading
            title="Connect with Our Consultants"
            subtitle="Schedule a free consultation today to help get your business ahead of the game."
            badge="Contact Hub"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-8">
            {/* Expectations sidebar */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-4 space-y-8 bg-slate-900 text-white rounded p-8 border border-slate-800 shadow-md"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-2">
                  What to Expect
                </span>
                <h2 className="text-xl font-bold font-sans">
                  Our Consultation Process
                </h2>
              </div>

              <div className="space-y-6">
                {meetingSteps.map((step, idx) => (
                  <div key={idx} className="space-y-1">
                    <h3 className="text-sm font-semibold text-slate-100 font-sans">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm font-sans leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-800 pt-6 space-y-4 text-xs font-sans text-slate-400">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-sky-400" />
                  <span>30-minute introductory meeting</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-sky-400" />
                  <span>Flexible scheduling options</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-sky-400" />
                  <a href="tel:+15125550199" className="hover:text-slate-200 transition-colors">
                    +1 (512) 555-0199
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-sky-400" />
                  <a href="mailto:co-pilot@lambstrategy.com" className="hover:text-slate-200 transition-colors">
                    co-pilot@lambstrategy.com
                  </a>
                </div>
              </div>

              <div className="p-4 bg-slate-800 rounded text-xs leading-relaxed text-slate-300 font-sans">
                <strong>Need immediate technical support?</strong> Reach out directly at support@lambstrategy.com for SLA inquiries.
              </div>
            </motion.div>

            {/* Form / Booking wrapper */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white border border-slate-200 rounded p-6 sm:p-8 shadow-sm"
            >
              {/* Column 1: Calendly Booking */}
              <div className="space-y-4 border-b md:border-b-0 md:border-r border-slate-100 pb-8 md:pb-0 md:pr-8">
                <div className="flex items-center gap-2 text-[#0F294A] font-sans font-bold">
                  <Calendar className="w-5 h-5 text-sky-600" />
                  <h2 className="text-base text-slate-950 font-sans">Book a Time Directly</h2>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-sans font-light">
                  Schedule a 30-minute discovery call directly on our calendar. Select a time that works best for your team.
                </p>
                {/* Calendly Inline Widget */}
                <div className="w-full h-[450px] border border-slate-100 rounded overflow-hidden shadow-inner bg-slate-50">
                  <iframe
                    src="https://calendly.com/claudia-lambstrategy/30min?embed_domain=lambstrategy.com&embed_type=Inline"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Calendly Scheduling"
                  />
                </div>
              </div>

              {/* Column 2: Detailed Questionnaire */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#0F294A] font-sans font-bold">
                  <Mail className="w-5 h-5 text-sky-600" />
                  <h2 className="text-base text-slate-950 font-sans">Submit a Questionnaire</h2>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-sans font-light">
                  Have a complex project? Fill out our detailed consulting questionnaire, and we will get back to you with a tailored assessment within 24 hours.
                </p>
                <ContactForm />
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 max-w-4xl mx-auto">
            <SectionHeading
              title="Consultation Frequently Asked Questions"
              subtitle="Understand our consulting process before booking your free discovery session."
              badge="FAQ"
            />

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="mt-8 space-y-6"
            >
              {contactFaqs.map((faq, idx) => (
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
        </div>
      </div>
    </PageTransition>
  );
}
