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
      <p
        className="premium-font bismillah"
        style={{
          marginBottom: '10px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          fontSize: '0.85rem',
          color: '#c43360',
          fontWeight: '700'
        }}
      >
        {scratchSection.headerTitle}
      </p>

      <h2
        className="couple-names countdown-date"
        style={{
          margin: '10px 0 30px 0',
          fontSize: '2.2rem',
          fontFamily: "'Cormorant Garamond', serif",
          color: '#33252a'
        }}
      >
        {scratchSection.countdownDisplayDate}
      </h2>

      <div className="timer">
        <div className="time-block">
          <span>{timeLeft.days}</span>
          <p>Days</p>
        </div>
        <div className="time-block">
          <span>{timeLeft.hours}</span>
          <p>Hours</p>
        </div>
        <div className="time-block">
          <span>{timeLeft.minutes}</span>
          <p>Minutes</p>
        </div>
        <div className="time-block">
          <span>{timeLeft.seconds}</span>
          <p>Secs</p>
        </div>
      </div>
    </div>
  );
}

