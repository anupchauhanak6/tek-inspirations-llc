import React from "react";
import { motion } from "framer-motion";

function SoftwareDevelopment() {
  const services = [
    "Customer Software Development Services",
    "Mobile App Developments",
    "UI/UX (User Interface/User Experience) Design",
    "SaaS Development",
    "Quality Control and Testing",
    "Modernization of Applications",
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
            Software Development
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-emerald-50 max-w-2xl mx-auto"
          >
            Unlocking possibilities of a better tomorrow.
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
              <p className="text-slate-600 leading-relaxed mb-4">
                Software development refers to the process through which
                programmers produce computer programmes. The Software
                Development Life Cycle (SDLC) is a process for creating software
                that meets both technical and user requirements. It is divided
                into many phases.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                We provide custom software solutions that enable organizations
                to stay competitive. TEK Inspirations collaborates with you from
                concept to completion, providing leading Software Products on
                deadline, under budget, and with precision and accuracy.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We provide a group of talented & Expert Developers eager to work
                with you on fixed projects or dedicated resource hire models as
                a top-rated Custom Software Outsourcing industry. Our corporate
                software development services include web, mobility, and all
                other key technological products, allowing you to achieve
                massive returns and profitability.
              </p>
            </div>
            <div className="flex justify-center flex-col items-center p-10 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200 h-full">
              <span className="text-6xl mb-4">💻</span>
              <h3 className="text-xl font-semibold text-slate-700 mt-2 text-center">
                Our Services
              </h3>
              <ul className="mt-6 space-y-4 text-left w-full max-w-sm">
                {services.map((service, i) => (
                  <li key={i} className="flex items-start text-slate-600">
                    <span className="text-[#088349] mr-3 mt-1">✔</span>
                    <span>{service}</span>
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

export default SoftwareDevelopment;
