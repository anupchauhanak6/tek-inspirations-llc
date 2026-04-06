import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    bgImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop",
    leftHuge: "GLOBAL\nTALENT",
    leftSmall:
      "We empower businesses with top-tier technology talent and strategic IT consulting. Bridging the gap between innovation and execution in record time.",
    rightHuge: "THAT ELEVATES\nTHE SCALABILITY\nOF YOUR TEAMS",
    rightSmall:
      "Talent acquisition, contract staffing, and permanent placement — turnkey. No generic solutions. No compromises.",
    btn: "EXPLORE SOLUTIONS",
    link: "/our-solution",
  },
  {
    id: 2,
    bgImage:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2873&auto=format&fit=crop",
    leftHuge: "MANAGED\nSERVICES",
    leftSmall:
      "From seamless cloud migrations to 24/7 infrastructure management, ensuring absolute zero downtime for your enterprise scale operations.",
    rightHuge: "THAT ACCELERATE\nYOUR DIGITAL\nTRANSFORMATION",
    rightSmall:
      "Infrastructure tuning, network security, and robust cloud deployments — turnkey. Built strictly for operational stability.",
    btn: "LEARN MORE",
    link: "/our-solution/managed-services",
  },
  {
    id: 3,
    bgImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2940&auto=format&fit=crop",
    leftHuge: "CUSTOM\nSOFTWARE",
    leftSmall:
      "Build highly scalable, secure, and future-proof enterprise applications tailored exclusively to your complex business requirements.",
    rightHuge: "THAT REDEFINES\nYOUR DIGITAL\nCAPABILITIES",
    rightSmall:
      "Architecture, visualization, and original codebases — enterprise scale. No templates. No shortcuts.",
    btn: "START PROJECT",
    link: "/contact",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-[#0a0a0a] group font-sans">
      
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Grayscale Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale-[1] contrast-125 brightness-75"
            style={{ backgroundImage: `url('${slides[current].bgImage}')` }}
          />
          {/* Intense vignette overlays for dark cinematic feel */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full w-full max-w-[1700px] mx-auto px-6 lg:px-16 pt-32 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${current}`}
            className="w-full h-full relative"
          >
            {/* LEFT BLOCK (Huge Text + Paragraph) */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="absolute left-0 top-[15%] lg:top-[12%]"
            >
              <h1 className="text-white text-5xl sm:text-7xl lg:text-[9vw] xl:text-[130px] font-black uppercase leading-[0.8] tracking-tighter whitespace-pre-line drop-shadow-2xl">
                {slides[current].leftHuge}
              </h1>
              <p className="mt-6 md:mt-10 max-w-sm text-zinc-300 text-sm md:text-base font-medium leading-relaxed border-l-2 border-[#289434] pl-6 drop-shadow-md">
                {slides[current].leftSmall}
              </p>
            </motion.div>

            {/* RIGHT BLOCK (Paragraph + Huge Text) */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 60 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="absolute right-0 top-[45%] md:top-[48%] flex flex-col items-end text-right w-full"
            >
              <p className="mb-6 md:mb-10 max-w-md text-zinc-300 text-sm md:text-base font-medium leading-relaxed pr-6 border-r-2 border-[#289434] drop-shadow-md">
                {slides[current].rightSmall}
              </p>
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[7vw] xl:text-[95px] font-black uppercase leading-[0.85] tracking-tighter whitespace-pre-line drop-shadow-2xl max-w-4xl">
                {slides[current].rightHuge}
              </h1>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* BOTTOM LEFT CTA & PAGINATION (Static Layout) */}
        <div className="absolute bottom-12 md:bottom-16 left-6 lg:left-16 right-6 lg:right-16 z-20 flex justify-between items-end">
          
          {/* CTA Link matching reference style */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`btn-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                to={slides[current].link}
                className="group flex items-center gap-4 text-white hover:text-[#289434] transition-colors"
                style={{ textShadow: "1px 1px 15px rgba(0,0,0,0.8)" }}
              >
                <div className="flex items-center">
                  <svg
                    width="44"
                    height="26"
                    viewBox="0 0 44 26"
                    fill="none"
                    className="text-white group-hover:text-[#289434] transition-colors"
                  >
                    <path
                      d="M2,2 L2,13 L40,13"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M32,5 L40,13 L32,21"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
                <span className="font-bold tracking-widest uppercase text-sm md:text-lg border-b-[3px] border-white pb-1 group-hover:border-[#289434] transition-all">
                  {slides[current].btn}
                </span>
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Simple Cinematic Pagination */}
          <div className="flex gap-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition-all duration-500 rounded ${
                  current === index ? "w-10 h-[3px] bg-[#289434]" : "w-6 h-[2px] bg-white/40 hover:bg-white"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
