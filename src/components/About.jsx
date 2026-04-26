import React from 'react';
import './About.css';

const highlights = [
  'ISO 27001 Certified processes',
  'Dedicated project manager for every client',
  'Transparent pricing, no hidden costs',
  'Agile delivery with regular updates',
];

const metrics = [
  { label: 'uptime guarantee', value: '99.9%' },
  { label: 'avg response time', value: '< 2 hrs' },
  { label: 'clients served', value: '200+' },
  { label: 'team size', value: '35+' },
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__grid">
        {/* Visual / Metrics Panel */}
        <div className="about__visual">
          {metrics.map((m, i) => (
            <div key={i} className={`about__metric about__metric--${i + 1}`}>
              <div className="about__metric-label">// {m.label}</div>
              <div className="about__metric-val">{m.value}</div>
            </div>
          ))}
        </div>

        {/* Text Content */}
        <div className="about__text">
          <div className="section-label">// Who We Are</div>
          <h2 className="section-title">Built by Engineers,<br />Driven by Results</h2>
          <p>
            We're a team of developers, architects, and IT specialists passionate
            about delivering technology that actually works for your business —
            not just on paper.
          </p>
          <p>
            Since 2016, we've helped startups and enterprises across India and
            beyond modernise their IT infrastructure and build products that scale.
          </p>
          <ul className="about__list">
            {highlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
