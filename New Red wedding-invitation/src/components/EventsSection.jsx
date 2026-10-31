import React from 'react';
import RevealSection from './RevealSection';

export default function EventsSection({ events }) {
  if (!events || events.length === 0) return null;

  return (
    <RevealSection title="WEDDING EVENTS">
      <div className="flex flex-col gap-4 w-full">
        {events.map((event, index) => (
          <div
            key={event.id || index}
            className="bg-[#fff8f0] border border-[rgba(180,140,110,0.3)] rounded-[14px] p-4 text-center transition-transform hover:scale-[1.01]"
          >
            <div className="font-cinzel text-[11px] tracking-[2px] uppercase text-[#8b1a1a] font-bold">
              {event.title}
            </div>
            <div className="font-cormorant italic text-[20px] text-[#3d1208] mt-1 font-semibold">
              {event.time}
            </div>
            <div className="font-cinzel text-[10px] tracking-[1.5px] uppercase text-[#7a5040] mt-0.5">
              {event.date} • {event.location}
            </div>
            {event.description && (
              <p className="font-eb italic text-[14px] text-[#5a2e1a] mt-2 border-t border-[rgba(201,164,90,0.2)] pt-2">
                {event.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </RevealSection>
  );
}

