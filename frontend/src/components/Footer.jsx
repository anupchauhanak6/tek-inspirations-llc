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
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 w-full mt-auto border-t border-slate-900 border-t-emerald-600/20 shadow-[0_-10px_40px_rgba(0,0,0,0.3)] relative overflow-hidden">
      {/* Subtle emerald glow in the background as a premium touch */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-800/10 blur-[120px] rounded-full point-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 mb-12 relative z-10">
        {/* Logo & Description (Takes more horizontal space on wide screens) */}
        <div className="col-span-1 md:col-span-12 lg:col-span-5 flex flex-col">
          <Link to="/" className="mb-6 inline-block">
            <img
              src="https://www.tekinspirations.com/wp-content/uploads/2022/03/cropped-tek-logo-new-e1648224691993.png"
              alt="TEK Inspirations"
              className="h-10 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>
          <p className="text-slate-400 text-[15px] leading-relaxed mb-6 pr-4">
            Driving digital transformation with cutting-edge IT solutions,
            expert consulting, and enterprise software services designed to help
            scale your business in a competitive global market.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-[#10b981] transition-all duration-300 shadow-lg border border-slate-800 hover:border-[#10b981] hover:-translate-y-1"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-[#10b981] transition-all duration-300 shadow-lg border border-slate-800 hover:border-[#10b981] hover:-translate-y-1"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-[#10b981] transition-all duration-300 shadow-lg border border-slate-800 hover:border-[#10b981] hover:-translate-y-1"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-[#10b981] transition-all duration-300 shadow-lg border border-slate-800 hover:border-[#10b981] hover:-translate-y-1"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-span-1 md:col-span-6 lg:col-span-3">
          <h3 className="text-lg font-bold mb-6 text-white tracking-wide">
            Quick Links
          </h3>
          <ul className="flex flex-col space-y-3.5 m-0 p-0 list-none">
            <li>
              <Link
                to="/"
                className="group flex items-center text-slate-400 hover:text-[#10b981] transition-colors duration-200"
              >
                <span className="w-2 h-0.5 bg-slate-700 mr-3 group-hover:bg-[#10b981] group-hover:w-4 transition-all duration-300"></span>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="group flex items-center text-slate-400 hover:text-[#10b981] transition-colors duration-200"
              >
                <span className="w-2 h-0.5 bg-slate-700 mr-3 group-hover:bg-[#10b981] group-hover:w-4 transition-all duration-300"></span>
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="group flex items-center text-slate-400 hover:text-[#10b981] transition-colors duration-200"
              >
                <span className="w-2 h-0.5 bg-slate-700 mr-3 group-hover:bg-[#10b981] group-hover:w-4 transition-all duration-300"></span>
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="group flex items-center text-slate-400 hover:text-[#10b981] transition-colors duration-200"
              >
                <span className="w-2 h-0.5 bg-slate-700 mr-3 group-hover:bg-[#10b981] group-hover:w-4 transition-all duration-300"></span>
                Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-1 md:col-span-6 lg:col-span-4">
          <h3 className="text-lg font-bold mb-6 text-white tracking-wide">
            Get in Touch
          </h3>
          <ul className="flex flex-col space-y-5 text-[15px] m-0 p-0 list-none">
            <li className="flex items-start group">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-[#10b981]/50 group-hover:bg-[#10b981]/10 transition-colors mr-4 mt-0.5">
                <Mail className="w-4 h-4 text-[#10b981]" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold mb-1">
                  Email Us
                </p>
                <p className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  info@tekinspirations.com
                </p>
              </div>
            </li>
            <li className="flex items-start group">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-[#10b981]/50 group-hover:bg-[#10b981]/10 transition-colors mr-4 mt-0.5">
                <Phone className="w-4 h-4 text-[#10b981]" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold mb-1">Call Us</p>
                <p className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  +1 123 456 7890
                </p>
              </div>
            </li>
            <li className="flex items-start group">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-[#10b981]/50 group-hover:bg-[#10b981]/10 transition-colors mr-4 mt-0.5">
                <MapPin className="w-4 h-4 text-[#10b981]" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold mb-1">
                  Location
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Dallas, Texas
                  <br />
                  United States
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="border-t border-slate-800/80 pt-6 px-4 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-white font-medium">TEK Inspirations LLC</span>
            . All rights reserved.
          </p>
          <div className="flex space-x-6">
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
