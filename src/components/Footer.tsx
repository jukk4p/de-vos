import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors } from 'lucide-react';

interface FooterProps {
  openWhatsApp: () => void;
}

const Footer: React.FC<FooterProps> = ({ openWhatsApp }) => {
  return (
    <footer className="bg-surface-lowest pt-32 pb-16 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 mb-24">
        
        {/* Columna 1 — Marca */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link to="/" className="flex flex-col leading-none items-center md:items-start mb-10 group">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center border border-accent/40 group-hover:bg-accent transition-smooth">
                <Scissors className="w-4 h-4 text-accent group-hover:text-background transition-smooth" />
              </div>
              <span className="font-heading text-2xl font-black tracking-industrial uppercase text-white">De-Vos</span>
            </div>
            <span className="text-[9px] text-accent font-black tracking-[0.3em] uppercase mt-2 pl-0 md:pl-11 opacity-60">Barbería · Coria del Río</span>
          </Link>
          <p className="text-primary/40 text-sm font-medium leading-relaxed mb-8 max-w-xs mx-auto md:mx-0">
            Tu barbería de confianza en Coria del Río. Un espacio diseñado para la precisión técnica y el bienestar masculino.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a 
              href="https://www.instagram.com/barberia_devos/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-smooth group"
              aria-label="Seguir en Instagram"
            >
              <svg className="w-5 h-5 text-white group-hover:text-background transition-smooth fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a 
              href="https://www.facebook.com/barberia.devos.5/?locale=es_ES" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-smooth group"
              aria-label="Seguir en Facebook"
            >
              <svg className="w-5 h-5 text-white group-hover:text-background transition-smooth fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Columna 2 — Navegación */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-heading text-[11px] font-black mb-10 text-accent uppercase tracking-industrial">Navegación</h4>
          <ul className="space-y-5 text-[11px] font-extrabold uppercase tracking-industrial">
            <li><Link to="/" className="text-primary/40 hover:text-white transition-smooth">Inicio</Link></li>
            <li><Link to="/servicios" className="text-primary/40 hover:text-white transition-smooth">Servicios & Tarifas</Link></li>
            <li><Link to="/galeria" className="text-primary/40 hover:text-white transition-smooth">Galería</Link></li>
            <li><Link to="/nosotros" className="text-primary/40 hover:text-white transition-smooth">Sobre Nosotros</Link></li>
            <li><Link to="/reservar" className="text-primary/40 hover:text-white transition-smooth">Reservar Cita</Link></li>
            <li><Link to="/contacto" className="text-primary/40 hover:text-white transition-smooth">Contacto</Link></li>
          </ul>
        </div>

        {/* Columna 3 — Contacto */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-heading text-[11px] font-black mb-10 text-accent uppercase tracking-industrial">Encuéntranos</h4>
          <div className="space-y-6 text-[11px] font-bold uppercase tracking-widest text-left">
            <div>
              <p className="text-accent text-[9px] font-black tracking-industrial mb-1">Ubicación</p>
              <a 
                href="https://maps.app.goo.gl/YtAx7DkmHLYSccjn6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-smooth font-extrabold normal-case"
              >
                C. Cervantes, 10, Coria del Río
              </a>
            </div>

            <div>
              <p className="text-accent text-[9px] font-black tracking-industrial mb-1">Teléfono</p>
              <a href="tel:+34606242706" className="text-white hover:text-accent transition-smooth font-extrabold">
                606 24 27 06
              </a>
            </div>

            <div>
              <p className="text-accent text-[9px] font-black tracking-industrial mb-1">Horario</p>
              <p className="text-primary/40 leading-relaxed font-semibold">
                L-V: 10:00-14:00 / 17:00-21:00 <br/>
                Sábados: 09:30-13:30
              </p>
            </div>
          </div>
          
          <button 
            onClick={openWhatsApp}
            className="mt-8 px-8 border border-white/10 text-white font-black text-[10px] uppercase tracking-industrial py-4 hover:bg-accent hover:text-background hover:border-accent transition-smooth w-full max-w-[280px] md:w-auto flex items-center justify-center gap-3"
          >
            <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.93a7.904 7.904 0 0 0 1.08 3.971L0 16l4.232-1.11a7.9 7.9 0 0 0 3.758.955h.005c4.368 0 7.928-3.56 7.933-7.93a7.88 7.88 0 0 0-2.327-5.589zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.562 6.562 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.69-4.82c-.202-.1-1.196-.59-1.381-.66-.184-.069-.319-.103-.453.1-.133.202-.516.66-.633.793-.118.133-.235.148-.438.047a5.556 5.556 0 0 1-1.63-1.008 5.86 5.86 0 0 1-1.127-1.405c-.12-.202-.012-.311.089-.41.09-.09.202-.236.3-.354.099-.118.133-.2.202-.338.069-.138.035-.26-.017-.362-.052-.1-.453-1.096-.622-1.503-.164-.397-.333-.342-.453-.349-.117-.006-.25-.008-.383-.008-.134 0-.353.05-.537.25-.185.202-.707.69-.707 1.684 0 .994.723 1.954.823 2.087.1.133 1.422 2.17 3.447 3.04.482.207.859.33 1.152.424.484.154.925.132 1.272.08.387-.058 1.196-.49 1.365-1.036.17-.546.17-1.012.12-1.11-.049-.098-.184-.148-.387-.25z"/>
            </svg>
            Reservar por WhatsApp
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 border-t border-white/5 pt-12">
        <p className="text-primary/20 text-[10px] font-bold uppercase tracking-[0.4em]">
          &copy; 2026 Barbería De-Vos · Todos los derechos reservados
        </p>
        <div className="flex flex-wrap justify-center gap-10 text-primary/20 text-[10px] font-bold uppercase tracking-[0.4em]">
          <Link to="/privacidad" className="hover:text-accent transition-smooth cursor-pointer">Política de Privacidad</Link>
          <Link to="/aviso-legal" className="hover:text-accent transition-smooth cursor-pointer">Aviso Legal</Link>
          <Link to="/cookies" className="hover:text-accent transition-smooth cursor-pointer">Política de Cookies</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
