import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { useTranslation } from '../hooks/useTranslation';

interface ContactPageProps {
  currentLanguage: string;
}

const ContactPage: React.FC<ContactPageProps> = ({ currentLanguage }) => {
  const { t } = useTranslation(currentLanguage);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  const handleWhatsApp = () => {
    const message = encodeURIComponent(t('whatsappMessages.general'));
    window.open(`https://wa.me/34632759513?text=${message}`, '_blank');
  };

  const getSEOData = () => {
    const seoTitles = {
      es: `${t('contact.title')} - Teléfono, WhatsApp, Email | Mugixor`,
      eu: `${t('contact.title')} - Telefonoa, WhatsApp, Email | Mugixor`,
      en: `${t('contact.title')} - Phone, WhatsApp, Email | Mugixor`,
      fr: `${t('contact.title')} - Téléphone, WhatsApp, Email | Mugixor`,
      nl: `${t('contact.title')} - Telefoon, WhatsApp, Email | Mugixor`,
      de: `${t('contact.title')} - Telefon, WhatsApp, Email | Mugixor`
    };

    const seoDescriptions = {
      es: `Contacta con Mugixor. Teléfono: +34 632 759 513, WhatsApp, Email: info@mugixor.com. Soporte 24/7 en 900+ ciudades europeas. ¡Estamos aquí para ayudarte!`,
      eu: `Kontaktatu Mugixor-ekin. Telefonoa: +34 632 759 513, WhatsApp, Email: info@mugixor.com. 24/7 laguntza 900+ hiri europearretan. Hemen gaude laguntzeko!`,
      en: `Contact Mugixor. Phone: +34 632 759 513, WhatsApp, Email: info@mugixor.com. 24/7 support in 900+ European cities. We're here to help!`,
      fr: `Contactez Mugixor. Téléphone: +34 632 759 513, WhatsApp, Email: info@mugixor.com. Support 24/7 dans 900+ villes européennes. Nous sommes là pour vous aider!`,
      nl: `Neem contact op met Mugixor. Telefoon: +34 632 759 513, WhatsApp, Email: info@mugixor.com. 24/7 ondersteuning in 900+ Europese steden. We zijn er om te helpen!`,
      de: `Kontaktieren Sie Mugixor. Telefon: +34 632 759 513, WhatsApp, Email: info@mugixor.com. 24/7 Support in 900+ europäischen Städten. Wir sind da, um zu helfen!`
    };

    return {
      title: seoTitles[currentLanguage as keyof typeof seoTitles] || seoTitles.es,
      description: seoDescriptions[currentLanguage as keyof typeof seoDescriptions] || seoDescriptions.es
    };
  };

  const seoData = getSEOData();

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <SEOHead 
        currentLanguage={currentLanguage}
        title={seoData.title}
        description={seoData.description}
        url="https://mugixor.com/contact"
        type="website"
        keywords={`contacto Mugixor, teléfono, WhatsApp, email, soporte técnico, atención cliente, Europa`}
      />
      <section className="section contact">
        <div className="container">
          <h1 className="section-title">{t('contact.title')}</h1>
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
                  <button onClick={handleWhatsApp} className="btn btn-outline" style={{ marginTop: '0.5rem' }}>
                    {t('products.whatsapp')}
                  </button>
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
    </div>
  );
};

export default ContactPage;

