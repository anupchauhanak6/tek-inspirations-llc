import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Gallery() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const tabs = ["All", "Celebrations", "Awards", "Events"];

  const images = [
    {
      url: "https://www.tekinspirations.com/wp-content/uploads/2024/11/Noida-TEK-2-copy.webp",
      category: "Celebrations",
      title: "Diwali Celebration",
      desc: "Festive magic and lights in our Noida branch.",
    },
    {
      url: "https://www.tekinspirations.com/wp-content/uploads/2023/12/Photo-1-copy-3_result.webp",
      category: "Celebrations",
      title: "Diwali 2023 Agra",
      desc: "Decorations, sweets, and team bonding.",
    },
    {
      url: "https://www.tekinspirations.com/wp-content/uploads/2023/08/Web-Pic-V-2-copy.webp",
      category: "Events",
      title: "Independence Day",
      desc: "Jai Hind! Celebrating freedom and innovation.",
    },
    {
      url: "https://www.tekinspirations.com/wp-content/uploads/2023/02/1-1.jpg",
      category: "Awards",
      title: "Quarterly Awards",
      desc: "Recognizing our top performers and dedication.",
    },
    {
      url: "https://www.tekinspirations.com/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-05-at-12.19.50-AM-1.jpeg",
      category: "Events",
      title: "Dandiya Night",
      desc: "Pulsating beats and vibrant spirits of Navratri.",
    },
    {
      url: "https://www.tekinspirations.com/wp-content/uploads/2022/07/3.jpg",
      category: "Awards",
      title: "Excellence Ceremony",
      desc: "Acknowledging hard work is our finest culture.",
    },
  ];

  const filteredImages =
    activeTab === "All"
      ? images
      : images.filter((img) => img.category === activeTab);

  useEffect(() => {
    if (selectedImage) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-16">
      <div className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#088349]/20 to-transparent"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">
              Glimpses
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Explore our vibrant culture, grand celebrations, and moments of
            excellence captured throughout our journey.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm focus:outline-none ${
                activeTab === tab
                  ? "text-white"
                  : "text-slate-600 bg-white hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-[#088349] rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={img.url}
                className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl bg-slate-200"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {img.title}
                  </h3>
                  <p className="text-emerald-300 text-sm mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {img.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            <div
              className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl"
            >
              <div className="md:w-2/3 bg-slate-100 p-2">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain max-h-[70vh] rounded-2xl"
                />
              </div>
              <div className="md:w-1/3 p-8 md:p-10 flex flex-col justify-center">
                <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-2">
                  {selectedImage.category}
                </span>
                <h3 className="text-3xl font-bold text-slate-800 mb-4">
                  {selectedImage.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {selectedImage.desc}
                </p>
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="w-full py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors"
                  >
                    Close Gallery
                  </button>
                </div>
              </div>
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-black/10 hover:bg-black/20 text-slate-800 rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Gallery;
