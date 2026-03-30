import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael Thompson",
    role: "CTO, FinTech Innovations",
    initials: "MT",
    color: "#088349",
    rating: 5,
    text: "TEK Inspirations transformed our IT infrastructure. Their consulting team had deep expertise and they delivered on time. The managed services team is outstanding — always proactive.",
  },
  {
    name: "Sarah Williams",
    role: "VP Operations, RetailCorp",
    initials: "SW",
    color: "#0369a1",
    rating: 5,
    text: "The RPO solution they provided was a game changer for our hiring pipeline. We reduced time-to-hire by 40% and the quality of candidates improved dramatically. Highly recommended.",
  },
  {
    name: "Rajiv Malhotra",
    role: "CEO, HealthTech India",
    initials: "RM",
    color: "#b45309",
    rating: 5,
    text: "Their software development team built our patient management platform from scratch. Professional, responsive, and technically excellent. We continue to use TEK for all our IT needs.",
  },
];

function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#088349]/10 border border-[#088349]/20 text-[#088349] text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#088349]" /> Client Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
            What Our{" "}
            <span style={{ background: "linear-gradient(135deg, #088349, #0aad60)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Clients Say
            </span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">Trusted by 500+ businesses globally for IT excellence.</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, initials, color, rating, text }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-slate-200 transition-all duration-300 p-7 flex flex-col relative overflow-hidden"
            >
              {/* Hover top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(to right, ${color}, transparent)` }} />

              {/* Quote icon */}
              <Quote size={32} className="mb-4 opacity-10 text-slate-900" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} size={14} fill="#f59e0b" className="text-[#f59e0b]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-600 text-[15px] leading-relaxed flex-1 mb-6">"{text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                  style={{ background: `linear-gradient(135deg, ${color}, ${color}99)` }}>
                  {initials}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{name}</p>
                  <p className="text-slate-400 text-xs">{role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
