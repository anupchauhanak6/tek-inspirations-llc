import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, Lightbulb, Target, Map, BarChart3, ArrowRight, GitMerge, Settings2, Cpu, TrendingUp, Quote } from "lucide-react";
import PageHero from "../components/PageHero";

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
    <div className="min-h-screen bg-[#f8fafc]">
      <PageHero
        badge="Enterprise IT Consulting"
        title="Engineering"
        highlight="Your Roadmap"
        subtitle="We translate complex business objectives into highly available, scalable, and secure technology infrastructures."
      />

      {/* ── Capabilities Overview ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(#088349 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0f172a] shadow-lg shadow-[#088349]/10 border border-[#088349]/30 mb-5">
                <Cpu size={12} className="text-[#088349]" />
                <span className="text-[#3ddc84] text-[10px] font-black uppercase tracking-[0.2em]">Strategic IT Assessment</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-black text-[#0f172a] mb-6 leading-[1.1] tracking-tight">
                Unlock Optimal <br/>
                <span style={{ background: "linear-gradient(135deg,#088349,#0aad60)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  System Potential
                </span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-[15px] font-medium border-l-2 border-[#088349]/30 pl-5 mb-8">
                <p>Enterprise IT consulting isn't just advisory—it's the architectural foundation of digital transformation. We bridge the gap between operational goals and deep technical implementation.</p>
                <p>Our engineers construct meticulous roadmaps designed to expand your market footprint, enhance security posture, and generate compounding ROI through automation and cloud integration.</p>
              </div>
              <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold text-sm transition-all duration-300 shadow-xl shadow-[#0f172a]/20 hover:-translate-y-0.5 active:scale-[0.98]">
                Schedule Technical Review <ArrowRight size={15} className="text-[#088349] group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="bg-[#0f172a] rounded-4xl border border-slate-800 shadow-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#088349]/10 rounded-full blur-[80px] pointer-events-none" />
                
                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-700/50">
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg">
                    <Lightbulb size={24} className="text-[#3ddc84]" />
                  </div>
                  <div>
                    <p className="font-black text-white text-2xl tracking-tight">Core Deliverables</p>
                    <p className="text-[#3ddc84] text-[10px] font-bold uppercase tracking-[0.2em] mt-1">SLA-Backed Performance</p>
                  </div>
                </div>

                <ul className="space-y-4">
                  {deliverables.map((d, i) => (
                    <motion.li key={i} 
                      initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-4 group/item">
                      <div className="mt-0.5 w-6 h-6 rounded bg-[#088349]/20 border border-[#088349]/40 flex items-center justify-center shrink-0 group-hover/item:bg-[#088349]/30 transition-colors">
                        <CheckCircle2 size={12} className="text-[#3ddc84]" />
                      </div>
                      <span className="text-slate-300 text-sm font-medium leading-relaxed">{d}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Process Matrix ── */}
      <section className="py-24 bg-[#0f172a] relative border-t border-slate-800 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#088349]/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-md">
              <span className="w-1.5 h-1.5 bg-[#3ddc84] rounded-full animate-pulse shadow-[0_0_8px_#3ddc84]" />
              <span className="text-slate-300 text-[10px] font-black uppercase tracking-[0.2em]">Execution Matrix</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-4 tracking-tight">
              Deployment <span className="text-[#3ddc84]">Protocol</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map(({ step, code, icon: Icon, title, desc }, i) => (
              <motion.div key={code}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#1e293b]/50 backdrop-blur-xl border border-white/6 rounded-3xl p-8 relative overflow-hidden hover:border-[#088349]/40 hover:bg-[#1e293b]/80 transition-all duration-500 group">
                
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#088349]/5 to-transparent h-[200%] -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                {/* Step number */}
                <div className="text-white/5 font-black text-7xl absolute top-2 right-4">{step}</div>

                <div className="text-[#3ddc84] text-[9px] font-black uppercase tracking-[0.2em] mb-4 bg-[#3ddc84]/10 rounded border border-[#3ddc84]/20 px-2.5 py-1 w-fit">
                  {code}
                </div>
                
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:border-[#088349]/40 transition-all">
                  <Icon size={20} className="text-[#3ddc84]" strokeWidth={2} />
                </div>
                
                <h3 className="text-white font-black text-xl mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">{desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Testimonial snippet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-16 max-w-2xl mx-auto text-center"
          >
            <Quote size={24} className="text-[#3ddc84]/30 mx-auto mb-4" />
            <p className="text-slate-300 text-lg leading-relaxed italic mb-4">"{testimonial.text}"</p>
            <p className="text-white font-bold text-sm">{testimonial.name}</p>
            <p className="text-slate-400 text-xs">{testimonial.role}</p>
          </motion.div>
          
          <div className="text-center mt-12">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#088349] hover:bg-[#0aad60] text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-xl shadow-[#088349]/30 hover:-translate-y-0.5 group active:scale-[0.98]">
              Initialize Consulting Phase <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ITConsulting;
