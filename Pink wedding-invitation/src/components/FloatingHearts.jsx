import { useEffect } from 'react';

export default function FloatingHearts() {
  useEffect(() => {
    let lastSpawn = 0;

    const spawnHeart = (x, y) => {
      const now = Date.now();
      if (now - lastSpawn < 80) return; // throttle to keep smooth 60fps
      lastSpawn = now;

      const heart = document.createElement('span');
      heart.className = 'heart';
      heart.style.left = `${x}px`;
      heart.style.top = `${y}px`;
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 1000);
    };

    const handleMouseMove = (e) => {
      spawnHeart(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        spawnHeart(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return null;
}

