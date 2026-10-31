import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EnvelopeUnbox({
  data,
  onStart,
  onComplete,
  videoSrc = '/videos/EnvelopeOpeningWithGoldenLight.mp4'
}) {
  const videoRef = useRef(null);
  const [unboxState, setUnboxState] = useState('back'); // 'back' | 'opening' | 'revealed'
  const isCompletedRef = useRef(false);

  const groomInitial = data?.groom?.name ? data.groom.name.charAt(0).toUpperCase() : 'A';
  const brideInitial = data?.bride?.name ? data.bride.name.charAt(0).toUpperCase() : 'A';

  const finishUnbox = () => {
    if (!isCompletedRef.current) {
      isCompletedRef.current = true;
      if (videoRef.current) {
        videoRef.current.pause();
      }
      setUnboxState('revealed');
      if (onComplete) onComplete();
    }
  };

  const handleOpen = () => {
    if (unboxState !== 'back') return;
    setUnboxState('opening');
    if (onStart) onStart();

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((err) => {
        console.log('Video autoplay error:', err);
      });
    }
  };

  useEffect(() => {
    // Fallback timer in case video fails or gets stuck
    if (unboxState === 'opening') {
      const timer = setTimeout(() => {
        finishUnbox();
      }, 5500);
      return () => clearTimeout(timer);
    }
  }, [unboxState]);

  if (unboxState === 'revealed') return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#F9F0E0] overflow-hidden"
    >
      <div
        className="relative w-full max-w-[430px] h-full overflow-hidden shadow-2xl bg-[#F9F0E0] cursor-pointer"
        onClick={unboxState === 'back' ? handleOpen : undefined}
      >
        {/* Unboxing Video */}
        <div className="absolute inset-0 w-full h-full z-10 bg-[#F9F0E0]">
          <video
            ref={videoRef}
            src={`${videoSrc}#t=0.001`}
            className="w-full h-full object-cover pointer-events-none"
            playsInline
            preload="auto"
            muted={false}
            onTimeUpdate={() => {
              if (!videoRef.current || isCompletedRef.current) return;
              const { currentTime, duration } = videoRef.current;
              if (duration > 0 && currentTime >= duration - 0.3) {
                finishUnbox();
              }
            }}
            onEnded={finishUnbox}
          />
        </div>

        {/* Skip Button */}
        <motion.button
          type="button"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          onClick={(e) => {
            e.stopPropagation();
            finishUnbox();
          }}
          className="absolute top-6 right-6 z-[100] px-4 py-1.5 bg-black/30 hover:bg-black/50 backdrop-blur-md border border-white/30 rounded-full text-white text-xs font-medium tracking-[0.2em] uppercase transition-all shadow-md active:scale-95"
        >
          Skip
        </motion.button>

        {/* Tap to Open Prompt */}
        <AnimatePresence>
          {unboxState === 'back' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.4 } }}
              className="absolute inset-0 z-30 flex flex-col items-center pointer-events-none"
            >
              <motion.div
                className="absolute z-40 inset-x-0 flex flex-col items-center gap-[7px]"
                style={{ top: '34%' }}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <motion.span
                  className="gld-cinzel text-[11px] uppercase whitespace-nowrap font-semibold"
                  style={{ color: 'rgba(140, 100, 60, 0.85)', letterSpacing: '0.26em' }}
                  animate={{ opacity: [0.45, 1, 0.45] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  Tap to open
                </motion.span>
                <motion.div
                  style={{
                    width: 10,
                    height: 10,
                    borderRight: '1.5px solid rgba(140, 100, 60, 0.7)',
                    borderTop: '1.5px solid rgba(140, 100, 60, 0.7)',
                    transform: 'rotate(135deg)'
                  }}
                  animate={{ y: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Monogram Seal Initials */}
        <div
          className="absolute z-50 inset-x-0 flex justify-center pointer-events-none select-none"
          style={{ top: '52.5%', transform: 'translateY(-50%)' }}
        >
          <motion.div
            className="relative inline-flex items-center justify-center text-4xl sm:text-5xl"
            initial={{ scale: 1, opacity: 1 }}
            animate={
              unboxState === 'opening'
                ? { scale: 3.2, opacity: 0 }
                : { scale: 1, opacity: 1 }
            }
            transition={{ duration: 2.6, delay: 2.0, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Background Ampersand */}
            <span
              className="gld-cinzel font-normal absolute inset-0 flex items-center justify-center z-0 -translate-y-[2%]"
              style={{ fontSize: '1.8em', color: '#8B6914', opacity: 0.4 }}
            >
              &amp;
            </span>

            {/* Couple Initials */}
            <span
              className="gld-cinzel font-bold inline-flex items-center justify-center relative z-10 tracking-widest"
              style={{
                color: '#8B6914',
                textShadow:
                  '1px 1px 0px rgba(255, 255, 255, 0.6), -1px -1px 0px rgba(90, 60, 10, 0.7), 0px 4px 6px rgba(218, 165, 32, 0.5)'
              }}
            >
              <span>{groomInitial}</span>
              <span className="mx-2 opacity-0">&amp;</span>
              <span>{brideInitial}</span>
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

