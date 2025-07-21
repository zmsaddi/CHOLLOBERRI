import { useEffect } from 'react';

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  product = null 
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    updateMetaTag('description', description);
    
    // Update meta keywords
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }
    
    // Open Graph tags
    updateMetaProperty('og:title', title);
    updateMetaProperty('og:description', description);
    updateMetaProperty('og:type', type);
    updateMetaProperty('og:url', url || window.location.href);
    updateMetaProperty('og:site_name', 'Mugixor');
    
    if (image) {
      updateMetaProperty('og:image', image);
      updateMetaProperty('og:image:width', '1200');
      updateMetaProperty('og:image:height', '630');
    }
    
    // Twitter Card tags
    updateMetaName('twitter:card', 'summary_large_image');
    updateMetaName('twitter:title', title);
    updateMetaName('twitter:description', description);
    if (image) {
      updateMetaName('twitter:image', image);
    }
    
    // Schema.org structured data for products
    if (product && type === 'product') {
      const schema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "image": product.images,
        "brand": {
          "@type": "Brand",
          "name": "Mugixor"
        },
        "offers": {
          "@type": "Offer",
          "price": product.price,
          "priceCurrency": "EUR",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "Mugixor"
          }
        },
        "category": product.category,
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "127"
        }
      };
      
      updateStructuredData(schema);
    }
    
    // Organization schema for homepage
    if (type === 'website') {
      const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Mugixor",
        "url": "https://mugixor.com",
        "logo": "https://mugixor.com/logo.jpg",
        "description": "Líder en movilidad sostenible en Europa. Soluciones innovadoras de transporte eléctrico.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "ES"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+34-632-759-513",
          "contactType": "customer service"
        },
        "sameAs": [
          "https://www.facebook.com/mugixor",
          "https://www.instagram.com/mugixor",
          "https://www.linkedin.com/company/mugixor"
        ]
      };
      
      updateStructuredData(orgSchema);
    }
    
  }, [title, description, keywords, image, url, type, product]);
  
  const updateMetaTag = (name, content) => {
    let element = document.querySelector(`meta[name="${name}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('name', name);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };
  
  const updateMetaProperty = (property, content) => {
    let element = document.querySelector(`meta[property="${property}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('property', property);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };
  
  const updateMetaName = (name, content) => {
    let element = document.querySelector(`meta[name="${name}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('name', name);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };
  
  const updateStructuredData = (schema) => {
    // Remove existing schema
    const existing = document.querySelector('script[type="application/ld+json"]');
    if (existing) {
      existing.remove();
    }
    
    // Add new schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  };
  
  return null; // This component doesn't render anything
};

export default SEOHead;

