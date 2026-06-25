import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, MapPin, Clock, Star, Calendar, Scissors, UserCheck, ChevronRight, Award, ShieldCheck, Search } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const heroImageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".hero-element", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "expo.out",
        delay: 0.2
      });

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

        <div className="hero-element relative z-20 mb-10">
          <a href="https://search.google.com/local/writereview?ludocid=16653154385558997905" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-2.5 rounded-full backdrop-blur-xl hover:bg-white/10 transition-smooth">
            <Star className="w-3.5 h-3.5 text-accent fill-accent" />
            <span className="text-[11px] font-bold tracking-industrial uppercase text-accent">Reputación 4.8 Estrellas</span>
          </a>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="hero-element display-lg text-white uppercase mb-8 text-wrap-balance">
            El corte <br />
            <span className="text-accent">es un ritual</span>
          </h1>

          <p className="hero-element text-lg md:text-xl text-primary max-w-2xl mx-auto mb-12 font-medium leading-relaxed tracking-wide text-wrap-balance">
            Elevando el estándar de la barbería tradicional en Coria del Río. <br className="hidden md:block" /> Tu barbería de confianza con el mejor trato personalizado.
          </p>

          <div className="hero-element flex flex-col sm:flex-row gap-4 justify-center items-center md:max-w-xl mx-auto">
            <a
              href="/reservar"
              className="group relative flex items-center justify-center gap-3 bg-accent text-background font-extrabold text-[11px] px-6 py-3 rounded-none hover:bg-white transition-smooth shadow-xl accent-glow w-full max-w-[240px] whitespace-nowrap"
              aria-label="Reservar cita ahora"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span className="uppercase tracking-industrial whitespace-nowrap">Agendar Cita</span>
              <ChevronRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-smooth" />
            </a>
            <a
              href="/servicios"
              className="group relative flex items-center justify-center gap-3 bg-transparent border border-white/20 text-white font-extrabold text-[11px] px-6 py-3 rounded-none hover:bg-white hover:text-background transition-smooth w-full max-w-[240px] uppercase tracking-industrial whitespace-nowrap"
            >
              <Scissors className="w-4 h-4 shrink-0" />
              <span className="uppercase tracking-industrial whitespace-nowrap">Ver servicios</span>
              <ChevronRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-smooth" />
            </a>
          </div>
        </div>

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
              Un espacio de <br /><span className="text-white/35">estética masculina</span>
            </h2>
            <div className="space-y-12">
              {[
                { title: "Corte a Medida", desc: "Especialistas en degradados y cortes clásicos adaptados a tu estilo personal.", icon: Scissors },
                { title: "Cuidado de Barba", desc: "Tratamientos específicos para mantener tu barba impecable y bien perfilada.", icon: UserCheck },
                { title: "Para los más Peques", desc: "Atención especial para que los niños se sientan cómodos y salgan con el mejor estilo.", icon: Award }
              ].map((f, i) => (
                <div key={i} className="flex gap-8 items-start group">
                  <div className="text-accent font-heading text-xl font-bold opacity-30 mt-1">0{i + 1}</div>
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
            <div className="absolute -bottom-10 -right-10 bg-accent p-10 hidden md:block">
              <ShieldCheck className="w-10 h-10 text-background" />
              <p className="text-[10px] font-black uppercase tracking-industrial text-background mt-4 text-left leading-tight">PASIÓN POR <br />EL DETALLE</p>
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
              <h2 className="headline-lg text-5xl md:text-8xl text-white uppercase leading-none">Corte <br />& Ritual</h2>
            </div>
            <a href="/servicios" className="group relative inline-flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-3 rounded-none text-[11px] font-extrabold uppercase tracking-industrial text-white hover:bg-accent hover:text-background transition-smooth shadow-lg">
              Ver Todos los Servicios <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
            </a>
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
              <div key={i} className="stagger-card bg-surface-low p-8 group transition-smooth relative flex flex-col border border-white/5 hover:border-accent/40 hover:-translate-y-1.5 hover:bg-surface-container hover:shadow-[0_20px_50px_rgba(209,161,94,0.06)] min-h-[280px]">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <srv.icon className="w-32 h-32 text-white" />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="font-heading text-lg font-black text-white uppercase tracking-wider group-hover:text-accent transition-smooth max-w-[140px] leading-tight">{srv.title}</h3>
                    <div className="flex flex-col items-end">
                      <span className="text-accent font-heading text-xl font-black">{srv.price}</span>
                      <span className="text-[8px] text-white/20 uppercase tracking-widest font-bold">Base</span>
                    </div>
                  </div>

                  <p className="text-white/80 text-xs leading-relaxed mb-auto font-medium max-w-[200px]">
                    {srv.desc}
                  </p>

                  <div className="pt-6 border-t border-white/5 mt-6">
                    <a href="/servicios" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-industrial text-accent hover:text-white transition-smooth focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent">
                      Ver detalles <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-24 px-6 bg-surface-lowest overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 reveal-up text-center md:text-left">
            <div className="w-full md:w-auto">
              <span className="text-accent text-xs font-bold uppercase tracking-industrial mb-4 block">Reseñas de Clientes</span>
              <h2 className="display-lg text-white uppercase text-center md:text-left">Experiencias <br /><span className="text-accent italic">De-Vos</span></h2>
            </div>
            <div className="flex items-center gap-3 bg-white/5 px-5 py-2.5 border border-white/10 whitespace-nowrap">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-[#FBBC04] fill-[#FBBC04]" />
                ))}
              </div>
              <span className="text-[10px] font-black text-white uppercase tracking-widest">4.8 / 5 en Google</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                name: "Carmen C.",
                text: "Para mis hijos el mejor o mejores peluqueros ellos sin duda. Unos artistas y buenas personas, bien trato.",
                rating: 5,
                sub: "Madre de familia",
                date: "Hace 3 días"
              },
              {
                name: "Ángel T.",
                text: "Fui por mediación de un compañero de trabajo, me hizo el servicio sin coger cita, buen profesional y el precio espectacular. Me dejó la barba estupenda, ya tengo barbero de confianza.",
                rating: 5,
                sub: "Cliente recomendado",
                date: "Hace 1 semana"
              },
              {
                name: "Ramón J. P.",
                text: "Están especializados en niños, pero lo hacen muy bien tanto para niños como para adultos. El trato es muy bueno y la relación calidad-precio es estupenda.",
                rating: 5,
                sub: "Cliente habitual",
                date: "Hace 2 semanas"
              },
              {
                name: "Israel P. A.",
                text: "Mi pelu de confianza, los chavales trabajan muy bien y llevan baratito. Siempre salgo contento.",
                rating: 5,
                sub: "Cliente frecuente",
                date: "Hace 3 semanas"
              }
            ].map((test, i) => (
              <div key={i} className="stagger-card group relative p-5 bg-surface-low border border-white/5 hover:border-accent/20 hover:-translate-y-1.5 hover:bg-surface-container hover:shadow-[0_20px_50px_rgba(209,161,94,0.06)] transition-smooth flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[9px] font-bold text-white/50 uppercase tracking-widest">Google</span>
                  <div className="flex gap-0.5">
                    {[...Array(test.rating)].map((_, idx) => (
                      <Star key={idx} className="w-3 h-3 text-[#FBBC04] fill-[#FBBC04]" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-white text-sm font-medium leading-relaxed mb-4 tracking-tight not-italic flex-1">
                  "{test.text}"
                </blockquote>

                <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                  <div className="w-8 h-8 flex items-center justify-center bg-white/5 text-accent font-black text-[9px] uppercase">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white text-[9px] font-black uppercase tracking-industrial">{test.name}</p>
                    <p className="text-primary/40 text-[7px] font-bold uppercase tracking-[0.2em]">{test.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://www.google.com/maps/place/Barberia+De-Vos+Coria+del+r%C3%ADo/@37.2867497,-6.0512258,865m/data=!3m1!1e3!4m8!3m7!1s0xd1272c3e3814b81:0xe71be3ae74fb8b91!8m2!3d37.2867497!4d-6.0512258!9m1!1b1!16s%2Fg%2F11c1sz_hb6?entry=ttu&g_ep=EgoyMDI2MDYyMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2.5 text-[10px] font-black uppercase tracking-industrial text-white hover:bg-accent hover:text-background transition-smooth"
            >
              Dejar tu opinión en Google
            </a>
          </div>
        </div>
      </section>

      {/* Galería de Trabajos */}
      <section className="py-16 bg-background border-t border-white/5 px-6 reveal-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-bold uppercase tracking-industrial mb-4 block">Cada corte, una obra</span>
            <h2 className="headline-lg text-3xl md:text-5xl text-white uppercase">Nuestro Trabajo</h2>
            <div className="w-16 h-px bg-accent mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { path: '/galeria/pelado1.webp', alt: 'Corte Degradado de Caballero' },
              { path: '/galeria/pelado2.webp', alt: 'Perfilado de Barba y Estilo' },
              { path: '/galeria/pelado3.webp', alt: 'Corte Clásico Masculino' }
            ].map((img, index) => (
              <div
                key={index}
                className="group relative aspect-[3/2] overflow-hidden border border-white/5 bg-surface-low shadow-lg"
              >
                <img
                  src={img.path}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 border border-accent flex items-center justify-center text-accent scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Search className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/galeria"
              className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-industrial text-accent hover:text-white transition-smooth"
            >
              Ver galería completa <ChevronRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-24 px-6 bg-surface-lowest overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] via-transparent to-accent/[0.02]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="display-lg text-white uppercase mb-6">
            ¿Sigues buscando <br />
            <span className="text-white/35">tu barbero de confianza?</span>
          </h2>
          <p className="text-primary/50 text-sm md:text-base font-medium max-w-lg mx-auto mb-10 leading-relaxed">
            En De-Vos no improvisamos. Te escuchamos, te asesoramos y trabajamos hasta que el resultado sea exactamente lo que buscabas. Porque tu imagen no es un juego.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/reservar"
              className="group relative inline-flex items-center gap-3 bg-accent text-background font-extrabold text-[11px] px-6 py-3.5 rounded-none hover:bg-white transition-smooth shadow-xl accent-glow uppercase tracking-industrial"
            >
              <Calendar className="w-4 h-4" />
              Reservar Cita
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
            </a>
          </div>
          <p className="text-primary/20 text-[9px] font-bold uppercase tracking-[0.3em] mt-6">
            Te confirmamos en menos de 2 horas
          </p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
