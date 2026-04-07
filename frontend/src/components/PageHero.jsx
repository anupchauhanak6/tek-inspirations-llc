import React from "react";
import { motion } from "framer-motion";

/* ─── Logo brand colors ─── */
const BRAND = "#289434"; // Logo Forest Green
const DARK  = "#14542c"; // Logo Dark Ivy

/**
 * Reusable Enterprise IT page hero.
 * Props: badge, title, highlight (green gradient), subtitle
 */
function PageHero({ badge, title, highlight, subtitle, bgImage }) {
  return (
    <div className="relative bg-[#0a0a0a] pt-40 pb-28 flex flex-col items-center justify-center text-center font-sans border-b border-white/10 overflow-hidden">
      
      {/* ── Cinematic Background Image ── */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
      >
        <img 
          src={bgImage || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"} 
          alt="Atmospheric Background" 
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-75 opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-transparent to-[#0a0a0a]" />
      </div>

      {/* ── Cinematic Structural Grid Background ── */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />

      <div className="relative z-10 max-w-[1700px] mx-auto px-6 lg:px-16 flex flex-col items-center">
        {/* Brutalist Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-4 py-2 border border-white/20 bg-white/5 mb-10 backdrop-blur-sm"
        >
          <div className="w-1.5 h-1.5 bg-[#289434] rounded-none shadow-[0_0_10px_#289434]" />
          <span className="text-white/80 text-[10px] font-black uppercase tracking-[0.2em]">
            {badge}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-[5.5rem] font-black text-white mb-8 leading-[1] tracking-tighter uppercase"
        >
          {title}{" "}
          {highlight && <span style={{ color: BRAND }}>{highlight}</span>}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Professional separator line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-24 h-1 mt-12 rounded-none"
          style={{ background: BRAND }}
        />
      </div>
    </div>
  );
}

export default PageHero;
