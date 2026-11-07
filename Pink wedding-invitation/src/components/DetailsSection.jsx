import React from 'react';
import { weddingData } from '../data/weddingData';

export default function DetailsSection() {
  const { couple, details } = weddingData;

  return (
    <section id="detailsSection" className="details-section">
      <div className="content-wrapper scroll-animate">
        {/* Islamic Bismillah */}
        <div className="bismillah-header">
          <h2 className="bismillah-arabic">
            {details.bismillahArabic}
          </h2>
          <p className="bismillah-translation">
            {details.bismillahEnglish}
          </p>
          <div className="bismillah-divider">
            <span className="bismillah-divider-line" />
            <span className="bismillah-divider-knot">✦</span>
            <span className="bismillah-divider-line" />
          </div>
        </div>

        {/* Cordial Invitation */}
        <p className="invitation-paragraph">
          {details.invitationNote}
        </p>

        {/* Groom Card */}
        <div className="luxury-stationery-card groom-card">
          <span className="stationery-role-tag">
            {couple.groom.title}
          </span>
          <h3 className="stationery-person-name groom-script">
            {couple.groom.name}
          </h3>
          <div className="stationery-card-hairline" />
          <p className="stationery-relation-label">
            {couple.groom.relation}
          </p>
          <p className="stationery-parents-name">
            <span className="parent-title-name">{couple.groom.fatherName}</span>
            <span className="parent-ampersand">&amp;</span>
            <span className="parent-title-name">{couple.groom.motherName}</span>
          </p>
        </div>

        {/* Ornamental Ampersand */}
        <div className="stationery-ampersand-divider">
          <span className="ampersand-flourish-line" />
          <span className="ampersand-glyph">&amp;</span>
          <span className="ampersand-flourish-line" />
        </div>

        {/* Bride Card */}
        <div className="luxury-stationery-card bride-card">
          <span className="stationery-role-tag">
            {couple.bride.title}
          </span>
          <h3 className="stationery-person-name bride-script">
            {couple.bride.name}
          </h3>
          <div className="stationery-card-hairline" />
          <p className="stationery-relation-label">
            {couple.bride.relation}
          </p>
          <p className="stationery-parents-name">
            <span className="parent-title-name">{couple.bride.fatherName}</span>
            <span className="parent-ampersand">&amp;</span>
            <span className="parent-title-name">{couple.bride.motherName}</span>
          </p>
        </div>

        {/* Pink Bow Ornament */}
        <div className="stationery-bow-wrapper">
          <img
            src={details.bowOrnament}
            alt="Pink Bow Ornament"
            className="stationery-bow-img"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

