import { Link } from "wouter";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scroll = (id: string) => () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-secondary text-secondary-foreground pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <button onClick={scrollToTop} className="text-4xl font-serif font-semibold tracking-wider text-primary mb-6 block text-left" data-testid="footer-logo">
              FLORIC
            </button>
            <p className="text-white/60 font-light max-w-md leading-relaxed mb-6">{t.footer.desc}</p>
            <div className="text-white/50 font-light text-sm space-y-1">
              <p>{t.footer.address}</p>
              <p>
                <a href="tel:+4915733195342" className="hover:text-white transition-colors">+49 (0) 15733 195342</a>
                {" · "}
                <a href="mailto:kontakt@floric.de" className="hover:text-white transition-colors">kontakt@floric.de</a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-xs font-medium text-white/40 mb-6">{t.footer.navTitle}</h4>
            <ul className="space-y-4 text-white/70 font-light text-sm">
              <li><button onClick={scroll("leistungen")} className="hover:text-white transition-colors" data-testid="footer-leistungen">{t.footer.navLinks.services}</button></li>
              <li><button onClick={scroll("ueber-uns")} className="hover:text-white transition-colors" data-testid="footer-about">{t.footer.navLinks.about}</button></li>
              <li><button onClick={scroll("galerie")} className="hover:text-white transition-colors" data-testid="footer-gallery">{t.footer.navLinks.gallery}</button></li>
              <li><button onClick={scroll("kontakt")} className="hover:text-white transition-colors" data-testid="footer-contact">{t.footer.navLinks.contact}</button></li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-xs font-medium text-white/40 mb-6">{t.footer.socialTitle}</h4>
            <ul className="space-y-4 text-white/70 font-light text-sm">
              <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-instagram">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-pinterest">Pinterest</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-facebook">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40 font-light tracking-wide">
          <p>{t.footer.copyright}</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors" data-testid="link-impressum">{t.footer.impressum}</Link>
            <Link href="#" className="hover:text-white transition-colors" data-testid="link-datenschutz">{t.footer.datenschutz}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
