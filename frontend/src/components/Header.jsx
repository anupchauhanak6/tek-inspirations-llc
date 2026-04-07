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
  ArrowRight,
  Terminal,
} from "lucide-react";

/* ─── Brand tokens (extracted from logo) ─── */
const BRAND = "#289434"; // Logo Forest Green
const DARK = "#14542c"; // Logo Dark Ivy

const navLinks = [
  { label: "Home", to: "/", end: true },
  { label: "Gallery", to: "/gallery", end: false },
];

const whoWeAreItems = [
  { name: "Who We Are", path: "/who-we-are", desc: "Mission & core values" },
  {
    name: "Our Leaders",
    path: "/who-we-are/our-leaders",
    desc: "Executive command & board",
  },
];

const solutionItems = [
  {
    name: "IT Consulting",
    path: "/our-solutions/it-consulting",
    icon: Lightbulb,
    tag: "Advisory",
  },
  {
    name: "Managed Services",
    path: "/our-solutions/managed-services",
    icon: Settings,
    tag: "Operations",
  },
  {
    name: "RPO Solutions",
    path: "/our-solutions/rpo",
    icon: Users,
    tag: "Staffing",
  },
  {
    name: "Software Development",
    path: "/our-solutions/software-development",
    icon: Code2,
    tag: "Engineering",
  },
];

