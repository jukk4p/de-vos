import { useState, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Phone, MapPin, Clock, CheckCircle } from 'lucide-react';

const ReservePage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    servicio: '',
    fecha: '',
    hora: '',
    mensaje: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".reserve-element", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "expo.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const today = new Date().toISOString().split('T')[0];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateVal = e.target.value;
    const selectedDate = new Date(dateVal);
    const day = selectedDate.getUTCDay(); // 0 is Sunday in UTC
    if (day === 0) {
      alert("Los domingos la barbería está cerrada. Por favor, selecciona otro día.");
      setFormData(prev => ({ ...prev, fecha: '' }));
    } else {
      setFormData(prev => ({ ...prev, fecha: dateVal }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Formatear mensaje para WhatsApp
    const serviceLabels: { [key: string]: string } = {
      'corte-caballero': 'Corte Caballero (12€)',
      'corte-degradado': 'Corte Degradado (14€)',
      'afeitado-clasico': 'Afeitado Clásico (10€)',
      'perfilado-barba': 'Perfilado de Barba (8€)',
      'servicio-completo': 'Servicio Completo (22€)',
      'corte-junior': 'Corte Junior (10€)',
      'primera-sesion-junior': 'Primera Sesión Junior (12€)',
      'vinculo-padre-hijo': 'Vínculo Padre e Hijo (20€)',
      'otro': 'Otro'
    };

    const serviceName = serviceLabels[formData.servicio] || formData.servicio;
    const text = `Hola, me gustaría reservar un turno.
Mis datos:
- Nombre: ${formData.nombre}
- Teléfono: ${formData.telefono}
- Servicio: ${serviceName}
- Fecha: ${formData.fecha}
- Hora: ${formData.hora}
${formData.mensaje ? `- Notas: ${formData.mensaje}` : ''}`;

    const waUrl = `https://wa.me/34606242706?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  const openWhatsAppDirect = () => {
    window.open('https://wa.me/34606242706?text=Hola,%20me%20gustar%C3%ADa%20reservar%20una%20cita%20en%20De-Vos', '_blank');
  };

  // Franjas de 30min mañana y tarde
  const timeSlots = [
    '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'
  ];

  return (
    <div ref={containerRef} className="pt-40 pb-24 px-6 max-w-7xl mx-auto min-h-screen bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-16 items-start">
        
        {/* Columna Izquierda (60%): Formulario */}
        <div className="reserve-element lg:col-span-6 bg-surface-low p-8 md:p-12 border border-white/5 shadow-2xl">
          {submitted ? (
            <div className="text-center py-20 space-y-6">
              <div className="w-16 h-16 bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto rounded-none">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="headline-lg text-2xl text-white uppercase tracking-wider">¡Reserva Enviada!</h3>
              <p className="text-primary/50 text-sm max-w-sm mx-auto font-medium">
                Se ha generado tu solicitud y abierto WhatsApp para enviarla. Nos pondremos en contacto contigo a la brevedad para confirmar.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-xs font-black text-accent uppercase tracking-industrial hover:text-white transition-smooth pt-4 inline-block"
              >
                Hacer otra reserva
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <span className="text-accent text-[10px] font-black uppercase tracking-industrial mb-2 block">Reserva en Línea</span>
                <h2 className="headline-lg text-2xl md:text-4xl text-white uppercase mb-2">Solicita tu Turno</h2>
                <p className="text-primary/40 text-xs font-semibold uppercase">Completa los campos y te confirmamos en menos de 2 horas.</p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="block text-[10px] font-black uppercase tracking-industrial text-white/60">Nombre Completo</label>
                    <input 
                      type="text" 
                      id="nombre"
                      name="nombre"
                      required
                      autoComplete="name"
                      spellCheck="false"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className="w-full bg-background border border-white/10 px-5 py-4 text-white text-sm focus:outline-none focus:border-accent transition-smooth placeholder-white/20 focus-visible:ring-1 focus-visible:ring-accent"
                      placeholder="Ej. Juan Pérez…"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="telefono" className="block text-[10px] font-black uppercase tracking-industrial text-white/60">Teléfono móvil</label>
                    <input 
                      type="tel" 
                      id="telefono"
                      name="telefono"
                      required
                      autoComplete="tel"
                      spellCheck="false"
                      pattern="[0-9]{9,15}"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className="w-full bg-background border border-white/10 px-5 py-4 text-white text-sm focus:outline-none focus:border-accent transition-smooth placeholder-white/20 focus-visible:ring-1 focus-visible:ring-accent"
                      placeholder="Ej. 606242706…"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="servicio" className="block text-[10px] font-black uppercase tracking-industrial text-white/60">Servicio Requerido</label>
                  <select 
                    id="servicio"
                    name="servicio"
                    required
                    autoComplete="off"
                    value={formData.servicio}
                    onChange={handleInputChange}
                    className="w-full bg-background border border-white/10 px-5 py-4 text-white text-sm focus:outline-none focus:border-accent transition-smooth appearance-none cursor-pointer focus-visible:ring-1 focus-visible:ring-accent"
                  >
                    <option value="" disabled>Selecciona un servicio...</option>
                    <option value="corte-caballero">Corte Caballero (12€)</option>
                    <option value="corte-degradado">Corte Degradado (14€)</option>
                    <option value="afeitado-clasico">Afeitado Clásico (10€)</option>
                    <option value="perfilado-barba">Perfilado de Barba (8€)</option>
                    <option value="servicio-completo">Servicio Completo (22€)</option>
                    <option value="corte-junior">Corte Junior (10€)</option>
                    <option value="primera-sesion-junior">Primera Sesión Junior (12€)</option>
                    <option value="vinculo-padre-hijo">Vínculo Padre e Hijo (20€)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="fecha" className="block text-[10px] font-black uppercase tracking-industrial text-white/60">Fecha Preferida</label>
                    <input 
                      type="date" 
                      id="fecha"
                      name="fecha"
                      required
                      min={today}
                      autoComplete="off"
                      value={formData.fecha}
                      onChange={handleDateChange}
                      className="w-full bg-background border border-white/10 px-5 py-4 text-white text-sm focus:outline-none focus:border-accent transition-smooth focus-visible:ring-1 focus-visible:ring-accent"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="hora" className="block text-[10px] font-black uppercase tracking-industrial text-white/60">Hora Preferida</label>
                    <select 
                      id="hora"
                      name="hora"
                      required
                      autoComplete="off"
                      value={formData.hora}
                      onChange={handleInputChange}
                      className="w-full bg-background border border-white/10 px-5 py-4 text-white text-sm focus:outline-none focus:border-accent transition-smooth appearance-none cursor-pointer focus-visible:ring-1 focus-visible:ring-accent"
                    >
                      <option value="" disabled>Elige un horario...</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot} hs</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="mensaje" className="block text-[10px] font-black uppercase tracking-industrial text-white/60">Indicaciones especiales (Opcional)</label>
                  <textarea 
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    maxLength={300}
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    className="w-full bg-background border border-white/10 px-5 py-4 text-white text-sm focus:outline-none focus:border-accent transition-smooth placeholder-white/20 resize-none focus-visible:ring-1 focus-visible:ring-accent"
                    placeholder="Detalla si quieres algún diseño especial, barbero preferido, etc…"
                  />
                  <div className="text-right text-[10px] text-primary/20 uppercase font-black tracking-widest mt-1">
                    Máx. 300 caracteres
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-accent text-background font-black text-xs uppercase tracking-industrial py-3.5 hover:bg-white transition-smooth shadow-lg accent-glow flex items-center justify-center gap-2 cursor-pointer"
              >
                Confirmar Reserva →
              </button>

              <p className="text-primary/30 text-[10px] font-bold text-center uppercase tracking-wider">
                Te confirmaremos la cita por teléfono o WhatsApp en menos de 2h.
              </p>
            </form>
          )}
        </div>

        {/* Columna Derecha (40%): Info de Contacto + Mapa */}
        <div className="reserve-element lg:col-span-4 space-y-12">
          
          {/* Tarjeta de Contacto */}
          <div className="bg-surface-low p-8 border border-white/5 shadow-xl space-y-8">
            <h3 className="headline-lg text-white text-xl uppercase tracking-wider">Información Directa</h3>
            
            <div className="space-y-6 text-left">
              <div className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                <div>
                  <p className="text-white font-extrabold text-sm uppercase tracking-wide">C. Cervantes, 10</p>
                  <p className="text-primary/40 text-[10px] font-black uppercase tracking-widest leading-relaxed">41100 Coria del Río, Sevilla</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Phone className="w-5 h-5 text-accent shrink-0 mt-1" />
                <div>
                  <p className="text-white font-extrabold text-sm uppercase tracking-wide">606 24 27 06</p>
                  <p className="text-primary/40 text-[10px] font-black uppercase tracking-widest leading-relaxed">Llamar Directo</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Clock className="w-5 h-5 text-accent shrink-0 mt-1" />
                <div>
                  <p className="text-white font-extrabold text-sm uppercase tracking-wide">Horario de Atención</p>
                  <p className="text-primary/40 text-[10px] font-black uppercase tracking-widest leading-relaxed">
                    L-V: 10:00-14:00, 17:00-21:00 <br/>
                    Sábados: 09:30-13:30
                  </p>
                </div>
              </div>
            </div>

            <button 
              onClick={openWhatsAppDirect}
              className="w-full bg-white/5 border border-white/10 text-white font-black text-xs uppercase tracking-industrial py-3 hover:bg-white hover:text-background transition-smooth"
            >
              Reservar por WhatsApp
            </button>
          </div>

          {/* Mapa */}
          <div className="w-full">
            <div className="relative aspect-[4/3] overflow-hidden border border-white/5 bg-surface-low p-2 shadow-2xl">
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

      </div>
    </div>
  );
};

export default ReservePage;
