import React from 'react';
import './FeatureTwo.css';
import { ArrowRight } from 'lucide-react';

const FeatureTwo = () => {
  return (
    <section className="feature-two container">
      <div className="feature-two-image reveal slide-in-left">
        {/* Decorative elements */}
        <div className="accent-triangle top-left"></div>
        <div className="accent-triangle bottom-right"></div>
        
        <div className="image-wrapper">
          <img src="/feature-two.png" alt="Working together" />
        </div>
      </div>

      <div className="feature-two-content reveal slide-in-right">
        <h2>
          <span className="highlight-green">See</span> how we can<br />
          help you <span className="underline-orange">progress</span>
        </h2>
        <p>
          We are a team that strategically connects everything around you to build a
          better tomorrow. Our program is a unique blend of creativity and technology.
        </p>
        <a href="#read-more" className="read-more-link">
          Read more
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
};

export default FeatureTwo;
