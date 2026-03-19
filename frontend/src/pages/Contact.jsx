import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Globe,
} from "lucide-react";

const MotionDiv = motion.div;

function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 lg:py-24 relative overflow-hidden">
      {/* Premium Background Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm text-[#088349] text-sm font-bold tracking-wide mb-6"
          >
            <Globe size={16} /> Global Reach, Local Touch
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#088349] to-emerald-400">
              Connect
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed font-medium"
          >
            Have a project in mind or want to learn more about our services? Our
            team of experts is ready to help you scale your business globally.
          </motion.p>
        </div>

        {/* Floating Card Design */}
        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col lg:flex-row border border-slate-200/60 relative z-20"
        >
          {/* Left Side: Contact Details */}
          <div className="lg:w-2/5 bg-gradient-to-br from-[#06180e] via-[#052915] to-[#088349] p-10 lg:p-14 text-white relative overflow-hidden flex flex-col justify-between">
            {/* Background Orbs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#088349] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#052915] rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 opacity-60 z-0"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-extrabold mb-4 tracking-wide text-white">
                Contact Info
              </h3>
              <p className="text-slate-300 mb-12 text-[16px] leading-relaxed">
                Fill out the form and our team will get back to you within 24
                hours to discuss your needs.
              </p>

              <div className="space-y-8 text-white">
                <div className="flex items-start gap-5 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-emerald-400 group-hover:bg-[#088349] group-hover:text-white transition-all duration-500 shadow-lg border border-white/10 group-hover:border-[#088349] group-hover:-translate-y-1">
                    <Phone size={24} />
                  </div>
                  <div className="pt-1">
                    <p className="text-sm text-slate-300 mb-1 font-medium tracking-wide text-white/70">
                      Call Us Directly
                    </p>
                    <p className="text-xl font-bold group-hover:text-white transition-colors text-white">
                      +1 123 456 7890
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-emerald-400 group-hover:bg-[#088349] group-hover:text-white transition-all duration-500 shadow-lg border border-white/10 group-hover:border-[#088349] group-hover:-translate-y-1">
                    <Mail size={24} />
                  </div>
                  <div className="pt-1">
                    <p className="text-sm text-slate-300 mb-1 font-medium tracking-wide text-white/70">
                      Email Address
                    </p>
                    <p className="text-xl font-bold group-hover:text-white transition-colors text-white">
                      info@tekinspirations.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-emerald-400 group-hover:bg-[#088349] group-hover:text-white transition-all duration-500 shadow-lg border border-white/10 group-hover:border-[#088349] group-hover:-translate-y-1">
                    <MapPin size={24} />
                  </div>
                  <div className="pt-1">
                    <p className="text-sm text-slate-300 mb-1 font-medium tracking-wide text-white/70">
                      Headquarters
                    </p>
                    <p className="text-lg font-bold leading-snug group-hover:text-white text-white">
                      Dallas, Texas
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-16 pt-8 border-t border-white/10">
              <p className="text-sm text-slate-300 mb-5 font-bold uppercase tracking-widest">
                Follow us
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#088349] hover:shadow-[0_0_20px_rgba(8,131,73,0.5)] transition-all duration-300 hover:-translate-y-1 transform border border-white/10 text-white"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#088349] hover:shadow-[0_0_20px_rgba(8,131,73,0.5)] transition-all duration-300 hover:-translate-y-1 transform border border-white/10 text-white"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#088349] hover:shadow-[0_0_20px_rgba(8,131,73,0.5)] transition-all duration-300 hover:-translate-y-1 transform border border-white/10 text-white"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:w-3/5 p-10 lg:p-14 xl:p-16 bg-white">
            <h3 className="text-3xl font-extrabold text-slate-900 mb-8">
              Send us a Message
            </h3>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2.5 text-left group">
                  <label className="text-[14px] font-bold text-slate-500 uppercase tracking-widest group-focus-within:text-[#088349] transition-colors">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 rounded-[14px] border-2 border-slate-100 focus:outline-none focus:ring-0 focus:border-[#088349] transition-all bg-slate-50/50 focus:bg-white font-medium text-slate-900 shadow-sm outline-none"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2.5 text-left group">
                  <label className="text-[14px] font-bold text-slate-500 uppercase tracking-widest group-focus-within:text-[#088349] transition-colors">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 rounded-[14px] border-2 border-slate-100 focus:outline-none focus:ring-0 focus:border-[#088349] transition-all bg-slate-50/50 focus:bg-white font-medium text-slate-900 shadow-sm outline-none"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2.5 text-left group">
                  <label className="text-[14px] font-bold text-slate-500 uppercase tracking-widest group-focus-within:text-[#088349] transition-colors">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-5 py-4 rounded-[14px] border-2 border-slate-100 focus:outline-none focus:ring-0 focus:border-[#088349] transition-all bg-slate-50/50 focus:bg-white font-medium text-slate-900 shadow-sm outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2.5 text-left group">
                  <label className="text-[14px] font-bold text-slate-500 uppercase tracking-widest group-focus-within:text-[#088349] transition-colors">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-5 py-4 rounded-[14px] border-2 border-slate-100 focus:outline-none focus:ring-0 focus:border-[#088349] transition-all bg-slate-50/50 focus:bg-white font-medium text-slate-900 shadow-sm outline-none"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="space-y-2.5 text-left group">
                <label className="text-[14px] font-bold text-slate-500 uppercase tracking-widest group-focus-within:text-[#088349] transition-colors">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  className="w-full px-5 py-4 rounded-[14px] border-2 border-slate-100 focus:outline-none focus:ring-0 focus:border-[#088349] transition-all bg-slate-50/50 focus:bg-white resize-none font-medium text-slate-900 shadow-sm outline-none"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full md:w-auto px-10 py-4 bg-[#088349] hover:bg-[#066a3a] text-white rounded-[14px] font-bold text-[16px] transition-all duration-300 shadow-xl shadow-[#088349]/30 flex items-center justify-center gap-3 hover:-translate-y-1"
                >
                  Send Message <Send size={20} className="ml-1" />
                </button>
              </div>
            </form>
          </div>
        </MotionDiv>

        {/* Global Offices Section Spacer */}
        <div className="mt-40">
          <div className="text-center mb-16 relative">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 font-sans tracking-tight">
              Our Global <span className="text-[#088349]">Offices</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
              Visit us at any of our global locations. We have our headquarters
              in the United States and a strong development presence across
              India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* US Card */}
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-t-[6px] border-t-transparent hover:border-t-[#088349] border-l border-r border-b border-slate-100 flex flex-col h-full hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(8,131,73,0.1)] transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#088349]/5 rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-500"></div>

              <div className="flex items-center gap-4 mb-6 z-10">
                <img
                  src="https://flagcdn.com/w40/us.png"
                  alt="USA Flag"
                  className="w-10 rounded-md shadow-md ring-1 ring-black/5"
                />
                <h3 className="text-2xl font-bold text-slate-800">
                  Frisco{" "}
                  <span className="text-[#088349] text-sm align-middle ml-1">
                    (HQ)
                  </span>
                </h3>
              </div>
              <p className="text-slate-600 font-medium mb-6 flex-grow text-lg z-10">
                13573 Tabasco Cat Trail,
                <br />
                Frisco, TX 75035, USA
              </p>
              <div className="w-full h-56 rounded-2xl overflow-hidden mt-2 relative z-10 shadow-inner">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                <iframe
                  title="Texas Office Map"
                  className="w-full h-full grayscale-[60%] group-hover:grayscale-0 transition-all duration-700 outline-none border-none"
                  src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=13573%20Tabasco%20Cat%20Trail,%20Frisco,%20TX%2075035+(TEK%20Inspirations%20LLC)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </MotionDiv>

            {/* India Cards */}
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-t-[6px] border-t-transparent hover:border-t-[#088349] border-l border-r border-b border-slate-100 flex flex-col h-full hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(8,131,73,0.1)] transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#088349]/5 rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-500"></div>

              <div className="flex items-center gap-4 mb-6 z-10">
                <img
                  src="https://flagcdn.com/w40/in.png"
                  alt="India Flag"
                  className="w-10 rounded-md shadow-md ring-1 ring-black/5"
                />
                <h3 className="text-2xl font-bold text-slate-800">Noida</h3>
              </div>
              <p className="text-slate-600 font-medium mb-6 flex-grow text-[16px] z-10">
                D-247/1, Sector 63 Rd, D Block,
                <br />
                Sector 63, Noida, UP 201301
              </p>
              <div className="w-full h-56 rounded-2xl overflow-hidden mt-2 relative z-10 shadow-inner">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                <iframe
                  title="Noida Office Map"
                  className="w-full h-full grayscale-[60%] group-hover:grayscale-0 transition-all duration-700 outline-none border-none"
                  src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=D-247/1,%20Sector%2063,%20Noida+(TEK%20Inspirations%20LLC)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-t-[6px] border-t-transparent hover:border-t-[#088349] border-l border-r border-b border-slate-100 flex flex-col h-full hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(8,131,73,0.1)] transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#088349]/5 rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-500"></div>

              <div className="flex items-center gap-4 mb-6 z-10">
                <img
                  src="https://flagcdn.com/w40/in.png"
                  alt="India Flag"
                  className="w-10 rounded-md shadow-md ring-1 ring-black/5"
                />
                <h3 className="text-2xl font-bold text-slate-800">Agra</h3>
              </div>
              <p className="text-slate-600 font-medium mb-6 flex-grow text-[16px] z-10">
                4th Floor, Padam High Street,
                <br />
                Panchvati, Fatehabad Rd, Agra, UP 282001
              </p>
              <div className="w-full h-56 rounded-2xl overflow-hidden mt-2 relative z-10 shadow-inner">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                <iframe
                  title="Agra Office Map"
                  className="w-full h-full grayscale-[60%] group-hover:grayscale-0 transition-all duration-700 outline-none border-none"
                  src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Padam%20High%20Street,%20Agra+(TEK%20Inspirations%20LLC)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-t-[6px] border-t-transparent hover:border-t-[#088349] border-l border-r border-b border-slate-100 flex flex-col h-full hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(8,131,73,0.1)] transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#088349]/5 rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-500"></div>

              <div className="flex items-center gap-4 mb-6 z-10">
                <img
                  src="https://flagcdn.com/w40/in.png"
                  alt="India Flag"
                  className="w-10 rounded-md shadow-md ring-1 ring-black/5"
                />
                <h3 className="text-2xl font-bold text-slate-800">Meerut</h3>
              </div>
              <p className="text-slate-600 font-medium mb-6 flex-grow text-[16px] z-10">
                C-26, Sector 1, East Rithani, Shatabdi Nagar,
                <br />
                Near Bhagwati Mata Mandir, Meerut, UP 250103
              </p>
              <div className="w-full h-56 rounded-2xl overflow-hidden mt-2 relative z-10 shadow-inner">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                <iframe
                  title="Meerut Office Map"
                  className="w-full h-full grayscale-[60%] group-hover:grayscale-0 transition-all duration-700 outline-none border-none"
                  src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Shatabdi%20Nagar,%20Meerut+(TEK%20Inspirations%20LLC)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-t-[6px] border-t-transparent hover:border-t-[#088349] border-l border-r border-b border-slate-100 flex flex-col h-full hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(8,131,73,0.1)] transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#088349]/5 rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-500"></div>

              <div className="flex items-center gap-4 mb-6 z-10">
                <img
                  src="https://flagcdn.com/w40/in.png"
                  alt="India Flag"
                  className="w-10 rounded-md shadow-md ring-1 ring-black/5"
                />
                <h3 className="text-2xl font-bold text-slate-800">Varanasi</h3>
              </div>
              <p className="text-slate-600 font-medium mb-6 flex-grow text-[16px] z-10">
                SA17/3K6 PAHARIA,
                <br />
                Near Surbhi International Hotel, Varanasi, UP 221007
              </p>
              <div className="w-full h-56 rounded-2xl overflow-hidden mt-2 relative z-10 shadow-inner">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                <iframe
                  title="Varanasi Office Map"
                  className="w-full h-full grayscale-[60%] group-hover:grayscale-0 transition-all duration-700 outline-none border-none"
                  src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=PAHARIA,%20Varanasi+(TEK%20Inspirations%20LLC)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
