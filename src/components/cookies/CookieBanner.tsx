import React, { Suspense, useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useCookieConsent } from './useCookieConsent';

const CookieModal = React.lazy(() => import('./CookieModal'));

const CookieBanner = () => {
  const {
    preferences,
    showBanner,
    showModal,
    acceptAll,
    rejectAll,
    saveCustom,
    openModal,
    closeModal,
  } = useCookieConsent();

  // isMounted controls DOM presence; stays true during exit animation
  const [isMounted, setIsMounted] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  // Show when consent is pending
  useEffect(() => {
    if (showBanner) {
      setIsMounted(true);
    }
  }, [showBanner]);

  // Entrance animation — 800ms delay to avoid competing with LCP
  // NOTE: useGSAP from @gsap/react requires options as an object, not a plain array
  useGSAP(() => {
    if (!isMounted || !bannerRef.current) return;

    // Start hidden below viewport (no conflicting Tailwind transform class)
    gsap.set(bannerRef.current, { yPercent: 100 });

    const timer = setTimeout(() => {
      gsap.to(bannerRef.current, {
        yPercent: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    }, 800);

    return () => clearTimeout(timer);
  }, { dependencies: [isMounted], revertOnUpdate: true });

  // Exit animation — runs before unmounting or saving
  const exitAndRun = (action: () => void) => {
    if (!bannerRef.current) {
      action();
      setIsMounted(false);
      return;
    }
    gsap.to(bannerRef.current, {
      yPercent: 100,
      duration: 0.35,
      ease: 'power2.in',
      onComplete: () => {
        action();
        setIsMounted(false);
      },
    });
  };

  const handleAcceptAll = () => exitAndRun(acceptAll);
  const handleRejectAll = () => exitAndRun(rejectAll);
  const handleSaveCustom = (customPrefs: Omit<typeof preferences, 'necessary'>) =>
    exitAndRun(() => saveCustom(customPrefs));

  if (!isMounted) return null;

  return (
    <>
      <div
        ref={bannerRef}
        className="fixed bottom-0 left-0 right-0 w-full z-[9999] bg-[#1a1a1a] border-t border-[#D4A017]/30 p-6 md:px-12 md:py-6 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        role="dialog"
        aria-label="Aviso de cookies"
      >
        {/* Left text section */}
        <div className="text-left max-w-4xl space-y-1">
          <h4 className="font-heading text-sm md:text-base font-extrabold text-white uppercase tracking-wider">
            Usamos cookies
          </h4>
          <p className="text-primary/70 text-xs md:text-sm leading-relaxed font-medium">
            Utilizamos cookies propias para el correcto funcionamiento de la web. Puedes aceptarlas, rechazarlas o configurarlas según tus preferencias.{' '}
            <a
              href="/privacidad"
              className="text-[#D4A017] hover:text-white underline transition-smooth whitespace-nowrap"
            >
              Más información
            </a>
          </p>
        </div>

        {/* Right buttons section */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto shrink-0">
          <button
            onClick={openModal}
            className="w-full sm:w-auto px-5 py-3 border border-[#D4A017] text-white font-extrabold text-[10px] uppercase tracking-industrial rounded-none hover:bg-[#D4A017] hover:text-background transition-smooth cursor-pointer text-center focus:outline-none focus:ring-1 focus:ring-[#D4A017]"
          >
            Configurar
          </button>

          <button
            onClick={handleRejectAll}
            className="w-full sm:w-auto text-primary/60 hover:text-white font-extrabold text-[10px] uppercase tracking-industrial transition-smooth cursor-pointer py-3 px-4 text-center focus:outline-none focus:ring-1 focus:ring-[#D4A017]"
          >
            Rechazar
          </button>

          <button
            onClick={handleAcceptAll}
            className="w-full sm:w-auto px-6 py-3 bg-[#D4A017] hover:bg-[#B8860B] text-black font-extrabold text-[10px] uppercase tracking-industrial rounded-none transition-smooth cursor-pointer text-center whitespace-nowrap focus:outline-none focus:ring-1 focus:ring-black"
          >
            Aceptar todas
          </button>
        </div>
      </div>

      {/* Configuration modal (loaded lazily) */}
      <Suspense fallback={null}>
        {showModal && (
          <CookieModal
            initialPreferences={preferences}
            onClose={closeModal}
            onSave={handleSaveCustom}
          />
        )}
      </Suspense>
    </>
  );
};

export default CookieBanner;
