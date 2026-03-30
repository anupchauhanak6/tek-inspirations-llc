import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code2, Smartphone, Palette, Cloud, TestTube, RefreshCw, ArrowRight, Binary } from "lucide-react";
import PageHero from "../components/PageHero";

const capabilities = [
  { icon: Code2,      title: "Custom Sys Architecture", desc: "Bespoke enterprise applications built to precise operational specifications." },
  { icon: Smartphone, title: "Native Mobile Stacks",    desc: "Cross-platform iOS/Android deployment pipelines featuring rapid rendering." },
  { icon: Palette,    title: "UI/UX Synthesis",         desc: "Metric-driven design systems orchestrating seamless user conversions." },
  { icon: Cloud,      title: "SaaS Infrastructures",    desc: "Highly-available, scalable tenant architectures securely hosted in the cloud." },
  { icon: TestTube,   title: "QA Autonomics",           desc: "Automated regression testing protocols ensuring zero-defect release cycles." },
  { icon: RefreshCw,  title: "Legacy Modernization",    desc: "Extracting monolithic processes into containerized modern ecosystems." },
];

const techStack = ["React", "Node.js", "Python", "AWS", "Azure", "TypeScript", "PostgreSQL", "Docker", "Kubernetes", "GraphQL", "Redis", "Kafka"];

function SoftwareDevelopment() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <PageHero
        badge="Software Engineering"
        title="Compile the"
        highlight="Future"
        subtitle="Unlocking extreme computational performance through highly scalable custom software stacks."
      />

      {/* ── Engineering Specs ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#088349 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0f172a] shadow-lg shadow-[#088349]/10 border border-[#088349]/30 mb-5">
                <Binary size={12} className="text-[#088349]" />
                <span className="text-[#3ddc84] text-[10px] font-black uppercase tracking-[0.2em]">Dev Lifecycle</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-black text-[#0f172a] mb-6 leading-[1.1] tracking-tight">
                From Concept to{" "}
                <span style={{ background: "linear-gradient(135deg,#088349,#0aad60)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Deployment
                </span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-[15px] font-medium border-l-2 border-[#088349]/30 pl-5 mb-8">
                <p>Advanced commercial software requires absolute precision. Our SDLC process is architected strictly for code quality, horizontal elasticity, and hyper-speed iteration.</p>
                <p>We deploy full-throttle autonomous engineering teams. Whether executing cloud migrations, standing up microservices, or building responsive single-page apps—we ship resilient code rapidly.</p>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold text-sm transition-all duration-300 shadow-xl shadow-[#0f172a]/20 hover:-translate-y-0.5 group">
                Initialize Project <ArrowRight size={15} className="text-[#088349] group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="bg-[#0f172a] rounded-[2rem] border border-slate-800 shadow-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#088349] to-transparent" />
                
                <p className="text-[#3ddc84] text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-center">Approved Stack Vectors</p>
                
                <div className="flex flex-wrap gap-2 justify-center mt-6">
                  {techStack.map(tech => (
                    <span key={tech} className="px-3.5 py-1.5 rounded-lg text-xs font-black tracking-widest uppercase bg-[#1e293b]/80 border border-slate-700 text-slate-300 hover:text-[#3ddc84] transition-colors cursor-crosshair">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-center">
                  {[["On-Time","Delivery Guarantee"],["Zero-Defect","UAT Rate"],["Elastic","Scalability Phase"]].map(([v, l]) => (
                    <div key={v}>
                      <div className="text-lg font-black text-white">{v}</div>
                      <div className="text-[9px] text-slate-400 uppercase tracking-widest mt-1 font-bold">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Output Matrix (Capabilities) ── */}
      <section className="py-24 bg-[#0f172a] relative border-t border-slate-800">
        <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 mb-4 backdrop-blur-md">
              <span className="w-1.5 h-1.5 bg-[#3ddc84] rounded-full animate-pulse shadow-[0_0_8px_#3ddc84]" />
              <span className="text-slate-300 text-[10px] font-black uppercase tracking-[0.2em]">Engineering Vectors</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-4 tracking-tight">
              System <span className="text-[#3ddc84]">Capabilities</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#1e293b]/50 backdrop-blur-xl border border-white/10 rounded-[1.5rem] p-8 relative overflow-hidden hover:border-[#088349]/50 hover:bg-[#1e293b]/80 transition-all duration-300 group">
                
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:border-[#088349]/40 transition-transform">
                  <Icon size={20} className="text-[#3ddc84]" strokeWidth={2} />
                </div>
                
                <h3 className="text-white font-black text-xl mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SoftwareDevelopment;
