import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, Building2 } from "lucide-react";

const testimonials = [
  {
    name: "Michael Thompson",
    role: "CTO, FinTech Innovations",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "TEK Inspirations completely transformed our IT infrastructure. Their consulting team had deep technical expertise and they reliably delivered exactly on time. The managed services team we work with now is simply outstanding.",
  },
  {
    name: "Sarah Williams",
    role: "VP Operations, RetailCorp",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "The RPO solution they provided was an absolute game changer for our global hiring pipeline. We reduced time-to-hire by 40% and the quality of enterprise candidates we are seeing has improved dramatically.",
  },
  {
    name: "Rajiv Malhotra",
    role: "CEO, HealthTech India",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Their software development team built our patient management platform completely from scratch. Highly professional, very responsive, and technically excellent. We continue to use TEK for all our IT operations.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden font-sans border-b border-slate-200">
      {/* Decorative background grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: "linear-gradient(#088349 1px, transparent 1px), linear-gradient(90deg, #088349 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Side: Header & Core Image */}
          <div className="lg:w-1/3 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-[#088349] font-bold tracking-widest uppercase text-xs mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#088349]" />
                Client Success
              </h4>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Trusted by <span className="text-[#088349]">Global Leaders</span>
              </h2>
              <div className="w-16 h-1 bg-[#088349] rounded mb-6" />
              <p className="text-slate-600 text-lg mb-10">
                We partner with industry leaders to deliver secure, scalable, and highly innovative technology solutions that drive real results. Hear from the executives who trust our operational excellence.
              </p>
              
              <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                <div className="flex -space-x-4">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80" className="w-12 h-12 rounded-full border-2 border-white object-cover" alt="Reviewer" />
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80" className="w-12 h-12 rounded-full border-2 border-white object-cover hidden sm:block" alt="Reviewer" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" className="w-12 h-12 rounded-full border-2 border-white object-cover hidden sm:block" alt="Reviewer" />
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-slate-500 text-xs font-bold font-sans">
                    99+
                  </div>
                </div>
                <div className="pl-2">
                  <div className="flex items-center gap-1 text-amber-400 mb-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-current" />)}
                  </div>
                  <p className="text-sm font-bold text-slate-800">5.0 Average Rating</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Masonry-style / Staggered Cards */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#088349]/5 rounded-full blur-[100px] z-0" />
            
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 relative z-10 flex flex-col ${i === 1 ? 'md:translate-y-12' : ''} ${i === 2 ? 'md:col-span-2 md:w-1/2 md:mx-auto mt-6 md:mt-12' : ''}`}
              >
                <div className="absolute top-0 right-6 transform -translate-y-1/2 text-[#088349]/20 bg-white px-2">
                  <Quote size={48} fill="currentColor" strokeWidth={0} />
                </div>

                <div className="flex gap-1 mb-6 mt-2 relative z-10">
                  {[...Array(item.rating)].map((_, idx) => (
                    <Star key={idx} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 leading-relaxed mb-8 flex-1 italic text-base">
                  "{item.text}"
                </p>

                <div className="pt-6 border-t border-slate-100 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-slate-100 shadow-sm shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">{item.name}</h4>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium tracking-wide">
                      <Building2 size={12} className="text-[#088349]" />
                      {item.role}
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
