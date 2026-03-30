import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Michael Thompson",
    role: "CTO, FinTech Innovations",
    initials: "MT",
    rating: 5,
    text: "TEK Inspirations transformed our IT infrastructure. Their consulting team had deep expertise and they delivered on time. The managed services team is outstanding — always proactive.",
  },
  {
    name: "Sarah Williams",
    role: "VP Operations, RetailCorp",
    initials: "SW",
    rating: 5,
    text: "The RPO solution they provided was a game changer for our hiring pipeline. We reduced time-to-hire by 40% and the quality of candidates improved dramatically. Highly recommended.",
  },
  {
    name: "Rajiv Malhotra",
    role: "CEO, HealthTech India",
    initials: "RM",
    rating: 5,
    text: "Their software development team built our patient management platform from scratch. Professional, responsive, and technically excellent. We continue to use TEK for all our IT needs.",
  },
];

function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setActive(p => (p + 1) % testimonials.length), []);
  const prev = useCallback(() => setActive(p => (p - 1 + testimonials.length) % testimonials.length), []);

  // Auto-rotate
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(#088349 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#088349]/10 border border-[#088349]/20 text-[#088349] text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#088349] animate-pulse" /> Client Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
            What Our{" "}
            <span style={{ background: "linear-gradient(135deg, #088349, #0aad60)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Clients Say
            </span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">Trusted by 500+ businesses globally for IT excellence.</p>
        </div>

        {/* Desktop: All 3 cards */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {testimonials.map(({ name, role, initials, rating, text }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-[#088349]/20 transition-all duration-500 p-7 flex flex-col relative overflow-hidden"
            >
              {/* Gradient top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#088349] via-[#3ddc84] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Quote */}
              <Quote size={32} className="mb-4 text-[#088349]/10" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: rating }).map((_, j) => (
                  <Star key={j} size={14} fill="#f59e0b" className="text-[#f59e0b]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-600 text-[15px] leading-relaxed flex-1 mb-6">"{text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 shadow-lg shadow-[#088349]/20"
                  style={{ background: "linear-gradient(135deg, #088349, #0aad60)" }}>
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

        {/* Mobile: Carousel */}
        <div className="md:hidden relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl border border-slate-100 shadow-lg p-7 flex flex-col"
              >
                <Quote size={28} className="mb-4 text-[#088349]/10" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonials[active].rating }).map((_, j) => (
                    <Star key={j} size={14} fill="#f59e0b" className="text-[#f59e0b]" />
                  ))}
                </div>
                <p className="text-slate-600 text-[15px] leading-relaxed mb-6">"{testimonials[active].text}"</p>
                <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                    style={{ background: "linear-gradient(135deg, #088349, #0aad60)" }}>
                    {testimonials[active].initials}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{testimonials[active].name}</p>
                    <p className="text-slate-400 text-xs">{testimonials[active].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:text-[#088349] hover:border-[#088349]/30 transition-colors shadow-sm">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, j) => (
                <button key={j} onClick={() => setActive(j)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${j === active ? "bg-[#088349] w-6" : "bg-slate-300"}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:text-[#088349] hover:border-[#088349]/30 transition-colors shadow-sm">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
