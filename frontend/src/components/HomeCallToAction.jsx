import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Target, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomeCallToAction() {
  return (
    <section className="py-20 md:py-28 bg-white font-sans border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* -- Left Side: Structural Image Block -- */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Image */}
            <div className="rounded-lg overflow-hidden shadow-lg border border-slate-100 bg-slate-100 relative h-125">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
                alt="TEK Inspirations IT Team"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Static Corporate Stat Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 bg-[#0f172a] text-white py-6 px-8 rounded-lg shadow-xl hidden md:flex items-center gap-6 border-4 border-white"
            >
              <div className="w-16 h-16 rounded bg-[#088349] flex items-center justify-center text-white shadow-inner">
                <Target size={32} strokeWidth={2} />
              </div>
              <div>
                <p className="font-bold text-4xl mb-1">
                  15<span className="text-[#088349]">+</span>
                </p>
                <p className="text-slate-300 text-xs uppercase tracking-widest font-semibold">
                  Years IT Leaders
                </p>
              </div>
            </motion.div>

            {/* Subtle Info Box */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute top-8 -left-8 bg-white py-4 px-6 rounded shadow-lg border border-slate-100 hidden lg:flex items-center gap-4"
            >
              <ShieldCheck size={28} className="text-[#088349]" />
              <div>
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
                  ISO Certified
                </p>
                <p className="text-slate-900 font-bold text-sm">
                  Govt. Registered
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* -- Right Side: Corporate Text -- */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:pl-8 mt-10 lg:mt-0"
          >
            <h4 className="text-[#088349] font-bold tracking-widest uppercase text-xs mb-4">
              About TEK Inspirations LLC
            </h4>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-8 leading-tight">
              Architecting Your Digital Journey
            </h2>

            <div className="space-y-6 text-slate-600 font-normal leading-relaxed text-lg mb-10 border-l-4 border-[#088349] pl-6">
              <p>
                <strong className="text-slate-800">TEK Inspirations LLC</strong> is a 
                premier IT consulting and talent acquisition firm deeply rooted in innovation, operating with nationwide capability.
              </p>
              <p>
                We believe every technological transition is a critical step towards superior operational efficiency � whether deploying cloud infrastructure, developing distinct software, or building an elite contingent workforce.
              </p>
              <p>
                Our mission is to simplify the complex terrain of enterprise technology, empowering your business to scale with confidence, completely unobstructed.
              </p>
            </div>

            {/* Simple Strategic Highlight */}
            <div className="bg-slate-50 border border-slate-200 rounded p-6 mb-10 flex items-center gap-5">
              <div className="w-12 h-12 bg-slate-200 rounded flex items-center justify-center text-[#088349] shrink-0">
                <Briefcase size={24} />
              </div>
              <div>
                <h5 className="text-slate-800 font-bold text-lg mb-1">
                  Aligning With Your Goals
                </h5>
                <p className="text-slate-600 text-sm">
                  We design technological roadmaps heavily tailored to your exact enterprise requirements.
                </p>
              </div>
            </div>

            {/* Standard Primary Button */}
            <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[#0f172a] hover:bg-black text-white font-bold text-sm uppercase tracking-wide rounded shadow transition-all duration-300 hover:scale-105 active:scale-95">
              Schedule Consultation
              <ArrowRight size={20} className="text-[#088349]" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
