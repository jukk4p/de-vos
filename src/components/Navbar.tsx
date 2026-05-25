import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scissors, Menu, X } from 'lucide-react';

interface NavbarProps {
  openWhatsApp: () => void;
}

const Navbar = ({ openWhatsApp }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú al cambiar de ruta
  useEffect(() => setIsOpen(false), [location]);

  // Navbar simplificada en la ruta de conversión /reservar
  const isReservePage = location.pathname === '/reservar';
  if (isReservePage) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-low/95 border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-50">
          <Link to="/" className="flex flex-col leading-none text-left group">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center border border-accent/40 group-hover:bg-accent transition-smooth">
                <Scissors className="w-4 h-4 text-accent group-hover:text-background transition-smooth" />
              </div>
              <span className="font-heading text-2xl font-black tracking-industrial uppercase text-white">De-Vos</span>
            </div>
            <span className="text-[9px] text-accent font-black tracking-[0.3em] uppercase mt-2 pl-11 opacity-60">Barbería · Coria del Río</span>
          </Link>
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${scrolled ? 'bg-surface-low/90 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-50">
        <Link to="/" className="flex flex-col leading-none text-left group">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center border border-accent/40 group-hover:bg-accent transition-smooth">
              <Scissors className="w-4 h-4 text-accent group-hover:text-background transition-smooth" aria-hidden="true" />
            </div>
            <span className="font-heading text-2xl font-black tracking-industrial uppercase text-white">De-Vos</span>
          </div>
          <span className="text-[9px] text-accent font-black tracking-[0.3em] uppercase mt-2 pl-11 opacity-60">Barbería · Coria del Río</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex items-center gap-10 text-[11px] font-extrabold uppercase tracking-industrial">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`transition-smooth hover:text-accent relative py-2 ${location.pathname === link.path ? 'text-accent after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-accent' : 'text-primary/70'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link 
            to="/reservar"
            className="bg-accent text-background font-black px-8 py-3 rounded-none hover:bg-white transition-smooth text-[11px] uppercase tracking-industrial shadow-xl active:scale-95 accent-glow"
          >
            RESERVAR →
          </Link>
        </div>

        {/* Mobile Toggle & RESERVAR button always visible */}
        <div className="flex md:hidden items-center gap-4">
          <Link 
            to="/reservar"
            className="bg-accent text-background font-black px-4 py-2.5 rounded-none text-[10px] uppercase tracking-industrial shadow-md active:scale-95"
          >
            RESERVAR
          </Link>
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
      <div className={`fixed inset-0 z-40 bg-background md:hidden transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col h-full pt-32 pb-12 px-8">
          {/* Menu Links */}
          <div className="flex flex-col gap-8 text-3xl font-heading font-black tracking-industrial uppercase">
            {navLinks.map((link, i) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`transition-smooth ${location.pathname === link.path ? 'text-accent' : 'text-white/40 hover:text-white'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {link.name}
              </Link>
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

            <Link 
              to="/reservar"
              className="w-full bg-accent text-background py-6 rounded-none font-black text-xs uppercase tracking-industrial accent-glow active:scale-95 transition-transform inline-block text-center"
            >
              Reservar Cita Ahora
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
