"use client";

import { Globe, Radio, Activity, Smartphone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ink text-white pt-28 sm:pt-32 pb-12 px-6 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-brand/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="grid-lines w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <a href="/" className="flex items-center gap-3 mb-10">
              <img
                src="/veo_screens_logo2.png"
                alt="VEO Screens"
                className="h-10 object-contain invert brightness-200"
              />
            </a>
            <h4 className="text-3xl lg:text-4xl font-black tracking-tighter leading-tight mb-10 max-w-sm">
              Your digital signage platform for the{" "}
              <span className="bg-gradient-to-r from-brand to-amber-400 bg-clip-text text-transparent italic font-serif font-normal lowercase tracking-normal">
                modern world
              </span>
              .
            </h4>
            <div className="flex gap-4">
              {[Globe, Radio, Activity, Smartphone].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-white/25 hover:text-brand hover:border-brand/30 hover:bg-brand/5 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10 lg:gap-16">
            <div>
              <h6 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-white/20">
                Platform
              </h6>
              <ul className="space-y-4">
                {["Channels", "Players", "Apps & Widgets", "Scheduling"].map((item, i) => (
                  <li key={i}>
                    <a href={i < 2 || i === 3 ? "#platform" : "#apps"} className="text-sm font-medium text-white/40 hover:text-brand transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h6 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-white/20">
                Integrations
              </h6>
              <ul className="space-y-4">
                {["Power BI", "Google Suite", "Analytics", "API Docs"].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-sm font-medium text-white/40 hover:text-brand transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h6 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-white/20">
                Company
              </h6>
              <ul className="space-y-4">
                {["About", "Contact", "Privacy", "Terms"].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-sm font-medium text-white/40 hover:text-brand transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-medium tracking-[0.2em] text-white/20">
            &copy; 2024 VEO SCREENS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <p className="text-[10px] font-medium tracking-[0.2em] text-white/20">
              System Status: Operational
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
