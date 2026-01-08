"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link as LinkIcon, Tv, LayoutTemplate, ArrowRight } from "lucide-react";

const Step = ({ icon: Icon, title, description, stepNumber }) => (
    <div className="relative flex flex-col items-center text-center group">
        <div className="w-20 h-20 rounded-full bg-white border-2 border-dashed border-border flex items-center justify-center mb-8 relative z-10 group-hover:border-secondary group-hover:bg-secondary/5 transition-all duration-500">
            <Icon className="w-10 h-10 text-primary group-hover:text-secondary group-hover:scale-110 transition-all duration-500" />
            <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center border-2 border-white shadow-lg">
                {stepNumber}
            </div>
        </div>
        <h3 className="text-2xl font-bold mb-4 text-primary">{title}</h3>
        <p className="text-muted-foreground leading-relaxed max-w-xs">{description}</p>
    </div>
);

const HowItWorks = () => {
    const steps = [
        {
            icon: LinkIcon,
            title: "Connect",
            description: "Link your screens or players to our secure cloud management system in seconds.",
            stepNumber: 1,
        },
        {
            icon: LayoutTemplate,
            title: "Design",
            description: "Create engaging channels by dragging and dropping apps, widgets, and your own media.",
            stepNumber: 2,
        },
        {
            icon: Tv,
            title: "Broadcast",
            description: "Hit publish and instantly stream your content to one screen or ten thousand worldwide.",
            stepNumber: 3,
        },
    ];

    return (
        <section id="solutions" className="py-24 relative overflow-hidden">
            {/* Connector Line (Desktop Only) */}
            <div className="hidden lg:block absolute top-[45%] left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-border to-transparent -z-0" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <h2 className="text-sm font-bold text-accent uppercase tracking-[0.2em] mb-4">The Process</h2>
                    <p className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
                        From zero to live in <span className="text-secondary italic">three simple steps.</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 relative z-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <Step {...step} />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-20 text-center"
                >
                    <button className="bg-slate-100 text-primary px-8 py-4 rounded-2xl font-bold hover:bg-slate-200 transition-all flex items-center gap-2 mx-auto">
                        Explore Detailed Guide <ArrowRight className="w-5 h-5" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;
