import es from './es.json';
import eu from './eu.json';
import fr from './fr.json';
import en from './en.json';
import nl from './nl.json';
import de from './de.json';

const translations = {
  es,
  eu,
  fr,
  en,
  nl,
  de
};

export function getTranslation(lang) {
  return translations[lang] || translations.es;
}

export function t(lang, key) {
  const translation = getTranslation(lang);
  const keys = key.split('.');
  let result = translation;
  
  for (const k of keys) {
    result = result?.[k];
  }
  
  return result || key;
}

