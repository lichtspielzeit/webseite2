import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import EmailForm from './EmailForm';

const EbookSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="ebook-section"
      ref={ref} 
      className="section" 
      style={{ backgroundColor: 'var(--cream)' }}
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* E-Book Cover */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8 }}
          >
            <div 
              className="max-w-sm mx-auto shadow-2xl rounded-lg overflow-hidden"
              style={{ 
                background: 'linear-gradient(135deg, var(--sage) 0%, var(--rose) 100%)',
                aspectRatio: '3/4'
              }}
            >
              <div className="p-8 h-full flex flex-col justify-center items-center text-center">
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">
                  10 Rituale
                </h3>
                <p className="text-lg text-white mb-6">
                  für entspannte Mama-Kind-Momente
                </p>
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <p className="text-sm text-white opacity-90">
                  Einfache Achtsamkeits-Übungen für den Alltag
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Inhalt */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6" style={{ color: 'var(--anthracite)' }}>
              10 Rituale für entspannte Mama-Kind-Momente
            </h2>
            
            <p className="text-lg md:text-xl mb-8" style={{ color: 'var(--anthracite)' }}>
              Dein kostenloses E-Book mit sofort umsetzbaren Achtsamkeits-Ritualen
            </p>
            
            {/* Vorteile */}
            <div className="space-y-4 mb-8">
              {[
                'Sofort umsetzbar: Jedes Ritual dauert nur 2-5 Minuten',
                'Alltagstauglich: Perfekt für gestresste Mama-Alltage',
                'Für jedes Alter: Rituale für Kleinkinder bis Schulkinder'
              ].map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div 
                    className="w-6 h-6 rounded-full mr-4 flex-shrink-0"
                    style={{ backgroundColor: 'var(--honey)' }}
                  ></div>
                  <span style={{ color: 'var(--anthracite)' }}>{benefit}</span>
                </motion.div>
              ))}
            </div>
            
            {/* E-Mail Formular */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <EmailForm />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EbookSection;

