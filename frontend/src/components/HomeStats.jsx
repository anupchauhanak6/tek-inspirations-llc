import React from "react";
import { motion } from "framer-motion";

export default function HomeStats() {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#088349]/10 skew-y-3 transform -translate-y-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-y border-slate-700/50 py-12">
          {[
            { metric: "500+", label: "Global Clients" },
            { metric: "10+", label: "Years Experience" },
            { metric: "98%", label: "Retention Rate" },
            { metric: "24/7", label: "Tech Support" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200 mb-2">
                {stat.metric}
              </div>
              <div className="text-slate-300 font-medium tracking-wide uppercase text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
