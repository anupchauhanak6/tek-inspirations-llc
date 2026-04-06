import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Settings, ArrowRight, ShieldCheck, Zap, BarChart3, Cloud, 
  LifeBuoy, MonitorDot, AlertTriangle, Building2, CheckCircle2, ChevronDown, Eye, Users, Search, Target, Server, Shield, Share2, DollarSign
} from "lucide-react";
import PageHero from "../components/PageHero";

/* ─── Logo brand colors ─── */
const BRAND = "#289434"; // Logo Forest Green
const DARK  = "#14542c"; // Logo Dark Ivy

const challenges = [
  { icon: Users, label: "Use of multiple vendors" },
  { icon: Server, label: "Increased complexity of IT infrastructures" },
  { icon: Shield, label: "Exposure to compliance laws" }
];

const capabilities = [
  { icon: Users,       title: "Workforce Governance", desc: "Manage the life cycle of contractors from hiring to compliance management, payrolling, performance, and reporting." },
  { icon: ShieldCheck, title: "System Oversight",     desc: "Ensure reliable operation and security of all systems through distributed environments for an efficient IT response." },
  { icon: MonitorDot,  title: "Remote Management",    desc: "Maximise operations across geographically distributed locations while minimising and managing associated internal costs." },
  { icon: LifeBuoy,    title: "IT Support Models",    desc: "Provide structured IT support outsourcing aligned with your business objectives and operational goals." },
  { icon: Cloud,       title: "Cloud Control",        desc: "Optimise cost-effectiveness and compliance with standards while maintaining the performance of scalable infrastructures." },
];

const operatingModel = [
  { num: "01", icon: BarChart3,    title: "Governance First",       desc: "Define Accountability Structures, Reporting Cadence, and Compliance Targets." },
  { num: "02", icon: Settings,     title: "Operational Integration",desc: "Align Workforce With Enterprise Oversight And Infrastructure." },
  { num: "03", icon: Eye,          title: "Performance Monitoring", desc: "Metric Measurement Is Continuous, And Service Levels Are Measured Against KPIs." },
  { num: "04", icon: AlertTriangle,title: "Risk Mitigation",        desc: "We Are Proactive In Identifying And Mitigating Client Compliance And Operational Risks." },
];

const benefits = [
  { title: "Compliance",    desc: "Decreased Operations Exposure" },
  { title: "Cost Control",  desc: "Predictable Cost Of Workforce" },
  { title: "Transparency",  desc: "Increased Operational Visibility" },
  { title: "Reliability",   desc: "Highly Stable Infrastructure" },
  { title: "Efficiency",    desc: "Decreased Administrative Burden" }
];

const industries = [
  "Technology / SaaS", "Healthcare & Life Sciences", "Financial Services", 
  "Telecommunications", "Retail & eCommerce", "Manufacturing"
];

const faqs = [
  { 
    q: "How is your USA-managed IT services company different from another provider's?",
    a: "Our USA-managed IT services manages technology for large enterprises by achieving governance, compliance, and measurable KPIs; we stand out by integrating workforce and infrastructure visibility into our standard operating model."
  },
  {
    q: "How does your managed service outsourcing solution reduce operational risk?",
    a: "Through contractor lifecycle management, government infrastructure control, compliance monitoring, and formalised performance reports, our clients have absolute visibility into their level of exposure."
  },
  {
    q: "Do you manage infrastructure and cloud environments?",
    a: "Yes. We provide comprehensive infrastructure management services and structured cloud-managed services to maintain system reliability, security compliance, and cost efficiency across expansive enterprise environments."
  }
];

