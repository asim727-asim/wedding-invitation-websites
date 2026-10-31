import React, { useState, useEffect, useRef } from 'react';
import FallingLeaves from './components/FallingLeaves';
import RevealSection from './components/RevealSection';
import CountdownSection from './components/CountdownSection';
import { weddingData } from './data/weddingData';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);
  const userInteracted = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = false;
    audio.play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        audio.muted = true;
        audio.play()
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      });

    const unlockAudio = () => {
      if (audio && !userInteracted.current) {
        audio.muted = false;
        if (audio.paused) {
          audio.play().then(() => setIsPlaying(true)).catch(() => {});
        } else {
          setIsPlaying(true);
        }
      }
    };

    const events = ['click', 'touchstart', 'touchend', 'pointerdown', 'scroll'];
    events.forEach((evt) => {
      window.addEventListener(evt, unlockAudio, { capture: true, once: true });
      document.addEventListener(evt, unlockAudio, { capture: true, once: true });
    });

    return () => {
      events.forEach((evt) => {
        window.removeEventListener(evt, unlockAudio, true);
        document.removeEventListener(evt, unlockAudio, true);
      });
    };
  }, []);

  const toggleMusic = (e) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused || audio.muted) {
      userInteracted.current = false;
      audio.muted = false;
      audio.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log('Play failed:', err));
    } else {
      userInteracted.current = true;
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    // Outer Background for Desktop/Laptop View: Dark Royal Burgundy Theater
    <div className="min-h-screen w-full bg-[#120404] flex justify-center items-start overflow-x-clip">
      
      {/* Centered Smartphone-Sized Viewport Container (Max 420px) */}
      <div className="w-full max-w-[420px] min-h-screen relative bg-[#1a0808] sm:shadow-[0_0_80px_rgba(0,0,0,0.9)] sm:border-x sm:border-[rgba(201,164,90,0.25)] flex flex-col items-center overflow-x-clip">

        {/* Audio Element */}
        <audio
          ref={audioRef}
          loop
          autoPlay
          playsInline
          preload="auto"
          src={weddingData.media.audioSrc}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={weddingData.media.audioSrc} type="audio/mpeg" />
        </audio>

        {/* Floating Music Button */}
        <div
          onClick={toggleMusic}
          className="fixed bottom-[25px] right-[25px] z-[9999] w-[45px] h-[45px] bg-[rgba(139,26,26,0.8)] border border-[#c9a45a] rounded-full flex items-center justify-center cursor-pointer text-[#f8eeda] text-[22px] shadow-lg transition-all duration-300 active:scale-95 select-none"
        >
          <span className="relative flex items-center justify-center w-full h-full">
            ♪
            {!isPlaying && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-[2px] bg-[#f8eeda] -rotate-45 rounded-full" />
            )}
          </span>
        </div>

        {/* PAGE 1: HERO */}
        <div className="page" id="page1">
          <img className="page-bg" src={weddingData.media.heroBg} alt="" />
          <FallingLeaves containerId="lc1" count={20} />
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-start pt-[105px] px-9 pb-0">
            {/* Bismillah */}
            <img
              src={weddingData.media.bismillah}
              alt="Bismillah"
              className="w-[220px] max-w-[75%] h-auto mix-blend-multiply opacity-90 mb-3 fade-down"
              style={{ animationDelay: '0.4s' }}
            />
            {/* Ceremony Badge */}
            <h1
              className="font-cinzel text-[13.5px] font-medium tracking-[5px] text-[#6b2c1a] border border-[#c9a45a] pt-1.5 px-5 pb-1 bg-[rgba(248,238,218,0.55)] fade-down"
              style={{ animationDelay: '0.7s' }}
            >
              {weddingData.event.badgeText}
            </h1>
            {/* Introductory Greeting */}
            <div
              className="font-eb italic text-[15px] text-[#5a2e1a] text-center leading-loose mt-1.5 fade-up"
              style={{ animationDelay: '1s' }}
            >
              With the blessings of our families, <br />
              we joyfully invite you to celebrate <br />
              the beginning of our forever.
            </div>

            {/* Couple Names in English & Arabic */}
            <div className="flex flex-col items-center text-center mt-3 fade-up w-full" style={{ animationDelay: '1.3s' }}>
              <div className="font-calligraphy italic text-[36px] sm:text-[42px] text-[#861019] leading-none">
                {weddingData.groom.firstName} & {weddingData.bride.firstName}
              </div>
              <div dir="rtl" className="font-amiri text-[17px] text-[#5a2e1a] mt-1.5 tracking-wide">
                {weddingData.groom.arabicName} & {weddingData.bride.arabicName}
              </div>
              <div className="font-cinzel text-[11px] tracking-[4px] text-[#8b6b3e] mt-1 font-semibold">
                {weddingData.initials}
              </div>
            </div>

            {/* Blessing Note */}
            <div
              className="font-eb italic text-[15px] text-[#5a2e1a] text-center leading-loose mt-3 fade-up w-full px-4"
              style={{ animationDelay: '1.6s' }}
            >
              Your presence and blessing <br />
              will make this occasion <br />
              even more special.
            </div>
          </div>
        </div>

        {/* PAGE 2: CEREMONY DETAILS */}
        <div className="page" id="page2">
          <img className="page-bg" src={weddingData.media.ceremonyBg} alt="" />
          <FallingLeaves containerId="lc2" count={20} />
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4">
            {/* Geometric ornament */}
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

            <div
              className="font-cinzel text-[11px] font-medium tracking-[5px] text-[#000000] mt-[22px] fade-up"
              style={{ animationDelay: '0.7s' }}
            >
              NIKKAH CEREMONY
            </div>
            <div
              className="font-cormorant italic font-light text-[22px] text-[#9b2020] leading-snug mt-[22px] fade-up font-semibold"
              style={{ animationDelay: '1s' }}
            >
              {weddingData.nikkah.date}
            </div>
            <div
              className="font-calligraphy italic font-light text-[38px] sm:text-[44px] text-[rgb(134,16,25)] leading-none mt-1.5 fade-up"
              style={{ animationDelay: '1.3s' }}
            >
              {weddingData.nikkah.time}
            </div>
            <div
              className="font-cormorant italic font-normal text-[clamp(18px,5vw,25px)] text-[rgb(61,10,16)] leading-normal mt-4 fade-up font-semibold"
              style={{ animationDelay: '1.6s' }}
            >
              {weddingData.nikkah.venueEnglish}
            </div>
            <div
              className="text-[13px] text-[#7a5040] mt-1 fade-up font-medium"
              style={{ animationDelay: '1.7s' }}
            >
              {weddingData.nikkah.venueHindi}
            </div>
            <div
              className="font-cinzel text-[13px] tracking-[1.5px] text-[#7a5040] uppercase mt-2.5 leading-relaxed fade-up max-w-[340px]"
              style={{ animationDelay: '1.9s' }}
            >
              {weddingData.nikkah.address}
            </div>
          </div>
        </div>

        {/* PAGE 3: STICKY HERO & PARALLAX GLASS CARDS */}
        <div className="relative w-full bg-[url('/images/hero.webp')] bg-cover bg-top">
          {/* Sticky Background Backdrop with falling leaves */}
          <div className="sticky top-0 w-full h-screen z-0 -mb-[100vh] pointer-events-none overflow-hidden">
            <img
              src={weddingData.media.heroBg}
              alt=""
              className="w-full h-full object-cover object-top"
            />
            <FallingLeaves containerId="lc3" count={10} />
          </div>

          <div className="relative z-10 pt-10 px-[18px] pb-24 flex flex-col gap-[18px] items-center w-full">
            {/* Card 1: Counting Down */}
            <RevealSection title="COUNTING DOWN">
              <CountdownSection targetDate={weddingData.event.targetCountdownDate} />
            </RevealSection>

            {/* Card 2: Love Message */}
            <RevealSection
              title="love"
              className="border border-[rgba(201,164,90,0.4)] shadow-[0_8px_30px_rgba(139,26,26,0.06)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c9a45a] to-transparent opacity-50" />
              <span className="font-eb text-[80px] leading-[0.6] text-[rgba(155,32,32,0.15)] block mb-1.5 animate-pulse-gentle">
                "
              </span>
              <p className="font-eb italic text-[22px] text-[#4a1a10] leading-[1.8] text-center relative z-10 px-2">
                {weddingData.messages.loveQuote}
              </p>
            </RevealSection>

            {/* Card 3: Our Story */}
            <RevealSection
              title="OUR STORY"
              noDefaultStyles={true}
              className="flex flex-col items-center"
            >
              <div className="relative w-[80%] max-w-[280px] aspect-[4/5] rounded-[120px_120px_10px_10px] overflow-hidden p-1.5 bg-[#f8f0e0] border border-[rgba(201,164,90,0.6)] mb-6 shadow-[0_10px_25px_rgba(90,46,26,0.15)] animate-float">
                <img
                  src={weddingData.media.couplePhoto}
                  alt="Our Story"
                  className="w-full h-full object-cover rounded-[115px_115px_8px_8px]"
                />
              </div>

              <div className="bg-[rgba(248,240,224,0.95)] backdrop-blur-md rounded-[20px] py-7 px-6 w-full shadow-sm border border-[rgba(201,164,90,0.3)] relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#f8f0e0] border border-[#c9a45a] rounded-full p-1.5 shadow-sm">
                  <div className="w-2.5 h-2.5 bg-[#9b2020] rotate-45" />
                </div>
                <div className="text-center mt-5 px-4">
                  <p
                    dir="rtl"
                    className="text-[26px] sm:text-[30px] text-[#6b3020] leading-[2.1] text-center font-normal tracking-wide"
                    style={{ fontFamily: "'Amiri', 'Traditional Arabic', serif" }}
                  >
                    {weddingData.quranVerse.arabic}
                  </p>
                  <p className="font-eb italic text-[18px] text-[#4a1a10] leading-[1.8] mt-5 max-w-[700px] mx-auto">
                    {weddingData.quranVerse.translation}
                  </p>
                  <p className="font-cinzel text-[11px] tracking-[3px] uppercase text-[#8b6b3e] mt-4 font-semibold">
                    {weddingData.quranVerse.reference}
                  </p>
                </div>
              </div>
            </RevealSection>

            {/* Card 4: Together With Our Families */}
            <RevealSection title={weddingData.family.sectionHeading}>
              <div className="flex flex-col items-center text-center">
                <p className="font-eb italic text-[16px] text-[#4a1a10] leading-relaxed mb-4">
                  {weddingData.family.greeting}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
                  {/* Groom's Family */}
                  <div className="bg-[#fff8f0] border border-[rgba(180,140,110,0.3)] rounded-[14px] p-4 text-center">
                    <span className="font-cinzel text-[9px] tracking-[2px] uppercase text-[#8b6b3e] block font-semibold mb-1">
                      Groom's Parents
                    </span>
                    <div className="font-cormorant italic text-[19px] text-[#8b1a1a] font-semibold">
                      {weddingData.family.groomParents.father}
                    </div>
                    <div className="font-cormorant italic text-[17px] text-[#5a2e1a]">
                      & {weddingData.family.groomParents.mother}
                    </div>
                  </div>

                  {/* Bride's Family */}
                  <div className="bg-[#fff8f0] border border-[rgba(180,140,110,0.3)] rounded-[14px] p-4 text-center">
                    <span className="font-cinzel text-[9px] tracking-[2px] uppercase text-[#8b6b3e] block font-semibold mb-1">
                      Bride's Parents
                    </span>
                    <div className="font-cormorant italic text-[19px] text-[#8b1a1a] font-semibold">
                      {weddingData.family.brideParents.father}
                    </div>
                    <div className="font-cormorant italic text-[17px] text-[#5a2e1a]">
                      & {weddingData.family.brideParents.mother}
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>

            {/* Card 5: Nikkah Ceremony & Venue */}
            <RevealSection title="NIKKAH CEREMONY">
              <div className="font-cormorant italic text-[clamp(24px,6vw,30px)] text-[#3d1208] text-center leading-snug mb-1 font-semibold">
                {weddingData.nikkah.venueEnglish}
              </div>
              <div className="text-[14px] text-[#7a5040] text-center mb-1 font-medium">
                {weddingData.nikkah.venueHindi}
              </div>
              <div className="font-cinzel text-[11px] font-semibold tracking-[2px] text-[#8b1a1a] text-center uppercase mb-3">
                {weddingData.nikkah.date} • {weddingData.nikkah.time}
              </div>
              <div className="font-cinzel text-[10px] tracking-[1px] text-[#5a2e1a] text-center uppercase mb-4 leading-relaxed">
                {weddingData.nikkah.address}
              </div>

              {/* Nikkah Google Maps Button */}
              <a
                className="flex items-center justify-between bg-[#fff8f0] border border-[rgba(180,140,110,0.3)] hover:border-[#c9a45a] hover:bg-[#fffcf7] rounded-[14px] py-3.5 px-4 w-full cursor-pointer no-underline transition-all duration-300 shadow-sm active:scale-98"
                href={weddingData.nikkah.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-left">
                  <div className="font-cormorant text-[16px] text-[#1a1a1a] font-semibold">
                    {weddingData.nikkah.venueEnglish}
                  </div>
                  <div className="font-cinzel text-[9px] text-[#9b6050] mt-0.5 tracking-wider">
                    Bandra East, Mumbai
                  </div>
                </div>
                <div className="bg-[#8b1a1a] hover:bg-[#a01c1c] text-white font-cinzel text-[10px] tracking-[1.5px] py-2.5 px-4 rounded-[10px] whitespace-nowrap shrink-0 ml-3 shadow-md transition-colors">
                  {weddingData.nikkah.buttonText}
                </div>
              </a>
            </RevealSection>

            {/* Card 6: Walima Ceremony & Venue */}
            <RevealSection title="WALIMA CEREMONY">
              <div className="font-cormorant italic text-[clamp(24px,6vw,30px)] text-[#3d1208] text-center leading-snug mb-1 font-semibold">
                {weddingData.walima.venueEnglish}
              </div>
              <div className="text-[14px] text-[#7a5040] text-center mb-1 font-medium">
                {weddingData.walima.venueHindi}
              </div>
              <div className="font-cinzel text-[11px] font-semibold tracking-[2px] text-[#8b1a1a] text-center uppercase mb-3">
                {weddingData.walima.date} • {weddingData.walima.time}
              </div>
              <div className="font-cinzel text-[10px] tracking-[1px] text-[#5a2e1a] text-center uppercase mb-4 leading-relaxed">
                {weddingData.walima.address}
              </div>

              {/* Walima Google Maps Button */}
              <a
                className="flex items-center justify-between bg-[#fff8f0] border border-[rgba(180,140,110,0.3)] hover:border-[#c9a45a] hover:bg-[#fffcf7] rounded-[14px] py-3.5 px-4 w-full cursor-pointer no-underline transition-all duration-300 shadow-sm active:scale-98"
                href={weddingData.walima.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-left">
                  <div className="font-cormorant text-[16px] text-[#1a1a1a] font-semibold">
                    {weddingData.walima.venueEnglish}
                  </div>
                  <div className="font-cinzel text-[9px] text-[#9b6050] mt-0.5 tracking-wider">
                    Kohinoor City Mall, Kurla West
                  </div>
                </div>
                <div className="bg-[#8b1a1a] hover:bg-[#a01c1c] text-white font-cinzel text-[10px] tracking-[1.5px] py-2.5 px-4 rounded-[10px] whitespace-nowrap shrink-0 ml-3 shadow-md transition-colors">
                  {weddingData.walima.buttonText}
                </div>
              </a>
            </RevealSection>

            {/* Developer Button */}
            <a
              href={weddingData.credits.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[90%] max-w-[350px] bg-[rgba(139,26,26,0.9)] border border-[rgba(201,164,90,0.5)] text-[#f8eeda] py-3.5 text-center font-cinzel text-[10px] tracking-[2px] rounded-[14px] shadow-[0_4px_15px_rgba(0,0,0,0.3)] no-underline hover:bg-[rgba(122,21,21,0.95)] transition-colors mt-2 mb-8"
            >
              {weddingData.credits.text}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
