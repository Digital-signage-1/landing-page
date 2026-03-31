import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Blueprint from "@/components/Blueprint";
import Hardware from "@/components/Hardware";
import Showcase from "@/components/Showcase";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink overflow-x-hidden selection:bg-brand/20 selection:text-brand">
      <main>
        <Hero />
        <Marquee />
        <Blueprint />
        <Hardware />
        <Showcase />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
