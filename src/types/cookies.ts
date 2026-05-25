export type ConsentStatus = 'pending' | 'accepted' | 'rejected' | 'custom';

export interface CookiePreferences {
  necessary: boolean;      // siempre true, no modificable
  analytics: boolean;      // Google Analytics u similar
  marketing: boolean;      // redes sociales, remarketing
}

export interface CookieConsent {
  status: ConsentStatus;
  preferences: CookiePreferences;
  timestamp: number;
  version: string;         // versión de la política, para forzar re-consent
}
