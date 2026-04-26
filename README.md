# WebTechGenZ IT Solutions — React Website

A dark, tech-focused IT services website built with React JS.

## Project Structure

```
src/
├── App.js                    # Root component — assembles all sections
├── index.js                  # React DOM entry point
├── styles/
│   └── global.css            # CSS variables, reset, shared utilities
└── components/
    ├── Navbar.jsx / .css      # Fixed nav with scroll effect + mobile burger
    ├── Hero.jsx / .css        # Full-screen hero with animated badge & stats
    ├── Services.jsx / .css    # 6-card services grid
    ├── About.jsx / .css       # Split layout with metrics panel
    ├── Portfolio.jsx / .css   # Project cards with tech stack tags
    ├── Testimonials.jsx / .css# Client review cards
    ├── Contact.jsx / .css     # Contact form with React state
    └── Footer.jsx / .css      # Footer with links
```

## Getting Started

### Prerequisites
- Node.js v16+ and npm

### Installation

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view in your browser.

### Build for Production

```bash
npm run build
```

---

## Customisation Guide

### 1. Company Name & Branding
- Replace `WebTechGenZ` in `Navbar.jsx`, `Footer.jsx`, and `public/index.html`
- Update the accent color (`--accent`) in `styles/global.css`

### 2. Contact Details
- Edit `contactDetails` array in `Contact.jsx`
- Phone, email, and location

### 3. Services
- Edit the `servicesData` array in `Services.jsx`
- Add/remove/rename services and update their SVG icons

### 4. Portfolio Projects
- Edit the `projects` array in `Portfolio.jsx`
- Update title, description, tags, and theme color

### 5. Testimonials
- Edit the `testimonials` array in `Testimonials.jsx`

### 6. Form Submission
- In `Contact.jsx`, replace the `handleSubmit` function with your actual logic
- Options: EmailJS, Formspree, a backend API, or Netlify Forms

### 7. Hero Stats
- Edit the stats in `Hero.jsx` under `hero__stats`

---

## Tech Stack
- React 18
- CSS Modules (per-component CSS files)
- Google Fonts: Space Mono + DM Sans
- No external UI library dependencies
