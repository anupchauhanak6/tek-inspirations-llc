import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Globe } from "lucide-react";

const solutions = [
  { name: "IT Consulting",        path: "/our-solution/it-consulting" },
  { name: "Managed Services",     path: "/our-solution/managed-services" },
  { name: "RPO Solutions",        path: "/our-solution/rpo" },
  { name: "Software Development", path: "/our-solution/software-development" },
];

const quickLinks = [
  { name: "Home",        path: "/" },
  { name: "Who We Are",  path: "/who-we-are" },
  { name: "Our Leaders", path: "/who-we-are/our-leaders" },
  { name: "Gallery",     path: "/gallery" },
  { name: "Contact",     path: "/contact" },
];

const socials = [
  { icon: Facebook,  href: "#", label: "Facebook" },
  { icon: Twitter,   href: "#", label: "Twitter" },
  { icon: Linkedin,  href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

function Footer() {
  return (
    <footer className="bg-[#022c22] text-slate-400 relative overflow-hidden font-sans border-t border-[#064e3b]">
      {/* Decorative background elements using Emerald green */}
      <div className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.03]"
        style={{ background: "radial-gradient(circle, #10b981, transparent 60%)", filter: "blur(80px)" }} />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] opacity-[0.02]"
        style={{ background: "radial-gradient(circle, #059669, transparent 60%)", filter: "blur(60px)" }} />

      {/* Top accent line */}
      <div className="h-[2px] w-full"
        style={{ background: "linear-gradient(to right, transparent, #059669, #10b981, #059669, transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-white/[0.06]">

          {/* Brand Column */}
          <div className="md:col-span-12 lg:col-span-5">
            <Link to="/" className="inline-block mb-6 group">
              <img
                src="photos/logo.png"
                alt="TEK Inspirations"
                className="h-12 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-slate-400 text-[15px] leading-relaxed mb-8 max-w-sm">
              Driving digital transformation with cutting-edge solutions, expert consulting, and enterprise systems designed to scale your business globally.
            </p>

            {/* Newsletter */}
            <div className="mb-8">
              <p className="text-white text-sm font-bold mb-3 flex items-center gap-2">
                <Globe size={14} className="text-[#10b981]" />
                Stay Updated
              </p>
              <div className="flex gap-2">
                <input type="email" placeholder="Enter your email"
                  className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded px-4 py-3 text-sm text-slate-300 placeholder-slate-500 focus:outline-none focus:border-[#10b981]/50 focus:bg-white/[0.06] transition-all" />
                <button className="px-5 py-3 rounded text-white font-bold transition-all hover:-translate-y-0.5 shadow-md hover:shadow-[#10b981]/20 active:scale-95"
                  style={{ background: "linear-gradient(135deg, #059669, #047857)" }}>
                  <ArrowRight size={16} strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-10 h-10 rounded flex items-center justify-center border border-white/[0.08] bg-white/[0.03] text-slate-400 hover:text-white hover:bg-[#059669] hover:border-[#059669] transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-[#059669]/20">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-6 lg:col-span-2">
            <h3 className="text-white font-bold text-xs uppercase tracking-[0.15em] mb-6 flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#059669] rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-3.5">
              {quickLinks.map(({ name, path }) => (
                <li key={name}>
                  <Link to={path}
                    className="group flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors text-[14px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-[#10b981] group-hover:shadow-[0_0_6px_#10b981] transition-all" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="md:col-span-6 lg:col-span-2">
            <h3 className="text-white font-bold text-xs uppercase tracking-[0.15em] mb-6 flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#059669] rounded-full" />
              Solutions
            </h3>
            <ul className="space-y-3.5">
              {solutions.map(({ name, path }) => (
                <li key={name}>
                  <Link to={path}
                    className="group flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors text-[14px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-[#10b981] group-hover:shadow-[0_0_6px_#10b981] transition-all" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-12 lg:col-span-3">
            <h3 className="text-white font-bold text-xs uppercase tracking-[0.15em] mb-6 flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#059669] rounded-full" />
              Contact
            </h3>
            <ul className="space-y-5">
              {[
                { icon: Mail,   label: "Email",    value: "info@tekinspirations.com" },
                { icon: Phone,  label: "Phone",    value: "+1 123 456 7890" },
                { icon: MapPin, label: "Location", value: "Frisco, Texas, USA" },
              ].map(({ icon: Icon, label, value }) => (
                <li key={label} className="group flex items-start gap-3.5">
                  <div className="mt-0.5 w-9 h-9 rounded flex items-center justify-center bg-white/[0.04] border border-white/[0.08] group-hover:border-[#059669]/40 group-hover:bg-[#059669]/10 transition-all shrink-0">
                    <Icon size={16} className="text-[#10b981]" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold mb-0.5 uppercase tracking-widest">{label}</p>
                    <p className="text-slate-400 text-sm">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-7 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-slate-300 font-semibold">TEK Inspirations LLC</span>. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-[#10b981] transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-[#10b981] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
