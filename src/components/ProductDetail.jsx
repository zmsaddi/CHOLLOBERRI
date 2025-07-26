import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Star, 
  Share2, 
  Heart, 
  ShoppingCart, 
  Phone, 
  Mail, 
  MapPin,
  Check,
  Info,
  Zap,
  Shield,
  Truck,
  Award
} from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { products } from '../data/products';

const ProductDetail = ({ productId, onNavigate }) => {
  const { t, currentLanguage } = useTranslation();
  const [product, setProduct] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(productId));
    setProduct(foundProduct);
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('products.productNotFound')}</h2>
          <p className="text-gray-600 mb-6">{t('products.productNotFoundDesc')}</p>
          <button
            onClick={() => onNavigate('products')}
            className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
          >
            {t('products.backToProducts')}
          </button>
        </div>
      </div>
    );
  }

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

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name[currentLanguage] || product.name.en,
        text: product.description[currentLanguage] || product.description.en,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert(t('products.linkCopied'));
    }
  };

  const tabs = [
    { id: 'description', label: t('products.description'), icon: Info },
    { id: 'features', label: t('products.features'), icon: Zap },
    { id: 'specifications', label: t('products.specifications'), icon: Award },
    { id: 'contact', label: t('products.contact'), icon: Phone }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => onNavigate('products')}
            className="flex items-center text-gray-600 hover:text-teal-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {t('products.backToProducts')}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={product.images?.[selectedImageIndex] || '/images/placeholder.jpg'}
                alt={product.name[currentLanguage] || product.name.en}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImageIndex === index 
                        ? 'border-teal-600' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name[currentLanguage]} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header Info */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                  {getCategoryLabel(product.category)}
                </span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`p-2 rounded-full transition-colors ${
                      isLiked ? 'text-red-500 bg-red-50' : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    onClick={handleShare}
                    className="p-2 rounded-full text-gray-400 hover:text-teal-600 hover:bg-teal-50 transition-colors"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name[currentLanguage] || product.name.en}
              </h1>

              {product.featured && (
                <div className="flex items-center text-teal-600 mb-4">
                  <Star className="w-5 h-5 mr-2 fill-current" />
                  <span className="font-medium">{t('products.featured')}</span>
                </div>
              )}

              <div className="text-4xl font-bold text-teal-600 mb-6">
                {formatPrice(product.price)}
              </div>
            </div>

            {/* Quick Features */}
            {product.features && product.features[currentLanguage] && product.features[currentLanguage].length > 0 && (
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">{t('products.keyFeatures')}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.features[currentLanguage].slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-700">
                      <Check className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-teal-600 text-white py-4 px-6 rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center space-x-2 text-lg font-medium">
                <Phone className="w-5 h-5" />
                <span>{t('products.call')}</span>
              </button>
              
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>{t('products.email')}</span>
                </button>
                <button className="bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                  <ShoppingCart className="w-4 h-4" />
                  <span>{t('products.addToCart')}</span>
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <Shield className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                <div className="text-xs text-gray-600">{t('products.warranty')}</div>
              </div>
              <div className="text-center">
                <Truck className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                <div className="text-xs text-gray-600">{t('products.freeShipping')}</div>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                <div className="text-xs text-gray-600">{t('products.certified')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="bg-white rounded-lg shadow-md">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'border-teal-600 text-teal-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('products.description')}</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {product.description[currentLanguage] || product.description.en}
                </p>
                
                {product.additionalInfo && product.additionalInfo[currentLanguage] && (
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('products.additionalInfo')}</h4>
                    <p className="text-gray-700 leading-relaxed">
                      {product.additionalInfo[currentLanguage]}
                    </p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'features' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{t('products.features')}</h3>
                {product.features && product.features[currentLanguage] && product.features[currentLanguage].length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.features[currentLanguage].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                        <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">{t('products.noFeatures')}</p>
                )}
              </div>
            )}

            {activeTab === 'specifications' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{t('products.specifications')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-900">{t('products.category')}</span>
                      <span className="text-gray-700">{getCategoryLabel(product.category)}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-900">{t('products.price')}</span>
                      <span className="text-gray-700">{formatPrice(product.price)}</span>
                    </div>
                    {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-200">
                        <span className="font-medium text-gray-900 capitalize">{key}</span>
                        <span className="text-gray-700">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{t('products.contactInfo')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-teal-100 p-3 rounded-full">
                        <Phone className="w-6 h-6 text-teal-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{t('contact.phone')}</h4>
                        <p className="text-gray-600">+34 632 759 513</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="bg-teal-100 p-3 rounded-full">
                        <Mail className="w-6 h-6 text-teal-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{t('contact.email')}</h4>
                        <p className="text-gray-600">info@mugixor.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="bg-teal-100 p-3 rounded-full">
                        <MapPin className="w-6 h-6 text-teal-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{t('contact.address')}</h4>
                        <p className="text-gray-600">Bilbao, País Vasco, España</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-4">{t('products.interestedInProduct')}</h4>
                    <p className="text-gray-600 mb-4">{t('products.contactUsForMore')}</p>
                    <div className="space-y-3">
                      <button className="w-full bg-teal-600 text-white py-3 px-4 rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>{t('products.callNow')}</span>
                      </button>
                      <button className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                        <Mail className="w-4 h-4" />
                        <span>{t('products.sendEmail')}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

