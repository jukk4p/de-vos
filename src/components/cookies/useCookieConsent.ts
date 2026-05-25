import { useState, useCallback, useMemo } from 'react';
import type { CookieConsent, CookiePreferences, ConsentStatus } from '../../types/cookies';

const CONSENT_VERSION = '1.0.0';
const LOCAL_STORAGE_KEY = 'devos_cookie_consent';

const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

const getInitialConsent = (): CookieConsent => {
  try {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as CookieConsent;
      if (parsed.version === CONSENT_VERSION) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Error reading cookie consent from localStorage', e);
  }
  return {
    status: 'pending',
    preferences: DEFAULT_PREFERENCES,
    timestamp: Date.now(),
    version: CONSENT_VERSION,
  };
};

export const useCookieConsent = () => {
  const [consent, setConsent] = useState<CookieConsent>(getInitialConsent);
  const [showModal, setShowModal] = useState(false);

  const saveConsent = useCallback((status: ConsentStatus, preferences: CookiePreferences) => {
    const newConsent: CookieConsent = {
      status,
      preferences,
      timestamp: Date.now(),
      version: CONSENT_VERSION,
    };
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newConsent));
    } catch (e) {
      console.error('Error writing cookie consent to localStorage', e);
    }
    setConsent(newConsent);
  }, []);

  const acceptAll = useCallback(() => {
    saveConsent('accepted', {
      necessary: true,
      analytics: true,
      marketing: true,
    });
  }, [saveConsent]);

  const rejectAll = useCallback(() => {
    saveConsent('rejected', {
      necessary: true,
      analytics: false,
      marketing: false,
    });
  }, [saveConsent]);

  const saveCustom = useCallback((prefs: Omit<CookiePreferences, 'necessary'>) => {
    saveConsent('custom', {
      necessary: true,
      analytics: prefs.analytics,
      marketing: prefs.marketing,
    });
    setShowModal(false);
  }, [saveConsent]);

  const openModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const showBanner = useMemo(() => consent.status === 'pending', [consent.status]);
  const preferences = useMemo(() => consent.preferences, [consent.preferences]);

  return {
    consent,
    preferences,
    showBanner,
    showModal,
    acceptAll,
    rejectAll,
    saveCustom,
    openModal,
    closeModal,
  };
};
