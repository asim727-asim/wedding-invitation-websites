import React from 'react';
import RevealSection from './RevealSection';

export default function LoveMessageSection({ message }) {
  return (
    <RevealSection
      title="love"
      className="border border-[rgba(201,164,90,0.4)] shadow-[0_8px_30px_rgba(139,26,26,0.06)] relative overflow-hidden"
    >
      {/* Golden Highlight Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c9a45a] to-transparent opacity-60" />

      {/* Ornate quotation mark */}
      <span className="font-eb text-[80px] leading-[0.6] text-[rgba(155,32,32,0.18)] block mb-1.5 text-center animate-pulse-gentle select-none">
        “
      </span>

      {/* Main Quote */}
      <p className="font-eb italic text-[20px] sm:text-[22px] text-[#4a1a10] leading-[1.8] text-center relative z-10 px-2">
        {message}
      </p>
    </RevealSection>
  );
}

