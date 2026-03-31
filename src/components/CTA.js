"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="pricing" className="py-32 sm:py-48 px-6 relative overflow-hidden">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-brand/8 via-amber-200/10 to-brand/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-blue-100/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-purple-100/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="grid-lines w-full h-full" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-xl border border-white/40 rounded-full px-5 py-2 mb-10 shadow-sm">
            <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/50">
              Start for free
            </span>
          </div>

          <h2 className="text-6xl sm:text-8xl md:text-[140px] lg:text-[160px] font-black tracking-tighter leading-[0.8] mb-10 font-display">
            Display
            <br />
            <span className="bg-gradient-to-r from-brand via-amber-500 to-brand bg-clip-text text-transparent">
              Smarter.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-ink/35 max-w-xl mx-auto mb-14 leading-relaxed">
            Set up your first screen in minutes. No credit card required. Connect
            players, design layouts, and deploy content from anywhere.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
            <button className="bg-ink text-white px-12 py-6 rounded-2xl font-bold text-lg hover:bg-brand transition-all duration-300 shadow-xl shadow-ink/15 flex items-center gap-3 group">
              Start Free
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/60 backdrop-blur-sm border border-line text-ink px-10 py-6 rounded-2xl font-bold text-lg hover:border-brand/30 hover:text-brand transition-all">
              Contact Sales
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
