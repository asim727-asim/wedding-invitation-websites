import React, { useRef, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function ScratchDate({
  date = "18 & 19 December",
  time = "Nikkah & Walima",
  venue = "Mumbai, Maharashtra",
  onRevealed
}) {
  const canvasRef = useRef(null);
  const isScratching = useRef(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [scratchPercent, setScratchPercent] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // High DPI scaling
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // Fill with luxurious gold / bronze gradient
    const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    gradient.addColorStop(0, '#c9a45a');
    gradient.addColorStop(0.3, '#dfc488');
    gradient.addColorStop(0.5, '#b0873e');
    gradient.addColorStop(0.7, '#dfc488');
    gradient.addColorStop(1, '#9b732f');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Decorative inner border
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(8, 8, rect.width - 16, rect.height - 16);

    // Scratch prompt text
    ctx.font = 'bold 12px "Cinzel", serif';
    ctx.fillStyle = '#3d1208';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✦ SCRATCH TO REVEAL DATE ✦', rect.width / 2, rect.height / 2);
  }, []);

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 65,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#8b1a1a', '#c9a45a', '#f8f0e0', '#d4af37']
      });
    } catch (e) {
      console.log('Confetti error:', e);
    }
  };

  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const scratch = (x, y) => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x * dpr, y * dpr, 22 * dpr, 0, Math.PI * 2);
    ctx.fill();

    checkScratchPercentage();
  };

  const checkScratchPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    // Sample pixels across a grid to maintain fast 60fps performance
    const sampleWidth = Math.floor(canvas.width / 10);
    const sampleHeight = Math.floor(canvas.height / 10);
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imgData.data;
    let transparentCount = 0;
    const totalSamples = sampleWidth * sampleHeight;

    for (let i = 0; i < pixels.length; i += 40) {
      if (pixels[i + 3] === 0) {
        transparentCount++;
      }
    }

    const calculatedPercent = Math.min(100, Math.round((transparentCount / (pixels.length / 40)) * 100));
    setScratchPercent(calculatedPercent);

    if (calculatedPercent > 45 && !isRevealed) {
      setIsRevealed(true);
      triggerConfetti();
      if (onRevealed) onRevealed();
    }
  };

  const handlePointerDown = (e) => {
    if (isRevealed) return;
    isScratching.current = true;
    const { x, y } = getCoordinates(e);
    scratch(x, y);
  };

  const handlePointerMove = (e) => {
    if (!isScratching.current || isRevealed) return;
    const { x, y } = getCoordinates(e);
    scratch(x, y);
  };

  const handlePointerUp = () => {
    isScratching.current = false;
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-full max-w-[340px] h-[155px] rounded-[16px] overflow-hidden select-none shadow-[0_4px_20px_rgba(90,46,26,0.12)] border border-[rgba(201,164,90,0.5)] bg-gradient-to-br from-[#fffdfa] via-[#fbf5eb] to-[#f4e8d3]">
        {/* Revealed Content underneath */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center pointer-events-none">
          <div className="font-cinzel text-[10px] tracking-[3px] text-[#8b6b3e] uppercase font-semibold">
            Save The Date
          </div>
          <div className="font-cormorant italic text-[23px] text-[#8b1a1a] font-semibold leading-tight mt-1">
            {date}
          </div>
          <div className="font-calligraphy text-[34px] text-[#5a2e1a] leading-none mt-1">
            {time}
          </div>
          <div className="font-cormorant italic text-[15px] text-[#3d1208] mt-1 font-medium">
            {venue}
          </div>
        </div>

        {/* Scratchable Canvas Surface */}
        {!isRevealed && (
          <canvas
            ref={canvasRef}
            onMouseDown={handlePointerDown}
            onMouseMove={handlePointerMove}
            onMouseUp={handlePointerUp}
            onMouseLeave={handlePointerUp}
            onTouchStart={handlePointerDown}
            onTouchMove={handlePointerMove}
            onTouchEnd={handlePointerUp}
            className="absolute inset-0 w-full h-full cursor-pointer touch-none transition-opacity duration-500 z-10"
          />
        )}
      </div>

      <div className="flex items-center gap-2 mt-2.5">
        <span className="text-[11px] font-cinzel text-[#8b6b3e] tracking-wider">
          {isRevealed ? "✨ Date Revealed! ✨" : "Rub or drag on the card above to reveal"}
        </span>
      </div>
    </div>
  );
}

