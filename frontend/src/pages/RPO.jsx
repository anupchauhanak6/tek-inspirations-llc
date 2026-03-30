import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users,
  Target,
  Zap,
  Globe,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import PageHero from "../components/PageHero";

const stats = [
  { value: "40%", label: "Time-to-Hire Optimization", color: "#3ddc84" },
  { value: "30%", label: "Cost-Per-Hire Reduction", color: "#3ddc84" },
  { value: "95%", label: "Long-Term Retention Rate", color: "#3ddc84" },
  { value: "10k+", label: "Total Personnel Deployed", color: "#3ddc84" },
];

const services = [
  {
    icon: Users,
    title: "Full-Cycle RPO Strategy",
    desc: "Total management of your recruitment supply chain from sourcing to technical onboarding.",
  },
  {
    icon: Target,
    title: "Modular RPO Engagement",
    desc: "Targeted support for critical operational spikes or highly specialized tech requirements.",
  },
  {
    icon: Zap,
    title: "Agile Sourcing Teams",
    desc: "Rapid deployment of sourcers embedded natively within your infrastructure.",
  },
  {
    icon: Globe,
    title: "Cross-Border Acquisition",
    desc: "Navigating international talent ecosystems to secure the top 1% of engineering talent.",
  },
];

const steps = [
  {
    num: "01",
    title: "Needs Architecture",
    desc: "Mapping corporate culture to technical prerequisites.",
  },
  {
    num: "02",
    title: "Talent Vectoring",
    desc: "Deploying AI-driven queries against passive technical networks.",
  },
  {
    num: "03",
    title: "Hard Screening",
    desc: "Rigorous technical algorithms and pair-programming tests.",
  },
  {
    num: "04",
    title: "Seamless Integration",
    desc: "Executing offer protocols and managing initial onboarding cycles.",
  },
];

const advantages = [
  "Advanced ATS API Integrations",
  "Deep Access to Passive Eng. Networks",
  "Elastic Deployment Modules",
  "Predictive Talent Analytics",
];

function RPO() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <PageHero
        badge="Recruitment Process Outsourcing"
        title="Human Capital"
        highlight="Optimization"
        subtitle="We do not just fill vacancies. We engineer, filter, and deploy high-performing operational teams at industrial scale."
      />

      {/* Floating Performance Data */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 -mt-12 mb-20 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#0f172a] rounded-[2rem] border border-slate-800 shadow-2xl grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800 backdrop-blur-3xl overflow-hidden"
        >
          {stats.map(({ value, label, color }) => (
            <div key={label} className="p-8 text-center relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#088349]/5 to-transparent h-[200%] -translate-y-[100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
              <div
                className="font-black text-3xl mb-2 tracking-tight"
                style={{ color }}
              >
                {value}
              </div>
              <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Deployment Strategy ── */}
      <section className="pb-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-24">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#0f172a] rounded-[2rem] border border-slate-800 shadow-2xl p-10 flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#088349]/10 rounded-full blur-[80px] pointer-events-none" />

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-[#3ddc84] text-[10px] font-black uppercase tracking-[0.2em] mb-8 self-start shadow-xl backdrop-blur-md">
                Strategic RPO Model
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 leading-tight tracking-tight">
                Re-architecting Talent <br />
                <span className="text-[#3ddc84]">Acquisition</span>
              </h2>
              <div className="space-y-4 text-slate-400 leading-relaxed text-[15px] font-medium border-l-2 border-[#088349]/30 pl-5 mb-8">
                <p>
                  Scaling a modern enterprise requires absolute confidence in
                  your engineering and operational talent. Finding them through
                  standard channels is inefficient.
                </p>
                <p>
                  Our RPO protocols embed directly into your corporate
                  ecosystem. We deploy proprietary sourcing algorithms to secure
                  the top tier of technical talent.
                </p>
              </div>

              <ul className="space-y-4 flex-1">
                {advantages.map((a) => (
                  <li key={a} className="flex items-center gap-4">
                    <CheckCircle2
                      size={16}
                      className="text-[#3ddc84] shrink-0"
                    />
                    <span className="text-white text-sm font-bold uppercase tracking-wider text-[11px]">
                      {a}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative rounded-[2rem] overflow-hidden min-h-[400px] border border-slate-200 group shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1200"
                alt="Talent Operations"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/30 to-transparent" />

              <div className="absolute bottom-10 left-10">
                <div className="bg-[#1e293b]/90 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl origin-bottom-left transition-transform duration-500 group-hover:scale-105">
                  <ShieldCheck size={28} className="text-[#3ddc84] mb-4" />
                  <p className="text-[#3ddc84] text-[10px] font-black uppercase tracking-[0.2em] mb-2">
                    Security Cleared
                  </p>
                  <p className="text-white text-xl font-black">
                    Pre-Vetted
                    <br />
                    Operatives
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Engagement Vectors ── */}
      <section className="py-24 bg-[#0f172a] border-t border-slate-800 relative">
        <div
          className="absolute inset-0 z-0 opacity-10 mix-blend-overlay"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 mb-4 backdrop-blur-md">
              <span className="w-1.5 h-1.5 bg-[#3ddc84] rounded-full animate-pulse shadow-[0_0_8px_#3ddc84]" />
              <span className="text-slate-300 text-[10px] font-black uppercase tracking-[0.2em]">
                Operational Modularity
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-4 tracking-tight">
              RPO <span className="text-[#3ddc84]">Integrations</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#1e293b]/50 backdrop-blur-xl border border-white/[0.06] rounded-[1.5rem] p-8 relative overflow-hidden hover:border-[#088349]/40 hover:bg-[#1e293b]/80 transition-all duration-500 group"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#088349] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:border-[#088349]/40 group-hover:bg-[#088349]/10 transition-all duration-300">
                  <Icon size={22} className="text-[#3ddc84]" strokeWidth={2} />
                </div>

                <h3 className="text-white font-black text-xl mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Process Timeline */}
          <div className="mt-24 pt-24 border-t border-slate-800/80">
            <div className="text-center mb-16">
              <h3 className="text-2xl font-black text-white">
                Standard Deployment Flow
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map(({ num, title, desc }) => (
                <div
                  key={num}
                  className="relative pl-6 lg:pl-0 lg:pt-6 border-l-2 lg:border-l-0 lg:border-t-2 border-[#088349]/30"
                >
                  <div className="absolute top-0 left-0 w-3 h-3 -translate-x-[7px] lg:translate-x-0 lg:-translate-y-[7px] rounded-full bg-[#3ddc84] shadow-[0_0_12px_#3ddc84]" />
                  <div className="text-white font-black text-3xl mb-4 tracking-tight opacity-20 hidden lg:block">
                    {num}
                  </div>
                  <h4 className="text-[#3ddc84] text-[11px] font-black uppercase tracking-[0.2em] mb-2">
                    {title}
                  </h4>
                  <p className="text-slate-400 text-sm font-medium">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Layer */}
      <section className="bg-white py-20 text-center border-t border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(#088349 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#088349]/10 border border-[#088349]/20 text-[#088349] text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#088349] animate-pulse" /> Ready to Deploy
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-[#0f172a] mb-4 tracking-tight">
            Ready to Scale Your Technical Operations?
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto mb-8 text-sm">Let our recruitment engineers build the talent pipeline your enterprise needs to grow.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#088349] hover:bg-[#0aad60] text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-xl shadow-[#088349]/30 hover:-translate-y-0.5 group active:scale-[0.98]"
          >
            Connect With Recruitment Engineers{" "}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default RPO;
