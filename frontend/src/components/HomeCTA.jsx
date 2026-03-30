import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Terminal, CloudLightning, Fingerprint } from "lucide-react";

function HomeCTA() {
  return (
    <section className="py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] opacity-[0.02] pointer-events-none" style={{ backgroundImage: "radial-gradient(#0f172a 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="relative rounded-[2.5rem] overflow-hidden px-8 py-20 text-center flex flex-col items-center group"
          style={{ background: "#0f172a" }}
        >
          {/* Internal Glows */}
          <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, #088349, transparent 60%)", filter: "blur(50px)" }} />
          <div className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #3ddc84, transparent 60%)", filter: "blur(60px)" }} />

          {/* Grid Overlay */}
          <div className="pointer-events-none absolute inset-0 opacity-10 mix-blend-overlay"
            style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

          <div className="relative z-10 w-full max-w-2xl mx-auto">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
              <span className="w-1.5 h-1.5 bg-[#3ddc84] rounded-full animate-pulse shadow-[0_0_8px_#3ddc84]" />
              <span className="text-slate-300 text-[10px] font-black uppercase tracking-[0.2em]">Ready For Deployment</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-[1.15] tracking-tight">
              Initiate Your Digital <br/>
              <span style={{ background: "linear-gradient(135deg, #3ddc84, #088349)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Transformation Protocol
              </span>
            </h2>
            
            <p className="text-slate-400 text-sm md:text-base font-medium mb-10 leading-relaxed max-w-lg mx-auto">
              Secure scalable infrastructure, deploy elite engineering teams, and automate critical workflows with military-grade precision.
            </p>

            {/* Micro-Features */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {[
                { i: Terminal,       t: "Custom CI/CD Pipelines" },
                { i: CloudLightning, t: "Zero-Downtime Migration" },
                { i: Fingerprint,    t: "SOC2 Compliant Architecture" }
              ].map(({ i: Icon, t }, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-300">
                  <Icon size={14} className="text-[#3ddc84]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.1em]">{t}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#088349] hover:bg-[#0aad60] text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-xl shadow-[#088349]/30 hover:-translate-y-0.5 group/btn">
                Schedule Architecture Review
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
              <Link to="/our-solution"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-sm rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
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
