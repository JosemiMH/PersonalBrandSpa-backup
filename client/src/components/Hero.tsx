import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pb-24 md:pt-32 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-turquoise/50 to-sage/30 mix-blend-multiply z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Luxury spa environment" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-shadow mb-6">
            Transformando espacios de bienestar en experiencias memorables
          </h1>
          <p className="text-white text-lg md:text-xl opacity-90 mb-8 max-w-xl">
            Más de 20 años de experiencia optimizando operaciones, formando equipos excepcionales y elevando la satisfacción del cliente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#services" className="bg-turquoise hover:bg-turquoise-dark text-white font-medium px-8 py-3 rounded transition-colors inline-block text-center">
              Descubre mis servicios
            </a>
            <a href="#contact" className="bg-white hover:bg-gray-100 text-turquoise-dark font-medium px-8 py-3 rounded transition-colors inline-block text-center">
              Contactar
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
