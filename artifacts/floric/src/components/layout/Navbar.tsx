import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const navTextClass = isScrolled ? "text-foreground" : "text-white/90";
  const ctaBorderClass = isScrolled
    ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
    : "border-white text-white hover:bg-white hover:text-foreground";
  const iconColor = isScrolled ? "bg-foreground" : "bg-white";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b backdrop-blur-md ${
          isScrolled
            ? "bg-background/80 border-border py-4 shadow-sm"
            : "bg-black/30 border-white/10 py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            className={`text-3xl font-serif font-semibold tracking-wider cursor-pointer transition-colors duration-300 ${isScrolled ? "text-primary" : "text-white"}`}
            data-testid="link-home"
          >
            FLORIC
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("leistungen")} className={`text-sm uppercase tracking-widest hover:text-primary transition-colors duration-300 ${navTextClass}`} data-testid="nav-leistungen">{t.nav.services}</button>
            <button onClick={() => scrollToSection("ueber-uns")} className={`text-sm uppercase tracking-widest hover:text-primary transition-colors duration-300 ${navTextClass}`} data-testid="nav-about">{t.nav.about}</button>
            <button onClick={() => scrollToSection("galerie")} className={`text-sm uppercase tracking-widest hover:text-primary transition-colors duration-300 ${navTextClass}`} data-testid="nav-gallery">{t.nav.gallery}</button>

            <button
              onClick={() => setLang(lang === "de" ? "ru" : "de")}
              className={`text-xs uppercase tracking-widest border px-3 py-1.5 transition-all duration-300 font-medium ${isScrolled ? "border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground" : "border-white/40 text-white/80 hover:bg-white/20"}`}
              data-testid="btn-lang-toggle"
              title={lang === "de" ? "Switch to Russian" : "Auf Deutsch wechseln"}
            >
              {lang === "de" ? "RU" : "DE"}
            </button>

            <button onClick={() => scrollToSection("kontakt")} className={`px-6 py-3 border transition-all duration-300 text-sm uppercase tracking-widest ${ctaBorderClass}`} data-testid="nav-contact">
              {t.nav.cta}
            </button>
          </nav>

          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setLang(lang === "de" ? "ru" : "de")}
              className={`text-xs uppercase tracking-widest border px-2.5 py-1 transition-all duration-300 font-medium ${isScrolled ? "border-primary/40 text-primary" : "border-white/40 text-white/80"}`}
              data-testid="btn-lang-toggle-mobile"
            >
              {lang === "de" ? "RU" : "DE"}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex flex-col gap-1.5 p-2"
              data-testid="btn-mobile-menu"
              aria-label="Menü"
            >
              <span className={`block w-6 h-[1.5px] transition-all duration-300 ${iconColor} ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-[1.5px] transition-all duration-300 ${iconColor} ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-[1.5px] transition-all duration-300 ${iconColor} ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#111] flex flex-col items-center justify-center gap-10 md:hidden">
          <div className="w-16 h-[1px] bg-primary mb-4"></div>
          <button onClick={() => scrollToSection("leistungen")} className="text-3xl font-serif text-white hover:text-primary transition-colors duration-300" data-testid="mobile-nav-leistungen">{t.nav.services}</button>
          <button onClick={() => scrollToSection("ueber-uns")} className="text-3xl font-serif text-white hover:text-primary transition-colors duration-300" data-testid="mobile-nav-about">{t.nav.about}</button>
          <button onClick={() => scrollToSection("galerie")} className="text-3xl font-serif text-white hover:text-primary transition-colors duration-300" data-testid="mobile-nav-gallery">{t.nav.gallery}</button>
          <button onClick={() => scrollToSection("kontakt")} className="text-3xl font-serif text-white hover:text-primary transition-colors duration-300" data-testid="mobile-nav-contact">{t.nav.contact}</button>
          <div className="w-16 h-[1px] bg-primary mt-4"></div>
          <button
            onClick={() => scrollToSection("kontakt")}
            className="px-12 py-4 bg-primary text-primary-foreground uppercase tracking-widest text-sm font-medium hover:bg-primary/90 transition-colors"
            data-testid="mobile-nav-cta"
          >
            {t.nav.cta}
          </button>
        </div>
      )}
    </>
  );
}
