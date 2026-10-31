import React from 'react';
import { Star, Crown, MapPin } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function EventsSection() {
  const { events } = weddingData;

  return (
    <section className="venue-section">
      <div className="venue-container scroll-animate">
        {events.map((event, index) => {
          const isPrimary = event.buttonStyle === 'primary';

          return (
            <div
              key={event.id}
              className={`event-card scroll-animate stagger-anim delay-${index + 1}`}
              style={{
                background: '#ffffff',
                border: '1px solid #f3b6c3',
                borderRadius: '18px',
                padding: '24px 20px',
                marginBottom: '25px',
                boxShadow: '0 6px 22px rgba(229, 160, 174, 0.1)',
                textAlign: 'center'
              }}
            >
              {/* Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: isPrimary ? '#e5a0ae' : '#faf2e6',
                  color: isPrimary ? '#ffffff' : '#33252a',
                  border: isPrimary ? 'none' : '1px solid #f3b6c3',
                  padding: '5px 16px',
                  borderRadius: '20px',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  letterSpacing: '1.2px',
                  textTransform: 'uppercase',
                  marginBottom: '14px'
                }}
              >
                {event.badgeIcon === 'crown' ? (
                  <Crown size={18} style={{ color: '#c43360' }} />
                ) : (
                  <Star size={18} style={{ color: '#ffffff', fill: '#ffffff' }} />
                )}
                {event.badgeTitle}
              </div>

              {/* Venue Illustration */}
              <img
                src={event.image}
                alt={event.imageAlt}
                className={event.id === 'nikah' ? 'masjid-image' : 'venue-image'}
              />

              {/* Date */}
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.65rem',
                  color: '#33252a',
                  margin: '4px 0'
                }}
              >
                {event.date}
              </h3>

              {/* Time */}
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '1.1rem',
                  color: '#c43360',
                  fontWeight: '700',
                  margin: '6px 0 10px 0'
                }}
              >
                {event.time}
              </p>

              {/* Accent Divider */}
              <div
                style={{
                  height: '1px',
                  background: '#f3b6c3',
                  width: '60px',
                  margin: '10px auto'
                }}
              />

              {/* Venue Name (English) */}
              <p
                style={{
                  fontSize: '1.35rem',
                  fontWeight: '700',
                  color: '#33252a',
                  margin: '10px 0 2px 0'
                }}
              >
                📍 {event.venueName}
              </p>

              {/* Venue Name (Hindi) */}
              {event.venueNameHindi && (
                <p
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: '600',
                    color: '#c43360',
                    margin: '2px 0 8px 0'
                  }}
                >
                  {event.venueNameHindi}
                </p>
              )}

              {/* Venue Address */}
              <p
                style={{
                  fontSize: '0.92rem',
                  color: '#555',
                  margin: '0 0 18px 0',
                  lineHeight: '1.4',
                  whiteSpace: 'pre-line'
                }}
              >
                {event.venueAddress}
              </p>

              {/* Google Maps Button */}
              <a
                href={event.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={isPrimary ? 'map-btn' : 'map-btn-cream'}
              >
                <MapPin
                  size={16}
                  style={{
                    color: isPrimary ? '#ffffff' : '#c43360'
                  }}
                />
                View Location on Google Maps
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

