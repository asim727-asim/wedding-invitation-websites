import React from 'react';
import FallingLeaves from './FallingLeaves';

export default function CeremonyPage({ data }) {
  return (
    <section className="page" id="page2">
      {/* Background Image */}
      <img
        className="page-bg"
        src={data.media.ceremonyBg}
        alt="Ceremony Details Background"
      />

      {/* Falling Leaves Canvas */}
      <FallingLeaves containerId="lc2" count={20} />

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6">
        {/* Oriental Geometric Ornament */}
        <div
          className="flex items-center gap-2 mt-3.5 fade-down"
          style={{ animationDelay: '0.5s' }}
        >
          <div className="w-[44px] h-[0.5px] bg-[#c9a45a]" />
          <div className="w-1.5 h-1.5 bg-[#c9a45a] rotate-45" />
          <div className="w-[7px] h-[10px] bg-[#9b1e1e] rounded-[80%_20%_80%_20%] -rotate-30" />
          <div className="w-1.5 h-1.5 bg-[#c9a45a] rotate-45" />
          <div className="w-[7px] h-[10px] bg-[#9b1e1e] rounded-[80%_20%_80%_20%] rotate-30" />
          <div className="w-1.5 h-1.5 bg-[#c9a45a] rotate-45" />
          <div className="w-[44px] h-[0.5px] bg-[#c9a45a]" />
        </div>

        {/* Event Header */}
        <div
          className="font-cinzel text-[11px] font-medium tracking-[5px] text-[#000000] mt-5 fade-up"
          style={{ animationDelay: '0.7s' }}
        >
          {data.event.title || "WEDDING CEREMONY"}
        </div>

        {/* Date Display */}
        <div
          className="font-cormorant italic font-light text-[22px] sm:text-[25px] text-[#9b2020] leading-snug mt-5 fade-up"
          style={{ animationDelay: '1s' }}
        >
          {data.event.dateFormatted || "Friday, 21 August 2026"}
        </div>

        {/* Time Calligraphy */}
        <div
          className="font-calligraphy italic font-light text-[45px] sm:text-[52px] text-[rgb(134,16,25)] leading-none mt-1.5 fade-up"
          style={{ animationDelay: '1.3s' }}
        >
          {data.event.timeFormatted || "6:00 PM"}
        </div>

        {/* Venue Title */}
        <div
          className="font-cormorant italic font-normal text-[clamp(20px,5vw,28px)] text-[rgb(61,10,16)] leading-normal mt-4 fade-up font-semibold"
          style={{ animationDelay: '1.6s' }}
        >
          {data.venue.name || "Moryna Wedding Hall"}
        </div>

        {/* Venue Address */}
        <div
          className="font-cinzel text-[15px] sm:text-[17px] tracking-[1.5px] text-[#7a5040] uppercase mt-2.5 leading-loose fade-up"
          style={{ animationDelay: '1.9s' }}
        >
          {data.venue.addressLine1}
          <br />
          {data.venue.addressLine2}
        </div>
      </div>
    </section>
  );
}

