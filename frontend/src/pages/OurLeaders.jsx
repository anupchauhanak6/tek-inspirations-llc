import React from "react";
import { motion } from "framer-motion";
import { MapPin, Users, Globe, Building2, Award } from "lucide-react";
import PageHero from "../components/PageHero";

const leadership = [
  { name: "Executive Board",    role: "Board of Directors",   initials: "EB", desc: "Guiding the strategic vision and global operations of TEK Inspirations. Committed to innovation, excellence, and sustainable growth across all markets.", stats: [{ l: "Strategic Markets", v: "5+" }, { l: "Years Active", v: "8+" }] },
  { name: "Global Operations",  role: "Executive Leadership", initials: "GO", desc: "Ensuring seamless delivery and excellence across worldwide branches. Fostering a culture of strong leadership, operational agility, and continuous improvement.", stats: [{ l: "Team Members", v: "200+" }, { l: "Client Retention", v: "98%" }] },
];

const teams = [
  { city: "Frisco",   country: "Texas, USA",   flag: "us", desc: "Our global headquarters overseeing international strategy, business development, and client relations.", badge: "HQ" },
  { city: "Noida",    country: "India",         flag: "in", desc: "Our core tech hub driving innovation, software excellence, and digital transformation initiatives." },
  { city: "Agra",     country: "India",         flag: "in", desc: "Center for strategic recruitment, talent solutions, and robust staffing operations." },
  { city: "Varanasi", country: "India",         flag: "in", desc: "Driving operational agility and delivering comprehensive managed services at scale." },
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
            {leadership.map(({ name, role, initials, desc, stats }, i) => (
              <motion.div key={name}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden relative">
                
                {/* Top gradient accent */}
                <div className="h-1.5 w-full bg-gradient-to-r from-[#088349] via-[#0aad60] to-[#3ddc84]" />
                
                <div className="p-8">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center font-black text-2xl text-white shrink-0 shadow-xl shadow-[#088349]/20 relative overflow-hidden"
                      style={{ background: "linear-gradient(135deg, #088349, #0aad60)" }}>
                      {initials}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                    </div>
                    <div>
                      <h3 className="text-slate-900 font-black text-2xl mb-2">{name}</h3>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#088349]/8 text-[#088349] border border-[#088349]/15">
                        {role}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">{desc}</p>
                  
                  {/* Mini stats */}
                  <div className="grid grid-cols-2 gap-3 pt-5 border-t border-slate-100">
                    {stats.map(({ l, v }) => (
                      <div key={l} className="bg-slate-50 rounded-xl p-3 text-center group-hover:bg-[#088349]/[0.03] transition-colors">
                        <p className="text-slate-900 font-black text-lg">{v}</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Teams */}
      <section className="py-20 bg-[#0f172a] border-t border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="absolute left-0 top-0 w-96 h-96 bg-[#088349]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="w-1.5 h-1.5 bg-[#3ddc84] rounded-full animate-pulse" />
              <span className="text-slate-300 text-[10px] font-black uppercase tracking-[0.2em]">Worldwide Presence</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Our Global{" "}
              <span className="text-[#3ddc84]">Teams</span>
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto">Four strategic locations supporting clients across the globe.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {teams.map(({ city, country, flag, desc, badge }, i) => (
              <motion.div key={city}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-[#1e293b]/50 backdrop-blur-xl border border-white/[0.06] rounded-2xl hover:border-[#088349]/40 hover:bg-[#1e293b]/80 transition-all duration-500 p-6 relative overflow-hidden">
                
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#088349] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex items-center gap-2.5 mb-4">
                  <img src={`https://flagcdn.com/w40/${flag}.png`} alt="" className="w-7 rounded shadow-sm" />
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{country}</span>
                    {badge && <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-[#088349]/20 text-[#3ddc84] border border-[#088349]/30">{badge}</span>}
                  </div>
                </div>
                <h3 className="text-white font-black text-2xl mb-3">{city}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurLeaders;
