import React from "react";
import { motion } from "framer-motion";

function ITConsulting() {
  const values = [
    "We value your requirements while making IT strategy",
    "We adapt our strategies to your priorities",
    "We customize solutions for your business",
    "We administer and generate tangible outcomes",
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-16">
      {/* Hero Section */}
      <div className="bg-[#088349] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            IT Consulting
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-emerald-50 max-w-2xl mx-auto"
          >
            Consulting is the secret to unlock your vision.
          </motion.p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-4 border-[#088349] inline-block pb-2">
                Overview
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                IT consulting services are advisory services that help
                businesses evaluate new technologies and connect them with their
                business or operational goals. These services include strategic,
                structural, organizational, and deployment planning to assist
                clients’ IT goals.
              </p>
              <p className="text-slate-600 leading-relaxed">
                At TEK Inspirations, we emphasize incorporating information
                technology (IT) into your entire company plan, allowing you to
                utilize the potential it provides, such as expanding into new
                markets, gaining market share, or increasing revenue.
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                We assist you in developing and executing a clear and planned IT
                roadmap with objectives that are intrinsically linked to
                business objectives using our IT consulting services.
              </p>
            </div>
            <div className="flex justify-center flex-col items-center p-10 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200 h-full">
              <span className="text-6xl mb-4">🧑‍💻</span>
              <h3 className="text-xl font-semibold text-slate-700 mt-2">
                What We Deliver
              </h3>
              <ul className="mt-6 space-y-4 text-left w-full max-w-md">
                {values.map((val, i) => (
                  <li key={i} className="flex items-start text-slate-600">
                    <span className="text-[#088349] mr-3 mt-1">✔</span>
                    <span>{val}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ITConsulting;
