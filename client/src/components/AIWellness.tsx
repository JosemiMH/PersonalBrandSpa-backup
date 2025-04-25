import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

const AIWellness = () => {
  const { language } = useLanguage();

  const aiFeatures = [
    {
      icon: 'fa-robot',
      title: {
        es: 'Personalización Inteligente',
        en: 'Intelligent Personalization'
      },
      description: {
        es: 'Algoritmos que analizan las preferencias de los clientes para crear experiencias a medida, aumentando la satisfacción y fidelización.',
        en: 'Algorithms that analyze customer preferences to create tailored experiences, increasing satisfaction and loyalty.'
      }
    },
    {
      icon: 'fa-chart-line',
      title: {
        es: 'Análisis Predictivo',
        en: 'Predictive Analytics'
      },
      description: {
        es: 'Previsión de tendencias de ocupación y demanda para optimizar la planificación de recursos y maximizar los ingresos.',
        en: 'Forecasting occupancy and demand trends to optimize resource planning and maximize revenue.'
      }
    },
    {
      icon: 'fa-tasks',
      title: {
        es: 'Automatización de Procesos',
        en: 'Process Automation'
      },
      description: {
        es: 'Simplificación de tareas administrativas y operativas para que el personal pueda centrarse en proporcionar experiencias excepcionales.',
        en: 'Simplification of administrative and operational tasks so staff can focus on providing exceptional experiences.'
      }
    },
    {
      icon: 'fa-comments',
      title: {
        es: 'Asistentes Virtuales',
        en: 'Virtual Assistants'
      },
      description: {
        es: 'Chatbots y asistentes de voz que proporcionan atención al cliente 24/7, gestionan reservas y resuelven consultas frecuentes.',
        en: 'Chatbots and voice assistants that provide 24/7 customer service, manage bookings, and resolve frequent inquiries.'
      }
    }
  ];

  return (
    <section id="ai-wellness" className="py-16 md:py-24 bg-gradient-to-r from-turquoise/5 to-sage/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-wider text-turquoise font-medium mb-3">
            {language === 'es' ? 'Innovación Tecnológica' : 'Technological Innovation'}
          </h2>
          <h3 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-6">
            {language === 'es' ? 'Inteligencia Artificial para Centros Wellness' : 'Artificial Intelligence for Wellness Centers'}
          </h3>
          <p className="text-charcoal-light">
            {language === 'es' 
              ? 'Descubre cómo la IA está transformando la gestión de centros wellness y spas, aportando eficiencia, personalización y nuevas oportunidades de crecimiento.'
              : 'Discover how AI is transforming the management of wellness centers and spas, bringing efficiency, personalization, and new growth opportunities.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aiFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-t-4 border-t-turquoise">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-turquoise/10 flex items-center justify-center mb-4">
                    <i className={`fas ${feature.icon} text-turquoise text-xl`}></i>
                  </div>
                  <h4 className="font-bold text-xl mb-3 text-charcoal">
                    {typeof feature.title === 'object' ? feature.title[language] : feature.title}
                  </h4>
                  <p className="text-charcoal-light">
                    {typeof feature.description === 'object' ? feature.description[language] : feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 bg-white p-6 md:p-8 rounded-lg shadow-md max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-turquoise/20 flex items-center justify-center shrink-0">
              <i className="fas fa-lightbulb text-turquoise text-2xl"></i>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-2 text-charcoal">
                {language === 'es' ? '¿Cómo puedo implementar IA en mi centro wellness?' : 'How can I implement AI in my wellness center?'}
              </h4>
              <p className="text-charcoal-light mb-4">
                {language === 'es' 
                  ? 'La implementación de soluciones de IA no tiene por qué ser compleja o costosa. Como parte de mis servicios de consultoría, te ayudo a identificar las áreas donde la tecnología puede tener mayor impacto y a seleccionar e implementar las herramientas adecuadas para tu centro.'
                  : 'Implementing AI solutions doesn\'t have to be complex or expensive. As part of my consulting services, I help you identify the areas where technology can have the greatest impact and select and implement the right tools for your center.'}
              </p>
              <a 
                href="#contact" 
                className="text-turquoise hover:text-turquoise-dark font-medium inline-flex items-center"
              >
                {language === 'es' ? 'Consulta sobre IA para tu negocio' : 'Inquire about AI for your business'} 
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIWellness;