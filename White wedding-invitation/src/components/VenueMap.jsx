import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function VenueMap({ data }) {
  const venue = data.primaryVenue;

  return (
    <section className="relative flex flex-col items-center bg-[#F9F0E0] text-[#806b43] w-full py-12 md:py-16 px-4 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-lg mx-auto flex flex-col items-center"
      >
        {/* Section Heading */}
        <h2 className="gld-script text-[40px] md:text-[46px] text-center text-[#806b43] mb-1">
          {venue.title}
        </h2>

        {/* Golden Divider */}
        <div className="flex justify-center mb-8 w-full">
          <img
            src={data.media.divider}
            alt="Divider"
            className="h-[20px] md:h-[24px] object-contain opacity-90 drop-shadow-sm"
          />
        </div>

        {/* Venue Information */}
        <div className="mb-8 flex flex-col items-center space-y-1.5">
          <h3 className="gld-cinzel font-bold text-2xl md:text-3xl tracking-widest text-[#806b43]">
            {venue.name}
          </h3>
          {venue.nameHindi && (
            <p className="font-sans text-sm md:text-base font-semibold text-[#806b43]/90">
              {venue.nameHindi}
            </p>
          )}
          <p className="font-sans text-xs md:text-sm text-[#806b43]/85 max-w-[300px] mx-auto leading-relaxed pt-1">
            {venue.address}
          </p>
        </div>

        {/* Embedded Map Card with Golden Borders */}
        <div className="w-full max-w-[92%] sm:max-w-md relative mb-10">
          <div className="w-full aspect-[4/3] rounded-[24px] border-[2px] border-[#806b43]/50 overflow-hidden relative z-10 shadow-md bg-[#F9F0E0]">
            <iframe
              src={venue.embedMapUrl}
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Venue Map Preview"
              className="w-full h-full"
            />
          </div>

          {/* Top Decorative Border */}
          <img
            src={data.media.cardBorder}
            alt="Border Top"
            className="absolute -top-[32px] left-1/2 -translate-x-1/2 w-[55%] h-auto object-contain z-20 pointer-events-none drop-shadow-sm"
          />

          {/* Bottom Decorative Border */}
          <img
            src={data.media.cardBorder}
            alt="Border Bottom"
            className="absolute -bottom-[32px] left-1/2 -translate-x-1/2 w-[55%] h-auto object-contain z-20 pointer-events-none rotate-180 drop-shadow-sm"
          />
        </div>

        {/* Directions CTA Button */}
        <a
          href={venue.googleMapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 w-full max-w-[240px] py-3.5 px-6 border border-[#806b43] text-[#F9F0E0] bg-[#806b43] hover:bg-transparent hover:text-[#806b43] transition-all duration-300 gld-cinzel text-xs font-bold uppercase tracking-widest shadow-md rounded-full active:scale-95"
        >
          <MapPin className="w-4 h-4" />
          <span>View Map</span>
        </a>
      </motion.div>
    </section>
  );
}

