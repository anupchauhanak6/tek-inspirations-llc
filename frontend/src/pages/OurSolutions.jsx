import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Lightbulb,
  Settings,
  Users,
  Code2,
  ArrowRight,
  ShieldCheck,
  Database,
  Zap,
  Binary,
  Globe,
} from "lucide-react";
import PageHero from "../components/PageHero";

/* ─── Logo brand colors ─── */
const BRAND = "#289434"; // Logo Forest Green
const DARK  = "#14542c"; // Logo Dark Ivy

const bentoFeatures = [
  {
    icon: Database,
    label: "Data Integrity",
    value: "100%",
    desc: "Encrypted at rest & transit",
    colSpan: "col-span-1 md:col-span-1",
  },
  {
    icon: ShieldCheck,
    label: "Cyber Security",
    value: "Tier 4",
    desc: "Military-grade protection standards",
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    icon: Zap,
    label: "System Agility",
    value: "<1ms",
    desc: "Ultra-low latency routing",
    colSpan: "col-span-1 md:col-span-1",
  },
  {
    icon: Globe,
    label: "Global Reach",
    value: "24/7",
    desc: "Always-on multi-region nodes",
    colSpan: "col-span-1 md:col-span-2",
  },
];

const services = [
  {
    title: "IT Consulting",
    path: "/our-solution/it-consulting",
    icon: Lightbulb,
    size: "lg:col-span-8",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    desc: "Strategic technology roadmapping to bridge legacy IT with next-generation cloud and edge computing paradigms.",
    tags: ["Digital Strategy", "Cloud Readiness", "Architecture"],
  },
  {
    title: "Managed Services",
    path: "/our-solution/managed-services",
    icon: Settings,
    size: "lg:col-span-4",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    desc: "24/7 NOC/SOC support handling infrastructure anomalies in real-time.",
    tags: ["NOC/SOC", "Automation"],
  },
  {
    title: "Software Eng.",
    path: "/our-solution/software-development",
    icon: Code2,
    size: "lg:col-span-5",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    desc: "Full-stack development of mission-critical applications using microservices and serverless logic.",
    tags: ["Microservices", "SaaS"],
  },
  {
    title: "IT Staffing (RPO)",
    path: "/our-solution/rpo",
    icon: Users,
    size: "lg:col-span-7",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
    desc: "Data-driven talent acquisition integrating perfectly with your internal engineering and operations teams.",
    tags: ["Tech Talent", "Team Scaling", "Executive Search"],
  },
];

