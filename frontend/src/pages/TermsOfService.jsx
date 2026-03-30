import React from "react";
import { motion } from "framer-motion";
import { Scale, FileText } from "lucide-react";
import PageHero from "../components/PageHero";

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
    <div className="min-h-screen bg-[#f8fafc]">
      <PageHero
        badge="Legal & Compliance"
        title="Terms &"
        highlight="Conditions"
        subtitle="Last Updated: March 2026. Please read these terms carefully before using our services."
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
        {/* Info Strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="flex items-center gap-3 p-4 rounded-xl bg-[#088349]/5 border border-[#088349]/15 mb-10"
        >
          <div className="w-10 h-10 rounded-lg bg-[#088349]/10 border border-[#088349]/20 flex items-center justify-center shrink-0">
            <Scale size={18} className="text-[#088349]" />
          </div>
          <p className="text-sm text-slate-600 font-medium">
            These terms govern your use of TEK Inspirations LLC's website and services. By continuing to use our services, you agree to these terms.
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

export default TermsOfService;
