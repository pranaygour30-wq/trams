import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section className="newsletter container reveal fade-up">
      <div className="newsletter-decor-top">
        <svg width="150" height="80" viewBox="0 0 150 80" fill="none">
          <path d="M0,80 Q50,-20 100,50 T150,0" stroke="#ff5252" strokeWidth="2" fill="none" />
          <path d="M0,60 Q50,-40 100,30 T150,-20" stroke="#ffb74d" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="newsletter-content container">
        <h2>
          Subscribe to<br />
          our newsletter
        </h2>
        <button className="btn-pill subscribe-btn">Subscribe Now</button>
      </div>

      <div className="newsletter-decor-right"></div>
    </section>
  );
};

export default Newsletter;
