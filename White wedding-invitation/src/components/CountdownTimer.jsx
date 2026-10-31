import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CountdownTimer({ data }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(data.countdownTarget).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [data.countdownTarget]);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <span className="gld-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#806b43] leading-none">
        {String(value).padStart(2, '0')}
      </span>
      <span className="font-sans text-xs md:text-sm text-[#806b43]/80 uppercase tracking-widest mt-1.5 font-medium">
        {label}
      </span>
    </div>
  );

  return (
    <section className="relative flex flex-col items-center bg-[#F9F0E0] text-[#806b43] w-full py-10 md:py-14 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md mx-auto flex flex-col items-center"
      >
        {/* Section Heading */}
        <h2 className="gld-script text-[38px] md:text-[44px] text-center text-[#806b43] mb-1">
          {data.countdownTitle}
        </h2>

        {/* Golden Divider */}
        <div className="flex justify-center mb-8 w-full">
          <img
            src={data.media.divider}
            alt="Divider"
            className="h-[18px] md:h-[22px] object-contain opacity-90 drop-shadow-sm"
          />
        </div>

        {/* Countdown Digits */}
        <div className="flex items-center justify-center text-[#806b43] gap-2 sm:gap-4 md:gap-6 bg-[#F9F0E0] py-4 px-6 rounded-2xl border border-[#806b43]/20 shadow-sm">
          <TimeUnit value={timeLeft.days} label="Days" />
          <span className="gld-cinzel text-2xl md:text-3xl text-[#806b43]/60 -mt-4">:</span>
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <span className="gld-cinzel text-2xl md:text-3xl text-[#806b43]/60 -mt-4">:</span>
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <span className="gld-cinzel text-2xl md:text-3xl text-[#806b43]/60 -mt-4">:</span>
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </motion.div>
    </section>
  );
}

