import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, ChevronDown, Globe, Send } from 'lucide-react';
import './App.css';

// Types
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

// Sample products data
const products: Product[] = [
  {
    id: '1',
    name: 'Bicicleta Urbana Eco',
    description: 'Perfecta para estudiantes y profesionales urbanos. Batería de larga duración hasta 100 km.',
    price: 1299,
    image: '/images/eco-bike-1.jpg',
    category: 'bike'
  },
  {
    id: '2',
    name: 'Patinete Inteligente Pro',
    description: 'Movilidad ágil para trabajadores urbanos. Diseño plegable ultracompacto.',
    price: 899,
    image: '/images/scooter-1.jpg',
    category: 'scooter'
  },
  {
    id: '3',
    name: 'Cargo Master XL',
    description: 'Solución de carga para familias y empresas. Capacidad de carga hasta 100kg.',
    price: 2199,
    image: '/images/cargo-1.jpg',
    category: 'cargo'
  },
  {
    id: '4',
    name: 'Monopatín Eléctrico X',
    description: 'Diversión y movilidad para jóvenes urbanos. Control remoto inalámbrico.',
    price: 599,
    image: '/images/skateboard-1.jpg',
    category: 'skateboard'
  }
];

// Languages
const languages = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'eu', name: 'Euskera', flag: '🏴󠁥󠁳󠁰󠁶󠁿' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
];

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('es');
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hola, me interesa conocer más sobre los productos de Mugixor');
    window.open(`https://wa.me/34632759513?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+34632759513', '_self');
  };

  const handleEmail = () => {
    window.open('mailto:info@mugixor.com', '_self');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensaje enviado correctamente. Te contactaremos pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <a href="#hero" className="logo">
              <img src="/mugixor-logo.jpg" alt="Mugixor" />
              <span className="logo-text">Mugixor</span>
            </a>
            
            <nav className="nav">
              <ul className="nav-links">
                <li><a href="#hero" className="nav-link">Inicio</a></li>
                <li><a href="#products" className="nav-link">Productos</a></li>
                <li><a href="#about" className="nav-link">Nosotros</a></li>
                <li><a href="#contact" className="nav-link">Contacto</a></li>
              </ul>
              
              <div className="language-switcher">
                <button 
                  className="language-button"
                  onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                >
                  <Globe size={16} />
                  <span>{currentLang.flag} {currentLang.name}</span>
                  <ChevronDown size={16} />
                </button>
                
                {isLanguageDropdownOpen && (
                  <div className="language-dropdown">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        className={`language-option ${currentLanguage === lang.code ? 'active' : ''}`}
                        onClick={() => {
                          setCurrentLanguage(lang.code);
                          setIsLanguageDropdownOpen(false);
                        }}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="container">
          <img src="/mugixor-logo.jpg" alt="Mugixor" className="hero-logo" />
          <h1>Smart motion. Local roots. Global vision.</h1>
          <p>Líder en movilidad sostenible en Europa. Soluciones innovadoras para estudiantes, profesionales y trabajadores.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('products')}>
              Ver Productos
            </button>
            <button className="btn btn-outline" onClick={() => scrollToSection('contact')}>
              Contactar
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section">
        <div className="container">
          <h2 className="section-title">Nuestros Productos</h2>
          <p className="section-subtitle">
            Descubre nuestra gama completa de vehículos eléctricos diseñados para la movilidad urbana moderna
          </p>
          
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card fade-in">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="product-image"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/placeholder.jpg';
                  }}
                />
                <div className="product-content">
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-price">€{product.price}</div>
                  <div className="product-actions">
                    <button className="btn btn-primary" onClick={handleWhatsApp}>
                      <MessageCircle size={16} />
                      WhatsApp
                    </button>
                    <button className="btn btn-outline" onClick={handleCall}>
                      <Phone size={16} />
                      Llamar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">Sobre Mugixor</h2>
          <p className="section-subtitle">
            Somos pioneros en movilidad sostenible, conectando Europa con soluciones de transporte innovadoras y ecológicas
          </p>
          
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--gray-600)', marginBottom: '2rem' }}>
              Desde nuestras raíces locales hasta nuestra visión global, Mugixor se dedica a revolucionar la forma en que las personas se mueven por las ciudades europeas. Ofrecemos una amplia gama de vehículos eléctricos que combinan tecnología avanzada, diseño elegante y sostenibilidad ambiental.
            </p>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--gray-600)' }}>
              Nuestro compromiso es hacer que la movilidad urbana sea más accesible, eficiente y respetuosa con el medio ambiente para estudiantes, profesionales y trabajadores en más de 900 ciudades europeas.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title">Contacto</h2>
          <p className="section-subtitle">
            ¿Tienes preguntas? Estamos aquí para ayudarte. Contáctanos por cualquier medio
          </p>
          
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon" style={{ backgroundColor: 'var(--primary-color)' }}>
                  <Phone size={20} />
                </div>
                <div>
                  <h4>Teléfono</h4>
                  <p>+34 632 759 513</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon" style={{ backgroundColor: 'var(--secondary-color)' }}>
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h4>WhatsApp</h4>
                  <p>+34 632 759 513</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon" style={{ backgroundColor: '#8b5cf6' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>info@mugixor.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon" style={{ backgroundColor: '#f59e0b' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4>Ubicaciones</h4>
                  <p>900+ ciudades en Europa</p>
                </div>
              </div>
            </div>
            
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <h3 style={{ marginBottom: '1.5rem' }}>Envíanos un mensaje</h3>
              
              <div className="form-group">
                <label className="form-label">Nombre *</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Email *</label>
                <input
                  type="email"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Mensaje *</label>
                <textarea
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                <Send size={16} />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Mugixor</h3>
              <p style={{ color: 'var(--gray-400)', marginBottom: '1rem' }}>
                Smart motion. Local roots. Global vision.
              </p>
              <p style={{ color: 'var(--gray-400)' }}>
                Líder en movilidad sostenible en Europa
              </p>
            </div>
            
            <div className="footer-section">
              <h3>Productos</h3>
              <ul className="footer-links">
                <li><a href="#products">Bicicletas Eléctricas</a></li>
                <li><a href="#products">Patinetes</a></li>
                <li><a href="#products">Cargo Bikes</a></li>
                <li><a href="#products">Skateboards</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Empresa</h3>
              <ul className="footer-links">
                <li><a href="#about">Sobre Nosotros</a></li>
                <li><a href="#contact">Contacto</a></li>
                <li><a href="#">Noticias</a></li>
                <li><a href="#">Carreras</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Contacto</h3>
              <ul className="footer-links">
                <li><a href="tel:+34632759513">+34 632 759 513</a></li>
                <li><a href="mailto:info@mugixor.com">info@mugixor.com</a></li>
                <li><a href="#" onClick={handleWhatsApp}>WhatsApp</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Mugixor. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

