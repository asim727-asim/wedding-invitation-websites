import React from 'react';
import { weddingData } from '../data/weddingData';

export default function Footer() {
  const { footer } = weddingData;

  return (
    <footer style={{ backgroundColor: '#0d0d0d', padding: '18px 20px', textAlign: 'center' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '14px',
          maxWidth: '500px',
          margin: '0 auto'
        }}
      >
        <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, #e5a0ae)' }} />

        <a
          href={footer.designerUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          {/* Instagram SVG icon */}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="6" stroke="#e5a0ae" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="5" stroke="#e5a0ae" strokeWidth="1.8" />
            <circle cx="17.5" cy="6.5" r="1.2" fill="#e5a0ae" />
          </svg>
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.68rem',
              letterSpacing: '2.5px',
              color: '#e5a0ae',
              fontWeight: '500'
            }}
          >
            {footer.designerHandle}
          </span>
        </a>

        <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, #e5a0ae, transparent)' }} />
      </div>

      <p
        style={{
          color: '#bbb8b8',
          fontSize: '0.6rem',
          letterSpacing: '1.5px',
          margin: '8px 0 0',
          fontFamily: "'Montserrat', sans-serif"
        }}
      >
        {footer.tagline}
      </p>
    </footer>
  );
}

