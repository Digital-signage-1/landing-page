"use client";

import { motion } from "framer-motion";
import { Layout, Monitor, FolderOpen, Clock, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Channel Studio",
    desc: "Design multi-zone screen layouts with our visual editor. Choose from single, split, L-shape, grid, or fully custom zone configurations.",
    icon: Layout,
    iconBg: "bg-white/20 text-white",
    bgImage: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
  },
  {
    title: "Player Network",
    desc: "Register displays with a simple pairing code. Monitor real-time status, track locations on a map, and manage your entire fleet remotely.",
    icon: Monitor,
    iconBg: "bg-white/20 text-white",
    bgImage: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
  },
  {
    title: "Content Library",
    desc: "Upload images, videos, PDFs, and documents. Organize in folders, search instantly, and track storage usage across your workspace.",
    icon: FolderOpen,
    iconBg: "bg-white/20 text-white",
    bgImage: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80",
  },
  {
    title: "Smart Scheduling",
    desc: "Schedule content by date range, recurring days, or one-time events. Set priorities and override schedules for emergencies.",
    icon: Clock,
    iconBg: "bg-white/20 text-white",
    bgImage: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
  },
];

const Blueprint = () => {
  return (
    <section id="platform" className="py-28 sm:py-40 border-b border-line/30 relative">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-brand/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left - Sticky Header */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-3 bg-brand/5 rounded-full px-4 py-1.5 mb-8">
                  <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                  <span className="text-[10px] font-bold text-brand uppercase tracking-[0.2em]">
                    Platform
                  </span>
                </div>

                <h3 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-ink mb-8 leading-[0.9] font-display">
                  One
                  <br />
                  Dashboard
                  <br />
                  For{" "}
                  <span className="bg-gradient-to-r from-brand to-amber-500 bg-clip-text text-transparent italic font-serif font-normal lowercase tracking-normal">
                    everything
                  </span>
                  .
                </h3>

                <p className="text-lg text-ink/40 leading-relaxed mb-12 max-w-md">
                  Manage channels, players, content, and schedules from a single
                  cloud-based command center. Real-time monitoring with live
                  analytics and audit logs.
                </p>

                <div className="flex gap-12">
                  <div>
                    <p className="text-4xl font-black text-ink mb-1">28+</p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-ink/30">
                      Built-in Apps
                    </p>
                  </div>
                  <div>
                    <p className="text-4xl font-black text-ink mb-1">6</p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-ink/30">
                      Layout Types
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right - Feature Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-line/40 hover:border-brand/20 hover:shadow-xl hover:shadow-brand/5 transition-all duration-500 min-h-[320px]"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.bgImage})` }}
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 group-hover:from-black/85 group-hover:via-black/55 transition-all duration-500" />

                <div className="relative z-10 p-8 sm:p-10 h-full flex flex-col justify-end">
                  <div className={`w-14 h-14 ${item.iconBg} backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon size={24} />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black mb-3 tracking-tight text-white">
                    {item.title}
                  </h4>
                  <p className="text-white/60 leading-relaxed mb-6 text-sm">{item.desc}</p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-brand group-hover:gap-4 transition-all"
                  >
                    Learn More <ArrowRight size={12} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blueprint;
