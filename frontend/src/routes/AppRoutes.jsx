import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home"; // Load Home immediately

// Lazy loading all the pages for better code-splitting and performance
const Contact = lazy(() => import("../pages/Contact"));
const WhoWeAre = lazy(() => import("../pages/WhoWeAre"));
const OurLeaders = lazy(() => import("../pages/OurLeaders"));
const OurSolutions = lazy(() => import("../pages/OurSolutions"));
const ITConsulting = lazy(() => import("../pages/ITConsulting"));
const ManagedServices = lazy(() => import("../pages/ManagedServices"));
const RPO = lazy(() => import("../pages/RPO"));
const SoftwareDevelopment = lazy(() => import("../pages/SoftwareDevelopment"));
const Gallery = lazy(() => import("../pages/Gallery"));
const PrivacyPolicy = lazy(() => import("../pages/Policy"));
const TermsOfService = lazy(() => import("../pages/TermsOfService"));

// A premium, enterprise-style loading spinner for lazy-loaded chunks
const PageLoader = () => (
  <div className="flex flex-col items-center justify-center min-h-[70vh] w-full bg-slate-50 relative overflow-hidden">
    {/* Tech Grid Background (Premium Corporate Look) */}
    <div
      className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
      style={{
        backgroundImage:
          "linear-gradient(#088349 1px, transparent 1px), linear-gradient(90deg, #088349 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    />

    {/* Core Glowing Aura */}
    <div className="absolute w-[400px] h-[400px] bg-[#088349]/5 rounded-full blur-[80px] animate-pulse pointer-events-none z-0"></div>

    {/* Loader Graphic */}
    <div className="relative z-10 flex flex-col items-center">
      {/* Dual-Spin Rings */}
      <div className="relative w-20 h-20 flex items-center justify-center mb-8">
        {/* Outer static ring */}
        <div className="absolute inset-0 border-2 border-slate-200 rounded-full"></div>
        {/* Fast primary spinner */}
        <div className="absolute inset-0 border-2 border-[#088349] border-t-transparent border-r-transparent rounded-full animate-spin"></div>
        {/* Slow reverse spinner */}
        <div
          className="absolute inset-2 border-2 border-[#088349]/30 border-b-transparent border-l-transparent rounded-full animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "2s" }}
        ></div>
        {/* Core dot */}
        <div className="w-3 h-3 bg-[#088349] rounded-full shadow-[0_0_15px_#088349] animate-pulse"></div>
      </div>

      {/* Branded Text Typography */}
      <h3 className="text-slate-800 font-bold tracking-[0.25em] text-sm uppercase mb-3 text-center">
        TEK <span className="text-[#088349]">INSPIRATIONS</span>
      </h3>

      {/* Subtle line with detail text */}
      <div className="flex items-center gap-4 opacity-70">
        <div className="w-10 h-px bg-slate-300"></div>
        <p className="text-slate-500 text-[10px] font-bold tracking-[0.2em] uppercase animate-pulse">
          Authenticating
        </p>
        <div className="w-10 h-px bg-slate-300"></div>
      </div>
    </div>
  </div>
);

function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/who-we-are/our-leaders" element={<OurLeaders />} />

        {/* plural routes */}
        <Route path="/our-solutions" element={<OurSolutions />} />
        <Route path="/our-solutions/it-consulting" element={<ITConsulting />} />
        <Route
          path="/our-solutions/managed-services"
          element={<ManagedServices />}
        />
        <Route path="/our-solutions/rpo" element={<RPO />} />
        <Route
          path="/our-solutions/software-development"
          element={<SoftwareDevelopment />}
        />

        {/* singular aliases � used by Header nav */}
        <Route path="/our-solution" element={<OurSolutions />} />
        <Route path="/our-solution/it-consulting" element={<ITConsulting />} />
        <Route
          path="/our-solution/managed-services"
          element={<ManagedServices />}
        />
        <Route path="/our-solution/rpo" element={<RPO />} />
        <Route
          path="/our-solution/software-development"
          element={<SoftwareDevelopment />}
        />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
