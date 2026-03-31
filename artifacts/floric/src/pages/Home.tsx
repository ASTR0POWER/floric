import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Gallery } from "@/components/sections/Gallery";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <main className="flex-1">
        <Hero />
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