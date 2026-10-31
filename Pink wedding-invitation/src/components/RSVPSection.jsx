import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { weddingData } from '../data/weddingData';

export default function RSVPSection() {
  const { rsvp } = weddingData;
  const [rsvpMessage, setRsvpMessage] = useState('');
  const [animationClass, setAnimationClass] = useState('');

  const handleYes = () => {
    setRsvpMessage(rsvp.yesMessage);
    setAnimationClass('happy');
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#e5a0ae', '#f3b6c3', '#ff758c', '#ffffff']
    });
    setTimeout(() => setAnimationClass(''), 600);
  };

  const handleNo = () => {
    setRsvpMessage(rsvp.noMessage);
    setAnimationClass('sad');
    setTimeout(() => setAnimationClass(''), 500);
  };

  return (
    <section className="rsvp-section">
      <div className="rsvp-container scroll-animate">
        <h3 className="rsvp-title">{rsvp.title}</h3>
        <p className="rsvp-sub">{rsvp.subtitle}</p>

        <div className="rsvp-buttons">
          <button
            type="button"
            id="yesBtn"
            className={`rsvp-btn yes ${animationClass === 'happy' ? 'happy' : ''}`}
            onClick={handleYes}
          >
            {rsvp.yesButtonText}
          </button>

          <button
            type="button"
            id="noBtn"
            className={`rsvp-btn no ${animationClass === 'sad' ? 'sad' : ''}`}
            onClick={handleNo}
          >
            {rsvp.noButtonText}
          </button>
        </div>

        <p
          id="rsvpMessage"
          className="rsvp-message"
          style={{ opacity: rsvpMessage ? 1 : 0 }}
        >
          {rsvpMessage}
        </p>
      </div>
    </section>
  );
}

