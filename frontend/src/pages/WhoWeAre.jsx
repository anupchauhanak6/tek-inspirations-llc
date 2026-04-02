import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Rocket, Users, Lock, Cpu, AlignLeft, ArrowRight, Binary, Globe, Building2, Award } from "lucide-react";
import PageHero from "../components/PageHero";

const values = [
  { title: "Immutable Integrity", icon: Shield,  desc: "Cryptographic transparency. We build faith by remaining honest and responsive." },
  { title: "Agile Innovation",    icon: Rocket,  desc: "Our drive to achieve pushes us to advance and help clients reach benchmarks faster." },
  { title: "Systemic Fusion",     icon: Cpu,     desc: "Across hierarchies, resources compute together for maximum synergistic advantage." },
  { title: "Zero Trust Ethics",   icon: Lock,    desc: "What we say and do are manifestations of strict compliance protocols." },
];

const milestones = [
  { year: "2016", tag: "V1.0 INITIALIZATION", event: "Incorporated in Texas. Framework established for enterprise talent sourcing." },
  { year: "2018", tag: "NODE EXPANSION",      event: "Deployed delivery centers natively across Noida, Agra, and Varanasi." },
  { year: "2020", tag: "MSP LAUNCH",          event: "Scaled operations to include robust 24/7 Managed Infrastructure Services." },
  { year: "2024", tag: "GLOBAL SCALE",        event: "Supporting 500+ endpoints. Processing high volume SLA requirements globally." },
];

const quickStats = [
  { icon: Globe,     k: "Operational Nodes", v: "4+ Global" },
  { icon: Award,     k: "SLA Adherence",     v: "99.9%" },
  { icon: Users,     k: "Talent Pipeline",   v: "Continuous" },
  { icon: Building2, k: "Deployments",       v: "High Vel." },
];

function WhoWeAre() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <PageHero
        badge="Corporate Origin"
        title="Engineering"
        highlight="Excellence"
        subtitle="We build more than teams. We deploy fully-integrated offshore capabilities and infrastructure designed for absolute operational dominance."
      />

      {/* ── Enterprise Narrative ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-200 h-200 bg-[#0f172a]/1.5 rounded-full border border-[#0f172a]/4 flex items-center justify-center pointer-events-none">
          <div className="w-150 h-150 border border-[#0f172a]/4 rounded-full flex items-center justify-center">
            <div className="w-100 h-100 border border-[#0f172a]/4 rounded-full" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            
            {/* Dark Tech Visualization */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="relative aspect-square lg:aspect-4/5 rounded-4xl overflow-hidden shadow-2xl bg-[#0f172a] border-2 border-slate-800 flex items-center justify-center group"
            >
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200" 
                alt="Corporate Technology Team" 
                className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0f172a] via-[#0f172a]/30 to-transparent opacity-90" />
              
              {/* Glass UI Element */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#3ddc84]/10 rounded-full blur-[30px]" />
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#088349] flex items-center justify-center shrink-0 shadow-lg shadow-[#088349]/40 border border-[#3ddc84]/30">
                      <Binary size={18} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-black text-white text-lg tracking-tight mb-1">Human Intelligence Core</h4>
                      <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest leading-relaxed">
                        Fusing technical perfection with high-performance personnel deployment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top-left floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute top-4 left-4 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20"
              >
                <p className="text-[#3ddc84] text-[9px] font-black uppercase tracking-[0.15em]">Since 2016</p>
                <p className="text-white font-black text-xl">8+ Years</p>
              </motion.div>
            </motion.div>

            {/* Narrative Context */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#0f172a] shadow-lg mb-6">
                <AlignLeft size={12} className="text-[#3ddc84]" />
                <span className="text-[#3ddc84] text-[10px] font-black uppercase tracking-[0.2em]">Architecture of Success</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-black text-[#0f172a] mb-7 leading-[1.1] tracking-tight">
                Built on <br/>
                <span style={{ background: "linear-gradient(135deg,#088349,#0aad60)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Engineering Principles
                </span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-[15px] font-medium border-l-2 border-[#088349]/20 pl-6 mb-8">
                <p>Tek Inspirations LLC was engineered with a singular objective: to inject profound technical competence into the DNA of growing enterprises. We reject the generic staffing model; we architect solutions.</p>
                <p>Our global delivery ecosystem ensures that when you need a microservices architect, an RPO pipeline, or a 24/7 SOC team, it is provisioned instantly, reliably, and seamlessly.</p>
                <p>We are a human-centric protocol. We invest heavily in the continual upgrade of our talent, ensuring our internal logic and external outputs remain flawless.</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {quickStats.map(({ icon: Icon, k, v }) => (
                  <div key={k} className="bg-slate-50 border border-slate-100 p-4 rounded-xl group hover:border-[#088349]/20 hover:bg-[#088349]/2 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={14} className="text-[#088349]" />
                      <p className="text-[#088349] font-black text-[10px] uppercase tracking-widest">{k}</p>
                    </div>
                    <p className="text-[#0f172a] font-bold text-lg">{v}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Timeline ── */}
          <div className="mt-20 relative">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#088349]/10 border border-[#088349]/20 text-[#088349] text-xs font-bold uppercase tracking-widest mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#088349]" /> Our Journey
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-[#0f172a]">Deployment Timeline History</h3>
            </div>
            
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-45 left-0 w-full h-0.5 bg-slate-200 z-0">
               <div className="absolute top-0 left-0 h-full w-1/3" style={{ background: "linear-gradient(to right, #0aad60, transparent)" }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 relative z-10">
              {milestones.map(({ year, tag, event }, i) => (
                <motion.div 
                  key={year}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-[#0f172a] p-6 lg:p-8 rounded-[20px] border border-slate-700/50 shadow-2xl relative group hover:-translate-y-2 transition-transform duration-500"
                >
                  <div className="absolute -top-3 right-6 lg:right-auto lg:-top-3 bg-[#088349] text-white font-black text-2xl px-5 py-2 rounded-xl shadow-lg shadow-[#088349]/40 border-2 border-slate-800">
                    {year}
                  </div>
                  <div className="mt-8 mb-4">
                    <span className="text-[#3ddc84] text-[9px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#3ddc84]/10 rounded border border-[#3ddc84]/20">{tag}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">{event}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-24 bg-[#0f172a] border-t border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#088349]/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-end justify-between mb-16">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
                <span className="w-1.5 h-1.5 bg-[#3ddc84] rounded-full animate-pulse" />
                <span className="text-slate-300 text-[10px] font-black uppercase tracking-[0.2em]">Operational Protocols</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tight">
                Core <span className="text-[#3ddc84]">Directives</span>
              </h2>
            </div>
            <Link to="/contact" className="group hidden md:inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#3ddc84] hover:text-white transition-colors">
              Access Compliance Docs <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ title, icon: Icon, desc }, i) => (
              <motion.div key={title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-[#1e293b]/50 backdrop-blur-xl border border-white/6 rounded-3xl p-8 hover:border-[#088349]/40 hover:bg-[#1e293b]/80 transition-all duration-500 group relative overflow-hidden">
                
                {/* Gradient top accent */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#088349] via-[#3ddc84] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#088349]/20 group-hover:border-[#088349]/40 transition-all duration-300">
                  <Icon size={22} className="text-[#3ddc84]" strokeWidth={2} />
                </div>
                
                <h3 className="text-white font-black text-xl mb-3">{title}</h3>
                <p className="text-slate-400 text-[13px] leading-relaxed font-medium">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhoWeAre;
