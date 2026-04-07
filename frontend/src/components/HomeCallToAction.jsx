import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Target, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

/* ─── Logo brand colors ─── */
const BRAND = "#289434"; // Logo Forest Green
const DARK  = "#14542c"; // Logo Dark Ivy

export default function HomeCallToAction() {
  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a] font-sans border-t border-white/10 overflow-hidden relative">
      
      {/* ── Cinematic Structural Grid Background ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
           style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="max-w-[1700px] mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* -- Left Side: Structural Image Block -- */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Brutalist Main Image */}
            <div className="overflow-hidden border border-white/20 bg-[#1e2020] relative h-[600px] w-full" style={{ borderBottomWidth: '12px', borderBottomColor: BRAND }}>
              <div className="absolute inset-0 bg-black/20 pointer-events-none z-10" />
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
                alt="TEK Inspirations IT Team"
                className="w-full h-full object-cover object-center grayscale contrast-125 brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700"
              />
            </div>

            {/* Brutalist Corporate Stat Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-4 bg-white text-zinc-900 py-6 px-8 shadow-2xl hidden md:flex items-center gap-6 border-l-[6px] z-11"
              style={{ borderLeftColor: BRAND }}
            >
              <div className="w-16 h-16 bg-zinc-100 flex items-center justify-center border border-zinc-200" style={{ color: BRAND }}>
                <Target size={32} strokeWidth={2.5} />
              </div>
              <div>
                <p className="font-black text-[42px] leading-none mb-1 text-[#0a0a0a]">
                  15<span style={{ color: BRAND }}>+</span>
                </p>
                <p className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-black">
                  Years Leading IT
                </p>
              </div>
            </motion.div>

            {/* Stark Upper Info Box */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute top-8 -left-8 bg-[#1e2020] py-5 px-6 shadow-2xl border border-white/10 hidden lg:flex items-center gap-5"
            >
              <ShieldCheck size={28} style={{ color: BRAND }} strokeWidth={2.5} />
              <div>
                <p className="text-white/40 text-[9px] font-black uppercase tracking-[0.2em]">
                  ISO Certified
                </p>
                <p className="text-white font-bold text-sm tracking-widest uppercase mt-0.5">
                  Secure Govt. Vendor
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* -- Right Side: Corporate Text -- */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:pl-8 mt-10 lg:mt-0"
          >
            <h4 className="font-black tracking-[0.2em] uppercase text-[11px] mb-5 flex items-center gap-4" style={{ color: BRAND }}>
              <span className="w-8 h-[2px]" style={{ background: BRAND }} />
              About TEK Inspirations LLC
            </h4>
            
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-black uppercase text-white mb-8 leading-[1.05] tracking-tight">
              Architecting Your<br />Digital Journey
            </h2>

            <div className="space-y-6 text-white/50 font-medium leading-relaxed text-lg mb-12 border-l-[3px] pl-6" style={{ borderLeftColor: `${BRAND}40` }}>
              <p>
                <strong className="text-white">TEK Inspirations LLC</strong> is a 
                premier IT consulting and talent acquisition firm deeply rooted in innovation, operating with nationwide capability.
              </p>
              <p>
                We believe every technological transition is a critical step towards superior operational efficiency — whether deploying cloud infrastructure, developing distinct software, or building an elite contingent workforce.
              </p>
              <p>
                Our mission is to simplify the complex terrain of enterprise technology, empowering your business to scale with confidence, completely unobstructed.
              </p>
            </div>

            {/* Brutalist Strategic Highlight */}
            <div className="bg-[#1e2020] border border-white/10 p-6 mb-12 flex items-center gap-6 group hover:border-white/30 transition-colors duration-300">
              <div className="w-14 h-14 bg-[#0a0a0a] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/5 transition-colors duration-300" style={{ color: BRAND }}>
                <Briefcase size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h5 className="text-white font-black uppercase tracking-wide text-sm mb-1.5">
                  Aligning With Your Goals
                </h5>
                <p className="text-white/40 text-[13px] font-medium leading-relaxed">
                  We design technological roadmaps heavily tailored to your exact enterprise requirements.
                </p>
              </div>
            </div>

            {/* Standard Primary Button (Cinematic Arrow) */}
            <Link to="/contact" className="group flex items-center gap-4 text-white hover:text-white transition-colors">
              <span className="font-black tracking-[0.2em] uppercase text-[13px] border-b-[3px] border-white/20 pb-1.5 transition-all group-hover:border-white" style={{ borderBottomColor: BRAND }}>
                Schedule Consultation
              </span>
              <svg width="44" height="26" viewBox="0 0 44 26" fill="none" className="transition-all duration-300 group-hover:translate-x-2" style={{ color: BRAND }}>
                <path d="M2,2 L2,13 L40,13" stroke="currentColor" strokeWidth="2.5" />
                <path d="M32,5 L40,13 L32,21" stroke="currentColor" strokeWidth="2.5" />
              </svg>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
