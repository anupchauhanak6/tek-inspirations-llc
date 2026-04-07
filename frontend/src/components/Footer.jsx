import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Globe,
} from "lucide-react";

/* ─── Logo brand colors ─── */
const BRAND = "#289434"; // Logo Forest Green
const DARK = "#14542c"; // Logo Dark Ivy

const solutions = [
  { name: "IT Consulting", path: "/our-solutions/it-consulting" },
  { name: "Managed Services", path: "/our-solutions/managed-services" },
  { name: "RPO Solutions", path: "/our-solutions/rpo" },
  { name: "Software Development", path: "/our-solutions/software-development" },
];

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Who We Are", path: "/who-we-are" },
  { name: "Our Leaders", path: "/who-we-are/our-leaders" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-slate-400 relative overflow-hidden font-sans border-t border-white/10">
      {/* Decorative background elements */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.02]"
        style={{
          background: `radial-gradient(circle, ${BRAND}, transparent 70%)`,
          filter: "blur(80px)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] opacity-[0.02]"
        style={{
          background: `radial-gradient(circle, ${BRAND}, transparent 70%)`,
          filter: "blur(60px)",
        }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${BRAND} 50%, transparent 100%)`,
        }}
      />

      <div className="max-w-[1700px] mx-auto px-6 lg:px-16 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.06]">
          {/* Brand Column */}
          <div className="md:col-span-12 lg:col-span-5 pr-0 lg:pr-12">
            <Link to="/" className="inline-block mb-8 group">
              <img
                src="photos/logo.png"
                alt="TEK Inspirations"
                className="h-10 w-auto object-contain brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:saturate-100 transition-all duration-300"
              />
            </Link>
            <p className="text-white/40 text-[13px] leading-relaxed mb-10 max-w-sm">
              Driving digital transformation with cutting-edge solutions, expert
              consulting, and enterprise systems designed to scale your business
              globally.
            </p>

            {/* Newsletter */}
            <div className="mb-10">
              <p className="text-white text-[11px] font-black uppercase tracking-widest mb-4 flex items-center gap-3">
                <Globe size={14} style={{ color: BRAND }} />
                Stay Updated
              </p>
              <div className="flex bg-[#1e2020] border border-white/10 p-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent px-4 py-3 text-[13px] text-white placeholder-white/30 focus:outline-none focus:bg-white/5 transition-all"
                />
                <button
                  className="px-6 py-3 text-white font-black uppercase tracking-widest text-[11px] bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center gap-2 border border-transparent hover:border-white/20"
                  style={{ color: BRAND }}
                >
                  Subscribe
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center border border-white/10 bg-transparent text-white/40 hover:text-white transition-all duration-300 hover:bg-white/5"
                  style={{ borderColor: "rgba(255,255,255,0.1)" }}
                >
                  <Icon
                    size={15}
                    className="group-hover:text-white transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-6 lg:col-span-2">
            <h3 className="text-white font-black text-[11px] uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
              <span className="w-[2px] h-3" style={{ background: BRAND }} />
              Company
            </h3>
            <ul className="space-y-4">
              {quickLinks.map(({ name, path }) => (
                <li key={name}>
                  <Link
                    to={path}
                    className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors text-[12px] font-bold tracking-wide uppercase"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:scale-150 group-hover:bg-[#289434] transition-all" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="md:col-span-6 lg:col-span-2">
            <h3 className="text-white font-black text-[11px] uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
              <span className="w-[2px] h-3" style={{ background: BRAND }} />
              Solutions
            </h3>
            <ul className="space-y-4">
              {solutions.map(({ name, path }) => (
                <li key={name}>
                  <Link
                    to={path}
                    className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors text-[12px] font-bold tracking-wide uppercase"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:scale-150 group-hover:bg-[#289434] transition-all" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-12 lg:col-span-3">
            <h3 className="text-white font-black text-[11px] uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
              <span className="w-[2px] h-3" style={{ background: BRAND }} />
              Contact
            </h3>
            <ul className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@tekinspirations.com",
                },
                { icon: Phone, label: "Phone", value: "+1 123 456 7890" },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Frisco, Texas, USA",
                },
              ].map(({ icon: Icon, label, value }) => (
                <li key={label} className="group flex items-start gap-4">
                  <div className="mt-0.5 w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-white/30 group-hover:bg-white/5 transition-all shrink-0">
                    <Icon size={16} style={{ color: BRAND }} />
                  </div>
                  <div>
                    <p className="text-white text-[10px] font-black mb-1 uppercase tracking-widest">
                      {label}
                    </p>
                    <p className="text-white/50 text-[12px]">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-white/40 uppercase tracking-widest font-bold font-sans">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-white">TEK Inspirations LLC</span>.{" "}
            <span className="opacity-50">All rights reserved.</span>
          </p>
          <div className="flex gap-8">
            <Link
              to="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
