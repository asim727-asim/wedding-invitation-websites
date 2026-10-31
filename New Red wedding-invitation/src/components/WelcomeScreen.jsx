import React, { useState } from 'react';

export default function WelcomeScreen({ onOpen, coupleNames = "Asim & Farheen" }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 700);
  };

  return (
    <div
      className={`fixed inset-0 z-[10000] flex items-center justify-center bg-[#0a0202]/90 backdrop-blur-md transition-all duration-700 ${
        isOpening ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Smartphone-sized Welcome Frame */}
      <div className="relative w-full max-w-[430px] h-full min-h-screen sm:min-h-[92vh] sm:max-h-[900px] sm:rounded-[36px] overflow-hidden bg-gradient-to-b from-[#1a0808] via-[#2d0f0f] to-[#120404] sm:border sm:border-[rgba(201,164,90,0.35)] sm:shadow-[0_0_80px_rgba(0,0,0,0.95)] flex flex-col items-center justify-center p-6 text-center">
        {/* Decorative Golden Border Frame inside Phone */}
        <div className="absolute inset-4 sm:inset-6 border border-[rgba(201,164,90,0.3)] pointer-events-none rounded-[16px] flex flex-col justify-between p-3">
          <div className="flex justify-between text-[#c9a45a] text-xs opacity-70">
            <span>✤</span>
            <span>✤</span>
          </div>
          <div className="flex justify-between text-[#c9a45a] text-xs opacity-70">
            <span>✤</span>
            <span>✤</span>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-[360px]">
          {/* Calligraphic Bismillah */}
          <img
            src="/images/bismi.png"
            alt="Bismillah"
            className="w-[180px] sm:w-[200px] h-auto invert brightness-200 opacity-90 mb-6 drop-shadow"
          />

          {/* Subtitle */}
          <div className="font-cinzel text-[11px] sm:text-[12px] tracking-[4px] uppercase text-[#e6ca85] mb-2 font-medium">
            The Wedding Celebration Of
          </div>

          {/* Couple Names Graphic */}
          <img
            src="/images/First Page Names Font.png"
            alt={coupleNames}
            className="w-[85%] max-w-[280px] h-auto my-3 filter invert brightness-125 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          />

          <p className="font-eb italic text-[16px] text-[#f8eeda] leading-relaxed my-5 opacity-90">
            With joy in our hearts, we invite you to be part of our special day.
          </p>

          {/* Open Invitation Action Button */}
          <button
            onClick={handleOpen}
            className="group relative mt-2 px-8 py-3.5 bg-gradient-to-r from-[#8b1a1a] via-[#a01c1c] to-[#8b1a1a] text-[#f8eeda] font-cinzel text-[12px] tracking-[3px] uppercase rounded-full border border-[#c9a45a] shadow-[0_4px_25px_rgba(201,164,90,0.35)] hover:shadow-[0_6px_30px_rgba(201,164,90,0.5)] active:scale-95 transition-all duration-300 cursor-pointer flex items-center gap-3"
          >
            <span className="w-2 h-2 rounded-full bg-[#c9a45a] animate-ping" />
            <span>Open Invitation</span>
            <span className="text-[#c9a45a] group-hover:translate-x-1 transition-transform">→</span>
          </button>

          <span className="font-cinzel text-[9px] tracking-[2px] text-[#c9a45a]/70 uppercase mt-4">
            ♪ Music plays on entry
          </span>
        </div>
      </div>
    </div>
  );
}
