import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin, Globe } from "lucide-react";
import PageHero from "../components/PageHero";

const offices = [
  { city: "Frisco",   badge: "HQ", country: "us", address: "13573 Tabasco Cat Trail,\nFrisco, TX 75035, USA", color: "#088349", mapSrc: "https://maps.google.com/maps?width=100%25&height=100%25&hl=en&q=13573%20Tabasco%20Cat%20Trail,%20Frisco,%20TX%2075035+(TEK%20Inspirations%20LLC)&t=&z=14&ie=UTF8&iwloc=B&output=embed" },
  { city: "Noida",    country: "in", address: "D-247/1, Sector 63 Rd,\nD Block, Sector 63, Noida, UP 201301", color: "#0369a1", mapSrc: "https://maps.google.com/maps?width=100%25&height=100%25&hl=en&q=D-247/1,%20Sector%2063,%20Noida+(TEK%20Inspirations%20LLC)&t=&z=14&ie=UTF8&iwloc=B&output=embed" },
  { city: "Agra",     country: "in", address: "4th Floor, Padam High Street,\nFatehabad Rd, Agra, UP 282001", color: "#b45309", mapSrc: "https://maps.google.com/maps?width=100%25&height=100%25&hl=en&q=Padam%20High%20Street,%20Agra+(TEK%20Inspirations%20LLC)&t=&z=14&ie=UTF8&iwloc=B&output=embed" },
  { city: "Meerut",   country: "in", address: "C-26, Sector 1, East Rithani,\nShatabdi Nagar, Meerut, UP 250103", color: "#7c3aed", mapSrc: "https://maps.google.com/maps?width=100%25&height=100%25&hl=en&q=Shatabdi%20Nagar,%20Meerut+(TEK%20Inspirations%20LLC)&t=&z=14&ie=UTF8&iwloc=B&output=embed" },
  { city: "Varanasi", country: "in", address: "SA17/3K6 PAHARIA,\nNear Surbhi International Hotel, Varanasi, UP 221007", color: "#0e7490", mapSrc: "https://maps.google.com/maps?width=100%25&height=100%25&hl=en&q=PAHARIA,%20Varanasi+(TEK%20Inspirations%20LLC)&t=&z=14&ie=UTF8&iwloc=B&output=embed" },
];

function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        badge="Contact Us"
        title="Let's"
        highlight="Connect"
        subtitle="Have a project in mind or want to learn more about our services? Our team is ready to help you scale your business globally."
      />

      {/* Main contact card */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden flex flex-col lg:flex-row"
        >
          {/* Left — dark panel */}
          <div className="lg:w-2/5 relative overflow-hidden flex flex-col justify-between p-10 lg:p-12"
            style={{ background: "linear-gradient(160deg, #06180e, #088349 120%)" }}>
            <div className="pointer-events-none absolute top-0 right-0 w-64 h-64 rounded-full opacity-30"
              style={{ background: "radial-gradient(circle, rgba(255,255,255,0.3), transparent 70%)", filter: "blur(50px)", transform: "translate(30%,-30%)" }} />

            <div className="relative z-10">
              <h3 className="text-2xl font-black text-white mb-2">Contact Info</h3>
              <p className="text-emerald-100 text-sm mb-10 leading-relaxed">Fill out the form and our team will get back to you within 24 hours.</p>

              <div className="space-y-7">
                {[
                  { icon: Phone,  label: "Call Us",   value: "+1 123 456 7890" },
                  { icon: Mail,   label: "Email",     value: "info@tekinspirations.com" },
                  { icon: MapPin, label: "HQ",        value: "Frisco, Texas\nUnited States" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-emerald-300 hover:bg-white/20 transition-colors shrink-0">
                      <Icon size={20} />
                    </div>
                    <div className="pt-1">
                      <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">{label}</p>
                      <p className="text-white font-bold whitespace-pre-line leading-snug">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-12 pt-7 border-t border-white/15">
              <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">Follow Us</p>
              <div className="flex gap-3">
                {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                  <a key={i} href="#"
                    className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:-translate-y-0.5">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:w-3/5 p-10 lg:p-12 bg-white">
            <h3 className="text-2xl font-black text-slate-900 mb-7">Send us a Message</h3>
            <form className="space-y-5" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[["First Name","text","John","first-name"],["Last Name","text","Doe","last-name"]].map(([label,type,ph,id]) => (
                  <div key={id} className="group space-y-1.5">
                    <label htmlFor={id} className="text-xs font-bold text-slate-500 uppercase tracking-widest block group-focus-within:text-[#088349] transition-colors">{label}</label>
                    <input id={id} type={type} placeholder={ph}
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-100 focus:border-[#088349] bg-slate-50 focus:bg-white font-medium text-slate-900 outline-none transition-all" />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[["Email","email","john@example.com","email"],["Phone","tel","+1 (555) 000-0000","phone"]].map(([label,type,ph,id]) => (
                  <div key={id} className="group space-y-1.5">
                    <label htmlFor={id} className="text-xs font-bold text-slate-500 uppercase tracking-widest block group-focus-within:text-[#088349] transition-colors">{label}</label>
                    <input id={id} type={type} placeholder={ph}
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-100 focus:border-[#088349] bg-slate-50 focus:bg-white font-medium text-slate-900 outline-none transition-all" />
                  </div>
                ))}
              </div>
              <div className="group space-y-1.5">
                <label htmlFor="service" className="text-xs font-bold text-slate-500 uppercase tracking-widest block group-focus-within:text-[#088349] transition-colors">Service Interested In</label>
                <select id="service"
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-100 focus:border-[#088349] bg-slate-50 focus:bg-white font-medium text-slate-900 outline-none transition-all">
                  <option value="">Select a service...</option>
                  <option>IT Consulting</option>
                  <option>Managed Services</option>
                  <option>RPO Solutions</option>
                  <option>Software Development</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="group space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-widest block group-focus-within:text-[#088349] transition-colors">Your Message</label>
                <textarea id="message" rows={5} placeholder="Tell us about your project or inquiry..."
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-100 focus:border-[#088349] bg-slate-50 focus:bg-white resize-none font-medium text-slate-900 outline-none transition-all" />
              </div>
              <button type="submit"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#088349] hover:bg-[#066a3a] text-white font-bold transition-all duration-200 hover:shadow-xl hover:shadow-[#088349]/25 hover:-translate-y-0.5 active:scale-95">
                Send Message
                <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Global Offices */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#088349]/10 border border-[#088349]/20 text-[#088349] text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#088349]" /> Worldwide
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
            Our Global{" "}
            <span style={{ background: "linear-gradient(135deg,#088349,#0aad60)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Offices</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">Headquarters in the United States with a strong development presence across India.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offices.map(({ city, badge, country, address, color, mapSrc }, i) => (
            <motion.div key={city}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
              <div className="h-1 w-full" style={{ background: `linear-gradient(to right, ${color}, transparent)` }} />
              <div className="p-6">
                <div className="flex items-center gap-2.5 mb-3">
                  <img src={`https://flagcdn.com/w40/${country}.png`} alt="" className="w-7 rounded shadow-sm" />
                  <h3 className="text-slate-900 font-black text-lg">
                    {city}
                    {badge && <span className="ml-2 text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: `${color}12`, color }}>{badge}</span>}
                  </h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 whitespace-pre-line">{address}</p>
              </div>
              <div className="w-full h-44 relative">
                <div className="absolute inset-0 bg-slate-900/8 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                <iframe title={`${city} Office`} className="w-full h-full border-none outline-none grayscale group-hover:grayscale-0 transition-all duration-700" src={mapSrc} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;