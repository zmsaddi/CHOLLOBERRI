import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../hooks/useTranslation';

interface SEOHeadProps {
  currentLanguage: string;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'product' | 'article';
  productData?: {
    name: string;
    price: number;
    currency: string;
    availability: string;
    brand: string;
  };
}

const SEOHead: React.FC<SEOHeadProps> = ({
  currentLanguage,
  title,
  description,
  keywords,
  image = '/mugixor-logo.jpg',
  url = 'https://mugixor.com',
  type = 'website',
  productData
}) => {
  const { t } = useTranslation(currentLanguage);

  // Default SEO data based on language
  const defaultSEO = {
    es: {
      title: 'Mugixor - Movilidad Eléctrica Sostenible en Europa | Bicicletas, Patinetes y Más',
      description: 'Líder en movilidad sostenible en Europa. Descubre nuestra gama de bicicletas eléctricas, patinetes inteligentes y vehículos eco-friendly. Envío gratuito a 900+ ciudades europeas. ¡Únete a la revolución verde!',
      keywords: 'movilidad eléctrica, bicicletas eléctricas, patinetes eléctricos, transporte sostenible, vehículos ecológicos, Europa, Mugixor, e-bike, scooter eléctrico, cargo bike'
    },
    eu: {
      title: 'Mugixor - Europako Mugikortasun Elektrikoa | Bizikleta, Patinete eta Gehiago',
      description: 'Europako mugikortasun jasangarriaren liderra. Ezagutu gure bizikleta elektriko, patinete adimentsuen eta ibilgailu ekologikoen gama. Bidalketa doakoa 900+ hiri europearretan. Batu iraultza berdera!',
      keywords: 'mugikortasun elektrikoa, bizikleta elektrikoak, patinete elektrikoak, garraio jasangarria, ibilgailu ekologikoak, Europa, Mugixor, e-bike, scooter elektrikoa, karga bizikleta'
    },
    en: {
      title: 'Mugixor - Sustainable Electric Mobility in Europe | E-Bikes, Scooters & More',
      description: 'Leading sustainable mobility in Europe. Discover our range of electric bikes, smart scooters and eco-friendly vehicles. Free shipping to 900+ European cities. Join the green revolution!',
      keywords: 'electric mobility, electric bikes, electric scooters, sustainable transport, eco vehicles, Europe, Mugixor, e-bike, electric scooter, cargo bike'
    },
    fr: {
      title: 'Mugixor - Mobilité Électrique Durable en Europe | Vélos, Trottinettes et Plus',
      description: 'Leader de la mobilité durable en Europe. Découvrez notre gamme de vélos électriques, trottinettes intelligentes et véhicules écologiques. Livraison gratuite dans 900+ villes européennes. Rejoignez la révolution verte!',
      keywords: 'mobilité électrique, vélos électriques, trottinettes électriques, transport durable, véhicules écologiques, Europe, Mugixor, e-bike, scooter électrique, vélo cargo'
    },
    nl: {
      title: 'Mugixor - Duurzame Elektrische Mobiliteit in Europa | E-Bikes, Scooters & Meer',
      description: 'Leidend in duurzame mobiliteit in Europa. Ontdek ons assortiment elektrische fietsen, slimme scooters en milieuvriendelijke voertuigen. Gratis verzending naar 900+ Europese steden. Doe mee aan de groene revolutie!',
      keywords: 'elektrische mobiliteit, elektrische fietsen, elektrische scooters, duurzaam transport, eco voertuigen, Europa, Mugixor, e-bike, elektrische scooter, bakfiets'
    },
    de: {
      title: 'Mugixor - Nachhaltige Elektromobilität in Europa | E-Bikes, Roller & Mehr',
      description: 'Führend in nachhaltiger Mobilität in Europa. Entdecken Sie unser Sortiment an Elektrofahrrädern, intelligenten Rollern und umweltfreundlichen Fahrzeugen. Kostenloser Versand in 900+ europäische Städte. Werden Sie Teil der grünen Revolution!',
      keywords: 'Elektromobilität, Elektrofahrräder, Elektroroller, nachhaltiger Transport, Öko-Fahrzeuge, Europa, Mugixor, E-Bike, Elektroroller, Lastenrad'
    }
  };

  const currentSEO = defaultSEO[currentLanguage as keyof typeof defaultSEO] || defaultSEO.es;
  const finalTitle = title || currentSEO.title;
  const finalDescription = description || currentSEO.description;
  const finalKeywords = keywords || currentSEO.keywords;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content="Mugixor" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={currentLanguage} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Mugixor" />
      <meta property="og:locale" content={currentLanguage === 'eu' ? 'eu_ES' : `${currentLanguage}_${currentLanguage.toUpperCase()}`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={finalTitle} />
      <meta property="twitter:description" content={finalDescription} />
      <meta property="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#3b82f6" />
      <meta name="msapplication-TileColor" content="#3b82f6" />

      {/* Structured Data for Products */}
      {productData && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": productData.name,
            "image": image,
            "description": finalDescription,
            "brand": {
              "@type": "Brand",
              "name": productData.brand
            },
            "offers": {
              "@type": "Offer",
              "url": url,
              "priceCurrency": productData.currency,
              "price": productData.price,
              "availability": `https://schema.org/${productData.availability}`,
              "seller": {
                "@type": "Organization",
                "name": "Mugixor"
              }
            }
          })}
        </script>
      )}

      {/* Organization Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Mugixor",
          "url": "https://mugixor.com",
          "logo": "https://mugixor.com/mugixor-logo.jpg",
          "description": finalDescription,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+34632759513",
            "contactType": "customer service",
            "availableLanguage": ["Spanish", "Basque", "English", "French", "Dutch", "German"]
          },
          "sameAs": [
            "https://wa.me/34632759513"
          ],
          "areaServed": {
            "@type": "Place",
            "name": "Europe"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;

