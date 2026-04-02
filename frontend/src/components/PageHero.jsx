import React from "react";
import { motion } from "framer-motion";
import { TerminalSquare } from "lucide-react";

/**
 * Reusable Enterprise IT page hero.
 * Props: badge, title, highlight (green gradient), subtitle
 */
function PageHero({ badge, title, highlight, subtitle }) {
  return (
    <div className="relative bg-slate-50 border-b border-slate-200 pt-36 pb-24 overflow-hidden flex flex-col items-center justify-center text-center font-sans">
      {/* ── Corporate Abstract Background ── */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#088349]/5 skew-x-12 transform origin-top pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-slate-100 -skew-x-12 transform origin-bottom pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        {/* Modern Corporate Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white border border-slate-200 shadow-sm mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#088349]" />
          <span className="text-[#088349] text-xs font-bold uppercase tracking-widest">
            {badge}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-slate-800 mb-6 leading-[1.1] tracking-tight"
        >
          {title}{" "}
          {highlight && <span className="text-[#088349]">{highlight}</span>}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Professional separator line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-16 h-1 bg-[#088349] mt-10 rounded"
        />
      </div>
    </div>
  );
}

export default PageHero;
