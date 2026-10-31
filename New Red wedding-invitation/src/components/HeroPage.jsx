import React from 'react';
import FallingLeaves from './FallingLeaves';

export default function HeroPage({ data }) {
  return (
    <section className="page" id="page1">
      {/* Background Hero Image */}
      <img
        className="page-bg"
        src={data.media.heroBg}
        alt="Hero Background"
      />

      {/* Procedural Falling Rose Petals */}
      <FallingLeaves containerId="lc1" count={20} />

      {/* Page Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-start pt-[105px] px-9 pb-0 text-center">
        {/* Bismillah Arabic Calligraphy */}
        <img
          src={data.media.bismillah}
          alt="Bismillah"
          className="w-[220px] max-w-[75%] h-auto mix-blend-multiply opacity-90 mb-3 fade-down"
          style={{ animationDelay: '0.4s' }}
        />

        {/* Ceremony Badge */}
        <h1
          className="font-cinzel text-[13.5px] font-medium tracking-[5px] text-[#6b2c1a] border border-[#c9a45a] pt-1.5 px-5 pb-1 bg-[rgba(248,238,218,0.55)] fade-down backdrop-blur-[2px]"
          style={{ animationDelay: '0.7s' }}
        >
          {data.event.badgeText || "WEDDING CEREMONY"}
        </h1>

        {/* Invitation Opening Words */}
        <div
          className="font-eb italic text-[15px] text-[#5a2e1a] text-center leading-loose mt-1.5 fade-up"
          style={{ animationDelay: '1s' }}
        >
          With the blessings of our families, <br />
          we joyfully invite you to celebrate <br />
          the beginning of our forever.
        </div>

        {/* Couple Names Calligraphy Graphic */}
        <img
          src={data.media.namesTypography}
          alt={`${data.groom.fullName} & ${data.bride.fullName}`}
          className="w-[80%] max-w-[300px] h-auto mt-3 fade-up"
          style={{ animationDelay: '1.3s' }}
        />

        {/* Presence Note */}
        <div
          className="font-eb italic text-[15px] text-[#5a2e1a] text-center leading-loose mt-3 fade-up w-full px-4"
          style={{ animationDelay: '1.6s' }}
        >
          Your presence and blessing <br />
          will make this occasion <br />
          even more special.
        </div>
      </div>
    </section>
  );
}

