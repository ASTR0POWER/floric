import { useScrollFade } from "@/hooks/use-scroll-fade";
import { useLanguage } from "@/context/LanguageContext";

export function Testimonials() {
  const { domRef, isVisible } = useScrollFade();
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-card relative border-y border-border">
      <div className="container mx-auto px-6">
        <div
          ref={domRef as any}
          className={`text-center mb-20 ${isVisible ? "fade-in-section is-visible" : "fade-in-section"}`}
        >
          <span className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4 block">{t.testimonials.tag}</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">{t.testimonials.title}</h2>
          <div className="w-24 h-[1px] bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
      className={`bg-background p-10 relative border border-border ${isVisible ? "fade-in-section is-visible" : "fade-in-section"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="text-6xl font-serif text-primary mb-6 leading-none h-8">"</div>
      <p className="text-muted-foreground font-light text-lg italic leading-relaxed mb-8">{item.text}</p>
      <div>
        <div className="font-serif text-lg text-foreground">{item.author}</div>
        <div className="text-primary text-sm uppercase tracking-wider mt-1">{item.event}</div>
      </div>
    </div>
  );
}
