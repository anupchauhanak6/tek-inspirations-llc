import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code2, Settings, Users, ArrowRight, CheckCircle2 } from "lucide-react";

/* ─── Logo brand colors ─── */
const BRAND = "#289434"; // Logo Forest Green
const DARK  = "#14542c"; // Logo Dark Ivy

const services = [
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    icon: Code2,
    title: "Software Development",
    subtitle: "Custom built enterprise applications engineered for scale.",
    path: "/our-solution/software-development",
    list: [
      "Web & Mobile Deployments",
      "SaaS Platform Architecture",
      "Legacy System Modernization",
    ],
    btnText: "Explore Software",
  },
  {
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    icon: Settings,
    title: "Managed IT Services",
    subtitle: "End-to-end infrastructure management and proactive support.",
    path: "/our-solution/managed-services",
    list: [
      "24/7 Security & Monitoring",
      "Cloud Infrastructure Admin",
      "Hardware Maintenance",
    ],
    btnText: "Explore Services",
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    icon: Users,
    title: "RPO Solutions",
    subtitle: "Elite talent acquisition tailored to your specific technical needs.",
    path: "/our-solution/rpo",
    list: [
      "Contingent Workforce",
      "Direct Hire Recruiting",
      "Global Scale Delivery",
    ],
    btnText: "Explore Staffing",
  },
];

export default function ServicesHighlight() {
  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a] font-sans border-b border-white/10 relative z-10 overflow-hidden">
      {/* Background brutalist grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
           style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="max-w-[1700px] mx-auto px-6 lg:px-16 relative z-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
          >
            <h4 className="font-black tracking-[0.2em] uppercase text-[11px] mb-5 flex items-center gap-4" style={{ color: BRAND }}>
              <span className="w-8 h-[2px]" style={{ background: BRAND }} /> 
              Our Core Offerings
            </h4>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6 leading-none">
              Enterprise<br />
              <span style={{ color: BRAND }}>IT Solutions</span>
            </h2>
            <div className="w-20 h-1 rounded-none mb-6" style={{ background: BRAND }} />
            <p className="text-white/50 text-lg md:text-xl font-medium max-w-xl">
              From deploying scalable codebases to acquiring the top 1% of global tech talent, we provide unified operational dominance.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <Link
                to="/our-solution"
                className="group flex items-center gap-4 text-white hover:text-white transition-colors"
              >
                <span className="font-black tracking-widest uppercase text-sm md:text-lg border-b-[3px] border-white pb-1 transition-all" style={{ borderBottomColor: BRAND }}>
                  View All Solutions
                </span>
                <svg width="44" height="26" viewBox="0 0 44 26" fill="none" className="transition-colors group-hover:translate-x-2 duration-300" style={{ color: BRAND }}>
                  <path d="M2,2 L2,13 L40,13" stroke="currentColor" strokeWidth="2.5" />
                  <path d="M32,5 L40,13 L32,21" stroke="currentColor" strokeWidth="2.5" />
                </svg>
              </Link>
          </motion.div>
        </div>

        {/* 1px GAP GRID for brutalist aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 shadow-2xl">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-[#0a0a0a] flex flex-col group transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none" style={{ background: BRAND }} />

              {/* Cinematic Image Header */}
              <div className="h-64 w-full relative overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale blur-[2px] transform group-hover:scale-105 group-hover:grayscale-0 group-hover:blur-0 transition-all duration-700"
                />
              </div>
              
              {/* Brutalist Icon Box overlaps image */}
              <div className="absolute top-52 left-8 z-20">
                <div className="w-16 h-16 bg-[#0a0a0a] flex items-center justify-center border border-white/20 group-hover:border-white/50 transition-all duration-500 shadow-2xl" style={{ color: BRAND }}>
                  <service.icon size={26} strokeWidth={2.5} />
                </div>
              </div>

              <div className="p-8 pt-12 flex flex-col flex-1 pl-8 border-l-[3px] border-transparent transition-colors duration-300" style={{ borderLeftColor: `rgba(40,148,52,0)` }}>
                {/* We apply a green left-border physically on hover */}
                <style>{`
                  .group:hover .hover-border-${i} {
                    border-left-color: ${BRAND} !important;
                  }
                `}</style>
                <div className={`hover-border-${i} absolute top-64 bottom-0 left-0 w-[4px] bg-transparent transition-colors duration-500`} />

                <h3 className="text-2xl font-black uppercase tracking-wide text-white mb-4 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/50 text-[15px] font-medium mb-8 leading-relaxed">
                  {service.subtitle}
                </p>
                
                <ul className="space-y-4 mb-10 flex-1">
                  {service.list.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1">
                         <CheckCircle2 size={18} strokeWidth={2.5} style={{ color: BRAND }} className="scale-x-90" />
                      </div>
                      <span className="text-white/70 font-bold text-[13px] uppercase tracking-wide">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={service.path}
                  className="inline-flex items-center gap-3 text-white/50 font-black tracking-widest uppercase transition-colors mt-auto group/btn"
                >
                  <span className="group-hover/btn:text-white transition-colors">{service.btnText}</span>
                  <ArrowRight size={16} strokeWidth={2.5} style={{ color: BRAND }} className="transition-transform group-hover/btn:translate-x-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
