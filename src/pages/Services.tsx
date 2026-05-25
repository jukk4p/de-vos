import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Scissors, Phone, Award, Star } from 'lucide-react';

const ServicesPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".service-group", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "expo.out"
      });

      gsap.from(".service-item", {
        x: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power2.out",
        delay: 0.3
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const services = [
    { 
      category: "Corte y Estilo",
      items: [
        { title: "Corte Caballero", price: "12€", desc: "Corte clásico o moderno a tijera y máquina." },
        { title: "Corte Degradado", price: "14€", desc: "El degradado perfecto adaptado a tu estilo." },
        { title: "Afeitado Clásico", price: "10€", desc: "Afeitado tradicional con toalla caliente." },
        { title: "Perfilado de Barba", price: "8€", desc: "Diseño y arreglo con acabado a navaja." },
        { title: "Servicio Completo", price: "22€", desc: "Corte + Barba + Lavado + Masaje capilar." }
      ]
    },
    {
      category: "Línea Junior",
      items: [
        { title: "Corte Junior", price: "10€", desc: "Cortes modernos hasta los 12 años." },
        { title: "Primera Sesión", price: "12€", desc: "Sesión especial con diploma de recuerdo." },
        { title: "Líneas Creativas", price: "+3€", desc: "Dibujos y líneas creativas." },
        { title: "Vínculo Padre e Hijo", price: "20€", desc: "Vuestra sesión de estilo compartida." }
      ]
    }
  ];

  const openWhatsApp = () => {
    window.open('https://wa.me/34606242706?text=Hola,%20me%20gustar%C3%ADa%20reservar%20una%20cita%20en%20De-Vos', '_blank');
  };

  return (
    <div ref={containerRef} className="pt-40 pb-32 px-6 max-w-7xl mx-auto min-h-screen bg-background">
      {/* Header Editorial */}
      <div className="text-center mb-32">
        <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-2.5 rounded-full text-[11px] font-bold tracking-industrial text-accent uppercase mb-10">
          <Star className="w-3.5 h-3.5 text-accent fill-accent" />
          <span>Menu de Servicios & Tarifas</span>
        </div>
        <h1 className="display-lg text-white uppercase mb-8 text-wrap-balance">
          Maestría <br/><span className="text-accent italic">Artesanal</span>
        </h1>
        <p className="text-primary/40 font-medium text-lg md:text-xl max-w-2xl mx-auto tracking-wide">
          Excelencia técnica y atención al detalle en cada servicio. <br className="hidden md:block" /> Cada corte es el reflejo de tu identidad.
        </p>
      </div>

      {/* Services List (Industrial Layout) */}
      <div className="space-y-40">
        {services.map((group, idx) => (
          <div key={idx} className="service-group">
            {/* === NUEVO: Cabecera con imagen y overlay para la categoría === */}
            <div className="relative h-[200px] w-full overflow-hidden border border-white/5 mb-12 group">
              <img 
                src={idx === 0 ? "/galeria/pelado1.webp" : "/galeria/pelado4.webp"} 
                alt={group.category}
                className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/60" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                <span className="text-accent font-heading font-black text-lg opacity-60 mb-2">0{idx+1}</span>
                <h2 className="display-sm text-3xl md:text-5xl text-white uppercase tracking-wider">
                  {group.category}
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-10 mb-16">
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-16">
              {group.items.map((srv, i) => (
                <div key={i} className="service-item group">
                  <div className="flex justify-between items-baseline mb-4">
                    <h3 className="text-xl font-extrabold text-white uppercase tracking-wider group-hover:text-accent transition-smooth">
                      {srv.title}
                    </h3>
                    <div className="flex-1 mx-6 border-b border-white/10 border-dashed group-hover:border-accent/40 transition-smooth" />
                    <span className="font-heading text-3xl font-black text-accent group-hover:scale-110 transition-smooth">
                      {srv.price}
                    </span>
                  </div>
                  <p className="text-primary/30 text-[11px] font-bold uppercase tracking-industrial leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Experience Note (Industrial Luxury Card) */}
      <div className="mt-40 relative reveal-up">
        <div className="absolute inset-0 bg-accent/5 -rotate-1" />
        <div className="relative bg-surface-low p-12 md:p-24 border border-white/5 flex flex-col lg:flex-row items-center gap-16">
           <div className="w-24 h-24 bg-accent flex items-center justify-center shrink-0">
              <Award className="w-10 h-10 text-background" />
           </div>
           <div className="text-left">
              <h4 className="headline-lg text-3xl text-white uppercase mb-6 tracking-wide">Nuestro Compromiso</h4>
              <p className="text-primary/50 leading-relaxed font-medium text-lg max-w-3xl">
                En De-Vos no nos andamos con rodeos: buscamos la perfección en cada detalle. Combinamos técnica artesanal y las mejores herramientas para que tu estilo sea impecable y duradero. No es solo un corte, es el cuidado que te mereces.
              </p>
           </div>
        </div>
      </div>

      {/* Dynamic CTA */}
      <div className="mt-32 text-center reveal-up">
        <button 
          onClick={openWhatsApp}
          className="group relative inline-flex items-center gap-8 bg-accent text-background font-black text-xl px-20 py-8 rounded-none hover:bg-white transition-smooth shadow-2xl accent-glow"
          aria-label="Reservar cita por WhatsApp"
        >
          <Scissors className="w-6 h-6" />
          <span className="uppercase tracking-industrial">Reservar Cita</span>
          <Phone className="w-6 h-6 fill-current" />
        </button>
      </div>
    </div>
  );
};

export default ServicesPage;
