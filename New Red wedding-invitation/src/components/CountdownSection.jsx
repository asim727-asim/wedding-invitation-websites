import React, { useState, useEffect } from 'react';

export default function CountdownSection({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    // Preserve existing target date from props (or default 18 December 2026)
    const target = targetDate ? new Date(targetDate) : new Date(2026, 11, 18, 14, 0, 0);

    const calculateTime = () => {
      const difference = Math.max(0, target.getTime() - Date.now());
      setTimeLeft({
        d: Math.floor(difference / (1000 * 60 * 60 * 24)),
        h: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        m: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        s: Math.floor((difference % (1000 * 60)) / 1000)
      });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { val: timeLeft.d, label: 'DAYS' },
    { val: timeLeft.h, label: 'HRS' },
    { val: timeLeft.m, label: 'MIN' },
    { val: timeLeft.s, label: 'SEC' }
  ];

  return (
    <div className="grid grid-cols-4 gap-2.5 w-full">
      {units.map((unit, index) => (
        <div
          key={index}
          className="bg-[rgba(200,165,140,0.2)] border border-[rgba(180,140,110,0.3)] rounded-[14px] pt-[18px] px-1 pb-[14px] flex flex-col items-center gap-1.5"
        >
          <span className="font-cormorant italic font-light text-[38px] text-[#7a2020] leading-none">
            {String(unit.val).padStart(2, '0')}
          </span>
          <span className="font-cinzel text-[8px] tracking-[2.5px] text-[#9b6050]">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
