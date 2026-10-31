import React, { useRef, useState, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';

export default function ScratchCard({ title, onComplete, forceReveal }) {
  const canvasRef = useRef(null);
  const cardRef = useRef(null);
  const [isScratched, setIsScratched] = useState(false);
  const isScratchingRef = useRef(false);
  const lastXRef = useRef(0);
  const lastYRef = useRef(0);

  // Trigger celebration explosion
  const fireCelebration = useCallback(() => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      const originX = (rect.left + rect.width / 2) / (window.innerWidth || 1);
      const originY = (rect.top + rect.height / 2) / (window.innerHeight || 1);

      confetti({
        particleCount: 45,
        spread: 60,
        origin: { x: Math.max(0, Math.min(1, originX)), y: Math.max(0, Math.min(1, originY)) },
        colors: ['#e5a0ae', '#f3b6c3', '#faf2e6', '#d4af37', '#ffffff', '#c43360'],
        disableForReducedMotion: true
      });
    }
  }, []);

  // Handle force reveal from "Reveal Date" button
  useEffect(() => {
    if (forceReveal && !isScratched) {
      setIsScratched(true);
      isScratchingRef.current = false;

      const canvas = canvasRef.current;
      if (canvas) {
        canvas.style.transition = 'opacity 0.5s ease';
        canvas.style.opacity = '0';
        setTimeout(() => {
          canvas.style.display = 'none';
        }, 500);
      }

      fireCelebration();
      onComplete?.();
    }
  }, [forceReveal, isScratched, fireCelebration, onComplete]);

  // Initialize canvas with blush gradient and glitter sparkles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const width = canvas.width;
    const height = canvas.height;

    // Linear gradient
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#fff7f8');
    gradient.addColorStop(0.3, '#f8d4dc');
    gradient.addColorStop(0.6, '#faf2eb');
    gradient.addColorStop(1, '#f5cfd7');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Sparkle glitter flecks
    ctx.fillStyle = '#ffffff';
    for (let i = 0; i < 450; i++) {
      ctx.fillRect(Math.random() * width, Math.random() * height, 1, 1);
    }
  }, []);

  // Get coordinates relative to canvas
  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    const scaleX = rect.width > 0 ? canvas.width / rect.width : 1;
    const scaleY = rect.height > 0 ? canvas.height / rect.height : 1;

    let clientX = 0;
    let clientY = 0;

    if (e.targetTouches && e.targetTouches.length > 0) {
      clientX = e.targetTouches[0].clientX;
      clientY = e.targetTouches[0].clientY;
    } else if (e.touches && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY
    };
  };

  const checkScratchPercentage = () => {
    if (isScratched) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let totalPixels = 0;
    let clearPixels = 0;

    for (let i = 3; i < imgData.data.length; i += 16) {
      totalPixels++;
      if (imgData.data[i] < 50) {
        clearPixels++;
      }
    }

    if (clearPixels / totalPixels > 0.02) {
      setIsScratched(true);
      isScratchingRef.current = false;

      canvas.style.transition = 'opacity 0.3s ease';
      canvas.style.opacity = '0';

      fireCelebration();

      setTimeout(() => {
        canvas.style.display = 'none';
      }, 300);

      onComplete?.();
    }
  };

  const handleStart = (e) => {
    if (isScratched) return;
    isScratchingRef.current = true;
    const { x, y } = getCoordinates(e);
    lastXRef.current = x;
    lastYRef.current = y;
  };

  const handleMove = (e) => {
    if (!isScratchingRef.current || isScratched) return;
    if (e.cancelable) e.preventDefault();

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const { x, y } = getCoordinates(e);

    ctx.beginPath();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineWidth = 18;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.moveTo(lastXRef.current, lastYRef.current);
    ctx.lineTo(x, y);
    ctx.stroke();

    lastXRef.current = x;
    lastYRef.current = y;

    checkScratchPercentage();
  };

  const handleEnd = () => {
    isScratchingRef.current = false;
  };

  return (
    <div
      ref={cardRef}
      className={`heart-scratch-card ${isScratched ? 'scratched-pop' : ''}`}
    >
      <div className="heart-border">
        <div className="heart-shape">
          <div className="scratch-base">
            <span
              className={`scratch-date ${title.length > 5 ? 'long-title' : ''}`}
            >
              {title}
            </span>
          </div>

          <canvas
            ref={canvasRef}
            className="scratch-canvas heart-canvas"
            width="180"
            height="180"
            onMouseDown={handleStart}
            onMouseMove={handleMove}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={handleStart}
            onTouchMove={handleMove}
            onTouchEnd={handleEnd}
          />
        </div>
      </div>
    </div>
  );
}

