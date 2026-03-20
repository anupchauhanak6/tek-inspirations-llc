import React from 'react';
import { motion } from 'framer-motion';

function OurLeaders() {
  const leadership = [
    { name: "Executive Board", role: "Board of Directors", desc: "Guiding the strategic vision and global operations of TEK Inspirations. Committed to innovation and excellence." },
    { name: "Global Operations", role: "Executive Leadership", desc: "Ensuring seamless delivery and excellence across worldwide branches. Fostering a culture of leadership and agility." }
  ];

  const teams = [
    { city: "Noida", icon: "🏙️", desc: "Our core tech hub driving innovation and software excellence." },
    { city: "Agra", icon: "🏛️", desc: "Center for strategic recruitment and robust talent solutions." },
    { city: "Varanasi", icon: "🛕", desc: "Driving operational agility and comprehensive managed services." },
    { city: "Texas H.Q.", icon: "🏢", desc: "Our global headquarters overseeing international strategy and expansion." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-16">
      <div className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-[#088349]/20 to-transparent"></div>
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">Leaders</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Meet the visionaries driving our success, innovation, and global footprint across multiple dedicated branches worldwide.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-black text-slate-800 mb-4 tracking-tight">Board & Executive Leadership</h2>
          <div className="h-1 w-24 bg-[#088349] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {leadership.map((leader, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-10 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-emerald-300 transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold text-slate-800">{leader.name}</h3>
              <p className="inline-block mt-2 mb-5 px-3 py-1 bg-emerald-50 text-emerald-700 text-sm font-semibold rounded-full">{leader.role}</p>
              <p className="text-slate-600 leading-relaxed text-lg">{leader.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mb-16 text-center">
          <h2 className="text-3xl font-black text-slate-800 mb-4 tracking-tight">Our Global Teams</h2>
          <div className="h-1 w-24 bg-[#088349] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teams.map((team, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center border border-slate-100 group hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <span className="text-6xl mb-6 block group-hover:scale-110 transition-transform">{team.icon}</span>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Team {team.city}</h3>
              <p className="text-slate-500 leading-relaxed">{team.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurLeaders;
