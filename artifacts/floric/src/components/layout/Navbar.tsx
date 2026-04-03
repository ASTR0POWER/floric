import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useLanguage } from "@/context/LanguageContext";
import type { Language } from "@/context/LanguageContext";

const LANGS: Language[] = ["de", "ru", "en"];

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      <path d="M2 12h20" />
    </svg>
  );
}

function LangSwitcher({
  lang,
  setLang,
  onDark,
}: {
  lang: Language;
  setLang: (l: Language) => void;
  onDark: boolean;
}) {
  const base = onDark ? "text-white" : "text-foreground";
  const active = onDark ? "opacity-100" : "opacity-100";
  const inactive = "opacity-30 hover:opacity-60";

  return (
    <div className={`flex items-center gap-1.5 ${base}`} data-testid="lang-switcher">
      <GlobeIcon className="opacity-50 shrink-0" />
      {LANGS.map((l, i) => (
        <span key={l} className="flex items-center gap-1.5">
          {i > 0 && <span className="opacity-20 select-none text-xs">|</span>}
          <button
            onClick={() => setLang(l)}
            className={`text-xs uppercase tracking-widest font-medium transition-opacity duration-200 ${lang === l ? active : inactive}`}
            data-testid={`btn-lang-${l}`}
            title={l === "de" ? "Deutsch" : l === "ru" ? "Русский" : "English"}
          >
            {l.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}

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

            <LangSwitcher lang={lang} setLang={setLang} onDark={!isScrolled} />

            <button onClick={() => scrollToSection("kontakt")} className={`px-6 py-3 border transition-all duration-300 text-sm uppercase tracking-widest ${ctaBorderClass}`} data-testid="nav-contact">
              {t.nav.cta}
            </button>
          </nav>

          <div className="flex md:hidden items-center gap-3">
            <LangSwitcher lang={lang} setLang={setLang} onDark={!isScrolled} />
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
          <div className="w-16 h-[1px] bg-white/20 mb-4"></div>
          <button onClick={() => scrollToSection("leistungen")} className="text-3xl font-serif text-white hover:opacity-60 transition-opacity duration-300" data-testid="mobile-nav-leistungen">{t.nav.services}</button>
          <button onClick={() => scrollToSection("ueber-uns")} className="text-3xl font-serif text-white hover:opacity-60 transition-opacity duration-300" data-testid="mobile-nav-about">{t.nav.about}</button>
          <button onClick={() => scrollToSection("galerie")} className="text-3xl font-serif text-white hover:opacity-60 transition-opacity duration-300" data-testid="mobile-nav-gallery">{t.nav.gallery}</button>
          <button onClick={() => scrollToSection("kontakt")} className="text-3xl font-serif text-white hover:opacity-60 transition-opacity duration-300" data-testid="mobile-nav-contact">{t.nav.contact}</button>
          <div className="w-16 h-[1px] bg-white/20 mt-4"></div>
          <LangSwitcher lang={lang} setLang={setLang} onDark={true} />
          <button
            onClick={() => scrollToSection("kontakt")}
            className="px-12 py-4 bg-white text-black uppercase tracking-widest text-sm font-medium hover:bg-white/90 transition-colors"
            data-testid="mobile-nav-cta"
          >
            {t.nav.cta}
          </button>
        </div>
      )}
    </>
  );
}
