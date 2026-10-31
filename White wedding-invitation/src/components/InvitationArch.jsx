import React from 'react';
import { motion } from 'framer-motion';

export default function InvitationArch({ data }) {
  const groom = data.groom;
  const bride = data.bride;

  return (
    <section className="relative flex flex-col items-center bg-[#F9F0E0] text-[#806b43] w-full py-12 md:py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative w-full max-w-[460px] mx-auto flex flex-col items-center justify-center overflow-visible"
      >
        {/* Background Arch Frame */}
        <img
          src={data.media.archFrame}
          alt="Golden Arch Frame"
          className="w-full h-auto object-contain z-0 pointer-events-none block drop-shadow-md"
        />

        {/* Swaying Golden Flower Corners at Bottom of Arch */}
        <motion.div
          className="absolute -bottom-4 -left-[12%] w-[44%] z-30 pointer-events-none"
          animate={{ rotate: [-2, 2, -2], scale: [1, 1.03, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'bottom right' }}
        >
          <img
            src={data.media.flowerCorner1}
            alt="Flower decoration"
            className="w-full h-auto object-contain -rotate-90"
          />
        </motion.div>

        <motion.div
          className="absolute -bottom-4 -right-[12%] w-[44%] z-30 pointer-events-none"
          animate={{ rotate: [2, -2, 2], scale: [1, 1.03, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'bottom left' }}
        >
          <img
            src={data.media.flowerCorner1}
            alt="Flower decoration"
            className="w-full h-auto object-contain scale-x-[-1] rotate-90"
          />
        </motion.div>

        {/* Content Container positioned inside Arch bounds */}
        <div className="absolute inset-x-0 top-[17%] sm:top-[18%] bottom-[4%] z-20 flex flex-col items-center justify-start w-full text-center px-6">
          <div className="flex flex-col items-center justify-start w-full max-w-[80%] sm:max-w-[74%] space-y-1">
            {/* Bismillah Calligraphy */}
            <img
              src={data.media.bismillah}
              alt="Bismillah Ar-Rahman Ar-Rahim"
              className="w-[105px] sm:w-[125px] md:w-[135px] h-auto object-contain mb-1.5 opacity-90 drop-shadow-xs"
            />

            {/* Invite Title & Subtitle */}
            <p className="gld-cinzel text-[8.5px] sm:text-[9.5px] tracking-[0.2em] uppercase text-[#806b43] mb-0.5 leading-relaxed font-bold">
              {data.inviteTitle}
            </p>

            <p className="text-[#806b43] text-[10.5px] sm:text-[11.5px] font-bold opacity-85 leading-snug">
              {data.inviteSubtitle}
            </p>

            {/* Formal Lineage & Blessings */}
            <p className="text-[#806b43] text-[9.5px] sm:text-[10.5px] opacity-90 whitespace-pre-line leading-relaxed font-sans mt-0.5">
              {data.inviteBody}
            </p>

            {/* Groom Name & Details */}
            <div className="pt-2 flex flex-col items-center">
              <h3 className="gld-script text-[30px] sm:text-[34px] md:text-[38px] text-[#806b43] leading-tight drop-shadow-xs">
                {groom.name}
              </h3>
              {groom.arabicName && (
                <p dir="rtl" className="font-arabic text-base sm:text-lg text-[#806b43] opacity-90 -mt-0.5 mb-0.5">
                  {groom.arabicName}
                </p>
              )}
              <img
                src={data.media.divider}
                alt="Divider"
                className="w-[40px] h-auto object-contain opacity-70 my-1"
              />
              <p className="gld-cinzel text-[8px] uppercase tracking-[0.2em] text-[#806b43]/80">
                {groom.guardianText}
              </p>
              <p className="gld-cinzel text-[9px] sm:text-[10px] uppercase tracking-[0.14em] text-[#806b43] font-bold">
                {groom.parents}
              </p>
            </div>

            {/* Connecting 'With' */}
            <p className="gld-script text-[22px] sm:text-[24px] text-[#806b43] my-0.5 opacity-90">
              With
            </p>

            {/* Bride Name & Details */}
            <div className="flex flex-col items-center">
              <h3 className="gld-script text-[30px] sm:text-[34px] md:text-[38px] text-[#806b43] leading-tight drop-shadow-xs">
                {bride.name}
              </h3>
              {bride.arabicName && (
                <p dir="rtl" className="font-arabic text-base sm:text-lg text-[#806b43] opacity-90 -mt-0.5 mb-0.5">
                  {bride.arabicName}
                </p>
              )}
              <img
                src={data.media.divider}
                alt="Divider"
                className="w-[40px] h-auto object-contain opacity-70 my-1"
              />
              <p className="gld-cinzel text-[8px] uppercase tracking-[0.2em] text-[#806b43]/80">
                {bride.guardianText}
              </p>
              <p className="gld-cinzel text-[9px] sm:text-[10px] uppercase tracking-[0.14em] text-[#806b43] font-bold">
                {bride.parents}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

