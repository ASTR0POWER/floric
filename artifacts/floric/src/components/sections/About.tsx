import { useScrollFade } from "@/hooks/use-scroll-fade";
import { useLanguage } from "@/context/LanguageContext";

export function About() {
  const { domRef, isVisible } = useScrollFade();
  const { t } = useLanguage();

  return (
    <section id="ueber-uns" className="py-32 bg-card relative overflow-hidden border-y border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div
            ref={domRef as any}
            className={`w-full lg:w-1/2 ${isVisible ? "fade-in-section is-visible" : "fade-in-section"}`}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="/gallery-1.jpg"
                alt="Floric – Florales Design"
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-5 -right-5 w-28 h-28 border border-border/60 z-0 hidden md:block"></div>
              <div className="absolute -top-5 -left-5 w-28 h-28 border border-border/60 z-0 hidden md:block"></div>
            </div>
          </div>

          <div
            className={`w-full lg:w-1/2 ${isVisible ? "fade-in-section is-visible" : "fade-in-section"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <span className="text-foreground/40 uppercase tracking-[0.3em] text-[10px] font-medium mb-4 block">{t.about.tag}</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 text-foreground leading-[1.05]">
              {t.about.title} <br />
              <span className="italic text-foreground/70">{t.about.titleAccent}</span>
            </h2>
            <div className="space-y-5 text-muted-foreground font-light text-base leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
              <p>{t.about.p4}</p>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <div className="font-serif text-2xl text-foreground">Olga Dück</div>
              <div className="text-[10px] uppercase tracking-widest text-foreground/40 mt-2">{t.about.founderTitle}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
