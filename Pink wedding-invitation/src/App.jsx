import React, { useState, useRef, useEffect, useCallback } from 'react';
import HeroSection from './components/HeroSection';
import DetailsSection from './components/DetailsSection';
import ScratchSection from './components/ScratchSection';
import EventsSection from './components/EventsSection';
import ComplimentsSection from './components/ComplimentsSection';
import ThankYouSection from './components/ThankYouSection';
import MusicToggle from './components/MusicToggle';
import FloatingHearts from './components/FloatingHearts';
import { weddingData } from './data/weddingData';

export default function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);
  const curtainVideoRef = useRef(null);

  // Ensure vertical side scroll up and down is always enabled
  useEffect(() => {
    document.documentElement.style.overflowY = 'auto';
    document.body.style.overflowY = 'auto';
    document.body.style.overflowX = 'hidden';
  }, []);

  // Handle invitation start (tap to open)
  const handleStart = useCallback(() => {
    setHasStarted(true);

    // Play curtain video
    if (curtainVideoRef.current) {
      curtainVideoRef.current.muted = true;
      curtainVideoRef.current.play().catch((err) => {
        console.warn('Video playback notice:', err);
      });
    }

    // Play audio
    const audio = audioRef.current;
    if (audio) {
      audio.muted = false;
      audio.volume = weddingData.music.initialVolume;
      audio.currentTime = 0;

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.warn('Autoplay restricted by browser, waiting for user gesture:', err);
            // One-time retry on next touch/click
            const retryPlay = () => {
              if (audioRef.current) {
                audioRef.current.muted = false;
                audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
              }
              window.removeEventListener('touchstart', retryPlay);
              window.removeEventListener('click', retryPlay);
            };
            window.addEventListener('touchstart', retryPlay, { once: true });
            window.addEventListener('click', retryPlay, { once: true });
          });
      }
    }
  }, []);

  // Monitor curtain video playback time to reveal names only after curtains fully open
  const handleVideoTimeUpdate = () => {
    const video = curtainVideoRef.current;
    if (video && video.currentTime >= 3.0 && !isRevealed) {
      setIsRevealed(true);
      document.body.style.overflow = 'auto';
    }
  };

  // Toggle background music
  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch((err) => {
        console.error('Audio play error:', err);
      });
    }
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const animatedElements = document.querySelectorAll('.scroll-animate, .stagger-anim');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Background Audio */}
      <audio
        ref={audioRef}
        id="bgMusic"
        loop={weddingData.music.loop}
        preload="auto"
        src={weddingData.music.src}
      />

      {/* Floating Interactive Micro-animations */}
      <FloatingHearts />

      {/* Floating Music Toggle */}
      <MusicToggle
        audioRef={audioRef}
        isPlaying={isPlaying}
        onToggle={toggleMusic}
      />

      {/* Hero / Welcome Screen */}
      <HeroSection
        videoRef={curtainVideoRef}
        hasStarted={hasStarted}
        isRevealed={isRevealed}
        onStart={handleStart}
        onTimeUpdate={handleVideoTimeUpdate}
      />

      {/* Couple Introduction & Details */}
      <DetailsSection />

      {/* Interactive Scratch-to-Reveal & Countdown */}
      <ScratchSection />

      {/* Wedding Events & Venues with Google Maps */}
      <EventsSection />

      {/* Lower Combined Section (Compliments, Thank You) */}
      <div
        className="lower-sections-wrapper"
        style={{
          backgroundImage: `linear-gradient(to bottom, #fffbf7 0%, rgba(255, 255, 255, 0.65) 120px, rgba(255, 255, 255, 0.65) 100%), url(${weddingData.lowerSectionBg})`
        }}
      >
        <ComplimentsSection />
        <ThankYouSection />
      </div>

      {/* SVG Clip Path for Heart Scratch Cards */}
      <svg width="0" height="0" style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <clipPath id="heart-clip" clipPathUnits="objectBoundingBox">
            <path d="M0.5,0.21 C0.5,0.21 0.43,0.06 0.28,0.06 C0.12,0.06 0,0.2 0,0.39 C0,0.64 0.28,0.83 0.5,0.94 C0.72,0.83 1,0.64 1,0.39 C1,0.2 0.88,0.06 0.72,0.06 C0.57,0.06 0.5,0.21 0.5,0.21 Z" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}

