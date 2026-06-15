import React from "react";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Review the Accessibility Statement for Lamb Strategy. Learn about our commitment to WCAG 2.1 AA digital standards.",
};

export default function AccessibilityPage() {
  return (
    <PageTransition>
      <div className="relative py-12 sm:py-16 md:py-20 bg-white flex-grow flex flex-col justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <SectionHeading title="Accessibility Statement" badge="Compliance" align="left" />

          <div className="prose prose-slate max-w-none space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed font-sans mt-8">
            <p className="font-semibold text-slate-900">
              Effective Date: June 15, 2026
            </p>

            <p>
              At Lamb Strategy, we believe digital experiences should be usable and accessible for everyone, regardless of visual, cognitive, or motor abilities. We design our websites, products, and services (including OneRoom OS) with WCAG 2.1 AA accessibility guidelines as our blueprint.
            </p>

            <h3 className="text-lg font-bold text-slate-900 pt-4">1. Actions and Initiatives</h3>
            <p>
              To achieve these goals, we have implemented the following core structural features:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Keyboard Navigation:</strong> All menu dropdowns, links, buttons, and form inputs are navigable using Tab and Enter/Space keys, with clear visual focus outlines.</li>
              <li><strong>Reduced Motion Support:</strong> We respect standard OS motion limits. If a user has enabled &ldquo;Reduce Motion,&rdquo; all animations (such as the Hero paper plane float) are automatically disabled.</li>
              <li><strong>Semantic Structure:</strong> Every page utilizes a single, logical H1 element and descending heading hierarchy, allowing screen reader software to parse sections accurately.</li>
              <li><strong>Contrast Ratios:</strong> Colors (primary navy and secondary sky blue) are tested to meet or exceed contrast minimums against white and slate backgrounds.</li>
              <li><strong>ARIA Labels:</strong> Custom interactive features (like the mobile menu trigger) include proper descriptive screen reader parameters.</li>
            </ul>

            <h3 className="text-lg font-bold text-slate-900 pt-4">2. Continuous Assessment</h3>
            <p>
              While we strive to maintain complete accessibility compliance, some systems may experience temporary rendering gaps as web browsers update. We perform periodic manual reviews and automated checks using standard lighthouse and a11y testing platforms.
            </p>

            <h3 className="text-lg font-bold text-slate-900 pt-4">3. Feedback and Support</h3>
            <p>
              If you encounter difficulty using any part of our website or systems, please let us know. We will work to resolve the issue as quickly as possible.
            </p>
            <ul className="list-none space-y-2 mt-4">
              <li><strong>Email:</strong> accessibility@lambstrategy.com</li>
              <li><strong>Response time:</strong> Typically within 2 business days.</li>
            </ul>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
