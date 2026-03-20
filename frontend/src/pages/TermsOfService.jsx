import React from "react";
import { motion } from "framer-motion";

function TermsOfService() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
        paddingTop: "112px",
        paddingBottom: "96px",
      }}
    >
      <div
        className="relative overflow-hidden bg-slate-900"
        style={{
          padding: "96px 0",
          marginTop: "-112px",
          paddingTop: "160px",
          marginBottom: "64px",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#088349]/20 to-transparent"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
            style={{ marginBottom: "24px" }}
          >
            Terms &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[#10b981]">
              Conditions
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
            Last Updated: March 2026. Please read these terms carefully before
            using our services.
          </motion.p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="bg-white rounded-2xl shadow-lg border border-slate-100"
          style={{ padding: "48px" }}
        >
          <h2
            className="text-2xl font-bold text-slate-800"
            style={{ marginBottom: "16px" }}
          >
            1. Agreement to Terms
          </h2>
          <p
            className="text-slate-600 leading-relaxed"
            style={{ marginBottom: "32px" }}
          >
            By accessing our website and using our services, you agree to be
            bound by these Terms and Conditions and agree that you are
            responsible for the agreement with any applicable local laws. If you
            disagree with any of these terms, you are prohibited from accessing
            this site.
          </p>

          <h2
            className="text-2xl font-bold text-slate-800"
            style={{ marginBottom: "16px" }}
          >
            2. Use License
          </h2>
          <p
            className="text-slate-600 leading-relaxed"
            style={{ marginBottom: "16px" }}
          >
            Permission is granted to temporarily download one copy of the
            materials on Tek Inspirations LLC's website for personal,
            non-commercial transitory viewing only. This is the grant of a
            license, not a transfer of title, and under this license you may
            not:
          </p>
          <ul
            className="list-disc list-inside text-slate-600 leading-relaxed"
            style={{ marginBottom: "32px", paddingLeft: "16px" }}
          >
            <li style={{ marginBottom: "8px" }}>
              modify or copy the materials;
            </li>
            <li style={{ marginBottom: "8px" }}>
              use the materials for any commercial purpose or for any public
              display;
            </li>
            <li style={{ marginBottom: "8px" }}>
              attempt to reverse engineer any software contained on our website;
            </li>
            <li style={{ marginBottom: "8px" }}>
              remove any copyright or other proprietary notations from the
              materials; or
            </li>
            <li style={{ marginBottom: "8px" }}>
              transfer the materials to another person or "mirror" the
              materials.
            </li>
          </ul>

          <h2
            className="text-2xl font-bold text-slate-800"
            style={{ marginBottom: "16px" }}
          >
            3. Disclaimer
          </h2>
          <p
            className="text-slate-600 leading-relaxed"
            style={{ marginBottom: "32px" }}
          >
            The materials on Tek Inspirations LLC's website are provided on an
            'as is' basis. Tek Inspirations LLC makes no warranties, expressed
            or implied, and hereby disclaims and negates all other warranties
            including, without limitation, implied warranties or conditions of
            merchantability, fitness for a particular purpose, or
            non-infringement of intellectual property or other violation of
            rights.
          </p>

          <h2
            className="text-2xl font-bold text-slate-800"
            style={{ marginBottom: "16px" }}
          >
            4. Limitations
          </h2>
          <p
            className="text-slate-600 leading-relaxed"
            style={{ marginBottom: "32px" }}
          >
            In no event shall Tek Inspirations LLC or its suppliers be liable
            for any damages (including, without limitation, damages for loss of
            data or profit, or due to business interruption) arising out of the
            use or inability to use the materials on our website, even if Tek
            Inspirations LLC or an authorized representative has been notified
            orally or in writing of the possibility of such damage.
          </p>

          <h2
            className="text-2xl font-bold text-slate-800"
            style={{ marginBottom: "16px" }}
          >
            5. Revisions and Errata
          </h2>
          <p
            className="text-slate-600 leading-relaxed"
            style={{ marginBottom: "32px" }}
          >
            The materials appearing on the website could include technical,
            typographical, or photographic errors. Tek Inspirations LLC does not
            warrant that any of the materials on its website are accurate,
            complete, or current. We may make changes to the materials contained
            on its website at any time without notice.
          </p>

          <h2
            className="text-2xl font-bold text-slate-800"
            style={{ marginBottom: "16px" }}
          >
            6. Governing Law
          </h2>
          <p
            className="text-slate-600 leading-relaxed"
            style={{ marginBottom: "32px" }}
          >
            Any claim relating to Tek Inspirations LLC's website shall be
            governed by the laws of the jurisdiction without regard to its
            conflict of law provisions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;
