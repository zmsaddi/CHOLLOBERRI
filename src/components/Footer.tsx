import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

interface FooterProps {
  currentLanguage: string;
}

const Footer: React.FC<FooterProps> = ({ currentLanguage }) => {
  const { t } = useTranslation(currentLanguage);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(t('whatsappMessages.general'));
    window.open(`https://wa.me/34632759513?text=${message}`, '_blank');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Mugixor</h3>
            <p>{t('hero.title')}</p>
            <p>{t('about.storyText1')}</p>
          </div>
          
          <div className="footer-section">
            <h4>{t('nav.products')}</h4>
            <ul>
              <li><Link to="/products?category=bike">{t('products.categories.bike')}</Link></li>
              <li><Link to="/products?category=scooter">{t('products.categories.scooter')}</Link></li>
              <li><Link to="/products?category=cargo">{t('products.categories.cargo')}</Link></li>
              <li><Link to="/products?category=skateboard">{t('products.categories.skateboard')}</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Empresa</h4>
            <ul>
              <li><Link to="/about">{t('nav.about')}</Link></li>
              <li><Link to="/contact">{t('nav.contact')}</Link></li>
              <li><a href="#noticias">Noticias</a></li>
              <li><a href="#carreras">Carreras</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>{t('nav.contact')}</h4>
            <ul>
              <li><a href="tel:+34632759513">+34 632 759 513</a></li>
              <li><a href="mailto:info@mugixor.com">info@mugixor.com</a></li>
              <li><button onClick={handleWhatsApp} className="footer-link">WhatsApp</button></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Mugixor. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

