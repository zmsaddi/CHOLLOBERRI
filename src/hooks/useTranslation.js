import { useState, useEffect, useCallback } from 'react';
import { translations, getBrowserLanguage } from '../lib/i18n';

// Global state for language
let globalLanguage = localStorage.getItem('mugixor-language') || getBrowserLanguage();
const listeners = new Set();

// Global language change function
const changeGlobalLanguage = (newLanguage) => {
  if (translations[newLanguage]) {
    globalLanguage = newLanguage;
    localStorage.setItem('mugixor-language', newLanguage);
    // Notify all listeners
    listeners.forEach(listener => listener(newLanguage));
  }
};

export const useTranslation = () => {
  const [currentLanguage, setCurrentLanguage] = useState(globalLanguage);

  // Subscribe to global language changes
  useEffect(() => {
    const listener = (newLanguage) => {
      setCurrentLanguage(newLanguage);
    };
    
    listeners.add(listener);
    
    return () => {
      listeners.delete(listener);
    };
  }, []);

  const changeLanguage = useCallback((newLanguage) => {
    changeGlobalLanguage(newLanguage);
  }, []);

  const t = useCallback((key) => {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        // Fallback to Spanish if key not found
        value = translations.es;
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object') {
            value = value[fallbackKey];
          } else {
            return key; // Return key if not found
          }
        }
        break;
      }
    }
    
    return value || key;
  }, [currentLanguage]);

  return {
    currentLanguage,
    changeLanguage,
    t,
    availableLanguages: Object.keys(translations)
  };
};

