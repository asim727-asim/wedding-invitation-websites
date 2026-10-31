import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function ScratchDateCard({ data }) {
  const canvasRef = useRef(null);
  const isDrawing = useRef(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [scratchPercent, setScratchPercent] = useState(0);

  const width = 260;
  const height = 260;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Draw metallic gold overlay
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#D4AF37');
    gradient.addColorStop(0.3, '#FFEFA6');
    gradient.addColorStop(0.6, '#AA7C11');
    gradient.addColorStop(1, '#D4AF37');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Overlay text hint
    ctx.save();
    ctx.fillStyle = '#5A3D0B';
    ctx.font = '600 13px Cinzel, Georgia, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.letterSpacing = '2px';
    ctx.fillText('SCRATCH TO REVEAL', width / 2, height / 2 - 12);
    ctx.font = 'italic 12px Inter, sans-serif';
    ctx.fillStyle = '#6E4D13';
    ctx.fillText('✨ The Big Day ✨', width / 2, height / 2 + 14);
    ctx.restore();
  }, [width, height]);

  const scratch = (clientX, clientY) => {
    if (isRevealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 26, 0, Math.PI * 2, false);
    ctx.fill();

    checkPercentScratched();
  };

  const checkPercentScratched = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    try {
      const imgData = ctx.getImageData(0, 0, width, height);
      const pixels = imgData.data;
      let transparentCount = 0;
      const totalPixels = pixels.length / 4;

      // Sample every 4th pixel for high performance
      for (let i = 3; i < pixels.length; i += 16) {
        if (pixels[i] === 0) {
          transparentCount += 4;
        }
      }

      const percent = Math.round((transparentCount / totalPixels) * 100);
      setScratchPercent(percent);

      if (percent >= 38 && !isRevealed) {
        setIsRevealed(true);
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#806b43', '#FFEFA6', '#E5D5B5']
        });
      }
    } catch (e) {
      // Ignore if image data reading fails
    }
  };

  const handlePointerDown = (e) => {
    isDrawing.current = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    scratch(clientX, clientY);
  };

  const handlePointerMove = (e) => {
    if (!isDrawing.current) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    scratch(clientX, clientY);
  };

  const handlePointerUp = () => {
    isDrawing.current = false;
  };

  return (
    <section className="relative flex flex-col items-center bg-[#F9F0E0] text-[#806b43] w-full py-10 md:py-14 px-6 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md mx-auto flex flex-col items-center"
      >
        {/* Section Heading */}
        <h2 className="gld-script text-[38px] md:text-[44px] text-center text-[#806b43] mb-1">
          {data.scratchCard.title}
        </h2>

        {/* Golden Divider */}
        <div className="flex justify-center mb-7 w-full">
          <img
            src={data.media.divider}
            alt="Divider"
            className="h-[18px] md:h-[22px] object-contain opacity-90 drop-shadow-sm"
          />
        </div>

        {/* Scratch Card Container */}
        <div
          className="relative shadow-xl mx-auto rounded-2xl overflow-hidden border-2 border-[#C5A059]"
          style={{ width: `${width}px`, height: `${height}px` }}
        >
          {/* Revealed Content Behind the Overlay */}
          <div className="absolute inset-0 bg-[#F9F0E0] text-center w-full h-full flex flex-col justify-center items-center p-4 select-none">
            <span className="gld-script text-2xl md:text-3xl leading-none capitalize text-[#806b43]">
              {data.eventDayOfWeek}
            </span>
            <span className="gld-cinzel text-5xl md:text-6xl font-bold leading-none my-1.5 text-[#806b43] drop-shadow-xs">
              {data.eventDateDay}
            </span>
            <span className="gld-script text-xl md:text-2xl leading-none capitalize text-[#806b43]">
              {data.eventMonthYear}
            </span>
            <span className="gld-cinzel text-[10px] uppercase tracking-widest text-[#806b43]/80 mt-2 font-bold">
              {data.auspiciousText}
            </span>
          </div>

          {/* Sweeping Metallic Shine Animation */}
          {!isRevealed && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="scratch-shine" />
            </div>
          )}

          {/* Canvas Overlay */}
          <canvas
            ref={canvasRef}
            width={width}
            height={height}
            className={`absolute inset-0 cursor-pointer transition-opacity duration-700 touch-none w-full h-full ${
              isRevealed ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            onMouseDown={handlePointerDown}
            onMouseMove={handlePointerMove}
            onMouseUp={handlePointerUp}
            onMouseLeave={handlePointerUp}
            onTouchStart={handlePointerDown}
            onTouchMove={handlePointerMove}
            onTouchEnd={handlePointerUp}
          />
        </div>

        <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#806b43]/70 mt-4 font-semibold">
          {isRevealed ? '✨ Date Revealed! ✨' : 'Swipe or drag over card to scratch'}
        </p>
      </motion.div>
    </section>
  );
}

