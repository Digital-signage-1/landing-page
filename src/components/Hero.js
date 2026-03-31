"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Play, Layout, Monitor, Layers } from "lucide-react";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 0.95]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.25], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 bg-paper">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-brand/8 via-amber-200/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-100/20 via-purple-100/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-brand/5 to-amber-100/10 rounded-full blur-3xl" />
      </div>

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="grid-lines w-full h-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-xl border border-white/40 rounded-full px-5 py-2 mb-10 shadow-sm"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/60">
            Cloud-Based Digital Signage CMS
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-[90px] lg:text-[110px] font-black leading-[0.9] tracking-tighter mb-8 font-display"
        >
          Your Screen
          <br />
          Network,{" "}
          <span className="bg-gradient-to-r from-brand via-amber-500 to-brand bg-clip-text text-transparent">
            Managed
          </span>
          .
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-lg sm:text-xl text-ink/40 leading-relaxed mb-12 max-w-2xl mx-auto font-medium"
        >
          Connect players, design layouts, deploy content, and manage your entire
          display network from one powerful dashboard. Stream Power BI, Google
          Slides, YouTube, and 28+ widget types to any screen.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <button className="bg-ink text-white px-10 py-5 rounded-2xl font-bold text-sm hover:bg-brand transition-all duration-300 shadow-xl shadow-ink/15 flex items-center gap-3 group">
            Deploy Your First Screen
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-white/60 backdrop-blur-sm border border-line text-ink px-8 py-5 rounded-2xl font-bold text-sm hover:border-brand/30 hover:text-brand transition-all flex items-center gap-3 group">
            <Play size={16} className="text-brand" />
            Watch Demo
          </button>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-20"
        >
          {[
            { value: "28+", label: "Widgets" },
            { value: "6", label: "Layout Types" },
            { value: "99.9%", label: "Uptime" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl sm:text-3xl font-black text-ink tracking-tight">{stat.value}</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/30 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="absolute -inset-4 bg-gradient-to-b from-brand/10 via-brand/5 to-transparent rounded-[3rem] blur-2xl" />

          <div className="relative w-full bg-white rounded-[1.5rem] sm:rounded-[2rem] border border-line/50 shadow-2xl shadow-ink/10 overflow-hidden">
            {/* Browser Top Bar */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-3 sm:py-4 border-b border-line/50 bg-slate-50/80">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
              </div>
              <div className="hidden sm:flex items-center gap-2 bg-white rounded-lg px-4 py-1.5 border border-line/50">
                <span className="text-[10px] font-mono text-ink/30">app.veoscreens.com/dashboard</span>
              </div>
              <div className="w-20" />
            </div>

            {/* Dashboard Content */}
            <div className="p-4 sm:p-6 md:p-8 flex gap-4 md:gap-6">
              {/* Sidebar */}
              <div className="hidden sm:flex w-14 flex-col gap-3 items-center pt-2">
                {[Layout, Monitor, Layers].map((Icon, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                      i === 0
                        ? "bg-brand text-white shadow-md shadow-brand/20"
                        : "bg-slate-100 text-ink/25 hover:text-ink/40"
                    }`}
                  >
                    <Icon size={16} />
                  </div>
                ))}
              </div>

              {/* Main Area */}
              <div className="flex-1 space-y-4">
                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { label: "Players Online", value: "24", color: "bg-green-500" },
                    { label: "Channels", value: "12", color: "bg-brand" },
                    { label: "Content Items", value: "156", color: "bg-blue-500" },
                    { label: "Storage Used", value: "4.2 GB", color: "bg-purple-500" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-slate-50 rounded-xl p-3 md:p-4 border border-line/30">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${stat.color}`} />
                        <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-ink/25">{stat.label}</span>
                      </div>
                      <p className="text-base md:text-xl font-black text-ink tracking-tight">{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* Channel Preview Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { name: "Lobby Display", zones: "3 zones", status: "Published", gradient: "from-brand/15 to-brand/5" },
                    { name: "Menu Board", zones: "2 zones", status: "Published", gradient: "from-blue-500/15 to-blue-500/5" },
                    { name: "Meeting Room", zones: "1 zone", status: "Draft", gradient: "from-purple-500/15 to-purple-500/5" },
                  ].map((ch, i) => (
                    <div key={i} className="bg-white rounded-xl border border-line/30 overflow-hidden">
                      <div className={`h-14 md:h-20 bg-gradient-to-br ${ch.gradient} flex items-center justify-center`}>
                        <Layout size={16} className="text-ink/15" />
                      </div>
                      <div className="p-3">
                        <p className="text-xs font-bold text-ink mb-1">{ch.name}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-[8px] font-mono text-ink/25">{ch.zones}</span>
                          <span className={`text-[8px] font-bold uppercase tracking-widest ${ch.status === "Published" ? "text-green-600" : "text-ink/25"}`}>{ch.status}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 sm:top-8 sm:-right-8 bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-line/40"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-ink/35">Player Network</span>
            </div>
            <p className="text-xs font-bold text-ink">24 Online &middot; 2 Pending</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-3 -left-3 sm:bottom-6 sm:-left-6 bg-white/80 backdrop-blur-xl px-5 py-3 rounded-full shadow-xl border border-line/40 flex items-center gap-3"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-ink/50">Real-time Dashboard</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
