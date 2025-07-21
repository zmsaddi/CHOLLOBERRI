import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { products } from '../data/products';

const ProductComparison = ({ isOpen, onClose, selectedProducts = [] }) => {
  const { t, currentLanguage } = useTranslation();
  const [compareProducts, setCompareProducts] = useState(selectedProducts);

  if (!isOpen) return null;

  const addProduct = (product) => {
    if (compareProducts.length < 3 && !compareProducts.find(p => p.id === product.id)) {
      setCompareProducts([...compareProducts, product]);
    }
  };

  const removeProduct = (productId) => {
    setCompareProducts(compareProducts.filter(p => p.id !== productId));
  };

  const availableProducts = products.filter(p => !compareProducts.find(cp => cp.id === p.id));

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">
              {t('products.comparison', currentLanguage)}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Add Products Section */}
          {compareProducts.length < 3 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">
                {t('products.addToCompare', currentLanguage)}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {availableProducts.slice(0, 8).map(product => (
                  <button
                    key={product.id}
                    onClick={() => addProduct(product)}
                    className="p-3 border rounded-lg hover:bg-gray-50 text-left"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name[currentLanguage]}
                      className="w-full h-20 object-cover rounded mb-2"
                    />
                    <p className="text-sm font-medium truncate">
                      {product.name[currentLanguage]}
                    </p>
                    <p className="text-sm text-gray-600">€{product.price}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Comparison Table */}
          {compareProducts.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 border-b font-semibold">
                      {t('products.features', currentLanguage)}
                    </th>
                    {compareProducts.map(product => (
                      <th key={product.id} className="text-center p-4 border-b min-w-[200px]">
                        <div className="relative">
                          <button
                            onClick={() => removeProduct(product.id)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 text-sm hover:bg-red-600"
                          >
                            ×
                          </button>
                          <img
                            src={product.images[0]}
                            alt={product.name[currentLanguage]}
                            className="w-full h-32 object-cover rounded mb-2"
                          />
                          <h4 className="font-semibold text-sm">
                            {product.name[currentLanguage]}
                          </h4>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-b font-medium">
                      {t('products.price', currentLanguage)}
                    </td>
                    {compareProducts.map(product => (
                      <td key={product.id} className="p-4 border-b text-center">
                        <span className="text-2xl font-bold text-blue-600">
                          €{product.price}
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 border-b font-medium">
                      {t('products.category', currentLanguage)}
                    </td>
                    {compareProducts.map(product => (
                      <td key={product.id} className="p-4 border-b text-center">
                        {product.category[currentLanguage]}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 border-b font-medium">
                      {t('products.description', currentLanguage)}
                    </td>
                    {compareProducts.map(product => (
                      <td key={product.id} className="p-4 border-b text-center text-sm">
                        {product.description[currentLanguage]}
                      </td>
                    ))}
                  </tr>
                  {/* Features comparison */}
                  {compareProducts[0]?.features && Object.keys(compareProducts[0].features[currentLanguage] || {}).map(featureKey => (
                    <tr key={featureKey}>
                      <td className="p-4 border-b font-medium capitalize">
                        {featureKey.replace(/([A-Z])/g, ' $1').trim()}
                      </td>
                      {compareProducts.map(product => (
                        <td key={product.id} className="p-4 border-b text-center text-sm">
                          {product.features?.[currentLanguage]?.[featureKey] || '-'}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td className="p-4 border-b font-medium">
                      {t('products.actions', currentLanguage)}
                    </td>
                    {compareProducts.map(product => (
                      <td key={product.id} className="p-4 border-b text-center">
                        <div className="space-y-2">
                          <a
                            href={`https://api.whatsapp.com/send/?phone=34632759513&text=${encodeURIComponent(t('whatsapp.product', currentLanguage).replace('{productName}', product.name[currentLanguage]))}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-green-500 text-white px-4 py-2 rounded text-sm hover:bg-green-600"
                          >
                            WhatsApp
                          </a>
                          <button
                            onClick={() => window.location.href = `#/product/${product.id}`}
                            className="block w-full bg-blue-500 text-white px-4 py-2 rounded text-sm hover:bg-blue-600"
                          >
                            {t('products.viewDetails', currentLanguage)}
                          </button>
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {compareProducts.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <p>{t('products.selectProductsToCompare', currentLanguage)}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductComparison;

