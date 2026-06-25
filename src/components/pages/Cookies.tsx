import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const CookiesPage = () => {
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
        <h1 className="display-sm text-white uppercase mb-4">Política de Cookies</h1>
        <div className="w-12 h-px bg-accent mt-4" />
      </header>

      <div className="legal-element space-y-8 text-primary/60 text-base leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-accent font-heading text-lg font-extrabold uppercase tracking-wide">1. ¿Qué son las Cookies?</h2>
          <p>
            Una cookie es un pequeño archivo de texto que se almacena en su navegador cuando visita casi cualquier página web. Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página. Las cookies suelen almacenar información de carácter técnico, preferencias personales, personalización de contenidos, estadísticas de uso, enlaces a redes sociales, acceso a cuentas de usuario, etc.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-accent font-heading text-lg font-extrabold uppercase tracking-wide">2. Cookies utilizadas en este sitio web</h2>
          <p>
            Siguiendo las directrices de la Agencia Española de Protección de Datos y de conformidad con el RGPD y la normativa de cookies vigente para **2026**, procedemos a detallar el uso de cookies que hace esta web con el fin de informarle con la máxima precisión posible:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Cookies técnicas y esenciales:</strong> Son aquellas estrictamente necesarias para el correcto funcionamiento de la web, como la navegación o el envío de los formularios de reserva y contacto de forma segura.</li>
            <li><strong>Cookies de rendimiento y personalización:</strong> Cookies de sesión que optimizan el rendimiento de la aplicación React SPA, recuerdan si el menú ha sido navegado o si se ha interactuado con los formularios en esta sesión.</li>
            <li><strong>Cookies analíticas de terceros:</strong> Este sitio web utiliza herramientas analíticas estándar de terceros con el único fin de recopilar estadísticas anónimas sobre el tráfico de visitas y páginas más frecuentadas de forma agregada.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-accent font-heading text-lg font-extrabold uppercase tracking-wide">3. Desactivación o eliminación de cookies</h2>
          <p>
            En cualquier momento podrá ejercer su derecho de desactivación o eliminación de cookies de este sitio web. Estas acciones se realizan de forma diferente en función del navegador que esté usando:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Google Chrome:</strong> Configuración &gt; Mostrar opciones avanzadas &gt; Privacidad y seguridad &gt; Configuración de contenido &gt; Cookies.</li>
            <li><strong>Mozilla Firefox:</strong> Herramientas &gt; Opciones &gt; Privacidad &gt; Historial &gt; Usar una configuración personalizada para el historial.</li>
            <li><strong>Safari:</strong> Preferencias &gt; Seguridad o Privacidad.</li>
            <li><strong>Microsoft Edge:</strong> Configuración &gt; Cookies y permisos del sitio.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-accent font-heading text-lg font-extrabold uppercase tracking-wide">4. Notas adicionales</h2>
          <p>
            Ni esta web ni sus representantes legales se hacen responsables ni del contenido ni de la veracidad de las políticas de privacidad que puedan tener los terceros mencionados en esta política de cookies.
          </p>
          <p>
            Los navegadores web son las herramientas encargadas de almacenar las cookies y desde este lugar debe efectuar su derecho a la eliminación o desactivación de las mismas. Ni esta web ni sus representantes legales pueden garantizar la correcta o incorrecta manipulación de las cookies por parte de los mencionados navegadores.
          </p>
          <p>
            Para cualquier duda o consulta acerca de esta política de cookies no dude en comunicarse con nosotros a través del teléfono <strong>606 24 27 06</strong>.
          </p>
        </section>

        <section className="pt-6 border-t border-white/5 text-xs text-primary/30 uppercase tracking-widest">
          Última actualización: Mayo de 2026 · Barbería De-Vos
        </section>
      </div>
    </div>
  );
};

export default CookiesPage;
