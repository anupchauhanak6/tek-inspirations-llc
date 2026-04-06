import React from "react";
import { motion } from "framer-motion";
import { Scale, FileText } from "lucide-react";
import PageHero from "../components/PageHero";

/* ─── Logo brand colors ─── */
const BRAND = "#289434"; // Logo Forest Green
const DARK  = "#14542c"; // Logo Dark Ivy

const sections = [
  { title: "1. Agreement to Terms", content: "By accessing our website and using our services, you agree to be bound by these Terms and Conditions and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site." },
  { title: "2. Use License", content: "Permission is granted to temporarily download one copy of the materials on Tek Inspirations LLC's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:", list: ["modify or copy the materials;", "use the materials for any commercial purpose or for any public display;", "attempt to reverse engineer any software contained on our website;", "remove any copyright or other proprietary notations from the materials; or", "transfer the materials to another person or \"mirror\" the materials."] },
  { title: "3. Disclaimer", content: "The materials on Tek Inspirations LLC's website are provided on an 'as is' basis. Tek Inspirations LLC makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights." },
  { title: "4. Limitations", content: "In no event shall Tek Inspirations LLC or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if Tek Inspirations LLC or an authorized representative has been notified orally or in writing of the possibility of such damage." },
  { title: "5. Revisions and Errata", content: "The materials appearing on the website could include technical, typographical, or photographic errors. Tek Inspirations LLC does not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice." },
  { title: "6. Governing Law", content: "Any claim relating to Tek Inspirations LLC's website shall be governed by the laws of the jurisdiction without regard to its conflict of law provisions." },
];

function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans">
      <PageHero
        badge="Legal & Compliance"
        title="Terms &"
        highlight="Conditions"
        subtitle="Last Updated: March 2026. Please read these terms carefully before using our services."
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
             <Scale size={20} strokeWidth={2.5} />
           </div>
           <p className="text-[14px] text-white/50 font-bold leading-relaxed max-w-3xl relative z-10">
            These terms govern your use of TEK Inspirations LLC's website and services. By continuing to access and use our structural network, you are bound implicitly to these operational conditions.
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

export default TermsOfService;
