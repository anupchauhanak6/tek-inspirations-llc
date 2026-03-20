import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HomeCTA() {
  return (
    <section className="py-24 bg-[#088349] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)]"></div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-white mb-8"
        >
          Ready to Elevate Your Business?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-emerald-50 mb-10"
        >
          Join hundreds of companies that trust Tek Inspirations for enterprise
          IT solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <Link
            to="/contact"
            className="px-8 py-4 bg-white text-[#088349] font-bold rounded-full hover:bg-slate-50 transition-colors shadow-xl text-lg"
          >
            Let's Talk
          </Link>
          <Link
            to="/services"
            className="px-8 py-4 bg-[#066a3a] border border-[#099955] text-white font-bold rounded-full hover:bg-[#055c32] transition-colors shadow-xl text-lg"
          >
            Our Solutions
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
