import React from 'react';
import { motion } from 'framer-motion';

export default function QuranicVerse({ data }) {
  return (
    <section className="relative flex flex-col items-center bg-[#F9F0E0] text-[#806b43] w-full py-10 md:py-14 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md mx-auto flex flex-col items-center space-y-4"
      >
        {/* Arabic Calligraphy */}
        <p className="font-arabic text-2xl sm:text-3xl md:text-4xl leading-relaxed text-[#806b43] font-normal tracking-wide px-2">
          {data.quranicVerse.arabic}
        </p>

        {/* Golden Ornamental Divider */}
        <div className="flex justify-center w-full py-1">
          <img
            src={data.media.divider}
            alt="Divider"
            className="h-[18px] md:h-[22px] object-contain opacity-90 drop-shadow-sm"
          />
        </div>

        {/* Verse Reference */}
        <p className="gld-cinzel text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-[#806b43]/70 font-semibold">
          {data.quranicVerse.reference}
        </p>

        {/* English Translation */}
        <p className="font-sans text-xs md:text-sm text-[#806b43]/85 max-w-[320px] mx-auto italic leading-relaxed">
          "{data.quranicVerse.translation}"
        </p>
      </motion.div>
    </section>
  );
}

