import { Link } from 'wouter';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-charcoal-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="font-playfair text-2xl font-bold text-white mb-4">Eva Pérez</div>
            <p className="text-gray-400 mb-6">
              Más de 20 años transformando espacios de bienestar en experiencias memorables y rentables.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-turquoise transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-turquoise transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-turquoise transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-turquoise transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Enlaces rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-turquoise transition-colors">Sobre mí</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-turquoise transition-colors">Servicios</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-turquoise transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-turquoise transition-colors">Testimonios</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-turquoise transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-turquoise transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Servicios</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-turquoise transition-colors">Consultoría Estratégica</a></li>
              <li><a href="#" className="text-gray-400 hover:text-turquoise transition-colors">Gestión de Proyectos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-turquoise transition-colors">Formación y Desarrollo</a></li>
              <li><a href="#" className="text-gray-400 hover:text-turquoise transition-colors">Interim Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-turquoise transition-colors">Mentoring</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-envelope text-turquoise mt-1 mr-2"></i>
                <a href="mailto:contacto@evaperez.com" className="text-gray-400 hover:text-turquoise transition-colors">contacto@evaperez.com</a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone text-turquoise mt-1 mr-2"></i>
                <a href="tel:+34600000000" className="text-gray-400 hover:text-turquoise transition-colors">+34 600 000 000</a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-turquoise mt-1 mr-2"></i>
                <span className="text-gray-400">Barcelona, España</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-700 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Eva Pérez. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-turquoise text-sm transition-colors">Política de Privacidad</a>
            <a href="#" className="text-gray-400 hover:text-turquoise text-sm transition-colors">Términos y Condiciones</a>
            <a href="#" className="text-gray-400 hover:text-turquoise text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
