import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import { supportedLanguages, loadLanguagePreference, saveLanguagePreference } from './i18n';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState(() => loadLanguagePreference());

  useEffect(() => {
    saveLanguagePreference(currentLanguage);
  }, [currentLanguage]);

  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Header 
            currentLanguage={currentLanguage}
            setCurrentLanguage={setCurrentLanguage}
            languages={supportedLanguages}
          />
          <main>
            <Routes>
              <Route path="/" element={<HomePage currentLanguage={currentLanguage} />} />
              <Route path="/products" element={<ProductsPage currentLanguage={currentLanguage} />} />
              <Route path="/product/:id" element={<ProductDetailPage currentLanguage={currentLanguage} />} />
              <Route path="/about" element={<AboutPage currentLanguage={currentLanguage} />} />
              <Route path="/contact" element={<ContactPage currentLanguage={currentLanguage} />} />
            </Routes>
          </main>
          <Footer currentLanguage={currentLanguage} />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;

