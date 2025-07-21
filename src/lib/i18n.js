// Translation system for Mugixor website

// Language configurations
export const languages = [
  { 
    code: 'es', 
    name: 'Español', 
    flag: '🇪🇸',
    nativeName: 'Español'
  },
  { 
    code: 'eu', 
    name: 'Euskera', 
    flag: '🏴',
    nativeName: 'Euskera'
  },
  { 
    code: 'en', 
    name: 'English', 
    flag: '🇬🇧',
    nativeName: 'English'
  },
  { 
    code: 'fr', 
    name: 'Français', 
    flag: '🇫🇷',
    nativeName: 'Français'
  },
  { 
    code: 'nl', 
    name: 'Nederlands', 
    flag: '🇳🇱',
    nativeName: 'Nederlands'
  },
  { 
    code: 'de', 
    name: 'Deutsch', 
    flag: '🇩🇪',
    nativeName: 'Deutsch'
  }
];

// Translation data
export const translations = {
  es: {
    // Navigation
    nav: {
      home: 'Inicio',
      products: 'Productos',
      about: 'Nosotros',
      contact: 'Contacto'
    },
    
    // Hero section
    hero: {
      title: 'Movimiento inteligente. Raíces locales. Visión global.',
      subtitle: 'Líder en movilidad sostenible en Europa. Soluciones innovadoras para estudiantes, profesionales y trabajadores.',
      coverage: 'Acceso a +900 ciudades europeas',
      cta: {
        products: 'Ver Productos',
        contact: 'Contactar'
      }
    },
    
    // Products
    products: {
      title: 'Nuestros Productos',
      subtitle: 'Descubre nuestra gama completa de vehículos eléctricos diseñados para la movilidad urbana moderna',
      featured: 'Productos Destacados',
      featuredSubtitle: 'Descubre nuestra selección de vehículos eléctricos más populares',
      viewAll: 'Ver Todos los Productos',
      categories: {
        all: 'Todos los Productos',
        bike: 'Bicicletas Eléctricas',
        scooter: 'Patinetes',
        cargo: 'Cargo Bikes',
        skateboard: 'Skateboards'
      },
      search: 'Buscar productos...',
      whatsapp: 'WhatsApp',
      call: 'Llamar',
      email: 'Email',
      features: 'Características Principales',
      additionalInfo: 'Información Adicional',
      productNotFound: 'Producto no encontrado',
      productNotFoundDesc: 'El producto que buscas no existe.',
      backToProducts: 'Volver a Productos',
      comparison: 'Comparar Productos',
      addToCompare: 'Añadir al Comparador',
      compare: 'Comparar',
      removeFromCompare: 'Quitar de Comparación',
      selectProductsToCompare: 'Selecciona productos para comparar',
      viewDetails: 'Ver Detalles',
      price: 'Precio',
      category: 'Categoría',
      description: 'Descripción',
      actions: 'Acciones',
      advancedSearch: 'Búsqueda Avanzada',
      priceRange: 'Rango de Precio',
      sortBy: 'Ordenar por',
      sortByPrice: 'Precio',
      sortByName: 'Nombre',
      sortByCategory: 'Categoría',
      filterByCategory: 'Filtrar por Categoría',
      clearFilters: 'Limpiar Filtros',
      noProductsFound: 'No se encontraron productos',
      showingResults: 'Mostrando {count} productos'
    },
    
    // About
    about: {
      title: 'Sobre Mugixor',
      subtitle: 'Somos pioneros en movilidad sostenible, conectando Europa con soluciones de transporte innovadoras y ecológicas',
      story: 'Nuestra Historia',
      mission: 'Nuestra Misión',
      vision: 'Nuestra Visión',
      values: 'Nuestros Valores'
    },
    
    // Contact
    contact: {
      title: 'Contacto',
      subtitle: '¿Tienes preguntas? Estamos aquí para ayudarte. Contáctanos por cualquier medio',
      phone: 'Teléfono',
      whatsapp: 'WhatsApp',
      email: 'Email',
      locations: 'Ubicaciones',
      locationsText: '900+ ciudades en Europa',
      sendMessage: 'Envíanos un mensaje',
      name: 'Nombre',
      nameRequired: 'Nombre *',
      emailRequired: 'Email *',
      messageRequired: 'Mensaje *',
      sendButton: 'Enviar Mensaje',
      messageSent: '¡Mensaje enviado correctamente!'
    },
    
    // WhatsApp messages
    whatsapp: {
      general: 'Hola, me gustaría recibir más información sobre los productos de Mugixor. ¿Podrían ayudarme?',
      product: 'Hola, me interesa el producto "{productName}". ¿Podrían darme más información sobre precio, disponibilidad y características?'
    },
    
    // Additional info
    additionalInfo: [
      '🚚 Envío gratuito a toda Europa',
      '🔧 Instalación y configuración incluida',
      '📞 Soporte técnico 24/7',
      '🔄 Garantía extendida disponible',
      '💳 Financiación disponible'
    ],
    
    // Stats
    stats: {
      activeUsers: 'Usuarios Activos',
      europeanCities: 'Ciudades Europeas',
      cleanEnergy: 'Energía Limpia',
      technicalSupport: 'Soporte Técnico'
    },
    
    // Features
    features: {
      cleanEnergy: {
        title: 'Energía 100% Limpia',
        description: 'Todos nuestros vehículos funcionan con energía eléctrica limpia, contribuyendo a un futuro más sostenible.'
      },
      europeanCoverage: {
        title: 'Cobertura Europea',
        description: 'Acceso a más de 900 ciudades en toda Europa. Movilidad sin fronteras para tu estilo de vida.'
      },
      support247: {
        title: 'Soporte 24/7',
        description: 'Nuestro equipo está disponible las 24 horas para ayudarte con cualquier consulta o problema técnico.'
      }
    }
  },
  
  eu: {
    // Navigation
    nav: {
      home: 'Hasiera',
      products: 'Produktuak',
      about: 'Guri buruz',
      contact: 'Kontaktua'
    },
    
    // Hero section
    hero: {
      title: 'Mugimendua adimentsua. Sustraia tokikoak. Ikuspegia globala.',
      subtitle: 'Europako mugikortasun jasangarriaren liderra. Ikasle, profesional eta langilentzako soluzio berritzaileak.',
      coverage: '+900 hiri europearretara sarbidea',
      cta: {
        products: 'Produktuak ikusi',
        contact: 'Kontaktatu'
      }
    },
    
    // Products
    products: {
      title: 'Gure Produktuak',
      subtitle: 'Ezagutu gure ibilgailu elektrikoen gama osoa hiri mugikortasun modernoari begira diseinatuak',
      featured: 'Nabarmendutako Produktuak',
      featuredSubtitle: 'Gure ibilgailu elektriko ezagunenen hautaketa ezagutu',
      viewAll: 'Produktu Guztiak Ikusi',
      categories: {
        all: 'Produktu Guztiak',
        bike: 'Bizikleta Elektrikoak',
        scooter: 'Patinete-ak',
        cargo: 'Karga Bizikletak',
        skateboard: 'Skateboard-ak'
      },
      search: 'Produktuak bilatu...',
      whatsapp: 'WhatsApp',
      call: 'Deitu',
      email: 'Email bidali',
      features: 'Ezaugarri Nagusiak',
      additionalInfo: 'Informazio Gehigarria',
      productNotFound: 'Produktua ez da aurkitu',
      productNotFoundDesc: 'Bilatzen ari zaren produktua ez dago.',
      backToProducts: 'Produktuetara itzuli'
    },
    
    // About
    about: {
      title: 'Mugixor-ri buruz',
      subtitle: 'Mugikortasun jasangarriaren aitzindariak gara, Europa garraio soluzio berritzaile eta ekologikoekin konektatzen',
      story: 'Gure Historia',
      mission: 'Gure Misioa',
      vision: 'Gure Ikuspegia',
      values: 'Gure Balioak'
    },
    
    // Contact
    contact: {
      title: 'Kontaktua',
      subtitle: 'Galderak dituzu? Hemen gaude laguntzeko. Kontaktatu gurekin edozein bidez',
      phone: 'Telefonoa',
      whatsapp: 'WhatsApp',
      email: 'Email',
      locations: 'Kokalekuak',
      locationsText: '900+ hiri Europan',
      sendMessage: 'Bidali mezua',
      name: 'Izena',
      nameRequired: 'Izena *',
      emailRequired: 'Email *',
      messageRequired: 'Mezua *',
      sendButton: 'Mezua Bidali',
      messageSent: 'Mezua ondo bidali da!'
    },
    
    // WhatsApp messages
    whatsapp: {
      general: 'Kaixo, Mugixor-en produktuei buruzko informazio gehiago jaso nahi nuke. Lagun dezakezue?',
      product: 'Kaixo, "{productName}" produktuari buruz interesa daukat. Prezioa, eskuragarritasuna eta ezaugarriei buruzko informazio gehiago eman dezakezue?'
    },
    
    // Additional info
    additionalInfo: [
      '🚚 Bidalketa doakoa Europa osoan',
      '🔧 Instalazioa eta konfigurazioa barne',
      '📞 Laguntza teknikoa 24/7',
      '🔄 Berme luzatua eskuragarri',
      '💳 Finantzaketa eskuragarri'
    ]
  },
  
  en: {
    // Navigation
    nav: {
      home: 'Home',
      products: 'Products',
      about: 'About',
      contact: 'Contact'
    },
    
    // Hero section
    hero: {
      title: 'Smart motion. Local roots. Global vision.',
      subtitle: 'Leader in sustainable mobility in Europe. Innovative solutions for students, professionals and workers.',
      coverage: 'Access to +900 European cities',
      cta: {
        products: 'View Products',
        contact: 'Contact'
      }
    },
    
    // Products
    products: {
      title: 'Our Products',
      subtitle: 'Discover our complete range of electric vehicles designed for modern urban mobility',
      featured: 'Featured Products',
      featuredSubtitle: 'Discover our selection of most popular electric vehicles',
      viewAll: 'View All Products',
      categories: {
        all: 'All Products',
        bike: 'Electric Bikes',
        scooter: 'Scooters',
        cargo: 'Cargo Bikes',
        skateboard: 'Skateboards'
      },
      search: 'Search products...',
      whatsapp: 'WhatsApp',
      call: 'Call',
      email: 'Email',
      features: 'Key Features',
      additionalInfo: 'Additional Information',
      productNotFound: 'Product not found',
      productNotFoundDesc: 'The product you are looking for does not exist.',
      backToProducts: 'Back to Products',
      comparison: 'Compare Products',
      addToCompare: 'Add to Comparison',
      compare: 'Compare',
      removeFromCompare: 'Remove from Comparison',
      selectProductsToCompare: 'Select products to compare',
      viewDetails: 'View Details',
      price: 'Price',
      category: 'Category',
      description: 'Description',
      actions: 'Actions',
      advancedSearch: 'Advanced Search',
      priceRange: 'Price Range',
      sortBy: 'Sort by',
      sortByPrice: 'Price',
      sortByName: 'Name',
      sortByCategory: 'Category',
      filterByCategory: 'Filter by Category',
      clearFilters: 'Clear Filters',
      noProductsFound: 'No products found',
      showingResults: 'Showing {count} products'
    },
    
    // About
    about: {
      title: 'About Mugixor',
      subtitle: 'Pioneers in sustainable mobility',
      mission: {
        title: 'Our Mission',
        description: 'To revolutionize urban mobility through innovative and sustainable electric solutions, making cities cleaner and more livable for everyone.'
      },
      vision: {
        title: 'Our Vision',
        description: 'To be the leading platform for sustainable mobility in Europe, connecting more than 1000 cities with clean and efficient transportation solutions.'
      },
      values: {
        title: 'Our Values',
        sustainability: 'Sustainability',
        innovation: 'Innovation',
        quality: 'Quality',
        accessibility: 'Accessibility'
      }
    },
    
    // Contact
    contact: {
      title: 'Contact Us',
      subtitle: 'We are here to help you',
      form: {
        name: 'Full Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Error sending message. Please try again.'
      },
      info: {
        phone: 'Phone',
        email: 'Email',
        hours: 'Business Hours',
        hoursValue: 'Monday to Friday: 9:00 - 18:00'
      }
    },
    
    // WhatsApp messages
    whatsapp: {
      general: 'Hello, I would like to receive more information about Mugixor products. Could you help me?',
      product: 'Hello, I am interested in the product "{productName}". Could you give me more information about price, availability and features?'
    },
    
    // Additional info
    additionalInfo: [
      '🚚 Free shipping throughout Europe',
      '🔧 Installation and configuration included',
      '📞 24/7 technical support',
      '🔄 Extended warranty available',
      '💳 Financing available'
    ],
    
    // Stats
    stats: {
      activeUsers: 'Active Users',
      europeanCities: 'European Cities',
      cleanEnergy: 'Clean Energy',
      technicalSupport: 'Technical Support'
    },
    
    // Features
    features: {
      cleanEnergy: {
        title: '100% Clean Energy',
        description: 'All our vehicles run on clean electric energy, contributing to a more sustainable future.'
      },
      europeanCoverage: {
        title: 'European Coverage',
        description: 'Access to more than 900 cities throughout Europe. Mobility without borders for your lifestyle.'
      },
      support247: {
        title: '24/7 Support',
        description: 'Our team is available 24 hours a day to help you with any questions or technical problems.'
      }
    }
  },
  
  fr: {
    // Navigation
    nav: {
      home: 'Accueil',
      products: 'Produits',
      about: 'À propos',
      contact: 'Contact'
    },
    
    // Hero section
    hero: {
      title: 'Mouvement intelligent. Racines locales. Vision globale.',
      subtitle: 'Leader de la mobilité durable en Europe. Solutions innovantes pour étudiants, professionnels et travailleurs.',
      coverage: 'Accès à +900 villes européennes',
      cta: {
        products: 'Voir les Produits',
        contact: 'Contact'
      }
    },
    
    // Products
    products: {
      title: 'Nos Produits',
      subtitle: 'Découvrez notre gamme complète de véhicules électriques conçus pour la mobilité urbaine moderne',
      featured: 'Produits Vedettes',
      featuredSubtitle: 'Découvrez notre sélection de véhicules électriques les plus populaires',
      viewAll: 'Voir Tous les Produits',
      categories: {
        all: 'Tous les Produits',
        bike: 'Vélos Électriques',
        scooter: 'Trottinettes',
        cargo: 'Vélos Cargo',
        skateboard: 'Skateboards'
      },
      search: 'Rechercher des produits...',
      whatsapp: 'WhatsApp',
      call: 'Appeler',
      email: 'Email',
      features: 'Caractéristiques Principales',
      additionalInfo: 'Informations Supplémentaires',
      productNotFound: 'Produit non trouvé',
      productNotFoundDesc: 'Le produit que vous recherchez n\'existe pas.',
      backToProducts: 'Retour aux Produits'
    },
    
    // About
    about: {
      title: 'À propos de Mugixor',
      subtitle: 'Nous sommes pionniers en mobilité durable, connectant l\'Europe avec des solutions de transport innovantes et écologiques',
      story: 'Notre Histoire',
      mission: 'Notre Mission',
      vision: 'Notre Vision',
      values: 'Nos Valeurs'
    },
    
    // Contact
    contact: {
      title: 'Contact',
      subtitle: 'Des questions ? Nous sommes là pour vous aider. Contactez-nous par tous moyens',
      phone: 'Téléphone',
      whatsapp: 'WhatsApp',
      email: 'Email',
      locations: 'Emplacements',
      locationsText: '900+ villes en Europe',
      sendMessage: 'Envoyez-nous un message',
      name: 'Nom',
      nameRequired: 'Nom *',
      emailRequired: 'Email *',
      messageRequired: 'Message *',
      sendButton: 'Envoyer le Message',
      messageSent: 'Message envoyé avec succès!'
    },
    
    // WhatsApp messages
    whatsapp: {
      general: 'Bonjour, j\'aimerais recevoir plus d\'informations sur les produits Mugixor. Pourriez-vous m\'aider?',
      product: 'Bonjour, je suis intéressé par le produit "{productName}". Pourriez-vous me donner plus d\'informations sur le prix, la disponibilité et les caractéristiques?'
    },
    
    // Additional info
    additionalInfo: [
      '🚚 Livraison gratuite dans toute l\'Europe',
      '🔧 Installation et configuration incluses',
      '📞 Support technique 24/7',
      '🔄 Garantie étendue disponible',
      '💳 Financement disponible'
    ]
  },
  
  nl: {
    // Navigation
    nav: {
      home: 'Home',
      products: 'Producten',
      about: 'Over ons',
      contact: 'Contact'
    },
    
    // Hero section
    hero: {
      title: 'Slimme beweging. Lokale wortels. Globale visie.',
      subtitle: 'Leider in duurzame mobiliteit in Europa. Innovatieve oplossingen voor studenten, professionals en werknemers.',
      coverage: 'Toegang tot +900 Europese steden',
      cta: {
        products: 'Producten Bekijken',
        contact: 'Contact'
      }
    },
    
    // Products
    products: {
      title: 'Onze Producten',
      subtitle: 'Ontdek ons complete assortiment elektrische voertuigen ontworpen voor moderne stedelijke mobiliteit',
      featured: 'Uitgelichte Producten',
      featuredSubtitle: 'Ontdek onze selectie van meest populaire elektrische voertuigen',
      viewAll: 'Alle Producten Bekijken',
      categories: {
        all: 'Alle Producten',
        bike: 'Elektrische Fietsen',
        scooter: 'Scooters',
        cargo: 'Bakfietsen',
        skateboard: 'Skateboards'
      },
      search: 'Producten zoeken...',
      whatsapp: 'WhatsApp',
      call: 'Bellen',
      email: 'Email',
      features: 'Belangrijkste Kenmerken',
      additionalInfo: 'Aanvullende Informatie',
      productNotFound: 'Product niet gevonden',
      productNotFoundDesc: 'Het product dat u zoekt bestaat niet.',
      backToProducts: 'Terug naar Producten'
    },
    
    // About
    about: {
      title: 'Over Mugixor',
      subtitle: 'Wij zijn pioniers in duurzame mobiliteit, die Europa verbinden met innovatieve en ecologische transportoplossingen',
      story: 'Ons Verhaal',
      mission: 'Onze Missie',
      vision: 'Onze Visie',
      values: 'Onze Waarden'
    },
    
    // Contact
    contact: {
      title: 'Contact',
      subtitle: 'Vragen? We zijn er om te helpen. Neem op elke manier contact met ons op',
      phone: 'Telefoon',
      whatsapp: 'WhatsApp',
      email: 'Email',
      locations: 'Locaties',
      locationsText: '900+ steden in Europa',
      sendMessage: 'Stuur ons een bericht',
      name: 'Naam',
      nameRequired: 'Naam *',
      emailRequired: 'Email *',
      messageRequired: 'Bericht *',
      sendButton: 'Bericht Verzenden',
      messageSent: 'Bericht succesvol verzonden!'
    },
    
    // WhatsApp messages
    whatsapp: {
      general: 'Hallo, ik zou graag meer informatie ontvangen over Mugixor producten. Kunt u mij helpen?',
      product: 'Hallo, ik ben geïnteresseerd in het product "{productName}". Kunt u mij meer informatie geven over prijs, beschikbaarheid en kenmerken?'
    },
    
    // Additional info
    additionalInfo: [
      '🚚 Gratis verzending door heel Europa',
      '🔧 Installatie en configuratie inbegrepen',
      '📞 24/7 technische ondersteuning',
      '🔄 Uitgebreide garantie beschikbaar',
      '💳 Financiering beschikbaar'
    ]
  },
  
  de: {
    // Navigation
    nav: {
      home: 'Startseite',
      products: 'Produkte',
      about: 'Über uns',
      contact: 'Kontakt'
    },
    
    // Hero section
    hero: {
      title: 'Intelligente Bewegung. Lokale Wurzeln. Globale Vision.',
      subtitle: 'Marktführer für nachhaltige Mobilität in Europa. Innovative Lösungen für Studenten, Fachkräfte und Arbeiter.',
      coverage: 'Zugang zu +900 europäischen Städten',
      cta: {
        products: 'Produkte Ansehen',
        contact: 'Kontakt'
      }
    },
    
    // Products
    products: {
      title: 'Unsere Produkte',
      subtitle: 'Entdecken Sie unser komplettes Sortiment an Elektrofahrzeugen für moderne urbane Mobilität',
      featured: 'Empfohlene Produkte',
      featuredSubtitle: 'Entdecken Sie unsere Auswahl der beliebtesten Elektrofahrzeuge',
      viewAll: 'Alle Produkte Ansehen',
      categories: {
        all: 'Alle Produkte',
        bike: 'Elektrofahrräder',
        scooter: 'Roller',
        cargo: 'Lastenräder',
        skateboard: 'Skateboards'
      },
      search: 'Produkte suchen...',
      whatsapp: 'WhatsApp',
      call: 'Anrufen',
      email: 'Email',
      features: 'Hauptmerkmale',
      additionalInfo: 'Zusätzliche Informationen',
      productNotFound: 'Produkt nicht gefunden',
      productNotFoundDesc: 'Das gesuchte Produkt existiert nicht.',
      backToProducts: 'Zurück zu Produkten'
    },
    
    // About
    about: {
      title: 'Über Mugixor',
      subtitle: 'Wir sind Pioniere der nachhaltigen Mobilität und verbinden Europa mit innovativen und ökologischen Transportlösungen',
      story: 'Unsere Geschichte',
      mission: 'Unsere Mission',
      vision: 'Unsere Vision',
      values: 'Unsere Werte'
    },
    
    // Contact
    contact: {
      title: 'Kontakt',
      subtitle: 'Haben Sie Fragen? Wir sind da, um zu helfen. Kontaktieren Sie uns auf jede Art',
      phone: 'Telefon',
      whatsapp: 'WhatsApp',
      email: 'Email',
      locations: 'Standorte',
      locationsText: '900+ Städte in Europa',
      sendMessage: 'Senden Sie uns eine Nachricht',
      name: 'Name',
      nameRequired: 'Name *',
      emailRequired: 'Email *',
      messageRequired: 'Nachricht *',
      sendButton: 'Nachricht Senden',
      messageSent: 'Nachricht erfolgreich gesendet!'
    },
    
    // WhatsApp messages
    whatsapp: {
      general: 'Hallo, ich möchte gerne mehr Informationen über Mugixor-Produkte erhalten. Können Sie mir helfen?',
      product: 'Hallo, ich interessiere mich für das Produkt "{productName}". Können Sie mir mehr Informationen über Preis, Verfügbarkeit und Eigenschaften geben?'
    },
    
    // Additional info
    additionalInfo: [
      '🚚 Kostenloser Versand in ganz Europa',
      '🔧 Installation und Konfiguration inklusive',
      '📞 24/7 technischer Support',
      '🔄 Erweiterte Garantie verfügbar',
      '💳 Finanzierung verfügbar'
    ]
  }
};

// Get browser language
export const getBrowserLanguage = () => {
  const browserLang = navigator.language.split('-')[0];
  return languages.find(lang => lang.code === browserLang)?.code || 'es';
};

// Local storage functions
export const saveLanguage = (langCode) => {
  localStorage.setItem('mugixor-language', langCode);
};

export const loadLanguage = () => {
  return localStorage.getItem('mugixor-language') || getBrowserLanguage();
};

// Translation function
export const t = (key, langCode = 'es') => {
  const keys = key.split('.');
  let value = translations[langCode];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
};

