import React from "react";
import { motion } from "framer-motion";
import { TerminalSquare } from "lucide-react";

/**
 * Reusable Enterprise IT page hero.
 * Props: badge, title, highlight (green gradient), subtitle
 */
function PageHero({ badge, title, highlight, subtitle }) {
  return (
    <div className="relative bg-[#0f172a] border-b border-slate-800 pt-36 pb-24 overflow-hidden flex flex-col items-center justify-center text-center">
      
      {/* ── Abstract Tech Background ── */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
      
      <div className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse at top, #08834920 0%, transparent 60%)" }} />
      
      <div className="pointer-events-none absolute -left-[20%] top-[20%] w-[500px] h-[500px] border-[50px] border-white/5 rounded-full blur-[8px]" />
      <div className="pointer-events-none absolute -right-[10%] top-[40%] w-[300px] h-[300px] border-[30px] border-[#088349]/10 rounded-full blur-[4px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        
        {/* Terminal/Code styled Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#1e293b]/50 border border-[#088349]/40 mb-8 backdrop-blur-md shadow-lg shadow-[#088349]/10"
        >
          <TerminalSquare size={12} className="text-[#3ddc84]" />
          <span className="text-[#3ddc84] text-[10px] font-black uppercase tracking-[0.2em]">{badge}</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-[4rem] font-black text-white mb-6 leading-[1.05] tracking-tight"
        >
          {title}{" "}
          {highlight && (
            <span style={{ background: "linear-gradient(135deg, #3ddc84, #088349)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {highlight}
            </span>
          )}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[17px] text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Decorative scanning line */}
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }} 
          animate={{ scaleX: 1, opacity: 1 }} 
          transition={{ delay: 0.5, duration: 1 }}
          className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-[#088349]/50 to-transparent mt-12"
        />
      </div>
    </div>
  );
}

export default PageHero;
