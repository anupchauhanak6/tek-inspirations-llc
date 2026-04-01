import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Settings, ArrowRight, ShieldCheck, Zap, BarChart3, Cloud, 
  LifeBuoy, MonitorDot, AlertTriangle, Building2, CheckCircle2, ChevronDown, Eye, Users, Search, Target, Server, Shield, Share2, DollarSign
} from "lucide-react";
import PageHero from "../components/PageHero";

const challenges = [
  { icon: Users, label: "Use of multiple vendors" },
  { icon: Share2, label: "Expanding use of contract resources" },
  { icon: Server, label: "Increased complexity of IT infrastructures" },
  { icon: Shield, label: "Exposure to compliance laws" },
  { icon: DollarSign, label: "Uncertainty in operational costs" }
];
// Wait, Share2, DollarSign aren't imported. I'll just use the ones I imported.
// I'll re-import them or use suitable replacements from the current list.

const capabilities = [
  { icon: Users,       title: "Workforce Governance", desc: "Manage the life cycle of contractors from hiring to compliance management, payrolling, performance, and reporting." },
  { icon: ShieldCheck, title: "Infrastructure & System Oversight",desc: "Ensure reliable operation and security of all systems through distributed environments for an efficient IT response." },
  { icon: MonitorDot,  title: "Remote Technology Management",     desc: "Maximise operations across geographically distributed locations while minimising and managing associated internal costs." },
  { icon: LifeBuoy,    title: "IT Support & Continuity",          desc: "Provide structured IT support outsourcing aligned with your business objectives and operational goals." },
  { icon: Cloud,       title: "Cloud Environment Management",     desc: "Optimise cost-effectiveness and compliance with standards while maintaining the performance of scalable infrastructures." },
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
    a: "Our USA-managed IT services company manages technology for large enterprises by achieving governance, compliance, and measurable KPIs; we stand out by integrating workforce and infrastructure visibility into our standard operating model."
  },
  {
    q: "How does your managed service outsourcing solution reduce operational risk?",
    a: "Through contractor lifecycle management, government infrastructure control, compliance monitoring, and formalised performance reports, our clients have absolute visibility into their level of exposure."
  },
  {
    q: "Do you have the capability to provide hiring employees or temporary staffing?",
    a: "Yes. Through our administrative and technical capabilities, we support the hiring process by administering onboarding and payroll, tracking compliance, and overseeing performance as an enterprise hiring and staffing outsourcing company."
  },
  {
    q: "Can your organisation assist with providing support to decentralised locations?",
    a: "Absolutely. Our remote IT service provides enterprises with the opportunity to maintain efficient operations at decentralised/remote offices while heavily reducing internal administrative reproduction costs."
  },
  {
    q: "Do you manage infrastructure and cloud environments?",
    a: "Yes. We provide comprehensive infrastructure management services and structured cloud-managed services to maintain system reliability, security compliance, and cost efficiency across expansive enterprise environments."
  }
];

