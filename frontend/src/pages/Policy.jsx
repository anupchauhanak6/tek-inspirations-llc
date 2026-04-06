import React from "react";
import { motion } from "framer-motion";
import { Shield, FileText } from "lucide-react";
import PageHero from "../components/PageHero";

/* ─── Logo brand colors ─── */
const BRAND = "#289434"; // Logo Forest Green
const DARK  = "#14542c"; // Logo Dark Ivy

const sections = [
  { title: "1. Introduction", content: "Welcome to Tek Inspirations LLC. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you." },
  { title: "2. Data We Collect", content: "We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:", list: ["Identity Data: includes first name, last name, username or similar identifier.", "Contact Data: includes email address and telephone numbers.", "Technical Data: includes internet protocol (IP) address, your login data, browser type and version.", "Usage Data: includes information about how you use our website, products and services."] },
  { title: "3. How We Use Your Data", content: "We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: Where we need to perform the contract we are about to enter into or have entered into with you; Where it is necessary for our legitimate interests; Where we need to comply with a legal obligation." },
  { title: "4. Data Security", content: "We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know." },
  { title: "5. Contact Us", content: "If you have any questions about this privacy policy or our privacy practices, please contact us via our Contact Page or email us directly at privacy@tekinspirations.com." },
];

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans">
      <PageHero
        badge="Legal & Compliance"
        title="Privacy"
        highlight="Policy"
        subtitle="Last Updated: March 2026. Your privacy and data security are our top priorities."
        bgImage="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=2000"
      />

      <div className="max-w-[1700px] mx-auto px-6 lg:px-16 py-24 md:py-32 relative z-10 border-t border-zinc-200 mt-0 -translate-y-px">
        
        {/* Info Strip */}
        <motion.div
           initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
           className="flex flex-col md:flex-row items-start md:items-center gap-6 p-8 bg-[#0a0a0a] border border-[#1e2020] mb-16 shadow-2xl relative overflow-hidden"
         >
           <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          
           <div className="w-12 h-12 bg-[#1e2020] border border-white/20 flex items-center justify-center shrink-0 relative z-10 shadow-2xl" style={{ color: BRAND }}>
             <Shield size={20} strokeWidth={2.5} />
           </div>
           <p className="text-[14px] text-white/50 font-bold leading-relaxed max-w-3xl relative z-10">
             TEK Inspirations LLC is absolutely committed to protecting your privacy. This policy dictates the structural methodologies of how we handle your personal data in strict compliance with applicable regulatory frameworks.
           </p>
         </motion.div>

        {/* Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="bg-white border border-zinc-200 shadow-2xl divide-y divide-zinc-100 max-w-4xl mx-auto"
        >
          {sections.map(({ title, content, list }, i) => (
            <div key={i} className="p-10 lg:p-14 group hover:bg-zinc-50 transition-colors duration-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-8 h-8 bg-zinc-100 border border-zinc-200 flex items-center justify-center shrink-0 mt-1 shadow-sm transition-colors group-hover:border-[#289434]" style={{ color: BRAND }}>
                  <FileText size={14} strokeWidth={2.5} />
                </div>
                <h2 className="text-2xl font-black uppercase text-zinc-900 tracking-tight">{title}</h2>
              </div>
              
              <div className="ml-12 border-l-[3px] border-zinc-200 pl-6 group-hover:border-[#289434] transition-colors duration-500">
                 <p className="text-zinc-600 leading-relaxed font-bold text-[14px]">{content}</p>
                 {list && (
                   <ul className="mt-6 space-y-4">
                     {list.map((item, j) => (
                       <li key={j} className="flex items-start gap-3">
                         <span className="w-1.5 h-1.5 bg-zinc-300 mt-1.5 shrink-0 group-hover:bg-[#289434] transition-colors" />
                         <span className="text-zinc-500 font-bold text-sm leading-relaxed group-hover:text-zinc-700 transition-colors">{item}</span>
                       </li>
                     ))}
                   </ul>
                 )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