function FAQItem({ q, a, index }) {
  const [isOpen, setIsOpen] = useState(index === 0);
  
  return (
    <div className="border border-white/10 mb-2 overflow-hidden bg-[#1e2020] hover:border-white/30 transition-all duration-300 group">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start sm:items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className="pr-4 tracking-wide font-black uppercase text-sm text-white">{q}</span>
        <div className={`w-10 h-10 border border-white/20 flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? "bg-[#0a0a0a] text-white" : "bg-transparent text-white/50 group-hover:bg-[#0a0a0a] group-hover:text-white"}`}
             style={{ borderColor: isOpen ? BRAND : undefined }}>
          <ChevronDown size={18} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="p-6 pt-0 text-white/50 font-bold leading-relaxed text-sm border-t border-white/10 mt-2">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ManagedServices() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans">
      <PageHero
        badge="Managed IT Services"
        title="Managed IT"
        highlight="Services"
        subtitle="Operational Stability. Workforce Control. Predictable Performance."
        bgImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000"
      />

      {/* ── Overview - Light Dual Tone ── */}
      <section className="py-24 md:py-32 bg-[#fafafa] relative overflow-hidden border-t border-zinc-200">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
             style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="max-w-[1700px] mx-auto px-6 lg:px-16 relative z-10 flex flex-col items-center">
            <h4 className="font-black tracking-[0.2em] uppercase text-[11px] mb-6 flex items-center justify-center gap-4 text-zinc-500">
              <span className="w-8 h-[2px]" style={{ background: BRAND }} />
              The Enterprise Challenge
              <span className="w-8 h-[2px]" style={{ background: BRAND }} />
            </h4>
            
            <h2 className="text-4xl lg:text-7xl font-black uppercase text-zinc-900 mb-12 tracking-tighter text-center leading-[0.95]">
              Operations Require <br/>
              <span style={{ color: BRAND }}>Structured Oversight</span>
            </h2>
            
            <p className="text-zinc-600 text-lg leading-relaxed mb-16 max-w-3xl text-center font-bold">
              TEK Inspirations provides structured managed IT services to assist organisations in maintaining ongoing operations, controlling their workforce, and ensuring absolute reliability.
            </p>

            {/* Brutalist Challenge Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-200 shadow-2xl border border-zinc-200 w-full max-w-5xl">
              {challenges.map((c, i) => (
                <div key={i} className="bg-white p-8 flex flex-col items-center text-center group relative overflow-hidden transition-colors hover:bg-zinc-50">
                  <div className="absolute top-0 left-0 w-full h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" style={{ background: BRAND }} />
                  <div className="w-16 h-16 bg-zinc-100 flex items-center justify-center mb-6 text-zinc-500 group-hover:text-[#289434] group-hover:bg-white transition-colors border border-zinc-200 shadow-sm">
                    <c.icon size={24} style={{ color: BRAND }} strokeWidth={2.5} />
                  </div>
                  <span className="text-zinc-900 font-black uppercase tracking-tight text-sm">{c.label}</span>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* ── Operating Model Terminal ── */}
      <section className="py-32 bg-[#0a0a0a] relative border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
             style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="max-w-[1700px] mx-auto px-6 lg:px-16 relative z-10 flex flex-col lg:flex-row gap-20 items-center">
           <motion.div className="lg:w-1/3" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
             <h4 className="font-black tracking-[0.2em] uppercase text-[11px] mb-5 flex items-center gap-4 text-white/50">
                <span className="w-8 h-[2px]" style={{ background: BRAND }} />
                The Framework
             </h4>
             <h2 className="text-5xl lg:text-7xl font-black uppercase text-white mb-8 tracking-tighter leading-none">
               Delivery <span style={{ color: BRAND }}>Structure</span>
             </h2>
             <p className="text-white/40 leading-relaxed mb-10 font-bold border-l-2 pl-6" style={{ borderLeftColor: BRAND }}>
               Our delivery structure enforces strict governance and predictive KPIs. We stand apart by integrating workforce visibility entirely into our core.
             </p>
             <Link to="/contact" className="group flex items-center gap-4 text-white hover:text-white transition-colors w-fit">
                <span className="font-black tracking-[0.2em] uppercase text-[13px] border-b-[3px] border-white/20 pb-1.5 transition-all group-hover:border-white" style={{ borderBottomColor: BRAND }}>
                  Discuss Pipeline
                </span>
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" style={{ color: BRAND }} strokeWidth={2.5} />
             </Link>
           </motion.div>

           <motion.div className="lg:w-2/3 w-full" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10 shadow-2xl">
                 {operatingModel.map(({ num, title, desc, icon: Icon }) => (
                    <div key={num} className="bg-[#1e2020] p-10 relative overflow-hidden group hover:bg-[#0a0a0a] transition-colors duration-500">
                       <div className="absolute right-0 top-0 w-32 h-32 blur-[40px] opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" style={{ background: BRAND }} />
                       
                       <div className="flex justify-between items-start mb-10 relative z-10">
                          <div className="w-16 h-16 bg-[#0a0a0a] border border-white/20 flex items-center justify-center shadow-xl">
                             <Icon size={24} style={{ color: BRAND }} strokeWidth={2.5} />
                          </div>
                          <span className="text-white/10 font-black text-6xl tracking-tighter leading-none">{num}</span>
                       </div>

                       <div className="relative z-10">
                          <h4 className="text-white font-black uppercase tracking-tight text-2xl mb-3">{title}</h4>
                          <p className="text-white/50 text-[13px] leading-relaxed font-bold">{desc}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </motion.div>
        </div>
      </section>

      {/* ── Capabilities Bento Grid ── */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/10 relative overflow-hidden text-white">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-16 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black uppercase text-white tracking-tighter shadow-black drop-shadow-2xl">
              Service <span style={{ color: BRAND }}>Capabilities</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-px bg-white/10 border border-white/10 shadow-2xl">
            {capabilities.map(({ icon: Icon, title, desc }, i) => {
              const spanClass = i === 0 ? "lg:col-span-4" : i === 1 ? "lg:col-span-2" : i === 2 ? "lg:col-span-2" : i === 3 ? "lg:col-span-2" : "lg:col-span-2";
              const isDark = i === 0 || i === 3;

              return (
                <motion.div key={title}
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`p-10 lg:p-12 relative overflow-hidden group transition-all duration-500 flex flex-col
                    ${isDark ? "bg-[#1e2020] text-white hover:bg-[#0a0a0a]" : "bg-[#0a0a0a] text-white hover:bg-[#1e2020]" } 
                    ${spanClass}`}>
                  
                  <div className={`w-14 h-14 border flex items-center justify-center mb-10 transition-all duration-300 relative z-10 shadow-2xl
                    ${isDark ? "bg-[#0a0a0a] border-white/20 text-white" : "bg-[#1e2020] border-white/20"}`}>
                    <Icon size={24} style={{ color: BRAND }} strokeWidth={2.5} />
                  </div>
                  
                  <h3 className="font-black text-3xl md:text-4xl mb-4 relative z-10 tracking-tight uppercase group-hover:text-[#289434] transition-colors duration-300" dangerouslySetInnerHTML={{ __html: title.replace(' ', '<br/>') }} />
                  <p className={`relative z-10 font-bold leading-relaxed text-[13px] text-white/50`}>{desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Impact & FAQ ── */}
      <section className="bg-[#0a0a0a] border-t border-white/10 relative">
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        
        <div className="max-w-[1700px] mx-auto px-6 lg:px-16 py-32 grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
          
          {/* FAQ Left Block */}
          <div>
            <h4 className="font-black tracking-[0.2em] uppercase text-[11px] mb-5 flex items-center gap-4 text-white/50">
              <span className="w-8 h-[2px]" style={{ background: BRAND }} />
              Knowledge Base
            </h4>
            <h2 className="text-4xl font-black text-white mb-12 uppercase tracking-tighter leading-none">System Queries</h2>
            <div className="space-y-1">
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
              ))}
            </div>
          </div>

          {/* Impact Right Block */}
          <div className="bg-[#1e2020] border border-white/10 p-12 lg:p-16 relative shadow-2xl">
            <h3 className="text-3xl font-black uppercase text-white mb-10 tracking-tight border-b border-white/10 pb-6">Disciplined Execution</h3>
            
            <div className="space-y-4 mb-16 relative z-10">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center justify-between border-b border-white/5 pb-4 group">
                    <h4 className="text-white font-black uppercase tracking-widest text-[11px] group-hover:text-white transition-colors">{b.title}</h4>
                    <p className="text-white/40 text-[10px] font-bold tracking-[0.1em] uppercase">{b.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-sm font-black uppercase text-white/50 tracking-widest mb-6 relative z-10">Supporting Industries</h3>
            <div className="flex flex-wrap gap-2 relative z-10">
              {industries.map((ind, i) => (
                <span key={i} className="px-4 py-2 border border-white/20 bg-[#0a0a0a] text-white/70 font-black text-[9px] uppercase tracking-[0.15em] hover:bg-white hover:text-[#0a0a0a] transition-colors cursor-default">
                  {ind}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default ManagedServices;
