import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12" style={{ backgroundColor: 'var(--anthracite)' }}>
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo/Brand */}
          <div>
            <h3 className="text-2xl font-serif text-white mb-4">
              Lichtspielzeit
            </h3>
            <p className="text-gray-300">
              Achtsamkeit für Mütter und Kinder. 
              Entdecke die Magie in den kleinen Momenten.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Rechtliches
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/impressum" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Impressum
                </a>
              </li>
              <li>
                <a 
                  href="/datenschutz" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Datenschutz
                </a>
              </li>
              <li>
                <a 
                  href="/agb" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  AGB
                </a>
              </li>
            </ul>
          </div>
          
          {/* Kontakt */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Kontakt
            </h4>
            <div className="space-y-2 text-gray-300">
              <p>E-Mail: info@lichtspielzeit.de</p>
              <p>Für Fragen zu den Ritualen und Produkten</p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Lichtspielzeit. Alle Rechte vorbehalten.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Mit ❤️ für bewusste Familien erstellt
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

