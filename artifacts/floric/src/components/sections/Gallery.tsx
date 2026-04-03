import { useScrollFade } from "@/hooks/use-scroll-fade";
import { useLanguage } from "@/context/LanguageContext";

const galleryImages = [
  { src: "/gallery-1.jpg", alt: "Florale Standdekoration", style: "md:col-span-2 md:row-span-2" },
  { src: "/gallery-2.jpg", alt: "Rosengesteck" },
  { src: "/gallery-3.jpg", alt: "Sektempfang" },
  { src: "/gallery-4.jpg", alt: "Herzkerze" },
  { src: "/gallery-5.jpg", alt: "Candy Bar" },
  { src: "/gallery-room.jpg", alt: "Hochzeitssaal komplett", style: "md:col-span-2" },
];

export function Gallery() {
  const { domRef, isVisible } = useScrollFade();
  const { t } = useLanguage();

  return (
    <section id="galerie" className="bg-background">
      <div className="py-28 container mx-auto px-6">
        <div
          ref={domRef as any}
          className={`mb-16 ${isVisible ? "fade-in-section is-visible" : "fade-in-section"}`}
        >
          <span className="text-foreground/40 uppercase tracking-[0.3em] text-[10px] font-medium mb-4 block">{t.gallery.tag}</span>
          <h2 className="text-5xl md:text-6xl font-serif text-foreground leading-tight">{t.gallery.title}</h2>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 md:auto-rows-[380px]">
        {galleryImages.map((img, idx) => (
          <GalleryItem key={idx} img={img} index={idx} />
        ))}
      </div>

      <div className="h-px bg-border"></div>
    </section>
  );
}

function GalleryItem({ img, index }: { img: { src: string; alt: string; style?: string }; index: number }) {
  const { domRef, isVisible } = useScrollFade();

  return (
    <div
      ref={domRef as any}
      className={`relative group overflow-hidden aspect-square md:aspect-auto ${img.style ?? ""} ${isVisible ? "fade-in-section is-visible" : "fade-in-section"}`}
      style={{ transitionDelay: `${(index % 4) * 80}ms` }}
    >
      <img
        src={img.src}
        alt={img.alt}
        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-600 flex items-end p-6">
        <span className="text-white/0 group-hover:text-white/85 transition-all duration-500 delay-100 text-xs uppercase tracking-[0.25em] font-medium">
          {img.alt}
        </span>
      </div>
    </div>
  );
}
