import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const avatars = [
    { src: "https://i.pravatar.cc/150?img=11", className: "t-avatar-1" },
    { src: "https://i.pravatar.cc/150?img=15", className: "t-avatar-2" },
    { src: "https://i.pravatar.cc/150?img=33", className: "t-avatar-3" },
    { src: "https://i.pravatar.cc/150?img=47", className: "t-avatar-4" },
    { src: "https://i.pravatar.cc/150?img=59", className: "t-avatar-5" },
    { src: "https://i.pravatar.cc/150?img=68", className: "t-avatar-6" },
  ];

  return (
    <section className="testimonials container">
      <div className="testimonials-header">
        <h2>
          <span className="highlight-green">What</span> our customer<br />
          says <span className="underline-orange">About Us</span>
        </h2>
      </div>

      <div className="testimonials-content">
        <div className="quote-box reveal scale-up">
          <span className="quote-mark left">“</span>
          <p>
            Elementum delivered the site with inthe timeline
            as they requested. Inthe end, the client found a 50%
            increase in traffic with in days since its launch. They
            also had an impressive ability to use technologies that
            the company hasn't used, which have also proved to
            be easy to use and reliable
          </p>
          <span className="quote-mark right">”</span>
        </div>
        
        {/* Grouped Floating Avatars */}
        <div className="t-avatar-group left-group reveal slide-in-left delay-2">
          <img src="/testimonials-left.png" alt="Customers" />
        </div>
        <div className="t-avatar-group right-group reveal slide-in-right delay-2">
          <img src="/testimonials-right.png" alt="Customers" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
