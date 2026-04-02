import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code2, Settings, Users, ArrowRight, CheckCircle2 } from "lucide-react";

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
    <section className="py-24 md:py-32 bg-[#0f172a] font-sans border-y border-slate-800 relative z-10 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#088349]/5 skew-x-12 transform origin-top pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-slate-900 -skew-x-12 transform origin-bottom pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
          >
            <h4 className="text-[#088349] font-bold tracking-widest uppercase text-xs mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#088349]" /> 
              Our Core Offerings
            </h4>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Enterprise <span className="text-[#088349]">IT Solutions</span>
            </h2>
            <div className="w-16 h-1 bg-[#088349] rounded mb-4" />
            <p className="text-slate-400 text-lg">
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
                className="inline-flex items-center gap-2 bg-[#088349] hover:bg-[#066639] text-white px-6 py-3 rounded font-bold tracking-wide transition-colors"
              >
                View All Solutions
                <ArrowRight size={18} />
              </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-[#1e293b] border border-slate-700/50 rounded-xl shadow-2xl flex flex-col group transition-all duration-300 relative overflow-hidden"
            >
              {/* Rich Image Header */}
              <div className="h-56 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Icon Drop */}
              <div className="absolute top-48 left-8 z-20">
                <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center text-[#088349] border-4 border-[#1e293b] group-hover:scale-110 group-hover:bg-[#088349] group-hover:text-white transition-all duration-300 shadow-xl">
                  <service.icon size={28} strokeWidth={2} />
                </div>
              </div>

              <div className="p-8 pt-12 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-base mb-6 leading-relaxed">
                  {service.subtitle}
                </p>
                
                <div className="w-full h-px bg-slate-700/50 mb-6" />
                
                <ul className="space-y-4 mb-8 flex-1">
                  {service.list.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#088349] shrink-0" />
                      <span className="text-slate-300 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={service.path}
                  className="inline-flex items-center gap-2 text-[#088349] font-bold tracking-wide uppercase group-hover:text-white transition-colors mt-auto"
                >
                  {service.btnText}
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
