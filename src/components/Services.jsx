import React from 'react';
import './Services.css';

const servicesData = [
  {
    id: 1,
    title: 'Web Development',
    description:
      'Custom websites and web apps built with modern frameworks — fast, responsive, and optimised for conversion.',
    tag: 'React · Next.js · Node',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'App Development',
    description:
      'Native and cross-platform mobile apps for iOS and Android that deliver seamless user experiences.',
    tag: 'React Native · Flutter',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Cloud Support',
    description:
      'End-to-end cloud architecture, migration, and managed services across AWS, Azure, and GCP platforms.',
    tag: 'AWS · Azure · GCP',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'IT Consulting',
    description:
      'Strategic technology advisory to align your IT roadmap with business goals and future growth.',
    tag: 'Strategy · Audit · Roadmap',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Cybersecurity',
    description:
      'Protect your digital assets with penetration testing, vulnerability assessments, and ongoing monitoring.',
    tag: 'Pen-test · VAPT · SOC',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'IT Support & AMC',
    description:
      '24/7 helpdesk, hardware maintenance, and annual maintenance contracts to keep your operations running smoothly.',
    tag: '24/7 · On-site · Remote',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="section-label">// What We Do</div>
      <h2 className="section-title">Our Core Services</h2>
      <p className="section-sub">
        Comprehensive IT solutions tailored to your business goals — from building
        to maintaining to scaling.
      </p>
      <div className="services__grid">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-card__icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span className="service-card__tag">{service.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
