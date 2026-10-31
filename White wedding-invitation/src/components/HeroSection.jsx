import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection({ data }) {
  const groomName = data.groom.name;
  const brideName = data.bride.name;

  return (
    <section
      id="eternal-duas-main"
      className="relative z-20 w-full aspect-[9/16] max-w-[480px] mx-auto flex flex-col items-center justify-start pt-20 sm:pt-24 bg-[#F9F0E0] overflow-hidden shadow-2xl"
    >
      {/* Background Video */}
      <video
        src={data.media.heroVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Hero Content Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="relative z-20 flex flex-col items-center justify-center px-6 text-center text-[#806b43] mt-[85px] sm:mt-[100px] w-full hero-crisp-text"
      >
        <div className="flex flex-col items-center mb-6">
          {/* Invitation Title */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="whitespace-pre-line gld-cinzel text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-[#806b43] mb-2 leading-relaxed max-w-[200px] font-bold"
          >
            {data.inviteTitle}
          </motion.p>

          {/* Couple Names */}
          <div className="flex flex-col items-center mt-2 relative w-full gap-1.5 md:gap-2">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="flex flex-col items-center"
            >
              <span className="gld-script text-[36px] sm:text-[44px] md:text-[48px] leading-tight drop-shadow-sm text-center">
                {data.swapNames ? brideName : groomName}
              </span>
              {(data.swapNames ? data.bride.arabicName : data.groom.arabicName) && (
                <span dir="rtl" className="font-arabic text-xl sm:text-2xl text-[#806b43] opacity-90 leading-tight mt-0.5">
                  {data.swapNames ? data.bride.arabicName : data.groom.arabicName}
                </span>
              )}
            </motion.div>

            <motion.span
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 1.1 }}
              className="gld-script text-[22px] sm:text-[26px] opacity-80 leading-none"
            >
              &amp;
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.4 }}
              className="flex flex-col items-center"
            >
              <span className="gld-script text-[36px] sm:text-[44px] md:text-[48px] leading-tight drop-shadow-sm text-center">
                {data.swapNames ? groomName : brideName}
              </span>
              {(data.swapNames ? data.groom.arabicName : data.bride.arabicName) && (
                <span dir="rtl" className="font-arabic text-xl sm:text-2xl text-[#806b43] opacity-90 leading-tight mt-0.5">
                  {data.swapNames ? data.groom.arabicName : data.bride.arabicName}
                </span>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute -bottom-1 w-full h-24 md:h-28 bg-gradient-to-t from-[#F9F0E0] via-[#F9F0E0]/85 to-transparent z-10 pointer-events-none" />

      {/* Swaying Golden Flower Corners */}
      <motion.div
        className="absolute -bottom-[3%] -left-[8%] w-[48%] z-30 pointer-events-none"
        animate={{ rotate: [-2, 2, -2], scale: [1, 1.03, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: 'bottom right' }}
      >
        <img
          src={data.media.flowerCorner2}
          alt="Golden flower decoration"
          className="w-full h-auto object-contain"
        />
      </motion.div>

      <motion.div
        className="absolute -bottom-[3%] -right-[8%] w-[48%] z-30 pointer-events-none"
        animate={{ rotate: [2, -2, 2], scale: [1, 1.03, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: 'bottom left' }}
      >
        <img
          src={data.media.flowerCorner2}
          alt="Golden flower decoration"
          className="w-full h-auto object-contain scale-x-[-1]"
        />
      </motion.div>
    </section>
  );
}

