import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Gallery } from "@/components/sections/Gallery";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { useLanguage } from "@/context/LanguageContext";

function Marquee() {
  const { t } = useLanguage();
  const items = t.services.items.map((s) => s.title);
  const doubled = [...items, ...items];

  return (
    <div className="bg-[#0d0d0d] py-4 overflow-hidden border-y border-white/5">
      <div className="marquee-track flex items-center gap-0 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-0 shrink-0">
            <span className="text-white/45 text-[10px] uppercase tracking-[0.3em] font-medium px-8">
              {item}
            </span>
            <span className="text-white/15 text-[10px] select-none">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground selection:bg-foreground/10">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Gallery />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
