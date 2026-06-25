import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { MapPin, Phone, Clock, ChevronRight, Calendar, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    servicio: '',
    fecha: '',
    mensaje: ''
  });
  const [submitted, setSubmitted] = useState(false);

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
      gsap.from(".form-container", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.me/34606242706?text=Hola,%20me%20gustar%C3%ADa%20reservar%20una%20cita%20en%20De-Vos', '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div ref={containerRef} className="pt-40 pb-24 px-6 max-w-3xl mx-auto min-h-screen bg-background">
      <div className="space-y-16 contact-element">
        <header className="text-center">
          <span className="text-accent text-xs font-bold uppercase tracking-industrial mb-6 block">Ubicación & Contacto</span>
          <h1 className="display-lg text-white uppercase mb-8">
            Ven a <br/><span className="text-accent italic">Conocernos</span>
          </h1>
          <p className="text-primary/40 text-lg font-medium leading-relaxed tracking-wide max-w-xl mx-auto">
            Te esperamos en el corazón de Coria del Río. Un espacio diseñado para tu comodidad y el mejor estilo.
          </p>
        </header>

        {/* Tarjeta de WhatsApp Integrada */}
        <div className="bg-surface-low p-8 md:p-12 border border-white/5 border-t-2 border-t-accent shadow-2xl space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-accent text-[10px] font-black uppercase tracking-industrial mb-2 block">Contacto Inmediato</span>
            <h2 className="text-2xl md:text-3xl text-white font-bold uppercase tracking-wider">Agendar por WhatsApp</h2>
            <p className="text-primary/50 text-sm leading-relaxed mt-3">
              Prescindimos de formularios lentos. Haz clic abajo para abrir chat directo y confirmar tu turno en minutos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
            {[
              "Respuesta rápida en menos de 10 minutos.",
              "Elige tu barbero de preferencia directamente en el chat.",
              "Modifica o cancela tu cita de forma súper sencilla."
            ].map((text, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4 border border-white/5 bg-background/50">
                <CheckCircle className="w-5 h-5 text-accent mb-3" />
                <p className="text-white/80 text-[10px] font-bold uppercase tracking-wider leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <button 
            onClick={openWhatsApp}
            className="w-full bg-accent text-background font-black text-xs uppercase tracking-industrial py-4 hover:bg-white transition-smooth shadow-lg accent-glow flex items-center justify-center gap-3 cursor-pointer group"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964 1.003-3.586c-.608-1.066-.928-2.298-.928-3.568 0-3.928 3.195-7.124 7.124-7.124 3.929 0 7.124 3.196 7.124 7.124 0 3.928-3.196 7.124-7.124 7.124z"/>
            </svg>
            Escribir por WhatsApp
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-6">
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
            }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-start group justify-center text-left max-w-sm mx-auto w-full">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center border border-white/10 group-hover:bg-accent group-hover:border-accent transition-smooth">
                <item.icon className="w-4 h-4 text-accent group-hover:text-background transition-smooth" />
              </div>
              <div>
                <h3 className="text-accent font-black text-[10px] uppercase tracking-industrial mb-1">{item.title}</h3>
                <p className="text-white font-bold text-lg leading-tight uppercase">{item.content}</p>
                <p className="text-primary/40 text-[10px] leading-relaxed font-bold uppercase">{item.sub}</p>
                <a 
                  href={item.url} 
                  target={item.url.startsWith('http') ? "_blank" : undefined}
                  rel={item.url.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-industrial text-white hover:text-accent transition-smooth mt-2"
                >
                  {item.action} <ChevronRight className="w-3.5 h-3.5 text-accent" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4 items-start group justify-center text-left max-w-xs mx-auto">
          <div className="w-10 h-10 shrink-0 flex items-center justify-center border border-white/10 group-hover:bg-accent group-hover:border-accent transition-smooth">
            <Clock className="w-4 h-4 text-accent group-hover:text-background transition-smooth" />
          </div>
          <div>
            <h3 className="text-accent font-black text-[10px] uppercase tracking-industrial mb-1">Horario de Producción</h3>
            <p className="text-white font-bold text-lg leading-tight uppercase">L-V: 10:00-14:00, 17:00-21:00</p>
            <p className="text-primary/40 text-[10px] leading-relaxed font-bold uppercase">Sábados: 09:30-13:30</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
