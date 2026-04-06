import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code2, Smartphone, Palette, Cloud, TestTube, RefreshCw, ArrowRight, Binary } from "lucide-react";
import PageHero from "../components/PageHero";

/* ─── Logo brand colors ─── */
const BRAND = "#289434"; // Logo Forest Green
const DARK  = "#14542c"; // Logo Dark Ivy

const capabilities = [
  { icon: Code2,      title: "Sys Architecture", desc: "Bespoke enterprise applications built to precise operational specifications." },
  { icon: Smartphone, title: "Mobile Stacks",    desc: "Cross-platform iOS/Android deployment pipelines featuring rapid rendering." },
  { icon: Palette,    title: "UX Synthesis",     desc: "Metric-driven design systems orchestrating seamless user conversions." },
  { icon: Cloud,      title: "SaaS Systems",     desc: "Highly-available, scalable tenant architectures securely hosted in the cloud." },
  { icon: TestTube,   title: "QA Autonomics",    desc: "Automated regression testing protocols ensuring zero-defect release cycles." },
  { icon: RefreshCw,  title: "Modernization",    desc: "Extracting monolithic processes into containerized modern ecosystems." },
];

const techStack = [
  { name: "React",      cat: "Frontend" },
  { name: "Node.js",    cat: "Backend" },
  { name: "Python",     cat: "AI/ML" },
  { name: "AWS",        cat: "Cloud" },
  { name: "Azure",      cat: "Cloud" },
  { name: "TypeScript", cat: "Language" },
  { name: "PostgreSQL", cat: "Database" },
  { name: "Docker",     cat: "DevOps" },
  { name: "Kubernetes", cat: "DevOps" },
  { name: "GraphQL",    cat: "API" },
  { name: "Kafka",      cat: "Stream" },
];

