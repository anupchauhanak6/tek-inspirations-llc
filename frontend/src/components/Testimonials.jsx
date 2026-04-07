import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, Building2, ShieldCheck } from "lucide-react";

/* ─── Logo brand colors ─── */
const BRAND = "#289434"; // Logo Forest Green
const DARK  = "#14542c"; // Logo Dark Ivy

const testimonials = [
  {
    name: "Michael Thompson",
    role: "CTO",
    company: "FinTech Innovations",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80",
    text: "TEK Inspirations completely transformed our IT infrastructure. Their consulting team had absolute technical expertise and delivered precisely on time. The managed services team is structurally outstanding.",
  },
  {
    name: "Sarah Williams",
    role: "VP Operations",
    company: "RetailCorp Global",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    text: "The RPO solution provided was a total game changer for our global hiring pipeline. We reduced time-to-hire by exactly 40% and the quality of enterprise candidates improved dramatically.",
  },
  {
    name: "Rajiv Malhotra",
    role: "CEO",
    company: "HealthTech India",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    text: "Their software development team built our patient management platform completely from scratch. Highly professional, extremely responsive, and technically superior. We rely on TEK for all IT operations.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-[#fafafa] relative overflow-hidden font-sans border-t border-zinc-200">
      {/* Brutalist structural grid overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04] z-0"
        style={{
          backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />
      
      <div className="max-w-[1700px] mx-auto px-6 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side: Header & Core Stats */}
          <div className="lg:w-1/3 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h4 className="font-black tracking-[0.2em] uppercase text-[11px] mb-5 flex items-center gap-4" style={{ color: BRAND }}>
                <span className="w-8 h-[2px]" style={{ background: BRAND }} />
                Executive Approval
              </h4>
              <h2 className="text-4xl md:text-5xl lg:text-[54px] font-black uppercase text-[#0a0a0a] mb-8 leading-[1.05] tracking-tight">
                Trusted By<br />
                <span style={{ color: BRAND }}>Global Leaders</span>
              </h2>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12 font-medium border-l-[3px] pl-6" style={{ borderLeftColor: `${BRAND}40` }}>
                We partner with industry titans to deliver secure, highly scalable, and innovative technology solutions that drive actual metrics.
                Listen to the executives who rely absolutely on our operational dominance.
              </p>
              
              {/* Brutalist Stat Block */}
              <div className="bg-white border border-zinc-200 shadow-xl flex items-center gap-6 p-6">
                <div className="flex -space-x-4">
                  <img src={testimonials[0].image} className="w-12 h-12 rounded-none border-[3px] border-white object-cover grayscale contrast-125" alt="Partner" />
                  <img src={testimonials[1].image} className="w-12 h-12 rounded-none border-[3px] border-white object-cover grayscale contrast-125 hidden sm:block" alt="Partner" />
                  <img src={testimonials[2].image} className="w-12 h-12 rounded-none border-[3px] border-white object-cover grayscale contrast-125 hidden sm:block" alt="Partner" />
                  <div className="w-12 h-12 border-[3px] border-white bg-zinc-100 flex items-center justify-center text-zinc-900 text-xs font-black tracking-widest z-10" style={{ color: BRAND }}>
                    CEO
                  </div>
                </div>
                <div className="pl-2 border-l-2 border-zinc-100 h-10 flex flex-col justify-center">
                  <div className="flex items-center gap-1 mb-1">
                    {[1,2,3,4,5].map(i => <Star key={i} size={13} className="fill-current" style={{ color: BRAND }} />)}
                  </div>
                  <p className="text-[10px] uppercase font-black tracking-widest text-zinc-900">5.0 Perfect Rating</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Staggered Architecture Cards */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200 shadow-2xl relative">
            
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`bg-white p-10 relative group overflow-hidden transition-all duration-300 flex flex-col 
                  ${i === 2 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''}`}
              >
                {/* Decorative hover bg element */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300 pointer-events-none" style={{ background: BRAND }} />
                
                {/* Massive Quote mark watermark */}
                <div className="absolute -top-6 -right-6 text-zinc-100 transition-colors group-hover:text-zinc-50 duration-500 z-0">
                  <Quote size={160} fill="currentColor" strokeWidth={0} />
                </div>

                <div className="flex gap-1 mb-6 relative z-10">
                  {[1,2,3,4,5].map(idx => (
                    <Star key={idx} size={15} className="fill-current text-zinc-300 group-hover:text-[#289434] transition-colors duration-500" />
                  ))}
                </div>

                <p className="text-zinc-600 font-medium leading-loose mb-10 flex-1 text-[15px] relative z-10 pr-4">
                  "{item.text}"
                </p>

                <div className="border-t border-zinc-200 pt-8 flex items-center gap-5 relative z-10 transition-colors duration-300 group-hover:border-[#289434]40">
                  {/* Grayscale to color portrait */}
                  <div className="w-14 h-14 border border-zinc-200 flex-shrink-0 bg-zinc-100 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase tracking-wide text-zinc-900 text-sm mb-1">{item.name}</h4>
                    <div className="flex flex-wrap items-center gap-2 text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                      <span className="text-[#289434]">{item.role}</span>
                      <span className="w-1 h-1 bg-zinc-300 rounded-none" />
                      <span>{item.company}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
