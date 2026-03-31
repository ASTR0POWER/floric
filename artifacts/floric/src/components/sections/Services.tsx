import { useScrollFade } from "@/hooks/use-scroll-fade";
import { useLanguage } from "@/context/LanguageContext";

const serviceImages = ["/service-2.png", "/service-1.png", "/service-3.png"];

export function Services() {
  const { domRef, isVisible } = useScrollFade();
  const { t } = useLanguage();

  return (
    <section id="leistungen" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div
          ref={domRef as any}
          className={`text-center mb-20 max-w-3xl mx-auto ${isVisible ? "fade-in-section is-visible" : "fade-in-section"}`}
        >
          <span className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4 block">{t.services.tag}</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">{t.services.title}</h2>
          <div className="w-24 h-[1px] bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">{t.services.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {t.services.items.map((service, idx) => (
            <ServiceCard key={idx} service={service} index={idx} img={serviceImages[idx] ?? null} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index, img }: { service: { title: string; desc: string }; index: number; img: string | null }) {
  const { domRef, isVisible } = useScrollFade();

  return (
    <div
      ref={domRef as any}
      className={`group relative flex flex-col ${isVisible ? "fade-in-section is-visible" : "fade-in-section"}`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      {img ? (
        <div className="w-full aspect-[3/4] mb-6 overflow-hidden bg-card relative">
          <img
            src={img}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
        </div>
      ) : (
        <div className="w-full aspect-[3/4] mb-6 bg-card border border-border flex flex-col items-center justify-center p-8 text-center group-hover:border-primary/50 transition-colors duration-500">
          <div className="w-12 h-[1px] bg-primary mb-6 mx-auto"></div>
          <h3 className="text-xl font-serif text-foreground mb-4">{service.title}</h3>
        </div>
      )}

      {img && <h3 className="text-2xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors">{service.title}</h3>}
      <p className="text-muted-foreground font-light leading-relaxed">{service.desc}</p>
    </div>
  );
}
