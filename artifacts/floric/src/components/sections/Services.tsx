import { useScrollFade } from "@/hooks/use-scroll-fade";
import { useLanguage } from "@/context/LanguageContext";

const serviceImages = ["/service-1.jpg", "/service-2.jpg", "/service-3.jpg"];

export function Services() {
  const { domRef, isVisible } = useScrollFade();
  const { t } = useLanguage();

  return (
    <section id="leistungen" className="pt-32 pb-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div
          ref={domRef as any}
          className={`mb-20 max-w-3xl ${isVisible ? "fade-in-section is-visible" : "fade-in-section"}`}
        >
          <span className="text-foreground/40 uppercase tracking-[0.3em] text-[10px] font-medium mb-4 block">{t.services.tag}</span>
          <h2 className="text-5xl md:text-6xl font-serif mb-6 text-foreground leading-tight">{t.services.title}</h2>
          <div className="w-16 h-[1px] bg-foreground/20 mb-8"></div>
          <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-2xl">{t.services.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {t.services.items.slice(0, 3).map((service, idx) => (
            <PhotoCard key={idx} service={service} index={idx} img={serviceImages[idx]} />
          ))}
        </div>

        <div className="border-t border-border mt-16">
          {t.services.items.slice(3).map((service, idx) => (
            <NumberedServiceItem key={idx} service={service} index={idx + 4} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PhotoCard({ service, index, img }: { service: { title: string; desc: string }; index: number; img: string }) {
  const { domRef, isVisible } = useScrollFade();

  return (
    <div
      ref={domRef as any}
      className={`group flex flex-col ${isVisible ? "fade-in-section is-visible" : "fade-in-section"}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="w-full aspect-[3/4] mb-5 overflow-hidden relative">
        <img
          src={img}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-107"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-700"></div>
      </div>
      <h3 className="text-xl font-serif text-foreground mb-2 group-hover:tracking-wide transition-all duration-500">{service.title}</h3>
      <p className="text-muted-foreground font-light text-sm leading-relaxed">{service.desc}</p>
    </div>
  );
}

function NumberedServiceItem({ service, index }: { service: { title: string; desc: string }; index: number }) {
  const { domRef, isVisible } = useScrollFade();

  return (
    <div
      ref={domRef as any}
      className={`group flex items-start gap-6 py-7 border-b border-border hover:bg-card transition-all duration-300 px-3 -mx-3 cursor-default ${isVisible ? "fade-in-section is-visible" : "fade-in-section"}`}
      style={{ transitionDelay: `${(index - 4) * 80}ms` }}
    >
      <span className="text-[2.2rem] leading-none font-serif text-foreground/10 w-12 shrink-0 pt-1 group-hover:text-foreground/25 transition-colors duration-300 select-none">
        0{index}
      </span>
      <div className="flex-1 pt-1">
        <h3 className="text-lg font-serif text-foreground group-hover:translate-x-2 transition-transform duration-300 ease-out">
          {service.title}
        </h3>
        <p className="text-muted-foreground text-sm mt-1.5 font-light leading-relaxed">{service.desc}</p>
      </div>
      <span className="text-foreground/15 group-hover:text-foreground/45 group-hover:translate-x-1 transition-all duration-300 text-xl font-light pt-2 shrink-0">
        →
      </span>
    </div>
  );
}
