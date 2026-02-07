import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#como-funciona', label: 'Cómo Funciona' },
  { href: '#ejemplos', label: 'Ejemplos' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#etica', label: 'Ética' },
  { href: '#contacto', label: 'Contacto' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-navy/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#inicio" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center shadow-lg shadow-teal/20 group-hover:shadow-teal/40 transition-shadow">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-navy tracking-tight">
              Aesthetic<span className="text-teal">AI</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-navy/60 hover:text-teal transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-teal after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contacto"
            className="hidden lg:inline-flex items-center px-6 py-2.5 rounded-full bg-teal text-white text-sm font-semibold hover:bg-teal-dark transition-all shadow-lg shadow-teal/20 hover:shadow-xl hover:shadow-teal/30 hover:-translate-y-0.5"
          >
            Solicitar Información
          </a>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 text-navy rounded-lg hover:bg-surface transition-colors"
            aria-label="Abrir menú"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-border-custom px-4 py-4 space-y-1 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="block px-4 py-3 rounded-xl text-navy/70 hover:bg-surface hover:text-teal transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setIsMobileOpen(false)}
            className="block text-center px-4 py-3.5 rounded-full bg-teal text-white font-semibold mt-3"
          >
            Solicitar Información
          </a>
        </div>
      </div>
    </header>
  );
}
