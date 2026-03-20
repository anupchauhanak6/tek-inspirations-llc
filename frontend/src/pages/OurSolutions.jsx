import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function OurSolutions() {
  const services = [
    {
      title: "IT Consulting",
      path: "/our-solution/it-consulting",
      icon: "🧑‍💻",
      desc: "Consulting is the secret to unlock your vision and bridge technology with strategy.",
    },
    {
      title: "Managed Services",
      path: "/our-solution/managed-services",
      icon: "⚙️",
      desc: "The end-to-end management of your contingent workforce and IT infrastructure.",
    },
    {
      title: "Recruitment Process Outsourcing",
      path: "/our-solution/rpo",
      icon: "🤝",
      desc: "We don't do outsourcing, we provide an extension to your workforce.",
    },
    {
      title: "Software Development",
      path: "/our-solution/software-development",
      icon: "💻",
      desc: "Unlocking possibilities of a better tomorrow with custom software solutions.",
    },
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
            Our Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-emerald-50 max-w-2xl mx-auto"
          >
            Comprehensive technological services for modern enterprises.
          </motion.p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-4 border-[#088349] inline-block pb-2">
                Why Tek Inspirations
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                We specialize in professional services, staffing solutions, and
                consulting services at Tek Inspirations, where we align
                competent professionals to highly skilled roles across a variety
                of fields including Aviation, Media, and Enterprises.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We provide a broad range of services to assist businesses in
                becoming more proficient. We specialize in everything from IT
                staffing to Consulting, Recruitment Process Outsourcing to
                Managed Services, and Software Development. We're establishing
                benchmarks of excellence to help you teach your workers to
                operate smoothly, analyze how you're functioning, and improve
                your performance in the future.
              </p>
            </div>
            <div className="flex justify-center flex-col items-center p-10 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200 h-full">
              <span className="text-6xl mb-4">💡</span>
              <h3 className="text-xl font-semibold text-slate-700 mt-2 text-center">
                Unmatched Expertise
              </h3>
              <p className="text-slate-500 text-center mt-2 max-w-sm">
                Only a few people do this, and none have done it for as long as
                we have.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
            >
              <span className="text-5xl mb-4">{service.icon}</span>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6">{service.desc}</p>
              <Link
                to={service.path}
                className="mt-auto px-6 py-2 bg-[#088349] text-white rounded-full font-medium hover:bg-[#066a3a] transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurSolutions;
