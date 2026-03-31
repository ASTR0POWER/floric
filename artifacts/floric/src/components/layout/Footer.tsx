import { Link } from "wouter";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary text-secondary-foreground pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <button onClick={scrollToTop} className="text-4xl font-serif font-semibold tracking-wider text-primary mb-6 block text-left" data-testid="footer-logo">
              FLORIC
            </button>
            <p className="text-white/60 font-light max-w-md leading-relaxed mb-6">
              Exklusive Eventdekoration und atemberaubendes Hochzeitsdesign. Wir kreieren Räume, die Geschichten erzählen und Emotionen wecken.
            </p>
            <div className="text-white/50 font-light text-sm space-y-1">
              <p>Papenweg 28 · 59071 Hamm · Deutschland</p>
              <p>
                <a href="tel:+4915733195342" className="hover:text-white transition-colors">+49 (0) 15733 195342</a>
                {" · "}
                <a href="mailto:kontakt@floric.de" className="hover:text-white transition-colors">kontakt@floric.de</a>
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="uppercase tracking-widest text-xs font-medium text-primary mb-6">Navigation</h4>
            <ul className="space-y-4 text-white/70 font-light text-sm">
              <li><button onClick={() => document.getElementById('leistungen')?.scrollIntoView({ behavior: 'smooth'})} className="hover:text-white transition-colors" data-testid="footer-leistungen">Leistungen</button></li>
              <li><button onClick={() => document.getElementById('ueber-uns')?.scrollIntoView({ behavior: 'smooth'})} className="hover:text-white transition-colors" data-testid="footer-about">Über uns</button></li>
              <li><button onClick={() => document.getElementById('galerie')?.scrollIntoView({ behavior: 'smooth'})} className="hover:text-white transition-colors" data-testid="footer-gallery">Galerie</button></li>
              <li><button onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth'})} className="hover:text-white transition-colors" data-testid="footer-contact">Kontakt</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="uppercase tracking-widest text-xs font-medium text-primary mb-6">Social</h4>
            <ul className="space-y-4 text-white/70 font-light text-sm">
              <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-instagram">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-pinterest">Pinterest</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-facebook">Facebook</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40 font-light tracking-wide">
          <p>&copy; {new Date().getFullYear()} Floric Event Design · Olga Dück. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors" data-testid="link-impressum">Impressum</Link>
            <Link href="#" className="hover:text-white transition-colors" data-testid="link-datenschutz">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}