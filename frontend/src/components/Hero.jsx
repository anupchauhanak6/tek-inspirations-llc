import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    bgImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2940&auto=format&fit=crop",
    title: "Global IT Consulting & Staffing Solutions",
    subtitle: "TEK INSPIRATIONS LLC",
    desc: "Empowering businesses with top-tier technology talent and strategic IT consulting. We bridge the gap between innovation and execution.",
    primaryBtn: "Explore Our Solutions",
    link: "/our-solution",
  },
  {
    id: 2,
    bgImage:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2873&auto=format&fit=crop",
    title: "Accelerate Your Digital Transformation",
    subtitle: "MANAGED IT SERVICES",
    desc: "From seamless cloud migrations to 24/7 infrastructure management, ensure zero downtime and optimal performance for your enterprise.",
    primaryBtn: "Learn More",
    link: "/our-solution/managed-services",
  },
  {
    id: 3,
    bgImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
    title: "Enterprise Software & Application Development",
    subtitle: "CUSTOM DEVELOPMENT",
    desc: "Build scalable, secure, and future-proof applications tailored exclusively to your complex business requirements.",
    primaryBtn: "Start A Project",
    link: "/contact",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-slate-900 group font-sans">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{ backgroundImage: `url('${slides[current].bgImage}')` }}
          />
          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${current}`}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-[#088349] font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-[#088349]" />
                {slides[current].subtitle}
              </h4>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {slides[current].title}
              </h1>

              <p className="text-slate-300 text-lg md:text-xl font-normal leading-relaxed mb-10 max-w-xl">
                {slides[current].desc}
              </p>

              <div className="flex items-center gap-4">
                <Link
                  to={slides[current].link}
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-[#088349] hover:bg-[#066839] text-white font-bold text-sm uppercase tracking-wide rounded shadow transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  {slides[current].primaryBtn}
                  <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-10 right-6 lg:right-12 z-20 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={prevSlide}
          className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-[#088349] hover:border-[#088349] transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-[#088349] hover:border-[#088349] transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="absolute bottom-10 left-6 lg:left-12 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 transition-all duration-300 rounded-full ${current === index ? "w-8 bg-[#088349]" : "w-2 bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
}
