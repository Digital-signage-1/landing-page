import Link from "next/link";
import { Rocket, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
    const links = {
        Product: ["Features", "Solutions", "Integrations", "Pricing", "Enterprise"],
        Company: ["About Us", "Contact", "Careers", "Press Kit", "Privacy Policy"],
        Support: ["Help Center", "Status", "API Docs", "Release Notes", "Community"],
    };

    return (
        <footer className="bg-white border-t border-border text-primary pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-accent p-2 rounded-lg">
                                <Rocket className="text-white w-6 h-6" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight">
                                DigitalSign<span className="text-accent">.</span>
                            </span>
                        </div>
                        <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
                            Empowering businesses to communicate more effectively through intelligent digital signage. Join thousands of teams globally.
                        </p>
                        <div className="flex items-center gap-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <Link key={i} href="#" className="w-10 h-10 rounded-full bg-slate-50 border border-border flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                                    <Icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {Object.entries(links).map(([title, items]) => (
                        <div key={title}>
                            <h4 className="font-bold text-lg mb-6">{title}</h4>
                            <ul className="flex flex-col gap-4">
                                {items.map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Digital Signage Platform. All rights reserved.</p>
                    <div className="flex items-center gap-8">
                        <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Security</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Compliance</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
