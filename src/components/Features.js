"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Cloud,
    Layers,
    Smartphone,
    Users,
    Cpu,
    Layout,
    Monitor,
    Workflow
} from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="p-8 rounded-[2rem] bg-white border border-border hover:shadow-2xl hover:shadow-secondary/5 transition-all group"
    >
        <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
            <Icon className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-primary">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">
            {description}
        </p>
    </motion.div>
);

const Features = () => {
    const features = [
        {
            icon: Cloud,
            title: "Cloud Management",
            description: "Manage and monitor your entire screen network from anywhere in the world through our intuitive web dashboard.",
            delay: 0.1,
        },
        {
            icon: Layers,
            title: "App Integrations",
            description: "Seamlessly connect with 100+ apps like Slack, Google Calendar, and Power BI to display real-time data.",
            delay: 0.2,
        },
        {
            icon: Smartphone,
            title: "Any Device",
            description: "Our platform supports Chromebox, Firestick, Raspberry Pi, and Smart TVs, making deployment a breeze.",
            delay: 0.3,
        },
        {
            icon: Layout,
            title: "Advanced Layouts",
            description: "Create complex layouts with zones, widgets, and dynamic transitions to maximize screen impact.",
            delay: 0.4,
        },
        {
            icon: Users,
            title: "Role-Based Access",
            description: "Granular permissions allow you to safely delegate content management to different team members or departments.",
            delay: 0.5,
        },
        {
            icon: Cpu,
            title: "Edge Processing",
            description: "Optimized for performance, our player runs content locally to ensure smooth playback even during internet outages.",
            delay: 0.6,
        },
    ];

    return (
        <section id="features" className="py-24 bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Core Capabilities</h2>
                    <p className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
                        Everything you need to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">conquer every screen.</span>
                    </p>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                        Stop worrying about hardware and complicated software. Our enterprise-grade toolkit makes digital signage simple for everyone.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
