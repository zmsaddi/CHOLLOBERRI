// Mugixor Products Database - 10 Core Products

export const products = [
  {
    id: 'urban-eco-bike',
    category: 'bike',
    name: {
      es: 'Bicicleta Urbana Ecológica',
      eu: 'Hiri Bizikleta Ekologikoa',
      en: 'Urban Eco Bike',
      fr: 'Vélo Urbain Écologique',
      nl: 'Stedelijke Eco Fiets',
      de: 'Städtisches Öko-Fahrrad'
    },
    price: 1299,
    currency: '€',
    description: {
      es: 'Perfecta para estudiantes y profesionales urbanos. Batería de larga duración hasta 100 km.',
      eu: 'Ikasle eta hiri profesionalentzat ezin hobea. Iraupena luzeko bateria 100 km-ra arte.',
      en: 'Perfect for students and urban professionals. Long-lasting battery up to 100 km.',
      fr: 'Parfait pour les étudiants et professionnels urbains. Batterie longue durée jusqu\'à 100 km.',
      nl: 'Perfect voor studenten en stedelijke professionals. Langdurige batterij tot 100 km.',
      de: 'Perfekt für Studenten und Stadtprofis. Langlebige Batterie bis zu 100 km.'
    },
    features: {
      es: [
        'Batería de larga duración hasta 100 km',
        'Motor eléctrico silencioso',
        'Diseño urbano elegante',
        'Sistema de frenado regenerativo',
        'Luces LED integradas',
        'Portaequipajes incluido'
      ],
      eu: [
        'Iraupena luzeko bateria 100 km-ra arte',
        'Motor elektriko isila',
        'Hiri diseinu dotorea',
        'Balaztatze erregeneratiboaren sistema',
        'LED argiak integratuak',
        'Garraiatzailea barne'
      ],
      en: [
        'Long-lasting battery up to 100 km',
        'Silent electric motor',
        'Elegant urban design',
        'Regenerative braking system',
        'Integrated LED lights',
        'Carrier included'
      ],
      fr: [
        'Batterie longue durée jusqu\'à 100 km',
        'Moteur électrique silencieux',
        'Design urbain élégant',
        'Système de freinage régénératif',
        'Éclairage LED intégré',
        'Porte-bagages inclus'
      ],
      nl: [
        'Langdurige batterij tot 100 km',
        'Stille elektrische motor',
        'Elegant stedelijk ontwerp',
        'Regeneratief remsysteem',
        'Geïntegreerde LED-verlichting',
        'Drager inbegrepen'
      ],
      de: [
        'Langlebige Batterie bis zu 100 km',
        'Leiser Elektromotor',
        'Elegantes Stadtdesign',
        'Regeneratives Bremssystem',
        'Integrierte LED-Beleuchtung',
        'Gepäckträger inklusive'
      ]
    },
    images: [
      '/images/urban-eco-bike-1.jpg',
      '/images/urban-eco-bike-2.jpg',
      '/images/urban-eco-bike-3.jpg'
    ],
    inStock: true,
    featured: true
  },
  
  {
    id: 'smart-pro-scooter',
    category: 'scooter',
    name: {
      es: 'Patinete Inteligente Pro',
      eu: 'Patinete Adimentsua Pro',
      en: 'Smart Pro Scooter',
      fr: 'Trottinette Intelligente Pro',
      nl: 'Slimme Pro Scooter',
      de: 'Intelligenter Pro Roller'
    },
    price: 899,
    currency: '€',
    description: {
      es: 'Solución de movilidad perfecta para trabajadores urbanos. Diseño plegable ultracompacto.',
      eu: 'Hiri langileentzako mugikortasun soluzio ezin hobea. Diseinu tolesteko ultrakonpaktua.',
      en: 'Perfect mobility solution for urban workers. Ultra-compact foldable design.',
      fr: 'Solution de mobilité parfaite pour les travailleurs urbains. Design pliable ultra-compact.',
      nl: 'Perfecte mobiliteitsoplossing voor stedelijke werknemers. Ultra-compact opvouwbaar ontwerp.',
      de: 'Perfekte Mobilitätslösung für Stadtarbeiter. Ultra-kompaktes faltbares Design.'
    },
    features: {
      es: [
        'Diseño plegable ultracompacto',
        'Autonomía de 45 km',
        'Velocidad máxima 25 km/h',
        'App móvil con GPS',
        'Frenos de disco duales',
        'Resistente al agua IP54'
      ],
      eu: [
        'Diseinu tolesteko ultrakonpaktua',
        '45 km-ko autonomia',
        'Gehienezko abiadura 25 km/h',
        'GPS-dun mugikor aplikazioa',
        'Disko balazta bikoitzak',
        'Uraren aurkako erresistentzia IP54'
      ],
      en: [
        'Ultra-compact foldable design',
        '45 km range',
        'Maximum speed 25 km/h',
        'Mobile app with GPS',
        'Dual disc brakes',
        'Water resistant IP54'
      ],
      fr: [
        'Design pliable ultra-compact',
        'Autonomie de 45 km',
        'Vitesse maximale 25 km/h',
        'Application mobile avec GPS',
        'Freins à disque doubles',
        'Résistant à l\'eau IP54'
      ],
      nl: [
        'Ultra-compact opvouwbaar ontwerp',
        '45 km bereik',
        'Maximale snelheid 25 km/u',
        'Mobiele app met GPS',
        'Dubbele schijfremmen',
        'Waterbestendig IP54'
      ],
      de: [
        'Ultra-kompaktes faltbares Design',
        '45 km Reichweite',
        'Höchstgeschwindigkeit 25 km/h',
        'Mobile App mit GPS',
        'Doppelte Scheibenbremsen',
        'Wasserbeständig IP54'
      ]
    },
    images: [
      '/images/smart-pro-scooter-1.jpg',
      '/images/smart-pro-scooter-2.jpg',
      '/images/smart-pro-scooter-3.jpg'
    ],
    inStock: true,
    featured: true
  },
  
  {
    id: 'cargo-master-xl',
    category: 'cargo',
    name: {
      es: 'Cargo Master XL',
      eu: 'Karga Master XL',
      en: 'Cargo Master XL',
      fr: 'Cargo Master XL',
      nl: 'Cargo Master XL',
      de: 'Cargo Master XL'
    },
    price: 2199,
    currency: '€',
    description: {
      es: 'Solución de carga para familias y empresas. Capacidad de carga de 100kg con estabilidad máxima.',
      eu: 'Familia eta enpresentzako karga soluzioa. 100kg-ko karga ahalmena egonkortasun maximoarekin.',
      en: 'Cargo solution for families and businesses. 100kg load capacity with maximum stability.',
      fr: 'Solution de transport pour familles et entreprises. Capacité de charge de 100kg avec stabilité maximale.',
      nl: 'Vrachtoplossing voor gezinnen en bedrijven. 100kg laadcapaciteit met maximale stabiliteit.',
      de: 'Frachtlösung für Familien und Unternehmen. 100kg Ladekapazität mit maximaler Stabilität.'
    },
    features: {
      es: [
        'Capacidad de carga 100kg',
        'Caja de carga extraíble',
        'Batería dual para mayor autonomía',
        'Sistema de suspensión avanzado',
        'Frenos hidráulicos',
        'Luces de seguridad 360°'
      ],
      eu: [
        '100kg-ko karga ahalmena',
        'Karga kutxa kengarria',
        'Bateria bikoitza autonomia handiagoarentzat',
        'Eseki sistema aurreratua',
        'Balazta hidraulikoak',
        '360°-ko segurtasun argiak'
      ],
      en: [
        '100kg load capacity',
        'Removable cargo box',
        'Dual battery for extended range',
        'Advanced suspension system',
        'Hydraulic brakes',
        '360° safety lights'
      ],
      fr: [
        'Capacité de charge 100kg',
        'Boîte de transport amovible',
        'Batterie double pour autonomie étendue',
        'Système de suspension avancé',
        'Freins hydrauliques',
        'Éclairage de sécurité 360°'
      ],
      nl: [
        '100kg laadcapaciteit',
        'Uitneembare vrachtbox',
        'Dubbele batterij voor uitgebreid bereik',
        'Geavanceerd vering systeem',
        'Hydraulische remmen',
        '360° veiligheidsverlichting'
      ],
      de: [
        '100kg Ladekapazität',
        'Herausnehmbare Frachtbox',
        'Doppelbatterie für erweiterte Reichweite',
        'Fortschrittliches Federungssystem',
        'Hydraulische Bremsen',
        '360° Sicherheitsbeleuchtung'
      ]
    },
    images: [
      '/images/cargo-master-xl-1.jpg',
      '/images/cargo-master-xl-2.jpg',
      '/images/cargo-master-xl-3.jpg'
    ],
    inStock: true,
    featured: true
  },
  
  {
    id: 'electric-skateboard-x',
    category: 'skateboard',
    name: {
      es: 'Skateboard Eléctrico X',
      eu: 'Skateboard Elektrikoa X',
      en: 'Electric Skateboard X',
      fr: 'Skateboard Électrique X',
      nl: 'Elektrisch Skateboard X',
      de: 'Elektrisches Skateboard X'
    },
    price: 599,
    currency: '€',
    description: {
      es: 'Diversión y movilidad para jóvenes. Control remoto inalámbrico y diseño resistente.',
      eu: 'Gazteentzako dibertsio eta mugikortasuna. Urruneko kontrol haririk gabea eta diseinu erresistentea.',
      en: 'Fun and mobility for young people. Wireless remote control and resistant design.',
      fr: 'Amusement et mobilité pour les jeunes. Télécommande sans fil et design résistant.',
      nl: 'Plezier en mobiliteit voor jongeren. Draadloze afstandsbediening en bestendig ontwerp.',
      de: 'Spaß und Mobilität für junge Leute. Drahtlose Fernbedienung und widerstandsfähiges Design.'
    },
    features: {
      es: [
        'Control remoto inalámbrico',
        'Autonomía de 20 km',
        'Velocidad máxima 30 km/h',
        'Ruedas todo terreno',
        'Carga rápida 2 horas',
        'Peso ligero 6.5 kg'
      ],
      eu: [
        'Urruneko kontrol haririk gabea',
        '20 km-ko autonomia',
        'Gehienezko abiadura 30 km/h',
        'Lurralde guztietako gurpilak',
        'Karga azkarra 2 ordu',
        'Pisu arina 6,5 kg'
      ],
      en: [
        'Wireless remote control',
        '20 km range',
        'Maximum speed 30 km/h',
        'All-terrain wheels',
        'Fast charging 2 hours',
        'Lightweight 6.5 kg'
      ],
      fr: [
        'Télécommande sans fil',
        'Autonomie de 20 km',
        'Vitesse maximale 30 km/h',
        'Roues tout-terrain',
        'Charge rapide 2 heures',
        'Poids léger 6,5 kg'
      ],
      nl: [
        'Draadloze afstandsbediening',
        '20 km bereik',
        'Maximale snelheid 30 km/u',
        'All-terrain wielen',
        'Snelladen 2 uur',
        'Lichtgewicht 6,5 kg'
      ],
      de: [
        'Drahtlose Fernbedienung',
        '20 km Reichweite',
        'Höchstgeschwindigkeit 30 km/h',
        'Geländegängige Räder',
        'Schnellladung 2 Stunden',
        'Leichtgewicht 6,5 kg'
      ]
    },
    images: [
      '/images/electric-skateboard-x-1.jpg',
      '/images/electric-skateboard-x-2.jpg',
      '/images/electric-skateboard-x-3.jpg'
    ],
    inStock: true,
    featured: true
  },
  
  {
    id: 'commuter-bike-plus',
    category: 'bike',
    name: {
      es: 'Bicicleta Commuter Plus',
      eu: 'Commuter Bizikleta Plus',
      en: 'Commuter Bike Plus',
      fr: 'Vélo Commuter Plus',
      nl: 'Commuter Fiets Plus',
      de: 'Pendler Fahrrad Plus'
    },
    price: 1599,
    currency: '€',
    description: {
      es: 'Ideal para trayectos largos al trabajo. Comodidad y eficiencia energética superior.',
      eu: 'Lanerako ibilbide luzeentzat ezin hobea. Erosotasuna eta energia eraginkortasun goragoa.',
      en: 'Ideal for long commutes to work. Superior comfort and energy efficiency.',
      fr: 'Idéal pour les longs trajets au travail. Confort supérieur et efficacité énergétique.',
      nl: 'Ideaal voor lange ritten naar het werk. Superieur comfort en energie-efficiëntie.',
      de: 'Ideal für lange Arbeitswege. Überlegener Komfort und Energieeffizienz.'
    },
    features: {
      es: [
        'Autonomía extendida 120 km',
        'Asiento ergonómico premium',
        'Cambios automáticos',
        'Pantalla LCD inteligente',
        'Cargador USB integrado',
        'Guardabarros completos'
      ],
      eu: [
        'Autonomia luzatua 120 km',
        'Eserleku ergonomiko premium',
        'Aldaketa automatikoak',
        'LCD pantaila adimentsua',
        'USB kargagailu integratua',
        'Lohi-babesle osoak'
      ],
      en: [
        'Extended range 120 km',
        'Premium ergonomic seat',
        'Automatic gears',
        'Smart LCD display',
        'Integrated USB charger',
        'Full mudguards'
      ],
      fr: [
        'Autonomie étendue 120 km',
        'Siège ergonomique premium',
        'Vitesses automatiques',
        'Écran LCD intelligent',
        'Chargeur USB intégré',
        'Garde-boue complets'
      ],
      nl: [
        'Uitgebreid bereik 120 km',
        'Premium ergonomische zitting',
        'Automatische versnellingen',
        'Slim LCD-scherm',
        'Geïntegreerde USB-lader',
        'Volledige spatborden'
      ],
      de: [
        'Erweiterte Reichweite 120 km',
        'Premium ergonomischer Sitz',
        'Automatische Gänge',
        'Intelligentes LCD-Display',
        'Integriertes USB-Ladegerät',
        'Vollständige Schutzbleche'
      ]
    },
    images: [
      '/images/commuter-bike-plus-1.jpg',
      '/images/commuter-bike-plus-2.jpg',
      '/images/commuter-bike-plus-3.jpg'
    ],
    inStock: true,
    featured: false
  },
  
  {
    id: 'city-scooter-lite',
    category: 'scooter',
    name: {
      es: 'Patinete Ciudad Lite',
      eu: 'Hiri Patinete Lite',
      en: 'City Scooter Lite',
      fr: 'Trottinette Ville Lite',
      nl: 'Stad Scooter Lite',
      de: 'Stadt Roller Lite'
    },
    price: 449,
    currency: '€',
    description: {
      es: 'Opción económica para estudiantes. Ligero y fácil de transportar.',
      eu: 'Ikasleentzako aukera ekonomikoa. Arina eta erraz garraiatzeko.',
      en: 'Budget option for students. Lightweight and easy to transport.',
      fr: 'Option économique pour étudiants. Léger et facile à transporter.',
      nl: 'Budgetoptie voor studenten. Lichtgewicht en gemakkelijk te vervoeren.',
      de: 'Budget-Option für Studenten. Leicht und einfach zu transportieren.'
    },
    features: {
      es: [
        'Peso ultraligero 12 kg',
        'Plegable en 3 segundos',
        'Autonomía de 25 km',
        'Velocidad máxima 20 km/h',
        'Neumáticos antipinchazos',
        'Precio accesible'
      ],
      eu: [
        'Pisu ultraarina 12 kg',
        '3 segundotan tolesteko',
        '25 km-ko autonomia',
        'Gehienezko abiadura 20 km/h',
        'Zulaketa aurkako pneumatikoak',
        'Prezio eskuragarria'
      ],
      en: [
        'Ultra-lightweight 12 kg',
        'Foldable in 3 seconds',
        '25 km range',
        'Maximum speed 20 km/h',
        'Puncture-proof tires',
        'Affordable price'
      ],
      fr: [
        'Ultra-léger 12 kg',
        'Pliable en 3 secondes',
        'Autonomie de 25 km',
        'Vitesse maximale 20 km/h',
        'Pneus anti-crevaison',
        'Prix abordable'
      ],
      nl: [
        'Ultra-lichtgewicht 12 kg',
        'Opvouwbaar in 3 seconden',
        '25 km bereik',
        'Maximale snelheid 20 km/u',
        'Lekbestendige banden',
        'Betaalbare prijs'
      ],
      de: [
        'Ultra-leicht 12 kg',
        'Faltbar in 3 Sekunden',
        '25 km Reichweite',
        'Höchstgeschwindigkeit 20 km/h',
        'Pannensichere Reifen',
        'Erschwinglicher Preis'
      ]
    },
    images: [
      '/images/city-scooter-lite-1.jpg',
      '/images/city-scooter-lite-2.jpg',
      '/images/city-scooter-lite-3.jpg'
    ],
    inStock: true,
    featured: false
  },
  
  {
    id: 'family-cargo-bike',
    category: 'cargo',
    name: {
      es: 'Bicicleta Cargo Familiar',
      eu: 'Familia Karga Bizikleta',
      en: 'Family Cargo Bike',
      fr: 'Vélo Cargo Familial',
      nl: 'Familie Bakfiets',
      de: 'Familien Lastenrad'
    },
    price: 1899,
    currency: '€',
    description: {
      es: 'Perfecta para familias con niños. Asientos seguros y compartimento espacioso.',
      eu: 'Haurrak dituzten familientzat ezin hobea. Eserleku seguruak eta gune zabalak.',
      en: 'Perfect for families with children. Safe seats and spacious compartment.',
      fr: 'Parfait pour les familles avec enfants. Sièges sécurisés et compartiment spacieux.',
      nl: 'Perfect voor gezinnen met kinderen. Veilige stoelen en ruime compartiment.',
      de: 'Perfekt für Familien mit Kindern. Sichere Sitze und geräumiges Abteil.'
    },
    features: {
      es: [
        'Asientos para 2 niños',
        'Cinturones de seguridad',
        'Compartimento impermeable',
        'Estabilidad mejorada',
        'Frenos de seguridad',
        'Toldo protector incluido'
      ],
      eu: [
        '2 haurrentzako eserlekuak',
        'Segurtasun gerrikoak',
        'Gune urjasanezina',
        'Egonkortasun hobetua',
        'Segurtasun balaztak',
        'Babes estalkia barne'
      ],
      en: [
        'Seats for 2 children',
        'Safety belts',
        'Waterproof compartment',
        'Enhanced stability',
        'Safety brakes',
        'Protective canopy included'
      ],
      fr: [
        'Sièges pour 2 enfants',
        'Ceintures de sécurité',
        'Compartiment étanche',
        'Stabilité renforcée',
        'Freins de sécurité',
        'Auvent protecteur inclus'
      ],
      nl: [
        'Stoelen voor 2 kinderen',
        'Veiligheidsgordels',
        'Waterdicht compartiment',
        'Verbeterde stabiliteit',
        'Veiligheidsremmen',
        'Beschermende luifel inbegrepen'
      ],
      de: [
        'Sitze für 2 Kinder',
        'Sicherheitsgurte',
        'Wasserdichtes Abteil',
        'Verbesserte Stabilität',
        'Sicherheitsbremsen',
        'Schutzdach inklusive'
      ]
    },
    images: [
      '/images/family-cargo-bike-1.jpg',
      '/images/family-cargo-bike-2.jpg',
      '/images/family-cargo-bike-3.jpg'
    ],
    inStock: true,
    featured: false
  },
  
  {
    id: 'sport-skateboard-pro',
    category: 'skateboard',
    name: {
      es: 'Skateboard Deportivo Pro',
      eu: 'Kirol Skateboard Pro',
      en: 'Sport Skateboard Pro',
      fr: 'Skateboard Sport Pro',
      nl: 'Sport Skateboard Pro',
      de: 'Sport Skateboard Pro'
    },
    price: 799,
    currency: '€',
    description: {
      es: 'Para entusiastas del skateboard. Rendimiento profesional y durabilidad extrema.',
      eu: 'Skateboard zaletuentzat. Errendimendu profesionala eta iraupena muturrekoa.',
      en: 'For skateboard enthusiasts. Professional performance and extreme durability.',
      fr: 'Pour les passionnés de skateboard. Performance professionnelle et durabilité extrême.',
      nl: 'Voor skateboard liefhebbers. Professionele prestaties en extreme duurzaamheid.',
      de: 'Für Skateboard-Enthusiasten. Professionelle Leistung und extreme Haltbarkeit.'
    },
    features: {
      es: [
        'Tabla de carbono premium',
        'Motores duales 1000W',
        'Autonomía de 35 km',
        'Velocidad máxima 40 km/h',
        'Ruedas de poliuretano',
        'Control por app avanzado'
      ],
      eu: [
        'Karbono taula premium',
        'Motor bikoitz 1000W',
        '35 km-ko autonomia',
        'Gehienezko abiadura 40 km/h',
        'Poliuretano gurpilak',
        'App kontrol aurreratua'
      ],
      en: [
        'Premium carbon deck',
        'Dual 1000W motors',
        '35 km range',
        'Maximum speed 40 km/h',
        'Polyurethane wheels',
        'Advanced app control'
      ],
      fr: [
        'Plateau carbone premium',
        'Moteurs doubles 1000W',
        'Autonomie de 35 km',
        'Vitesse maximale 40 km/h',
        'Roues en polyuréthane',
        'Contrôle par app avancé'
      ],
      nl: [
        'Premium carbon deck',
        'Dubbele 1000W motoren',
        '35 km bereik',
        'Maximale snelheid 40 km/u',
        'Polyurethaan wielen',
        'Geavanceerde app-bediening'
      ],
      de: [
        'Premium Carbon Deck',
        'Doppelte 1000W Motoren',
        '35 km Reichweite',
        'Höchstgeschwindigkeit 40 km/h',
        'Polyurethan Räder',
        'Erweiterte App-Steuerung'
      ]
    },
    images: [
      '/images/sport-skateboard-pro-1.jpg',
      '/images/sport-skateboard-pro-2.jpg',
      '/images/sport-skateboard-pro-3.jpg'
    ],
    inStock: true,
    featured: false
  },
  
  {
    id: 'mountain-ebike-adventure',
    category: 'bike',
    name: {
      es: 'E-Bike Montaña Adventure',
      eu: 'Mendi E-Bike Adventure',
      en: 'Mountain E-Bike Adventure',
      fr: 'VTT Électrique Adventure',
      nl: 'Mountainbike E-Bike Adventure',
      de: 'Berg E-Bike Adventure'
    },
    price: 2299,
    currency: '€',
    description: {
      es: 'Para aventureros urbanos y rurales. Resistente a todo tipo de terreno.',
      eu: 'Hiri eta landa abenturazaleentzat. Lurralde mota guztien aurkako erresistentea.',
      en: 'For urban and rural adventurers. Resistant to all types of terrain.',
      fr: 'Pour les aventuriers urbains et ruraux. Résistant à tous types de terrain.',
      nl: 'Voor stedelijke en landelijke avonturiers. Bestand tegen alle soorten terrein.',
      de: 'Für städtische und ländliche Abenteurer. Widerstandsfähig gegen alle Geländearten.'
    },
    features: {
      es: [
        'Suspensión completa',
        'Motor de alta potencia 750W',
        'Batería removible',
        'Neumáticos todo terreno',
        'Marco de aluminio reforzado',
        'Resistente al agua IP65'
      ],
      eu: [
        'Eseki osoa',
        'Potentzia handiko motorra 750W',
        'Bateria kengarria',
        'Lurralde guztietako pneumatikoak',
        'Aluminio marko indartua',
        'Uraren aurkako erresistentzia IP65'
      ],
      en: [
        'Full suspension',
        'High power 750W motor',
        'Removable battery',
        'All-terrain tires',
        'Reinforced aluminum frame',
        'Water resistant IP65'
      ],
      fr: [
        'Suspension complète',
        'Moteur haute puissance 750W',
        'Batterie amovible',
        'Pneus tout-terrain',
        'Cadre aluminium renforcé',
        'Résistant à l\'eau IP65'
      ],
      nl: [
        'Volledige vering',
        'Hoge vermogen 750W motor',
        'Uitneembare batterij',
        'All-terrain banden',
        'Versterkt aluminium frame',
        'Waterbestendig IP65'
      ],
      de: [
        'Vollgefedert',
        'Hochleistungsmotor 750W',
        'Herausnehmbare Batterie',
        'Geländereifen',
        'Verstärkter Aluminiumrahmen',
        'Wasserbeständig IP65'
      ]
    },
    images: [
      '/images/mountain-ebike-adventure-1.jpg',
      '/images/mountain-ebike-adventure-2.jpg',
      '/images/mountain-ebike-adventure-3.jpg'
    ],
    inStock: true,
    featured: false
  },
  
  {
    id: 'delivery-scooter-business',
    category: 'scooter',
    name: {
      es: 'Patinete Delivery Business',
      eu: 'Delivery Patinete Business',
      en: 'Delivery Scooter Business',
      fr: 'Trottinette Livraison Business',
      nl: 'Bezorg Scooter Business',
      de: 'Lieferroller Business'
    },
    price: 1199,
    currency: '€',
    description: {
      es: 'Diseñado para servicios de entrega. Resistente y con gran capacidad de carga.',
      eu: 'Banaketa zerbitzuentzat diseinatua. Erresistentea eta karga ahalmen handia.',
      en: 'Designed for delivery services. Resistant and with great load capacity.',
      fr: 'Conçu pour les services de livraison. Résistant et avec grande capacité de charge.',
      nl: 'Ontworpen voor bezorgdiensten. Bestand en met grote laadcapaciteit.',
      de: 'Für Lieferdienste entwickelt. Widerstandsfähig und mit großer Ladekapazität.'
    },
    features: {
      es: [
        'Caja de entrega 40L',
        'Autonomía extendida 60 km',
        'Neumáticos reforzados',
        'Sistema de bloqueo',
        'Luces de emergencia',
        'Garantía comercial'
      ],
      eu: [
        '40L-ko banaketa kutxa',
        'Autonomia luzatua 60 km',
        'Pneumatiko indartua',
        'Blokeatzeko sistema',
        'Larrialdi argiak',
        'Berme komertziala'
      ],
      en: [
        '40L delivery box',
        'Extended range 60 km',
        'Reinforced tires',
        'Locking system',
        'Emergency lights',
        'Commercial warranty'
      ],
      fr: [
        'Boîte de livraison 40L',
        'Autonomie étendue 60 km',
        'Pneus renforcés',
        'Système de verrouillage',
        'Éclairage d\'urgence',
        'Garantie commerciale'
      ],
      nl: [
        '40L bezorgbox',
        'Uitgebreid bereik 60 km',
        'Versterkte banden',
        'Vergrendelsysteem',
        'Noodverlichting',
        'Commerciële garantie'
      ],
      de: [
        '40L Lieferbox',
        'Erweiterte Reichweite 60 km',
        'Verstärkte Reifen',
        'Verriegelungssystem',
        'Notbeleuchtung',
        'Gewerbliche Garantie'
      ]
    },
    images: [
      '/images/delivery-scooter-business-1.jpg',
      '/images/delivery-scooter-business-2.jpg',
      '/images/delivery-scooter-business-3.jpg'
    ],
    inStock: true,
    featured: false
  }
];

// Helper functions
export const getProductById = (id) => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category) => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const searchProducts = (query, language = 'es') => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name[language].toLowerCase().includes(lowercaseQuery) ||
    product.description[language].toLowerCase().includes(lowercaseQuery)
  );
};

export const categories = [
  { id: 'all', icon: '🚀' },
  { id: 'bike', icon: '🚴' },
  { id: 'scooter', icon: '🛴' },
  { id: 'cargo', icon: '📦' },
  { id: 'skateboard', icon: '🛹' }
];

