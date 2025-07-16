import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Vision = () => {
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
      ref={ref} 
      className="section" 
      style={{ backgroundColor: 'rgba(139, 154, 139, 0.1)' }}
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6" style={{ color: 'var(--anthracite)' }}>
              Was Lichtspielzeit wirklich ist
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg md:text-xl" style={{ color: 'var(--anthracite)' }}>
                Lichtspielzeit ist mehr als ein Shop - es ist eine Herzensangelegenheit. 
                Geboren aus der Überzeugung, dass jede Familie Momente der Ruhe und Verbindung verdient hat.
              </p>
              
              <p className="text-lg md:text-xl" style={{ color: 'var(--anthracite)' }}>
                Hier findest du sorgfältig ausgewählte Produkte und Rituale, die dir helfen, 
                den Alltag zu entschleunigen und die kostbaren Augenblicke mit deinem Kind bewusst zu erleben.
              </p>
              
              <motion.p 
                className="text-xl md:text-2xl font-semibold"
                style={{ color: 'var(--honey)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Denn die schönsten Erinnerungen entstehen nicht in perfekten Momenten, sondern in achtsamen.
              </motion.p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="/images/kinder_spielen_wald.jpg" 
              alt="Kinder spielen achtsam in der Natur"
              className="rounded-lg shadow-lg w-full"
              style={{ borderRadius: '12px' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vision;

