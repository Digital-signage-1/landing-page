"use client";

import { motion } from "framer-motion";

const items = [
  { text: "Power BI", highlight: true },
  { text: "Google Sheets", highlight: false },
  { text: "YouTube", highlight: false },
  { text: "Google Slides", highlight: true },
  { text: "RSS Feeds", highlight: false },
  { text: "Google Calendar", highlight: false },
  { text: "Weather", highlight: true },
  { text: "QR Codes", highlight: false },
];

const Marquee = () => {
  return (
    <section className="py-14 border-y border-line/30 overflow-hidden bg-white/50 backdrop-blur-sm">
      <div className="flex gap-16 items-center whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 items-center"
        >
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              {items.map((item, j) => (
                <span
                  key={j}
                  className={`text-3xl sm:text-4xl font-black tracking-tighter uppercase font-display ${
                    item.highlight
                      ? "bg-gradient-to-r from-brand to-amber-500 bg-clip-text text-transparent"
                      : "text-ink/8"
                  }`}
                >
                  {item.text}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Marquee;
