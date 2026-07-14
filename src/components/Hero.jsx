import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero container">
      {/* Decorative SVG Left */}
      <div className="hero-decor-left">
        <svg width="250" height="600" viewBox="0 0 250 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="draw-line-pink" d="M-50,80 C100,120 150,200 50,300 C-50,400 -50,480 0,550 C30,590 80,600 120,600" stroke="#ff8da1" strokeWidth="6" strokeLinecap="round" fill="none" />
          <path className="draw-line-black" d="M10,120 C150,150 200,250 80,350 C-20,430 -20,520 20,580 C50,620 100,630 150,630" stroke="#111" strokeWidth="6" strokeLinecap="round" fill="none" />
        </svg>
      </div>
      
      {/* Decorative Right */}
      <div className="hero-decor-right">
        <div className="purple-half-circle"></div>
      </div>

      {/* Decorative Glow */}
      <div className="hero-accent-blur"></div>

      <div className="hero-content reveal slide-in-left">
        <h1 className="hero-title">
          The <span className="underline-orange">thinkers</span> and<br />
          doers were <span className="highlight-pink">changing</span><br />
          the <span className="highlight-green">status Quo</span> with
        </h1>
        <p className="hero-subtitle">
          We are a team of strategists, designers communicators, researchers. Togeather,<br />
          we belive that progress only hghappens when you refuse to play things safe.
        </p>
      </div>

      <div className="hero-collage reveal scale-up delay-2">
        <img src="/avatars.png" alt="Team collage" className="avatars-image" />
      </div>
    </section>
  );
};

export default Hero;
