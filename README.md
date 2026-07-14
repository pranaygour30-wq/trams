# Elementum Landing Page

A modern, highly interactive, and responsive landing page built with React and Vite. This project was developed as a submission for the Decode Labs Internship.

## 🚀 Live Demo
*(Your Vercel deployment link goes here)*

## 🛠️ Tech Stack
- **Framework**: React (Vite)
- **Styling**: Vanilla CSS (CSS Variables, Flexbox, Media Queries)
- **Icons**: Lucide React
- **Animations**: Custom Intersection Observer & CSS Keyframes

## 🏗️ Architecture & Features

This application follows a strict modular component architecture. Each section of the landing page is isolated into its own reusable React component with a scoped CSS file.

### Key Highlights
- **100% Responsive Design**: Fluid layouts that gracefully adapt to mobile, tablet, and desktop viewports without breaking UI integrity.
- **Premium Scroll Animations**: Built a highly performant, custom `IntersectionObserver` that dynamically reveals elements on scroll. Elements smoothly un-blur, slide in from varying directions, and scale into place with staggered delays. These animations replay continuously upon scrolling.
- **Micro-Interactions**: Applied advanced CSS hover states (lift, bounce, scale, and dynamic drop shadows) across text, images, buttons, and custom SVGs to make the UI feel tactile and alive.
- **Pixel-Perfect Typography & Layout**: Faithfully recreated complex Figma layouts, including custom pill-shaped highlights, hand-drawn double-line sketchy underlines, custom font stacks (`Gerbil` with `Comfortaa` fallbacks), and perfectly aligned floating avatars.
- **Dynamic Backgrounds**: Created complex glowing orbs (`filter: blur()`), looping SVG squiggly lines with `stroke-dashoffset` drawing animations, and rotated CSS shapes to give depth to the background.

## 📂 File Structure

```text
elementum-app/
├── public/                 # Static assets (images, favicons)
│   ├── avatars.png         # Team collage image
│   ├── meeting.png         # Feature One image
│   └── ...                 
├── src/                    
│   ├── components/         # Modular UI Components
│   │   ├── FeatureOne.jsx  # "Tomorrow should be better" section
│   │   ├── FeatureOne.css
│   │   ├── FeatureTwo.jsx  # "See how we can help" section
│   │   ├── FeatureTwo.css
│   │   ├── Footer.jsx      # Multi-column footer
│   │   ├── Footer.css
│   │   ├── Hero.jsx        # Top banner with drawing animations
│   │   ├── Hero.css
│   │   ├── Navbar.jsx      # Top navigation
│   │   ├── Navbar.css
│   │   ├── Newsletter.jsx  # Subscribe section
│   │   ├── Newsletter.css
│   │   ├── Offerings.jsx   # List of services with dynamic sliding
│   │   ├── Offerings.css
│   │   ├── Testimonials.jsx# Quotes and floating avatar groups
│   │   └── Testimonials.css
│   ├── App.jsx             # Root component & IntersectionObserver logic
│   ├── App.css             
│   ├── index.css           # Global styles, variables, utility classes
│   └── main.jsx            # React mounting point
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
└── vite.config.js          # Vite build configuration
```

## 💻 Getting Started

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/pranaygour30-wq/trams.git
   ```
2. Navigate into the directory:
   ```bash
   cd elementum-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
