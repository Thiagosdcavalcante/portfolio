import React from 'react';
import './App.css';

import { BentoGrid } from './components/BentoGrid.jsx';
import { Footer } from './components/Footer.jsx';
import { FloatingDock } from './components/FloatingDock.jsx';
import { HeroSection } from './components/HeroSection.jsx';
import { portfolioData } from './data/portfolioData';

function App() {
  return (
    <div className="container">
      <HeroSection hero={portfolioData.hero} />
      <FloatingDock items={portfolioData.dockItems} />
      <BentoGrid content={portfolioData} />
      <Footer footer={portfolioData.footer} />
    </div>
  );
}

export default App;