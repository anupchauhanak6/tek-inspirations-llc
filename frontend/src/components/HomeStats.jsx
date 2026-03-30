import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const stats = [
  { value: 500, suffix: "+", label: "Global Node Deployments",    desc: "Active client operational zones",       trend: "+12%" },
  { value: 15,  suffix: "+", label: "Years Data Lifecycle",        desc: "Of engineering excellence",             trend: "Stable" },
  { value: 98,  suffix: "%", label: "System Retention Rate",       desc: "Consistent client partnerships",        trend: "+2.4%" },
  { value: 24,  suffix: "/7",label: "NOC/SOC Active Monitored",    desc: "Uninterrupted business continuity",     trend: "100%" },
];

function AnimatedCounter({ value, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const startTime = performance.now();
        const animate = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * value));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function HomeStats() {
  return (
    <section className="py-20 bg-[#0f172a] relative border-y border-slate-800 overflow-hidden">
      {/* Tech Grid Base */}
      <div className="absolute inset-0 z-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#088349]/10 rounded-full blur-[80px] z-0 pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#3ddc84]/5 rounded-full blur-[60px] z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Metric Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-slate-800 pb-8 mb-10 gap-4">
          <div>
             <h2 className="text-white font-black text-2xl tracking-tight">System Global Metrics</h2>
             <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest mt-1">Real-time performance indicators</p>
          </div>
          <div className="flex items-center gap-2.5 px-4 py-2 bg-[#088349]/10 border border-[#088349]/20 rounded-full text-[#3ddc84] text-[10px] font-black uppercase tracking-[0.2em]">
            <span className="w-2 h-2 rounded-full bg-[#3ddc84] animate-pulse shadow-[0_0_10px_#3ddc84]" />
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
              className="bg-[#1e293b]/50 backdrop-blur-md rounded-2xl border border-white/[0.06] p-7 flex flex-col hover:bg-[#1e293b]/80 hover:border-[#088349]/30 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#088349]/5 to-transparent h-[200%] -translate-y-[100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />

              {/* Gradient border top */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#088349]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center justify-between mb-5">
                <span className="text-[#3ddc84] text-[10px] font-black uppercase tracking-[0.2em]">{stat.label}</span>
                <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-400/10 py-0.5 px-2.5 rounded-full border border-emerald-400/20">
                  <TrendingUp size={10} />
                  {stat.trend}
                </span>
              </div>
              
              <div className="mt-auto">
                <div className="text-5xl font-black text-white tracking-tight leading-none mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-slate-500 text-xs font-medium">{stat.desc}</div>
              </div>
              
              {/* Mini sparkline decoration */}
              <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg width="48" height="24" viewBox="0 0 48 24">
                  <path d="M0 20 L8 16 L16 18 L24 10 L32 14 L40 6 L48 8" fill="none" stroke="#3ddc84" strokeWidth="2" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeStats;