function FAQItem({ q, a, index }) {
  const [isOpen, setIsOpen] = useState(index === 0);
  
  return (
    <div className="border border-[#1e293b]/60 rounded-xl mb-3 overflow-hidden bg-[#0f172a]/50 backdrop-blur-md shadow-sm hover:shadow-[#088349]/10 hover:border-[#088349]/40 transition-all duration-300 group">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left font-bold text-white focus:outline-none"
      >
        <span className="pr-4 tracking-wide">{q}</span>
        <div className={`w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? "bg-[#3ddc84] text-[#0f172a] rotate-180 border-[#3ddc84]" : "bg-[#1e293b] text-slate-400 group-hover:bg-[#088349]/20 group-hover:text-[#3ddc84] group-hover:border-[#088349]/50"}`}>
          <ChevronDown size={16} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="p-6 pt-0 text-slate-400 leading-relaxed text-sm border-t border-slate-800/50 mt-2">
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
    <div className="min-h-screen bg-[#f8fafc]">
      <PageHero
        badge="Managed IT Services"
        title="Managed IT"
        highlight="Services USA"
        subtitle="Operational Stability. Workforce Control. Predictable Performance."
      />

      {/* ── Top Floating Metric Bar ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 -mt-10 relative z-20 mb-20 hidden md:block">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-[#0f172a] rounded-2xl border border-slate-700/60 shadow-2xl shadow-[#0f172a]/20 p-2 overflow-hidden flex items-center justify-between">
          <div className="px-6 py-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#088349]/20 flex items-center justify-center border border-[#088349]/40 relative">
               <div className="absolute inset-0 rounded-full border border-[#3ddc84] animate-ping opacity-20" />
               <Server size={18} className="text-[#3ddc84]" />
            </div>
            <div>
              <p className="text-white font-black text-lg">Operational Command</p>
              <p className="text-[#3ddc84] text-[10px] uppercase tracking-widest font-bold">Systems Online & Monitored</p>
            </div>
          </div>
          
          <div className="flex-1 flex justify-end gap-1 px-4">
             {[...Array(24)].map((_, i) => (
                <div key={i} className="w-2 rounded-full bg-[#088349]" style={{ height: `${(i * 7 % 20) + 10}px`, opacity: ((i * 3 % 5) + 5) / 10 }} />
             ))}
          </div>
        </motion.div>
      </div>

      {/* ── Overview & Challenges ── */}
      <section className="pb-24 pt-10 md:pt-0 bg-[#f8fafc] relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border border-slate-200 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-slate-600 text-[10px] font-black uppercase tracking-[0.2em]">The Enterprise Challenge</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-black text-[#0f172a] mb-8 leading-[1.1] tracking-tight">
              Enterprise Operations Require <br/>
              <span className="text-[#088349]">Structured Oversight</span>
            </h2>
            
            <p className="text-slate-600 text-[17px] leading-relaxed mb-12 max-w-3xl mx-auto font-medium">
              TEK Inspirations provides structured managed IT services USA to assist organisations in maintaining ongoing operations, controlling their workforce, and ensuring the reliability of their infrastructure. As the digital ecosystem evolves, pressure builds when facing:
            </p>

            {/* Premium Challenge Cards */}
            <div className="flex flex-wrap justify-center gap-4 mb-14">
              {challenges.map((c, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-white border-2 border-slate-100 rounded-2xl px-6 py-4 flex items-center gap-3 shadow-sm hover:border-[#088349]/40 hover:shadow-xl hover:shadow-[#088349]/5 transition-all duration-300 group cursor-default">
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#088349]/10 group-hover:scale-110 transition-all">
                    <c.icon size={16} className="text-slate-400 group-hover:text-[#088349] transition-colors" />
                  </div>
                  <span className="text-slate-800 font-bold text-sm tracking-tight">{c.label}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center">
               <p className="text-slate-500 text-sm font-semibold italic mb-6">"We provide governed management methods yielding ownership, accountability, and compliance—rather than transactional administrative staffing."</p>
            </div>
        </div>
      </section>

      {/* ── Operating Model Terminal ── */}
      <section className="py-24 bg-[#0f172a] relative border-y border-slate-800 overflow-hidden">
        {/* Abstract Backgrounds */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute right-0 top-0 w-[800px] h-[800px] bg-[#088349]/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-[#3ddc84]/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row gap-16 items-center">
           <motion.div className="lg:w-1/3" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
             <h3 className="text-[#3ddc84] text-[11px] font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-[#3ddc84] animate-pulse" /> The Framework
             </h3>
             <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
               Performance-Based <br/> Delivery Structure
             </h2>
             <p className="text-slate-400 leading-relaxed mb-8">
               Our managed services delivery structure is built with an operational discipline in mind. We stand apart from conventional IT services by enforcing strict governance and predictive KPIs.
             </p>
             <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-600 text-white font-bold text-sm hover:bg-white hover:text-[#0f172a] hover:border-white transition-all duration-300">
                Discuss Your Pipeline <ArrowRight size={16} />
             </Link>
           </motion.div>

           <motion.div className="lg:w-2/3 w-full" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {operatingModel.map(({ num, title, desc, icon: Icon }) => (
                    <div key={num} className="bg-[#1e293b]/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 relative overflow-hidden group hover:bg-[#1e293b] hover:border-[#088349]/40 transition-all duration-500">
                       <div className="absolute right-0 top-0 w-24 h-24 bg-[#088349]/10 rounded-full blur-2xl group-hover:bg-[#088349]/30 transition-colors" />
                       
                       <div className="flex justify-between items-start mb-6 relative z-10">
                          <div className="w-12 h-12 rounded-xl bg-[#0f172a] border border-slate-700 flex items-center justify-center group-hover:scale-110 group-hover:border-[#088349]/50 transition-all duration-300 shadow-xl">
                             <Icon size={20} className="text-[#3ddc84]" />
                          </div>
                          <span className="text-slate-600 font-black text-2xl tracking-tighter group-hover:text-[#088349]/30 transition-colors">{num}</span>
                       </div>

                       <div className="relative z-10">
                          <h4 className="text-white font-bold text-lg mb-2">{title}</h4>
                          <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </motion.div>
        </div>
      </section>

      {/* ── Capabilities Bento Grid ── */}
      <section className="py-24 bg-[#f8fafc] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-[#0f172a] mb-4 tracking-tight">
              Managed Services <span className="text-[#088349]">Capabilities</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Providing a stable enterprise ecosystem, not just transactional staffing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {capabilities.map(({ icon: Icon, title, desc }, i) => {
              // Custom spanning logic for maximum visual appeal
              const spanClass = 
                i === 0 ? "lg:col-span-4" : 
                i === 1 ? "lg:col-span-2" : 
                i === 2 ? "lg:col-span-2" : 
                i === 3 ? "lg:col-span-2" : "lg:col-span-2";
              
              const isDark = i === 0 || i === 3;

              return (
                <motion.div key={title}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`rounded-[2rem] p-8 relative overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 border
                    ${isDark 
                      ? "bg-[#0f172a] border-slate-800 text-white hover:shadow-[#088349]/20" 
                      : "bg-white border-slate-200 text-[#0f172a] hover:shadow-slate-200" 
                    } 
                    ${spanClass}`}>
                  
                  {isDark && <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity group-hover:scale-110 duration-700 origin-bottom-left"><Icon size={180} /></div>}
                  {isDark && <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-[#088349] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />}
                  
                  {!isDark && <div className="absolute top-0 left-0 w-full h-1 bg-slate-100 group-hover:bg-[#088349] transition-colors duration-500" />}

                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-all duration-300 group-hover:scale-110 relative z-10
                    ${isDark ? "bg-[#1e293b] border border-slate-700 group-hover:border-[#088349]/50 text-[#3ddc84]" : "bg-slate-50 border border-slate-100 group-hover:bg-[#088349]/10 text-[#088349]"}`}>
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  
                  <h3 className={`font-black text-2xl mb-4 relative z-10 tracking-tight ${isDark ? "text-white" : "text-[#0f172a]"}`}>{title}</h3>
                  <p className={`relative z-10 font-medium leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>{desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Impact & Industries (Dark UI Block) ── */}
      <section className="bg-[#0f172a] relative border-t border-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
          
          {/* Impact Left Side */}
          <div className="p-12 lg:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#088349]/5 rounded-full blur-[100px] pointer-events-none" />
            
            <h3 className="text-[#3ddc84] text-[11px] font-black uppercase tracking-[0.2em] mb-4">The Result</h3>
            <h2 className="text-4xl font-black text-white mb-8 tracking-tight">Enterprise Impact</h2>
            <p className="text-slate-400 mb-12 leading-relaxed">
              We provide structured supervision of administrative activities, focused on absolute operational maturity and scalable governance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <div key={i} className="group flex items-start gap-4 p-4 rounded-xl bg-[#1e293b]/30 border border-slate-800 hover:border-[#088349]/40 hover:bg-[#1e293b] transition-all">
                  <div className="w-10 h-10 rounded-full bg-[#0f172a] border border-slate-700 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:text-[#3ddc84] transition-all text-slate-500">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{b.title}</h4>
                    <p className="text-slate-500 text-xs font-semibold">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industries Right Side */}
          <div className="p-12 lg:p-24 bg-[#0a0f1d] relative">
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            
            <Building2 size={32} className="text-[#3ddc84] mb-6 relative z-10" />
            <h3 className="text-3xl font-black text-white mb-6 relative z-10">Disciplined Industries</h3>
            <p className="text-slate-400 text-sm mb-10 leading-relaxed max-w-sm relative z-10">
              Enterprises in highly regulated or hyper-growth markets rely on our managed frameworks to maintain continuity.
            </p>
            
            <div className="flex flex-wrap gap-3 relative z-10">
              {industries.map((ind, i) => (
                <span key={i} className="px-4 py-2.5 rounded-full border border-slate-700 bg-[#1e293b]/50 text-slate-300 font-semibold text-sm hover:border-[#3ddc84] hover:text-[#3ddc84] hover:bg-[#3ddc84]/10 transition-all cursor-default shadow-lg">
                  {ind}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Premium Dark FAQ Section ── */}
      <section className="py-24 bg-[#0f172a] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-[#088349] to-transparent" />
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 mb-6 shadow-sm">
               <span className="text-slate-300 text-[10px] font-black uppercase tracking-[0.2em]">Knowledge Base</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-400">Clarify your doubts regarding our managed services and operating model.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-white py-24 text-center border-t border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(#088349 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="relative z-10 w-full max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#088349]/10 border border-[#088349]/20 text-[#088349] text-xs font-bold uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-[#088349] animate-pulse" /> Strengthen Control
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] mb-6 tracking-tight leading-[1.1]">
            Managed Services Built for <br/>
            <span className="text-[#088349]">Enterprise Scale</span>
          </h2>
          <p className="text-slate-500 mb-10 text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Partner with TEK Inspirations to implement governance-driven managed services that provide absolute stability, operational efficiency, and rapid scalability.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-5 bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-2xl shadow-[#0f172a]/20 hover:-translate-y-1 group active:scale-[0.98]"
          >
            Schedule Your Strategy Call
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-[#3ddc84]" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ManagedServices;
