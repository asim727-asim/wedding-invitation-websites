import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MusicController({ isPlaying, togglePlay }) {
  return (
    <motion.button
      type="button"
      onClick={togglePlay}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      aria-label={isPlaying ? 'Mute Music' : 'Play Music'}
      className="fixed top-5 right-5 z-[999] w-12 h-12 bg-[#F9F0E0]/85 hover:bg-[#F9F0E0] backdrop-blur-md border border-[#806b43]/35 rounded-full flex items-center justify-center shadow-lg transition-colors cursor-pointer group"
    >
      {isPlaying ? (
        <Volume2 className="h-5 w-5 text-[#806b43] group-hover:scale-110 transition-transform" />
      ) : (
        <VolumeX className="h-5 w-5 text-[#806b43]/70 group-hover:scale-110 transition-transform" />
      )}

      {/* Subtle pulsing indicator ring when playing */}
      {isPlaying && (
        <span className="absolute inset-0 rounded-full border border-[#806b43]/40 animate-ping pointer-events-none opacity-40" />
      )}
    </motion.button>
  );
}

