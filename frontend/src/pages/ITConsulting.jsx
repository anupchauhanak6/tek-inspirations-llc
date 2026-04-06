import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, Lightbulb, Target, Map, BarChart3, ArrowRight, GitMerge, Settings2, Cpu, TrendingUp, Quote } from "lucide-react";
import PageHero from "../components/PageHero";

/* ─── Logo brand colors ─── */
const BRAND = "#289434"; // Logo Forest Green
const DARK  = "#14542c"; // Logo Dark Ivy

const deliverables = [
  "Strategic Roadmap Alignment",
  "Legacy System Auditing",
  "Cloud Readiness Assessment",
  "Agile Governance Models",
  "Risk & Compliance Analysis",
  "Cost Optimization Strategy",
];

const process = [
  { step: "01", code: "INFRA.SCAN", icon: Target,   title: "Diagnostic Phase",       desc: "Comprehensive auditing of current tech stack, uncovering vulnerabilities and resource bottlenecks." },
  { step: "02", code: "SYS.DESIGN", icon: Map,      title: "Architecture Strategy",  desc: "Developing a highly scalable, ISO-compliant blueprint bridging modern SaaS with internal workflows." },
  { step: "03", code: "DEV.DEPLOY", icon: GitMerge, title: "Agile Deployment",       desc: "Executing phased rollouts with zero operational downtime and robust CI/CD integration." },
  { step: "04", code: "OPS.MONIT",  icon: Settings2,title: "Optimization Loop",      desc: "Real-time telemetry and iterative refining to exceed predefined Key Performance Indicators." },
];

const testimonial = {
  text: "TEK Inspirations provided a comprehensive IT roadmap that transformed our infrastructure. Their consulting team was meticulous and deeply technical.",
  name: "Michael Thompson",
  role: "CTO, FinTech Innovations",
};

