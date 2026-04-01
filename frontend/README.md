# TEK Inspirations LLC - Enterprise Website

A high-performance, enterprise-grade IT services platform built with React. This repository contains the frontend application for TEK Inspirations LLC, redesigned with a modern, mission-critical aesthetic focusing on corporate authority and technical precision.

## 🚀 Tech Stack

- **Framework:** React 18
- **Styling:** Tailwind CSS (v4)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router v6
- **Build Tool:** Vite

## ✨ Key Features

- **Enterprise Design System:** A cohesive "Dark-Navy/Midnight Blue & Emerald-Green" color palette delivering a premium, tech-focused visual experience.
- **Dynamic UI Components:** Extensive use of glassmorphism, bento-box grid layouts, glowing accents, and terminal-style typography.
- **Fluid Animations:** Scroll-triggered reveals, page transitions, counting number statistics, and micro-interactions powered by Framer Motion.
- **Responsive Architecture:** Fully optimized for mobile, tablet, and desktop environments including mobile drawer navigation and swipeable carousels.
- **SEO Optimized:** Semantic HTML structure and performance-focused layouts.

## 📂 Project Structure

```text
src/
├── components/      # Reusable UI elements (Header, Footer, PageHero, etc.)
├── pages/           # Individual route components
│   ├── Home/        # Main landing page with Stats, Services, Testimonials, CTA
│   ├── Solutions/   # IT Consulting, Managed Services, RPO, Software Dev
│   ├── Company/     # Who We Are, Our Leaders, Contact, Gallery
│   └── Legal/       # Privacy Policy, Terms of Service
├── routes/          # Application routing configuration (AppRoutes.jsx)
├── index.css        # Global CSS, Font (Inter), selection colors, custom scrollbar
└── App.jsx          # Root component & ScrollToTop behavior
```

## 🎨 Design System

**Primary Colors:**
- Base/Background: Dark Navy (`#0f172a`), Slate-50/White for light sections
- Primary Accent: Emerald Green (`#088349` to `#3ddc84` gradients)

**Typography:**
- Primary Font: **Inter** (Google Fonts)
- Style: Monospaced terminal elements for technical badges, bold uppercase labels for hierarchy.

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Clone the repository and navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 📝 Recent Major Updates

- **Complete UI Overhaul:** Upgraded 20+ files with rich interactive effects.
- **Navigation:** Added `ScrollToTop` handling for SPA routing.
- **Visuals:** Implemented animated gradient orbs, SVG progress rings, and interactive bento grids.
- **Performance:** Replaced heavy static assets with CSS gradients and optimized Framer Motion loading.
