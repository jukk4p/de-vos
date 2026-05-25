import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ShieldCheck, X } from 'lucide-react';

const CookiesBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const consent = localStorage.getItem('de-vos-cookies-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (isVisible && bannerRef.current) {
      gsap.fromTo(bannerRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power4.out", delay: 0.5 }
      );
    }
  }, [isVisible]);

  const handleConsent = (accepted: boolean) => {
    if (bannerRef.current) {
      gsap.to(bannerRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.5,
        ease: "power4.in",
        onComplete: () => {
          localStorage.setItem('de-vos-cookies-consent', accepted ? 'accepted' : 'declined');
          setIsVisible(false);
        }
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div
      ref={bannerRef}
      className="fixed bottom-6 left-6 right-6 md:right-auto md:max-w-md z-[60] bg-surface-low border border-white/10 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col gap-4 text-left"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center border border-accent/20 bg-accent/5">
            <ShieldCheck className="w-4 h-4 text-accent" />
          </div>
          <div>
            <span className="text-accent text-[10px] font-black uppercase tracking-industrial block">Control de Privacidad</span>
            <h4 className="font-heading text-sm font-extrabold text-white uppercase tracking-wider">Uso de Cookies</h4>
          </div>
        </div>
        <button
          onClick={() => handleConsent(false)}
          className="text-primary/40 hover:text-white transition-smooth p-1 cursor-pointer"
          aria-label="Cerrar banner de cookies"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-primary/70 text-xs leading-relaxed font-medium">
        Utilizamos cookies propias y de terceros para optimizar el rendimiento de la web, analizar el tráfico y mejorar tu experiencia. Al hacer clic en "Aceptar", consientes el uso de todas las cookies. Consulta nuestra{' '}
        <Link to="/cookies" className="text-accent underline hover:text-white transition-smooth">
          Política de Cookies
        </Link>{' '}
        para más detalles.
      </p>

      <div className="flex gap-3 mt-2">
        <button
          onClick={() => handleConsent(true)}
          className="flex-1 bg-accent text-background text-[10px] font-black uppercase tracking-industrial py-3.5 hover:bg-white transition-smooth cursor-pointer text-center"
        >
          Aceptar
        </button>
        <button
          onClick={() => handleConsent(false)}
          className="flex-1 bg-transparent border border-white/20 text-white text-[10px] font-black uppercase tracking-industrial py-3.5 hover:bg-white hover:text-background transition-smooth cursor-pointer text-center"
        >
          Solo esenciales
        </button>
      </div>
    </div>
  );
};

export default CookiesBanner;
