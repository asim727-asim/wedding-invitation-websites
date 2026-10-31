import React, { useState } from 'react';

export default function EnvelopeModal({ title, body, sender }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col items-center">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-full max-w-[340px] cursor-pointer group transition-transform duration-300 active:scale-98"
      >
        {/* Envelope Outer Container */}
        <div className="relative bg-[#f5ecdc] border border-[rgba(201,164,90,0.5)] rounded-[16px] p-5 shadow-[0_10px_30px_rgba(90,46,26,0.12)] overflow-hidden">
          {/* Decorative Corner Filigree */}
          <div className="absolute top-2 left-2 text-[#c9a45a] text-xs opacity-60">✤</div>
          <div className="absolute top-2 right-2 text-[#c9a45a] text-xs opacity-60">✤</div>
          <div className="absolute bottom-2 left-2 text-[#c9a45a] text-xs opacity-60">✤</div>
          <div className="absolute bottom-2 right-2 text-[#c9a45a] text-xs opacity-60">✤</div>

          {/* Envelope Graphic Preview */}
          <div className="flex flex-col items-center text-center">
            {/* Wax Seal */}
            <div className={`w-14 h-14 rounded-full bg-gradient-to-br from-[#a01c1c] via-[#8b1a1a] to-[#5a1212] border-2 border-[#c9a45a] flex items-center justify-center text-[#f8eeda] font-cinzel font-bold text-lg shadow-md mb-3 transition-transform duration-500 ${isOpen ? 'rotate-180 scale-90' : 'seal-pulse group-hover:scale-105'}`}>
              SN
            </div>

            <div className="font-cinzel text-[11px] tracking-[3px] uppercase text-[#6b2c1a] font-semibold">
              {isOpen ? "Tap to Fold Letter" : "Tap to Open Sealed Letter"}
            </div>
            <div className="font-cormorant italic text-[14px] text-[#7a5040] mt-1">
              A personal note from Shah & Naima
            </div>
          </div>

          {/* Unfolded Letter Content */}
          <div
            className={`transition-all duration-700 ease-in-out overflow-hidden ${
              isOpen ? 'max-h-[600px] opacity-100 mt-5 pt-4 border-t border-[rgba(201,164,90,0.4)]' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-[#fffdf9] rounded-[10px] p-4.5 border border-[rgba(201,164,90,0.3)] shadow-inner text-left">
              <h4 className="font-cinzel text-[13px] tracking-[2px] text-[#8b1a1a] font-semibold border-b border-[rgba(201,164,90,0.3)] pb-2 mb-3 text-center">
                {title || "Dearest Guest & Family"}
              </h4>
              <p className="font-eb italic text-[16px] text-[#4a1a10] leading-[1.8] whitespace-pre-line text-center">
                {body}
              </p>
              <div className="mt-4 pt-2 border-t border-[rgba(201,164,90,0.2)] text-center">
                <span className="font-calligraphy text-[24px] text-[#8b1a1a] block">
                  {sender || "Shah Newaz & Jannatul Naima"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

