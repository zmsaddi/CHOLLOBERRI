import React from 'react';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const ProductCard = ({ product, onViewDetails }) => {
  const { currentLanguage, t } = useTranslation();

  const getWhatsAppMessage = () => {
    const productName = product.name[currentLanguage];
    return t('whatsapp.product').replace('{productName}', productName);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(getWhatsAppMessage());
    const phone = '34632759513';
    window.open(`https://api.whatsapp.com/send/?phone=${phone}&text=${message}&type=phone_number&app_absent=0`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+34632759513', '_self');
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(`Consulta sobre ${product.name[currentLanguage]}`);
    const body = encodeURIComponent(getWhatsAppMessage());
    window.open(`mailto:info@mugixor.com?subject=${subject}&body=${body}`, '_self');
  };

  return (
    <div className="product-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Product Image */}
      <div className="relative h-48 bg-gray-100">
        <img
          src={product.images[0]}
          alt={product.name[currentLanguage]}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x300/e5e7eb/6b7280?text=Mugixor+Product';
          }}
        />
        {product.featured && (
          <div className="absolute top-2 left-2 bg-primary text-white px-2 py-1 rounded-md text-xs font-medium">
            ⭐ {t('products.featured')}
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-medium">Sin Stock</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {product.name[currentLanguage]}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description[currentLanguage]}
        </p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-primary">
            {product.price}{product.currency}
          </span>
          <button
            onClick={() => onViewDetails(product.id)}
            className="text-primary hover:text-primary/80 text-sm font-medium underline"
          >
            Ver detalles →
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <button
            onClick={handleWhatsApp}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center space-x-1"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t('products.whatsapp')}</span>
          </button>
          
          <button
            onClick={handleCall}
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            <Phone className="w-4 h-4" />
          </button>
          
          <button
            onClick={handleEmail}
            className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            <Mail className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

