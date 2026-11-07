import React, { useEffect } from 'react';
import { weddingData } from '../data/weddingData';

export default function CountdownTimer({ show }) {
  const { scratchSection } = weddingData;

  useEffect(() => {
    if (show) {
      const el = document.getElementById('hiddenCountdown');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [show]);

  return (
    <div id="hiddenCountdown" className={`hidden-countdown ${show ? 'show' : ''}`}>
      {scratchSection.eventsSummary && (
        <div className="scratch-events-summary">
          {scratchSection.eventsSummary.map((evt, idx) => (
            <div key={idx} className="scratch-event-card">
              <span className="event-badge-label">{evt.title}</span>
              <span className="event-badge-date">{evt.date}</span>
              <span className="event-badge-time">{evt.time}</span>
            </div>
          ))}
        </div>
      )}

      <p className="countdown-eyebrow">
        SAVE THE DATE
      </p>

      <h2 className="countdown-date">
        {scratchSection.countdownDisplayDate}
      </h2>
    </div>
  );
}

