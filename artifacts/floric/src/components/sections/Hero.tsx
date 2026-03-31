import { useScrollFade } from "@/hooks/use-scroll-fade";

export function Hero() {
  const { domRef, isVisible } = useScrollFade();

  const scrollToContact = () => {
    document.getElementById('kontakt')?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById('leistungen')?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/hero.png" 
          alt="Elegante Hochzeitsdekoration" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div 
        ref={domRef as any}
        className={`relative z-10 text-center text-white px-6 max-w-5xl mx-auto flex flex-col items-center mt-20 ${isVisible ? 'fade-in-section is-visible' : 'fade-in-section'}`}
      >
        <span className="text-primary uppercase tracking-[0.3em] mb-6 text-sm md:text-base font-medium">Exklusives Eventdesign · Hamm &amp; Umgebung</span>
        <span className="text-white/60 tracking-widest text-xs mb-2 uppercase">Beratung auf Deutsch &amp; Russisch · Консультация на русском языке</span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-tight mb-8 drop-shadow-lg">
          Wir verwandeln Eventhallen in <i className="text-primary font-serif">unvergessliche</i> Erlebnisse
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl font-light leading-relaxed mb-12 drop-shadow">
          Floric steht für atemberaubendes Hochzeitsdesign und luxuriöse Eventdekoration in Hamm und der gesamten Region Westfalen. Wir kreieren emotionale Momente, die für die Ewigkeit bestimmt sind – mit höchstem Anspruch an Perfektion.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <button 
            onClick={scrollToContact}
            className="px-10 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 uppercase tracking-widest text-sm font-medium"
            data-testid="btn-hero-contact"
          >
            Kostenloses Erstgespräch
          </button>
          <button 
            onClick={scrollToServices}
            className="px-10 py-4 border border-white/50 text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-medium backdrop-blur-sm"
            data-testid="btn-hero-services"
          >
            Unsere Leistungen
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent mx-auto"></div>
      </div>
    </section>
  );
}