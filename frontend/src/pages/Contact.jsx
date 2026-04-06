import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEOHelmet from "../components/SEOHelmet";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight,
  CheckCircle2,
  Clock,
  Shield,
  Zap,
  Globe,
  ChevronDown,
  Instagram,
} from "lucide-react";
import PageHero from "../components/PageHero";

const BRAND = "#289434";

/* ─── Office Locations ─── */
const offices = [
  {
    city: "Frisco",
    badge: "HQ",
    country: "us",
    region: "Texas, USA",
    address: "13573 Tabasco Cat Trail,\nFrisco, TX 75035",
    phone: "+1 (469) 555-0100",
    color: BRAND,
    mapSrc:
      "https://maps.google.com/maps?width=100%25&height=100%25&hl=en&q=13573%20Tabasco%20Cat%20Trail,%20Frisco,%20TX%2075035+(TEK%20Inspirations%20LLC)&t=&z=14&ie=UTF8&iwloc=B&output=embed",
  },
  {
    city: "Noida",
    country: "in",
    region: "India",
    address: "D-247/1, Sector 63 Rd,\nD Block, Sector 63\nNoida, UP 201301",
    color: "#14542c",
    mapSrc:
      "https://maps.google.com/maps?width=100%25&height=100%25&hl=en&q=D-247/1,%20Sector%2063,%20Noida+(TEK%20Inspirations%20LLC)&t=&z=14&ie=UTF8&iwloc=B&output=embed",
  },
  {
    city: "Agra",
    country: "in",
    region: "India",
    address: "4th Floor, Padam High Street,\nFatehabad Rd, Agra\nUP 282001",
    color: BRAND,
    mapSrc:
      "https://maps.google.com/maps?width=100%25&height=100%25&hl=en&q=Padam%20High%20Street,%20Agra+(TEK%20Inspirations%20LLC)&t=&z=14&ie=UTF8&iwloc=B&output=embed",
  },
  {
    city: "Meerut",
    country: "in",
    region: "India",
    address: "C-26, Sector 1, East Rithani,\nShatabdi Nagar\nMeerut, UP 250103",
    color: "#14542c",
    mapSrc:
      "https://maps.google.com/maps?width=100%25&height=100%25&hl=en&q=Shatabdi%20Nagar,%20Meerut+(TEK%20Inspirations%20LLC)&t=&z=14&ie=UTF8&iwloc=B&output=embed",
  },
  {
    city: "Varanasi",
    country: "in",
    region: "India",
    address: "SA17/3K6 PAHARIA,\nNear Surbhi International Hotel\nVaranasi, UP 221007",
    color: BRAND,
    mapSrc:
      "https://maps.google.com/maps?width=100%25&height=100%25&hl=en&q=PAHARIA,%20Varanasi+(TEK%20Inspirations%20LLC)&t=&z=14&ie=UTF8&iwloc=B&output=embed",
  },
];

/* ─── Trust Badges ─── */
const trustBadges = [
  { icon: Clock, label: "24hr Response", sub: "Guaranteed SLA" },
  { icon: Shield, label: "Secure Channel", sub: "End-to-End Encrypted" },
  { icon: Zap, label: "Instant Routing", sub: "Direct to Specialists" },
  { icon: CheckCircle2, label: "98% Retention", sub: "Client Satisfaction" },
];

