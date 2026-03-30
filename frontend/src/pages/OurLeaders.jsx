import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import PageHero from "../components/PageHero";

const leadership = [
  { name: "Executive Board",    role: "Board of Directors",   initials: "EB", color: "#088349", desc: "Guiding the strategic vision and global operations of TEK Inspirations. Committed to innovation, excellence, and sustainable growth across all markets." },
  { name: "Global Operations",  role: "Executive Leadership", initials: "GO", color: "#0369a1", desc: "Ensuring seamless delivery and excellence across worldwide branches. Fostering a culture of strong leadership, operational agility, and continuous improvement." },
];

const teams = [
  { city: "Frisco",   country: "Texas, USA",   desc: "Our global headquarters overseeing international strategy, business development, and client relations.", color: "#088349" },
  { city: "Noida",    country: "India",         desc: "Our core tech hub driving innovation, software excellence, and digital transformation initiatives.", color: "#0369a1" },
  { city: "Agra",     country: "India",         desc: "Center for strategic recruitment, talent solutions, and robust staffing operations.", color: "#b45309" },
  { city: "Varanasi", country: "India",         desc: "Driving operational agility and delivering comprehensive managed services at scale.", color: "#7c3aed" },
];

function OurLeaders() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        badge="Leadership"
        title="Meet Our"
        highlight="Leaders"
        subtitle="The visionaries driving our success, innovation, and global footprint across dedicated branches worldwide."
      />

      {/* Leadership Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#088349]/10 border border-[#088349]/20 text-[#088349] text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#088349]" /> Board & Executive
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Board & Executive Leadership</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {leadership.map(({ name, role, initials, color, desc }, i) => (
              <motion.div key={name}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ background: `linear-gradient(to right, ${color}, transparent)` }} />
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-xl text-white shrink-0"
                    style={{ background: `linear-gradient(135deg, ${color}, ${color}90)` }}>
                    {initials}
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-black text-2xl mb-1">{name}</h3>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold border"
                      style={{ background: `${color}10`, color, borderColor: `${color}25` }}>
                      {role}
                    </span>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Teams */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#088349]/10 border border-[#088349]/20 text-[#088349] text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#088349]" /> Worldwide Presence
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
              Our Global{" "}
              <span style={{ background: "linear-gradient(135deg,#088349,#0aad60)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Teams</span>
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto">Four strategic locations supporting clients across the globe.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {teams.map(({ city, country, desc, color }, i) => (
              <motion.div key={city}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 hover:-translate-y-0.5 transition-all duration-300 p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to right, ${color}, transparent)` }} />
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={15} style={{ color }} />
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color }}>{country}</span>
                </div>
                <h3 className="text-slate-900 font-black text-2xl mb-3">{city}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurLeaders;
