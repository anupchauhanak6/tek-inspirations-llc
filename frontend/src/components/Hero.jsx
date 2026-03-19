import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const MotionDiv = motion.div;

function Hero() {
  return (
    <div className="relative bg-slate-50/50 overflow-hidden py-16 lg:py-24 min-h-[85vh] flex items-center">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
        <div className="w-150 h-150 bg-[#088349]/10 rounded-full blur-[100px] pointer-events-none"></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
        <div className="w-125 h-125 bg-emerald-200/30 rounded-full blur-[100px] pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Small top badge tag */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-[#088349] text-sm font-bold tracking-wide mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#088349] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#088349]"></span>
              </span>
              Innovate with Confidence
            </MotionDiv>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6"
            >
              Building the{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#088349] to-emerald-400">
                Future
              </span>{" "}
              of Digital Enterprise
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed"
            >
              TEK Inspirations transforms businesses through cutting-edge
              software solutions, strategic IT consulting, and scalable
              technology frameworks designed for global success.
            </motion.p>

            {/* Buttons */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-[#088349] hover:bg-[#066a3a] text-white rounded-full font-bold text-lg transition-all duration-300 shadow-lg shadow-[#088349]/30 flex items-center justify-center gap-2 hover:-translate-y-1"
              >
                Let's Talk <ArrowRight size={20} />
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 hover:border-[#088349]/30 hover:bg-slate-50 text-slate-800 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center hover:shadow-md"
              >
                Explore Services
              </Link>
            </MotionDiv>

            {/* Trust Badges */}
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-sm font-semibold text-slate-500"
            >
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-[#088349]" /> Trusted
                Expertise
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={20} className="text-[#088349]" /> Secure
                Solutions
              </div>
            </MotionDiv>
          </div>

          {/* Right Visual Content (Hidden on small screens, visible on large) */}
          <div className="w-full lg:w-1/2 relative hidden md:block">
            <MotionDiv
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-300/50 border border-slate-200/50 bg-white"
            >
              <div className="absolute inset-0 bg-linear-to-tr from-[#088349]/10 to-transparent mix-blend-overlay z-10 pointer-events-none"></div>
              {/* Premium abstract/office imagery */}
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Team Collaboration"
                className="w-full h-125 object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </MotionDiv>

            {/* Floating Element 1 - Performance */}
            <MotionDiv
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white flex items-center gap-4 z-20"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-[#088349]">
                <Zap size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase">
                  Performance
                </p>
                <p className="text-lg font-extrabold text-slate-800">99.9%</p>
              </div>
            </MotionDiv>

            {/* Floating Element 2 - Clients */}
            <MotionDiv
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-12 -right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white flex items-center gap-4 z-20"
            >
              <div className="flex -space-x-3">
                <img
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&w=100&q=80"
                  alt="User"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&w=100&q=80"
                  alt="User"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&w=100&q=80"
                  alt="User"
                />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase">
                  Clients
                </p>
                <p className="text-sm font-extrabold text-slate-800">
                  200+ Worldwide
                </p>
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
