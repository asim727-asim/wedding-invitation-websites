import React from 'react';
import { motion } from 'framer-motion';

export default function ClosingFooter({ data }) {
  return (
    <footer className="relative flex flex-col items-center bg-[#F9F0E0] text-[#806b43] w-full pt-10 pb-20 px-6 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="w-full max-w-md mx-auto flex flex-col items-center space-y-6 relative z-20"
      >
        {/* JazakAllah Khair Blessing */}
        <p className="gld-cinzel text-xs md:text-sm tracking-widest uppercase opacity-85 text-[#806b43] font-semibold max-w-[300px] leading-relaxed">
          {data.closing.message}
        </p>

        {/* Couple Signoff Names */}
        <div className="pt-2 pb-1">
          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center justify-center gld-script text-4xl md:text-5xl text-[#806b43]"
          >
            <span>{data.groom.name}</span>
            <span className="gld-cinzel text-xl opacity-80 my-0.5">&amp;</span>
            <span>{data.bride.name}</span>
          </motion.div>

          <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#806b43]/60 font-bold block mt-3">
            {data.closing.tagline}
          </span>
        </div>

        {/* Small Gold Divider Line */}
        <div className="h-px w-14 bg-[#806b43]/30" />
      </motion.div>

      {/* Swaying Golden Flower Corners at Page Bottom */}
      <motion.div
        className="absolute bottom-2 -left-[8%] w-[45%] z-10 pointer-events-none"
        animate={{ rotate: [-2, 2, -2], scale: [1, 1.03, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: 'bottom right' }}
      >
        <img
          src={data.media.flowerCorner2}
          alt="Flower decoration"
          className="w-full h-auto object-contain"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-2 -right-[8%] w-[45%] z-10 pointer-events-none"
        animate={{ rotate: [2, -2, 2], scale: [1, 1.03, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: 'bottom left' }}
      >
        <img
          src={data.media.flowerCorner2}
          alt="Flower decoration"
          className="w-full h-auto object-contain scale-x-[-1]"
        />
      </motion.div>
    </footer>
  );
}

