import { useState, useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { X } from 'lucide-react';
import type { CookiePreferences } from '../../types/cookies';

interface CookieModalProps {
  initialPreferences: CookiePreferences;
  onClose: () => void;
  onSave: (prefs: Omit<CookiePreferences, 'necessary'>) => void;
}

const CookieModal = ({ initialPreferences, onClose, onSave }: CookieModalProps) => {
  const [prefs, setPrefs] = useState({
    analytics: initialPreferences.analytics,
    marketing: initialPreferences.marketing,
  });

  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Setup GSAP entrance animations
  useGSAP(() => {
    gsap.fromTo(overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.2, ease: 'power1.out' }
    );
    gsap.fromTo(contentRef.current,
      { scale: 0.95, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.25, ease: 'back.out(1.2)', delay: 0.05 }
    );
  }, { scope: modalRef });

  const { contextSafe } = useGSAP({ scope: modalRef });

  // Animate exit before triggering action
  const animateExit = contextSafe((onCompleteAction: () => void) => {
    gsap.to(contentRef.current, {
      scale: 0.95,
      opacity: 0,
      duration: 0.2,
      ease: 'power2.in'
    });
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: 'power1.in',
      delay: 0.05,
      onComplete: onCompleteAction
    });
  });

  const handleClose = () => {
    animateExit(onClose);
  };

  const handleSave = () => {
    animateExit(() => onSave(prefs));
  };

  const togglePreference = (key: 'analytics' | 'marketing') => {
    setPrefs(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Keep a stable reference of handlers for the event listener
  const handleCloseRef = useRef(handleClose);
  useEffect(() => {
    handleCloseRef.current = handleClose;
  });

  // Keyboard navigation & Focus trap
  useEffect(() => {
    const modalElement = modalRef.current;
    if (!modalElement) return;

    const focusableElements = modalElement.querySelectorAll<HTMLElement>(
      'button, [role="switch"]'
    );
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Set focus to close button initially
    firstElement.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          // Shift + Tab: wrap to last if active is first
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          // Tab: wrap to first if active is last
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      } else if (e.key === 'Escape') {
        handleCloseRef.current();
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-modal-title"
    >
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/80"
        onClick={handleClose}
      />

      {/* Modal Box */}
      <div
        ref={contentRef}
        className="relative w-full max-w-[520px] bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden shadow-2xl z-10 flex flex-col text-left animate-gpu"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <h3 id="cookie-modal-title" className="font-heading text-lg font-extrabold text-white uppercase tracking-wider">
            Configuración de cookies
          </h3>
          <button
            onClick={handleClose}
            className="text-primary/40 hover:text-white transition-smooth p-1 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#D4A017]"
            aria-label="Cerrar configuración de cookies"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content / Categories */}
        <div className="p-6 space-y-6 overflow-y-auto max-h-[60vh]">
          {/* NECESSARY */}
          <div className="flex items-start justify-between gap-6 pb-6 border-b border-white/5">
            <div className="space-y-1">
              <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wide">
                Necesarias
              </h4>
              <p className="text-primary/50 text-xs leading-relaxed font-medium">
                Esenciales para el funcionamiento básico de la web. No pueden desactivarse.
              </p>
            </div>
            <button
              role="switch"
              aria-checked="true"
              aria-label="Cookies necesarias"
              disabled
              className="relative inline-flex h-6 w-11 shrink-0 cursor-not-allowed items-center rounded-full bg-[#D4A017] opacity-50 transition-colors duration-200 focus:outline-none"
            >
              <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-black transition-transform duration-200" />
            </button>
          </div>

          {/* ANALYTICS */}
          <div className="flex items-start justify-between gap-6 pb-6 border-b border-white/5">
            <div className="space-y-1">
              <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wide">
                Analíticas
              </h4>
              <p className="text-primary/50 text-xs leading-relaxed font-medium">
                Nos ayudan a entender cómo interactúas con la web para mejorar la experiencia. No identifican al usuario.
              </p>
            </div>
            <button
              role="switch"
              aria-checked={prefs.analytics}
              aria-label="Cookies analíticas"
              onClick={() => togglePreference('analytics')}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-[#D4A017] ${
                prefs.analytics ? 'bg-[#D4A017]' : 'bg-white/10'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full transition-transform duration-200 ${
                  prefs.analytics ? 'translate-x-6 bg-black' : 'translate-x-1 bg-primary/60'
                }`}
              />
            </button>
          </div>

          {/* MARKETING */}
          <div className="flex items-start justify-between gap-6">
            <div className="space-y-1">
              <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wide">
                Marketing
              </h4>
              <p className="text-primary/50 text-xs leading-relaxed font-medium">
                Permiten mostrarte contenido relevante en redes sociales y plataformas externas.
              </p>
            </div>
            <button
              role="switch"
              aria-checked={prefs.marketing}
              aria-label="Cookies de marketing"
              onClick={() => togglePreference('marketing')}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-[#D4A017] ${
                prefs.marketing ? 'bg-[#D4A017]' : 'bg-white/10'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full transition-transform duration-200 ${
                  prefs.marketing ? 'translate-x-6 bg-black' : 'translate-x-1 bg-primary/60'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-white/5 bg-black/20">
          <button
            onClick={handleClose}
            className="px-6 py-3 border border-white/20 text-white font-extrabold text-[10px] uppercase tracking-industrial rounded-none hover:bg-white hover:text-background transition-smooth cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#D4A017]"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-3 bg-[#D4A017] hover:bg-[#B8860B] text-black font-extrabold text-[10px] uppercase tracking-industrial rounded-none transition-smooth cursor-pointer focus:outline-none focus:ring-1 focus:ring-black"
          >
            Guardar preferencias
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieModal;
