"use client";

import { motion } from "framer-motion";
import {
  Image, Video, Youtube, FileText, Clock, CloudSun,
  QrCode, Rss, BarChart3, Globe, CalendarDays, Presentation,
} from "lucide-react";

const appCategories = [
  {
    category: "Media",
    bgImage: "https://images.unsplash.com/photo-1616400619175-5beda3a17896?w=800&q=80",
    apps: [
      { name: "Image", icon: Image },
      { name: "Video", icon: Video },
      { name: "PDF Viewer", icon: FileText },
      { name: "Slideshow", icon: Presentation },
    ],
  },
  {
    category: "Google Suite",
    bgImage: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&q=80",
    apps: [
      { name: "Google Slides", icon: Presentation },
      { name: "Google Sheets", icon: BarChart3 },
      { name: "Google Calendar", icon: CalendarDays },
      { name: "Google Docs", icon: FileText },
    ],
  },
  {
    category: "Web & Social",
    bgImage: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    apps: [
      { name: "YouTube", icon: Youtube },
      { name: "Web Page", icon: Globe },
      { name: "RSS Feed", icon: Rss },
      { name: "QR Code", icon: QrCode },
    ],
  },
  {
    category: "Live Data",
    bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    apps: [
      { name: "Clock", icon: Clock },
      { name: "Weather", icon: CloudSun },
      { name: "Power BI", icon: BarChart3 },
      { name: "Stock Ticker", icon: BarChart3 },
    ],
  },
];

const AppsWidgets = () => {
  return (
    <section id="apps" className="py-28 sm:py-40 bg-ink text-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-brand/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="grid-lines w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Column */}
          <div className="lg:w-2/5">
            <div className="lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
                  <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                  <span className="text-[10px] font-bold text-brand uppercase tracking-[0.2em]">
                    App Ecosystem
                  </span>
                </div>

                <h3 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-8 leading-[0.9] font-display">
                  28+ Built-in
                  <br />
                  <span className="bg-gradient-to-r from-brand to-amber-400 bg-clip-text text-transparent italic font-serif font-normal lowercase tracking-normal">
                    widgets
                  </span>
                  .
                </h3>

                <p className="text-white/35 leading-relaxed mb-12 max-w-md text-lg">
                  From live Power BI dashboards to YouTube streams, weather widgets to
                  custom HTML &mdash; deploy any content type to any zone on any screen.
                </p>

                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2.5 h-2.5 bg-brand rounded-full animate-pulse" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/35">
                      Integrations
                    </p>
                  </div>
                  <div className="flex gap-5 items-center">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 bg-white/8 rounded-xl flex items-center justify-center">
                        <Globe size={20} className="text-brand" />
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-white/25">Google</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 bg-white/8 rounded-xl flex items-center justify-center">
                        <BarChart3 size={20} className="text-brand" />
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-white/25">Power BI</span>
                    </div>
                    <div className="text-white/15 text-xs font-bold ml-2">OAuth2 Connected</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: App Grid */}
          <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-10">
            {appCategories.map((cat, ci) => (
              <motion.div
                key={ci}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.08 }}
              >
                <div className="relative rounded-2xl overflow-hidden mb-5">
                  <div
                    className="h-32 bg-cover bg-center"
                    style={{ backgroundImage: `url(${cat.bgImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
                  <h4 className="absolute bottom-3 left-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">
                    {cat.category}
                  </h4>
                </div>
                <div className="space-y-3">
                  {cat.apps.map((app, ai) => (
                    <div
                      key={ai}
                      className="relative flex items-center gap-4 p-4 rounded-xl border border-white/5 hover:border-brand/25 hover:bg-white/[0.03] transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-all duration-300 text-white/25">
                        <app.icon size={18} />
                      </div>
                      <span className="font-bold text-sm text-white/60 group-hover:text-white transition-colors">
                        {app.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppsWidgets;
