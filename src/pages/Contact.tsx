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
    <div ref={containerRef} className="pt-40 pb-24 px-6 max-w-7xl mx-auto min-h-screen bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        
        <div className="space-y-16 contact-element">
          <header>
            <span className="text-accent text-xs font-bold uppercase tracking-industrial mb-6 block">Ubicación & Contacto</span>
            <h1 className="display-lg text-white uppercase mb-8">
              Ven a <br/><span className="text-accent italic">Conocernos</span>
            </h1>
            <p className="text-primary/40 text-lg font-medium leading-relaxed tracking-wide">
              Te esperamos en el corazón de Coria del Río. Un espacio diseñado para tu comodidad y el mejor estilo.
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <div key={i} className="flex gap-4 items-start group">
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

          <div className="flex gap-4 items-start group">
            <div className="w-10 h-10 shrink-0 flex items-center justify-center border border-white/10 group-hover:bg-accent group-hover:border-accent transition-smooth">
              <Clock className="w-4 h-4 text-accent group-hover:text-background transition-smooth" />
            </div>
            <div>
              <h3 className="text-accent font-black text-[10px] uppercase tracking-industrial mb-1">Horario de Producción</h3>
              <p className="text-white font-bold text-lg leading-tight uppercase">L-V: 10:00-14:00, 17:00-21:00</p>
              <p className="text-primary/40 text-[10px] leading-relaxed font-bold uppercase">Sábados: 09:30-13:30</p>
            </div>
          </div>

          <div className="map-container w-full">
            <div className="relative aspect-[16/10] overflow-hidden border border-white/5 bg-surface-low p-2 shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3175.7606346296!2d-6.0560734!3d37.2889241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd120d5885555555%3A0x555555555555555!2sCalle%20Cervantes%2C%2010%2C%2041100%20Coria%20del%20R%C3%ADo%2C%20Sevilla!5e0!3m2!1ses!2ses!4v1714512345678!5m2!1ses!2ses" 
                className="w-full h-full grayscale brightness-75 opacity-70 hover:opacity-100 transition-opacity duration-1000" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Mapa de ubicación Barbería De-Vos"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border border-white/10" />
            </div>
          </div>
        </div>

        <div className="form-container bg-surface-low p-8 md:p-12 border border-white/5 shadow-2xl relative">
          {submitted ? (
            <div className="text-center py-20 space-y-6">
              <div className="w-16 h-16 bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto rounded-none">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="headline-lg text-2xl text-white uppercase tracking-wider">¡Solicitud Recibida!</h3>
              <p className="text-primary/50 text-sm max-w-sm mx-auto font-medium">
                Nos pondremos en contacto contigo a la brevedad en el teléfono <span className="text-white font-bold">{formData.telefono}</span> para confirmar tu turno.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-xs font-black text-accent uppercase tracking-industrial hover:text-white transition-smooth pt-4 inline-block"
              >
                Enviar otra solicitud
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <span className="text-accent text-[10px] font-black uppercase tracking-industrial mb-2 block">Sistema de Citas</span>
                <h2 className="headline-lg text-2xl md:text-3xl text-white uppercase mb-2">Solicitar Reserva</h2>
                <p className="text-primary/40 text-xs font-semibold uppercase">Completa el formulario y asegura tu lugar.</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="nombre" className="block text-[10px] font-black uppercase tracking-industrial text-white/60">Nombre Completo</label>
                  <input 
                    type="text" 
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className="w-full bg-background border border-white/10 px-5 py-4 text-white text-sm focus:outline-none focus:border-accent transition-smooth placeholder-white/20"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="telefono" className="block text-[10px] font-black uppercase tracking-industrial text-white/60">Teléfono móvil</label>
                  <input 
                    type="tel" 
                    id="telefono"
                    name="telefono"
                    required
                    pattern="[0-9]{9,15}"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className="w-full bg-background border border-white/10 px-5 py-4 text-white text-sm focus:outline-none focus:border-accent transition-smooth placeholder-white/20"
                    placeholder="Ej. 606242706"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="servicio" className="block text-[10px] font-black uppercase tracking-industrial text-white/60">Selecciona el Servicio</label>
                  <select 
                    id="servicio"
                    name="servicio"
                    required
                    value={formData.servicio}
                    onChange={handleInputChange}
                    className="w-full bg-background border border-white/10 px-5 py-4 text-white text-sm focus:outline-none focus:border-accent transition-smooth appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Selecciona un servicio...</option>
                    <option value="corte-caballero">Corte Caballero (12€)</option>
                    <option value="corte-degradado">Corte Degradado (14€)</option>
                    <option value="afeitado-clasico">Afeitado Clásico (10€)</option>
                    <option value="perfilado-barba">Perfilado de Barba (8€)</option>
                    <option value="servicio-completo">Servicio Completo (22€)</option>
                    <option value="corte-junior">Corte Junior (10€)</option>
                    <option value="otro">Otro Servicio</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="fecha" className="block text-[10px] font-black uppercase tracking-industrial text-white/60">Fecha Preferida</label>
                  <input 
                    type="date" 
                    id="fecha"
                    name="fecha"
                    required
                    value={formData.fecha}
                    onChange={handleInputChange}
                    className="w-full bg-background border border-white/10 px-5 py-4 text-white text-sm focus:outline-none focus:border-accent transition-smooth"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="mensaje" className="block text-[10px] font-black uppercase tracking-industrial text-white/60">Mensaje o Notas (Opcional)</label>
                  <textarea 
                    id="mensaje"
                    name="mensaje"
                    rows={3}
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    className="w-full bg-background border border-white/10 px-5 py-4 text-white text-sm focus:outline-none focus:border-accent transition-smooth placeholder-white/20 resize-none"
                    placeholder="Detalles sobre tu estilo o preferencia horaria..."
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-accent text-background font-black text-xs uppercase tracking-industrial py-5 hover:bg-white transition-smooth shadow-lg accent-glow flex items-center justify-center gap-3 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Enviar Solicitud
              </button>
            </form>
          )}

          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <span className="text-[10px] text-primary/30 uppercase tracking-industrial font-bold block mb-4">¿Prefieres agendar al instante?</span>
            <button 
              onClick={openWhatsApp}
              className="w-full bg-white/5 border border-white/10 text-white font-extrabold text-xs uppercase tracking-industrial py-5 hover:bg-white hover:text-background transition-smooth flex items-center justify-center gap-3"
            >
              Escríbenos por WhatsApp →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
