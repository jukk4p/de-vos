import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { MapPin, Phone, Clock, ChevronRight, Calendar } from 'lucide-react';

const ContactPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".contact-element", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "expo.out"
      });
      gsap.from(".map-container", {
        opacity: 0,
        scale: 0.98,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.4
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.me/34606242706?text=Hola,%20me%20gustar%C3%ADa%20reservar%20una%20cita%20en%20De-Vos', '_blank');
  };

  return (
    <div ref={containerRef} className="pt-40 pb-24 px-6 max-w-7xl mx-auto min-h-screen bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
        <div className="space-y-20">
          <header className="contact-element">
            <span className="text-accent text-xs font-bold uppercase tracking-industrial mb-6 block">Ubicación & Reservas</span>
            <h1 className="display-lg text-white uppercase mb-10">
              Ven a <br/><span className="text-accent italic">Conocernos</span>
            </h1>
            <p className="text-primary/40 text-lg md:text-xl font-medium max-w-md leading-relaxed mb-12 tracking-wide">
              Te esperamos en el corazón de Coria del Río. Un espacio diseñado para tu comodidad y el mejor estilo.
            </p>
            <button 
              onClick={openWhatsApp}
              className="group relative inline-flex items-center gap-6 bg-accent text-background font-black text-[12px] px-14 py-6 rounded-none hover:bg-white transition-smooth shadow-2xl uppercase tracking-industrial accent-glow"
              aria-label="Reservar cita por WhatsApp"
            >
              <Calendar className="w-5 h-5" />
              Solicitar Turno
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
            </button>
          </header>
          
          <div className="grid grid-cols-1 gap-12">
            {[
              { 
                icon: MapPin, 
                title: "Localización", 
                content: "C. Cervantes, 10", 
                sub: "41100 Coria del Río, Sevilla",
                action: "Ver en Google Maps",
                url: "https://maps.app.goo.gl/YtAx7DkmHLYSccjn6"
              },
              { 
                icon: Phone, 
                title: "Línea Directa", 
                content: "606 24 27 06", 
                sub: "954 77 02 29 (Fijo)",
                action: "Llamar ahora",
                url: "tel:+34606242706"
              },
              { 
                icon: Clock, 
                title: "Horario de Producción", 
                content: "L-V: 10:00-14:00, 17:00-21:00", 
                sub: "Sábados: 09:30-13:30",
                action: "Ver Horarios",
                url: "#"
              }
            ].map((item, i) => (
              <div key={i} className="contact-element flex gap-8 items-start group">
                <div className="w-14 h-14 shrink-0 flex items-center justify-center border border-white/10 group-hover:bg-accent group-hover:border-accent transition-smooth">
                  <item.icon className="w-5 h-5 text-accent group-hover:text-background transition-smooth" />
                </div>
                <div>
                  <h3 className="text-accent font-black text-[11px] uppercase tracking-industrial mb-2 group-hover:text-white transition-smooth">{item.title}</h3>
                  <p className="text-white font-extrabold text-2xl mb-1 tracking-tight uppercase leading-none">{item.content}</p>
                  <p className="text-primary/40 text-xs mb-4 leading-relaxed font-bold uppercase">{item.sub}</p>
                  <a 
                    href={item.url} 
                    target={item.url.startsWith('http') ? "_blank" : undefined}
                    rel={item.url.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-industrial text-white hover:text-accent transition-smooth"
                  >
                    {item.action} <ChevronRight className="w-4 h-4 text-accent" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="map-container sticky top-40">
           <div className="relative aspect-[3/4] overflow-hidden border border-white/5 bg-surface-low p-4 shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3175.7606346296!2d-6.0560734!3d37.2889241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd120d5885555555%3A0x555555555555555!2sCalle%20Cervantes%2C%2010%2C%2041100%20Coria%20del%20R%C3%ADo%2C%20Sevilla!5e0!3m2!1ses!2ses!4v1714512345678!5m2!1ses!2ses" 
                className="w-full h-full grayscale brightness-75 opacity-70 hover:opacity-100 transition-opacity duration-1000" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Mapa de ubicación Barbería De-Vos"
              ></iframe>
           <div className="absolute inset-0 pointer-events-none border border-white/10" />
           {/* Marker overlay */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-accent animate-ping" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-accent" />
         </div>
      </div>
    </div>
  </div>
  );
};

export default ContactPage;
