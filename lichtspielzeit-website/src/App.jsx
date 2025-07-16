import React from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import EbookSection from './components/EbookSection';
import Vision from './components/Vision';
import Shop from './components/Shop';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <Problem />
      <EbookSection />
      <Vision />
      <Shop />
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;

