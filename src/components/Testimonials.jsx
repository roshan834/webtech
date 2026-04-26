import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    stars: 5,
    quote:
      '"WebTechGenZ transformed our entire IT setup within weeks. The cloud migration was flawless and the team was always available for support."',
    name: 'Rohit Patel',
    role: 'CTO, FinServe India',
    initials: 'RP',
  },
  {
    id: 2,
    stars: 5,
    quote:
      '"The React dashboard they built cut our reporting time by 60%. Clean code, on time, and the UI is something we\'re proud to show clients."',
    name: 'Ananya Sharma',
    role: 'Product Head, LogiTrack',
    initials: 'AS',
  },
  {
    id: 3,
    stars: 5,
    quote:
      '"Their VAPT report was thorough and actionable. We fixed critical issues before launch — couldn\'t have done it without their expertise."',
    name: 'Mehul Kapoor',
    role: 'Founder, DocEase',
    initials: 'MK',
  },
];

const Stars = ({ count }) => (
  <div className="testimonial-card__stars">
    {'★'.repeat(count)}
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="section-label">// Client Voices</div>
      <h2 className="section-title">What Our Clients Say</h2>
      <p className="section-sub">
        Trusted by businesses across industries to deliver on time and beyond
        expectations.
      </p>
      <div className="testimonials__grid">
        {testimonials.map((t) => (
          <div key={t.id} className="testimonial-card">
            <Stars count={t.stars} />
            <p className="testimonial-card__quote">{t.quote}</p>
            <div className="testimonial-card__author">
              <div className="testimonial-card__avatar">{t.initials}</div>
              <div>
                <div className="testimonial-card__name">{t.name}</div>
                <div className="testimonial-card__role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
