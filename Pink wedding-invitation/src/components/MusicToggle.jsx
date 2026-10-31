import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function MusicToggle({ audioRef, isPlaying, onToggle }) {
  return (
    <button
      type="button"
      className={`music-toggle ${isPlaying ? 'playing' : ''}`}
      onClick={onToggle}
      aria-label={isPlaying ? 'Mute Music' : 'Play Music'}
      title={isPlaying ? 'Pause Music' : 'Play Music'}
    >
      {isPlaying ? (
        <Volume2 className="music-icon-svg" size={22} />
      ) : (
        <VolumeX className="music-icon-svg" size={22} />
      )}
    </button>
  );
}

