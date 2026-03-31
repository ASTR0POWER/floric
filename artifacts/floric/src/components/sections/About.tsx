import { useScrollFade } from "@/hooks/use-scroll-fade";

export function About() {
  const { domRef, isVisible } = useScrollFade();

  return (
    <section id="ueber-uns" className="py-32 bg-card relative overflow-hidden border-y border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div 
            ref={domRef as any}
            className={`w-full lg:w-1/2 ${isVisible ? 'fade-in-section is-visible' : 'fade-in-section'}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img 
                src="/about.png" 
                alt="Floric Event Design Studio" 
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary z-0 hidden md:block"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border border-primary z-0 hidden md:block"></div>
            </div>
          </div>
          
          <div className={`w-full lg:w-1/2 ${isVisible ? 'fade-in-section is-visible' : 'fade-in-section'}`} style={{ transitionDelay: '200ms' }}>
            <span className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4 block">Die Philosophie</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-foreground leading-tight">
              Perfektion in jedem <br/><span className="text-primary italic">Detail</span>
            </h2>
            <div className="space-y-6 text-muted-foreground font-light text-lg leading-relaxed">
              <p>
                Floric wurde aus einer tiefen Leidenschaft für Ästhetik und räumliche Harmonie geboren. Als Eventdekoration mit Herz und Sitz in Hamm betreuen wir Hochzeiten, Feiern und besondere Anlässe in der gesamten Region Westfalen – von Dortmund über Soest bis Münster.
              </p>
              <p>
                Wir arbeiten mit einer fast obsessiven Liebe zum Detail. Von der Auswahl der feinsten Blüten bis zur exakten Positionierung jedes einzelnen Kerzenleuchters überlassen wir nichts dem Zufall. Jede Location in Hamm und Umgebung kennen wir genau – und wissen, wie wir sie in etwas Unvergessliches verwandeln.
              </p>
              <p>
                Für uns ist Eleganz keine Frage des Budgets, sondern eine Philosophie der Reduktion auf das Wesentliche und der absoluten Hingabe an die Schönheit des Moments.
              </p>
              <p>
                Wir beraten Sie persönlich und herzlich – auf <strong className="text-foreground font-medium">Deutsch und Russisch</strong>. So können wir sicherstellen, dass jeder Wunsch wirklich verstanden und perfekt umgesetzt wird.
              </p>
            </div>
            
            <div className="mt-12">
              <div className="font-serif text-2xl text-foreground">Olga Dück</div>
              <div className="text-sm uppercase tracking-widest text-primary mt-2">Gründerin & Geschäftsführerin</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}