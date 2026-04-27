import React, { useState } from 'react';
import './Contact.css';

const contactDetails = [
  {
    label: '+91 98765 43210',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.62 2.18 2 2 0 012.6 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l.91-.91a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: 'hello@ WebTechGenZ.in',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Mumbai, Maharashtra — serving clients pan-India',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

const serviceOptions = [
  'Web Development',
  'App Development',
  'Cloud Support',
  'IT Consulting',
  'Cybersecurity',
  'IT Support / AMC',
];

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your actual form submission logic (API call, EmailJS, etc.)
    console.log('Form submitted:', form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="section-label">// Get in Touch</div>
      <h2 className="section-title">Start Your Project</h2>

      <div className="contact__grid">
        {/* Contact Info */}
        <div className="contact__info">
          <p>
            Have a project in mind or need IT support? Drop us a message and
            we'll get back to you within 2 business hours.
          </p>
          {contactDetails.map((d, i) => (
            <div key={i} className="contact__detail">
              <div className="contact__detail-icon">{d.icon}</div>
              <span>{d.label}</span>
            </div>
          ))}
        </div>

        {/* Form */}
        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="service">Service Required</label>
            <select
              id="service"
              name="service"
              value={form.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a service...</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your project or requirement..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn-primary contact__submit">
            {submitted ? 'Message Sent ✓' : 'Send Message →'}
          </button>

          {submitted && (
            <p className="contact__success">
              Thanks! We'll be in touch within 2 business hours.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
