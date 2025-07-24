import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import mugixorLogo from '../assets/mugixor-logo.jpg';
import basqueFlag from '../assets/basque-flag.png';

const Header = ({ currentPage, onNavigate }) => {
  const { currentLanguage, changeLanguage, t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'eu', name: 'Euskera', flag: basqueFlag, isImage: true },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setIsLanguageOpen(false);
    setIsMenuOpen(false);
  };

  const handleNavigation = (page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavigation('home')}>
            <img 
              src={mugixorLogo} 
              alt="Mugixor" 
              className="h-10 w-10 rounded-full object-cover mr-3"
            />
            <span className="text-xl font-bold text-gray-900">Mugixor</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => handleNavigation('home')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'home' 
                  ? 'bg-teal-100 text-teal-700' 
                  : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => handleNavigation('products')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'products' 
                  ? 'bg-teal-100 text-teal-700' 
                  : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              {t('nav.products')}
            </button>
            <button
              onClick={() => handleNavigation('about')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'about' 
                  ? 'bg-teal-100 text-teal-700' 
                  : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => handleNavigation('contact')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'contact' 
                  ? 'bg-teal-100 text-teal-700' 
                  : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              {t('nav.contact')}
            </button>
          </nav>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
            >
              {currentLang?.isImage ? (
                <img 
                  src={currentLang.flag} 
                  alt={currentLang.name}
                  className="w-5 h-4 object-cover rounded border"
                />
              ) : (
                <span className="text-lg">{currentLang?.flag}</span>
              )}
              <span className="hidden sm:inline">{currentLang?.name}</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {isLanguageOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                <div className="py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`flex items-center space-x-3 w-full px-4 py-2 text-sm text-left hover:bg-gray-100 transition-colors ${
                        currentLanguage === lang.code ? 'bg-teal-50 text-teal-700' : 'text-gray-700'
                      }`}
                    >
                      {lang.isImage ? (
                        <img 
                          src={lang.flag} 
                          alt={lang.name}
                          className="w-6 h-4 object-cover rounded border"
                        />
                      ) : (
                        <span className="text-lg">{lang.flag}</span>
                      )}
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button
                onClick={() => handleNavigation('home')}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  currentPage === 'home' 
                    ? 'bg-teal-100 text-teal-700' 
                    : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => handleNavigation('products')}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  currentPage === 'products' 
                    ? 'bg-teal-100 text-teal-700' 
                    : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                {t('nav.products')}
              </button>
              <button
                onClick={() => handleNavigation('about')}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  currentPage === 'about' 
                    ? 'bg-teal-100 text-teal-700' 
                    : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => handleNavigation('contact')}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  currentPage === 'contact' 
                    ? 'bg-teal-100 text-teal-700' 
                    : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                {t('nav.contact')}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

