import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import ScratchCard from './ScratchCard';
import CountdownTimer from './CountdownTimer';
import { weddingData } from '../data/weddingData';

export default function ScratchSection() {
  const { scratchSection } = weddingData;
  const [scratchedCount, setScratchedCount] = useState(0);
  const [showCountdown, setShowCountdown] = useState(false);
  const [revealIndex, setRevealIndex] = useState(-1);

  const handleCardComplete = () => {
    setScratchedCount((prev) => {
      const next = prev + 1;
      if (next >= scratchSection.cards.length) {
        setShowCountdown(true);
        confetti({
          particleCount: 300,
          spread: 180,
          startVelocity: 45,
          origin: { y: 0.6 }
        });
      }
      return next;
    });
  };

  const handleRevealAll = () => {
    if (revealIndex >= 0) return;
    setRevealIndex(0);
    setTimeout(() => setRevealIndex(1), 300);
    setTimeout(() => setRevealIndex(2), 600);
  };

  return (
    <section className="scratch-section">
      <video
        src={scratchSection.backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
        className="bg-video"
      />

      <div className="content-wrapper">
        <p className="premium-font stagger-anim delay-1" style={{ fontSize: '1.35rem' }}>
          Scratch all three circles
        </p>

        <div className="reveal-btn-container stagger-anim delay-2">
          <button
            type="button"
            className="premium-reveal-btn"
            onClick={handleRevealAll}
            disabled={scratchedCount >= scratchSection.cards.length}
          >
            <Sparkles className="btn-icon" size={18} />
            {scratchSection.revealButtonText}
          </button>
        </div>

        <p className="stagger-anim delay-3 discover-text">
          {scratchSection.discoverSubtitle}
        </p>

        <div className="heart-scratch-container stagger-anim delay-4">
          {scratchSection.cards.map((card, idx) => (
            <ScratchCard
              key={card.id}
              title={card.title}
              onComplete={handleCardComplete}
              forceReveal={revealIndex >= idx}
            />
          ))}
        </div>

        <CountdownTimer show={showCountdown} />
      </div>
    </section>
  );
}

