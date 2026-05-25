import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, MapPin, Clock, Star, Calendar, Scissors, UserCheck, ChevronRight, Award, ShieldCheck, Search } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface HomeProps {
  openWhatsApp: () => void;
}

const HomePage = ({ openWhatsApp }: HomeProps) => {
  const heroImageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Intro Animation
      gsap.from(".hero-element", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "expo.out",
        delay: 0.2
      });

      // Parallax Hero
      if (heroImageRef.current) {
        gsap.to(heroImageRef.current, {
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: true
          },
          y: 100,
          scale: 1.1,
          ease: "none"
        });
      }

      // Scroll Animations
      gsap.utils.toArray('.reveal-up').forEach((elem: any) => {
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            start: "top 90%",
            toggleActions: "play none none reverse"
          },
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });
      
      gsap.utils.toArray('.stagger-card').forEach((elem: any, i) => {
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            start: "top 95%",
            toggleActions: "play none none reverse"
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          delay: i % 4 * 0.1,
          ease: "power2.out",
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section relative pt-32 pb-24 md:pt-48 md:pb-40 px-6 flex flex-col items-center justify-center min-h-[95vh] text-center overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background z-10" />
          <img 
            ref={heroImageRef}
            src="/galeria/local.webp" 
            alt="Interior de Barbería De-Vos" 
            className="w-full h-full object-cover opacity-30 grayscale-[0.5]"
            width="1920"
            height="1080"
          />
        </div>
        
        {/* Signature Badge */}
        <div className="hero-element relative z-20 mb-10">
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-2.5 rounded-full backdrop-blur-xl">
            <Star className="w-3.5 h-3.5 text-accent fill-accent" />
            <span className="text-[11px] font-bold tracking-industrial uppercase text-accent">Reputación 4.8 Estrellas</span>
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="hero-element display-lg text-white uppercase mb-8 text-wrap-balance">
            Tradición y Estilo <br/>
            <span className="text-accent">& Corte Profesional</span>
          </h1>
          
          <p className="hero-element text-lg md:text-xl text-primary max-w-2xl mx-auto mb-12 font-medium leading-relaxed tracking-wide text-wrap-balance">
            Elevando el estándar de la barbería tradicional en Coria del Río. <br className="hidden md:block" /> Tu barbería de confianza con el mejor trato personalizado.
          </p>

          {/* === NUEVO: Botones Hero ajustados y alineados === */}
          <div className="hero-element flex flex-col sm:flex-row gap-4 justify-center items-center md:max-w-xl mx-auto">
            <button 
              onClick={openWhatsApp}
              className="group relative flex items-center justify-center gap-4 bg-accent text-background font-extrabold text-[12px] px-14 py-6 rounded-none hover:bg-white transition-smooth shadow-2xl accent-glow w-full md:max-w-[280px]"
              aria-label="Reservar cita ahora"
            >
              <Calendar className="w-5 h-5" />
              <span className="uppercase tracking-industrial">Agendar Cita</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
            </button>
            <Link 
              to="/servicios"
              className="group relative flex items-center justify-center gap-4 bg-transparent border border-white/20 text-white font-extrabold text-[12px] px-14 py-6 rounded-none hover:bg-white hover:text-background transition-smooth w-full md:max-w-[280px] uppercase tracking-industrial"
            >
              Ver servicios →
            </Link>
          </div>
        </div>

        {/* Decorative element: Signature line */}
        <div className="hero-element absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-accent to-transparent" />
      </section>

      {/* Quick Info Bar */}
      <section className="relative z-20 px-6 -mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 overflow-hidden shadow-2xl">
          {[
            { icon: MapPin, label: "Ubicación", value: "C. Cervantes, 10, Coria", sub: "Garantía de excelencia" },
            { icon: Clock, label: "Horario", value: "L-V: 10:00-14:00, 17:00-21:00", sub: "Sábados: 09:30-13:30" },
            { icon: Phone, label: "Contacto Directo", value: "606 24 27 06", sub: "Atención personalizada" }
          ].map((item, i) => (
            <div key={i} className="bg-surface-low p-10 flex flex-col items-start gap-6 group hover:bg-surface-container transition-smooth">
              <div className="w-12 h-12 flex items-center justify-center border border-white/10 group-hover:border-accent/30 transition-smooth">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-industrial text-accent mb-2">{item.label}</p>
                <p className="headline-lg text-white text-xl mb-1">{item.value}</p>
                <p className="text-xs text-primary/40 font-medium uppercase tracking-widest">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Legacy / Why Us */}
      <section className="py-24 md:py-40 px-6 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="reveal-up text-left">
             <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-px bg-accent" />
               <span className="text-accent text-xs font-bold uppercase tracking-industrial">Nuestro Compromiso</span>
             </div>
            <h2 className="headline-lg text-5xl md:text-7xl text-white uppercase mb-12">
              Un espacio de <br/><span className="text-white/35">estética masculina</span>
            </h2>
            <div className="space-y-12">
              {[
                { title: "Corte a Medida", desc: "Especialistas en degradados y cortes clásicos adaptados a tu estilo personal.", icon: Scissors },
                { title: "Cuidado de Barba", desc: "Tratamientos específicos para mantener tu barba impecable y bien perfilada.", icon: UserCheck },
                { title: "Para los más Peques", desc: "Atención especial para que los niños se sientan cómodos y salgan con el mejor estilo.", icon: Award }
              ].map((f, i) => (
                <div key={i} className="flex gap-8 items-start group">
                  <div className="text-accent font-heading text-xl font-bold opacity-30 mt-1">0{i+1}</div>
                  <div>
                    <h3 className="font-heading text-lg font-extrabold text-white uppercase tracking-wider mb-3 group-hover:text-accent transition-smooth">{f.title}</h3>
                    <p className="text-primary/50 text-sm leading-relaxed max-w-md font-medium">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative reveal-up w-full lg:w-[90%] mx-auto">
            <div className="absolute -inset-10 border border-white/5 -z-10 translate-x-10 translate-y-10" />
            <div className="h-[400px] w-full overflow-hidden border border-white/10 grayscale-[0.3] hover:grayscale-0 transition-smooth duration-1000">
              <img 
                src="/galeria/local.webp" 
                alt="Maestría en De-Vos" 
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
                width="800"
                height="1000"
              />
            </div>
            {/* Float Element */}
            <div className="absolute -bottom-10 -right-10 bg-accent p-10 hidden md:block">
               <ShieldCheck className="w-10 h-10 text-background" />
               <p className="text-[10px] font-black uppercase tracking-industrial text-background mt-4 text-left leading-tight">PASIÓN POR <br/>EL DETALLE</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-surface-lowest px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-10 reveal-up">
            <div className="text-left border-l-4 border-accent pl-8">
              <span className="text-accent text-xs font-bold uppercase tracking-industrial mb-4 block">Servicios</span>
              <h2 className="headline-lg text-5xl md:text-8xl text-white uppercase leading-none">Corte <br/>& Ritual</h2>
            </div>
            <Link to="/servicios" className="group relative inline-flex items-center gap-6 bg-white/5 border border-white/10 px-10 py-5 rounded-none text-[11px] font-extrabold uppercase tracking-industrial text-white hover:bg-accent hover:text-background transition-smooth shadow-lg">
              Ver Todos los Servicios <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Corte Caballero", 
                price: "12€", 
                desc: "Corte profesional adaptado a tu estilo con lavado incluido.",
                icon: Scissors
              },
              { 
                title: "Afeitado Clásico", 
                price: "10€", 
                desc: "Ritual tradicional con toalla caliente y acabado a navaja.",
                icon: UserCheck
              },
              { 
                title: "Perfilado de Barba", 
                price: "8€", 
                desc: "Diseño y perfilado preciso para un acabado impecable.",
                icon: Scissors
              }
            ].map((srv, i) => (
              <div key={i} className="stagger-card bg-surface-low p-12 group transition-smooth relative flex flex-col border border-white/5 hover:border-accent/40 min-h-[350px]">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <srv.icon className="w-40 h-40 text-white" />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <h3 className="font-heading text-2xl font-black text-white uppercase tracking-wider group-hover:text-accent transition-smooth max-w-[150px] leading-tight">{srv.title}</h3>
                    <div className="flex flex-col items-end">
                      <span className="text-accent font-heading text-2xl font-black">{srv.price}</span>
                      <span className="text-[9px] text-white/20 uppercase tracking-widest font-bold">Base</span>
                    </div>
                  </div>
                  
                  <p className="text-white/80 text-sm leading-relaxed mb-auto font-medium max-w-[200px]">
                    {srv.desc}
                  </p>

                  <div className="pt-8 border-t border-white/5">
                    <Link to="/servicios" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-industrial text-accent hover:text-white transition-smooth">
                      Ver detalles <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios: Voces Reales */}
      <section className="py-40 px-6 bg-surface-lowest overflow-hidden relative">
        {/* Elemento decorativo: Comilla gigante de fondo */}
        <div className="absolute top-20 right-0 text-[300px] font-black text-white/[0.02] leading-none select-none pointer-events-none translate-x-1/4">"</div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-24 md:mb-32 gap-10 reveal-up text-center md:text-left">
            <div className="w-full md:w-auto">
              <span className="text-accent text-xs font-bold uppercase tracking-industrial mb-6 block">Reseñas de Clientes</span>
              <h2 className="display-lg text-white uppercase text-center md:text-left">Experiencias <br/><span className="text-accent italic">De-Vos</span></h2>
            </div>
            <div className="flex items-center gap-4 bg-white/5 px-6 py-3 border border-white/10 mb-2 whitespace-nowrap">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-[#FBBC04] fill-[#FBBC04]" />
                ))}
              </div>
              <span className="text-[10px] font-black text-white uppercase tracking-widest">4.8 / 5 en Google</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { 
                name: "Juan M.", 
                text: "El mejor degradado de Coria. La atención al detalle de los chavales es de otro nivel. Un sitio de 10.", 
                rating: 5,
                sub: "Cliente Frecuente",
                date: "Hace 1 semana"
              },
              { 
                name: "Carlos R.", 
                text: "Llevo a mis hijos desde hace años y no quieren ir a otro sitio. Paciencia infinita y resultados impecables.", 
                rating: 5,
                sub: "Padre de familia",
                date: "Hace 2 semanas"
              }
            ].map((test, i) => (
              <div key={i} className="stagger-card group relative p-10 md:p-16 bg-surface-low border border-white/5 hover:border-accent/20 transition-smooth">
                <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:opacity-[0.15] transition-opacity">
                  <Scissors className="w-20 h-20 text-white" />
                </div>
                
                <div className="flex items-center gap-3 mb-10">
                  <span className="text-xs font-bold text-white/50 uppercase tracking-widest mr-2">Google</span>
                  <div className="flex gap-1">
                    {[...Array(test.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 text-[#FBBC04] fill-[#FBBC04]" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-white text-2xl md:text-3xl font-medium leading-tight mb-12 tracking-tight not-italic">
                  "{test.text}"
                </blockquote>

                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-none border border-white/10 flex items-center justify-center bg-white/5 text-accent font-black text-xs">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white text-xs font-black uppercase tracking-industrial mb-1">{test.name}</p>
                    <p className="text-primary/40 text-[9px] font-bold uppercase tracking-[0.2em]">{test.sub}</p>
                    <p className="text-white/30 text-[9px] font-bold uppercase tracking-widest mt-1">{test.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === NUEVO: Sección Galería de Trabajos === */}
      <section className="py-32 bg-background border-t border-white/5 px-6 reveal-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-accent text-xs font-bold uppercase tracking-industrial mb-4 block">Cada corte, una obra</span>
            <h2 className="headline-lg text-4xl md:text-6xl text-white uppercase">Nuestro Trabajo</h2>
            <div className="w-20 h-px bg-accent mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { path: '/galeria/pelado1.webp', alt: 'Corte Degradado de Caballero' },
              { path: '/galeria/pelado2.webp', alt: 'Perfilado de Barba y Estilo' },
              { path: '/galeria/pelado3.webp', alt: 'Corte Clásico Masculino' },
              { path: '/galeria/pelado4.webp', alt: 'Corte Estilo Junior' }
            ].map((img, index) => (
              <div 
                key={index} 
                className="group relative aspect-square overflow-hidden border border-white/5 bg-surface-low shadow-lg"
              >
                <img 
                  src={img.path} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover overlay with search/magnifying glass icon */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 border border-accent flex items-center justify-center text-accent scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Search className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
