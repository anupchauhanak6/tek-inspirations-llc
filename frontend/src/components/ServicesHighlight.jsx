import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "IT Consulting",
    desc: "Strategic technology guidance to align IT with your business goals.",
    icon: "💡",
    link: "/our-solutions/it-consulting",
  },
  {
    title: "Software Dev",
    desc: "Custom enterprise software solutions built with modern stacks.",
    icon: "💻",
    link: "/our-solutions/software-development",
  },
  {
    title: "Managed IT",
    desc: "Comprehensive infrastructure and support services 24/7.",
    icon: "⚙️",
    link: "/our-solutions/managed-services",
  },
  {
    title: "RPO Solutions",
    desc: "End-to-end recruitment process outsourcing for top talent.",
    icon: "👥",
    link: "/our-solutions/rpo",
  },
];

export default function ServicesHighlight() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-slate-900 mb-4"
          >
            Premium <span className="text-[#088349]">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Comprehensive technology solutions designed to scale your
            enterprise.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-[#088349] group-hover:text-white transition-colors">
                {svc.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {svc.title}
              </h3>
              <p className="text-slate-600 mb-6 line-clamp-3">{svc.desc}</p>
              <Link
                to={svc.link}
                className="text-[#088349] font-bold flex items-center group-hover:underline"
              >
                Explore <span className="ml-2">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
