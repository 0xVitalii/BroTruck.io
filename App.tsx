
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VisualShowcase from './components/VisualShowcase';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Gallery from './components/Gallery';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-orange-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <VisualShowcase />
        <HowItWorks />
        <Features />
        <Gallery />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
