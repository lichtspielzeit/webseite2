import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToEbook = () => {
    document.getElementById('ebook-section').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/images/hintergrund_sonnenuntergang_see.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay für bessere Textlesbarkeit */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(139, 154, 139, 0.15) 0%, rgba(232, 197, 160, 0.1) 100%)'
        }}
      ></div>
      
      {/* Inhalt */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6"
          style={{ color: 'var(--anthracite)' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Entdecke die Magie in den kleinen Momenten
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          style={{ color: 'var(--anthracite)' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Einfache Achtsamkeits-Rituale, die gestresste Mama-Alltage in kostbare Erinnerungen verwandeln
        </motion.p>
        
        <motion.button 
          onClick={scrollToEbook}
          className="btn btn-primary text-lg px-8 py-4 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Hol dir die 10 Rituale (kostenlos)
        </motion.button>
      </div>
      
      {/* Scroll-Indikator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

