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

const bentoFeatures = [
  {
    icon: Database,
    label: "Data Integrity",
    value: "100%",
    desc: "Encrypted at rest & transit",
    colSpan: "col-span-1",
  },
  {
    icon: ShieldCheck,
    label: "Cyber Security",
    value: "Tier 4",
    desc: "Military-grade protection standards",
    colSpan: "col-span-2",
  },
  {
    icon: Zap,
    label: "System Agility",
    value: "<1ms",
    desc: "Ultra-low latency routing",
    colSpan: "col-span-1",
  },
  {
    icon: Globe,
    label: "Global Reach",
    value: "24/7",
    desc: "Always-on multi-region nodes",
    colSpan: "col-span-2",
  },
];

const services = [
  {
    title: "IT Consulting",
    path: "/our-solution/it-consulting",
    icon: Lightbulb,
    color: "#088349",
    bg: "#088349",
    size: "lg:col-span-8",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    desc: "Strategic technology roadmapping to bridge legacy IT with next-generation cloud and edge computing paradigms.",
    tags: ["Digital Strategy", "Cloud Readiness", "Architecture"],
  },
  {
    title: "Managed Services",
    path: "/our-solution/managed-services",
    icon: Settings,
    color: "#0f172a",
    bg: "#0f172a",
    size: "lg:col-span-4",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    desc: "24/7 NOC/SOC support handling infrastructure anomalies in real-time.",
    tags: ["NOC/SOC", "Automation"],
  },
  {
    title: "Software Eng.",
    path: "/our-solution/software-development",
    icon: Code2,
    color: "#1e293b",
    bg: "#1e293b",
    size: "lg:col-span-5",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    desc: "Full-stack development of mission-critical applications using microservices and serverless logic.",
    tags: ["Microservices", "SaaS"],
  },
  {
    title: "IT Staffing (RPO)",
    path: "/our-solution/rpo",
    icon: Users,
    color: "#088349",
    bg: "#088349",
    size: "lg:col-span-7",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
    desc: "Data-driven talent acquisition integrating perfectly with your internal engineering and operations teams.",
    tags: ["Tech Talent", "Team Scaling", "Executive Search"],
  },
];

function OurSolutions() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <PageHero
        badge="Enterprise Solutions"
        title="Architecting"
        highlight="Your Future"
        subtitle="Uncompromising technical excellence and strategic managed services for highly scalable business models."
      />

      {/* ── Why Partner (Bento Style) ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Abstract wiring graphics */}
        <div
          className="absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#088349 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-50 to-transparent z-0" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Narrative */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0f172a] shadow-lg shadow-[#088349]/10 border border-[#088349]/30 mb-5">
                <Binary size={12} className="text-[#088349]" />
                <span className="text-[#3ddc84] text-[10px] font-black uppercase tracking-[0.2em]">
                  Operational Excellence
                </span>
              </div>
              <h2 className="text-3xl lg:text-[2.75rem] font-black text-[#0f172a] mb-6 leading-[1.1] tracking-tight">
                Flawless Execution,
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg,#088349,#0aad60)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Zero Compromise
                </span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-[15px] font-medium border-l-2 border-[#088349]/30 pl-5 mb-8">
                <p>
                  We are not just a vendor; we operate as a native extension of
                  your IT capability. From stabilizing chaotic legacy
                  environments to architecting high-frequency data pipelines, we
                  deliver with precision.
                </p>
                <p>
                  Our frameworks are built strictly on ISO/IEC standards,
                  ensuring every deployment, hire, and consulting hour drives
                  measurable ROI.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold text-sm transition-all duration-300 shadow-xl shadow-[#0f172a]/20 hover:-translate-y-0.5 group"
              >
                Engage Our Team{" "}
                <ArrowRight
                  size={15}
                  className="text-[#088349] group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>

            {/* Right Bento Framework */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <div className="grid grid-cols-3 gap-4">
                {bentoFeatures.map(
                  ({ icon: Icon, label, value, desc, colSpan }) => (
                    <div
                      key={label}
                      className={`${colSpan} bg-[#0f172a] rounded-2xl p-6 border border-slate-700/50 shadow-2xl relative overflow-hidden group hover:border-[#088349]/50 transition-colors`}
                    >
                      <div className="absolute top-0 right-0 p-4 opacity-5">
                        <Icon size={80} className="text-white" />
                      </div>
                      <Icon size={20} className="text-[#3ddc84] mb-4" />
                      <div className="font-black text-white text-3xl mb-1 tracking-tight">
                        {value}
                      </div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        {label}
                      </div>
                      <div className="text-slate-500 text-[11px] mt-2 font-medium leading-relaxed max-w-[80%]">
                        {desc}
                      </div>

                      {/* Tech scanline effect */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#088349]/5 to-transparent h-[200%] -translate-y-[100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out" />
                    </div>
                  ),
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Services Asymmetrical Grid ── */}
      <section className="py-24 bg-[#0f172a] relative border-t border-slate-800">
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 shadow-lg border border-white/10 mb-5">
              <span className="w-1.5 h-1.5 bg-[#3ddc84] rounded-full animate-pulse z-10" />
              <span className="text-slate-300 text-[10px] font-black uppercase tracking-[0.2em] relative z-10">
                Solutions Portfolio
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Enterprise <span className="text-[#3ddc84]">Capabilities</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm font-medium leading-relaxed">
              End-to-end technology and personnel frameworks required to scale
              modern architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {services.map(
              (
                { title, path, icon: Icon, size, img, desc, tags },
                i,
              ) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`${size} group rounded-[20px] border border-white/10 bg-[#1e293b]/50 backdrop-blur-xl overflow-hidden shadow-2xl relative flex flex-col min-h-[320px] hover:border-[#088349]/40 transition-all duration-500`}
                >
                  {/* Background Image with Dark Gradient */}
                  <img
                    src={img}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover opacity-20 filter grayscale group-hover:grayscale-0 group-hover:opacity-30 transition-all duration-700 scale-105 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/80 to-transparent z-0" />

                  {/* Content */}
                  <div className="relative z-10 p-8 flex flex-col h-full flex-1">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-xl">
                      <Icon size={22} className="text-[#3ddc84]" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-white font-black text-2xl mb-3 tracking-tight">
                        {title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium max-w-sm">
                        {desc}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {tags.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 uppercase tracking-widest text-[9px] font-bold text-white/70 bg-white/5 border border-white/10 rounded-md backdrop-blur-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={path}
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#3ddc84] hover:text-white transition-colors group/link mt-auto w-fit"
                    >
                      Access Specs{" "}
                      <ArrowRight
                        size={14}
                        className="group-hover/link:translate-x-1 transition-transform"
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
