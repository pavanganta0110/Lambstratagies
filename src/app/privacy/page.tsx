import React from "react";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Review the privacy policy for Lamb Strategy. Learn about the parameters of information security, data collection, and processing protocols for our clients.",
};

export default function PrivacyPage() {
  return (
    <PageTransition>
      <div className="relative py-12 sm:py-16 md:py-20 bg-white flex-grow flex flex-col justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <SectionHeading title="Privacy Policy" badge="Legal" align="left" />

          <div className="prose prose-slate max-w-none space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed font-sans mt-8">
            <p className="font-semibold text-slate-900">
              Last Updated: June 15, 2026
            </p>

            <p>
              At Lamb Strategy, we prioritize the confidentiality and safety of your personal data. This Privacy Policy details the types of information we collect when you visit our website or inquire about our consulting services, and how we handle and protect that data.
            </p>

            <h3 className="text-lg font-bold text-slate-900 pt-4">1. Information We Collect</h3>
            <p>
              When you interact with our website, such as scheduling a consultation or using our contact form, we collect the information you explicitly provide:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal details:</strong> Name, company name, phone number, and email address.</li>
              <li><strong>Project details:</strong> Selected service interest, estimated budget range, project timeline, and details in your project message.</li>
            </ul>

            <h3 className="text-lg font-bold text-slate-900 pt-4">2. How We Use Your Information</h3>
            <p>
              We use the data we collect solely to provide and optimize our professional consulting services, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Evaluating project requirements and preparing systems architectures or proposals.</li>
              <li>Scheduling meetings and communicating about services or demo environments.</li>
              <li>Responding to requests, support concerns, or inquiry form submissions.</li>
            </ul>

            <h3 className="text-lg font-bold text-slate-900 pt-4">3. Data Sharing and Disclosure</h3>
            <p>
              Lamb Strategy does not sell, rent, or trade client contact details or project scopes to third parties. We disclose your information only when required by law or to trusted subcontractors under strict confidentiality agreements.
            </p>

            <h3 className="text-lg font-bold text-slate-900 pt-4">4. Security Measures</h3>
            <p>
              We implement standard security measures (such as SSL encryption and access-controlled databases) to safeguard your submitted information from unauthorized access, modification, or exposure.
            </p>

            <h3 className="text-lg font-bold text-slate-900 pt-4">5. Your Privacy Rights</h3>
            <p>
              You have the right to request a copy of the personal details we hold about your business, request updates to outdated information, or request complete deletion of your records. To do so, please contact us at co-pilot@lambstrategy.com.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
