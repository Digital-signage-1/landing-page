"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const navLinks = [
  { name: "Platform", href: "#platform" },
  { name: "Apps", href: "#apps" },
  { name: "Solutions", href: "#solutions" },
  { name: "Pricing", href: "#pricing" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand via-amber-400 to-brand z-[120] origin-left"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[110] transition-all duration-500 w-[95%] max-w-6xl ${
          scrolled
            ? "top-3"
            : "top-5"
        }`}
      >
        <div
          className={`flex items-center justify-between px-4 sm:px-6 py-3 rounded-2xl transition-all duration-500 ${
            scrolled
              ? "bg-white/70 backdrop-blur-2xl shadow-lg shadow-black/[0.04] border border-white/60"
              : "bg-white/40 backdrop-blur-xl border border-white/30"
          }`}
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/veo_screens_logo2.png"
              alt="VEO Screens"
              className="h-8 sm:h-9 object-contain"
            />
          </a>

          {/* Center Nav - Desktop */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 rounded-xl p-1">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setActiveLink(item.name)}
                onMouseLeave={() => setActiveLink("")}
                className={`relative px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] rounded-lg transition-all duration-300 ${
                  activeLink === item.name
                    ? "text-brand bg-white shadow-sm"
                    : "text-ink/50 hover:text-ink/80"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:block text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/50 hover:text-brand transition-colors px-4 py-2">
              Log In
            </button>
            <button className="bg-ink text-white px-5 sm:px-6 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-[0.1em] hover:bg-brand transition-all duration-300 flex items-center gap-2 group shadow-md shadow-ink/10">
              Get Started
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-xl bg-slate-100/80 flex items-center justify-center text-ink hover:bg-slate-200/80 transition-colors"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[115] bg-white/95 backdrop-blur-2xl pt-28 px-8 flex flex-col"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-7 right-6 w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center"
            >
              <X size={18} />
            </button>
            <nav className="flex flex-col gap-1 mt-4">
              {navLinks.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-3xl font-black tracking-tight py-5 border-b border-slate-100 hover:text-brand transition-colors flex items-center justify-between group"
                >
                  {item.name}
                  <ArrowRight size={20} className="text-ink/20 group-hover:text-brand group-hover:translate-x-1 transition-all" />
                </motion.a>
              ))}
            </nav>
            <button className="mt-10 bg-ink text-white px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-brand transition-all">
              Get Started Free
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
