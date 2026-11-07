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
          const isMasjid = event.id === 'nikkah';

          return (
            <div
              key={`${event.id}-${index}`}
              className={`luxury-event-card scroll-animate stagger-anim delay-${index + 1}`}
            >
              {/* Event Category Badge */}
              <div className={`event-header-badge ${isPrimary ? 'badge-primary' : 'badge-champagne'}`}>
                {event.badgeIcon === 'crown' ? (
                  <Crown size={15} className="badge-icon-crown" />
                ) : (
                  <Star size={15} className="badge-icon-star" />
                )}
                <span>{event.badgeTitle}</span>
              </div>

              {/* Venue Illustration */}
              <div className="event-illustration-container">
                <img
                  src={event.image}
                  alt={event.imageAlt}
                  className={isMasjid ? 'masjid-image' : 'venue-image'}
                  loading="lazy"
                />
              </div>

              {/* Event Date Heading */}
              <h3 className="event-date-display">
                {event.date}
              </h3>

              {/* Event Time */}
              <p className="event-time-display">
                {event.time}
              </p>

              {/* Subtle Ornamental Hairline */}
              <div className="event-hairline-separator">
                <span className="hairline-line" />
                <span className="hairline-dot">✦</span>
                <span className="hairline-line" />
              </div>

              {/* Venue Name (English) */}
              <h4 className="event-venue-heading">
                {event.venueName}
              </h4>

              {/* Venue Name (Hindi) */}
              {event.venueNameHindi && (
                <p className="event-venue-hindi">
                  {event.venueNameHindi}
                </p>
              )}

              {/* Venue Address */}
              {event.venueAddress && (
                <p className="event-venue-address">
                  {event.venueAddress}
                </p>
              )}

              {/* Google Maps Button */}
              <div className="event-map-btn-wrapper">
                <a
                  href={event.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isPrimary ? 'luxury-map-btn primary' : 'luxury-map-btn champagne'}
                  aria-label={`View ${event.venueName} location on Google Maps`}
                >
                  <MapPin size={16} className="map-btn-icon" />
                  <span>View Location on Google Maps</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

