import { useState, useEffect } from "react";
import { Link } from "wouter";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navTextClass = isScrolled ? "text-foreground" : "text-white/90";
  const navHoverClass = isScrolled ? "hover:text-primary" : "hover:text-primary";
  const ctaBorderClass = isScrolled
    ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
    : "border-white text-white hover:bg-white hover:text-foreground";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-border py-4 shadow-sm"
          : "border-transparent py-6"
      }`}
      style={!isScrolled ? { background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)" } : {}}
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
          <button onClick={() => scrollToSection('leistungen')} className={`text-sm uppercase tracking-widest transition-colors duration-300 ${navTextClass} ${navHoverClass}`} data-testid="nav-leistungen">Leistungen</button>
          <button onClick={() => scrollToSection('ueber-uns')} className={`text-sm uppercase tracking-widest transition-colors duration-300 ${navTextClass} ${navHoverClass}`} data-testid="nav-about">Über uns</button>
          <button onClick={() => scrollToSection('galerie')} className={`text-sm uppercase tracking-widest transition-colors duration-300 ${navTextClass} ${navHoverClass}`} data-testid="nav-gallery">Galerie</button>
          <button onClick={() => scrollToSection('kontakt')} className={`px-6 py-3 border transition-all duration-300 text-sm uppercase tracking-widest ${ctaBorderClass}`} data-testid="nav-contact">
            Anfrage senden
          </button>
        </nav>
      </div>
    </header>
  );
}