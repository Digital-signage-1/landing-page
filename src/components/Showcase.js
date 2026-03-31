"use client";

import { motion } from "framer-motion";
import { Store, Building2, Hotel, Hospital, GraduationCap, Monitor, ArrowRight } from "lucide-react";

const industries = [
  {
    name: "Retail & Restaurants",
    desc: "Digital menu boards, promotions, and in-store experiences.",
    icon: Store,
    iconBg: "bg-white/15 text-white",
    bgImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    name: "Corporate Offices",
    desc: "Meeting room displays, KPI dashboards, and internal comms.",
    icon: Building2,
    iconBg: "bg-white/15 text-white",
    bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    name: "Hospitality",
    desc: "Lobby directories, event schedules, and guest information.",
    icon: Hotel,
    iconBg: "bg-white/15 text-white",
    bgImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  },
  {
    name: "Healthcare",
    desc: "Wayfinding, patient queue boards, and wellness content.",
    icon: Hospital,
    iconBg: "bg-white/15 text-white",
    bgImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
  },
  {
    name: "Education",
    desc: "Campus announcements, timetables, and digital notice boards.",
    icon: GraduationCap,
    iconBg: "bg-white/15 text-white",
    bgImage: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=800&q=80",
  },
];

const Showcase = () => {
  return (
    <section id="solutions" className="py-28 sm:py-40 px-6 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-brand/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-3 bg-brand/5 rounded-full px-4 py-1.5 mb-8">
              <div className="w-1.5 h-1.5 bg-brand rounded-full" />
              <span className="text-[10px] font-bold text-brand uppercase tracking-[0.2em]">
                Solutions
              </span>
            </div>
            <h3 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-ink leading-[0.9] font-display">
              Built For
              <br />
              Every{" "}
              <span className="bg-gradient-to-r from-brand to-amber-500 bg-clip-text text-transparent italic font-serif font-normal lowercase tracking-normal">
                industry
              </span>
              .
            </h3>
          </motion.div>
          <p className="text-lg text-ink/35 max-w-sm">
            From retail storefronts to hospital lobbies, VEOScreen powers
            displays in every environment.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Featured Card - Spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-2 relative rounded-3xl p-10 sm:p-12 text-white overflow-hidden group min-h-[350px]"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${industries[0].bgImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30 group-hover:from-black/80 transition-all duration-500" />
            <div className="relative z-10 h-full flex flex-col justify-end">
              <div className={`w-14 h-14 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8`}>
                <Store size={24} className="text-brand" />
              </div>
              <h4 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">
                {industries[0].name}
              </h4>
              <p className="text-white/60 leading-relaxed mb-8 max-w-md text-lg">
                {industries[0].desc}
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-brand hover:gap-4 transition-all">
                Explore Solution <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Regular Cards */}
          {industries.slice(1).map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 1) * 0.08 }}
              className="relative rounded-3xl p-8 sm:p-10 border border-white/10 hover:border-brand/20 hover:shadow-xl hover:shadow-brand/5 transition-all duration-500 group overflow-hidden min-h-[260px]"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${ind.bgImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/25 group-hover:from-black/85 transition-all duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-end">
                <div className={`w-12 h-12 ${ind.iconBg} backdrop-blur-sm rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <ind.icon size={22} />
                </div>
                <h4 className="text-xl font-black mb-2 tracking-tight text-white">
                  {ind.name}
                </h4>
                <p className="text-white/50 leading-relaxed text-sm">{ind.desc}</p>
              </div>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-brand to-amber-600 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden group"
          >
            <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
              <Monitor size={160} />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 mb-6">
                  Start Free
                </p>
                <h4 className="text-2xl sm:text-3xl font-black tracking-tight mb-6">
                  Ready to manage your screens?
                </h4>
              </div>
              <button className="bg-white text-ink px-8 py-4 rounded-xl font-bold text-sm hover:bg-ink hover:text-white transition-all duration-300 w-fit">
                Get Started
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