/* ════════════════════════════════════════════
   WHO WE ARE – simple dropdown
════════════════════════════════════════════ */
function WhoWeAreDropdown({ isActive }) {
  return (
    <div className="relative h-full flex items-center group">
      {/* Trigger */}
      <button
        className="flex items-center gap-1 text-[11px] font-black uppercase tracking-widest h-full focus:outline-none transition-colors"
        style={{ color: isActive ? BRAND : "rgba(255,255,255,0.65)" }}
      >
        Who We Are
        <ChevronDown
          size={12}
          className="mt-px transition-transform duration-200 group-hover:rotate-180"
        />
      </button>

      {/* Active underline */}
      {isActive && (
        <motion.span
          layoutId="nav-bar"
          className="absolute bottom-0 left-0 right-0 h-[2px]"
          style={{ background: BRAND }}
        />
      )}

      {/* Invisible bridge so hover persists */}
      <div className="absolute top-full left-0 right-0 h-4 invisible" />

      {/* Dropdown panel */}
      <div
        className="absolute top-[calc(100%+1px)] left-0 w-64
                   opacity-0 invisible pointer-events-none
                   group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto
                   translate-y-3 group-hover:translate-y-0
                   transition-all duration-200 z-[60]"
      >
        <div className="bg-[#1e2020] border border-white/[0.15] shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
          {/* Panel header */}
          <div className="px-5 py-3 border-b border-white/[0.12] flex items-center gap-3">
            <Terminal size={14} style={{ color: BRAND }} />
            <span className="text-white/50 text-[10px] font-black uppercase tracking-[0.2em]">
              Company
            </span>
          </div>
          {/* Links */}
          <div className="p-2">
            {whoWeAreItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="group/item flex flex-col px-4 py-3.5 relative overflow-hidden transition-colors hover:bg-white/[0.08]"
              >
                {({ isActive: a }) => (
                  <>
                    {/* Left accent bar */}
                    <span
                      className="absolute left-0 top-2 bottom-2 w-[2px] transition-opacity duration-200"
                      style={{ background: BRAND, opacity: a ? 1 : 0 }}
                    />
                    <span
                      className="text-[12px] font-black uppercase tracking-widest transition-colors"
                      style={{ color: a ? BRAND : "rgba(255,255,255,0.88)" }}
                    >
                      {item.name}
                    </span>
                    <span className="text-[10px] text-white/45 mt-0.5 tracking-wide">
                      {item.desc}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   SOLUTIONS – mega dropdown
════════════════════════════════════════════ */
function SolutionsDropdown({ isActive }) {
  return (
    <div className="relative h-full flex items-center group">
      {/* Trigger */}
      <button
        className="flex items-center gap-1 text-[11px] font-black uppercase tracking-widest h-full focus:outline-none transition-colors"
        style={{ color: isActive ? BRAND : "rgba(255,255,255,0.65)" }}
      >
        Solutions
        <ChevronDown
          size={12}
          className="mt-px transition-transform duration-200 group-hover:rotate-180"
        />
      </button>

      {isActive && (
        <motion.span
          layoutId="nav-bar"
          className="absolute bottom-0 left-0 right-0 h-[2px]"
          style={{ background: BRAND }}
        />
      )}

      <div className="absolute top-full left-0 right-0 h-4 invisible" />

      {/* Mega panel */}
      <div
        className="absolute top-[calc(100%+1px)] left-1/2 -translate-x-1/2 w-[600px]
                   opacity-0 invisible pointer-events-none
                   group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto
                   translate-y-3 group-hover:translate-y-0
                   transition-all duration-200 z-[60]"
      >
        <div className="bg-[#1e2020] border border-white/[0.15] shadow-[0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden flex">
          {/* Left accent column */}
          <div
            className="w-[200px] flex-shrink-0 flex flex-col justify-between p-6 relative overflow-hidden"
            style={{ background: DARK }}
          >
            {/* Radial glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at top left, ${BRAND}33 0%, transparent 65%)`,
              }}
            />
            <div className="relative z-10">
              <Terminal size={20} className="mb-5" style={{ color: BRAND }} />
              <h3 className="text-white font-black text-base uppercase leading-tight tracking-wide mb-2">
                Systems &<br />
                Capabilities
              </h3>
              <p className="text-white/60 text-[11px] leading-relaxed">
                Enterprise-grade modules built for absolute operational scale.
              </p>
            </div>
            <Link
              to="/our-solutions"
              className="relative z-10 group/link inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] transition-colors hover:text-white mt-6"
              style={{ color: BRAND }}
            >
              View All
              <ArrowRight
                size={11}
                className="group-hover/link:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          {/* Right grid */}
          <div className="flex-1 grid grid-cols-2 gap-px bg-white/[0.10] p-px">
            {solutionItems.map(({ name, path, icon: Icon, tag }) => (
              <NavLink
                key={path}
                to={path}
                className="group/sol flex flex-col gap-3 p-5 bg-[#1e2020] transition-colors hover:bg-white/[0.08]"
              >
                {({ isActive: a }) => (
                  <>
                    <div className="flex items-start justify-between">
                      <div
                        className="w-9 h-9 flex items-center justify-center border transition-colors"
                        style={{
                          borderColor: a
                            ? `${BRAND}60`
                            : "rgba(255,255,255,0.20)",
                        }}
                      >
                        <Icon
                          size={15}
                          style={{
                            color: a ? BRAND : "rgba(255,255,255,0.65)",
                          }}
                          strokeWidth={2}
                        />
                      </div>
                      <span className="text-[9px] font-black uppercase tracking-widest text-white/40 mt-1">
                        {tag}
                      </span>
                    </div>
                    <span
                      className="text-[12px] font-black uppercase tracking-wide leading-snug transition-colors group-hover/sol:text-white"
                      style={{ color: a ? BRAND : "rgba(255,255,255,0.85)" }}
                    >
                      {name}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   MOBILE ACCORDION
════════════════════════════════════════════ */
function MobileAccordion({ label, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-6 py-5 text-left focus:outline-none"
      >
        <span className="text-[11px] font-black uppercase tracking-widest text-white/50">
          {label}
        </span>
        <ChevronDown
          size={14}
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          style={{ color: open ? BRAND : "rgba(255,255,255,0.25)" }}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-3 space-y-0.5">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ════════════════════════════════════════════
   MAIN HEADER
════════════════════════════════════════════ */
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const close = () => setIsOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
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
  const solutionsActive =
    location.pathname.startsWith("/our-solutions") ||
    location.pathname.startsWith("/our-solution");
  const contactActive = location.pathname === "/contact";

  return (
    <>
      {/* ═══════════════ HEADER BAR ═══════════════ */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(10,10,10,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(18px) saturate(160%)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.07)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.6)" : "none",
        }}
      >
        {/* Top brand line */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${BRAND} 50%, transparent 100%)`,
          }}
        />

        <div className="max-w-[1700px] mx-auto px-6 lg:px-16 h-20 flex items-center justify-between">
          {/* ── Logo ── */}
          <Link
            to="/"
            onClick={close}
            className="shrink-0 flex items-center group"
          >
            <img
              src="photos/logo.png"
              alt="TEK Inspirations LLC"
              className="h-10 w-auto object-contain select-none"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>

          {/* ── Desktop Navigation ── */}
          <nav className="hidden lg:flex items-center h-full gap-8">
            {/* Simple links */}
            {navLinks.map(({ label, to, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className="relative h-full flex items-center group"
              >
                {({ isActive }) => (
                  <>
                    <span
                      className="text-[11px] font-black uppercase tracking-widest transition-colors duration-200 group-hover:text-white"
                      style={{
                        color: isActive ? BRAND : "rgba(255,255,255,0.65)",
                      }}
                    >
                      {label}
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-bar"
                        className="absolute bottom-0 left-0 right-0 h-[2px]"
                        style={{ background: BRAND }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            {/* Dropdowns */}
            <WhoWeAreDropdown isActive={whoWeAreActive} />
            <SolutionsDropdown isActive={solutionsActive} />

            {/* Vertical divider */}
            <span className="w-px h-5 bg-white/15" />

            {/* CTA – arrow style matching Hero */}
            <NavLink
              to="/contact"
              className="group flex items-center gap-3 transition-colors"
              style={{
                color: contactActive ? BRAND : "rgba(255,255,255,0.75)",
              }}
            >
              {/* L-shaped arrow SVG */}
              <svg
                width="34"
                height="20"
                viewBox="0 0 44 26"
                fill="none"
                className="flex-shrink-0 transition-colors group-hover:opacity-100"
                style={{ color: BRAND }}
              >
                <path
                  d="M2,2 L2,13 L40,13"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="square"
                />
                <path
                  d="M32,5 L40,13 L32,21"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="square"
                />
              </svg>
              <span
                className="text-[11px] font-black uppercase tracking-widest pb-0.5 border-b-2 transition-all duration-200 group-hover:text-white group-hover:border-white/50"
                style={{ borderColor: contactActive ? BRAND : BRAND }}
              >
                Contact Us
              </span>
            </NavLink>
          </nav>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[5px] focus:outline-none group"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="bars"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex flex-col gap-[5px] items-end w-6"
                >
                  <span className="block h-[2px] w-6 bg-white/70 group-hover:bg-white transition-colors" />
                  <span
                    className="block h-[2px] w-4 bg-white/70 group-hover:bg-white group-hover:w-6 transition-all duration-300"
                    style={{ background: BRAND }}
                  />
                  <span className="block h-[2px] w-6 bg-white/70 group-hover:bg-white transition-colors" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* ═══════════════ MOBILE DRAWER ═══════════════ */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 lg:hidden"
              style={{
                background: "rgba(0,0,0,0.75)",
                backdropFilter: "blur(8px)",
              }}
              onClick={close}
            />

            {/* panel */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-full flex flex-col lg:hidden overflow-y-auto"
              style={{
                background: "#0a0a0a",
                borderLeft: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Panel header */}
              <div
                className="flex items-center justify-between px-6 h-20 flex-shrink-0"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
              >
                {/* Brand line replica inside drawer */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background: `linear-gradient(90deg, ${BRAND}, transparent)`,
                  }}
                />
                <Link to="/" onClick={close}>
                  <img
                    src="photos/logo.png"
                    alt="TEK Inspirations"
                    className="h-9 w-auto object-contain"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </Link>
                <button
                  onClick={close}
                  className="w-9 h-9 flex items-center justify-center text-white/40 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Nav items */}
              <div className="flex-1 py-2">
                {navLinks.map(({ label, to, end }) => (
                  <NavLink
                    key={to}
                    to={to}
                    end={end}
                    onClick={close}
                    className="flex items-center gap-4 px-6 py-5 text-[11px] font-black uppercase tracking-widest transition-colors"
                    style={({ isActive }) => ({
                      color: isActive ? BRAND : "rgba(255,255,255,0.45)",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                      background: "transparent",
                    })}
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <span
                            className="w-[2px] h-4 block flex-shrink-0"
                            style={{ background: BRAND }}
                          />
                        )}
                        {label}
                      </>
                    )}
                  </NavLink>
                ))}

                <MobileAccordion label="Who We Are">
                  {whoWeAreItems.map(({ name, path }) => (
                    <NavLink
                      key={path}
                      to={path}
                      onClick={close}
                      className="flex items-center gap-3 px-4 py-4 text-[11px] font-black uppercase tracking-wider transition-colors hover:bg-white/[0.03]"
                      style={({ isActive }) => ({
                        color: isActive ? BRAND : "rgba(255,255,255,0.35)",
                      })}
                    >
                      {({ isActive }) => (
                        <>
                          <span
                            className="w-[2px] h-3 flex-shrink-0"
                            style={{
                              background: isActive
                                ? BRAND
                                : "rgba(255,255,255,0.15)",
                            }}
                          />
                          {name}
                        </>
                      )}
                    </NavLink>
                  ))}
                </MobileAccordion>

                <MobileAccordion label="Solutions">
                  {/* All solutions link */}
                  <NavLink
                    to="/our-solutions"
                    onClick={close}
                    className="flex items-center gap-3 px-4 py-4 text-[10px] font-black uppercase tracking-wider transition-colors hover:bg-white/[0.03]"
                    style={({ isActive }) => ({
                      color: isActive ? BRAND : "rgba(255,255,255,0.25)",
                    })}
                  >
                    <ArrowRight size={11} style={{ color: BRAND }} />
                    All Solutions
                  </NavLink>
                  {/* Individual items */}
                  {solutionItems.map(({ name, path, icon: Icon, tag }) => (
                    <NavLink
                      key={path}
                      to={path}
                      onClick={close}
                      className="flex items-center gap-3 px-4 py-4 transition-colors hover:bg-white/[0.03]"
                      style={({ isActive }) => ({
                        background: isActive ? "rgba(255,255,255,0.03)" : "",
                      })}
                    >
                      {({ isActive }) => (
                        <>
                          <div
                            className="w-8 h-8 border flex items-center justify-center flex-shrink-0"
                            style={{
                              borderColor: isActive
                                ? `${BRAND}60`
                                : "rgba(255,255,255,0.08)",
                            }}
                          >
                            <Icon
                              size={13}
                              style={{
                                color: isActive
                                  ? BRAND
                                  : "rgba(255,255,255,0.3)",
                              }}
                              strokeWidth={2}
                            />
                          </div>
                          <div>
                            <p
                              className="text-[11px] font-black uppercase tracking-widest"
                              style={{
                                color: isActive
                                  ? BRAND
                                  : "rgba(255,255,255,0.55)",
                              }}
                            >
                              {name}
                            </p>
                            <p className="text-[9px] uppercase tracking-widest text-white/20 mt-0.5">
                              {tag}
                            </p>
                          </div>
                        </>
                      )}
                    </NavLink>
                  ))}
                </MobileAccordion>

                <NavLink
                  to="/gallery"
                  onClick={close}
                  className="flex items-center gap-4 px-6 py-5 text-[11px] font-black uppercase tracking-widest transition-colors"
                  style={({ isActive }) => ({
                    color: isActive ? BRAND : "rgba(255,255,255,0.45)",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  })}
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <span
                          className="w-[2px] h-4 block flex-shrink-0"
                          style={{ background: BRAND }}
                        />
                      )}
                      Gallery
                    </>
                  )}
                </NavLink>
              </div>

              {/* Drawer CTA */}
              <div
                className="p-6 flex-shrink-0"
                style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
              >
                <NavLink
                  to="/contact"
                  onClick={close}
                  className="group flex items-center justify-center gap-3 w-full py-4 text-white transition-all"
                  style={{ border: `1px solid ${BRAND}50` }}
                >
                  <svg
                    width="26"
                    height="16"
                    viewBox="0 0 44 26"
                    fill="none"
                    style={{ color: BRAND }}
                  >
                    <path
                      d="M2,2 L2,13 L40,13"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="square"
                    />
                    <path
                      d="M32,5 L40,13 L32,21"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="square"
                    />
                  </svg>
                  <span className="text-[11px] font-black uppercase tracking-widest">
                    Contact Us
                  </span>
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
