import React from 'react';
import { Pointer, ChevronDown } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function HeroSection({
  videoRef,
  hasStarted,
  isRevealed,
  onStart,
  onTimeUpdate
}) {
  const { couple, hero } = weddingData;

  return (
    <section className="hero-section">
      <div className="video-container">
        <video
          ref={videoRef}
          id="curtainVideo"
          muted
          playsInline
          preload="auto"
          controlsList="nodownload"
          onContextMenu={(e) => e.preventDefault()}
          onTimeUpdate={onTimeUpdate}
        >
          <source src={hero.videoSrc} type="video/mp4" />
        </video>

        {!hasStarted && (
          <div
            id="playOverlay"
            className="overlay"
            onClick={onStart}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onStart();
              }
            }}
            aria-label="Tap to Open Wedding Invitation"
          >
            <div className="play-button">
              <Pointer className="hand-icon" size={32} />
            </div>
            <p className="tap-text">{hero.openPromptText}</p>
          </div>
        )}

        <div id="textOverlay" className={`text-overlay ${isRevealed ? 'reveal' : ''}`}>
          <h1 className="hero-names-cursive">
            <span className="groom-name">{couple.groom.name}</span>
            <span className="hero-weds">Weds</span>
            <span className="bride-name">{couple.bride.name}</span>
          </h1>
          <img src={hero.ringImage} alt="Wedding Rings" className="ring-image" />
        </div>

        <a
          href="#detailsSection"
          className={`scroll-down-box scroll-down-button ${isRevealed ? 'show' : ''}`}
        >
          <span className="scroll">{hero.scrollDownText}</span>
          <div className="scroll-arrow">
            <ChevronDown size={15} />
          </div>
        </a>
      </div>
    </section>
  );
}

