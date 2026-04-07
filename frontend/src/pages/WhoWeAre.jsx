import React from "react";
import SEOHelmet from "../components/SEOHelmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Rocket, Users, Lock, Cpu, AlignLeft, ArrowRight, Binary, Globe, Building2, Award } from "lucide-react";
import PageHero from "../components/PageHero";

/* ─── Logo brand colors ─── */
const BRAND = "#289434"; // Logo Forest Green
const DARK  = "#14542c"; // Logo Dark Ivy

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
    <div className="min-h-screen bg-[#0a0a0a] font-sans flex flex-col">
      <SEOHelmet
        title="Who We Are — About TEK Inspirations LLC"
        description="TEK Inspirations LLC is a Frisco, Texas-based IT staffing and technology company founded in 2016. Learn about our mission, values, global operations, and the story behind our excellence in IT services across the USA and India."
        canonical="/who-we-are"
        keywords={["about TEK Inspirations", "IT company Texas", "IT staffing company history", "technology company Frisco TX", "enterprise IT firm USA", "IT services company profile"]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About TEK Inspirations LLC",
          "url": "https://www.tekinspirations.com/who-we-are",
          "description": "TEK Inspirations LLC is a leading IT staffing and technology company founded in Frisco, Texas in 2016.",
          "mainEntity": {
            "@type": "Organization",
            "name": "TEK Inspirations LLC",
            "foundingDate": "2016",
            "foundingLocation": "Frisco, Texas, USA",
            "numberOfEmployees": { "@type": "QuantitativeValue", "value": "200" }
          }
        }}
      />
      <PageHero
        badge="Corporate Origin"
        title="Engineering"
        highlight="Excellence"
        subtitle="We build more than teams. We deploy fully-integrated offshore capabilities and infrastructure designed for absolute operational dominance."
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Extreme Cinematic Architecture - LIGHT Dual Tone Section */}
      <section className="py-24 md:py-32 bg-[#fafafa] relative overflow-hidden border-t border-zinc-200">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
             style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="max-w-[1700px] mx-auto px-6 lg:px-16 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
            
            {/* Light Tech Visualization */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="relative rounded-none overflow-hidden shadow-2xl bg-white border border-zinc-200 flex flex-col h-[700px] group"
              style={{ borderBottomWidth: '12px', borderBottomColor: BRAND }}
            >
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200" 
                alt="Corporate Technology Team" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 grayscale contrast-125 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 z-10"
              />
              <div className="absolute inset-0 bg-[#fafafa]/20 z-20 group-hover:bg-transparent transition-colors duration-500" />
              
              <div className="absolute top-0 right-0 p-8 z-30 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Globe size={150} className="text-zinc-900" />
              </div>

              {/* Glass UI Element - Light Mode */}
              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 z-30">
                <div className="bg-white/95 border border-zinc-200 p-6 flex flex-col relative overflow-hidden backdrop-blur-xl group-hover:bg-white transition-colors duration-500 shadow-xl">
                  <div className="flex items-start gap-5 relative z-10">
                    <div className="w-14 h-14 bg-zinc-100 border border-zinc-200 flex items-center justify-center shrink-0 shadow-sm" style={{ color: BRAND }}>
                      <Binary size={24} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 className="font-black text-zinc-900 text-xl uppercase tracking-widest mb-1.5">Human Intelligence Core</h4>
                      <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-[0.1em] leading-relaxed max-w-sm">
                        Fusing technical perfection with high-performance personnel deployment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top hover badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                className="absolute top-6 left-6 bg-white/95 backdrop-blur-md border border-zinc-200 px-6 py-4 z-30 shadow-lg"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-1" style={{ color: BRAND }}>Origin</p>
                <p className="text-zinc-900 font-black text-2xl uppercase">2016_</p>
              </motion.div>
            </motion.div>

            {/* Narrative Context - Light */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-3 mb-8">
                <AlignLeft size={16} style={{ color: BRAND }} />
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500">Architecture of Success</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase text-zinc-900 mb-8 leading-[1] tracking-tighter">
                Built on <br/>
                <span style={{ color: BRAND }}>
                  Engineering Principles
                </span>
              </h2>
              <div className="space-y-6 text-zinc-600 leading-relaxed text-lg font-bold border-l-[3px] pl-6 mb-12 shadow-sm" style={{ borderLeftColor: `${BRAND}50` }}>
                <p>Tek Inspirations LLC was engineered with a singular objective: to inject profound technical competence into the DNA of growing enterprises. We reject the generic staffing model; we architect solutions.</p>
                <p>Our global delivery ecosystem ensures that when you need a microservices architect, an RPO pipeline, or a 24/7 SOC team, it is provisioned instantly, reliably, and seamlessly.</p>
                <p>We are a human-centric protocol. We invest heavily in the continual upgrade of our talent, ensuring our internal logic and external outputs remain flawless.</p>
              </div>

              <div className="grid grid-cols-2 gap-px bg-zinc-200 border border-zinc-200 shadow-xl mt-8">
                {quickStats.map(({ icon: Icon, k, v }) => (
                  <div key={k} className="bg-white p-6 relative group overflow-hidden hover:bg-zinc-50 transition-all">
                    <div className="flex items-center gap-3 mb-3 relative z-10 transition-colors">
                      <Icon size={16} style={{ color: BRAND }} strokeWidth={2.5} />
                      <p className="text-zinc-500 group-hover:text-zinc-900 transition-colors font-black text-[10px] uppercase tracking-widest leading-tight">{k}</p>
                    </div>
                    <p className="text-zinc-900 font-black text-2xl tracking-tighter leading-none relative z-10">{v}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Timeline ── */}
          <div className="mt-32 pb-10 border-b border-zinc-200 relative">
            <div className="text-center mb-16">
              <h4 className="font-black tracking-[0.2em] uppercase text-[11px] mb-4 flex items-center justify-center gap-4 text-zinc-500">
                <span className="w-8 h-[2px]" style={{ background: BRAND }} />
                Our Journey
                <span className="w-8 h-[2px]" style={{ background: BRAND }} />
              </h4>
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-zinc-900 mb-2">Deployment Timeline</h3>
            </div>
            
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-[280px] left-0 w-full h-1 bg-zinc-200 z-0">
               <div className="absolute top-0 left-0 h-full w-1/3" style={{ background: BRAND }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-200 border border-zinc-200 shadow-xl relative z-10">
              {milestones.map(({ year, tag, event }, i) => (
                <motion.div 
                  key={year}
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white p-8 lg:p-10 relative group hover:bg-zinc-50 transition-colors duration-500 flex flex-col border-t-[8px]"
                  style={{ borderTopColor: i === 0 ? BRAND : `rgba(40,148,52,${0.2 + (i * 0.2)})` }}
                >
                  <div className="text-zinc-200 group-hover:text-zinc-900 font-black text-6xl tracking-tighter mb-8 leading-none mt-2 relative z-10 transition-colors" style={{ color: i === 0 ? BRAND : undefined }}>
                    {year}
                  </div>
                  <div className="mb-6 relative z-10">
                    <span className="text-zinc-400 text-[9px] font-black uppercase tracking-[0.2em] border-b border-zinc-200 pb-1">{tag}</span>
                  </div>
                  <p className="text-zinc-600 text-[13px] leading-relaxed font-bold relative z-10">{event}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Values (Remains Dark for contrast) ── */}
      <section className="py-32 bg-[#0a0a0a] relative overflow-hidden flex-1">
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        
        <div className="max-w-[1700px] mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-end justify-between mb-20">
            <div className="max-w-2xl">
              <h4 className="font-black tracking-[0.2em] uppercase text-[11px] mb-5 flex items-center gap-4 text-white/50">
                <span className="w-8 h-[2px]" style={{ background: BRAND }} />
                Operational Protocols
              </h4>
              <h2 className="text-5xl lg:text-7xl font-black uppercase text-white tracking-tighter leading-none">
                Core <span style={{ color: BRAND }}>Directives</span>
              </h2>
            </div>
            <Link to="/contact" className="group hidden md:flex items-center gap-4 text-white hover:text-[#289434] transition-colors pb-4">
              <span className="text-[13px] font-black uppercase tracking-[0.2em] border-b-[3px] border-white/20 pb-1.5 transition-all group-hover:border-[#289434]">Access Docs</span> 
              <ArrowRight size={18} strokeWidth={3} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 shadow-2xl">
            {values.map(({ title, icon: Icon, desc }, i) => (
              <motion.div key={title}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#1e2020] p-10 group relative overflow-hidden flex flex-col hover:bg-black transition-colors duration-500">
                
                <div className="w-16 h-16 bg-[#0a0a0a] border border-white/20 flex items-center justify-center mb-8 shrink-0 shadow-2xl group-hover:border-white/50 transition-colors">
                  <Icon size={24} style={{ color: BRAND }} strokeWidth={2.5} />
                </div>
                
                <h3 className="text-white font-black text-2xl uppercase tracking-tighter mb-4">{title}</h3>
                <p className="text-white/40 text-[13px] leading-relaxed font-bold">{desc}</p>

                <div className="absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left" style={{ background: BRAND }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhoWeAre;
