import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Lightbulb, Settings, Users, Code2, ArrowRight, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "IT Consulting",
    path: "/our-solution/it-consulting",
    desc: "Strategic technology guidance to align your IT investments with business goals and drive measurable growth.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
  },
  {
    icon: Settings,
    title: "Managed Services",
    path: "/our-solution/managed-services",
    desc: "End-to-end management of your contingent workforce and IT infrastructure with guaranteed uptime.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
  },
  {
    icon: Users,
    title: "RPO Solutions",
    path: "/our-solution/rpo",
    desc: "We provide a seamless extension to your workforce with top-tier talent delivery at scale.",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600",
  },
  {
    icon: Code2,
    title: "Software Development",
    path: "/our-solution/software-development",
    desc: "Custom software solutions from concept to deployment — web, mobile, SaaS, and enterprise platforms.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
  },
];

function ServicesHighlight() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(#0f172a 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#088349]/10 border border-[#088349]/20 text-[#088349] text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#088349] animate-pulse" /> What We Do
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              Our Core{" "}
              <span style={{ background: "linear-gradient(135deg, #088349, #0aad60)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Services
              </span>
            </h2>
          </div>
          <Link to="/our-solution"
            className="inline-flex items-center gap-2 text-[#088349] font-bold text-sm hover:gap-3 transition-all duration-200 shrink-0 group">
            View all solutions <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, path, desc, img }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link to={path}
                className="group flex flex-col h-full bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#088349]/20 hover:-translate-y-1.5 transition-all duration-500 overflow-hidden relative">
                
                {/* Image header */}
                <div className="relative h-40 overflow-hidden bg-[#0f172a]">
                  <img src={img} alt={title} className="w-full h-full object-cover opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-700 scale-105 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                      <Icon size={18} className="text-[#3ddc84]" strokeWidth={2} />
                    </div>
                  </div>
                  {/* Arrow on hover */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight size={14} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-slate-900 font-bold text-lg mb-2 group-hover:text-[#088349] transition-colors">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">{desc}</p>

                  <div className="flex items-center gap-1.5 mt-5 text-sm font-bold text-[#088349]">
                    Learn more
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1 duration-200" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesHighlight;