function ITConsulting() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans">
      <PageHero
        badge="IT Consulting"
        title="Engineering"
        highlight="Roadmaps"
        subtitle="We translate complex business objectives into highly available, scalable, and secure technology infrastructures."
        bgImage="https://images.unsplash.com/photo-1454165833767-02754d7bd7eb?auto=format&fit=crop&q=80&w=2000"
      />

      {/* ── Capabilities Overview - Light Dual Tone ── */}
      <section className="py-24 md:py-32 bg-[#fafafa] relative overflow-hidden border-t border-zinc-200">
        {/* Brutalist Grid Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
             style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="max-w-[1700px] mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-3 mb-6">
                <Cpu size={16} style={{ color: BRAND }} />
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500">Strategic IT Assessment</span>
              </div>
              <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter text-zinc-900 mb-8 leading-[0.95]">
                Unlock Optimal <br/>
                <span style={{ color: BRAND }}>
                  System Potential
                </span>
              </h2>
              <div className="space-y-6 text-zinc-600 leading-relaxed text-lg font-bold border-l-[3px] mb-12 pl-6 shadow-sm" style={{ borderLeftColor: BRAND }}>
                <p>Enterprise IT consulting isn't just advisory—it's the architectural foundation of digital transformation. We bridge the gap between operational goals and deep technical implementation.</p>
                <p>Our engineers construct meticulous roadmaps designed to expand your market footprint, enhance security posture, and generate compounding ROI through automation and cloud integration.</p>
              </div>

              {/* Cinematic Arrow Link */}
              <Link to="/contact" className="group flex items-center gap-4 text-zinc-900 hover:text-zinc-600 transition-colors relative z-10 w-fit">
                <span className="font-black tracking-[0.2em] uppercase text-[13px] border-b-[3px] border-zinc-300 pb-1.5 transition-all group-hover:border-zinc-900" style={{ borderBottomColor: BRAND }}>
                  Technical Review
                </span>
                <ArrowRight size={20} strokeWidth={2.5} style={{ color: BRAND }} className="transition-transform group-hover:translate-x-2" />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="bg-white border border-zinc-200 shadow-2xl p-10 lg:p-14 relative overflow-hidden hover:bg-zinc-50 transition-colors duration-500" style={{ borderBottomWidth: '12px', borderBottomColor: BRAND }}>
                <div className="absolute inset-0 z-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
                
                <div className="flex items-center gap-6 mb-10 pb-8 border-b border-zinc-200 relative z-10">
                  <div className="w-16 h-16 bg-zinc-100 border border-zinc-200 shadow-sm flex items-center justify-center shrink-0">
                    <Lightbulb size={24} style={{ color: BRAND }} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="font-black text-zinc-900 text-3xl tracking-tight uppercase">Core Deliverables</p>
                    <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mt-2">SLA-Backed Performance</p>
                  </div>
                </div>

                <ul className="space-y-6 relative z-10">
                  {deliverables.map((d, i) => (
                    <motion.li key={i} 
                      initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-5 group/item">
                      <div className="w-6 h-6 border border-zinc-200 bg-white flex items-center justify-center shrink-0 group-hover/item:border-[#289434] transition-colors">
                        <CheckCircle2 size={12} style={{ color: BRAND }} />
                      </div>
                      <span className="text-zinc-700 text-sm font-bold uppercase tracking-widest group-hover/item:text-zinc-900 transition-colors">{d}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Process Matrix ── */}
      <section className="py-32 bg-[#0a0a0a] relative border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        
        <div className="max-w-[1700px] mx-auto px-6 lg:px-16 relative z-10">
          <div className="text-center mb-20">
            <h4 className="font-black tracking-[0.2em] uppercase text-[11px] mb-4 flex items-center justify-center gap-4 text-white/50">
              <span className="w-8 h-[2px]" style={{ background: BRAND }} />
              Execution Matrix
              <span className="w-8 h-[2px]" style={{ background: BRAND }} />
            </h4>
            <h2 className="text-5xl lg:text-7xl font-black uppercase text-white tracking-tighter leading-none">
              Deployment <span style={{ color: BRAND }}>Protocol</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 shadow-2xl">
            {process.map(({ step, code, icon: Icon, title, desc }, i) => (
              <motion.div key={code}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#1e2020] p-10 relative overflow-hidden group hover:bg-[#0a0a0a] transition-colors duration-500">
                
                {/* Step number massive */}
                <div className="text-white/5 font-black text-8xl absolute top-4 right-4 leading-none pointer-events-none">{step}</div>

                <div className="text-white text-[9px] font-black uppercase tracking-[0.2em] mb-10 border border-white/20 px-3 py-1.5 w-fit" style={{ borderLeftWidth: '4px', borderLeftColor: BRAND }}>
                  {code}
                </div>
                
                <div className="w-14 h-14 bg-black border border-white/20 flex items-center justify-center mb-10 shadow-2xl group-hover:border-white/50 transition-colors">
                  <Icon size={20} style={{ color: BRAND }} strokeWidth={2.5} />
                </div>
                
                <h3 className="text-white font-black text-2xl uppercase tracking-tight mb-4 relative z-10">{title}</h3>
                <p className="text-white/40 text-[13px] leading-relaxed font-bold relative z-10">{desc}</p>

                <div className="absolute bottom-0 left-0 w-0 h-[3px] transition-all duration-500 group-hover:w-full" style={{ background: BRAND }} />
              </motion.div>
            ))}
          </div>

          {/* Testimonial snippet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-32 max-w-4xl mx-auto text-center border-t border-white/10 pt-16 relative"
          >
            <Quote size={80} className="absolute top-8 left-1/2 -translate-x-1/2 text-white/5 -z-10" />
            <p className="text-white/80 text-xl md:text-3xl font-black uppercase tracking-tight leading-loose mb-8">"{testimonial.text}"</p>
            <p className="text-white font-black text-sm uppercase tracking-widest">{testimonial.name}</p>
            <p className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em] mt-2" style={{ color: BRAND }}>{testimonial.role}</p>
          </motion.div>
          
          <div className="text-center mt-20">
            <Link to="/contact" className="group hidden md:inline-flex items-center gap-4 text-white hover:text-white transition-colors pb-4 w-fit mx-auto">
              <span className="text-[13px] font-black uppercase tracking-[0.2em] border-b-[3px] border-white/20 pb-1.5 transition-all group-hover:border-white" style={{ borderBottomColor: BRAND }}>Initialize Consulting Phase</span> 
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" style={{ color: BRAND }} strokeWidth={3} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ITConsulting;
