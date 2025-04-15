import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="py-16 md:py-20 bg-turquoise text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="md:w-2/3">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para transformar tu negocio wellness?
            </h2>
            <p className="text-white/90 text-lg">
              Agenda una consulta gratuita para descubrir cómo podemos optimizar tu spa y elevar la experiencia de tus clientes.
            </p>
          </div>
          <div>
            <a href="#contact" className="inline-block bg-white text-turquoise-dark hover:bg-gray-100 transition-colors font-medium px-8 py-3 rounded">
              Agendar consulta
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
