import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import SEOHead from '../components/SEOHead';
import { useTranslation } from '../hooks/useTranslation';

interface ProductDetailPageProps {
  currentLanguage: string;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ currentLanguage }) => {
  const { id } = useParams<{ id: string }>();
  const { t, getProductData } = useTranslation(currentLanguage);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div style={{ paddingTop: '80px', minHeight: '100vh', textAlign: 'center', padding: '4rem 2rem' }}>
        <h1>{t('products.productNotFound')}</h1>
        <p>{t('products.productNotFoundDesc')}</p>
        <Link to="/products" className="btn btn-primary">
          {t('products.backToProducts')}
        </Link>
      </div>
    );
  }

  const productData = getProductData(product.id);

  const handleWhatsApp = () => {
    const productName = productData?.name || product.name;
    const message = t('whatsappMessages.product').replace('{productName}', productName);
    window.open(`https://wa.me/34632759513?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+34632759513', '_self');
  };

  const handleEmail = () => {
    const productName = productData?.name || product.name;
    const subject = encodeURIComponent(`Consulta sobre ${productName}`);
    const body = encodeURIComponent(`Hola,\n\nMe gustaría recibir más información sobre el producto "${productName}".\n\nGracias.`);
    window.open(`mailto:info@mugixor.com?subject=${subject}&body=${body}`, '_self');
  };

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <SEOHead 
        currentLanguage={currentLanguage}
        title={`${productData?.name || product.name} - €${product.price} | Mugixor`}
        description={`${productData?.description || product.description} Precio: €${product.price}. Envío gratuito a toda Europa. Soporte 24/7. ¡Compra ahora!`}
        url={`https://mugixor.com/product/${product.id}`}
        type="product"
        image={product.images[0]}
        keywords={`${productData?.name || product.name}, ${product.category}, vehículo eléctrico, movilidad sostenible, Mugixor`}
        productData={{
          name: productData?.name || product.name,
          price: product.price,
          currency: 'EUR',
          availability: 'InStock',
          brand: 'Mugixor'
        }}
      />
      {/* Breadcrumb */}
      <div className="container" style={{ padding: '1rem 0' }}>
        <nav style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>
          <Link to="/" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>
            {t('nav.home')}
          </Link>
          <span style={{ margin: '0 0.5rem' }}>›</span>
          <Link to="/products" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>
            {t('nav.products')}
          </Link>
          <span style={{ margin: '0 0.5rem' }}>›</span>
          <span>{productData?.name || product.name}</span>
        </nav>
      </div>

      <div className="container" style={{ padding: '2rem 0' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr', 
          gap: window.innerWidth > 768 ? '4rem' : '2rem'
        }}>
          {/* Image Gallery */}
          <div>
            {/* Main Image */}
            <div style={{ marginBottom: '1rem' }}>
              <img 
                src={product.images[selectedImageIndex]} 
                alt={productData?.name || product.name}
                style={{ 
                  width: '100%', 
                  height: '400px', 
                  objectFit: 'cover', 
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/placeholder.jpg';
                }}
              />
            </div>
            
            {/* Thumbnail Images */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))', 
              gap: '0.5rem' 
            }}>
              {product.images.map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`${productData?.name || product.name} ${index + 1}`}
                  style={{ 
                    width: '100%', 
                    height: '80px', 
                    objectFit: 'cover', 
                    borderRadius: '8px',
                    cursor: 'pointer',
                    border: selectedImageIndex === index ? '2px solid var(--primary-color)' : '2px solid transparent',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => setSelectedImageIndex(index)}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/placeholder.jpg';
                  }}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--gray-900)' }}>
              {productData?.name || product.name}
            </h1>
            
            <div style={{ fontSize: '2rem', color: 'var(--primary-color)', fontWeight: 'bold', marginBottom: '1.5rem' }}>
              €{product.price}
            </div>
            
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--gray-600)', marginBottom: '2rem' }}>
              {productData?.description || product.description}
            </p>

            {/* Action Buttons */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
              gap: '1rem',
              marginBottom: '3rem'
            }}>
              <button className="btn btn-primary" onClick={handleWhatsApp}>
                <span>💬</span>
                {t('products.whatsapp')}
              </button>
              <button className="btn btn-outline" onClick={handleCall}>
                <span>📞</span>
                {t('products.call')}
              </button>
              <button className="btn btn-outline" onClick={handleEmail}>
                <span>✉️</span>
                {t('products.email')}
              </button>
            </div>

            {/* Features */}
            {productData?.features && productData.features.length > 0 && (
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--gray-900)' }}>
                  {t('products.features')}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {productData.features.map((feature: string, index: number) => (
                    <li key={index} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      marginBottom: '0.75rem',
                      fontSize: '1rem',
                      color: 'var(--gray-700)'
                    }}>
                      <span style={{ 
                        color: 'var(--primary-color)', 
                        marginRight: '0.75rem',
                        fontSize: '1.25rem'
                      }}>
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Additional Info */}
            <div style={{ 
              backgroundColor: 'var(--gray-50)', 
              padding: '1.5rem', 
              borderRadius: '12px',
              marginBottom: '2rem'
            }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--gray-900)' }}>
                {t('products.additionalInfo')}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                  🚚 {t('nav.home') === 'Home' ? 'Free shipping throughout Europe' : 'Envío gratuito a toda Europa'}
                </li>
                <li style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                  🔧 {t('nav.home') === 'Home' ? 'Installation and configuration included' : 'Instalación y configuración incluida'}
                </li>
                <li style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                  📞 {t('nav.home') === 'Home' ? '24/7 technical support' : 'Soporte técnico 24/7'}
                </li>
                <li style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                  🔄 {t('nav.home') === 'Home' ? 'Extended warranty available' : 'Garantía extendida disponible'}
                </li>
                <li style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                  💳 {t('nav.home') === 'Home' ? 'Financing available' : 'Financiación disponible'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

