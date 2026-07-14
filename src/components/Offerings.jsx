import React from 'react';
import './Offerings.css';
import { ArrowRight } from 'lucide-react';

const Offerings = () => {
  const offerings = [
    {
      subtitle: "Office of multiple\nbrands partner",
      title: "Colaborative & partnership",
      hasGraphic: false
    },
    {
      subtitle: "The range of US Air Base\ndigital environmental",
      title: "We talk about our weight",
      hasGraphic: false
    },
    {
      subtitle: "Build a brand new web\nstudio digital",
      title: "Piloting digital confidence",
      hasGraphic: true
    }
  ];

  return (
    <section className="offerings container">
      <div className="offerings-header reveal fade-up">
        <h2>
          What we <span className="highlight-green">can</span><br />
          <span className="underline-orange">offer</span> you!
        </h2>
      </div>
      
      <div className="offerings-list">
        {offerings.map((item, index) => {
          const animationClass = index % 2 === 0 ? "slide-in-left" : "slide-in-right";
          return (
            <div key={index} className={`offering-item reveal ${animationClass}`}>
              <div className="offering-subtitle">
                {item.subtitle.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}
              </div>
              <div className="offering-title-wrapper">
                <h3 className="offering-title">
                  {item.title}
                  {item.hasGraphic && <div className="multicolor-graphic"></div>}
                </h3>
              </div>
              <div className="offering-arrow">
                <ArrowRight size={24} color="#ccc" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Offerings;
