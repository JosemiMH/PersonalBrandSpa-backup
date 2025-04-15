import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImageEs from '@/assets/images/hero-es.png';
import heroImageEn from '@/assets/images/hero-en.jpg';

const Hero = () => {
  const { language, t } = useLanguage();
  
  // Seleccionar la imagen según el idioma
  const heroImage = language === 'es' ? heroImageEs : heroImageEn;

  return (
    <div className="relative pt-16 pb-12 md:pb-24 md:pt-32 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-turquoise/30 to-sage/10 mix-blend-multiply z-10"></div>
        <img 
          src={heroImage} 
          alt={language === 'es' 
            ? "Eva Pérez - Experta en Estrategia de Hospitalidad y Bienestar de Lujo" 
            : "Eva Pérez - Expert in Luxury Hospitality & Wellness Strategy"} 
          className="w-full h-full object-cover object-right-top md:object-center"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div 
          className="max-w-lg mb-20 sm:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-playfair text-xl md:text-3xl lg:text-4xl font-bold text-white leading-tight text-shadow mb-2 max-w-[70%] sm:max-w-full">
            {language === 'es'
              ? "Asesoro a hoteles en la transformación de su área Wellness"
              : "I advise hotels on transforming their Wellness area"}
          </h1>
          <p className="text-white text-sm md:text-lg opacity-90 mb-2 border-l-4 border-white/70 pl-3 max-w-[70%] sm:max-w-md">
            {language === 'es'
              ? "En un motor de crecimiento estratégico y rentable."
              : "Into a strategic and profitable growth engine."}
          </p>
          <div className="mb-2 hidden sm:block">
            <p className="text-white text-xs md:text-sm uppercase tracking-wider font-semibold">
              {language === 'es'
                ? "Experta en Estrategia de Hospitalidad y Bienestar de Lujo"
                : "Expert in Luxury Hospitality & Wellness Strategy"}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#services" className="bg-turquoise hover:bg-turquoise-dark text-white font-medium px-8 py-3 rounded transition-colors inline-block text-center">
              {language === 'es' ? "Descubre mis servicios" : "Discover my services"}
            </a>
            <a href="#contact" className="bg-white hover:bg-gray-100 text-turquoise-dark font-medium px-8 py-3 rounded transition-colors inline-block text-center">
              {language === 'es' ? "Contactar" : "Contact me"}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
