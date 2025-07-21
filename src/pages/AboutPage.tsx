import React from 'react';
import SEOHead from '../components/SEOHead';
import { useTranslation } from '../hooks/useTranslation';

interface AboutPageProps {
  currentLanguage: string;
}

const AboutPage: React.FC<AboutPageProps> = ({ currentLanguage }) => {
  const { t } = useTranslation(currentLanguage);
  const getSEOData = () => {
    const seoTitles = {
      es: `${t('about.title')} - Historia, Misión y Valores | Mugixor`,
      eu: `${t('about.title')} - Historia, Misioa eta Balioak | Mugixor`,
      en: `${t('about.title')} - History, Mission & Values | Mugixor`,
      fr: `${t('about.title')} - Histoire, Mission et Valeurs | Mugixor`,
      nl: `${t('about.title')} - Geschiedenis, Missie & Waarden | Mugixor`,
      de: `${t('about.title')} - Geschichte, Mission & Werte | Mugixor`
    };

    const seoDescriptions = {
      es: `Conoce la historia de Mugixor, líder en movilidad eléctrica sostenible en Europa. Descubre nuestra misión, visión y valores. Más de 50,000 clientes satisfechos en 900+ ciudades europeas.`,
      eu: `Ezagutu Mugixor-en historia, Europako mugikortasun elektriko jasangarriaren liderra. Ezagutu gure misioa, ikuspegia eta balioak. 50,000 bezero baino gehiago pozik 900+ hiri europearretan.`,
      en: `Learn about Mugixor's history, leader in sustainable electric mobility in Europe. Discover our mission, vision and values. Over 50,000 satisfied customers in 900+ European cities.`,
      fr: `Découvrez l'histoire de Mugixor, leader de la mobilité électrique durable en Europe. Découvrez notre mission, vision et valeurs. Plus de 50,000 clients satisfaits dans 900+ villes européennes.`,
      nl: `Leer over de geschiedenis van Mugixor, leider in duurzame elektrische mobiliteit in Europa. Ontdek onze missie, visie en waarden. Meer dan 50,000 tevreden klanten in 900+ Europese steden.`,
      de: `Erfahren Sie mehr über die Geschichte von Mugixor, dem Marktführer für nachhaltige Elektromobilität in Europa. Entdecken Sie unsere Mission, Vision und Werte. Über 50,000 zufriedene Kunden in 900+ europäischen Städten.`
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
        url="https://mugixor.com/about"
        type="website"
        keywords={`Mugixor historia, empresa movilidad eléctrica, sostenibilidad, innovación, Europa, misión visión valores`}
      />
      <section className="section">
        <div className="container">
          <h1 className="section-title">{t('about.title')}</h1>
          <p className="section-subtitle">
            {t('about.subtitle')}
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '4rem', 
            alignItems: 'center',
            marginBottom: '4rem'
          }}>
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--gray-900)' }}>
                Nuestra Historia
              </h2>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--gray-600)', marginBottom: '1.5rem' }}>
                Desde nuestras raíces locales hasta nuestra visión global, Mugixor se dedica a revolucionar la forma en que las personas se mueven por las ciudades europeas. Fundada con la misión de hacer que la movilidad urbana sea más accesible, eficiente y respetuosa con el medio ambiente.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--gray-600)' }}>
                Ofrecemos una amplia gama de vehículos eléctricos que combinan tecnología avanzada, diseño elegante y sostenibilidad ambiental para estudiantes, profesionales y trabajadores en más de 900 ciudades europeas.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img 
                src="/mugixor-logo.jpg" 
                alt="Mugixor Team" 
                style={{ 
                  width: '100%', 
                  maxWidth: '400px', 
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                }}
              />
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            <div style={{ 
              padding: '2rem', 
              backgroundColor: 'var(--gray-50)', 
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                🎯
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--gray-900)' }}>
                Nuestra Misión
              </h3>
              <p style={{ color: 'var(--gray-600)', lineHeight: '1.6' }}>
                Transformar la movilidad urbana europea mediante soluciones eléctricas innovadoras, accesibles y sostenibles que mejoren la calidad de vida de nuestros usuarios.
              </p>
            </div>

            <div style={{ 
              padding: '2rem', 
              backgroundColor: 'var(--gray-50)', 
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, var(--secondary-color), var(--primary-color))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                🔮
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--gray-900)' }}>
                Nuestra Visión
              </h3>
              <p style={{ color: 'var(--gray-600)', lineHeight: '1.6' }}>
                Ser la empresa líder en movilidad eléctrica en Europa, creando un futuro donde el transporte urbano sea 100% sostenible y eficiente.
              </p>
            </div>

            <div style={{ 
              padding: '2rem', 
              backgroundColor: 'var(--gray-50)', 
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                💎
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--gray-900)' }}>
                Nuestros Valores
              </h3>
              <p style={{ color: 'var(--gray-600)', lineHeight: '1.6' }}>
                Innovación, sostenibilidad, calidad y compromiso con nuestros clientes. Cada producto refleja nuestra dedicación a la excelencia.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '2rem',
            padding: '3rem 0',
            borderTop: '1px solid var(--gray-200)',
            borderBottom: '1px solid var(--gray-200)',
            marginBottom: '4rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                900+
              </h3>
              <p style={{ color: 'var(--gray-600)', fontWeight: '500' }}>Ciudades en Europa</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '3rem', color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>
                50,000+
              </h3>
              <p style={{ color: 'var(--gray-600)', fontWeight: '500' }}>Clientes Satisfechos</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                100%
              </h3>
              <p style={{ color: 'var(--gray-600)', fontWeight: '500' }}>Eléctrico y Sostenible</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '3rem', color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>
                24/7
              </h3>
              <p style={{ color: 'var(--gray-600)', fontWeight: '500' }}>Soporte al Cliente</p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 style={{ 
              fontSize: '2rem', 
              textAlign: 'center', 
              marginBottom: '3rem', 
              color: 'var(--gray-900)' 
            }}>
              ¿Por qué elegir Mugixor?
            </h2>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '2rem'
            }}>
              <div style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌱</div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--gray-900)' }}>
                  Sostenibilidad
                </h4>
                <p style={{ color: 'var(--gray-600)', lineHeight: '1.6' }}>
                  Todos nuestros productos son 100% eléctricos, contribuyendo a un futuro más limpio y sostenible.
                </p>
              </div>

              <div style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚡</div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--gray-900)' }}>
                  Tecnología Avanzada
                </h4>
                <p style={{ color: 'var(--gray-600)', lineHeight: '1.6' }}>
                  Incorporamos las últimas innovaciones en movilidad eléctrica para ofrecer la mejor experiencia.
                </p>
              </div>

              <div style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🛡️</div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--gray-900)' }}>
                  Calidad Garantizada
                </h4>
                <p style={{ color: 'var(--gray-600)', lineHeight: '1.6' }}>
                  Ofrecemos productos de alta calidad con garantías extendidas y soporte técnico completo.
                </p>
              </div>

              <div style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🤝</div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--gray-900)' }}>
                  Atención Personalizada
                </h4>
                <p style={{ color: 'var(--gray-600)', lineHeight: '1.6' }}>
                  Nuestro equipo está disponible 24/7 para brindarte el mejor servicio y asesoramiento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

