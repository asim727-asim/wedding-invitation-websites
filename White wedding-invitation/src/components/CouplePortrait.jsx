import React from 'react';
import { motion } from 'framer-motion';

export default function CouplePortrait({ data }) {
  return (
    <section className="relative flex flex-col items-center bg-[#F9F0E0] text-[#806b43] w-full py-8 md:py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="w-full max-w-md mx-auto relative z-10 flex flex-col items-center"
      >
        <div className="w-full max-w-[85%] aspect-[4/5] rounded-[24px] border-[4px] border-[#806b43]/60 overflow-hidden relative shadow-lg bg-[#F9F0E0] group">
          <img
            src={data.couplePhoto}
            alt={`${data.groom.name} & ${data.bride.name}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          {/* Inner subtle decorative border overlay */}
          <div className="absolute inset-2 rounded-[18px] border border-white/25 pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
}

