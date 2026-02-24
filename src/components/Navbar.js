"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Rocket, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Features", href: "#features" },
        { name: "Solutions", href: "#solutions" },
        { name: "Integrations", href: "#integrations" },
        { name: "Pricing", href: "#pricing" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                scrolled ? "glass-morphism py-3 shadow-md" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="bg-accent p-2 rounded-lg shadow-lg shadow-accent/20">
                        <Rocket className="text-white w-6 h-6" />
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-primary">
                        DigitalSign<span className="text-accent">.</span>
                    </span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:text-accent transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-4">
                    {process.env.NEXT_PUBLIC_DASHBOARD_URL ? (
                        <>
                            <Link href={process.env.NEXT_PUBLIC_DASHBOARD_URL} className="text-sm font-semibold hover:text-secondary transition-colors">Login</Link>
                            <Link href={process.env.NEXT_PUBLIC_DASHBOARD_URL} className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
                                Get Started <ChevronRight className="w-4 h-4" />
                            </Link>
                        </>
                    ) : (
                        <>
                            <button className="text-sm font-semibold hover:text-secondary transition-colors">Login</button>
                            <button className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
                                Get Started <ChevronRight className="w-4 h-4" />
                            </button>
                        </>
                    )}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white border-b border-border p-6 flex flex-col gap-4 shadow-2xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-semibold text-primary"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex flex-col gap-3 pt-4 border-t border-border">
                            {process.env.NEXT_PUBLIC_DASHBOARD_URL ? (
                                <>
                                    <Link href={process.env.NEXT_PUBLIC_DASHBOARD_URL} className="w-full text-left py-2 font-bold text-primary" onClick={() => setIsOpen(false)}>Login</Link>
                                    <Link href={process.env.NEXT_PUBLIC_DASHBOARD_URL} className="w-full bg-accent text-white py-4 rounded-2xl font-bold shadow-lg shadow-accent/20 text-center" onClick={() => setIsOpen(false)}>Get Started</Link>
                                </>
                            ) : (
                                <>
                                    <button className="w-full text-left py-2 font-bold text-primary">Login</button>
                                    <button className="w-full bg-accent text-white py-4 rounded-2xl font-bold shadow-lg shadow-accent/20">Get Started</button>
                                </>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
