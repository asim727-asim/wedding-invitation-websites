import React from 'react';
import RevealSection from './RevealSection';

export default function ThankYouSection({ messages, credits }) {
  return (
    <div className="w-full flex flex-col items-center">
      <RevealSection title="GRATITUDE">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-[rgba(139,26,26,0.1)] border border-[rgba(201,164,90,0.4)] flex items-center justify-center text-[#8b1a1a] text-xl mb-3">
            ❤
          </div>
          <h3 className="font-cinzel text-[13px] tracking-[3px] uppercase text-[#6b2c1a] font-semibold mb-2">
            {messages.thankYouHeader || "With Heartfelt Gratitude"}
          </h3>
          <p className="font-eb italic text-[16px] text-[#4a1a10] leading-relaxed max-w-[420px]">
            We cannot wait to celebrate this monumental day with our dearest family and friends. Thank you for your continued love, prayers, and blessings.
          </p>
          <div className="mt-4 font-calligraphy text-[30px] text-[#8b1a1a]">
            {messages.thankYouSub || "Shah Newaz & Jannatul Naima"}
          </div>
        </div>
      </RevealSection>

      {/* Developer Attribution Button */}
      {credits && (
        <a
          href={credits.link || "https://instagram.com/awesome__creation"}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[90%] max-w-[350px] bg-[rgba(139,26,26,0.9)] hover:bg-[rgba(122,21,21,0.98)] border border-[rgba(201,164,90,0.5)] text-[#f8f0e0] py-3.5 text-center font-cinzel text-[10px] tracking-[2px] rounded-[14px] shadow-[0_4px_15px_rgba(0,0,0,0.3)] no-underline transition-all duration-300 mt-6 mb-10 active:scale-98"
        >
          {credits.text || "DEVELOPED BY AWESOME CREATION"}
        </a>
      )}
    </div>
  );
}

