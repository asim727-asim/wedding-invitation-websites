import React from 'react';
import RevealSection from './RevealSection';

export default function OurStorySection({ quranVerse, couplePhoto }) {
  return (
    <RevealSection title="OUR STORY" noDefaultStyles className="flex flex-col items-center w-full">
      {/* Archival Arch / Dome Picture Frame */}
      <div className="relative w-[80%] max-w-[280px] aspect-[4/5] rounded-[120px_120px_10px_10px] overflow-hidden p-1.5 bg-[#f8f0e0] border border-[rgba(201,164,90,0.6)] mb-6 shadow-[0_10px_25px_rgba(90,46,26,0.15)] animate-float">
        <img
          src={couplePhoto}
          alt="Shah & Naima"
          className="w-full h-full object-cover rounded-[115px_115px_8px_8px]"
          loading="lazy"
        />
      </div>

      {/* Glassmorphism Holy Scripture Card */}
      <div className="bg-[rgba(248,240,224,0.95)] backdrop-blur-md rounded-[20px] py-7 px-5 sm:px-6 w-full shadow-sm border border-[rgba(201,164,90,0.3)] relative">
        {/* Floating Ruby Diamond Badge */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#f8f0e0] border border-[#c9a45a] rounded-full p-1.5 shadow-sm">
          <div className="w-2.5 h-2.5 bg-[#9b2020] rotate-45" />
        </div>

        <div className="text-center mt-5 px-2 sm:px-4">
          {/* Sacred Arabic Ayat */}
          <p
            dir="rtl"
            className="text-[25px] sm:text-[30px] text-[#6b3020] leading-[2.1] text-center font-normal tracking-wide"
            style={{ fontFamily: "'Amiri', 'Traditional Arabic', serif" }}
          >
            {quranVerse.arabic}
          </p>

          {/* Translation */}
          <p className="font-eb italic text-[17px] sm:text-[18px] text-[#4a1a10] leading-[1.8] mt-5 max-w-[700px] mx-auto">
            {quranVerse.translation}
          </p>

          {/* Citation */}
          <p className="font-cinzel text-[11px] tracking-[3px] uppercase text-[#8b6b3e] mt-4 font-semibold">
            {quranVerse.reference}
          </p>
        </div>
      </div>
    </RevealSection>
  );
}

