import { useScrollFade } from "@/hooks/use-scroll-fade";

const testimonials = [
  {
    text: "Floric hat unsere kühnsten Träume übertroffen. Als wir den Saal betraten, stockte uns der Atem. Die Blumenarrangements und das Lichtkonzept waren pure Magie.",
    author: "Elena & Maximilian",
    event: "Hochzeit im Schloss Schönbrunn"
  },
  {
    text: "Eine absolut professionelle und stressfreie Zusammenarbeit. Das Team versteht es meisterhaft, Eleganz und Emotionen in Räumen spürbar zu machen.",
    author: "Dr. Sophie von Berg",
    event: "Jubiläumsgala"
  },
  {
    text: "Ihre Liebe zum Detail ist unvergleichlich. Jeder Tisch, jede Ecke des Raumes war ein Kunstwerk für sich. Unsere Gäste schwärmen noch heute von der Dekoration.",
    author: "Julia & Thomas",
    event: "Hochzeit im Palais"
  }
];

export function Testimonials() {
  const { domRef, isVisible } = useScrollFade();

  return (
    <section className="py-32 bg-card relative border-y border-border">
      <div className="container mx-auto px-6">
        <div 
          ref={domRef as any}
          className={`text-center mb-20 ${isVisible ? 'fade-in-section is-visible' : 'fade-in-section'}`}
        >
          <span className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4 block">Referenzen</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">Stimmen unserer Kunden</h2>
          <div className="w-24 h-[1px] bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((test, idx) => (
            <TestimonialCard key={idx} test={test} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ test, index }: { test: any, index: number }) {
  const { domRef, isVisible } = useScrollFade();
  
  return (
    <div 
      ref={domRef as any}
      className={`bg-background p-10 relative border border-border ${isVisible ? 'fade-in-section is-visible' : 'fade-in-section'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="text-6xl font-serif text-primary mb-6 leading-none h-8">"</div>
      <p className="text-muted-foreground font-light text-lg italic leading-relaxed mb-8">
        {test.text}
      </p>
      <div>
        <div className="font-serif text-lg text-foreground">{test.author}</div>
        <div className="text-primary text-sm uppercase tracking-wider mt-1">{test.event}</div>
      </div>
    </div>
  );
}