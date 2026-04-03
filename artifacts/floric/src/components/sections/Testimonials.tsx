import { useScrollFade } from "@/hooks/use-scroll-fade";
import { useLanguage } from "@/context/LanguageContext";

export function Testimonials() {
  const { domRef, isVisible } = useScrollFade();
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div
          ref={domRef as any}
          className={`mb-24 ${isVisible ? "fade-in-section is-visible" : "fade-in-section"}`}
        >
          <span className="text-foreground/40 uppercase tracking-[0.3em] text-[10px] font-medium mb-4 block">{t.testimonials.tag}</span>
          <h2 className="text-5xl md:text-6xl font-serif text-foreground leading-tight">{t.testimonials.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">
          {t.testimonials.items.map((item, idx) => (
            <TestimonialCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ item, index }: { item: { text: string; author: string; event: string }; index: number }) {
  const { domRef, isVisible } = useScrollFade();

  return (
    <div
      ref={domRef as any}
      className={`relative ${isVisible ? "fade-in-section is-visible" : "fade-in-section"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="text-[7rem] leading-none font-serif text-foreground/5 select-none -mb-10 -ml-2">"</div>
      <p className="text-foreground/65 font-light text-lg italic leading-relaxed relative z-10">
        {item.text}
      </p>
      <div className="mt-8 pt-6 border-t border-border">
        <div className="font-serif text-base text-foreground">{item.author}</div>
        <div className="text-[10px] uppercase tracking-widest text-foreground/35 mt-1.5">{item.event}</div>
      </div>
    </div>
  );
}
