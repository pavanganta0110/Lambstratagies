"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, User, Phone, Briefcase, DollarSign, Clock, MessageSquare, Send, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceInterest: string;
  budgetRange: string;
  projectTimeline: string;
  message: string;
  website: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const serviceOptions = [
  { value: "", label: "Select Service Interest" },
  { value: "product-development", label: "Product Development" },
  { value: "internal-systems-engineering", label: "Internal Systems Engineering" },
  { value: "growth-strategy", label: "Growth Strategy" },
  { value: "oneroom-ai", label: "OneRoom AI / OS" },
  { value: "ux-design", label: "UX Design" },
  { value: "web-mobile-development", label: "Web/Mobile Development" },
  { value: "general-consulting", label: "General Consulting" },
];

const budgetOptions = [
  { value: "", label: "Select Budget Range (Optional)" },
  { value: "under-5k", label: "Under $5,000" },
  { value: "5k-15k", label: "$5,000 – $15,000" },
  { value: "15k-50k", label: "$15,000 – $50,000" },
  { value: "50k-plus", label: "$50,000+" },
  { value: "not-sure", label: "Not sure yet" },
];

const timelineOptions = [
  { value: "", label: "Select Project Timeline (Optional)" },
  { value: "immediately", label: "Immediately" },
  { value: "1-3-months", label: "1–3 months" },
  { value: "3-6-months", label: "3–6 months" },
  { value: "6-plus-months", label: "6+ months" },
  { value: "exploring", label: "Just exploring" },
];

