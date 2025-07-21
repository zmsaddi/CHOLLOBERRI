import { useMemo } from 'react';
import { translations, getTranslation, Translations } from '../i18n';

export const useTranslation = (language: string) => {
  const currentTranslations = useMemo(() => {
    return translations[language] || translations['es'];
  }, [language]);

  const t = useMemo(() => {
    return (key: string, fallback?: string): string => {
      return getTranslation(currentTranslations, key, fallback || key);
    };
  }, [currentTranslations]);

  // Helper function to get product data with translations
  const getProductData = useMemo(() => {
    return (productId: string) => {
      const productKey = getProductKey(productId);
      if (!productKey) return null;

      return {
        name: t(`productData.${productKey}.name`),
        description: t(`productData.${productKey}.description`),
        features: currentTranslations.productData?.[productKey]?.features || []
      };
    };
  }, [currentTranslations, t]);

  return { t, getProductData };
};

// Helper function to map product IDs to translation keys
const getProductKey = (productId: string): string | null => {
  const mapping: Record<string, string> = {
    'eco-bike-1': 'ecoBike',
    'scooter-pro': 'scooterPro',
    'cargo-master-xl': 'cargoMaster',
    'skateboard-x': 'skateboardX'
  };
  return mapping[productId] || null;
};

