import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />

      {/* Final CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-accent via-secondary to-indigo-900 p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-accent/20">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8">
              Ready to transform <br className="hidden md:block" />
              your communication?
            </h2>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Start your 14-day free trial today. No credit card required. Effortless setup in under 5 minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto bg-white text-primary px-10 py-5 rounded-2xl text-xl font-extrabold hover:bg-slate-100 transition-all shadow-2xl">
                Get Started Now
              </button>
              <button className="w-full sm:w-auto text-white border border-white/20 px-10 py-5 rounded-2xl text-xl font-extrabold hover:bg-white/10 transition-all">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
