import React, { useState } from 'react';
import './App.css';
import { useTranslation } from './hooks/useTranslation';
import { useAuth } from './hooks/useAuth';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ProductsPage from './components/ProductsPage';
import ProductDetail from './components/ProductDetail';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const { t } = useTranslation();
  const { isAuthenticated, isLoading, login, logout } = useAuth();
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [showAdmin, setShowAdmin] = useState(false);

  // Handle navigation
  const handleNavigation = (page, productId = null) => {
    setCurrentPage(page);
    setSelectedProductId(productId);
    setShowAdmin(false);
  };

  // Handle admin access
  const handleAdminAccess = () => {
    setShowAdmin(true);
  };

  // Handle admin logout
  const handleAdminLogout = () => {
    logout();
    setShowAdmin(false);
    setCurrentPage('home');
  };

  // Show admin login if trying to access admin and not authenticated
  if (showAdmin && !isAuthenticated && !isLoading) {
    return <AdminLogin onLogin={login} />;
  }

  // Show admin dashboard if authenticated and accessing admin
  if (showAdmin && isAuthenticated) {
    return <AdminDashboard onLogout={handleAdminLogout} />;
  }

  // Render main application
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigation} />;
      case 'products':
        return <ProductsPage onNavigate={handleNavigation} />;
      case 'product-detail':
        return <ProductDetail productId={selectedProductId} onNavigate={handleNavigation} />;
      case 'about':
        return (
          <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">{t('nav.about')}</h1>
                <div className="prose max-w-none">
                  <p className="text-lg text-gray-600 mb-6">
                    {t('about.intro')}
                  </p>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('about.mission.title')}</h2>
                  <p className="text-gray-600 mb-6">
                    {t('about.mission.description')}
                  </p>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('about.values.title')}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-teal-600 mb-2">{t('about.values.sustainability')}</h3>
                      <p className="text-gray-600">{t('about.values.sustainabilityDesc')}</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-teal-600 mb-2">{t('about.values.innovation')}</h3>
                      <p className="text-gray-600">{t('about.values.innovationDesc')}</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-teal-600 mb-2">{t('about.values.community')}</h3>
                      <p className="text-gray-600">{t('about.values.communityDesc')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">{t('nav.contact')}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('contact.info')}</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium text-gray-900">{t('contact.phone')}</h3>
                        <p className="text-gray-600">+34 632 759 513</p>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{t('contact.email')}</h3>
                        <p className="text-gray-600">info@mugixor.com</p>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{t('contact.address')}</h3>
                        <p className="text-gray-600">
                          Bilbao, País Vasco<br />
                          España
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('contact.form')}</h2>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {t('contact.name')}
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {t('contact.email')}
                        </label>
                        <input
                          type="email"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {t('contact.message')}
                        </label>
                        <textarea
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors"
                      >
                        {t('contact.send')}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <HomePage onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="App">
      <Header 
        currentPage={currentPage} 
        onNavigate={handleNavigation}
        onAdminAccess={handleAdminAccess}
      />
      {renderCurrentPage()}
      
      {/* Admin Access Button - Now Visible */}
      <div 
        className="fixed bottom-4 right-4 z-50"
        title="Admin Panel"
      >
        <button
          onClick={handleAdminAccess}
          className="bg-teal-600 text-white p-4 rounded-full shadow-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-110 border-2 border-white"
          aria-label="Admin Access"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>

      {/* Alternative Admin Access - Text Button */}
      <div className="fixed bottom-20 right-4 z-50">
        <button
          onClick={handleAdminAccess}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-700 transition-colors text-sm font-medium"
        >
          🔧 Admin
        </button>
      </div>
    </div>
  );
}

export default App;

