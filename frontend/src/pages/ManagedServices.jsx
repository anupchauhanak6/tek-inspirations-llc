import React from "react";
import { motion } from "framer-motion";

function ManagedServices() {
  const benefits = [
    "Improved Talent Accessibility",
    "Process complexity Will be eliminated",
    "Get a clearer view of what you're investing in",
    "Reduced Talent Costs",
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
            Managed Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-emerald-50 max-w-2xl mx-auto"
          >
            The end-to-end management of the contingent workforce.
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
                In the workforce solutions market, managed service programmes,
                or MSPs, are commonly recognised as among the most significant
                and effective contractual (or indirect) labor business
                solutions. MSP services have grown in popularity in recent times
                and are now used by a broad range of industries.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                An MSP will not only improve the efficiency of the recruitment
                process but will also assist in the creation of a superior
                candidate pipeline – one that will offer your company an
                infusion of high-quality personnel.
              </p>
              <h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
                How Effective is MSP?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                TEK Inspirations sources appropriate managed services programmes
                (MSP) that offer a data-driven strategy to contingent labor
                management, backed by cutting-edge technology and process
                excellence. To boost efficiency, control spending, and have an
                influence on business success, you will get access to the
                highest-quality flexible resources.
              </p>
            </div>
            <div className="flex justify-center flex-col items-center p-10 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200 h-full">
              <span className="text-6xl mb-4">⚙️</span>
              <h3 className="text-xl font-semibold text-slate-700 mt-2 text-center">
                Key Benefits
              </h3>
              <ul className="mt-6 space-y-4 text-left w-full max-w-sm">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start text-slate-600">
                    <span className="text-[#088349] mr-3 mt-1">✔</span>
                    <span>{benefit}</span>
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

export default ManagedServices;
