import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Global Node Deployments",    desc: "Active client operational zones",       trend: "+12%" },
  { value: "15+",  label: "Years Data Lifecycle",        desc: "Of engineering excellence",             trend: "Stable" },
  { value: "98%",  label: "System Retention Rate",       desc: "Consistent client partnerships",        trend: "+2.4%" },
  { value: "24/7", label: "NOC/SOC Active Monitored",    desc: "Uninterrupted business continuity",     trend: "100%" },
];

function HomeStats() {
  return (
    <section className="py-20 bg-[#0f172a] relative border-y border-slate-800">
      {/* Tech Base Ground */}
      <div className="absolute inset-0 z-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#088349]/10 rounded-full blur-[80px] z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Metric Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-8 mb-10">
          <div>
             <h2 className="text-white font-black text-2xl tracking-tight">System Global Metrics</h2>
             <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest mt-1">Real-time performance indicators</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#088349]/10 border border-[#088349]/20 rounded text-[#3ddc84] text-[10px] font-black uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3ddc84] animate-pulse shadow-[0_0_8px_#3ddc84]" />
            Status: Optimal
          </div>
        </div>

        {/* Dashboard Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#1e293b]/50 backdrop-blur-md rounded-2xl border border-white/10 p-6 flex flex-col hover:bg-[#1e293b]/80 hover:border-[#088349]/40 transition-colors group relative overflow-hidden"
            >
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#088349]/5 to-transparent h-[200%] -translate-y-[100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />

              <div className="flex items-center justify-between mb-4">
                <span className="text-[#3ddc84] text-[10px] font-black uppercase tracking-[0.2em]">{stat.label}</span>
                <span className="text-[10px] font-bold text-slate-400 bg-white/5 py-0.5 px-2 rounded-md">{stat.trend}</span>
              </div>
              
              <div className="mt-auto">
                <div className="text-5xl font-black text-white tracking-tight leading-none mb-2">{stat.value}</div>
                <div className="text-slate-500 text-xs font-medium">{stat.desc}</div>
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeStats;
