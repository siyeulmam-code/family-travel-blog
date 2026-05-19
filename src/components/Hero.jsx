import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src="/banner.png" alt="Family Travel Banner" />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">우리 가족의 소중한 여행 기록</h1>
        <p className="hero-subtitle">함께 웃고, 걸으며 완성해가는 우리들만의 따뜻한 추억 공간입니다.</p>
      </div>
    </section>
  );
};

export default Hero;
