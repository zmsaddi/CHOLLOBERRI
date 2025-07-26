import React from 'react';
import { Star, Eye, ShoppingCart, ArrowRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const ProductCard = ({ product, onNavigate, showCompareButton = false, onAddToCompare, isInComparison = false }) => {
  const { t, currentLanguage } = useTranslation();

  const handleViewDetails = () => {
    // Navigate to product detail page
    onNavigate('product-detail', product.id);
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    // For quick view, we can show a modal or navigate to detail page
    handleViewDetails();
  };

  const handleAddToCompare = (e) => {
    e.stopPropagation();
    if (onAddToCompare) {
      onAddToCompare(product);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);
  };

  const getCategoryLabel = (category) => {
    const categoryMap = {
      bike: t('products.categories.bike'),
      scooter: t('products.categories.scooter'),
      cargo: t('products.categories.cargo'),
      skateboard: t('products.categories.skateboard')
    };
    return categoryMap[category] || category;
  };

  const truncateDescription = (text, maxLength = 100) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.images?.[0] || '/images/placeholder.jpg'}
          alt={product.name[currentLanguage] || product.name.en}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Featured Badge */}
        {product.featured && (
          <div className="absolute top-2 left-2 bg-teal-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            <Star className="w-3 h-3 inline mr-1" />
            {t('products.featured')}
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-2 right-2 bg-white bg-opacity-90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
          {getCategoryLabel(product.category)}
        </div>

        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex space-x-2">
            <button
              onClick={handleQuickView}
              className="bg-white text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              title={t('products.quickView')}
            >
              <Eye className="w-4 h-4" />
            </button>
            {showCompareButton && (
              <button
                onClick={handleAddToCompare}
                className={`p-2 rounded-full shadow-lg transition-colors ${
                  isInComparison 
                    ? 'bg-teal-600 text-white hover:bg-teal-700' 
                    : 'bg-white text-gray-800 hover:bg-gray-100'
                }`}
                title={isInComparison ? t('products.removeFromCompare') : t('products.addToCompare')}
              >
                <ShoppingCart className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Product Name */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.name[currentLanguage] || product.name.en}
        </h3>

        {/* Product Description */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {truncateDescription(product.description[currentLanguage] || product.description.en, 120)}
        </p>

        {/* Key Features */}
        {product.features && product.features[currentLanguage] && product.features[currentLanguage].length > 0 && (
          <div className="mb-3">
            <div className="flex flex-wrap gap-1">
              {product.features[currentLanguage].slice(0, 2).map((feature, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                >
                  {feature}
                </span>
              ))}
              {product.features[currentLanguage].length > 2 && (
                <span className="text-gray-500 text-xs px-2 py-1">
                  +{product.features[currentLanguage].length - 2} {t('products.more')}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Price and Actions */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-teal-600">
            {formatPrice(product.price)}
          </div>
          
          <button
            onClick={handleViewDetails}
            className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center space-x-2 text-sm font-medium"
          >
            <span>{t('products.viewDetails')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>{t('products.category')}: {getCategoryLabel(product.category)}</span>
            {product.rating && (
              <div className="flex items-center">
                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                <span className="ml-1">{product.rating}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

