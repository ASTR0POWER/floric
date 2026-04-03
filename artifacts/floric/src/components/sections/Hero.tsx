import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  const scrollToContact = () => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  const scrollToServices = () => document.getElementById("leistungen")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative h-[100dvh] w-full flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero.jpg"
          alt="Elegante Hochzeitsdekoration"
          className="w-full h-full object-cover object-center hero-bg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 to-transparent"></div>
      </div>

      <div className="absolute left-6 top-0 bottom-0 hidden lg:flex flex-col items-center justify-center gap-0 pointer-events-none">
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent to-white/25"></div>
        <div className="w-[1px] h-32 bg-gradient-to-b from-white/25 to-transparent mt-2"></div>
      </div>

      <div className="relative z-10 w-full pb-16 md:pb-20 lg:pb-24 px-8 md:px-14 lg:px-20">
        <div className="hero-anim-0 mb-2">
          <span className="text-white/55 uppercase tracking-[0.38em] text-[10px] md:text-[11px] font-medium">
            {t.hero.tag}
          </span>
        </div>
        <div className="hero-anim-1 mb-6">
          <span className="text-white/30 tracking-[0.28em] text-[9px] uppercase">
            {t.hero.langBadge}
          </span>
        </div>

        <h1 className="font-serif font-medium leading-[0.9] mb-10">
          <span
            className="hero-anim-2 block text-white"
            style={{ fontSize: "clamp(2.8rem, 7vw, 8.5rem)" }}
          >
            {t.hero.h1pre}
          </span>
          <span
            className="hero-anim-3 block text-white/60 italic"
            style={{ fontSize: "clamp(2.8rem, 7vw, 8.5rem)" }}
          >
            {t.hero.h1italic}
          </span>
          <span
            className="hero-anim-3 block text-white"
            style={{ fontSize: "clamp(2.8rem, 7vw, 8.5rem)" }}
          >
            {t.hero.h1post}
          </span>
        </h1>

        <div className="hero-anim-4 flex flex-col sm:flex-row gap-4">
          <button
            onClick={scrollToContact}
            className="px-10 py-4 bg-white text-black hover:bg-white/88 transition-colors duration-300 uppercase tracking-widest text-xs font-medium w-fit"
            data-testid="btn-hero-contact"
          >
            {t.hero.cta1}
          </button>
          <button
            onClick={scrollToServices}
            className="px-10 py-4 border border-white/35 text-white hover:border-white/70 hover:bg-white/8 transition-all duration-300 uppercase tracking-widest text-xs font-medium w-fit backdrop-blur-sm"
            data-testid="btn-hero-services"
          >
            {t.hero.cta2}
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-3 pointer-events-none">
        <span
          className="text-white/25 text-[9px] uppercase tracking-[0.3em]"
          style={{ writingMode: "vertical-rl" }}
        >
          scroll
        </span>
        <div className="w-[1px] h-14 bg-gradient-to-b from-white/35 to-transparent"></div>
      </div>
    </section>
  );
}
