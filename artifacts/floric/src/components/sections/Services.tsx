import { useScrollFade } from "@/hooks/use-scroll-fade";

const services = [
  { title: "Hochzeitsdekoration", desc: "Atemraubende Konzepte für den wichtigsten Tag in Ihrem Leben.", img: "/service-2.png" },
  { title: "Tischdekoration", desc: "Elegante Arrangements, die Ihre Gäste verzaubern werden.", img: "/service-1.png" },
  { title: "Licht & Ambiente", desc: "Atmosphärische Beleuchtung für romantische und magische Momente.", img: "/service-3.png" },
  { title: "Geburtstagsdekoration", desc: "Exklusive Gestaltungen für runde Geburtstage und Meilensteine." },
  { title: "Jubiläen & Familienfeiern", desc: "Stilvoller Rahmen für Ihre bedeutungsvollsten Zusammenkünfte." },
  { title: "Verlobungen", desc: "Der perfekte, intime Rahmen für die wichtigste Frage." },
  { title: "Bühnen & Hallendekoration", desc: "Monumentale Transformationen großer Eventflächen." },
  { title: "Blumenarrangements", desc: "Floristische Meisterwerke aus den edelsten Blüten." },
  { title: "Individuelle Konzepte", desc: "Maßgeschneiderte Designs, die Ihre persönliche Handschrift tragen." },
];

export function Services() {
  const { domRef, isVisible } = useScrollFade();

  return (
    <section id="leistungen" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div 
          ref={domRef as any}
          className={`text-center mb-20 max-w-3xl mx-auto ${isVisible ? 'fade-in-section is-visible' : 'fade-in-section'}`}
        >
          <span className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4 block">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">Unsere Leistungen</h2>
          <div className="w-24 h-[1px] bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            Von der ersten Skizze bis zur finalen Inszenierung – wir bieten ganzheitliches Eventdesign auf höchstem Niveau. Jedes Detail wird mit größter Sorgfalt orchestriert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: any, index: number }) {
  const { domRef, isVisible } = useScrollFade();
  
  return (
    <div 
      ref={domRef as any}
      className={`group relative flex flex-col ${isVisible ? 'fade-in-section is-visible' : 'fade-in-section'}`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      {service.img ? (
        <div className="w-full aspect-[3/4] mb-6 overflow-hidden bg-card relative">
          <img 
            src={service.img} 
            alt={service.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
        </div>
      ) : (
        <div className="w-full aspect-[3/4] mb-6 bg-card border border-border flex items-center justify-center p-8 text-center group-hover:border-primary/50 transition-colors duration-500">
          <div className="w-12 h-[1px] bg-primary mb-6 mx-auto"></div>
          <h3 className="text-xl font-serif text-foreground mb-4">{service.title}</h3>
        </div>
      )}
      
      {service.img && <h3 className="text-2xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors">{service.title}</h3>}
      <p className="text-muted-foreground font-light leading-relaxed">{service.desc}</p>
    </div>
  );
}