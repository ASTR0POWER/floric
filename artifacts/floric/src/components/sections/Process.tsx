import { useScrollFade } from "@/hooks/use-scroll-fade";

const steps = [
  { num: "01", title: "Erstgespräch", desc: "Wir lernen Ihre Vision, Ihre Wünsche und die Location kennen." },
  { num: "02", title: "Planung & Konzept", desc: "Erstellung eines maßgeschneiderten Designkonzepts und Moodboards." },
  { num: "03", title: "Individuelle Gestaltung", desc: "Auswahl der feinsten Materialien, Blumen und Dekorationselemente." },
  { num: "04", title: "Aufbau & Dekoration", desc: "Präzise und termingerechte Umsetzung in der Eventlocation." },
  { num: "05", title: "Perfekte Umsetzung", desc: "Ihr Moment der Magie – makellos bis ins letzte Detail." }
];

export function Process() {
  const { domRef, isVisible } = useScrollFade();

  return (
    <section className="py-32 bg-secondary text-secondary-foreground relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={domRef as any}
          className={`text-center mb-24 ${isVisible ? 'fade-in-section is-visible' : 'fade-in-section'}`}
        >
          <span className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4 block">Der Weg zur Perfektion</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">Unser Ablauf</h2>
          <div className="w-24 h-[1px] bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, idx) => (
            <ProcessStep key={idx} step={step} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step, index }: { step: any, index: number }) {
  const { domRef, isVisible } = useScrollFade();
  
  return (
    <div 
      ref={domRef as any}
      className={`relative ${isVisible ? 'fade-in-section is-visible' : 'fade-in-section'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="text-5xl md:text-6xl font-serif text-primary/20 mb-6">{step.num}</div>
      <h3 className="text-xl font-serif text-white mb-4">{step.title}</h3>
      <p className="text-white/60 font-light leading-relaxed text-sm md:text-base">{step.desc}</p>
      
      {/* Connector Line */}
      {index < 4 && (
        <div className="hidden md:block absolute top-8 left-1/2 w-full h-[1px] bg-gradient-to-r from-primary/30 to-transparent"></div>
      )}
    </div>
  );
}