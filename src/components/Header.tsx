import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  currentLanguage: string;
  setCurrentLanguage: (lang: string) => void;
  languages: Array<{ code: string; name: string; flag: string }>;
}

const Header: React.FC<HeaderProps> = ({ currentLanguage, setCurrentLanguage, languages }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const location = useLocation();

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <img src="/mugixor-logo.jpg" alt="Mugixor" className="logo-img" />
          <span>Mugixor</span>
        </Link>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Inicio
          </Link>
          <Link 
            to="/products" 
            className={`nav-link ${isActive('/products') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Productos
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Nosotros
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contacto
          </Link>
        </nav>
        
        <div className="header-actions">
          <div className="language-switcher">
            <button 
              className="language-btn"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              {currentLang?.flag.startsWith('/') ? (
                <img 
                  src={currentLang.flag} 
                  alt={currentLang.name}
                  style={{ width: '20px', height: '15px', objectFit: 'cover', borderRadius: '2px' }}
                />
              ) : (
                <span>{currentLang?.flag}</span>
              )}
              <span>{currentLang?.name}</span>
              <span className={`arrow ${isLanguageOpen ? 'arrow-up' : ''}`}>▼</span>
            </button>
            
            {isLanguageOpen && (
              <div className="language-dropdown">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`language-option ${currentLanguage === lang.code ? 'active' : ''}`}
                    onClick={() => {
                      setCurrentLanguage(lang.code);
                      setIsLanguageOpen(false);
                    }}
                  >
                    {lang.flag.startsWith('/') ? (
                      <img 
                        src={lang.flag} 
                        alt={lang.name}
                        style={{ width: '20px', height: '15px', objectFit: 'cover', borderRadius: '2px' }}
                      />
                    ) : (
                      <span>{lang.flag}</span>
                    )}
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

