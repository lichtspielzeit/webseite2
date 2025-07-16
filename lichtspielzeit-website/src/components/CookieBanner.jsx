import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  
  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Zeige Banner nach 2 Sekunden
      setTimeout(() => setShowBanner(true), 2000);
    }
  }, []);
  
  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
    
    // Google Analytics aktivieren (falls verfügbar)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
  };
  
  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };
  
  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div 
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
          style={{ backgroundColor: 'var(--anthracite)' }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-white text-sm md:text-base">
                <p>
                  Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website zu bieten. 
                  <a 
                    href="/datenschutz" 
                    className="underline ml-1 hover:text-gray-300 transition-colors"
                  >
                    Mehr erfahren
                  </a>
                </p>
              </div>
              
              <div className="flex gap-3">
                <button 
                  onClick={declineCookies}
                  className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm"
                >
                  Ablehnen
                </button>
                <button 
                  onClick={acceptCookies}
                  className="px-4 py-2 rounded text-white transition-all duration-300 text-sm"
                  style={{ 
                    backgroundColor: 'var(--honey)',
                    ':hover': { opacity: 0.9 }
                  }}
                >
                  Akzeptieren
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;

