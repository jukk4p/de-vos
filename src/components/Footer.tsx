import { Scissors } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-surface-lowest pt-32 pb-16 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 mb-24">
        
        {/* Columna 1 — Marca */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a href="/" className="flex flex-col leading-none items-center md:items-start mb-10 group">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center border border-accent/40 group-hover:bg-accent transition-smooth">
                <Scissors className="w-4 h-4 text-accent group-hover:text-background transition-smooth" />
              </div>
              <span className="font-heading text-2xl font-black tracking-industrial uppercase text-white">De-Vos</span>
            </div>
            <span className="text-[9px] text-accent font-black tracking-[0.3em] uppercase mt-2 pl-0 md:pl-11 opacity-60">Barbería · Coria del Río</span>
          </a>
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
            <li><a href="/" className="text-primary/40 hover:text-white transition-smooth">Inicio</a></li>
            <li><a href="/servicios" className="text-primary/40 hover:text-white transition-smooth">Servicios & Tarifas</a></li>
            <li><a href="/galeria" className="text-primary/40 hover:text-white transition-smooth">Galería</a></li>
            <li><a href="/nosotros" className="text-primary/40 hover:text-white transition-smooth">Sobre Nosotros</a></li>
            <li><a href="/reservar" className="text-primary/40 hover:text-white transition-smooth">Reservar Cita</a></li>
            <li><a href="/contacto" className="text-primary/40 hover:text-white transition-smooth">Contacto</a></li>
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
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 border-t border-white/5 pt-12">
        <p className="text-primary/20 text-[10px] font-bold uppercase tracking-[0.4em]">
          &copy; 2026 Barbería De-Vos · Todos los derechos reservados
        </p>
        <div className="flex flex-wrap justify-center gap-10 text-primary/20 text-[10px] font-bold uppercase tracking-[0.4em]">
          <a href="/privacidad" className="hover:text-accent transition-smooth cursor-pointer">Política de Privacidad</a>
          <a href="/aviso-legal" className="hover:text-accent transition-smooth cursor-pointer">Aviso Legal</a>
          <a href="/cookies" className="hover:text-accent transition-smooth cursor-pointer">Política de Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
