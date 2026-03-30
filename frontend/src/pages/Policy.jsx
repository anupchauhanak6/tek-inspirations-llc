import React from "react";
import { motion } from "framer-motion";
import { Shield, FileText } from "lucide-react";
import PageHero from "../components/PageHero";

const sections = [
  { title: "1. Introduction", content: "Welcome to Tek Inspirations LLC. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you." },
  { title: "2. Data We Collect", content: "We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:", list: ["Identity Data: includes first name, last name, username or similar identifier.", "Contact Data: includes email address and telephone numbers.", "Technical Data: includes internet protocol (IP) address, your login data, browser type and version.", "Usage Data: includes information about how you use our website, products and services."] },
  { title: "3. How We Use Your Data", content: "We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: Where we need to perform the contract we are about to enter into or have entered into with you; Where it is necessary for our legitimate interests; Where we need to comply with a legal obligation." },
  { title: "4. Data Security", content: "We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know." },
  { title: "5. Contact Us", content: "If you have any questions about this privacy policy or our privacy practices, please contact us via our Contact Page or email us directly at privacy@tekinspirations.com." },
];

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <PageHero
        badge="Legal & Compliance"
        title="Privacy"
        highlight="Policy"
        subtitle="Last Updated: March 2026. Your privacy and data security are our top priorities."
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
        {/* Info Strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="flex items-center gap-3 p-4 rounded-xl bg-[#088349]/5 border border-[#088349]/15 mb-10"
        >
          <div className="w-10 h-10 rounded-lg bg-[#088349]/10 border border-[#088349]/20 flex items-center justify-center shrink-0">
            <Shield size={18} className="text-[#088349]" />
          </div>
          <p className="text-sm text-slate-600 font-medium">
            TEK Inspirations LLC is committed to protecting your privacy. This policy explains how we handle your personal data in compliance with applicable data protection regulations.
          </p>
        </motion.div>

        {/* Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 divide-y divide-slate-100 overflow-hidden"
        >
          {sections.map(({ title, content, list }, i) => (
            <div key={i} className="p-8 group hover:bg-slate-50/50 transition-colors">
              <div className="flex items-start gap-3 mb-4">
                <div className="mt-1 w-8 h-8 rounded-lg bg-[#088349]/10 border border-[#088349]/20 flex items-center justify-center shrink-0">
                  <FileText size={14} className="text-[#088349]" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">{title}</h2>
              </div>
              <p className="text-slate-600 leading-relaxed ml-11">{content}</p>
              {list && (
                <ul className="mt-4 ml-11 space-y-2.5">
                  {list.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#088349] mt-2 shrink-0" />
                      <span className="text-slate-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
