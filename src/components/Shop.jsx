import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Shop = () => {
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

  const products = [
    {
      title: "Achtsamkeits-Spiele",
      description: "Spielerisch zur Ruhe finden",
      image: "/images/kinder_haende_ton.jpg",
      buttonText: "Spiele entdecken"
    },
    {
      title: "Kreativ-Sets",
      description: "Gemeinsam erschaffen und entspannen",
      image: "/images/kinder_haende_teig.jpg",
      buttonText: "Sets ansehen"
    },
    {
      title: "Ritual-Helfer",
      description: "Kleine Gegenstände für große Momente",
      image: "/images/kinder_spielen_wald.jpg",
      buttonText: "Rituale erkunden"
    }
  ];

  return (
    <section ref={ref} className="section" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4" style={{ color: 'var(--anthracite)' }}>
            Entdecke unsere liebevoll kuratierten Produkte
          </h2>
          <p className="text-lg md:text-xl" style={{ color: 'var(--anthracite)' }}>
            Jedes Produkt wurde mit Bedacht ausgewählt, um Achtsamkeit in euren Alltag zu bringen
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div 
              key={index}
              className="rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              style={{ 
                backgroundColor: 'var(--cream)',
                borderRadius: '12px'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <motion.img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover"
                  style={{ borderRadius: '8px' }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              <h3 className="text-xl md:text-2xl font-semibold mb-2" style={{ color: 'var(--anthracite)' }}>
                {product.title}
              </h3>
              
              <p className="mb-4" style={{ color: 'var(--anthracite)' }}>
                {product.description}
              </p>
              
              <motion.button 
                className="btn btn-primary px-6 py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {product.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>
        
        {/* Abschluss-CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-serif mb-4" style={{ color: 'var(--anthracite)' }}>
            Bereit für mehr Magie im Alltag?
          </h3>
          <p className="text-lg md:text-xl mb-6" style={{ color: 'var(--anthracite)' }}>
            Starte heute mit den 10 Ritualen und erlebe, wie sich kleine Veränderungen in große Momente verwandeln.
          </p>
          <motion.button 
            onClick={() => document.getElementById('ebook-section').scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-primary text-lg px-8 py-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hol dir jetzt die 10 Rituale
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Shop;