function ContactFormInner() {
  const searchParams = useSearchParams();
  
  // Calculate initial service interest at construction time
  const getInitialService = () => {
    const serviceParam = searchParams.get("service");
    if (!serviceParam) return "";
    
    const matched = serviceOptions.some((opt) => opt.value === serviceParam);
    if (matched) return serviceParam;
    if (serviceParam === "ai-powered-operating-system") return "oneroom-ai";
    if (serviceParam === "user-research-ux-design") return "ux-design";
    if (serviceParam === "mobile-web-development") return "web-mobile-development";
    return "";
  };

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceInterest: getInitialService(),
    budgetRange: "",
    projectTimeline: "",
    message: "",
    website: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {};
    if (!data.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!data.message.trim()) {
      newErrors.message = "Message is required";
    } else if (data.message.trim().length < 10) {
      newErrors.message = "Please tell us a bit more (minimum 10 characters)";
    }
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updatedForm = { ...formData, [name]: value };
    setFormData(updatedForm);

    if (touched[name]) {
      setErrors(validate(updatedForm));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(formData));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Touch all fields
    const allTouched: Record<string, boolean> = {};
    Object.keys(formData).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setIsSuccess(true);
    } catch (err: any) {
      console.error("Submission error:", err);
      setSubmitError("Something went wrong. Please try again or email us directly at claudia@lambstrategy.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="bg-emerald-50 border border-emerald-150 rounded p-8 sm:p-12 text-center shadow-sm"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 300, damping: 20 }}
          className="inline-flex items-center justify-center p-4 bg-emerald-100 text-emerald-600 rounded-full mb-6"
        >
          <CheckCircle className="w-12 h-12" />
        </motion.div>
        <h3 className="text-xl font-bold text-slate-900 font-sans mb-3">
          Message Received!
        </h3>
        <p className="text-slate-600 max-w-lg mx-auto font-sans text-sm leading-relaxed mb-6">
          Thank you for reaching out. Lamb Strategy has received your message and will follow up soon.
        </p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            setIsSuccess(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              company: "",
              serviceInterest: "",
              budgetRange: "",
              projectTimeline: "",
              message: "",
              website: "",
            });
            setTouched({});
            setErrors({});
            setSubmitError(null);
          }}
          className="px-5 py-2.5 bg-[#0F294A] hover:bg-[#0A1D37] text-white rounded text-sm font-bold transition-colors duration-150"
        >
          Send Another Message
        </motion.button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5 font-sans">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <User className="w-5 h-5 stroke-[1.75]" />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              required
              aria-required="true"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded font-sans text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F294A] transition-all ${
                touched.name && errors.name
                  ? "border-red-300 focus:ring-red-500"
                  : "border-slate-200"
              }`}
              placeholder="Jane Doe"
            />
          </div>
          <AnimatePresence>
            {touched.name && errors.name && (
              <motion.p
                initial={{ opacity: 0, height: 0, y: -6 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -6 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="mt-1.5 text-xs font-semibold text-red-600 font-sans overflow-hidden"
                role="alert"
              >
                {errors.name}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5 font-sans">
            Email Address <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Mail className="w-5 h-5 stroke-[1.75]" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              required
              aria-required="true"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded font-sans text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F294A] transition-all ${
                touched.email && errors.email
                  ? "border-red-300 focus:ring-red-500"
                  : "border-slate-200"
              }`}
              placeholder="co-pilot@lambstrategy.com"
            />
          </div>
          <AnimatePresence>
            {touched.email && errors.email && (
              <motion.p
                initial={{ opacity: 0, height: 0, y: -6 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -6 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="mt-1.5 text-xs font-semibold text-red-600 font-sans overflow-hidden"
                role="alert"
              >
                {errors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5 font-sans">
            Phone Number
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Phone className="w-5 h-5 stroke-[1.75]" />
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded font-sans text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F294A] transition-all"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-1.5 font-sans">
            Company Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Briefcase className="w-5 h-5 stroke-[1.75]" />
            </div>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded font-sans text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F294A] transition-all"
              placeholder="Lamb Enterprises"
            />
          </div>
        </div>
      </div>

      {/* Dropdowns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Service Interest */}
        <div>
          <label htmlFor="serviceInterest" className="block text-sm font-semibold text-slate-700 mb-1.5 font-sans">
            Service Interest
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Briefcase className="w-5 h-5 stroke-[1.75]" />
            </div>
            <select
              id="serviceInterest"
              name="serviceInterest"
              value={formData.serviceInterest}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded font-sans text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F294A] transition-all appearance-none cursor-pointer"
            >
              {serviceOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Budget Range */}
        <div>
          <label htmlFor="budgetRange" className="block text-sm font-semibold text-slate-700 mb-1.5 font-sans">
            Budget Range
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <DollarSign className="w-5 h-5 stroke-[1.75]" />
            </div>
            <select
              id="budgetRange"
              name="budgetRange"
              value={formData.budgetRange}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded font-sans text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F294A] transition-all appearance-none cursor-pointer"
            >
              {budgetOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Project Timeline */}
        <div>
          <label htmlFor="projectTimeline" className="block text-sm font-semibold text-slate-700 mb-1.5 font-sans">
            Timeline
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Clock className="w-5 h-5 stroke-[1.75]" />
            </div>
            <select
              id="projectTimeline"
              name="projectTimeline"
              value={formData.projectTimeline}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded font-sans text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F294A] transition-all appearance-none cursor-pointer"
            >
              {timelineOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5 font-sans">
          How can we help? <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute top-3 left-0 pl-3 flex pointer-events-none text-slate-400">
            <MessageSquare className="w-5 h-5 stroke-[1.75]" />
          </div>
          <textarea
            id="message"
            name="message"
            required
            aria-required="true"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded font-sans text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F294A] transition-all ${
              touched.message && errors.message
                ? "border-red-300 focus:ring-red-500"
                : "border-slate-200"
            }`}
            placeholder="Tell us about your business, the systems you are trying to scale, or details about the product you want to launch..."
          />
        </div>
        <AnimatePresence>
          {touched.message && errors.message && (
            <motion.p
              initial={{ opacity: 0, height: 0, y: -6 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -6 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mt-1.5 text-xs font-semibold text-red-600 font-sans overflow-hidden"
              role="alert"
            >
              {errors.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Honeypot field (hidden from users, used to catch spam bots) */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Submit Error */}
      <AnimatePresence>
        {submitError && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -6 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -6 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="p-4 bg-red-50 border border-red-200 text-red-700 text-sm font-semibold rounded font-sans overflow-hidden"
            role="alert"
          >
            {submitError}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit Button */}
      <motion.button
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.985 }}
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0F294A] hover:bg-[#0A1D37] text-white rounded font-bold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-sm"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Submitting Proposal...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 stroke-[1.75]" />
            Schedule My Consultation
          </>
        )}
      </motion.button>
    </form>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0F294A]" />
      </div>
    }>
      <ContactFormInner />
    </Suspense>
  );
}
