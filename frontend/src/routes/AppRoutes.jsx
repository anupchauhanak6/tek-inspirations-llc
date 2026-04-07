import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
const NotFound = lazy(() => import("../pages/NotFound"));

// Branded dark loader aligned with the website visual language
const PageLoader = () => (
  <div className="flex flex-col items-center justify-center min-h-[70vh] w-full bg-[#0a0a0a] relative overflow-hidden">
    {/* Tech grid atmosphere */}
    <div
      className="absolute inset-0 opacity-[0.06] pointer-events-none z-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />

    <div
      className="absolute inset-0 pointer-events-none z-0"
      style={{
        background:
          "radial-gradient(circle at 50% 35%, rgba(40,148,52,0.22) 0%, rgba(40,148,52,0.08) 28%, transparent 65%)",
      }}
    />

    <div className="relative z-10 flex flex-col items-center px-6 py-10 border border-white/10 bg-[#101010]/90 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
      <img
        src="/photos/logo.png"
        alt="TEK Inspirations"
        className="h-11 w-auto object-contain mb-8"
        style={{ filter: "brightness(0) invert(1)" }}
      />

      <div className="relative w-20 h-20 flex items-center justify-center mb-7">
        <div className="absolute inset-0 border-2 border-white/15 rounded-full"></div>
        <div className="absolute inset-0 border-2 border-[#289434] border-t-transparent border-r-transparent rounded-full animate-spin"></div>
        <div
          className="absolute inset-2 border-2 border-[#289434]/35 border-b-transparent border-l-transparent rounded-full animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "2s" }}
        ></div>
        <div className="w-3 h-3 bg-[#289434] rounded-full shadow-[0_0_15px_#289434] animate-pulse"></div>
      </div>

      <h3 className="text-white font-black tracking-[0.25em] text-sm uppercase mb-3 text-center">
        TEK <span className="text-[#289434]">INSPIRATIONS</span>
      </h3>

      <div className="flex items-center gap-4 opacity-70">
        <div className="w-10 h-px bg-white/25"></div>
        <p className="text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase animate-pulse">
          Loading Modules
        </p>
        <div className="w-10 h-px bg-white/25"></div>
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

        {/* Redirect singular aliases to canonical plural routes for SEO */}
        <Route
          path="/our-solution"
          element={<Navigate to="/our-solutions" replace />}
        />
        <Route
          path="/our-solution/it-consulting"
          element={<Navigate to="/our-solutions/it-consulting" replace />}
        />
        <Route
          path="/our-solution/managed-services"
          element={<Navigate to="/our-solutions/managed-services" replace />}
        />
        <Route
          path="/our-solution/rpo"
          element={<Navigate to="/our-solutions/rpo" replace />}
        />
        <Route
          path="/our-solution/software-development"
          element={
            <Navigate to="/our-solutions/software-development" replace />
          }
        />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
