"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight, Shield, Zap, Globe, Rocket } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-accent/5 to-transparent -z-10" />
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 bg-blue-50 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-blue-100">
                        <Zap className="w-4 h-4 fill-current" />
                        <span>Next-Gen Digital Signage</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-primary leading-[1.1] mb-6">
                        Empower Your <span className="text-secondary">Screens</span>. <br />
                        Engage Your <span className="text-accent">Audience</span>.
                    </h1>

                    <p className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed">
                        The most powerful and intuitive digital signage platform. Effortlessly manage content across unlimited displays from a single dashboard.
                        Connect with 100+ apps and broadcast in seconds.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <button className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-slate-800 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group">
                            Get Started for Free
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="w-full sm:w-auto bg-white text-primary border border-border px-8 py-4 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                            <div className="bg-secondary/10 p-1 rounded-full">
                                <Play className="w-4 h-4 text-secondary fill-current" />
                            </div>
                            Watch Demo
                        </button>
                    </div>

                    <div className="mt-12 flex items-center gap-8 grayscale opacity-50">
                        <div className="flex items-center gap-2">
                            <Shield className="w-5 h-5" />
                            <span className="text-sm font-bold uppercase tracking-wider">Enterprise-Grade</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe className="w-5 h-5" />
                            <span className="text-sm font-bold uppercase tracking-wider">Global CDN</span>
                        </div>
                    </div>
                </motion.div>

                {/* Visual Content / Mockup */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    {/* Main Display Mockup */}
                    <div className="relative z-10 bg-slate-900 p-3 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[8px] border-slate-800">
                        <div className="aspect-video bg-slate-800 rounded-2xl overflow-hidden relative group">
                            {/* Mockup Content Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-accent/40 flex items-center justify-center">
                                <div className="text-white text-center">
                                    <Rocket className="w-16 h-16 mx-auto mb-4 animate-bounce" />
                                    <h3 className="text-2xl font-bold">Dashboard Preview</h3>
                                </div>
                            </div>
                            {/* Simulated Dashboard UI */}
                            <div className="absolute inset-4 bg-white/10 backdrop-blur-md rounded-xl p-4 flex flex-col gap-3">
                                <div className="h-6 w-1/3 bg-white/20 rounded-md" />
                                <div className="grid grid-cols-3 gap-3 flex-1">
                                    <div className="bg-white/20 rounded-lg" />
                                    <div className="bg-white/20 rounded-lg" />
                                    <div className="bg-white/20 rounded-lg" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Element 1 */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-10 -right-10 z-20 bg-white p-4 rounded-2xl shadow-2xl border border-border hidden md:block"
                    >
                        <div className="flex items-center gap-3">
                            <div className="bg-green-100 p-2 rounded-full">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                            </div>
                            <div>
                                <p className="text-[10px] text-muted-foreground font-bold uppercase">Screen Status</p>
                                <p className="text-sm font-extrabold text-primary">Live in NY Office</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Element 2 */}
                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -bottom-6 -left-10 z-20 bg-white p-4 rounded-2xl shadow-2xl border border-border hidden md:block"
                    >
                        <div className="flex items-center gap-3">
                            <div className="bg-accent/10 p-2 rounded-lg">
                                <Zap className="w-5 h-5 text-accent" />
                            </div>
                            <div>
                                <p className="text-[10px] text-muted-foreground font-bold uppercase">Performance</p>
                                <p className="text-sm font-extrabold text-primary">99.9% Uptime</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
