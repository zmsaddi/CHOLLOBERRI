import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  Upload,
  Eye,
  Star,
  Package
} from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { products as initialProducts } from '../../data/products';

const ProductsManager = () => {
  const { t, currentLanguage } = useTranslation();
  const [products, setProducts] = useState(initialProducts);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'bike', label: 'Electric Bikes' },
    { id: 'scooter', label: 'Scooters' },
    { id: 'cargo', label: 'Cargo Bikes' },
    { id: 'skateboard', label: 'Skateboards' }
  ];

  const newProductTemplate = {
    id: Date.now(),
    name: {
      es: '',
      eu: '',
      en: '',
      fr: '',
      nl: '',
      de: ''
    },
    description: {
      es: '',
      eu: '',
      en: '',
      fr: '',
      nl: '',
      de: ''
    },
    price: 0,
    category: 'bike',
    featured: false,
    images: [],
    features: {
      es: [],
      eu: [],
      en: [],
      fr: [],
      nl: [],
      de: []
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name[currentLanguage]?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description[currentLanguage]?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleEdit = (product) => {
    setEditingProduct({ ...product });
    setIsAddingNew(false);
  };

  const handleAddNew = () => {
    setEditingProduct({ ...newProductTemplate });
    setIsAddingNew(true);
  };

  const handleSave = () => {
    if (isAddingNew) {
      setProducts([...products, editingProduct]);
    } else {
      setProducts(products.map(p => p.id === editingProduct.id ? editingProduct : p));
    }
    
    // Save to localStorage for persistence
    const updatedProducts = isAddingNew 
      ? [...products, editingProduct]
      : products.map(p => p.id === editingProduct.id ? editingProduct : p);
    
    localStorage.setItem('mugixor-products', JSON.stringify(updatedProducts));
    
    setEditingProduct(null);
    setIsAddingNew(false);
  };

  const handleDelete = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      const updatedProducts = products.filter(p => p.id !== productId);
      setProducts(updatedProducts);
      localStorage.setItem('mugixor-products', JSON.stringify(updatedProducts));
    }
  };

  const handleCancel = () => {
    setEditingProduct(null);
    setIsAddingNew(false);
  };

  const updateProductField = (field, value, language = null) => {
    if (language) {
      setEditingProduct(prev => ({
        ...prev,
        [field]: {
          ...prev[field],
          [language]: value
        }
      }));
    } else {
      setEditingProduct(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const addFeature = (language) => {
    const newFeature = prompt(`Add new feature (${language.toUpperCase()}):`);
    if (newFeature) {
      setEditingProduct(prev => ({
        ...prev,
        features: {
          ...prev.features,
          [language]: [...(prev.features[language] || []), newFeature]
        }
      }));
    }
  };

  const removeFeature = (language, index) => {
    setEditingProduct(prev => ({
      ...prev,
      features: {
        ...prev.features,
        [language]: prev.features[language].filter((_, i) => i !== index)
      }
    }));
  };

  // Load products from localStorage on component mount
  useEffect(() => {
    const savedProducts = localStorage.getItem('mugixor-products');
    if (savedProducts) {
      try {
        setProducts(JSON.parse(savedProducts));
      } catch (error) {
        console.error('Error loading saved products:', error);
      }
    }
  }, []);

  if (editingProduct) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            {isAddingNew ? 'Add New Product' : 'Edit Product'}
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={handleSave}
              className="flex items-center space-x-2 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>Save</span>
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              <X className="w-4 h-4" />
              <span>Cancel</span>
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price (€)
              </label>
              <input
                type="number"
                value={editingProduct.price}
                onChange={(e) => updateProductField('price', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={editingProduct.category}
                onChange={(e) => updateProductField('category', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                {categories.slice(1).map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="featured"
              checked={editingProduct.featured}
              onChange={(e) => updateProductField('featured', e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="featured" className="text-sm font-medium text-gray-700">
              Featured Product
            </label>
          </div>

          {/* Multilingual Fields */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Product Names</h3>
            {['es', 'eu', 'en', 'fr', 'nl', 'de'].map(lang => (
              <div key={lang}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name ({lang.toUpperCase()})
                </label>
                <input
                  type="text"
                  value={editingProduct.name[lang] || ''}
                  onChange={(e) => updateProductField('name', e.target.value, lang)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Descriptions</h3>
            {['es', 'eu', 'en', 'fr', 'nl', 'de'].map(lang => (
              <div key={lang}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description ({lang.toUpperCase()})
                </label>
                <textarea
                  value={editingProduct.description[lang] || ''}
                  onChange={(e) => updateProductField('description', e.target.value, lang)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Features</h3>
            {['es', 'eu', 'en', 'fr', 'nl', 'de'].map(lang => (
              <div key={lang} className="border border-gray-200 rounded-md p-4">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-gray-700">
                    Features ({lang.toUpperCase()})
                  </label>
                  <button
                    onClick={() => addFeature(lang)}
                    className="text-teal-600 hover:text-teal-700 text-sm"
                  >
                    + Add Feature
                  </button>
                </div>
                <div className="space-y-2">
                  {(editingProduct.features[lang] || []).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={feature}
                        onChange={(e) => {
                          const newFeatures = [...editingProduct.features[lang]];
                          newFeatures[index] = e.target.value;
                          updateProductField('features', { ...editingProduct.features, [lang]: newFeatures });
                        }}
                        className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm"
                      />
                      <button
                        onClick={() => removeFeature(lang, index)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Products Management</h2>
        <button
          onClick={handleAddNew}
          className="flex items-center space-x-2 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add Product</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Products
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name or description..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Products List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-lg bg-gray-200 flex items-center justify-center">
                          <Package className="w-5 h-5 text-gray-500" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {product.name[currentLanguage] || product.name.es}
                        </div>
                        <div className="text-sm text-gray-500 truncate max-w-xs">
                          {product.description[currentLanguage] || product.description.es}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 capitalize">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    €{product.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {product.featured && (
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      )}
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        product.featured 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {product.featured ? 'Featured' : 'Active'}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(product)}
                        className="text-teal-600 hover:text-teal-900"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <Package className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No products found</h3>
          <p className="mt-1 text-sm text-gray-500">
            {searchTerm || selectedCategory !== 'all' 
              ? 'Try adjusting your search or filter criteria.'
              : 'Get started by adding a new product.'
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductsManager;

