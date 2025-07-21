import { useState, useEffect } from 'react';
import { t, loadLanguage, saveLanguage, getBrowserLanguage } from '../lib/i18n';

export const useTranslation = () => {
  const [currentLanguage, setCurrentLanguage] = useState(() => loadLanguage());

  useEffect(() => {
    // Save language preference when it changes
    saveLanguage(currentLanguage);
  }, [currentLanguage]);

  const changeLanguage = (langCode) => {
    setCurrentLanguage(langCode);
  };

  const translate = (key) => {
    return t(key, currentLanguage);
  };

  return {
    currentLanguage,
    changeLanguage,
    t: translate
  };
};

