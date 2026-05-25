import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Phone, MessageSquare } from 'lucide-react';

interface FooterProps {
  openWhatsApp: () => void;
}

const Footer: React.FC<FooterProps> = ({ openWhatsApp }) => {
  return (
    <footer className="bg-surface-lowest pt-32 pb-16 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 mb-24">
        {/* Brand Column */}
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
          <p className="text-primary/40 text-sm font-medium leading-relaxed mb-10 max-w-xs mx-auto md:mx-0">
            Elevando la maestría del corte en Coria del Río. Un espacio diseñado para la precisión técnica y el bienestar masculino.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-heading text-[11px] font-black mb-10 text-accent uppercase tracking-industrial">Navegación</h4>
          <ul className="space-y-5 text-[11px] font-extrabold uppercase tracking-industrial">
            <li><Link to="/" className="text-primary/40 hover:text-white transition-smooth">Inicio</Link></li>
            <li><Link to="/servicios" className="text-primary/40 hover:text-white transition-smooth">Servicios & Tarifas</Link></li>
            <li><Link to="/contacto" className="text-primary/40 hover:text-white transition-smooth">Ubicación & Contacto</Link></li>
            <li><button onClick={openWhatsApp} className="text-primary/40 hover:text-white transition-smooth text-center md:text-left uppercase">Reserva Directa</button></li>
          </ul>
        </div>

        {/* Support/Contact */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-heading text-[11px] font-black mb-10 text-accent uppercase tracking-industrial">Contacto & Redes</h4>
          <div className="space-y-4 mb-8">
            <p className="text-[10px] text-primary/40 font-bold uppercase tracking-industrial">Líneas de atención:</p>
            <p className="text-white font-heading text-4xl font-black leading-none">606 24 27 06</p>
            <p className="text-white/40 font-heading text-2xl font-bold">954 77 02 29</p>
          </div>
          <div className="flex gap-4 justify-center md:justify-start">
            <a 
              href="https://www.instagram.com/barberia_devos/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-smooth group"
              aria-label="Seguir en Instagram"
            >
              <MessageSquare className="w-5 h-5 text-white group-hover:text-background transition-smooth" />
            </a>
            <button 
              onClick={openWhatsApp}
              className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] transition-smooth group"
              aria-label="Contactar por WhatsApp"
            >
              <Phone className="w-5 h-5 text-white group-hover:text-white transition-smooth" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 border-t border-white/5 pt-12">
        <p className="text-primary/20 text-[10px] font-bold uppercase tracking-[0.4em]">
          &copy; 2025 Barbería De-Vos · Todos los derechos reservados
        </p>
        <div className="flex gap-10 text-primary/20 text-[10px] font-bold uppercase tracking-[0.4em]">
          <a href="#" className="hover:text-accent transition-smooth cursor-pointer">Política de privacidad</a>
          <span className="hover:text-accent transition-smooth cursor-pointer">Cookies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
