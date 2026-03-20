import React from "react";
import { motion } from "framer-motion";

function PrivacyPolicy() {
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
            Privacy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[#10b981]">
              Policy
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
            Last Updated: March 2026. Your privacy and data security are our top
            priorities.
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
            1. Introduction
          </h2>
          <p
            className="text-slate-600 leading-relaxed"
            style={{ marginBottom: "32px" }}
          >
            Welcome to Tek Inspirations LLC. We respect your privacy and are
            committed to protecting your personal data. This privacy policy will
            inform you as to how we look after your personal data when you visit
            our website and tell you about your privacy rights and how the law
            protects you.
          </p>

          <h2
            className="text-2xl font-bold text-slate-800"
            style={{ marginBottom: "16px" }}
          >
            2. Data We Collect
          </h2>
          <p
            className="text-slate-600 leading-relaxed"
            style={{ marginBottom: "16px" }}
          >
            We may collect, use, store and transfer different kinds of personal
            data about you which we have grouped together as follows:
          </p>
          <ul
            className="list-disc list-inside text-slate-600 leading-relaxed"
            style={{ marginBottom: "32px", paddingLeft: "16px" }}
          >
            <li style={{ marginBottom: "8px" }}>
              <strong>Identity Data:</strong> includes first name, last name,
              username or similar identifier.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Contact Data:</strong> includes email address and
              telephone numbers.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Technical Data:</strong> includes internet protocol (IP)
              address, your login data, browser type and version.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Usage Data:</strong> includes information about how you
              use our website, products and services.
            </li>
          </ul>

          <h2
            className="text-2xl font-bold text-slate-800"
            style={{ marginBottom: "16px" }}
          >
            3. How We Use Your Data
          </h2>
          <p
            className="text-slate-600 leading-relaxed"
            style={{ marginBottom: "32px" }}
          >
            We will only use your personal data when the law allows us to. Most
            commonly, we will use your personal data in the following
            circumstances: Where we need to perform the contract we are about to
            enter into or have entered into with you; Where it is necessary for
            our legitimate interests; Where we need to comply with a legal
            obligation.
          </p>

          <h2
            className="text-2xl font-bold text-slate-800"
            style={{ marginBottom: "16px" }}
          >
            4. Data Security
          </h2>
          <p
            className="text-slate-600 leading-relaxed"
            style={{ marginBottom: "32px" }}
          >
            We have put in place appropriate security measures to prevent your
            personal data from being accidentally lost, used or accessed in an
            unauthorised way, altered or disclosed. In addition, we limit access
            to your personal data to those employees, agents, contractors and
            other third parties who have a business need to know.
          </p>

          <h2
            className="text-2xl font-bold text-slate-800"
            style={{ marginBottom: "16px" }}
          >
            5. Contact Us
          </h2>
          <p
            className="text-slate-600 leading-relaxed"
            style={{ marginBottom: "32px" }}
          >
            If you have any questions about this privacy policy or our privacy
            practices, please contact us via our Contact Page or email us
            directly at privacy@tekinspirations.com.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
