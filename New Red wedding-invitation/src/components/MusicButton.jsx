import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

const MusicButton = forwardRef(({ audioSrc }, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const userInteracted = useRef(false);

  // Expose play/pause controls to parent components (e.g., WelcomeScreen)
  useImperativeHandle(ref, () => ({
    startAudio: () => {
      if (audioRef.current) {
        audioRef.current.muted = false;
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.log("Audio play error:", err));
      }
    },
    pauseAudio: () => {
      if (audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  }));

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = false;
    audio.play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        audio.muted = true;
        audio.play()
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      });

    const unlockAudio = () => {
      if (audio && !userInteracted.current) {
        audio.muted = false;
        if (audio.paused) {
          audio.play().then(() => setIsPlaying(true)).catch(() => {});
        } else {
          setIsPlaying(true);
        }
      }
    };

    const events = ['click', 'touchstart', 'touchend', 'pointerdown', 'scroll'];
    events.forEach((evt) => {
      window.addEventListener(evt, unlockAudio, { capture: true, once: true });
      document.addEventListener(evt, unlockAudio, { capture: true, once: true });
    });

    return () => {
      events.forEach((evt) => {
        window.removeEventListener(evt, unlockAudio, true);
        document.removeEventListener(evt, unlockAudio, true);
      });
    };
  }, []);

  const toggleMusic = (e) => {
    e.stopPropagation();
    userInteracted.current = true;
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused || audio.muted) {
      audio.muted = false;
      audio.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Play failed:", err));
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        autoPlay
        playsInline
        preload="auto"
        src={audioSrc}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={audioSrc} type="audio/mpeg" />
      </audio>

      {/* Button anchored to bottom-right of smartphone viewport on both laptop and mobile */}
      <button
        onClick={toggleMusic}
        type="button"
        aria-label={isPlaying ? "Mute music" : "Play music"}
        style={{
          right: 'max(16px, calc((100vw - 430px) / 2 + 16px))'
        }}
        className={`fixed bottom-6 z-[9999] w-12 h-12 bg-[rgba(139,26,26,0.85)] hover:bg-[rgba(155,32,32,0.95)] border border-[#c9a45a] rounded-full flex items-center justify-center cursor-pointer text-[#f8eeda] text-[22px] shadow-lg transition-all duration-300 backdrop-blur-sm active:scale-95 ${
          isPlaying ? 'shadow-[0_0_15px_rgba(201,164,90,0.4)]' : 'opacity-80'
        }`}
      >
        <span className={`relative flex items-center justify-center w-full h-full ${isPlaying ? 'animate-pulse-gentle' : ''}`}>
          ♪
          {!isPlaying && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-[2px] bg-[#f8eeda] -rotate-45 rounded-full shadow-sm" />
          )}
        </span>
      </button>
    </>
  );
});

export default MusicButton;
