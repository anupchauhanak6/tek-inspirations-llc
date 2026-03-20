import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

const MotionNav = motion.nav;

// Helper component for Desktop Dropdown to reuse
const DropdownDesktop = ({ label, items, baseUrl, isActiveParent }) => (
  <div className="relative h-full flex items-center group cursor-pointer">
    <span
      className={`flex items-center gap-1 text-[16px] font-medium tracking-wide transition-colors duration-300 ${isActiveParent ? "text-[#088349]" : "text-slate-600 group-hover:text-[#088349]"}`}
    >
      {label}
      <motion.div className="transition-transform duration-200 group-hover:rotate-90">
        <ChevronRight
          size={16}
          className={
            isActiveParent
              ? "text-[#088349]"
              : "text-slate-400 group-hover:text-[#088349]"
          }
        />
      </motion.div>
      {isActiveParent && (
        <motion.div
          layoutId="underline"
          className="absolute left-0 bottom-4 w-full h-0.75 bg-[#088349] rounded-t-md"
        />
      )}
    </span>

    {/* Invisible bridge for hover */}
    <div className="absolute top-1/2 left-0 w-full h-10 z-40"></div>

    {/* Dropdown Menu */}
    <div className="absolute top-[80%] left-0 w-70 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-3 group-hover:translate-y-0 z-50">
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden relative">
        {/* Top green accent border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#088349] to-emerald-400"></div>
        <div className="py-3 flex flex-col">
          {items.map((item, index) => (
            <NavLink
              key={index}
              to={`${baseUrl}/${item.path}`}
              className={({ isActive }) =>
                `block px-6 py-3.5 text-[15px] font-semibold transition-colors ${
                  isActive
                    ? "text-[#088349] bg-[#088349]/5 border-l-[3px] border-l-[#088349]"
                    : "text-slate-700 hover:text-[#088349] hover:bg-slate-50 border-l-[3px] border-l-transparent"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  </div>
);

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const mobileNavLinkClass = ({ isActive }) =>
    `flex items-center px-6 py-4 text-[17px] font-semibold transition-all duration-200 border-b border-gray-100/60 ${
      isActive
        ? "text-[#088349] bg-slate-50"
        : "text-slate-700 hover:text-[#088349] hover:bg-slate-50"
    }`;

  const ctaClass =
    "px-6 py-2.5 rounded-full bg-[#088349] text-white text-[15px] font-bold tracking-wide hover:bg-[#066a3a] hover:shadow-lg hover:shadow-[#088349]/30 active:scale-95 transition-all outline-none";

  return (
    <header
      className={`z-50 fixed w-full top-0 transition-all duration-400 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white border-b border-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center shrink-0 z-50 h-full py-4"
            onClick={() => setIsOpen(false)}
          >
            <img
              src="https://www.tekinspirations.com/wp-content/uploads/2022/03/cropped-tek-logo-new-e1648224691993.png"
              alt="TEK Inspirations"
              className="h-full w-auto transition-transform hover:scale-105 duration-300 max-h-12.5"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(34%) sepia(74%) saturate(1004%) hue-rotate(122deg) brightness(96%) contrast(94%)",
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 h-full">
            <div className="flex space-x-8 items-center h-full relative">
              <NavLink to="/" className="relative flex items-center h-full">
                {({ isActive }) => (
                  <span
                    className={`relative flex items-center gap-1 text-[16px] font-medium tracking-wide transition-colors duration-300 cursor-pointer h-full ${isActive ? "text-[#088349]" : "text-slate-600 hover:text-[#088349]"}`}
                  >
                    Home
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 bottom-4 w-full h-0.75 bg-[#088349] rounded-t-md"
                      />
                    )}
                  </span>
                )}
              </NavLink>

              <NavLink
                to="/who-we-are"
                className="relative flex items-center h-full"
              >
                <DropdownDesktop
                  label="Who We Are"
                  baseUrl="/who-we-are"
                  isActiveParent={location.pathname.includes("/who-we-are")}
                  items={[{ name: "Our Leaders", path: "our-leaders" }]}
                />
              </NavLink>

              <NavLink
                to="/our-solution"
                className="relative flex items-center h-full"
              >
                <DropdownDesktop
                  label="Our Solutions"
                  baseUrl="/our-solution"
                  isActiveParent={location.pathname.includes("/our-solution")}
                  items={[
                    { name: "IT Consulting", path: "it-consulting" },
                    { name: "Managed Services", path: "managed-services" },
                    { name: "Recruitment Process Outsourcing", path: "rpo" },
                    {
                      name: "Software Development",
                      path: "software-development",
                    },
                  ]}
                />
              </NavLink>

              <NavLink
                to="/gallery"
                className="relative flex items-center h-full"
              >
                {({ isActive }) => (
                  <span
                    className={`relative flex items-center gap-1 text-[16px] font-medium tracking-wide transition-colors duration-300 cursor-pointer h-full ${isActive ? "text-[#088349]" : "text-slate-600 hover:text-[#088349]"}`}
                  >
                    Gallery
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 bottom-4 w-full h-0.75 bg-[#088349] rounded-t-md"
                      />
                    )}
                  </span>
                )}
              </NavLink>
            </div>

            {/* Vertical Divider */}
            <div className="h-8 w-px bg-slate-200 mx-2"></div>

            <div className="pl-2">
              <NavLink to="/contact" className={ctaClass}>
                Contact Us
              </NavLink>
            </div>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex items-center justify-center p-2.5 rounded-xl text-slate-700 hover:text-[#088349] hover:bg-[#088349]/10 active:bg-[#088349]/20 transition-colors focus:outline-none z-50"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <MotionNav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed top-20 left-0 w-full bg-white border-t border-gray-100 shadow-2xl overflow-y-auto z-40 pb-32"
            style={{ height: "calc(100vh - 80px)" }}
          >
            <div className="flex flex-col py-2">
              <NavLink
                to="/"
                className={mobileNavLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>

              {/* Mobile Who We Are Area */}
              <div className="border-b border-gray-100/60">
                <NavLink
                  to="/who-we-are"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between w-full px-6 py-4 text-[17px] font-semibold transition-all duration-200 ${isActive || location.pathname.includes("/who-we-are") ? "text-[#088349]" : "text-slate-700 hover:text-[#088349]"}`
                  }
                >
                  Who We Are
                </NavLink>

                <div className="bg-slate-50/50">
                  <div className="flex flex-col py-2 pl-6 pr-4">
                    <NavLink
                      to="/who-we-are/our-leaders"
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `py-3.5 pl-6 text-[16px] font-semibold rounded-xl transition-colors ${isActive ? "text-[#088349] bg-[#088349]/10" : "text-slate-600 hover:text-[#088349] hover:bg-slate-100"}`
                      }
                    >
                      Our Leaders
                    </NavLink>
                  </div>
                </div>
              </div>

              {/* Mobile Our Solutions Area */}
              <div className="border-b border-gray-100/60">
                <NavLink
                  to="/our-solution"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between w-full px-6 py-4 text-[17px] font-semibold transition-all duration-200 ${isActive || location.pathname.includes("/our-solution") ? "text-[#088349]" : "text-slate-700 hover:text-[#088349]"}`
                  }
                >
                  Our Solutions
                </NavLink>

                <div className="bg-slate-50/50">
                  <div className="flex flex-col py-2 pl-6 pr-4 space-y-1">
                    <NavLink
                      to="/our-solution/it-consulting"
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `py-3.5 pl-6 text-[16px] font-semibold rounded-xl transition-colors ${isActive ? "text-[#088349] bg-[#088349]/10" : "text-slate-600 hover:text-[#088349] hover:bg-slate-100"}`
                      }
                    >
                      IT Consulting
                    </NavLink>
                    <NavLink
                      to="/our-solution/managed-services"
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `py-3.5 pl-6 text-[16px] font-semibold rounded-xl transition-colors ${isActive ? "text-[#088349] bg-[#088349]/10" : "text-slate-600 hover:text-[#088349] hover:bg-slate-100"}`
                      }
                    >
                      Managed Services
                    </NavLink>
                    <NavLink
                      to="/our-solution/rpo"
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `py-3.5 pl-6 text-[16px] font-semibold rounded-xl transition-colors ${isActive ? "text-[#088349] bg-[#088349]/10" : "text-slate-600 hover:text-[#088349] hover:bg-slate-100"}`
                      }
                    >
                      Recruitment Process Outsourcing
                    </NavLink>
                    <NavLink
                      to="/our-solution/software-development"
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `py-3.5 pl-6 text-[16px] font-semibold rounded-xl transition-colors ${isActive ? "text-[#088349] bg-[#088349]/10" : "text-slate-600 hover:text-[#088349] hover:bg-slate-100"}`
                      }
                    >
                      Software Development
                    </NavLink>
                  </div>
                </div>
              </div>

              <NavLink
                to="/gallery"
                className={mobileNavLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </NavLink>

              <div className="pt-10 pb-6 w-full px-6 mt-auto">
                <NavLink
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full px-6 py-4 rounded-xl bg-[#088349] text-white text-[17px] font-bold tracking-wide hover:bg-[#066a3a] active:scale-95 transition-all shadow-xl shadow-[#088349]/30"
                >
                  Contact Us
                </NavLink>
              </div>
            </div>
          </MotionNav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