function OurSolutions() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans">
      <PageHero
        badge="Enterprise Solutions"
        title="Architecting"
        highlight="Your Future"
        subtitle="Uncompromising technical excellence and strategic managed services for highly scalable business models."
        bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
      />

      {/* ── Why Partner (Bento Style) - Light Dual Tone ── */}
      <section className="py-24 md:py-32 bg-[#fafafa] relative overflow-hidden border-t border-zinc-200 text-zinc-900">
         {/* Brutalist Grid Overlay */}
         <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
             style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="max-w-[1700px] mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
            
            {/* Left Narrative */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <Binary size={16} style={{ color: BRAND }} />
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500">
                  Operational Excellence
                </span>
              </div>
              <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.95] text-zinc-900">
                Flawless Execution,<br />
                <span style={{ color: BRAND }}>
                  Zero Compromise
                </span>
              </h2>
              <div className="space-y-6 text-zinc-600 leading-relaxed text-lg font-bold border-l-[3px] mb-12 pl-6 shadow-sm" style={{ borderLeftColor: BRAND }}>
                <p>
                  We are not just a vendor; we operate as a native extension of
                  your IT capability. From stabilizing chaotic legacy
                  environments to architecting high-frequency data pipelines, we
                  deliver with absolute structural precision.
                </p>
                <p>
                  Our frameworks are built strictly on ISO/IEC standards,
                  ensuring every deployment, hire, and consulting hour drives
                  measurable ROI metrics.
                </p>
              </div>

              {/* Cinematic Arrow Link */}
              <Link to="/contact" className="group flex items-center gap-4 text-zinc-900 hover:text-zinc-600 transition-colors relative z-10 w-fit">
                <span className="font-black tracking-[0.2em] uppercase text-[13px] border-b-[3px] border-zinc-300 pb-1.5 transition-all group-hover:border-zinc-900" style={{ borderBottomColor: BRAND }}>
                  Engage Our Team
                </span>
                <ArrowRight size={22} className="transition-all duration-300 group-hover:translate-x-2" style={{ color: BRAND }} strokeWidth={2.5} />
              </Link>
            </motion.div>

            {/* Right Bento Framework — Light Grid */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7 bg-zinc-200 p-px shadow-2xl relative"
            >
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px">
                {bentoFeatures.map(
                  ({ icon: Icon, label, value, desc, colSpan }) => (
                    <div
                      key={label}
                      className={`${colSpan} bg-white hover:bg-zinc-50 transition-colors duration-500 p-8 lg:p-10 relative overflow-hidden group`}
                    >
                      {/* Interaction glow */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300" style={{ background: BRAND }} />
                      
                      <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity duration-500 scale-150 rotate-12">
                        <Icon size={120} className="text-[#289434]" />
                      </div>
                      
                      <div className="w-14 h-14 flex items-center justify-center border border-zinc-200 mb-6 bg-zinc-100 group-hover:bg-white transition-colors shadow-sm">
                         <Icon size={24} style={{ color: BRAND }} strokeWidth={2.5} />
                      </div>

                      <div className="font-black text-zinc-900 text-5xl mb-2 tracking-tighter leading-none">
                        {value}
                      </div>
                      <div className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-4 group-hover:text-zinc-900 transition-colors duration-300">
                        {label}
                      </div>
                      <div className="text-zinc-600 text-[13px] font-bold leading-relaxed">
                        {desc}
                      </div>
                      
                      <div className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-500 group-hover:w-full" style={{ background: BRAND }} />
                    </div>
                  ),
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Services Asymmetrical Grid ── */}
      <section className="py-24 md:py-32 bg-[#0a0a0a] relative border-t border-white/10">
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="max-w-[1700px] mx-auto px-6 lg:px-16 relative z-10">
          
          <div className="flex flex-col md:flex-row gap-12 items-end justify-between mb-20 border-b border-white/10 pb-8">
            <div className="max-w-2xl">
              <h4 className="font-black tracking-[0.2em] uppercase text-[11px] mb-5 flex items-center gap-4 text-white/50">
                <span className="w-8 h-[2px]" style={{ background: BRAND }} />
                Solutions Portfolio
              </h4>
              <h2 className="text-5xl lg:text-7xl font-black uppercase text-white tracking-tighter leading-none">
                Enterprise<br />
                <span style={{ color: BRAND }}>Capabilities</span>
              </h2>
            </div>
            <p className="text-white/40 max-w-sm text-sm font-bold leading-relaxed pb-2">
              End-to-end technology and personnel frameworks required to heavily scale
              modern architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/10 border border-white/10 shadow-2xl">
            {services.map(
              (
                { title, path, icon: Icon, size, img, desc, tags },
                i,
              ) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`${size} group bg-[#1e2020] relative flex flex-col min-h-[400px] overflow-hidden`}
                >
                  {/* Cinematic Background Image */}
                  <img
                    src={img}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-30 transition-all duration-700 scale-105 group-hover:scale-100 mix-blend-luminosity"
                  />
                  {/* Dark gradient mapping */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-[#0a0a0a]/80 to-transparent z-0" />

                  {/* Content layer */}
                  <div className="relative z-10 p-10 flex flex-col h-full flex-1">
                    <div className="w-16 h-16 flex items-center justify-center bg-[#0a0a0a] border border-white/20 mb-8 shadow-2xl group-hover:border-white/50 transition-colors duration-300">
                      <Icon size={24} style={{ color: BRAND }} strokeWidth={2.5} />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-white font-black uppercase tracking-tight text-3xl md:text-5xl mb-4 group-hover:text-white leading-none">
                        {title}
                      </h3>
                      <p className="text-white/50 text-[14px] font-bold leading-relaxed mb-8 max-w-sm">
                        {desc}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-10">
                      {tags.map((t) => (
                         <span
                          key={t}
                          className="px-3 py-1.5 uppercase tracking-[0.1em] text-[9px] font-black text-white/50 border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={path}
                      className="group/link flex items-center gap-3 text-white transition-colors w-fit border border-white/20 px-6 py-4 bg-[#0a0a0a] hover:bg-white hover:text-[#0a0a0a] shadow-xl"
                    >
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] relative top-px">
                        Access Specs
                      </span>
                      <ArrowRight
                        size={16}
                        className="group-hover/link:translate-x-1 transition-transform"
                        strokeWidth={3}
                      />
                    </Link>
                  </div>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurSolutions;
