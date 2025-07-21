// Translation system
import esTranslations from './es.json';
import euTranslations from './eu.json';
import frTranslations from './fr.json';
import enTranslations from './en.json';
import nlTranslations from './nl.json';
import deTranslations from './de.json';

export interface Translations {
  [key: string]: any;
}

export const translations: Record<string, Translations> = {
  es: esTranslations,
  eu: euTranslations,
  fr: frTranslations,
  en: enTranslations,
  nl: nlTranslations,
  de: deTranslations,
};

export const defaultLanguage = 'es';

export const supportedLanguages = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'eu', name: 'Euskera', flag: '/basque-flag.jpg' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
];

// Get translation by key path (e.g., 'nav.home')
export const getTranslation = (
  translations: Translations,
  key: string,
  fallback: string = key
): string => {
  const keys = key.split('.');
  let value: any = translations;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return fallback;
    }
  }
  
  return typeof value === 'string' ? value : fallback;
};

// Get browser language
export const getBrowserLanguage = (): string => {
  const browserLang = navigator.language.split('-')[0];
  return supportedLanguages.find(lang => lang.code === browserLang)?.code || defaultLanguage;
};

// Save language preference
export const saveLanguagePreference = (language: string): void => {
  localStorage.setItem('mugixor-language', language);
};

// Load language preference
export const loadLanguagePreference = (): string => {
  const saved = localStorage.getItem('mugixor-language');
  if (saved && supportedLanguages.find(lang => lang.code === saved)) {
    return saved;
  }
  return getBrowserLanguage();
};

