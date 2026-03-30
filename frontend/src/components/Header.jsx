import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Lightbulb,
  Settings,
  Users,
  Code2,
  Phone,
  ArrowRight,
  Terminal,
} from "lucide-react";

/* ─── High-Contrast Tech Colors ─── */
const whoWeAreItems = [
  {
    name: "Who We Are",
    path: "/who-we-are",
    desc: "Corporate mission & core values",
  },
  {
    name: "Our Leaders",
    path: "/who-we-are/our-leaders",
    desc: "Executive command & board",
  },
];

const solutionItems = [
  {
    name: "IT Consulting",
    path: "/our-solution/it-consulting",
    icon: Lightbulb,
    color: "#3ddc84",
    bg: "#088349",
  },
  {
    name: "Managed Services",
    path: "/our-solution/managed-services",
    icon: Settings,
    color: "#3ddc84",
    bg: "#0f172a",
  },
  {
    name: "RPO Solutions",
    path: "/our-solution/rpo",
    icon: Users,
    color: "#3ddc84",
    bg: "#088349",
  },
  {
    name: "Software Development",
    path: "/our-solution/software-development",
    icon: Code2,
    color: "#3ddc84",
    bg: "#0f172a",
  },
];

/* ─── Simple dropdown (Who We Are) ─── */
function SimpleDropdown({ label, items, isActive }) {
  return (
    <div className="relative h-full flex items-center group">
      <button
        className={`flex items-center gap-1.5 text-[13px] font-black uppercase tracking-widest transition-colors focus:outline-none ${
          isActive
            ? "text-[#088349]"
            : "text-[#0f172a] group-hover:text-[#088349]"
        }`}
      >
        {label}
        <ChevronDown
          size={14}
          className="transition-transform duration-200 group-hover:rotate-180"
        />
      </button>

      {isActive && (
        <motion.div
          layoutId="nav-line"
          className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#088349] rounded-t-sm"
        />
      )}

      <div className="absolute top-full left-0 w-full h-4" />

      <div className="absolute top-[calc(100%+16px)] left-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-200 z-50">
        <div className="bg-white rounded-[1rem] border border-slate-200 shadow-2xl overflow-hidden p-2">
          {items.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col px-4 py-3.5 rounded-xl transition-all ${
                  isActive
                    ? "bg-[#f8fafc] border border-[#088349]/20"
                    : "text-[#0f172a] hover:bg-slate-50 border border-transparent hover:border-slate-200"
                }`
              }
            >
              <span
                className={`font-black text-sm ${isActive ? "text-[#088349]" : "text-[#0f172a]"}`}
              >
                {item.name}
              </span>
              <span className="text-[10px] text-slate-400 mt-1 uppercase font-bold tracking-widest">
                {item.desc}
              </span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Mega dropdown (Solutions) ─── */
function SolutionsMegaDropdown({ isActive }) {
  return (
    <div className="relative h-full flex items-center group">
      <button
        className={`flex items-center gap-1.5 text-[13px] font-black uppercase tracking-widest transition-colors focus:outline-none ${
          isActive
            ? "text-[#088349]"
            : "text-[#0f172a] group-hover:text-[#088349]"
        }`}
      >
        Solutions
        <ChevronDown
          size={14}
          className="transition-transform duration-200 group-hover:rotate-180"
        />
      </button>

      {isActive && (
        <motion.div
          layoutId="nav-line"
          className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#088349] rounded-t-sm"
        />
      )}

      <div className="absolute top-full left-0 w-full h-4" />

      <div className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 w-[520px] opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-200 z-50">
        <div className="bg-white rounded-[1.5rem] border border-slate-200 shadow-2xl overflow-hidden flex">
          <div className="w-1/3 bg-[#0f172a] p-6 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#088349] blur-[50px] opacity-20" />
            <div className="relative z-10">
              <Terminal size={24} className="text-[#3ddc84] mb-4" />
              <h3 className="text-white font-black text-xl mb-2">
                Systems & Capabilities
              </h3>
              <p className="text-slate-400 text-xs font-medium leading-relaxed">
                Enterprise-grade modules designed for absolute operational
                scale.
              </p>
            </div>
            <Link
              to="/our-solution"
              className="relative z-10 inline-flex items-center gap-2 text-[#3ddc84] text-[10px] font-black uppercase tracking-[0.2em] group/link"
            >
              View All{" "}
              <ArrowRight
                size={14}
                className="group-hover/link:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          <div className="w-2/3 p-4 grid grid-cols-2 gap-2">
            {solutionItems.map(({ name, path, icon: Icon, color, bg }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive: a }) =>
                  `flex flex-col gap-3 p-4 rounded-xl transition-all group/item border ${a ? "bg-slate-50 border-[#088349]/30 shadow-sm" : "border-transparent hover:border-slate-200 hover:bg-slate-50"}`
                }
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 shadow-md group-hover/item:scale-110 transition-transform"
                  style={{ background: bg }}
                >
                  <Icon size={18} style={{ color }} strokeWidth={2} />
                </div>
                <p className="text-[#0f172a] text-[13px] font-black leading-tight group-hover/item:text-[#088349] transition-colors">
                  {name}
                </p>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Mobile Accordion ─── */
function MobileAccordion({ label, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-100">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-6 py-4 text-left focus:outline-none"
      >
        <span className="text-[#0f172a] font-black text-[13px] uppercase tracking-widest">
          {label}
        </span>
        <ChevronDown
          size={16}
          className={`text-slate-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4 space-y-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Main Header ─── */
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const close = () => setIsOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    close();
  }, [location.pathname]);

  const whoWeAreActive = location.pathname.startsWith("/who-we-are");
  const solutionsActive = location.pathname.startsWith("/our-solution");

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-md border-b border-slate-200"
            : "bg-white border-b border-slate-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-[80px] flex items-center justify-between">
          <Link
            to="/"
            onClick={close}
            className="shrink-0 flex items-center h-[80px] py-4"
          >
            <img
              src="photos/logo.png"
              width={100}
              alt="TEK Inspirations LLC"
              className="h-full w-auto max-h-12 object-contain hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center h-full gap-8">
            <NavLink to="/" end className="relative h-full flex items-center">
              {({ isActive }) => (
                <>
                  <span
                    className={`text-[13px] font-black uppercase tracking-widest transition-colors ${isActive ? "text-[#088349]" : "text-[#0f172a] hover:text-[#088349]"}`}
                  >
                    Home
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-line"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#088349] rounded-t-sm"
                    />
                  )}
                </>
              )}
            </NavLink>

            <div className="relative h-full flex items-center">
              <SimpleDropdown
                label="Who We Are"
                items={whoWeAreItems}
                isActive={whoWeAreActive}
              />
            </div>

            <div className="relative h-full flex items-center">
              <SolutionsMegaDropdown isActive={solutionsActive} />
            </div>

            <NavLink
              to="/gallery"
              className="relative h-full flex items-center"
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`text-[13px] font-black uppercase tracking-widest transition-colors ${isActive ? "text-[#088349]" : "text-[#0f172a] hover:text-[#088349]"}`}
                  >
                    Gallery
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-line"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#088349] rounded-t-sm"
                    />
                  )}
                </>
              )}
            </NavLink>

            <div className="w-px h-6 bg-slate-300 mx-1" />

            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold text-[13px] uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#0f172a]/20 hover:-translate-y-0.5 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#088349]/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <Phone size={14} className="text-[#3ddc84]" />
              Initialize Contact
            </NavLink>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-11 h-11 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center text-[#0f172a] hover:border-[#088349]/40 hover:text-[#088349] transition-all focus:outline-none focus:ring-2 focus:ring-[#088349]/50"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-sm lg:hidden"
              onClick={close}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[300px] max-w-full flex flex-col bg-white border-l border-slate-100 shadow-2xl lg:hidden overflow-y-auto"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 h-[80px]">
                <Link to="/" onClick={close}>
                  <img
                    src="https://www.tekinspirations.com/wp-content/uploads/2022/03/cropped-tek-logo-new-e1648224691993.png"
                    alt="TEK Inspirations"
                    className="h-10 w-auto object-contain"
                  />
                </Link>
                <button
                  onClick={close}
                  className="w-10 h-10 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-600 hover:text-[#088349] transition-colors focus:outline-none"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 py-4">
                <NavLink
                  to="/"
                  end
                  onClick={close}
                  className={({ isActive }) =>
                    `flex items-center px-6 py-4 text-[13px] font-black uppercase tracking-widest border-b border-slate-100 transition-colors ${
                      isActive
                        ? "text-[#088349] bg-[#088349]/5"
                        : "text-[#0f172a] hover:text-[#088349] hover:bg-slate-50"
                    }`
                  }
                >
                  Home
                </NavLink>

                <MobileAccordion label="Who We Are">
                  {whoWeAreItems.map(({ name, path }) => (
                    <NavLink
                      key={path}
                      to={path}
                      onClick={close}
                      className={({ isActive }) =>
                        `flex items-center gap-2.5 px-3 py-3 rounded-xl text-[12px] font-bold uppercase tracking-wider transition-colors ${
                          isActive
                            ? "text-[#088349] bg-[#088349]/8"
                            : "text-slate-600 hover:text-[#088349] hover:bg-slate-50"
                        }`
                      }
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#088349]/40 shrink-0" />
                      {name}
                    </NavLink>
                  ))}
                </MobileAccordion>

                <MobileAccordion label="Solutions">
                  <NavLink
                    to="/our-solution"
                    onClick={close}
                    className={({ isActive }) =>
                      `flex items-center gap-2.5 px-3 py-3 w-[calc(100%-8px)] rounded-xl text-[12px] font-bold uppercase tracking-wider transition-colors mb-2 ${
                        isActive
                          ? "text-[#088349] bg-[#088349]/8"
                          : "text-slate-600 hover:text-[#088349] hover:bg-slate-50"
                      }`
                    }
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />{" "}
                    Unified Capabilities
                  </NavLink>
                  {solutionItems.map(
                    ({ name, path, icon: Icon, color, bg }) => (
                      <NavLink
                        key={path}
                        to={path}
                        onClick={close}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-3 py-3 rounded-xl transition-colors ${
                            isActive ? "bg-slate-50" : "hover:bg-slate-50"
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                              style={{ background: bg }}
                            >
                              <Icon
                                size={14}
                                style={{ color }}
                                strokeWidth={2}
                              />
                            </div>
                            <span
                              className={`${isActive ? "text-[#088349]" : "text-[#0f172a]"} text-[13px] font-bold`}
                            >
                              {name}
                            </span>
                          </>
                        )}
                      </NavLink>
                    ),
                  )}
                </MobileAccordion>

                <NavLink
                  to="/gallery"
                  onClick={close}
                  className={({ isActive }) =>
                    `flex items-center px-6 py-4 text-[13px] font-black uppercase tracking-widest border-b border-slate-100 transition-colors ${
                      isActive
                        ? "text-[#088349] bg-[#088349]/5"
                        : "text-[#0f172a] hover:text-[#088349] hover:bg-slate-50"
                    }`
                  }
                >
                  Gallery
                </NavLink>
              </div>

              {/* Footer CTA */}
              <div className="p-6 border-t border-slate-100 bg-slate-50">
                <NavLink
                  to="/contact"
                  onClick={close}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold text-[13px] uppercase tracking-wider transition-all active:scale-95 shadow-xl shadow-[#0f172a]/20"
                >
                  <Phone size={14} className="text-[#3ddc84]" /> Initialize
                  Contact
                </NavLink>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
