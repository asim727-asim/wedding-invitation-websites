import React, { useRef, useEffect } from 'react';

export default function RevealSection({
  children,
  title,
  className = '',
  noDefaultStyles = false,
  id
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      id={id}
      className={`reveal w-full ${
        noDefaultStyles
          ? ''
          : 'bg-[rgba(248,240,224,0.93)] backdrop-blur-md rounded-[20px] pt-[28px] px-[22px] pb-[26px]'
      } ${className}`}
    >
      {title && (
        <>
          <div className="flex items-center gap-2 justify-center mb-4">
            <div className="flex-1 h-[0.5px] bg-[#c9a45a] max-w-[80px]" />
            <div className="w-[10px] h-[10px] bg-[#9b2020] rotate-45 shrink-0" />
            <div className="flex-1 h-[0.5px] bg-[#c9a45a] max-w-[80px]" />
          </div>
          <div className="font-cinzel text-[10px] tracking-[5px] text-[#8b2020] text-center mb-5">
            {title}
          </div>
        </>
      )}
      {children}
    </div>
  );
}

