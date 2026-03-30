import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import PageHero from "../components/PageHero";

const tabs = ["All", "Celebrations", "Awards", "Events"];

const images = [
  { url: "https://www.tekinspirations.com/wp-content/uploads/2024/11/Noida-TEK-2-copy.webp",         category: "Celebrations", title: "Diwali Celebration",   desc: "Festive magic and lights at our Noida branch — bringing the team together in true spirit." },
  { url: "https://www.tekinspirations.com/wp-content/uploads/2023/12/Photo-1-copy-3_result.webp",    category: "Celebrations", title: "Diwali 2023 — Agra",  desc: "Decorations, sweets, and incredible team bonding moments from our Agra office." },
  { url: "https://www.tekinspirations.com/wp-content/uploads/2023/08/Web-Pic-V-2-copy.webp",         category: "Events",       title: "Independence Day",    desc: "Jai Hind! Celebrating freedom, pride, and innovation at TEK Inspirations." },
  { url: "https://www.tekinspirations.com/wp-content/uploads/2023/02/1-1.jpg",                       category: "Awards",       title: "Quarterly Awards",    desc: "Recognizing our top performers — because dedication deserves to be celebrated." },
  { url: "https://www.tekinspirations.com/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-05-at-12.19.50-AM-1.jpeg", category: "Events", title: "Dandiya Night", desc: "Pulsating beats and vibrant spirits of Navratri — a night to remember." },
  { url: "https://www.tekinspirations.com/wp-content/uploads/2022/07/3.jpg",                         category: "Awards",       title: "Excellence Ceremony", desc: "Acknowledging hard work is our finest culture. Every win counts." },
];

const categoryColors = { Celebrations: "#088349", Awards: "#b45309", Events: "#0369a1" };

function Gallery() {
  const [activeTab, setActiveTab] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = activeTab === "All" ? images : images.filter(img => img.category === activeTab);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        badge="Our Culture"
        title="A Glimpse of"
        highlight="TEK Life"
        subtitle="Explore our vibrant culture, grand celebrations, and moments of excellence captured throughout our journey."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 focus:outline-none ${
                  activeTab === tab
                    ? "bg-[#088349] text-white shadow-md shadow-[#088349]/25"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}>
                {tab}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map(img => (
                <motion.div key={img.url} layout
                  initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }} transition={{ duration: 0.25 }}
                  className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer border border-slate-100 shadow-sm hover:shadow-md"
                  onClick={() => setSelected(img)}>
                  <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <span className="text-[10px] font-bold uppercase tracking-widest mb-1"
                      style={{ color: categoryColors[img.category] || "#088349" }}>
                      {img.category}
                    </span>
                    <h3 className="text-white font-bold text-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{img.title}</h3>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-xl bg-white/90 border border-white/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                    <ZoomIn size={14} className="text-slate-700" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={() => setSelected(null)} />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-2xl flex flex-col md:flex-row">
              <div className="md:w-2/3 bg-slate-900 flex items-center justify-center">
                <img src={selected.url} alt={selected.title} className="w-full h-auto object-contain max-h-[70vh]" />
              </div>
              <div className="md:w-1/3 p-8 flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: categoryColors[selected.category] || "#088349" }}>
                  {selected.category}
                </span>
                <h3 className="text-slate-900 font-black text-2xl mb-4">{selected.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{selected.desc}</p>
                <button onClick={() => setSelected(null)}
                  className="mt-8 py-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold text-sm transition-colors">
                  Close
                </button>
              </div>
            </motion.div>
            <button onClick={() => setSelected(null)}
              className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors shadow-lg">
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Gallery;
