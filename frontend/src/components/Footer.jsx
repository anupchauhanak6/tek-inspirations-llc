import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";

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
    <footer className="bg-[#0d1f15] text-slate-400">
      {/* Top accent */}
      <div className="h-px w-full"
        style={{ background: "linear-gradient(to right, transparent, #088349, #3ddc84, #088349, transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/8">

          {/* Brand */}
          <div className="md:col-span-12 lg:col-span-5">
            <Link to="/">
              <img
                src="https://www.tekinspirations.com/wp-content/uploads/2022/03/cropped-tek-logo-new-e1648224691993.png"
                alt="TEK Inspirations"
                className="h-10 w-auto mb-5"
                style={{ filter: "brightness(0) saturate(100%) invert(84%) sepia(43%) saturate(516%) hue-rotate(91deg) brightness(101%) contrast(94%)" }}
              />
            </Link>
            <p className="text-slate-400 text-[15px] leading-relaxed mb-7 max-w-xs">
              Driving digital transformation with cutting-edge IT solutions, expert consulting, and enterprise software designed to scale your business globally.
            </p>

            {/* Newsletter */}
            <div className="mb-7">
              <p className="text-white text-sm font-semibold mb-3">Stay Updated</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Enter your email"
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-[#088349]/50 transition-colors" />
                <button className="px-4 py-2.5 rounded-xl text-white transition-all hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg, #088349, #0aad60)" }}>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 bg-white/5 text-slate-500 hover:text-white hover:bg-[#088349] hover:border-[#088349] transition-all duration-200 hover:-translate-y-0.5">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-6 lg:col-span-2">
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(({ name, path }) => (
                <li key={name}>
                  <Link to={path}
                    className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-[14px]">
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-[#088349] transition-colors" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="md:col-span-6 lg:col-span-2">
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Solutions</h3>
            <ul className="space-y-3">
              {solutions.map(({ name, path }) => (
                <li key={name}>
                  <Link to={path}
                    className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-[14px]">
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-[#088349] transition-colors" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-12 lg:col-span-3">
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Contact</h3>
            <ul className="space-y-4">
              {[
                { icon: Mail,   label: "Email",    value: "info@tekinspirations.com" },
                { icon: Phone,  label: "Phone",    value: "+1 123 456 7890" },
                { icon: MapPin, label: "Location", value: "Frisco, Texas, USA" },
              ].map(({ icon: Icon, label, value }) => (
                <li key={label} className="group flex items-start gap-3">
                  <div className="mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 border border-white/8 group-hover:border-[#088349]/40 group-hover:bg-[#088349]/10 transition-all shrink-0">
                    <Icon size={14} className="text-[#088349]" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold mb-0.5">{label}</p>
                    <p className="text-slate-400 text-sm">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-slate-400 font-semibold">TEK Inspirations LLC</span>. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
