import React from 'react';
import { weddingData } from '../data/weddingData';

export default function ThankYouSection() {
  const { thankYou } = weddingData;

  return (
    <section className="thankyou-section">
      <div className="thankyou-container scroll-animate">
        <div className="thankyou-card-wrapper">
          <img
            src={thankYou.image}
            alt={thankYou.imageAlt}
            className="thankyou-img"
          />
          <div className="thankyou-card-text">
            <span className="ty-main">{thankYou.mainText}</span>
            <span className="ty-sub">{thankYou.subText}</span>
            <span className="ty-developed">{thankYou.developedBy}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

