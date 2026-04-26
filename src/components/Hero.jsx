import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Available for projects
        </div>

        <h1>
          We Build the{' '}
          <em>Digital Infrastructure</em>{' '}
          Your Business Needs
        </h1>

        <p className="hero__sub">
          From web &amp; app development to cloud architecture and end-to-end IT
          support — we deliver modern, scalable solutions for growing businesses.
        </p>

        <div className="hero__btns">
          <a href="#services" className="btn-primary">Explore Services</a>
          <a href="#portfolio" className="btn-outline">View Our Work</a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">120+</span>
            <span className="hero__stat-label">Projects Delivered</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">98%</span>
            <span className="hero__stat-label">Client Satisfaction</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">8yr</span>
            <span className="hero__stat-label">Industry Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
