import { useState } from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage';

interface InteractiveCardProps {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  onClick?: () => void;
}

const InteractiveCard = ({
  title,
  description,
  image,
  buttonText,
  onClick
}: InteractiveCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-white group"
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative h-56 overflow-hidden">
        <OptimizedImage
          src={image}
          alt={title}
          className="h-full w-full"
          objectFit="cover"
        />
        
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-turquoise/90 to-turquoise/40 flex flex-col justify-end p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h4 
            className="text-xl font-playfair font-bold text-white mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {title}
          </motion.h4>
          
          <motion.p 
            className="text-white/90 text-sm mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {description}
          </motion.p>
          
          <motion.button
            className="bg-white text-turquoise px-4 py-2 rounded text-sm font-medium inline-block"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            {buttonText}
          </motion.button>
        </motion.div>
      </div>
      
      <div className="p-6">
        <h4 className="font-playfair text-xl font-bold text-charcoal mb-2 group-hover:text-turquoise transition-colors">
          {title}
        </h4>
        <p className="text-charcoal-light line-clamp-2">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default InteractiveCard;