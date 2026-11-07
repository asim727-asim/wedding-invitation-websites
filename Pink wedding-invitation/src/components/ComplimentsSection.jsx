import React from 'react';
import { weddingData } from '../data/weddingData';

export default function ComplimentsSection() {
  const { compliments } = weddingData;

  return (
    <section className="compliments-section">
      <div className="compliments-container scroll-animate">
        <div className="compliments-header">
          <span className="comp-line" />
          <span className="comp-label">{compliments.title}</span>
          <span className="comp-line" />
        </div>

        <div className="comp-ornament">{compliments.symbol}</div>

        <div className="comp-family-list">
          {compliments.members.map((member, index) => (
            <div key={index} className="comp-member">
              <p className="comp-name">
                {member.name}
              </p>
              {member.role && <p className="comp-role">{member.role}</p>}
              {index < compliments.members.length - 1 && <div className="comp-divider" />}
            </div>
          ))}
        </div>

        <div className="comp-stars">{compliments.footerTag}</div>
      </div>
    </section>
  );
}

