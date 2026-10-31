import React from 'react';
import { weddingData } from '../data/weddingData';

export default function DetailsSection() {
  const { couple, details } = weddingData;

  return (
    <section id="detailsSection" className="details-section">
      <div className="content-wrapper scroll-animate" style={{ textAlign: 'center', padding: '25px 15px' }}>
        {/* Islamic Bismillah */}
        <h2
          style={{
            fontSize: '1.9rem',
            marginBottom: '8px',
            fontWeight: 'normal',
            color: '#e5a0ae',
            fontFamily: "'Amiri', serif",
            letterSpacing: '1px'
          }}
        >
          {details.bismillahArabic}
        </h2>

        {/* Translation */}
        <p
          className="details-text"
          style={{
            marginBottom: '25px',
            lineHeight: '1.6',
            fontStyle: 'italic',
            color: '#888',
            fontSize: '0.85rem',
            whiteSpace: 'pre-line'
          }}
        >
          {details.bismillahEnglish}
        </p>

        {/* Cordial Invitation */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', 'Alex Brush', serif",
            fontStyle: 'italic',
            fontSize: '1.3rem',
            fontWeight: '500',
            lineHeight: '1.75',
            color: '#33252a',
            maxWidth: '520px',
            margin: '0 auto 30px auto',
            letterSpacing: '0.3px',
            whiteSpace: 'pre-line'
          }}
        >
          {details.invitationNote}
        </p>

        {/* Groom Card */}
        <div
          className="groom-details-card"
          style={{
            background: '#ffffff',
            border: '1px solid #f3b6c3',
            borderRadius: '18px',
            padding: '24px 20px',
            marginBottom: '20px',
            boxShadow: '0 8px 30px rgba(229, 160, 174, 0.12)'
          }}
        >
          <span
            style={{
              fontSize: '0.75rem',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#e5a0ae',
              fontWeight: '700',
              display: 'block',
              marginBottom: '8px'
            }}
          >
            {couple.groom.title}
          </span>
          <h3
            style={{
              fontFamily: "'Great Vibes', 'Alex Brush', cursive",
              fontSize: '2.8rem',
              color: '#33252a',
              margin: '0 0 4px 0',
              fontWeight: 'normal'
            }}
          >
            {couple.groom.name}
          </h3>
          {couple.groom.arabicName && (
            <p
              dir="rtl"
              style={{
                fontFamily: "'Amiri', serif",
                fontSize: '1.5rem',
                color: '#e5a0ae',
                margin: '0 0 8px 0'
              }}
            >
              {couple.groom.arabicName}
            </p>
          )}
          <div style={{ width: '40px', height: '1px', background: '#f3b6c3', margin: '12px auto' }} />
          <p
            style={{
              margin: '8px 0 0 0',
              fontSize: '0.8rem',
              color: '#777',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              fontWeight: '600'
            }}
          >
            {couple.groom.relation}
          </p>
          <p
            style={{
              margin: '4px 0 0 0',
              fontSize: '1.1rem',
              color: '#33252a',
              fontWeight: '700'
            }}
          >
            {couple.groom.fatherName} &amp; {couple.groom.motherName}
          </p>
        </div>

        {/* Ornamental Ampersand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px',
            margin: '20px 0'
          }}
        >
          <div style={{ width: '50px', height: '1px', background: '#f3b6c3' }} />
          <span
            style={{
              fontFamily: "'Great Vibes', 'Alex Brush', cursive",
              fontSize: '2.5rem',
              color: '#e5a0ae'
            }}
          >
            &
          </span>
          <div style={{ width: '50px', height: '1px', background: '#f3b6c3' }} />
        </div>

        {/* Bride Card */}
        <div
          className="bride-details-card"
          style={{
            background: '#ffffff',
            border: '1px solid #f3b6c3',
            borderRadius: '18px',
            padding: '24px 20px',
            marginBottom: '35px',
            boxShadow: '0 8px 30px rgba(229, 160, 174, 0.12)'
          }}
        >
          <span
            style={{
              fontSize: '0.75rem',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#e5a0ae',
              fontWeight: '700',
              display: 'block',
              marginBottom: '8px'
            }}
          >
            {couple.bride.title}
          </span>
          <h3
            style={{
              fontFamily: "'Great Vibes', 'Alex Brush', cursive",
              fontSize: '2.8rem',
              color: '#33252a',
              margin: '0 0 4px 0',
              fontWeight: 'normal'
            }}
          >
            {couple.bride.name}
          </h3>
          {couple.bride.arabicName && (
            <p
              dir="rtl"
              style={{
                fontFamily: "'Amiri', serif",
                fontSize: '1.5rem',
                color: '#e5a0ae',
                margin: '0 0 8px 0'
              }}
            >
              {couple.bride.arabicName}
            </p>
          )}
          <div style={{ width: '40px', height: '1px', background: '#f3b6c3', margin: '12px auto' }} />
          <p
            style={{
              margin: '8px 0 0 0',
              fontSize: '0.8rem',
              color: '#777',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              fontWeight: '600'
            }}
          >
            {couple.bride.relation}
          </p>
          <p
            style={{
              margin: '4px 0 0 0',
              fontSize: '1.1rem',
              color: '#33252a',
              fontWeight: '700'
            }}
          >
            {couple.bride.fatherName} &amp; {couple.bride.motherName}
          </p>
        </div>

        {/* Pink Bow Ornament */}
        <div style={{ textAlign: 'center', margin: '30px auto 10px auto' }}>
          <img
            src={details.bowOrnament}
            alt="Pink Bow Ornament"
            style={{ width: '100%', maxWidth: '250px', height: 'auto', display: 'inline-block' }}
          />
        </div>
      </div>
    </section>
  );
}

