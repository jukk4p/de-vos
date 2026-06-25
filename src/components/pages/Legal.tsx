import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const LegalPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".legal-element", {
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "expo.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-40 pb-24 px-6 max-w-3xl mx-auto min-h-screen bg-background text-left">
      <header className="legal-element mb-16">
        <span className="text-accent text-[10px] font-black uppercase tracking-industrial mb-2 block">Condiciones Generales</span>
        <h1 className="display-sm text-white uppercase mb-4">Aviso Legal</h1>
        <div className="w-12 h-px bg-accent mt-4" />
      </header>

      <div className="legal-element space-y-8 text-primary/60 text-base leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-accent font-heading text-lg font-extrabold uppercase tracking-wide">1. Datos Identificativos</h2>
          <p>
            En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, se detallan los siguientes datos:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>**Denominación Social:** Barbería De-Vos</li>
            <li>**Domicilio Comercial:** C. Cervantes, 10, 41100 Coria del Río, Sevilla, España.</li>
            <li>**Actividad Principal:** Servicios de peluquería y estética masculina.</li>
            <li>**Teléfono de contacto:** 606 24 27 06</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-accent font-heading text-lg font-extrabold uppercase tracking-wide">2. Condiciones de Uso del Portal</h2>
          <p>
            El acceso y uso de este portal web atribuye la condición de **Usuario**, quien acepta de forma íntegra las condiciones de uso aquí descritas desde el momento de dicho acceso. 
          </p>
          <p>
            El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que se ofrecen a través de la web, y a no emplearlos para realizar actividades ilícitas, contrarias a la buena fe o al orden público.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-accent font-heading text-lg font-extrabold uppercase tracking-wide">3. Propiedad Intelectual e Industrial</h2>
          <p>
            Todos los textos, imágenes, logotipos, diseños y código de este sitio son propiedad exclusiva de **Barbería De-Vos** o de sus respectivos licenciantes, estando protegidos por las leyes de propiedad intelectual e industrial vigentes en España y la Unión Europea. Queda prohibida la reproducción, distribución o modificación pública de cualquier contenido sin la autorización previa por escrito de su titular.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-accent font-heading text-lg font-extrabold uppercase tracking-wide">4. Limitación de Responsabilidad</h2>
          <p>
            **Barbería De-Vos** no se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran ocasionarse por fallos en la conexión, interrupciones del servicio web, la presencia de virus o elementos dañinos en los contenidos, a pesar de haber adoptado las medidas tecnológicas oportunas para evitarlo.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-accent font-heading text-lg font-extrabold uppercase tracking-wide">5. Legislación Aplicable y Jurisdicción</h2>
          <p>
            Las relaciones establecidas entre el titular de la web y el usuario se regirán por la **legislación española vigente**. Para cualquier controversia surgida, las partes se someten a los juzgados y tribunales de la provincia de Sevilla, renunciando a cualquier otro fuero que pudiera corresponderles.
          </p>
        </section>
      </div>
    </div>
  );
};

export default LegalPage;
