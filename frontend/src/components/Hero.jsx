import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Server, Shield, Activity, CloudFog, Command, Globe2 } from "lucide-react";

const metrics = [
  { icon: CloudFog, label: "Cloud Infrastructure",  value: "99.99%", desc: "Uptime Guaranteed" },
  { icon: Shield,   label: "Enterprise Security",   value: "Zero",   desc: "Breaches Recorded" },
  { icon: Activity, label: "System Performance",    value: "<50ms",  desc: "Average Latency" },
];

function Hero() {
  return (
    <section className="relative bg-[#f8fafc] overflow-hidden pt-[70px] min-h-[90vh] flex items-center">
      {/* ── Enterprise IT Background: Tech Grid + Data Nodes ── */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(#0f172a 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.02]"
        style={{ backgroundImage: "linear-gradient(#088349 1px,transparent 1px),linear-gradient(90deg,#088349 1px,transparent 1px)", backgroundSize: "128px 128px" }} />

      {/* Corporate Accents */}
      <div className="pointer-events-none absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #088349, transparent 60%)", filter: "blur(100px)" }} />
      <div className="pointer-events-none absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] rounded-full opacity-[0.03]"
        style={{ background: "radial-gradient(circle, #0f172a, transparent 60%)", filter: "blur(80px)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

          {/* ── Left Side: Core Message ── */}
          <div className="lg:col-span-6 relative z-10">
            {/* Tech Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-md bg-[#0f172a] shadow-lg shadow-[#088349]/10 border border-[#088349]/30 mb-7"
            >
              <Command size={14} className="text-[#088349]" />
              <span className="text-[#3ddc84] text-[11px] font-black uppercase tracking-[0.15em]">Enterprise Tech Partner</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[4rem] font-black text-[#0f172a] leading-[1.05] tracking-tight mb-7"
            >
              Architecting{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #088349, #0aad60)" }}>
                  Scalable
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-[#088349] to-transparent opacity-40"></span>
              </span>
              <br className="hidden md:block" /> Digital Landscapes
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[17px] text-slate-600 leading-relaxed mb-9 max-w-xl font-medium"
            >
              We engineer mission-critical cloud infrastructure, robust custom software, and managed IT services for global enterprises demanding zero downtime and exponential growth.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link to="/contact"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#0f172a] hover:bg-[#1e293b] overflow-hidden rounded-xl text-white font-bold text-sm transition-all duration-300 shadow-xl shadow-[#0f172a]/20 hover:-translate-y-0.5">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                Initiate Project <ArrowRight size={16} className="text-[#088349]" />
              </Link>
              <Link to="/our-solution"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl border-2 border-slate-200 hover:border-[#088349]/50 hover:bg-[#088349]/5 text-[#0f172a] font-bold text-sm transition-all duration-300">
                <Server size={17} className="text-[#088349]" /> View Capabilities
              </Link>
            </motion.div>
            
            {/* Minimal Client Strip */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
              className="mt-12 pt-6 border-t border-slate-200 flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <span>Trusted Globally by 500+ Innovators</span>
              <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
            </motion.div>
          </div>

          {/* ── Right Side: Abstract Data/Cloud UI ── */}
          <div className="lg:col-span-6 relative perspective-1000">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }} 
              animate={{ opacity: 1, scale: 1, rotateY: 0 }} 
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="relative w-full aspect-[4/3] rounded-2xl border border-slate-200/50 bg-white/40 shadow-2xl backdrop-blur-xl p-3 flex flex-col"
            >
              {/* Fake UI Header */}
              <div className="flex items-center gap-2 px-3 pb-3 border-b border-slate-200/50 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <div className="mx-auto flex items-center gap-1.5 px-3 py-1 rounded bg-slate-100/50 border border-slate-200">
                  <Globe2 size={10} className="text-slate-500" />
                  <span className="text-[9px] font-bold text-slate-500 tracking-wider">TEK.ENTERPRISE.SYSTEM</span>
                </div>
              </div>

              {/* Server Image Background inside the UI */}
              <div className="absolute inset-0 z-0 m-3 mt-12 mb-3 rounded-xl overflow-hidden opacity-90 brightness-95">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200" 
                  alt="Data Center Server Racks" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent" />
              </div>

              {/* Superimposed Dashboard Metrics */}
              <div className="relative z-10 flex flex-col justify-end h-full p-4 gap-3">
                {metrics.map(({ icon: Icon, label, value, desc }, i) => (
                  <motion.div 
                    key={label}
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + (i * 0.15) }}
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-lg hover:bg-white/15 transition-colors cursor-default max-w-sm"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#088349]/20 border border-[#088349]/30 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[#3ddc84]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60 text-[10px] uppercase font-bold tracking-widest mb-0.5">{label}</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-white font-black text-xl">{value}</span>
                        <span className="text-white/40 text-[11px] font-semibold">{desc}</span>
                      </div>
                    </div>
                    {/* Fake pulse indicator */}
                    <div className="h-full flex items-center pr-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3ddc84] animate-pulse shadow-[0_0_8px_#3ddc84]" />
                    </div>
                  </motion.div>
                ))}
              </div>

            </motion.div>
            
            {/* Accent Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
              className="absolute -bottom-6 right-6 lg:-right-6 bg-white shadow-2xl shadow-slate-200 p-4 rounded-2xl border border-slate-100 flex items-center gap-3 z-20"
            >
              <div className="relative">
                <svg width="40" height="40" viewBox="0 0 40 40" className="rotate-[-90deg]">
                  <circle cx="20" cy="20" r="16" fill="transparent" stroke="#f1f5f9" strokeWidth="4" />
                  <circle cx="20" cy="20" r="16" fill="transparent" stroke="#088349" strokeWidth="4" strokeDasharray="100" strokeDashoffset="2" strokeLinecap="round" />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-[#0f172a]">98<span className="text-[7px]">%</span></span>
              </div>
              <div>
                <p className="text-[#0f172a] font-bold text-xs uppercase tracking-wider mb-0.5">SLA Achievement</p>
                <p className="text-slate-400 text-[10px] font-semibold">Exceeding Industry Standards</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
