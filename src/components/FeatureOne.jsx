import React from 'react';
import './FeatureOne.css';
import { ArrowRight } from 'lucide-react';

const FeatureOne = () => {
  return (
    <section className="feature-one container">
      <div className="feature-one-content reveal slide-in-left">
        <h2>
          <span className="underline-orange">Tomorrow</span> should<br />
          be better than <span className="highlight-green">today</span>
        </h2>
        <p>
          We are a team that strategically connects everything around you to build a
          better tomorrow. Our program is a unique blend of creativity and technology.
        </p>
        <button className="play-video-btn">
          <div className="play-icon-wrapper">
            <ArrowRight size={16} color="currentColor" />
          </div>
          Read more
        </button>
      </div>

      <div className="feature-one-image reveal slide-in-right">
        {/* Red triangle accent */}
        <div className="accent-triangle"></div>
        {/* Soft pink blur accent behind image */}
        <div className="accent-blur"></div>
        
        <div className="image-wrapper">
          <img src="/meeting.png" alt="Team meeting" />
        </div>
        
        {/* Sweeping pink line */}
        <div className="sweeping-line">
           <svg width="800" height="400" viewBox="0 0 800 400" fill="none">
             <path className="draw-line-pink" d="M-400,200 C-200,300 0,400 200,300 C400,200 600,100 800,200" stroke="#ffb2c1" strokeWidth="3" fill="none" />
           </svg>
        </div>
      </div>
    </section>
  );
};

export default FeatureOne;
