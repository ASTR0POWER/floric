import { useScrollFade } from "@/hooks/use-scroll-fade";

const galleryImages = [
  { src: "/gallery-1.png", alt: "Chandelier", style: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" },
  { src: "/gallery-2.png", alt: "Rings", style: "aspect-[4/3]" },
  { src: "/gallery-3.png", alt: "Floral ceiling", style: "aspect-[3/4]" },
  { src: "/gallery-4.png", alt: "Champagne", style: "aspect-[4/3]" },
  { src: "/gallery-6.png", alt: "Candelabras", style: "aspect-square" },
  { src: "/gallery-5.png", alt: "Outdoor setup", style: "md:col-span-2 aspect-[16/9]" },
];

export function Gallery() {
  const { domRef, isVisible } = useScrollFade();

  return (
    <section id="galerie" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div 
          ref={domRef as any}
          className={`text-center mb-20 ${isVisible ? 'fade-in-section is-visible' : 'fade-in-section'}`}
        >
          <span className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4 block">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">Erinnerungen in Gold</h2>
          <div className="w-24 h-[1px] bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
          {galleryImages.map((img, idx) => (
            <GalleryItem key={idx} img={img} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryItem({ img, index }: { img: any, index: number }) {
  const { domRef, isVisible } = useScrollFade();
  
  return (
    <div 
      ref={domRef as any}
      className={`relative group overflow-hidden bg-card ${img.style} ${isVisible ? 'fade-in-section is-visible' : 'fade-in-section'}`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <img 
        src={img.src} 
        alt={img.alt} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
}