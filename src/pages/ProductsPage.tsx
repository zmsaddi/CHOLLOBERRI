import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import SEOHead from '../components/SEOHead';
import { useTranslation } from '../hooks/useTranslation';

interface ProductsPageProps {
  currentLanguage: string;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ currentLanguage }) => {
  const { t } = useTranslation(currentLanguage);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = [
    { id: 'all', name: t('products.categories.all'), icon: '🚀' },
    { id: 'bike', name: t('products.categories.bike'), icon: '🚴' },
    { id: 'scooter', name: t('products.categories.scooter'), icon: '🛴' },
    { id: 'cargo', name: t('products.categories.cargo'), icon: '📦' },
    { id: 'skateboard', name: t('products.categories.skateboard'), icon: '🛹' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getSEOData = () => {
    const seoTitles = {
      es: `${t('products.title')} - Mugixor | Bicicletas Eléctricas, Patinetes y Más`,
      eu: `${t('products.title')} - Mugixor | Bizikleta Elektrikoak, Patinete-ak eta Gehiago`,
      en: `${t('products.title')} - Mugixor | Electric Bikes, Scooters & More`,
      fr: `${t('products.title')} - Mugixor | Vélos Électriques, Trottinettes et Plus`,
      nl: `${t('products.title')} - Mugixor | Elektrische Fietsen, Scooters & Meer`,
      de: `${t('products.title')} - Mugixor | Elektrofahrräder, Roller & Mehr`
    };

    const seoDescriptions = {
      es: `Explora nuestra colección completa de vehículos eléctricos: bicicletas urbanas, patinetes inteligentes, cargo bikes y skateboards. Movilidad sostenible para toda Europa. Envío gratuito y soporte 24/7.`,
      eu: `Ezagutu gure ibilgailu elektrikoen bilduma osoa: hiri bizikletak, patinete adimendunak, karga bizikletak eta skateboardak. Mugikortasun jasangarria Europa osoan. Bidalketa doakoa eta 24/7 laguntza.`,
      en: `Explore our complete collection of electric vehicles: urban bikes, smart scooters, cargo bikes and skateboards. Sustainable mobility for all Europe. Free shipping and 24/7 support.`,
      fr: `Explorez notre collection complète de véhicules électriques: vélos urbains, trottinettes intelligentes, vélos cargo et skateboards. Mobilité durable pour toute l'Europe. Livraison gratuite et support 24/7.`,
      nl: `Verken onze complete collectie elektrische voertuigen: stadsfietsen, slimme scooters, bakfietsen en skateboards. Duurzame mobiliteit voor heel Europa. Gratis verzending en 24/7 ondersteuning.`,
      de: `Entdecken Sie unsere komplette Sammlung von Elektrofahrzeugen: Stadtfahrräder, intelligente Roller, Lastenräder und Skateboards. Nachhaltige Mobilität für ganz Europa. Kostenloser Versand und 24/7 Support.`
    };

    return {
      title: seoTitles[currentLanguage as keyof typeof seoTitles] || seoTitles.es,
      description: seoDescriptions[currentLanguage as keyof typeof seoDescriptions] || seoDescriptions.es
    };
  };

  const seoData = getSEOData();

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <SEOHead 
        currentLanguage={currentLanguage}
        title={seoData.title}
        description={seoData.description}
        url="https://mugixor.com/products"
        type="website"
        keywords={`${t('products.categories.bike')}, ${t('products.categories.scooter')}, ${t('products.categories.cargo')}, ${t('products.categories.skateboard')}, movilidad eléctrica, sustainable transport`}
      />
      {/* Header Section */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <h1 className="section-title">Nuestros Productos</h1>
          <p className="section-subtitle">
            Descubre nuestra gama completa de vehículos eléctricos diseñados para la movilidad urbana moderna
          </p>

          {/* Search Bar */}
          <div style={{ maxWidth: '500px', margin: '2rem auto' }}>
            <input
              type="text"
              placeholder="Buscar productos..."
              className="form-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '1rem',
                fontSize: '1rem',
                borderRadius: '50px',
                border: '2px solid var(--gray-300)',
                textAlign: 'center'
              }}
            />
          </div>

          {/* Category Filter */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            flexWrap: 'wrap', 
            gap: '1rem', 
            marginBottom: '3rem' 
          }}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`btn ${selectedCategory === category.id ? 'btn-primary' : 'btn-outline'}`}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px'
                }}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} currentLanguage={currentLanguage} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem 0' }}>
              <h3 style={{ color: 'var(--gray-600)', marginBottom: '1rem' }}>
                No se encontraron productos
              </h3>
              <p style={{ color: 'var(--gray-500)' }}>
                Intenta con otros términos de búsqueda o selecciona una categoría diferente
              </p>
            </div>
          )}

          {/* Stats Section */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '2rem', 
            marginTop: '4rem',
            padding: '3rem 0',
            borderTop: '1px solid var(--gray-200)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                900+
              </h3>
              <p style={{ color: 'var(--gray-600)' }}>Ciudades en Europa</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>
                50,000+
              </h3>
              <p style={{ color: 'var(--gray-600)' }}>Clientes Satisfechos</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                100%
              </h3>
              <p style={{ color: 'var(--gray-600)' }}>Eléctrico y Sostenible</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>
                24/7
              </h3>
              <p style={{ color: 'var(--gray-600)' }}>Soporte al Cliente</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;

