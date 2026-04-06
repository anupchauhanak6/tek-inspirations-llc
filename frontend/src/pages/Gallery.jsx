import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import PageHero from "../components/PageHero";

/* ─── Logo brand colors ─── */
const BRAND = "#289434"; // Logo Forest Green
const DARK = "#14542c"; // Logo Dark Ivy

const tabs = ["All", "Celebrations", "Awards", "Events"];

const images = [
  {
    url: "https://www.tekinspirations.com/wp-content/uploads/2024/11/Noida-TEK-2-copy.webp",
    category: "Celebrations",
    title: "Diwali Celebration",
    desc: "Festive magic and lights at our Noida branch — bringing the team together in true spirit.",
  },
  {
    url: "https://www.tekinspirations.com/wp-content/uploads/2023/12/Photo-1-copy-3_result.webp",
    category: "Celebrations",
    title: "Diwali 2023 — Agra",
    desc: "Decorations, sweets, and incredible team bonding moments from our Agra office.",
  },
  {
    url: "https://www.tekinspirations.com/wp-content/uploads/2023/08/Web-Pic-V-2-copy.webp",
    category: "Events",
    title: "Independence Day",
    desc: "Jai Hind! Celebrating freedom, pride, and innovation at TEK Inspirations.",
  },
  {
    url: "https://www.tekinspirations.com/wp-content/uploads/2023/02/1-1.jpg",
    category: "Awards",
    title: "Quarterly Awards",
    desc: "Recognizing our top performers — because dedication deserves to be celebrated.",
  },
  {
    url: "https://www.tekinspirations.com/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-05-at-12.19.50-AM-1.jpeg",
    category: "Events",
    title: "Dandiya Night",
    desc: "Pulsating beats and vibrant spirits of Navratri — a night to remember.",
  },
  {
    url: "https://www.tekinspirations.com/wp-content/uploads/2022/07/3.jpg",
    category: "Awards",
    title: "Excellence Ceremony",
    desc: "Acknowledging hard work is our finest culture. Every win counts.",
  },
];

function Gallery() {
  const [activeTab, setActiveTab] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered =
    activeTab === "All"
      ? images
      : images.filter((img) => img.category === activeTab);
  const selectedIdx = selected ? filtered.indexOf(selected) : -1;

  const goNext = () => {
    if (selectedIdx < filtered.length - 1)
      setSelected(filtered[selectedIdx + 1]);
  };
  const goPrev = () => {
    if (selectedIdx > 0) setSelected(filtered[selectedIdx - 1]);
  };

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  // Keyboard navigation
  useEffect(() => {
    if (!selected) return;
    const handler = (e) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans">
      <PageHero
        badge="Our Culture"
        title="A Glimpse of"
        highlight="TEK Life"
        subtitle="Explore our vibrant culture, grand celebrations, and moments of excellence captured throughout our journey."
        bgImage="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="py-24 bg-[#0a0a0a] relative z-10 border-t border-white/10">
        {/* Brutalist Grid Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-[1700px] mx-auto px-6 lg:px-16 relative">
          {/* Brutalist Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-20 border-b border-white/10 pb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2 border text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 focus:outline-none ${
                  activeTab === tab
                    ? `border-[${BRAND}] text-[#0a0a0a]`
                    : "border-white/20 text-white/50 hover:bg-white/5 hover:text-white"
                }`}
                style={{
                  background: activeTab === tab ? BRAND : "transparent",
                  borderColor: activeTab === tab ? BRAND : undefined,
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Cinematic Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.url}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className={`group relative overflow-hidden cursor-pointer bg-[#1e2020] flex flex-col ${i === 0 ? "md:row-span-2" : ""}`}
                  style={{ aspectRatio: i === 0 ? "auto" : "16/10" }}
                  onClick={() => setSelected(img)}
                >
                  {/* Image with extreme cinematic filter */}
                  <img
                    src={img.url}
                    alt={img.title}
                    className={`w-full h-full object-cover grayscale contrast-125 brightness-75 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100 ${i === 0 ? "min-h-75 md:min-h-full" : ""}`}
                  />

                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />

                  {/* Dark transparent info bar that slides up */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[#0a0a0a]/90 backdrop-blur-md p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20 border-t border-white/10">
                    <span
                      className="text-[9px] font-black uppercase tracking-[0.2em] mb-1.5 block"
                      style={{ color: BRAND }}
                    >
                      {img.category}
                    </span>
                    <h3 className="text-white font-black uppercase tracking-wide text-lg">
                      {img.title}
                    </h3>
                  </div>

                  {/* Top right icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    <ZoomIn size={16} className="text-white" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Extreme Cinematic Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6"
          >
            <div
              className="absolute inset-0 bg-[#0a0a0a]/95 backdrop-blur-xl"
              onClick={() => setSelected(null)}
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-[1400px] w-full h-full md:h-[85vh] bg-[#0a0a0a] border-0 md:border md:border-white/10 shadow-2xl flex flex-col md:flex-row overflow-hidden"
            >
              {/* Image side - strictly architectural */}
              <div className="md:w-3/4 flex items-center justify-center relative bg-black p-4 border-r border-white/10">
                <img
                  src={selected.url}
                  alt={selected.title}
                  className="w-full h-full object-contain max-h-[80vh] drop-shadow-2xl"
                />

                {/* Minimalist Nav arrows */}
                {selectedIdx > 0 && (
                  <button
                    onClick={goPrev}
                    className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#0a0a0a]/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                )}
                {selectedIdx < filtered.length - 1 && (
                  <button
                    onClick={goNext}
                    className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#0a0a0a]/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  >
                    <ChevronRight size={24} />
                  </button>
                )}
              </div>

              {/* Text side - brutalist data readout */}
              <div className="md:w-1/4 p-8 md:p-12 flex flex-col justify-center bg-[#1e2020] relative">
                <div
                  className="absolute top-0 right-0 w-32 h-32 blur-[50px] opacity-10 pointer-events-none"
                  style={{ background: BRAND }}
                />

                <span
                  className="text-[10px] font-black uppercase tracking-[0.2em] mb-4"
                  style={{ color: BRAND }}
                >
                  {selected.category}
                </span>
                <h3 className="text-white font-black text-3xl mb-6 uppercase tracking-tight">
                  {selected.title}
                </h3>

                <div className="w-12 h-[2px] bg-white/20 mb-6" />

                <p className="text-white/50 leading-relaxed text-sm mb-12 font-medium">
                  {selected.desc}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-6">
                  <p className="text-white/30 text-[10px] font-black uppercase tracking-widest">
                    {selectedIdx + 1} / {filtered.length}
                  </p>

                  <button
                    onClick={() => setSelected(null)}
                    className="px-6 py-2 border border-white/20 bg-transparent hover:bg-white/5 text-white/70 font-black text-[10px] uppercase tracking-[0.2em] transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Mobile close button overlay */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 z-50 w-12 h-12 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/20 flex md:hidden items-center justify-center text-white"
            >
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Gallery;
