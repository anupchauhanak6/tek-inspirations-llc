import React from "react";
import SEOHelmet from "../components/SEOHelmet";
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

/* ─── Logo brand colors ─── */
const BRAND = "#289434"; // Logo Forest Green
const DARK  = "#14542c"; // Logo Dark Ivy

const stats = [
  { value: "40%", label: "Time-to-Hire Optimization" },
  { value: "30%", label: "Cost-Per-Hire Reduction" },
  { value: "95%", label: "Long-Term Retention Rate" },
  { value: "10k+", label: "Total Personnel Deployed" },
];

const services = [
  {
    icon: Users,
    title: "Full-Cycle Strategy",
    desc: "Total management of your recruitment supply chain from sourcing to technical onboarding.",
  },
  {
    icon: Target,
    title: "Modular Engagement",
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
    <div className="min-h-screen bg-[#0a0a0a] font-sans">
      <SEOHelmet
        title="Recruitment Process Outsourcing (RPO) — IT Staffing & Talent Solutions"
        description="TEK Inspirations LLC is a leading RPO provider offering end-to-end recruitment process outsourcing, IT staffing, and talent acquisition solutions. We source pre-vetted technical talent for enterprises across the USA and India."
        canonical="/our-solutions/rpo"
        keywords={["RPO services USA", "recruitment process outsourcing", "IT staffing solutions", "technical talent acquisition", "IT recruitment agency USA", "offshore staffing", "technology staffing company"]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Recruitment Process Outsourcing",
          "provider": { "@type": "Organization", "name": "TEK Inspirations LLC", "url": "https://www.tekinspirations.com" },
          "name": "Recruitment Process Outsourcing (RPO)",
          "description": "End-to-end RPO and IT staffing solutions. Pre-vetted technical talent for enterprises.",
          "areaServed": ["United States", "India"],
          "url": "https://www.tekinspirations.com/our-solutions/rpo"
        }}
      />
      <PageHero
        badge="Recruitment Process Outsourcing"
        title="Human Capital"
        highlight="Optimization"
        subtitle="We do not just fill vacancies. We engineer, filter, and deploy high-performing operational teams at industrial scale."
        bgImage="https://images.unsplash.com/photo-1522071823991-b5ae72643a51?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Floating Performance Data */}
      <div className="max-w-[1700px] mx-auto px-6 lg:px-16 -mt-16 mb-24 relative z-20 border-t border-white/10 pt-16 mt-0 -translate-y-px">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#1e2020] border border-white/10 shadow-2xl grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 overflow-hidden"
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="bg-[#0a0a0a] p-10 text-center relative hover:bg-[#1e2020] transition-colors duration-500">
              <div
                className="font-black text-5xl mb-2 tracking-tighter leading-none"
                style={{ color: BRAND }}
              >
                {value}
              </div>
              <div className="text-white/50 text-[10px] font-black uppercase tracking-[0.2em] mt-3">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Deployment Strategy - Light Dual Tone ── */}
      <section className="pb-24 lg:pb-32 bg-[#fafafa] relative overflow-hidden">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-16 pt-24 text-zinc-900">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200 shadow-2xl items-stretch mb-24">
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 lg:p-14 flex flex-col relative overflow-hidden group hover:bg-zinc-50 transition-colors duration-500"
            >
              <div className="absolute top-0 right-0 w-64 h-64 blur-[80px] opacity-[0.03] pointer-events-none transition-opacity duration-500 group-hover:opacity-10" style={{ background: BRAND }} />

              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-zinc-200 text-zinc-600 font-black uppercase tracking-[0.2em] text-[10px] mb-8 w-fit bg-zinc-100 relative z-10">
                Strategic RPO Model
              </div>
              <h2 className="text-5xl lg:text-7xl font-black uppercase text-zinc-900 mb-6 leading-none tracking-tighter relative z-10">
                Re-architecting <br />
                Talent <span style={{ color: BRAND }}>Acquisition</span>
              </h2>
              <div className="space-y-6 text-zinc-600 leading-relaxed text-[13px] font-bold border-l-2 pl-5 mb-10 relative z-10 shadow-sm" style={{ borderLeftColor: BRAND }}>
                <p>
                  Scaling a modern enterprise requires absolute confidence in
                  your engineering and operational talent. Finding them through
                  standard channels is extremely inefficient.
                </p>
                <p>
                  Our RPO protocols embed directly into your corporate
                  ecosystem. We deploy proprietary sourcing algorithms to secure
                  the top tier of technical talent globally.
                </p>
              </div>

              <ul className="space-y-5 flex-1 relative z-10">
                {advantages.map((a) => (
                  <li key={a} className="flex items-center gap-5">
                    <div className="w-6 h-6 border border-zinc-200 bg-white flex items-center justify-center shrink-0">
                      <CheckCircle2 size={12} style={{ color: BRAND }} />
                    </div>
                    <span className="text-zinc-700 uppercase tracking-[0.2em] text-[10px] font-black group-hover:text-zinc-900 transition-colors">
                      {a}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative overflow-hidden min-h-[500px] group bg-[#0a0a0a]"
            >
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1200"
                alt="Talent Operations"
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute bottom-8 left-8 right-8 lg:bottom-12 lg:left-12">
                <div className="bg-white/95 backdrop-blur-xl border border-white/20 p-8 origin-bottom-left transition-transform duration-500 group-hover:scale-105 shadow-2xl">
                  <ShieldCheck size={28} className="mb-4" style={{ color: BRAND }} />
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-2" style={{ color: BRAND }}>
                    Security Cleared
                  </p>
                  <p className="text-zinc-900 text-3xl md:text-4xl font-black uppercase tracking-tight leading-none">
                    Pre-Vetted<br />Operatives
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Engagement Vectors ── */}
      <section className="py-32 bg-[#0a0a0a] border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
             style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="max-w-[1700px] mx-auto px-6 lg:px-16 relative z-10">
          <div className="text-center mb-20">
            <h4 className="font-black tracking-[0.2em] uppercase text-[11px] mb-4 flex items-center justify-center gap-4 text-white/50">
              <span className="w-8 h-[2px]" style={{ background: BRAND }} />
              Operational Modularity
              <span className="w-8 h-[2px]" style={{ background: BRAND }} />
            </h4>
            <h2 className="text-5xl lg:text-7xl font-black uppercase text-white tracking-tighter shadow-black drop-shadow-2xl">
              RPO <span style={{ color: BRAND }}>Integrations</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 shadow-2xl">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#1e2020] p-10 relative overflow-hidden hover:bg-[#0a0a0a] transition-colors duration-500 group flex flex-col"
              >
                <div className="w-16 h-16 bg-[#0a0a0a] border border-white/20 flex items-center justify-center mb-8 shadow-2xl group-hover:border-white/50 transition-colors">
                  <Icon size={24} strokeWidth={2.5} style={{ color: BRAND }} />
                </div>

                <h3 className="text-white font-black uppercase text-3xl mb-4 tracking-tighter group-hover:text-white transition-colors">{title}</h3>
                <p className="text-white/40 text-[13px] leading-relaxed font-bold">
                  {desc}
                </p>
                <div className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-500 group-hover:w-full" style={{ background: BRAND }} />
              </motion.div>
            ))}
          </div>

          {/* Process Timeline */}
          <div className="mt-32 pt-20 border-t border-white/10 relative">
            <h4 className="font-black tracking-[0.2em] uppercase text-[11px] mb-12 text-white/50 block w-fit mx-auto border border-white/20 px-6 py-3 bg-[#0a0a0a]">
               Standard Deployment Flow
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
              {steps.map(({ num, title, desc }) => (
                <div
                  key={num}
                  className="bg-[#1e2020] p-8 lg:p-10 relative flex flex-col group hover:bg-[#0a0a0a] transition-colors duration-500"
                >
                  <div className="text-white/5 font-black text-8xl mb-6 leading-none pointer-events-none group-hover:text-white/10 transition-colors absolute top-4 right-4">{num}</div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 mt-8 relative z-10" style={{ color: BRAND }}>
                    {title}
                  </h4>
                  <p className="text-white/50 text-sm font-bold relative z-10">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Layer */}
      <section className="bg-[#0a0a0a] border-t border-white/10 relative overflow-hidden py-32 text-center">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-8 bg-[#1e2020] shadow-2xl">
            <span className="w-1.5 h-1.5 rounded-none animate-pulse" style={{ background: BRAND }} /> Ready to Deploy
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white mb-8 tracking-tighter leading-none shadow-black drop-shadow-2xl">
            Ready to Scale Your<br />Technical Operations?
          </h2>
          <p className="text-white/50 max-w-lg mx-auto mb-10 text-sm font-bold">Let our recruitment engineers build the absolute talent pipeline your enterprise needs to grow.</p>
          <Link
            to="/contact"
            className="group inline-flex items-center justify-between text-[#0a0a0a] bg-white hover:bg-zinc-200 transition-all p-5 border-none shadow-2xl w-[300px]"
          >
            <span className="font-black uppercase tracking-[0.2em] text-[12px] ml-2">Connect With Team</span>
            <div className="flex items-center justify-center transition-transform group-hover:translate-x-2" style={{ color: BRAND }}>
               <ArrowRight size={20} strokeWidth={3} />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default RPO;
