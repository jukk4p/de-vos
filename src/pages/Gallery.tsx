import { useState, useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Search, Scissors, Star } from 'lucide-react';

const GalleryPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<'all' | 'caballero' | 'barba' | 'junior'>('all');

  const photos = [
    { path: '/galeria/pelado1.webp', alt: 'Corte Caballero Degradado', category: 'caballero' },
    { path: '/galeria/pelado2.webp', alt: 'Perfilado de Barba de Precisión', category: 'barba' },
    { path: '/galeria/pelado3.webp', alt: 'Corte Clásico Masculino', category: 'caballero' },
    { path: '/galeria/pelado4.webp', alt: 'Corte Moderno Junior', category: 'junior' },
    { path: '/galeria/pelado5.png', alt: 'Corte Moderno Mid-Fade', category: 'caballero' },
    { path: '/galeria/pelado6.png', alt: 'Arreglo de Barba Texturizado', category: 'barba' }
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".gallery-element", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "expo.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const filteredPhotos = filter === 'all' ? photos : photos.filter(p => p.category === filter);

  return (
    <div ref={containerRef} className="pt-40 pb-24 px-6 max-w-7xl mx-auto min-h-screen bg-background">
      {/* Hero / Header */}
      <header className="gallery-element text-center mb-20">
        <span className="text-accent text-xs font-bold uppercase tracking-industrial mb-6 block">Cada corte, una historia</span>
        <h1 className="display-lg text-white uppercase mb-8">
          Nuestro <br/><span className="text-accent italic">Trabajo</span>
        </h1>
        <p className="text-primary/40 text-lg font-medium max-w-xl mx-auto leading-relaxed">
          Explora los resultados reales de nuestros clientes en Coria del Río. Calidad y detalle en cada corte.
        </p>
      </header>

      {/* === SECCIÓN: Filtros de Categoría === */}
      <div className="gallery-element flex flex-wrap justify-center gap-4 mb-16">
        {[
          { label: 'Todos', value: 'all' },
          { label: 'Corte Caballero', value: 'caballero' },
          { label: 'Barba', value: 'barba' },
          { label: 'Línea Junior', value: 'junior' }
        ].map((btn) => (
          <button
            key={btn.value}
            onClick={() => setFilter(btn.value as any)}
            className={`px-8 py-3 rounded-none text-[11px] font-black uppercase tracking-industrial transition-smooth ${filter === btn.value ? 'bg-accent text-background font-black' : 'bg-surface-low text-white/60 border border-white/5 hover:border-accent hover:text-white'}`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Grid de fotos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredPhotos.map((photo, i) => (
          <div 
            key={i} 
            className="gallery-element group relative aspect-square overflow-hidden border border-white/5 bg-surface-low shadow-lg"
          >
            <img 
              src={photo.path} 
              alt={photo.alt} 
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

      {/* CTA Final */}
      <div className="gallery-element mt-32 text-center reveal-up">
        <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-2.5 rounded-full text-[11px] font-bold tracking-industrial text-accent uppercase mb-8">
          <Star className="w-3.5 h-3.5 text-accent fill-accent" />
          <span>¿Quieres un corte así?</span>
        </div>
        <h2 className="headline-lg text-4xl text-white uppercase mb-8">Escribe tu propia historia</h2>
        <Link 
          to="/reservar"
          className="group relative inline-flex items-center gap-6 bg-accent text-background font-black text-xs px-16 py-6 rounded-none hover:bg-white transition-smooth shadow-2xl uppercase tracking-industrial accent-glow"
        >
          <Scissors className="w-5 h-5" />
          Reservar Cita →
        </Link>
      </div>
    </div>
  );
};

export default GalleryPage;
