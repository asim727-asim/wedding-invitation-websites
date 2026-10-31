import React, { useState, useEffect } from 'react';

const PETAL_SVGS = [
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 20"><ellipse cx="7" cy="10" rx="5" ry="9" fill="COLOR" opacity="0.88" transform="rotate(0,7,10)"/></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 18"><path d="M6 1 C9 5 11 10 6 17 C1 10 3 5 6 1Z" fill="COLOR" opacity="0.85"/></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16"><ellipse cx="5" cy="8" rx="4" ry="7" fill="COLOR" opacity="0.8"/></svg>`
];

const PETAL_COLORS = ['#8b1a1a', '#a01c1c', '#c0392b', '#7a1515', '#b52222'];

export default function FallingLeaves({ count = 20, containerId }) {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const generatedLeaves = [];
    let styleRules = '';

    for (let i = 0; i < count; i++) {
      const template = PETAL_SVGS[Math.floor(Math.random() * PETAL_SVGS.length)];
      const color = PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)];
      const svg = template.replace('COLOR', color);

      const size = 10 + Math.random() * 10;
      const leftPercent = Math.random() * 100;
      const delay = Math.random() * 20;
      const duration = 14 + Math.random() * 14;
      const driftX = (Math.random() - 0.5) * 70;
      const id = `lf_${containerId}_${i}`;

      generatedLeaves.push({
        id,
        svg,
        style: {
          left: `${leftPercent}%`,
          width: `${size}px`,
          height: `${size * 1.5}px`,
          animationDuration: `${duration}s`,
          animationDelay: `-${delay}s`,
          transform: `rotate(${Math.random() * 360}deg)`,
          animationName: `lfall_${id}`
        }
      });

      styleRules += `
        @keyframes lfall_${id} {
          0% { transform: translateY(-30px) rotate(0deg) translateX(0px); opacity: 0; }
          8% { opacity: 0.88; }
          88% { opacity: 0.65; }
          100% { transform: translateY(105vh) rotate(${360 + Math.random() * 360}deg) translateX(${driftX}px); opacity: 0; }
        }
      `;
    }

    setLeaves(generatedLeaves);

    const styleEl = document.createElement('style');
    styleEl.textContent = styleRules;
    document.head.appendChild(styleEl);

    return () => {
      if (document.head.contains(styleEl)) {
        document.head.removeChild(styleEl);
      }
    };
  }, [count, containerId]);

  return (
    <div className="leaves-canvas" id={containerId} aria-hidden="true">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="leaf"
          style={leaf.style}
          dangerouslySetInnerHTML={{ __html: leaf.svg }}
        />
      ))}
    </div>
  );
}

