import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Scissors, UserCheck, Shield, ChevronRight } from 'lucide-react';

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".about-element", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "expo.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-40 pb-24 px-6 max-w-7xl mx-auto min-h-screen bg-background">
      <div className="about-element grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
        <div className="space-y-8 text-left">
          <span className="text-accent text-xs font-bold uppercase tracking-industrial mb-2 block">Nuestra Historia</span>
          <h1 className="display-sm text-white uppercase mb-8 leading-none">
            Tradición y Maestría <br /><span className="text-accent italic">En Coria del Río</span>
          </h1>
          <p className="text-primary/50 text-base leading-relaxed">
            En el corazón de Coria del Río, De-Vos nació con una idea muy clara: ofrecer una barbería donde la técnica, el detalle y la cercanía fueran siempre de la mano. Nuestros comienzos fueron modestos, en un espacio adaptado en nuestra propia casa, donde empezamos a cortar el pelo a amigos, familiares y conocidos, construyendo poco a poco una comunidad basada en la confianza y el buen trato.
          </p>
          <p className="text-primary/50 text-base leading-relaxed">
            Con el tiempo, esa pasión por la barbería fue creciendo hasta convertirse en el proyecto que hoy conocemos. Desde entonces, seguimos apostando por una atención personalizada, un ambiente cuidado y un servicio pensado para que cada cliente se sienta cómodo y salga con una imagen que refleje su estilo.
          </p>
          <p className="text-primary/50 text-base leading-relaxed">
            Nuestros barberos se forman de manera continua para dominar desde los cortes más actuales hasta las técnicas más clásicas, manteniendo siempre el mismo compromiso: hacer las cosas bien, con precisión, dedicación y respeto por cada detalle. Bienvenidos a De-Vos, donde tradición, evolución y atención al detalle se encuentran.
          </p>
        </div>

        <div className="relative w-full lg:w-[90%] mx-auto">
          <div className="absolute -inset-6 border border-white/5 -z-10 translate-x-6 translate-y-6" />
          <div className="h-[450px] w-full overflow-hidden border border-white/10 grayscale-[0.2] hover:grayscale-0 transition-smooth duration-1000">
            <img
              src="/galeria/local.webp"
              alt="Local de Barbería De-Vos"
              className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="about-element py-20 border-t border-b border-white/5 mb-32">
        <div className="text-center mb-16">
          <span className="text-accent text-[10px] font-black uppercase tracking-industrial block mb-2">Fundamentos</span>
          <h2 className="headline-lg text-white text-3xl md:text-5xl uppercase">Nuestros Valores</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Scissors,
              title: "Precisión",
              desc: "Ejecutamos cada corte y perfilado con precisión técnica milimétrica, usando herramientas de la más alta gama."
            },
            {
              icon: Shield,
              title: "Confianza",
              desc: "Nos ganamos tu confianza a través de la constancia, la higiene y la garantía de un resultado impecable en cada sesión."
            },
            {
              icon: UserCheck,
              title: "Trato Personal",
              desc: "Te escuchamos y asesoramos según tus facciones y tipo de cabello para lograr un estilo que de verdad hable de ti."
            }
          ].map((val, i) => (
            <div key={i} className="bg-surface-low p-10 border border-white/5 text-center flex flex-col items-center group hover:border-accent/40 transition-smooth">
              <div className="w-14 h-14 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:border-accent transition-smooth">
                <val.icon className="w-5 h-5 text-accent group-hover:text-background transition-smooth" />
              </div>
              <h3 className="font-heading text-lg font-extrabold uppercase text-white tracking-wider mb-4">{val.title}</h3>
              <p className="text-primary/40 text-sm leading-relaxed max-w-xs">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-element mb-32">
        <div className="text-center mb-16">
          <span className="text-accent text-[10px] font-black uppercase tracking-industrial block mb-2">Profesionales</span>
          <h2 className="headline-lg text-white text-3xl md:text-5xl uppercase">El Equipo</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-center max-w-4xl mx-auto">
          {[
            {
              name: "Dani",
              role: "Barbero Fundador / Especialista en Fades"
            },
            {
              name: "Jesús",
              role: "Estilista Creativo / Cuidado de Barba"
            },
            {
              name: "Carlos",
              role: "Especialista Junior & Clásicos"
            }
          ].map((member, i) => (
            <div key={i} className="text-center space-y-6 group">
              <div className="w-32 h-32 mx-auto rounded-full border border-white/10 flex items-center justify-center bg-surface-low group-hover:border-accent group-hover:bg-surface-container transition-smooth relative shadow-lg">
                <span className="font-heading text-4xl font-black text-accent group-hover:scale-110 transition-smooth select-none">
                  {member.name.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold uppercase text-white tracking-wide group-hover:text-accent transition-smooth">{member.name}</h3>
                <p className="text-primary/40 text-xs font-semibold uppercase tracking-wider mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="about-element text-center pt-12 border-t border-white/5">
        <h2 className="headline-lg text-3xl md:text-4xl text-white uppercase mb-8">Vive la Experiencia De-Vos</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/contacto"
            className="group relative flex items-center justify-center gap-2 bg-transparent border border-white/20 text-white font-extrabold text-[11px] px-6 py-3 rounded-none hover:bg-white hover:text-background transition-smooth w-full sm:w-auto uppercase tracking-industrial"
          >
            Ven a Conocernos
          </a>
          <a
            href="/reservar"
            className="group relative flex items-center justify-center gap-2 bg-accent text-background font-extrabold text-[11px] px-6 py-3 rounded-none hover:bg-white transition-smooth shadow-lg w-full sm:w-auto uppercase tracking-industrial accent-glow"
          >
            Reservar Cita <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
