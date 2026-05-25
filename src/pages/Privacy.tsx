import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const PrivacyPage = () => {
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
        <span className="text-accent text-[10px] font-black uppercase tracking-industrial mb-2 block">Información Legal</span>
        <h1 className="display-sm text-white uppercase mb-4">Política de Privacidad</h1>
        <div className="w-12 h-px bg-accent mt-4" />
      </header>

      <div className="legal-element space-y-8 text-primary/60 text-base leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-accent font-heading text-lg font-extrabold uppercase tracking-wide">1. Responsable del Tratamiento</h2>
          <p>
            El responsable de los datos recogidos a través de esta web es **Barbería De-Vos**, con domicilio comercial en Calle Cervantes, 10, 41100 Coria del Río, Sevilla, España.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-accent font-heading text-lg font-extrabold uppercase tracking-wide">2. Finalidad del Tratamiento de Datos</h2>
          <p>
            Los datos personales facilitados mediante nuestros formularios de reserva y contacto se tratarán con las siguientes finalidades:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Gestionar, agendar y confirmar las solicitudes de turnos para nuestros servicios de barbería.</li>
            <li>Responder a las consultas y dudas formuladas por los usuarios.</li>
            <li>Enviar notificaciones y recordatorios relativos a sus citas a través de teléfono, correo electrónico o WhatsApp.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-accent font-heading text-lg font-extrabold uppercase tracking-wide">3. Legitimación del Tratamiento</h2>
          <p>
            La base legal para el tratamiento de sus datos es el **consentimiento del usuario** al enviar su solicitud a través de nuestros formularios y aceptar de forma explícita esta política de privacidad.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-accent font-heading text-lg font-extrabold uppercase tracking-wide">4. Destinatarios de sus Datos</h2>
          <p>
            Los datos recogidos no serán cedidos a terceros bajo ningún concepto, salvo obligación legal expresa o para proveedores técnicos encargados de la infraestructura del sitio.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-accent font-heading text-lg font-extrabold uppercase tracking-wide">5. Derechos del Usuario</h2>
          <p>
            De acuerdo con el RGPD y la LOPDGDD, usted tiene derecho a:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>**Acceder** a sus datos personales en posesión del responsable.</li>
            <li>Solicitar la **rectificación** de aquellos datos inexactos o incompletos.</li>
            <li>Solicitar la **supresión** de sus datos cuando ya no sean necesarios para los fines que fueron recabados.</li>
            <li>Oponerse o limitar el tratamiento de sus datos bajo determinadas circunstancias.</li>
          </ul>
          <p className="pt-2">
            Para ejercer estos derechos, puede enviar una solicitud por escrito adjuntando copia de su documento de identidad a la dirección física del local en Calle Cervantes, 10, Coria del Río, o contactar de forma directa al teléfono **606 24 27 06**.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-accent font-heading text-lg font-extrabold uppercase tracking-wide">6. Conservación de los Datos</h2>
          <p>
            Los datos personales proporcionados se conservarán durante el tiempo estrictamente necesario para cumplir con la cita agendada y las obligaciones legales asociadas, o hasta que el usuario solicite su supresión definitiva.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPage;
