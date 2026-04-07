import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Activity, Users, FileCheck } from "lucide-react";

/* ─── Logo brand colors ─── */
const BRAND = "#289434"; // Logo Forest Green
const DARK  = "#14542c"; // Logo Dark Ivy

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
      <div className="bg-[#0a0a0a] py-4 overflow-hidden border-t border-b shadow-2xl relative z-20" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
        <div className="flex w-[200%] animate-marquee">
          {[...Array(2)].map((_, arrayIndex) => (
            <div
              key={`array-${arrayIndex}`}
              className="flex w-[50%] justify-around items-center shrink-0"
            >
              {highlights.map((item, i) => (
                <div
                  key={`item-${i}`}
                  className="flex items-center gap-4 text-white/70 font-black text-[10px] md:text-[12px] tracking-[0.2em] uppercase"
                >
                  <div className="w-1.5 h-1.5 bg-[#289434]" />
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="py-24 md:py-32 bg-[#fafafa] relative font-sans overflow-hidden border-b border-zinc-200">
        {/* Subtle brutalist grid overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-5"
             style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        
        <div className="max-w-[1700px] mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Column: Brutalist Imagery */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              {/* Main Structural Image */}
              <div className="relative overflow-hidden border border-zinc-200 bg-zinc-100 h-[600px] w-full shadow-2xl" style={{ borderBottomWidth: '12px', borderBottomColor: BRAND }}>
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000" 
                  alt="Global Tech Network" 
                  className="w-full h-full object-cover grayscale contrast-[1.2] brightness-90"
                />
                
                {/* Secondary Offset Image */}
                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute bottom-12 -right-8 md:-right-12 w-64 md:w-80 h-64 overflow-hidden border-8 border-white bg-white shadow-2xl hidden md:block"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600" 
                    alt="Working on code" 
                    className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                  />
                  {/* Subtle brand tint */}
                  <div className="absolute inset-0 mix-blend-multiply opacity-20 pointer-events-none" style={{ background: BRAND }} />
                </motion.div>
              </div>

              {/* Stark Badge */}
              <motion.div 
                 initial={{ scale: 0.9, opacity: 0 }}
                 whileInView={{ scale: 1, opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.6, duration: 0.5 }}
                 className="absolute top-10 -left-6 md:-left-12 bg-white px-8 py-6 shadow-2xl border-l-[6px] flex items-center gap-5"
                 style={{ borderLeftColor: BRAND }}
              >
                 <div className="w-12 h-12 rounded-none bg-zinc-100 flex items-center justify-center border border-zinc-200" style={{ color: BRAND }}>
                    <ShieldCheck size={24} strokeWidth={2.5} />
                 </div>
                 <div>
                    <h5 className="font-black text-zinc-900 text-3xl font-sans leading-none mb-1">15+</h5>
                    <p className="text-zinc-500 font-bold text-[10px] uppercase tracking-widest leading-tight">Yrs Secured<br />Operations</p>
                 </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Content & Structured Grid */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-14"
              >
                <h4 className="font-black tracking-[0.2em] uppercase text-[11px] mb-5 flex items-center gap-4" style={{ color: BRAND }}>
                  <span className="w-8 h-[2px]" style={{ background: BRAND }} />
                  Our Core Strengths
                </h4>
                <h2 className="text-4xl md:text-5xl lg:text-[52px] font-black uppercase text-[#0a0a0a] mb-8 leading-[1.05] tracking-tight">
                  Why Choose<br />
                  <span style={{ color: BRAND }}>TEK</span> Inspirations
                </h2>
                <p className="text-zinc-600 text-base md:text-lg leading-relaxed max-w-xl font-medium border-l-[3px] pl-6" style={{ borderLeftColor: `${BRAND}40` }}>
                  Our reputation is built on architectural excellence, relentless
                  compliance, and an unwavering commitment to scaling your business
                  securely. We bridge the gap between vision and reliable execution.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200 shadow-xl">
                {trustCards.map((card, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-white p-8 relative group overflow-hidden"
                  >
                    {/* Hover reveal block */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" style={{ background: BRAND }} />
                    
                    <div className="w-12 h-12 flex items-center justify-center mb-6 border border-zinc-200 transition-colors duration-300 group-hover:border-[#289434]" style={{ color: BRAND }}>
                      <card.icon size={22} strokeWidth={2.5} />
                    </div>
                    
                    <h3 className="text-[15px] font-black uppercase tracking-wide text-zinc-900 mb-3 group-hover:text-[#289434] transition-colors duration-300">
                      {card.title}
                    </h3>
                    
                    <p className="text-zinc-500 text-[13px] leading-relaxed font-medium">
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
