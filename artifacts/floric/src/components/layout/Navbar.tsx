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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-border py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-3xl font-serif font-semibold tracking-wider text-primary cursor-pointer" data-testid="link-home">
          FLORIC
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('leistungen')} className="text-sm uppercase tracking-widest hover:text-primary transition-colors duration-300 text-foreground" data-testid="nav-leistungen">Leistungen</button>
          <button onClick={() => scrollToSection('ueber-uns')} className="text-sm uppercase tracking-widest hover:text-primary transition-colors duration-300 text-foreground" data-testid="nav-about">Über uns</button>
          <button onClick={() => scrollToSection('galerie')} className="text-sm uppercase tracking-widest hover:text-primary transition-colors duration-300 text-foreground" data-testid="nav-gallery">Galerie</button>
          <button onClick={() => scrollToSection('kontakt')} className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm uppercase tracking-widest" data-testid="nav-contact">
            Anfrage senden
          </button>
        </nav>
      </div>
    </header>
  );
}