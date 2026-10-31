import React from 'react';
import RevealSection from './RevealSection';

export default function VenueSection({ venue }) {
  return (
    <RevealSection title="Join Us At">
      {/* Venue Name */}
      <div className="font-cormorant italic text-[clamp(28px,8vw,36px)] text-[#3d1208] text-center leading-snug mb-1.5 font-semibold">
        {venue.name || "Moryna Wedding Hall"}
      </div>

      {/* Street Address */}
      <div className="font-cinzel text-[11px] font-semibold tracking-[2px] text-[#1a1a1a] text-center uppercase mb-4">
        {venue.addressLine1 || "Al Saba St, Ain zara Tripoli"}
      </div>

      {/* Embedded Google Map */}
      <div className="w-full rounded-[14px] overflow-hidden h-[190px] mb-3.5 border border-[rgba(201,164,90,0.3)] shadow-sm">
        <iframe
          src={venue.embedMapUrl}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Venue Location Map"
          className="w-full h-full border-none block"
        />
      </div>

      {/* Directions External Action Card */}
      <a
        className="flex items-center justify-between bg-[#fff8f0] border border-[rgba(180,140,110,0.3)] hover:border-[#c9a45a] hover:bg-[#fffcf7] rounded-[14px] py-3.5 px-4 w-full cursor-pointer no-underline transition-all duration-300 shadow-sm active:scale-98"
        href={venue.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="text-left">
          <div className="font-cormorant text-[16px] text-[#1a1a1a] font-semibold">
            {venue.name}
          </div>
          <div className="font-cinzel text-[9px] text-[#9b6050] mt-0.5 tracking-wider">
            {venue.addressLine1}
          </div>
        </div>

        <div className="bg-[#8b1a1a] hover:bg-[#a01c1c] text-white font-cinzel text-[10px] tracking-[1.5px] py-2.5 px-4 rounded-[10px] whitespace-nowrap shrink-0 ml-3 shadow-md transition-colors">
          {venue.buttonText || "Directions →"}
        </div>
      </a>
    </RevealSection>
  );
}

