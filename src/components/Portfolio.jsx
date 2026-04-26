import React from 'react';
import './Portfolio.css';

const projects = [
  {
    id: 1,
    title: 'FinFlow Dashboard',
    desc: 'Real-time financial analytics platform for an NBFC with role-based access and audit trails.',
    badge: 'Web App',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    theme: 'blue',
    icon: (
      <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="5" y="10" width="50" height="40" rx="3" />
        <path d="M5 20h50" />
        <circle cx="12" cy="15" r="2" />
        <circle cx="19" cy="15" r="2" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'MedTrack Patient App',
    desc: 'Cross-platform health tracking app with appointment booking and medication reminders.',
    badge: 'Mobile App',
    tags: ['React Native', 'Firebase', 'HL7'],
    theme: 'green',
    icon: (
      <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="18" y="5" width="24" height="50" rx="4" />
        <path d="M18 45h24" />
        <circle cx="30" cy="50" r="2" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'CloudMigrate E-Commerce',
    desc: 'Migrated a legacy retail platform to AWS with zero downtime and 40% cost reduction.',
    badge: 'Cloud',
    tags: ['AWS', 'Terraform', 'Docker'],
    theme: 'purple',
    icon: (
      <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M10 40 L30 10 L50 40Z" />
        <path d="M20 40 L30 20 L40 40Z" opacity="0.5" />
        <circle cx="30" cy="10" r="3" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'SecureAudit VAPT Report',
    desc: 'Full vulnerability assessment and penetration testing for a SaaS startup pre-launch.',
    badge: 'Security',
    tags: ['OWASP', 'Kali Linux', 'SIEM'],
    theme: 'amber',
    icon: (
      <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="30" cy="30" r="20" />
        <circle cx="30" cy="30" r="12" />
        <circle cx="30" cy="30" r="4" />
      </svg>
    ),
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="section-label">// Our Work</div>
      <h2 className="section-title">Recent Projects</h2>
      <p className="section-sub">
        A selection of solutions we've built and deployed for clients across
        industries.
      </p>
      <div className="portfolio__grid">
        {projects.map((project) => (
          <div key={project.id} className="portfolio-card">
            <div className={`portfolio-card__thumb portfolio-card__thumb--${project.theme}`}>
              {project.icon}
              <span className="portfolio-card__badge">{project.badge}</span>
            </div>
            <div className="portfolio-card__info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="portfolio-card__tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
