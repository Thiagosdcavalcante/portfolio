import React from 'react';

import { PortfolioPortrait } from './PortfolioPortrait.jsx';

export function HeroSection({ hero }) {
  return (
    <header id="home" className="hero">
      <div className="photo-wrapper">
        <div className="glow-effect" />
        <PortfolioPortrait />
      </div>
      <div className="hero-content">
        <span className="label">{hero.label}</span>
        <h1>
          {hero.titlePrefix} <span className="gradient-text">{hero.titleHighlight}</span>
        </h1>
        <p>{hero.description}</p>
      </div>
    </header>
  );
}