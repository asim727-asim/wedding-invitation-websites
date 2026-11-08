import React, { useState, useEffect } from 'react';
import { weddingData } from '../data/weddingData';

export default function CountdownTimer({ show }) {
  const { scratchSection } = weddingData;
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const targetTime = new Date(scratchSection.countdownTarget).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days < 10 ? `0${days}` : String(days),
        hours: hours < 10 ? `0${hours}` : String(hours),
        minutes: minutes < 10 ? `0${minutes}` : String(minutes),
        seconds: seconds < 10 ? `0${seconds}` : String(seconds)
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [scratchSection.countdownTarget]);

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
              <span className="event-badge-label">{evt.heading || evt.title}</span>
              {(evt.name || evt.eventName) && (
                <span className="event-badge-name">{evt.name || evt.eventName}</span>
              )}
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

      <div className="timer">
        <div className="time-block">
          <span>{timeLeft.days}</span>
          <p>DAYS</p>
        </div>
        <div className="time-block">
          <span>{timeLeft.hours}</span>
          <p>HOURS</p>
        </div>
        <div className="time-block">
          <span>{timeLeft.minutes}</span>
          <p>MINUTES</p>
        </div>
        <div className="time-block">
          <span>{timeLeft.seconds}</span>
          <p>SECS</p>
        </div>
      </div>
    </div>
  );
}

