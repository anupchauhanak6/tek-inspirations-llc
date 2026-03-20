import React from "react";
import { motion } from "framer-motion";

function WhoWeAre() {
  const values = [
    {
      title: "Integrity",
      desc: "We believe that trust must be earned rather than granted. We build faith by remaining honest, real, and responsive.",
      icon: "🛡️",
    },
    {
      title: "Entrepreneurial Spirit",
      desc: "With our natural drive to achieve, we seek to advance professionally and personally to help clients attain objectives faster.",
      icon: "🚀",
    },
    {
      title: "Seamlessness",
      desc: "Across all our organizational areas and hierarchies, people think and work together. We gain synergistic advantages.",
      icon: "🤝",
    },
    {
      title: "Honesty",
      desc: "What we say and do are manifestations of our integrity. Our integrity propels us to act with honesty at all times.",
      icon: "✨",
    },
    {
      title: "Equal Opportunity",
      desc: "We passionately believe all individuals are created equal in terms of rights, dignity, and the ability to do great things.",
      icon: "⚖️",
    },
    {
      title: "Ethics",
      desc: "We are a value-driven company embracing an ethical mentality and moral behavior in all of our everyday activities.",
      icon: "✅",
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
            Who We Are
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-emerald-50 max-w-2xl mx-auto"
          >
            Bringing the world's expertise together to grow together. Global
            Reach With Expertise.
          </motion.p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-4 border-[#088349] inline-block pb-2">
                Overview
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Tek Inspirations LLC was formed with the objective of offering
                professionals with excellent solutions. We take a proactive
                approach, ensuring that personnel and task consulting teams have
                the necessary competence.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our in-house experts go the additional mile, leaving no stone
                unturned in order to provide you with industry-leading
                solutions. Our purpose is to determine the appropriate people
                for the task or project while also addressing your company's
                specific requirements.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We are a people’s enterprise, and we intend to stay committed to
                that. Our employees are encouraged to grow professionally,
                personally, and morally.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center p-10 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200 h-full">
              <span className="text-6xl mb-4">🏢</span>
              <h3 className="text-xl font-semibold text-slate-700 mt-2 text-center">
                Life at Tek Inspirations
              </h3>
              <p className="text-slate-500 text-center mt-4">
                Since Tek Inspirations LLC first opened its doors in Texas in
                2016, we had a simple mission: to find the brightest people for
                the corporate world. We are a community of people with shared
                interests!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 inline-block border-b-4 border-[#088349] pb-2">
            Our Core Values
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            We are driven by equal opportunity, accountability, and
            appreciation. These core values guide everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{val.icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {val.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
