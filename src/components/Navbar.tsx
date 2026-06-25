import { useState, useEffect } from 'react';
import { Scissors, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pathname, setPathname] = useState('/');

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const openWhatsApp = () => {
    window.open('https://wa.me/34606242706?text=Hola,%20me%20gustar%C3%ADa%20reservar%20una%20cita%20en%20De-Vos', '_blank');
  };

  const isReservePage = pathname === '/reservar';
  if (isReservePage) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-low/95 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-50">
          <a href="/" className="flex flex-col leading-none text-left group">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center border border-accent/40 group-hover:bg-accent transition-smooth">
                <Scissors className="w-4 h-4 text-accent group-hover:text-background transition-smooth" />
              </div>
              <span className="font-heading text-2xl font-black tracking-industrial uppercase text-white">De-Vos</span>
            </div>
            <span className="text-[9px] text-accent font-black tracking-[0.3em] uppercase mt-2 pl-11 opacity-60">Barbería · Coria del Río</span>
          </a>
          <a 
            href="tel:+34606242706" 
            className="text-accent text-[11px] font-black uppercase tracking-industrial hover:text-white transition-smooth flex items-center gap-2"
          >
            Llamar: 606 24 27 06
          </a>
        </div>
      </nav>
    );
  }

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Galería', path: '/galeria' },
    { name: 'Sobre Nosotros', path: '/nosotros' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${scrolled ? 'bg-surface-low/90 backdrop-blur-xl py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-50">
        <a href="/" className="flex flex-col leading-none text-left group">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center border border-accent/40 group-hover:bg-accent transition-smooth">
              <Scissors className="w-4 h-4 text-accent group-hover:text-background transition-smooth" aria-hidden="true" />
            </div>
            <span className="font-heading text-2xl font-black tracking-industrial uppercase text-white">De-Vos</span>
          </div>
          <span className="text-[9px] text-accent font-black tracking-[0.3em] uppercase mt-2 pl-11 opacity-60">Barbería · Coria del Río</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex items-center gap-10 text-[11px] font-extrabold uppercase tracking-industrial">
            {navLinks.map((link) => (
              <a 
                key={link.path}
                href={link.path} 
                className={`transition-smooth hover:text-accent relative py-2 focus-visible:ring-1 focus-visible:ring-accent focus-visible:outline-none ${pathname === link.path ? 'text-accent after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-accent' : 'text-primary/70 after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left'}`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <a 
            href="/reservar"
            className="bg-accent text-background font-black px-5 py-2.5 rounded-none hover:bg-white transition-smooth text-[10px] uppercase tracking-industrial shadow-lg active:scale-95 accent-glow"
          >
            RESERVAR →
          </a>
        </div>

        {/* Mobile Toggle & RESERVAR */}
        <div className="flex md:hidden items-center gap-4">
          <a 
            href="/reservar"
            className="bg-accent text-background font-black px-4 py-2.5 rounded-none text-[10px] uppercase tracking-industrial shadow-md active:scale-95"
          >
            RESERVAR
          </a>
          <button 
            className="text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-[#141313] md:hidden transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col h-full pt-32 pb-12 px-8">
          <div className="flex flex-col gap-8 text-3xl font-heading font-black tracking-industrial uppercase">
            {navLinks.map((link, i) => (
              <a 
                key={link.path}
                href={link.path} 
                className={`transition-smooth ${pathname === link.path ? 'text-accent' : 'text-white/40 hover:text-white'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-auto space-y-10">
            <div className="h-px w-12 bg-accent/30" />
            
            <div className="space-y-4">
              <p className="text-accent text-[10px] font-black uppercase tracking-industrial">Contacto Directo</p>
              <button onClick={openWhatsApp} className="text-xl font-bold text-white hover:text-accent transition-smooth">
                606 24 27 06
              </button>
            </div>

            <a 
              href="/reservar"
              className="w-full bg-accent text-background py-4 rounded-none font-black text-xs uppercase tracking-industrial accent-glow active:scale-95 transition-transform inline-block text-center"
            >
              Reservar Cita Ahora
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
