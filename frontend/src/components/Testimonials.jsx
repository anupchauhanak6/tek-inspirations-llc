import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
            Client <span className="text-[#088349]">Success</span>
          </h2>
          <p className="text-lg text-slate-600">
            What our partners say about Tek Inspirations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-slate-50 p-8 rounded-3xl relative"
            >
              <div className="text-[#088349] text-4xl font-serif absolute -top-4 left-8">
                "
              </div>
              <p className="text-slate-700 mb-6 italic pt-4">
                "The partnership with Tek Inspirations transformed our
                operational efficiency. Their IT consulting team delivered
                exactly what they promised, on time and with incredible
                expertise."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-slate-200 rounded-full mr-4 bg-gradient-to-br from-[#088349] to-emerald-300"></div>
                <div>
                  <div className="font-bold text-slate-900">Sarah Jenkins</div>
                  <div className="text-sm text-slate-500">
                    CTO, TechCorp {i}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
