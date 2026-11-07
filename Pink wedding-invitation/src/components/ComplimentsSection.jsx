import React from 'react';
import { weddingData } from '../data/weddingData';

export default function ComplimentsSection() {
  const { closingMessage } = weddingData;

  return (
    <section className="closing-message-section compliments-section">
      <div className="closing-message-container compliments-container scroll-animate">
        {/* Section Heading */}
        <div className="closing-header">
          <span className="closing-line" />
          <h2 className="closing-title">{closingMessage.heading}</h2>
          <span className="closing-line" />
        </div>

        {/* Decorative Ornament */}
        <div className="closing-ornament" aria-hidden="true">❧</div>

        {/* Main Message Paragraphs */}
        <div className="closing-body">
          {closingMessage.paragraphs.map((paragraph, index) => (
            <p key={index} className="closing-paragraph">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Subtle Decorative Divider */}
        <div className="closing-divider" aria-hidden="true">
          <span className="divider-line" />
          <span className="divider-icon">✦</span>
          <span className="divider-line" />
        </div>

        {/* With Love and Blessings */}
        <div className="closing-signoff">
          <p className="closing-love-note">{closingMessage.loveNote}</p>
          <p className="closing-couple-names">{closingMessage.coupleNames}</p>
        </div>

        {/* Together with our families */}
        <div className="closing-family">
          <p className="closing-family-note">{closingMessage.familyNote}</p>
          <p className="closing-parents-names">{closingMessage.parentsNames}</p>
        </div>

        {/* Closing Dua */}
        <div className="closing-dua-wrapper">
          <p className="closing-dua">{closingMessage.closingDua}</p>
        </div>
      </div>
    </section>
  );
}
