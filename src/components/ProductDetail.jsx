import React, { useState } from 'react';
import { ArrowLeft, MessageCircle, Phone, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { getProductById } from '../data/products';

const ProductDetail = ({ productId, onBack }) => {
  const { currentLanguage, t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const product = getProductById(productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t('products.productNotFound')}
          </h2>
          <p className="text-gray-600 mb-6">
            {t('products.productNotFoundDesc')}
          </p>
          <button
            onClick={onBack}
            className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
          >
            {t('products.backToProducts')}
          </button>
        </div>
      </div>
    );
  }

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

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{t('products.backToProducts')}</span>
          </button>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-12 relative">
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.name[currentLanguage]}
                  className="w-full h-96 object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/600x400/e5e7eb/6b7280?text=Mugixor+Product';
                  }}
                />
                
                {/* Navigation Arrows */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                      currentImageIndex === index 
                        ? 'border-primary' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name[currentLanguage]} ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/80x80/e5e7eb/6b7280?text=Img';
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name[currentLanguage]}
              </h1>
              <p className="text-xl text-gray-600">
                {product.description[currentLanguage]}
              </p>
            </div>

            {/* Price */}
            <div className="text-4xl font-bold text-primary">
              {product.price}{product.currency}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-md text-lg font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t('products.whatsapp')}</span>
              </button>
              
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleCall}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-md font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t('products.call')}</span>
                </button>
                
                <button
                  onClick={handleEmail}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-3 rounded-md font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>{t('products.email')}</span>
                </button>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('products.features')}
              </h3>
              <ul className="space-y-2">
                {product.features[currentLanguage].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('products.additionalInfo')}
              </h3>
              <ul className="space-y-2">
                {t('additionalInfo').map((info, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-blue-500">{info.split(' ')[0]}</span>
                    <span className="text-gray-700">{info.substring(info.indexOf(' ') + 1)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

