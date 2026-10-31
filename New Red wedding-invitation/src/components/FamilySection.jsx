import React from 'react';
import RevealSection from './RevealSection';

export default function FamilySection({ groom, bride, family }) {
  return (
    <RevealSection title={family?.sectionHeading || "Together With Our Families"}>
      <div className="flex flex-col items-center text-center">
        <p className="font-eb italic text-[16px] text-[#4a1a10] leading-relaxed max-w-[480px] mb-4">
          {family?.greeting || "Cordially invite you and your family to grace the occasion with your presence and blessings."}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
          {/* Groom's Family Card */}
          <div className="bg-[#fff8f0] border border-[rgba(180,140,110,0.3)] rounded-[14px] p-4 text-center">
            <span className="font-cinzel text-[9px] tracking-[2px] uppercase text-[#8b6b3e] block font-semibold mb-1">
              Groom's Parents
            </span>
            <div className="font-cormorant italic text-[19px] text-[#8b1a1a] font-semibold">
              {family?.groomParents?.father || "Zahid Ansari"}
            </div>
            <div className="font-cormorant italic text-[17px] text-[#5a2e1a]">
              & {family?.groomParents?.mother || "Sadaf Khan"}
            </div>
          </div>

          {/* Bride's Family Card */}
          <div className="bg-[#fff8f0] border border-[rgba(180,140,110,0.3)] rounded-[14px] p-4 text-center">
            <span className="font-cinzel text-[9px] tracking-[2px] uppercase text-[#8b6b3e] block font-semibold mb-1">
              Bride's Parents
            </span>
            <div className="font-cormorant italic text-[19px] text-[#8b1a1a] font-semibold">
              {family?.brideParents?.father || "Ahamed Shaikh"}
            </div>
            <div className="font-cormorant italic text-[17px] text-[#5a2e1a]">
              & {family?.brideParents?.mother || "Rehana Shaikh"}
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
