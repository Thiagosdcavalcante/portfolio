import React from 'react';
import profilePhoto from '../assets/profile.jpg';

export function PortfolioPortrait() {
  return (
    <div className="profile-pic-frame" aria-hidden="true">
      <img src={profilePhoto} alt="Retrato de Thiago" className="profile-pic" />
      <div className="portrait-ring portrait-ring-one" />
      <div className="portrait-ring portrait-ring-two" />
      <div className="portrait-card">
        <span className="portrait-monogram">LD</span>
        <span className="portrait-caption">Creative builder</span>
      </div>
    </div>
  );
}