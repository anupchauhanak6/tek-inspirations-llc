import React from "react";
import { Link } from "react-router-dom";
import SEOHelmet from "../components/SEOHelmet";

function NotFound() {
  return (
    <div className="min-h-[70vh] bg-[#0a0a0a] text-white flex items-center justify-center px-6 py-20">
      <SEOHelmet
        title="Page Not Found (404)"
        description="The requested page could not be found. Explore TEK Inspirations LLC services, company profile, or contact page."
        canonical="/404"
        noindex={true}
        keywords={[]}
      />

      <div className="w-full max-w-3xl text-center border border-white/10 bg-[#111] px-6 py-14 md:px-12 md:py-16">
        <p className="text-[#289434] text-xs font-black tracking-[0.35em] uppercase mb-4">
          Error 404
        </p>
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-5">
          Page Not Found
        </h1>
        <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto mb-10">
          This URL does not exist or may have moved. Use the links below to
          continue browsing.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 border border-[#289434] text-[#289434] text-xs font-black uppercase tracking-[0.2em] hover:bg-[#289434] hover:text-black transition-colors"
          >
            Home
          </Link>
          <Link
            to="/our-solutions"
            className="px-6 py-3 border border-white/30 text-white text-xs font-black uppercase tracking-[0.2em] hover:border-white hover:bg-white/5 transition-colors"
          >
            Our Solutions
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 border border-white/30 text-white text-xs font-black uppercase tracking-[0.2em] hover:border-white hover:bg-white/5 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
