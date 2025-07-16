import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Problem = () => {
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
    <section ref={ref} className="section" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        <motion.h2 
          className="text-4xl md:text-5xl font-serif text-center mb-12"
          style={{ color: 'var(--anthracite)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
        >
          Wenn der Alltag die schönen Momente verschluckt...
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="/images/kinder_spielen_strand.jpg" 
              alt="Kinder spielen friedlich am Strand"
              className="rounded-lg shadow-lg w-full"
              style={{ borderRadius: '12px' }}
            />
          </motion.div>
          
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg md:text-xl" style={{ color: 'var(--anthracite)' }}>
              Du liebst dein Kind über alles, aber der Alltag fühlt sich oft wie ein endloser Marathon an. 
              Zwischen Terminen, Haushalt und den tausend kleinen Aufgaben gehen die magischen Momente verloren.
            </p>
            
            <p className="text-lg md:text-xl" style={{ color: 'var(--anthracite)' }}>
              Du sehnst dich nach mehr Ruhe, mehr Verbindung und mehr bewussten Augenblicken mit deinem Kind.
            </p>
            
            <p 
              className="text-xl md:text-2xl font-semibold"
              style={{ color: 'var(--honey)' }}
            >
              Du bist nicht allein. Und es gibt einen Weg zurück zur Magie.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Problem;

