import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Settings, TrendingDown, Eye, DollarSign, Users, ArrowRight, ShieldCheck, Zap, BarChart3, Quote } from "lucide-react";
import PageHero from "../components/PageHero";

const benefits = [
  { icon: Users,       title: "Talent Accessibility",   desc: "Access a broader, higher-quality talent pool through our proven MSP methodology." },
  { icon: TrendingDown,title: "Process Simplification", desc: "We streamline and automate contingent workforce management end-to-end." },
  { icon: Eye,         title: "Investment Visibility",  desc: "Full transparency on what you're spending with real-time dashboards." },
  { icon: DollarSign,  title: "Cost Optimization",      desc: "Leverage our economies of scale and vendor relationships to lower total cost." },
];

const howItWorks = [
  { num: "01", title: "Assessment Phase",   desc: "Deep-dive audit of current operational vectors identifying structural inefficiencies.", icon: BarChart3 },
  { num: "02", title: "Architectural Design",desc: "Engineering custom MSP frameworks aligned meticulously with corporate goals.", icon: Settings },
  { num: "03", title: "Deployment Mode",    desc: "Live operational transfer assuming full management of contingent supply chains.", icon: Zap },
];

const uptimeMetrics = [
  { label: "System Uptime", value: "99.99%" },
  { label: "Avg Response", value: "<15min" },
  { label: "Active SLAs", value: "500+" },
];

function ManagedServices() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <PageHero
        badge="Managed Infrastructures"
        title="End-to-End"
        highlight="System Mgmt"
        subtitle="Uninterrupted management of your contingent workforce and IT infrastructure ensuring zero downtime and maximum efficiency."
      />

      {/* ── Operational Insight ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(#088349 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0f172a] shadow-lg shadow-[#088349]/10 border border-[#088349]/30 mb-5">
                <Settings size={12} className="text-[#088349]" />
                <span className="text-[#3ddc84] text-[10px] font-black uppercase tracking-[0.2em]">MSP Architecture</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-black text-[#0f172a] mb-6 leading-[1.1] tracking-tight">
                The Power of{" "}
                <span style={{ background: "linear-gradient(135deg,#088349,#0aad60)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Managed Ecosystems
                </span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-[15px] font-medium border-l-2 border-[#088349]/30 pl-5 mb-8">
                <p>Managed Service Programmes (MSPs) represent the pinnacle of operational outsourcing. We don't just manage your systems; we optimize them continuously.</p>
                <p>Our proprietary orchestration layers fuse top-tier personnel pipelines with cutting-edge IT management tools, delivering high-velocity candidate sourcing and infrastructure stability.</p>
              </div>
              <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold text-sm transition-all duration-300 shadow-xl shadow-[#0f172a]/20 hover:-translate-y-0.5 active:scale-[0.98]">
                Integrate MSP Operations <ArrowRight size={15} className="text-[#088349] group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="bg-[#0f172a] rounded-[2rem] border border-slate-800 shadow-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#088349]/10 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#088349] to-transparent" />
                
                <div className="mb-8 pb-6 border-b border-slate-700/50">
                  <p className="font-black text-white text-2xl tracking-tight mb-1">Deployment Stages</p>
                  <p className="text-[#3ddc84] text-[10px] font-bold uppercase tracking-[0.2em]">3-Phase Rollout Protocol</p>
                </div>
                
                <div className="space-y-6">
                  {howItWorks.map(({ num, title, desc, icon: Icon }) => (
                    <div key={num} className="flex items-start gap-4 group/step">
                      <div className="w-12 h-12 rounded-xl bg-[#1e293b]/80 border border-slate-600 shadow-lg flex items-center justify-center shrink-0 group-hover/step:border-[#088349]/50 group-hover/step:bg-[#088349]/10 transition-all">
                        <Icon size={18} className="text-[#3ddc84]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[#3ddc84] font-black text-xs">{num}</span>
                          <p className="font-bold text-white text-sm">{title}</p>
                        </div>
                        <p className="text-slate-400 text-xs font-medium leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Uptime metrics bar */}
                <div className="mt-8 pt-6 border-t border-slate-700/50 grid grid-cols-3 gap-3">
                  {uptimeMetrics.map(({ label, value }) => (
                    <div key={label} className="text-center">
                      <p className="text-white font-black text-lg">{value}</p>
                      <p className="text-[9px] text-slate-400 uppercase tracking-widest font-bold mt-1">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-24 bg-[#0f172a] relative border-t border-slate-800 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="absolute left-0 top-0 w-96 h-96 bg-[#088349]/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-md">
              <span className="w-1.5 h-1.5 bg-[#3ddc84] rounded-full animate-pulse shadow-[0_0_8px_#3ddc84]" />
              <span className="text-slate-300 text-[10px] font-black uppercase tracking-[0.2em]">Performance Advantages</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-4 tracking-tight">
              Operational <span className="text-[#3ddc84]">Yields</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#1e293b]/50 backdrop-blur-xl border border-white/[0.06] rounded-[1.5rem] p-8 relative overflow-hidden hover:border-[#088349]/40 hover:bg-[#1e293b]/80 transition-all duration-500 group">
                
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#088349] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:border-[#088349]/40 group-hover:bg-[#088349]/10 transition-all duration-300">
                  <Icon size={22} className="text-[#3ddc84]" strokeWidth={2} />
                </div>
                
                <h3 className="text-white font-black text-xl mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">{desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#088349] hover:bg-[#0aad60] text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-xl shadow-[#088349]/30 hover:-translate-y-0.5 group active:scale-[0.98]">
              Get Started with MSP <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ManagedServices;
