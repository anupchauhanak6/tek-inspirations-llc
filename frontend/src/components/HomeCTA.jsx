import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Terminal, CloudLightning, Fingerprint, CheckCircle2 } from "lucide-react";

const proofs = [
  "500+ global enterprises served",
  "24/7 NOC/SOC operational monitoring",
  "ISO/IEC compliant deployments",
];

function HomeCTA() {
  return (
    <section className="py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] opacity-[0.02] pointer-events-none" style={{ backgroundImage: "radial-gradient(#0f172a 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="relative rounded-[2.5rem] overflow-hidden px-8 py-20 text-center flex flex-col items-center group"
          style={{ background: "#0f172a" }}
        >
          {/* Animated Glows */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.2, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full"
            style={{ background: "radial-gradient(circle, #088349, transparent 60%)", filter: "blur(50px)" }} />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.15, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 rounded-full"
            style={{ background: "radial-gradient(circle, #3ddc84, transparent 60%)", filter: "blur(60px)" }} />

          {/* Grid Overlay */}
          <div className="pointer-events-none absolute inset-0 opacity-10 mix-blend-overlay"
            style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

          <div className="relative z-10 w-full max-w-2xl mx-auto">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 bg-[#3ddc84] rounded-full animate-pulse shadow-[0_0_10px_#3ddc84]" />
              <span className="text-slate-300 text-[10px] font-black uppercase tracking-[0.2em]">Ready For Deployment</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-[1.15] tracking-tight">
              Initiate Your Digital <br/>
              <span style={{ background: "linear-gradient(135deg, #3ddc84, #088349)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Transformation Protocol
              </span>
            </h2>
            
            <p className="text-slate-400 text-sm md:text-base font-medium mb-8 leading-relaxed max-w-lg mx-auto">
              Secure scalable infrastructure, deploy elite engineering teams, and automate critical workflows with military-grade precision.
            </p>

            {/* Proof points */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8">
              {proofs.map(p => (
                <div key={p} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 size={14} className="text-[#3ddc84] shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider">{p}</span>
                </div>
              ))}
            </div>

            {/* Micro-Features */}
            <div className="flex flex-wrap justify-center gap-6 mb-10 pt-6 border-t border-white/[0.06]">
              {[
                { i: Terminal,       t: "Custom CI/CD Pipelines" },
                { i: CloudLightning, t: "Zero-Downtime Migration" },
                { i: Fingerprint,    t: "SOC2 Compliant Architecture" }
              ].map(({ i: Icon, t }, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-300">
                  <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icon size={13} className="text-[#3ddc84]" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.1em]">{t}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#088349] hover:bg-[#0aad60] text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-xl shadow-[#088349]/30 hover:-translate-y-0.5 active:scale-[0.98]">
                Schedule Architecture Review
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/our-solution"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-sm rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-md active:scale-[0.98]">
                View System Capabilities
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HomeCTA;