function SoftwareDevelopment() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans">
      <PageHero
        badge="Software Engineering"
        title="Compile the"
        highlight="Future"
        subtitle="Unlocking extreme computational performance through highly scalable custom software stacks."
        bgImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000"
      />

      {/* ── Engineering Specs - Light Dual Tone ── */}
      <section className="py-24 md:py-32 bg-[#fafafa] relative overflow-hidden border-t border-zinc-200 mt-0 -translate-y-px">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
             style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="max-w-[1700px] mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-3 mb-6">
                <Binary size={16} style={{ color: BRAND }} />
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500">Dev Lifecycle</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-black uppercase text-zinc-900 tracking-tighter mb-8 leading-none">
                Concept to <br />
                <span style={{ color: BRAND }}>
                  Deployment
                </span>
              </h2>
              <div className="space-y-6 text-zinc-600 leading-relaxed text-lg font-bold border-l-[3px] mb-12 pl-6 shadow-sm" style={{ borderLeftColor: BRAND }}>
                <p>Advanced commercial software requires absolute precision. Our SDLC process is architected strictly for code quality, horizontal elasticity, and hyper-speed iteration.</p>
                <p>We deploy full-throttle autonomous engineering teams. Whether executing cloud migrations, standing up microservices, or building responsive single-page apps—we ship resilient code rapidly.</p>
              </div>
              <Link to="/contact" className="group flex items-center gap-4 text-zinc-900 hover:text-zinc-600 transition-colors relative z-10 w-fit">
                <span className="font-black tracking-[0.2em] uppercase text-[13px] border-b-[3px] border-zinc-300 pb-1.5 transition-all group-hover:border-zinc-900">
                  Initialize Project
                </span>
                <ArrowRight size={18} strokeWidth={3} className="group-hover:translate-x-2 transition-transform" style={{ color: BRAND }} />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="bg-white border border-zinc-200 shadow-2xl p-10 lg:p-14 relative overflow-hidden group hover:bg-zinc-50 transition-colors duration-500" style={{ borderBottomWidth: '12px', borderBottomColor: BRAND }}>
                
                {/* Interaction glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 pointer-events-none" style={{ background: BRAND }} />

                {/* Terminal-style header */}
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-zinc-200 relative z-10">
                  <div className="w-3 h-3 rounded-none bg-zinc-300 group-hover:bg-zinc-400 transition-colors" />
                  <div className="w-3 h-3 rounded-none bg-zinc-400 group-hover:bg-zinc-500 transition-colors" />
                  <div className="w-3 h-3 rounded-none" style={{ background: BRAND }} />
                  <span className="ml-2 text-[10px] text-zinc-500 font-black uppercase tracking-[0.2em] group-hover:text-zinc-900 transition-colors">tech-stack.config</span>
                </div>

                <p className="text-zinc-900 text-[12px] font-black uppercase tracking-[0.2em] mb-8 relative z-10">Approved Stack Vectors</p>
                
                <div className="flex flex-wrap gap-2 mt-4 relative z-10">
                  {techStack.map(({ name, _cat }) => (
                    <span key={name} 
                      className="group/tech px-4 py-2 text-[10px] font-black tracking-widest uppercase bg-zinc-100 border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-[#289434] transition-all cursor-default shadow-sm">
                      {name}
                    </span>
                  ))}
                </div>

                <div className="mt-14 pt-8 border-t border-zinc-200 grid grid-cols-3 gap-px bg-zinc-200 relative z-10">
                  {[["On-Time","Delivery"],["Zero-Defect","UAT Rate"],["Elastic","Scalability"]].map(([v, l]) => (
                    <div key={v} className="bg-white p-4 text-center group-hover:bg-zinc-50 transition-colors">
                      <div className="text-xl font-black text-zinc-900 uppercase tracking-tight">{v}</div>
                      <div className="text-[9px] text-zinc-500 uppercase tracking-[0.2em] mt-2 font-black" style={{ color: BRAND }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="py-32 bg-[#0a0a0a] relative border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
             style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        
        <div className="max-w-[1700px] mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-end justify-between mb-20 border-b border-white/10 pb-8">
            <div className="max-w-2xl">
              <h4 className="font-black tracking-[0.2em] uppercase text-[11px] mb-5 flex items-center gap-4 text-white/50">
                <span className="w-8 h-[2px]" style={{ background: BRAND }} />
                Engineering Vectors
              </h4>
              <h2 className="text-5xl lg:text-7xl font-black uppercase text-white tracking-tighter leading-none shadow-black drop-shadow-2xl">
                System <span style={{ color: BRAND }}>Capabilities</span>
              </h2>
            </div>
            <Link to="/contact" className="group hidden md:flex items-center gap-4 text-white hover:text-white transition-colors pb-4">
              <span className="text-[13px] font-black uppercase tracking-[0.2em] border-b-[3px] border-white/20 pb-1.5 transition-all group-hover:border-white" style={{ borderBottomColor: BRAND }}>Start Project</span> 
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" style={{ color: BRAND }} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 shadow-2xl">
            {capabilities.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#1e2020] p-10 lg:p-14 relative overflow-hidden flex flex-col hover:bg-[black] transition-colors duration-500 group">
                
                <div className="w-16 h-16 bg-[#0a0a0a] border border-white/20 flex items-center justify-center mb-10 shadow-2xl group-hover:border-white/50 transition-colors">
                  <Icon size={24} style={{ color: BRAND }} strokeWidth={2.5} />
                </div>
                
                <h3 className="text-white font-black text-2xl uppercase tracking-tighter mb-4 group-hover:text-white transition-colors">{title}</h3>
                <p className="text-white/40 text-[13px] font-bold leading-relaxed">{desc}</p>

                <div className="absolute bottom-0 left-0 w-0 h-[3px] transition-all duration-500 group-hover:w-full" style={{ background: BRAND }} />
              </motion.div>
            ))}
          </div>

          <div className="md:hidden mt-16 text-center">
             <Link to="/contact" className="inline-block px-8 py-4 bg-white text-[#0a0a0a] font-black text-[11px] uppercase tracking-[0.2em]">Start Project</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SoftwareDevelopment;
