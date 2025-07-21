import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { useTranslation } from '../hooks/useTranslation';

interface ProductCardProps {
  product: Product;
  currentLanguage: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, currentLanguage }) => {
  const { t, getProductData } = useTranslation(currentLanguage);
  const productData = getProductData(product.id);

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const productName = productData?.name || product.name;
    const message = t('whatsappMessages.product').replace('{productName}', productName);
    window.open(`https://wa.me/34632759513?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCall = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open('tel:+34632759513', '_self');
  };

  return (
    <div className="product-card fade-in">
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img 
          src={product.images[0]} 
          alt={productData?.name || product.name}
          className="product-image"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/placeholder.jpg';
          }}
        />
        <div className="product-content">
          <h3 className="product-title">{productData?.name || product.name}</h3>
          <p className="product-description">{productData?.description || product.description}</p>
          <div className="product-price">€{product.price}</div>
        </div>
      </Link>
      <div className="product-actions">
        <button className="btn btn-primary" onClick={handleWhatsApp}>
          <span>💬</span>
          {t('products.whatsapp')}
        </button>
        <button className="btn btn-outline" onClick={handleCall}>
          <span>📞</span>
          {t('products.call')}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

