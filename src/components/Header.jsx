import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { languages } from '../lib/i18n';
import mugixorLogo from '../assets/mugixor-logo.jpg';
import basqueFlag from '../assets/basque-flag.jpg';

const Header = ({ currentPage, onNavigate }) => {
  const { currentLanguage, changeLanguage, t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const navigation = [
    { id: 'home', label: t('nav.home') },
    { id: 'products', label: t('nav.products') },
    { id: 'about', label: t('nav.about') },
    { id: 'contact', label: t('nav.contact') }
  ];

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === currentLanguage);
  };

  const getFlagDisplay = (lang) => {
    if (lang.code === 'eu') {
      return (
        <img 
          src={basqueFlag} 
          alt="Euskera" 
          className="w-5 h-4 rounded-sm object-cover border border-gray-200"
          style={{ minWidth: '20px', minHeight: '16px' }}
        />
      );
    }
    return <span className="text-lg" style={{ minWidth: '20px', display: 'inline-block', textAlign: 'center' }}>{lang.flag}</span>;
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <img 
              src={mugixorLogo} 
              alt="Mugixor" 
              className="h-10 w-10 rounded-full object-cover mr-3"
            />
            <span className="text-xl font-bold text-primary">Mugixor</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Language Switcher - Desktop */}
          <div className="hidden md:block relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors border rounded-md hover:border-primary"
            >
              {getFlagDisplay(getCurrentLanguage())}
              <span>{getCurrentLanguage().nativeName}</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {isLanguageOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border z-50">
                <div className="py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setIsLanguageOpen(false);
                      }}
                      className={`flex items-center space-x-3 w-full px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                        currentLanguage === lang.code ? 'bg-primary/10 text-primary' : 'text-gray-700'
                      }`}
                    >
                      {getFlagDisplay(lang)}
                      <span>{lang.nativeName}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-1 px-2 py-1 text-sm font-medium text-gray-700 hover:text-primary transition-colors border rounded-md"
              >
                {getFlagDisplay(getCurrentLanguage())}
                <ChevronDown className="w-3 h-3" />
              </button>

              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg border z-50">
                  <div className="py-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          changeLanguage(lang.code);
                          setIsLanguageOpen(false);
                        }}
                        className={`flex items-center space-x-2 w-full px-3 py-2 text-sm hover:bg-gray-50 transition-colors ${
                          currentLanguage === lang.code ? 'bg-primary/10 text-primary' : 'text-gray-700'
                        }`}
                      >
                        {getFlagDisplay(lang)}
                        <span className="text-xs">{lang.nativeName}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-50"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors rounded-md ${
                    currentPage === item.id
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

