import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ProductsPage from './components/ProductsPage';
import ProductDetail from './components/ProductDetail';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    setSelectedProductId(null);
  };

  const handleViewProduct = (productId) => {
    setSelectedProductId(productId);
    setCurrentPage('product-detail');
  };

  const handleBackToProducts = () => {
    setCurrentPage('products');
    setSelectedProductId(null);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage 
            onNavigate={handleNavigate}
            onViewProduct={handleViewProduct}
          />
        );
      case 'products':
        return (
          <ProductsPage 
            onViewProduct={handleViewProduct}
          />
        );
      case 'product-detail':
        return (
          <ProductDetail 
            productId={selectedProductId}
            onBack={handleBackToProducts}
          />
        );
      case 'about':
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Sobre Mugixor</h1>
              <p className="text-xl text-gray-600">Página en construcción...</p>
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Contacto</h1>
              <p className="text-xl text-gray-600 mb-6">¿Tienes preguntas? Contáctanos</p>
              <div className="space-y-4">
                <div>
                  <strong>Teléfono:</strong> +34 632 759 513
                </div>
                <div>
                  <strong>WhatsApp:</strong> +34 632 759 513
                </div>
                <div>
                  <strong>Email:</strong> info@mugixor.com
                </div>
                <div>
                  <strong>Cobertura:</strong> +900 ciudades europeas
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <HomePage 
            onNavigate={handleNavigate}
            onViewProduct={handleViewProduct}
          />
        );
    }
  };

  return (
    <div className="App">
      <Header 
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
      {renderCurrentPage()}
    </div>
  );
}

export default App;

