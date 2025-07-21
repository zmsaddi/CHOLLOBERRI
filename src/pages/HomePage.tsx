import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import SEOHead from '../components/SEOHead';
import { useTranslation } from '../hooks/useTranslation';

interface HomePageProps {
  currentLanguage: string;
}

const HomePage: React.FC<HomePageProps> = ({ currentLanguage }) => {
  const { t } = useTranslation(currentLanguage);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const featuredProducts = products.slice(0, 4);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t('contact.messageSent'));
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <SEOHead 
        currentLanguage={currentLanguage}
        url="https://mugixor.com"
        type="website"
      />
      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="container">
          <img src="/mugixor-logo.jpg" alt="Mugixor" className="hero-logo" />
          <h1>{t('hero.title')}</h1>
          <p>{t('hero.subtitle')}</p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">
              {t('hero.viewProducts')}
            </Link>
            <button className="btn btn-outline" onClick={() => scrollToSection('contact')}>
              {t('hero.contact')}
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="section">
        <div className="container">
          <h2 className="section-title">{t('products.featured')}</h2>
          <p className="section-subtitle">
            {t('products.featuredSubtitle')}
          </p>
          
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} currentLanguage={currentLanguage} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/products" className="btn btn-primary">
              {t('products.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">{t('about.title')}</h2>
          <p className="section-subtitle">
            {t('about.subtitle')}
          </p>
          
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--gray-600)', marginBottom: '2rem' }}>
              {t('about.storyText1')}
            </p>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--gray-600)' }}>
              {t('about.storyText2')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">
            {t('contact.subtitle')}
          </p>
          
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon" style={{ backgroundColor: 'var(--primary-color)' }}>
                  <span>📞</span>
                </div>
                <div>
                  <h4>{t('contact.phone')}</h4>
                  <p>+34 632 759 513</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon" style={{ backgroundColor: 'var(--secondary-color)' }}>
                  <span>💬</span>
                </div>
                <div>
                  <h4>{t('contact.whatsapp')}</h4>
                  <p>+34 632 759 513</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon" style={{ backgroundColor: '#8b5cf6' }}>
                  <span>✉️</span>
                </div>
                <div>
                  <h4>{t('contact.email')}</h4>
                  <p>info@mugixor.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon" style={{ backgroundColor: '#f59e0b' }}>
                  <span>📍</span>
                </div>
                <div>
                  <h4>{t('contact.locations')}</h4>
                  <p>{t('contact.locationsText')}</p>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <h3 style={{ marginBottom: '1.5rem' }}>{t('contact.sendMessage')}</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">{t('contact.nameRequired')}</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">{t('contact.emailRequired')}</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">{t('contact.messageRequired')}</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea" 
                    required 
                  />
                </div>
                
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  <span>📤</span>
                  {t('contact.sendButton')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

