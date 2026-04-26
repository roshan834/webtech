import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__left">
        <span className="footer__logo">WebTechGenZ</span>
        <p>End-to-end IT solutions for growing businesses.</p>
      </div>
      <div className="footer__center">
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#portfolio">Work</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="footer__right">
        <p>© {currentYear} WebTechGenZ IT Solutions.</p>
        <p>Mumbai, India</p>
      </div>
    </footer>
  );
};

export default Footer;