/* ─── Services ─── */
const services = [
  "IT Consulting",
  "Managed Services",
  "Software Development",
  "Recruitment (RPO)",
  "Cloud Solutions",
  "Other / General",
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);
  const [activeOffice, setActiveOffice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans">
      <SEOHelmet
        title="Contact Us — Get a Free IT Consultation"
        description="Contact TEK Inspirations LLC for expert IT staffing, managed services, software development, or RPO solutions. Offices in Frisco TX, Noida, Agra, Meerut & Varanasi. Response within 24 hours."
        canonical="/contact"
        keywords={["contact TEK Inspirations", "IT consulting contact", "IT staffing agency contact", "Frisco Texas IT company", "hire IT consultants USA"]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact TEK Inspirations LLC",
          "url": "https://www.tekinspirations.com/contact",
          "description": "Get in touch with TEK Inspirations LLC for IT staffing, consulting, and managed services.",
          "mainEntity": {
            "@type": "Organization",
            "name": "TEK Inspirations LLC",
            "telephone": "+1-469-555-0100",
            "email": "info@tekinspirations.com",
            "address": { "@type": "PostalAddress", "streetAddress": "13573 Tabasco Cat Trail", "addressLocality": "Frisco", "addressRegion": "TX", "postalCode": "75035", "addressCountry": "US" }
          }
        }}
      />
      <PageHero
        badge="Contact Us"
        title="Let's"
        highlight="Connect"
        subtitle="Reach out to our global engineering network. We respond within 24 hours — always."
        bgImage="https://images.unsplash.com/photo-1516387031259-22a833504143?auto=format&fit=crop&q=80&w=2000"
      />

      {/* ── Trust Badges Bar ── */}
      <div className="border-t border-white/10 bg-[#0a0a0a] overflow-hidden">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {trustBadges.map(({ icon: Icon, label, sub }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-5 p-6 lg:p-8 group hover:bg-white/5 transition-colors duration-300 relative overflow-hidden"
              >
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: BRAND }}
                />
                <div
                  className="w-11 h-11 shrink-0 flex items-center justify-center border border-white/10 bg-white/5 group-hover:border-white/30 transition-colors"
                >
                  <Icon size={18} style={{ color: BRAND }} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-white font-black uppercase tracking-tight text-[13px] leading-none mb-1">
                    {label}
                  </p>
                  <p className="text-white/30 text-[10px] font-black uppercase tracking-widest">
                    {sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Contact Module ── */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        {/* Grid Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-[1700px] mx-auto px-6 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/10 border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)]"
          >
            {/* ── LEFT INFO PANEL ── */}
            <div className="lg:col-span-4 bg-[#0d0d0d] p-10 lg:p-14 flex flex-col relative overflow-hidden">
              {/* Glow accent */}
              <div
                className="absolute top-0 right-0 w-80 h-80 blur-[100px] opacity-[0.08] pointer-events-none"
                style={{ background: BRAND }}
              />
              <div
                className="absolute bottom-0 left-0 w-40 h-40 blur-[60px] opacity-[0.05] pointer-events-none"
                style={{ background: BRAND }}
              />

              {/* Status indicator */}
              <div className="flex items-center gap-3 mb-12 relative z-10">
                <div className="relative">
                  <div
                    className="w-2.5 h-2.5 rounded-none animate-pulse"
                    style={{ background: BRAND }}
                  />
                  <div
                    className="absolute inset-0 rounded-none animate-ping opacity-40"
                    style={{ background: BRAND }}
                  />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/40">
                  Systems Online — Accepting Requests
                </span>
              </div>

              <div className="relative z-10 flex-1">
                <p
                  className="text-[11px] font-black uppercase tracking-[0.2em] mb-4"
                  style={{ color: BRAND }}
                >
                  TEK Inspirations LLC
                </p>
                <h2 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
                  Start a<br />
                  <span style={{ color: BRAND }}>Conversation</span>
                </h2>
                <p className="text-white/40 text-sm font-bold leading-relaxed mb-14 border-l-2 pl-5 max-w-[300px]" style={{ borderLeftColor: BRAND }}>
                  Whether you need enterprise IT consulting, managed services, or top-tier engineering talent — our experts are ready to build your solution.
                </p>

                {/* Contact Details */}
                <div className="space-y-6">
                  {[
                    {
                      icon: Phone,
                      label: "Call Us",
                      value: "+1 (469) 555-0100",
                      href: "tel:+14695550100",
                    },
                    {
                      icon: Mail,
                      label: "Email Us",
                      value: "info@tekinspirations.com",
                      href: "mailto:info@tekinspirations.com",
                    },
                    {
                      icon: MapPin,
                      label: "Headquarters",
                      value: "Frisco, Texas, USA",
                      href: "#offices",
                    },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="flex items-center gap-5 group cursor-pointer"
                    >
                      <div
                        className="w-12 h-12 flex items-center justify-center border border-white/10 bg-white/5 group-hover:border-white/30 group-hover:bg-white/10 transition-all duration-300 shrink-0"
                      >
                        <Icon size={18} strokeWidth={2.5} style={{ color: BRAND }} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-1">
                          {label}
                        </p>
                        <p className="text-white/80 font-bold text-[13px] group-hover:text-white transition-colors">
                          {value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="relative z-10 mt-14 pt-8 border-t border-white/10">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/25 mb-5">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {[
                    { Icon: Linkedin, href: "#" },
                    { Icon: Twitter, href: "#" },
                    { Icon: Facebook, href: "#" },
                    { Icon: Instagram, href: "#" },
                  ].map(({ Icon, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/30 hover:text-white hover:border-white/40 transition-all duration-200 hover:bg-white/5"
                    >
                      <Icon size={16} strokeWidth={2} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT FORM PANEL ── */}
            <div className="lg:col-span-8 bg-[#141414] p-10 lg:p-14 relative overflow-hidden">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4" style={{ borderColor: BRAND, opacity: 0.3 }} />

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full min-h-[500px] flex flex-col items-center justify-center text-center py-16"
                  >
                    <div
                      className="w-20 h-20 border-2 flex items-center justify-center mb-8"
                      style={{ borderColor: BRAND }}
                    >
                      <CheckCircle2 size={36} style={{ color: BRAND }} />
                    </div>
                    <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">
                      Request Transmitted
                    </h3>
                    <p className="text-white/40 font-bold text-sm max-w-sm">
                      Our team has received your message. A specialist will respond within 24 hours.
                    </p>
                    <div className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest" style={{ color: BRAND }}>
                      <div className="w-1.5 h-1.5 animate-pulse" style={{ background: BRAND }} />
                      awaiting response...
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="flex items-center justify-between mb-10">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30 mb-2">
                          Step 01 — Inquiry
                        </p>
                        <h3 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                          Tell Us Your<br />
                          <span style={{ color: BRAND }}>Requirements</span>
                        </h3>
                      </div>
                      {/* Mini decorative block */}
                      <div className="hidden lg:flex flex-col gap-1.5 shrink-0">
                        {[1, 0.5, 0.25].map((op, i) => (
                          <div
                            key={i}
                            className="h-1.5 w-8"
                            style={{ background: BRAND, opacity: op }}
                          />
                        ))}
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-0">
                      {/* Name Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 mb-px">
                        {[
                          { label: "Full Name", type: "text", ph: "John Smith", id: "name" },
                          { label: "Company / Organization", type: "text", ph: "Acme Corp", id: "company" },
                        ].map(({ label, type, ph, id }) => (
                          <div
                            key={id}
                            className={`bg-[#141414] p-6 relative transition-colors duration-200 ${focused === id ? "bg-[#1a1a1a]" : ""}`}
                          >
                            <label
                              htmlFor={id}
                              className="block text-[10px] font-black uppercase tracking-[0.2em] mb-3 transition-colors duration-200"
                              style={{ color: focused === id ? BRAND : "rgba(255,255,255,0.3)" }}
                            >
                              {label}
                            </label>
                            <input
                              id={id}
                              type={type}
                              placeholder={ph}
                              onFocus={() => setFocused(id)}
                              onBlur={() => setFocused(null)}
                              className="w-full bg-transparent text-white font-bold text-[15px] outline-none placeholder:text-white/15 border-b border-white/10 pb-2 focus:border-white/40 transition-colors"
                            />
                            {focused === id && (
                              <motion.div
                                layoutId="focus-indicator"
                                className="absolute bottom-0 left-0 right-0 h-[2px]"
                                style={{ background: BRAND }}
                              />
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Email + Phone Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 mb-px">
                        {[
                          { label: "Email Address", type: "email", ph: "john@company.com", id: "email" },
                          { label: "Phone Number", type: "tel", ph: "+1 (555) 000-0000", id: "phone" },
                        ].map(({ label, type, ph, id }) => (
                          <div
                            key={id}
                            className={`bg-[#141414] p-6 relative transition-colors duration-200 ${focused === id ? "bg-[#1a1a1a]" : ""}`}
                          >
                            <label
                              htmlFor={id}
                              className="block text-[10px] font-black uppercase tracking-[0.2em] mb-3 transition-colors duration-200"
                              style={{ color: focused === id ? BRAND : "rgba(255,255,255,0.3)" }}
                            >
                              {label}
                            </label>
                            <input
                              id={id}
                              type={type}
                              placeholder={ph}
                              onFocus={() => setFocused(id)}
                              onBlur={() => setFocused(null)}
                              className="w-full bg-transparent text-white font-bold text-[15px] outline-none placeholder:text-white/15 border-b border-white/10 pb-2 focus:border-white/40 transition-colors"
                            />
                            {focused === id && (
                              <motion.div
                                layoutId="focus-indicator"
                                className="absolute bottom-0 left-0 right-0 h-[2px]"
                                style={{ background: BRAND }}
                              />
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Service Selector */}
                      <div
                        className={`bg-[#141414] p-6 mb-px relative transition-colors duration-200 ${focused === "service" ? "bg-[#1a1a1a]" : ""}`}
                      >
                        <label
                          htmlFor="service"
                          className="block text-[10px] font-black uppercase tracking-[0.2em] mb-3 transition-colors duration-200"
                          style={{ color: focused === "service" ? BRAND : "rgba(255,255,255,0.3)" }}
                        >
                          Service Required
                        </label>
                        <div className="relative">
                          <select
                            id="service"
                            onFocus={() => setFocused("service")}
                            onBlur={() => setFocused(null)}
                            className="w-full bg-transparent text-white font-bold text-[15px] outline-none appearance-none border-b border-white/10 pb-2 focus:border-white/40 transition-colors cursor-pointer pr-8"
                          >
                            <option className="bg-[#141414]" value="">
                              Select a service...
                            </option>
                            {services.map((s) => (
                              <option key={s} className="bg-[#141414]" value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                          <ChevronDown
                            size={16}
                            className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-white/30"
                          />
                        </div>
                        {focused === "service" && (
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-[2px]"
                            style={{ background: BRAND }}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                          />
                        )}
                      </div>

                      {/* Message */}
                      <div
                        className={`bg-[#141414] p-6 mb-px relative transition-colors duration-200 ${focused === "message" ? "bg-[#1a1a1a]" : ""}`}
                      >
                        <label
                          htmlFor="message"
                          className="block text-[10px] font-black uppercase tracking-[0.2em] mb-3 transition-colors duration-200"
                          style={{ color: focused === "message" ? BRAND : "rgba(255,255,255,0.3)" }}
                        >
                          Project Brief
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          placeholder="Describe your project goals, challenges, or requirements..."
                          onFocus={() => setFocused("message")}
                          onBlur={() => setFocused(null)}
                          className="w-full bg-transparent text-white font-bold text-[14px] outline-none placeholder:text-white/15 border-b border-white/10 pb-2 focus:border-white/40 transition-colors resize-none"
                        />
                        {focused === "message" && (
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-[2px]"
                            style={{ background: BRAND }}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                          />
                        )}
                      </div>

                      {/* Submit Row */}
                      <div className="flex flex-col sm:flex-row items-stretch gap-px bg-white/5">
                        <div className="bg-[#141414] p-6 flex items-center gap-4 flex-1">
                          <Shield size={16} className="text-white/20 shrink-0" />
                          <p className="text-[10px] text-white/25 font-bold leading-relaxed">
                            Your information is encrypted and never shared with third parties.
                          </p>
                        </div>
                        <button
                          type="submit"
                          className="group bg-[#0a0a0a] hover:bg-[#289434] transition-all duration-500 flex items-center gap-6 px-10 py-6 border-l border-white/10 cursor-pointer shrink-0 relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                          <span className="font-black text-[12px] uppercase tracking-[0.25em] text-white relative z-10 whitespace-nowrap">
                            Send Message
                          </span>
                          <ArrowRight
                            size={20}
                            strokeWidth={2.5}
                            className="text-white group-hover:translate-x-1 transition-transform duration-300 relative z-10 shrink-0"
                          />
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Global Office Nodes ── */}
      <section id="offices" className="py-24 border-t border-white/10 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-[1700px] mx-auto px-6 lg:px-16 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/10">
            <div>
              <p className="font-black tracking-[0.2em] uppercase text-[11px] mb-4 flex items-center gap-4 text-white/40">
                <span className="w-8 h-[2px]" style={{ background: BRAND }} />
                Worldwide Presence
              </p>
              <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-none">
                Our <span style={{ color: BRAND }}>Offices</span>
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <Globe size={16} style={{ color: BRAND }} />
              <p className="text-white/30 font-bold text-[13px] max-w-xs">
                5 locations across the US and India, delivering global enterprise solutions.
              </p>
            </div>
          </div>

          {/* Office Tab Selector */}
          <div className="flex flex-wrap gap-px bg-white/5 mb-px border border-white/10 border-b-0">
            {offices.map((o, i) => (
              <button
                key={o.city}
                onClick={() => setActiveOffice(i)}
                className={`px-5 py-3.5 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 relative flex items-center gap-2.5 ${
                  activeOffice === i
                    ? "text-white bg-[#1a1a1a]"
                    : "text-white/30 hover:text-white/60 hover:bg-white/5"
                }`}
              >
                {activeOffice === i && (
                  <motion.div
                    layoutId="office-indicator"
                    className="absolute top-0 left-0 right-0 h-[2px]"
                    style={{ background: BRAND }}
                  />
                )}
                <img
                  src={`https://flagcdn.com/w20/${o.country}.png`}
                  alt=""
                  className="w-4 h-auto grayscale group-hover:grayscale-0 transition-all"
                  style={{ filter: activeOffice === i ? "none" : "grayscale(1)" }}
                />
                {o.city}
                {o.badge && (
                  <span
                    className="text-[8px] px-1.5 py-0.5 font-black"
                    style={{ background: BRAND, color: "white" }}
                  >
                    HQ
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Active Office Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeOffice}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 border-t-0 shadow-2xl overflow-hidden"
            >
              {/* Info block */}
              <div
                className="bg-[#111] p-10 lg:p-12 flex flex-col relative overflow-hidden"
                style={{ borderTop: `3px solid ${offices[activeOffice].color}` }}
              >
                <div
                  className="absolute top-0 right-0 w-48 h-48 blur-[80px] opacity-[0.06] pointer-events-none"
                  style={{ background: offices[activeOffice].color }}
                />
                <div className="flex items-start justify-between mb-8 relative z-10">
                  <div>
                    <h3 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-none mb-2">
                      {offices[activeOffice].city}
                    </h3>
                    <p className="text-white/30 text-[11px] font-black uppercase tracking-[0.2em]">
                      {offices[activeOffice].region}
                    </p>
                    {offices[activeOffice].badge && (
                      <div
                        className="mt-4 text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 inline-block"
                        style={{
                          background: offices[activeOffice].color,
                          color: "white",
                        }}
                      >
                        Global Headquarters
                      </div>
                    )}
                  </div>
                  <img
                    src={`https://flagcdn.com/w40/${offices[activeOffice].country}.png`}
                    alt="Flag"
                    className="w-10 border border-white/20"
                  />
                </div>

                <div className="space-y-6 flex-1 relative z-10">
                  <div className="flex items-start gap-4">
                    <MapPin size={16} style={{ color: BRAND }} className="mt-1 shrink-0" />
                    <p className="text-white/60 text-sm font-bold leading-relaxed whitespace-pre-line">
                      {offices[activeOffice].address}
                    </p>
                  </div>
                  {offices[activeOffice].phone && (
                    <div className="flex items-center gap-4">
                      <Phone size={16} style={{ color: BRAND }} className="shrink-0" />
                      <a
                        href={`tel:${offices[activeOffice].phone}`}
                        className="text-white/60 text-sm font-bold hover:text-white transition-colors"
                      >
                        {offices[activeOffice].phone}
                      </a>
                    </div>
                  )}
                </div>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(offices[activeOffice].address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 mt-10 pt-8 border-t border-white/10 relative z-10"
                >
                  <span
                    className="text-[11px] font-black uppercase tracking-[0.2em] border-b pb-0.5 transition-colors"
                    style={{ color: BRAND, borderColor: BRAND }}
                  >
                    Open in Maps
                  </span>
                  <ArrowRight
                    size={14}
                    strokeWidth={2.5}
                    style={{ color: BRAND }}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>

              {/* Map block — spans 2 cols */}
              <div className="lg:col-span-2 relative overflow-hidden min-h-[340px] group bg-black">
                <div className="absolute inset-0 bg-[#0a0a0a]/40 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
                <iframe
                  title={`${offices[activeOffice].city} Office Map`}
                  src={offices[activeOffice].mapSrc}
                  className="w-full h-full border-none outline-none grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-700"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* All Cities Mini Grid */}
          <div className="mt-px grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/5 border border-white/10 border-t-0">
            {offices.map((o, i) => (
              <button
                key={o.city}
                onClick={() => setActiveOffice(i)}
                className={`group p-6 flex flex-col gap-2 text-left transition-all duration-300 relative overflow-hidden ${
                  activeOffice === i ? "bg-[#1a1a1a]" : "bg-[#0d0d0d] hover:bg-[#131313]"
                }`}
              >
                <div
                  className="absolute bottom-0 left-0 h-[2px] transition-all duration-500"
                  style={{
                    background: o.color,
                    width: activeOffice === i ? "100%" : "0%",
                  }}
                />
                <img
                  src={`https://flagcdn.com/w20/${o.country}.png`}
                  alt={o.region}
                  className="w-5 grayscale group-hover:grayscale-0 transition-all"
                  style={{ filter: activeOffice === i ? "none" : undefined }}
                />
                <p className="text-white font-black uppercase tracking-tight text-[13px]">{o.city}</p>
                <p className="text-white/30 text-[9px] font-black uppercase tracking-widest">{o.region}</p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
