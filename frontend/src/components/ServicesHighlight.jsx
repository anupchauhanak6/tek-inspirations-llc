import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Lightbulb, Settings, Users, Code2, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    color: "#088349",
    bg: "#e8f5ee",
    title: "IT Consulting",
    path: "/our-solution/it-consulting",
    desc: "Strategic technology guidance to align your IT investments with business goals and drive measurable growth.",
  },
  {
    icon: Settings,
    color: "#0369a1",
    bg: "#e0f2fe",
    title: "Managed Services",
    path: "/our-solution/managed-services",
    desc: "End-to-end management of your contingent workforce and IT infrastructure with guaranteed uptime.",
  },
  {
    icon: Users,
    color: "#b45309",
    bg: "#fef3c7",
    title: "RPO Solutions",
    path: "/our-solution/rpo",
    desc: "We provide a seamless extension to your workforce with top-tier talent delivery at scale.",
  },
  {
    icon: Code2,
    color: "#7c3aed",
    bg: "#ede9fe",
    title: "Software Development",
    path: "/our-solution/software-development",
    desc: "Custom software solutions from concept to deployment — web, mobile, SaaS, and enterprise platforms.",
  },
];

function ServicesHighlight() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#088349]/10 border border-[#088349]/20 text-[#088349] text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#088349]" /> What We Do
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              Our Core{" "}
              <span style={{ background: "linear-gradient(135deg, #088349, #0aad60)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Services
              </span>
            </h2>
          </div>
          <Link to="/our-solution"
            className="inline-flex items-center gap-2 text-[#088349] font-bold text-sm hover:gap-3 transition-all duration-200 shrink-0">
            View all solutions <ArrowRight size={15} />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, color, bg, title, path, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link to={path}
                className="group flex flex-col p-6 h-full bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-slate-200 hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
                {/* Top accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to right, ${color}, transparent)` }} />

                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: bg }}>
                  <Icon size={22} style={{ color }} strokeWidth={2} />
                </div>

                <h3 className="text-slate-900 font-bold text-lg mb-3 group-hover:text-[#088349] transition-colors">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">{desc}</p>

                <div className="flex items-center gap-1.5 mt-5 text-sm font-bold transition-all duration-200"
                  style={{ color }}>
                  Learn more
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1 duration-200" />
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
