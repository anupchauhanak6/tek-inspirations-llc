import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Zap,
  ShieldCheck,
  BarChart,
  Globe,
  Briefcase,
  Award,
} from "lucide-react";

function RecruitmentProcess() {
  const steps = [
    {
      title: "Requirement Analysis",
      desc: "Understanding your business needs, culture, and technical requirements deeply.",
    },
    {
      title: "Sourcing & Pipelining",
      desc: "Leveraging our vast network and passive talent pools to find the exact match.",
    },
    {
      title: "Screening & Assessment",
      desc: "Rigorous technical, cultural, and behavioral filtering by our expert team.",
    },
    {
      title: "Onboarding Seamlessly",
      desc: "Managing the offer, negotiation, and placement ensuring high retention rates.",
    },
  ];

  const services = [
    {
      icon: <Users size={32} className="text-[#088349]" />,
      title: "End-to-End RPO",
      desc: "Full-cycle recruitment management from job profiling to onboarding, acting as your internal talent acquisition team.",
    },
    {
      icon: <Target size={32} className="text-[#088349]" />,
      title: "Project-Based RPO",
      desc: "Dedicated recruitment support for specific projects, seasonal hiring spikes, or new market expansions.",
    },
    {
      icon: <Zap size={32} className="text-[#088349]" />,
      title: "On-Demand Recruiting",
      desc: "Agile, flexible hiring assistance available exactly when you need it without long-term commitments.",
    },
    {
      icon: <Globe size={32} className="text-[#088349]" />,
      title: "Global Talent Sourcing",
      desc: "Access to international talent pools to build diverse, world-class teams across borders.",
    },
  ];

  const stats = [
    { value: "40%", label: "Reduction in Time-to-Hire" },
    { value: "30%", label: "Decrease in Hiring Costs" },
    { value: "95%", label: "Candidate Retention Rate" },
    { value: "10k+", label: "Successful Placements" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
        paddingTop: "112px",
        paddingBottom: "64px",
      }}
    >
      {/* Hero Section */}
      <div
        className="relative overflow-hidden bg-slate-900"
        style={{ padding: "96px 0", marginTop: "-112px", paddingTop: "160px" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#088349]/20 to-transparent"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:20px_20px]"></div>

        <div className="relative z-10 text-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: "24px" }}
            className="inline-flex items-center px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 font-semibold text-sm tracking-wide"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 mr-2"></span>
            Next-Gen Talent Acquisition
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: "24px" }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight"
          >
            Recruitment Process <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[#10b981]">
              Outsourcing
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            We don't just fill vacancies; we build high-performing teams. Let us
            act as your dedicated HR extension, optimizing your entire
            recruitment lifecycle for speed, quality, and cost-efficiency.
          </motion.p>
        </div>
      </div>

      {/* Stats Section */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20"
        style={{ marginTop: "-48px", marginBottom: "80px" }}
      >
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 border border-slate-100 divide-x divide-slate-100">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="text-center"
              style={{ padding: "0 16px" }}
            >
              <h3 className="text-4xl font-black text-[#088349] mb-2">
                {stat.value}
              </h3>
              <p className="text-slate-500 font-medium text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content & Image area */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ marginBottom: "96px" }}
      >
        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div style={{ padding: "48px" }}>
              <div style={{ marginBottom: "24px" }}>
                <span className="text-[#088349] font-bold tracking-wider uppercase text-sm">
                  Why Choose Tek Inspirations?
                </span>
                <h2
                  className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight"
                  style={{ marginTop: "8px" }}
                >
                  Strategic RPO Solutions
                </h2>
              </div>
              <div
                className="h-1 w-16 bg-[#088349] rounded-full"
                style={{ marginBottom: "32px" }}
              ></div>

              <p
                className="text-slate-600 leading-relaxed text-lg"
                style={{ marginBottom: "24px" }}
              >
                RPO is not just about filling open positions; it's about
                transforming your recruitment methodology. We integrate
                seamlessly with your company culture to deliver scalable hiring
                strategies.
              </p>
              <p
                className="text-slate-600 leading-relaxed text-lg"
                style={{ marginBottom: "40px" }}
              >
                From startups experiencing rapid growth phases to enterprise
                organizations managing high-volume recruitment drives, our
                tailored approaches ensure you secure the top 1% of talent
                globally.
              </p>

              <ul className="space-y-4">
                {[
                  "Advanced Tech-Driven ATS Integration",
                  "Access to Passive & Executive Talent Networks",
                  "Scalable & Flexible Hiring Modules",
                  "Data-Driven Hiring Analytics & Reporting",
                ].map((tick, idx) => (
                  <motion.li
                    whileHover={{ x: 5 }}
                    key={idx}
                    className="flex items-center text-slate-800 font-bold bg-slate-50 rounded-xl border border-slate-100 transition-colors hover:bg-emerald-50 hover:border-emerald-200"
                    style={{ padding: "16px" }}
                  >
                    <span
                      className="w-8 h-8 rounded-full bg-emerald-100 text-[#088349] flex items-center justify-center text-sm shadow-inner"
                      style={{ marginRight: "16px" }}
                    >
                      ✓
                    </span>
                    {tick}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="relative h-full min-h-[500px] overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                alt="Talent acquisition meeting"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end"
                style={{ padding: "48px" }}
              >
                <ShieldCheck size={48} className="text-emerald-400 mb-6" />
                <p
                  className="text-emerald-400 font-bold tracking-widest text-sm uppercase"
                  style={{ marginBottom: "8px" }}
                >
                  Global Impact
                </p>
                <p className="text-white text-3xl font-bold leading-tight max-w-md">
                  Transforming Workforces At Scale For Maximum Growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive Services Grid */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ marginBottom: "96px" }}
      >
        <div className="text-center" style={{ marginBottom: "64px" }}>
          <h2
            className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight"
            style={{ marginBottom: "16px" }}
          >
            Comprehensive RPO Models
          </h2>
          <div className="h-1 w-24 bg-[#088349] mx-auto rounded-full"></div>
          <p
            className="text-slate-600 max-w-2xl mx-auto text-lg"
            style={{ marginTop: "24px" }}
          >
            We offer diverse engagement models tailored perfectly to your
            organization's unique structure, size, and hiring objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300"
              style={{ padding: "32px" }}
            >
              <div
                className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center"
                style={{ marginBottom: "24px" }}
              >
                {service.icon}
              </div>
              <h3
                className="text-xl font-bold text-slate-800"
                style={{ marginBottom: "16px" }}
              >
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Proven Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center" style={{ marginBottom: "64px" }}>
          <h2
            className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight"
            style={{ marginBottom: "16px" }}
          >
            Our Proven 4-Step Process
          </h2>
          <div className="h-1 w-24 bg-[#088349] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div
            className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10"
            style={{ transform: "translateY(-50%)" }}
          ></div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-slate-100 shadow-lg relative overflow-hidden group hover:border-[#088349] transition-colors duration-300"
              style={{ padding: "40px 32px" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -z-10 group-hover:bg-emerald-50 transition-colors duration-500"></div>

              <div
                className="w-14 h-14 rounded-full bg-[#088349] text-white flex items-center justify-center text-xl font-bold border-4 border-white shadow-md mx-auto relative z-10"
                style={{ marginBottom: "32px" }}
              >
                {i + 1}
              </div>

              <div className="text-center">
                <h3
                  className="text-xl font-bold text-slate-800"
                  style={{ marginBottom: "16px" }}
                >
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Ready to start CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div
          className="bg-[#088349] rounded-3xl relative overflow-hidden text-center"
          style={{ padding: "64px" }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400 opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-600 opacity-20 rounded-full blur-3xl"></div>

          <h2
            className="text-3xl md:text-4xl font-bold text-white relative z-10"
            style={{ marginBottom: "24px" }}
          >
            Ready to Upgrade Your Hiring Process?
          </h2>
          <p
            className="text-emerald-100 text-lg max-w-2xl mx-auto relative z-10"
            style={{ marginBottom: "40px" }}
          >
            Let's connect and design a customized Recruitment Process
            Outsourcing strategy that scales with your ambition.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 bg-white text-[#088349] font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all"
            style={{ padding: "16px 48px" }}
          >
            Connect With Our Experts
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default RecruitmentProcess;
