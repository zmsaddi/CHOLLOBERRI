// Types
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
}

// Sample products data with multiple images
export const products: Product[] = [
  {
    id: 'eco-bike-1',
    name: 'Bicicleta Urbana Eco',
    description: 'Perfecta para estudiantes y profesionales urbanos. Batería de larga duración hasta 100 km.',
    price: 1299,
    images: [
      '/images/eco-bike-1.jpg',
      '/images/eco-bike-2.jpg',
      '/images/eco-bike-3.jpg'
    ],
    category: 'bike',
    features: [
      'Batería de larga duración hasta 100 km',
      'Motor eléctrico silencioso',
      'Diseño urbano elegante',
      'Sistema de frenado regenerativo',
      'Luces LED integradas',
      'Portaequipajes incluido'
    ],
    specifications: {
      'Autonomía': '100 km',
      'Velocidad máxima': '25 km/h',
      'Tiempo de carga': '4-6 horas',
      'Peso': '22 kg',
      'Capacidad de carga': '120 kg',
      'Garantía': '2 años'
    }
  },
  {
    id: 'scooter-pro',
    name: 'Patinete Inteligente Pro',
    description: 'Movilidad ágil para trabajadores urbanos. Diseño plegable ultracompacto.',
    price: 899,
    images: [
      '/images/scooter-1.jpg',
      '/images/scooter-2.jpg',
      '/images/scooter-3.jpg'
    ],
    category: 'scooter',
    features: [
      'Diseño plegable ultracompacto',
      'Aplicación móvil inteligente',
      'Sistema antirrobo GPS',
      'Neumáticos antipinchazos',
      'Pantalla LED informativa',
      'Carga rápida USB-C'
    ],
    specifications: {
      'Autonomía': '45 km',
      'Velocidad máxima': '25 km/h',
      'Tiempo de carga': '3-4 horas',
      'Peso': '14 kg',
      'Capacidad de carga': '100 kg',
      'Garantía': '1 año'
    }
  },
  {
    id: 'cargo-master-xl',
    name: 'Cargo Master XL',
    description: 'Solución de carga para familias y empresas. Capacidad de carga hasta 100kg.',
    price: 2199,
    images: [
      '/images/cargo-1.jpg',
      '/images/cargo-2.jpg',
      '/images/cargo-3.jpg'
    ],
    category: 'cargo',
    features: [
      'Capacidad de carga hasta 100kg',
      'Compartimento de carga impermeable',
      'Asientos para niños opcionales',
      'Sistema de estabilización avanzado',
      'Frenos de disco hidráulicos',
      'Batería extraíble'
    ],
    specifications: {
      'Autonomía': '80 km',
      'Velocidad máxima': '25 km/h',
      'Tiempo de carga': '5-7 horas',
      'Peso': '35 kg',
      'Capacidad de carga': '100 kg',
      'Garantía': '3 años'
    }
  },
  {
    id: 'skateboard-x',
    name: 'Monopatín Eléctrico X',
    description: 'Diversión y movilidad para jóvenes urbanos. Control remoto inalámbrico.',
    price: 599,
    images: [
      '/images/skateboard-1.jpg',
      '/images/skateboard-3.jpg'
    ],
    category: 'skateboard',
    features: [
      'Control remoto inalámbrico',
      'Luces LED personalizables',
      'Tabla de bambú ecológica',
      'Motores duales potentes',
      'Aplicación móvil',
      'Resistente al agua IP54'
    ],
    specifications: {
      'Autonomía': '25 km',
      'Velocidad máxima': '35 km/h',
      'Tiempo de carga': '2-3 horas',
      'Peso': '7 kg',
      'Capacidad de carga': '90 kg',
      'Garantía': '1 año'
    }
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

