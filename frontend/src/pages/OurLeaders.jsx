import React from "react";
import SEOHelmet from "../components/SEOHelmet";
import { motion } from "framer-motion";
import { MapPin, Users, Globe, Building2, Award } from "lucide-react";
import PageHero from "../components/PageHero";

/* ─── Logo brand colors ─── */
const BRAND = "#289434"; // Logo Forest Green
const DARK  = "#14542c"; // Logo Dark Ivy

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
    <div className="min-h-screen bg-[#0a0a0a] font-sans">
      <SEOHelmet
        title="Our Leaders — Executive Team & Global Offices"
        description="Meet the executive leadership and board of directors at TEK Inspirations LLC. Our global team drives IT staffing, technology consulting, and managed services across 5 offices in USA and India."
        canonical="/who-we-are/our-leaders"
        keywords={["TEK Inspirations leadership", "IT company executives", "technology company board", "IT firm management USA", "TEK Inspirations team"]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "TEK Inspirations LLC Leadership",
          "url": "https://www.tekinspirations.com/who-we-are/our-leaders",
          "description": "Meet the executive leadership at TEK Inspirations LLC — guiding our global IT staffing and technology operations."
        }}
      />
      <PageHero
        badge="Leadership"
        title="Meet Our"
        highlight="Leaders"
        subtitle="The visionaries driving our success, innovation, and global footprint across dedicated branches worldwide."
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Leadership Cards - Light Dual Tone */}
      <section className="py-24 md:py-32 bg-[#fafafa] relative border-t border-zinc-200">
        {/* Brutalist Grid Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
             style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="max-w-[1700px] mx-auto px-6 lg:px-16 relative z-10">
          <div className="text-center mb-20">
            <h4 className="font-black tracking-[0.2em] uppercase text-[11px] mb-4 flex items-center justify-center gap-4 text-zinc-500">
              <span className="w-8 h-[2px]" style={{ background: BRAND }} />
              Executive Control
              <span className="w-8 h-[2px]" style={{ background: BRAND }} />
            </h4>
            <h2 className="text-5xl lg:text-7xl font-black uppercase text-zinc-900 tracking-tighter">Board & Executive</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200 shadow-2xl">
            {leadership.map(({ name, role, initials, desc, stats }, i) => (
              <motion.div key={name}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white hover:bg-zinc-50 transition-colors p-10 lg:p-12 relative overflow-hidden flex flex-col">
                
                {/* Structural line */}
                <div className="absolute top-0 left-0 w-full h-[4px] transition-all duration-500 scale-x-0 origin-left group-hover:scale-x-100" style={{ background: BRAND }} />
                
                <div className="flex flex-col sm:flex-row items-start gap-8 mb-10">
                  <div className="w-24 h-24 bg-zinc-100 border border-zinc-200 flex items-center justify-center font-black text-4xl shrink-0 group-hover:border-[#289434] transition-colors shadow-sm"
                    style={{ color: BRAND }}>
                    {initials}
                  </div>
                  <div>
                    <h3 className="text-zinc-900 font-black text-4xl uppercase tracking-tight mb-2 leading-none">{name}</h3>
                    <span className="inline-block px-3 py-1.5 mt-2 text-[10px] uppercase font-black tracking-[0.2em] border border-zinc-200 bg-white text-zinc-600">
                      {role}
                    </span>
                  </div>
                </div>
                <p className="text-zinc-600 font-bold leading-loose mb-12 text-[13px]">{desc}</p>
                
                {/* Mini stats */}
                <div className="grid grid-cols-2 gap-px bg-zinc-200 mt-auto border-t border-zinc-200">
                  {stats.map(({ l, v }) => (
                    <div key={l} className="bg-white group-hover:bg-zinc-100 transition-colors p-6 text-center border-b border-zinc-200 relative overflow-hidden">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 pointer-events-none" style={{ background: BRAND }} />
                      <p className="font-black text-4xl leading-none mb-2 text-[#289434]">{v}</p>
                      <p className="text-[9px] text-zinc-500 font-black uppercase tracking-widest">{l}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extreme Cinematic Global Teams */}
      <section className="py-32 bg-[#0a0a0a] border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        
        <div className="max-w-[1700px] mx-auto px-6 lg:px-16 relative z-10">
          <div className="text-center mb-20">
            <h4 className="font-black tracking-[0.2em] uppercase text-[11px] mb-4 flex items-center justify-center gap-4 text-white/50">
              <span className="w-8 h-[2px]" style={{ background: BRAND }} />
              Worldwide Presence
              <span className="w-8 h-[2px]" style={{ background: BRAND }} />
            </h4>
            <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter text-white mb-4">
              Physical <span style={{ color: BRAND }}>Nodes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 shadow-2xl">
            {teams.map(({ city, country, flag, desc, badge }, i) => (
              <motion.div key={city}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-[#1e2020] p-10 relative overflow-hidden flex flex-col hover:bg-[black] transition-colors duration-500">
                
                <div className="absolute bottom-0 right-0 w-32 h-32 blur-[50px] opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" style={{ background: BRAND }} />
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Globe size={120} className="text-white" />
                </div>
                
                <div className="flex items-center gap-4 mb-10 relative z-10">
                  <img src={`https://flagcdn.com/w40/${flag}.png`} alt="" className="w-10 h-auto grayscale contrast-125 group-hover:grayscale-0 transition-all border border-white/20" />
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50">{country}</span>
                    {badge && <span className="text-[9px] font-black uppercase tracking-widest px-1.5 py-[1px] border border-white/20 w-fit text-white/70">{badge} Facility</span>}
                  </div>
                </div>
                <h3 className="text-white font-black text-4xl uppercase tracking-tight mb-4 relative z-10">{city}</h3>
                <p className="text-white/40 text-[13px] font-bold leading-relaxed relative z-10">{desc}</p>
                
                {/* Structural highlight */}
                <div className="absolute bottom-0 left-0 w-0 h-[3px] transition-all duration-500 group-hover:w-full" style={{ background: BRAND }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurLeaders;
