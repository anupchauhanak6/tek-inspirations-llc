import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Activity, Users, FileCheck } from "lucide-react";

const highlights = [
  "Comprehensive IT Consulting",
  "Expert Managed Services",
  "Scale Your Workforce",
  "100% Secure & Compliant",
  "Global Tech Advisory",
];

const trustCards = [
  {
    icon: FileCheck,
    title: "Proven Excellence",
    desc: "Over 15 years delivering high-impact solutions for globally recognized enterprises.",
  },
  {
    icon: ShieldCheck,
    title: "100% Compliant",
    desc: "Strict adherence to ISO, SOC2, and government regulatory frameworks to protect your data.",
  },
  {
    icon: Users,
    title: "Elite Tech Talent",
    desc: "Seamlessly scale your teams with top 1% engineers sourced through our advanced RPO.",
  },
  {
    icon: Activity,
    title: "Operational Agility",
    desc: "Responsive, uninterrupted business continuity with 24/7 proactive system monitoring.",
  },
];

export default function HomeStats() {
  return (
    <>
      <div className="bg-[#0f172a] py-3 overflow-hidden border-t border-b border-slate-800 shadow-md relative z-20">
        <div className="flex w-[200%] animate-marquee">
          {[...Array(2)].map((_, arrayIndex) => (
            <div
              key={`array-${arrayIndex}`}
              className="flex w-[50%] justify-around items-center shrink-0"
            >
              {highlights.map((item, i) => (
                <div
                  key={`item-${i}`}
                  className="flex items-center gap-3 text-white font-bold text-xs md:text-sm tracking-widest uppercase"
                >
                  <div className="w-1.5 h-1.5 bg-[#088349] rounded-full" />
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="py-24 md:py-32 bg-white relative font-sans overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#088349]/5 skew-x-12 transform origin-top pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Stunning Composite Imagery */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 h-[600px] w-full">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000" 
                  alt="Global Tech Network" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                
                {/* Floating Image overlay */}
                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute bottom-10 -right-4 md:-right-8 w-64 md:w-80 h-48 md:h-56 rounded-xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600" 
                    alt="Working on code" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#088349]/20 mix-blend-multiply" />
                </motion.div>
              </div>

              {/* Floating Stat Badge */}
              <motion.div 
                 initial={{ scale: 0.8, opacity: 0 }}
                 whileInView={{ scale: 1, opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.6, duration: 0.5 }}
                 className="absolute top-10 -left-6 md:-left-10 bg-white p-6 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4"
              >
                 <div className="w-12 h-12 rounded-full bg-[#088349]/10 flex items-center justify-center text-[#088349]">
                    <ShieldCheck size={24} />
                 </div>
                 <div>
                    <h5 className="font-bold text-slate-900 text-xl font-sans">15+ Years</h5>
                    <p className="text-slate-500 font-medium text-sm">Of Secured Operations</p>
                 </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Content & Grid */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h4 className="text-[#088349] font-bold tracking-widest uppercase text-xs mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#088349]" />
                  Our Core Strengths
                </h4>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-6 leading-tight">
                  Why Choose <span className="text-[#088349]">TEK</span> Inspirations
                </h2>
                <div className="w-16 h-1 lg:h-1.5 bg-[#088349] rounded-full mb-6" />
                <p className="text-slate-600 text-lg leading-relaxed">
                  Our reputation is built on architectural excellence, relentless
                  compliance, and an unwavering commitment to scaling your business
                  securely. We bridge the gap between vision and reliable execution.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {trustCards.map((card, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-slate-50 border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-slate-200 transition-all duration-300 relative group"
                  >
                    <div className="absolute top-0 left-0 w-1 h-0 bg-[#088349] group-hover:h-full transition-all duration-300 rounded-l-xl" />
                    
                    <div className="w-12 h-12 bg-white rounded flex items-center justify-center mb-5 text-[#088349] shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                      <card.icon size={24} strokeWidth={2} />
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-[#088349] transition-colors duration-300">
                      {card.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `,
        }}
      />
    </>
  );
}
