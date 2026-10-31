import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, Sparkles, Utensils, Landmark } from 'lucide-react';

export default function EventsTimeline({ data }) {
  const getEventIcon = (iconName) => {
    switch (iconName) {
      case 'mosque':
        return <Landmark className="w-6 h-6 md:w-7 md:h-7 text-[#806b43] mb-1.5 opacity-90 drop-shadow-sm" />;
      case 'feast':
        return <Utensils className="w-6 h-6 md:w-7 md:h-7 text-[#806b43] mb-1.5 opacity-90 drop-shadow-sm" />;
      default:
        return <Sparkles className="w-6 h-6 md:w-7 md:h-7 text-[#806b43] mb-1.5 opacity-90 drop-shadow-sm" />;
    }
  };

  return (
    <section className="relative flex flex-col items-center bg-[#F9F0E0] text-[#806b43] w-full py-12 md:py-16 px-4 overflow-hidden">
      <div className="w-full max-w-[520px] mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <h2 className="gld-script text-[40px] md:text-[46px] text-center text-[#806b43] mb-1">
          {data.eventsTitle}
        </h2>

        {/* Golden Divider */}
        <div className="flex justify-center mb-10 w-full">
          <img
            src={data.media.divider}
            alt="Divider"
            className="h-[20px] md:h-[24px] object-contain opacity-90 drop-shadow-sm"
          />
        </div>

        {/* Timeline Container */}
        <div className="relative w-full flex flex-col pt-4 pb-8">
          {/* Vertical Center Track */}
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#806b43]/25 transform -translate-x-1/2 z-0" />

          {/* Top Diamond Marker */}
          <div className="absolute -top-3 left-1/2 flex flex-col gap-1.5 items-center transform -translate-x-1/2 z-10">
            <div className="w-2 h-2 rotate-45 bg-[#806b43]" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#806b43]/70" />
          </div>

          {/* Event Items */}
          <div className="space-y-12 w-full z-10 mt-4">
            {data.events.map((event, index) => (
              <div
                key={event.id || index}
                className="relative flex w-full items-center justify-between min-h-[120px]"
              >
                {/* Center Node Diamond */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-[#F9F0E0] p-1.5 z-20">
                  <div className="w-3 h-3 rotate-45 border-[1.5px] border-[#806b43] bg-[#F9F0E0]" />
                </div>

                {/* Left Side: Time & Date */}
                <motion.div
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="w-1/2 flex flex-col items-end pr-5 md:pr-7 text-right"
                >
                  <div className="gld-script text-[22px] md:text-[26px] text-[#806b43] leading-none">
                    {event.time}
                  </div>
                  <div className="font-sans text-[12px] md:text-[13px] text-[#806b43]/85 tracking-wide mt-1.5 font-medium">
                    {event.date}
                  </div>
                </motion.div>

                {/* Right Side: Title & Venue */}
                <motion.div
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="w-1/2 flex flex-col items-start pl-5 md:pl-7 text-left"
                >
                  {getEventIcon(event.icon)}

                  <h4 className="font-sans text-[16px] md:text-[18px] font-bold text-[#806b43] tracking-wide leading-tight mb-2">
                    {event.title}
                  </h4>

                  {event.venue && (
                    <div className="flex flex-col items-start gap-1 text-[#806b43]/90 font-sans text-[12px] md:text-[13px] leading-snug">
                      <div className="flex items-start gap-1.5">
                        <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5 text-[#806b43]" />
                        <div>
                          <span className="font-semibold block">{event.venue}</span>
                          {event.venueHindi && (
                            <span className="text-[11px] opacity-85 block mt-0.5 font-normal">
                              {event.venueHindi}
                            </span>
                          )}
                        </div>
                      </div>
                      {event.address && (
                        <span className="text-[11px] text-[#806b43]/80 pl-5 leading-tight">
                          {event.address}
                        </span>
                      )}
                    </div>
                  )}

                  {event.mapLink && (
                    <a
                      href={event.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-2.5 px-3 py-1 rounded-full border border-[#806b43]/40 text-[#806b43] hover:bg-[#806b43] hover:text-[#F9F0E0] text-[10px] uppercase tracking-wider font-semibold transition-all shadow-xs"
                    >
                      <MapPin className="w-3 h-3" />
                      <span>View Location</span>
                    </a>
                  )}

                  {event.message && (
                    <p className="text-[#806b43]/75 font-sans text-[11px] italic mt-1.5">
                      "{event.message}"
                    </p>
                  )}
                </motion.div>
              </div>
            ))}
          </div>

          {/* Bottom Diamond Marker */}
          <div className="absolute -bottom-4 left-1/2 flex flex-col gap-1.5 items-center transform -translate-x-1/2 z-10 bg-[#F9F0E0] py-2">
            <div className="w-1.5 h-1.5 rotate-45 bg-[#806b43]/70" />
            <div className="w-2 h-2 rotate-45 bg-[#806b43]" />
          </div>
        </div>
      </div>
    </section>
  );
}

