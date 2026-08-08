import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Icon } from './Icons';

export const Achievements = () => {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Icon name="Award" size={14} />
            <span>Honors & Events</span>
          </div>
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">
            Hackathons and project expositions where I showcased technical innovations.
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((item, idx) => (
            <div key={idx} className="glass-card achievement-card">
              <div className="achievement-icon-row">
                <div className="achievement-badge-icon">
                  <Icon name="Award" size={24} />
                </div>
                <span className="event-pill">{item.event}</span>
              </div>

              <h3 className="achievement-title">{item.title}</h3>
              
              {item.location && (
                <div className="achievement-location">
                  <Icon name="MapPin" size={14} />
                  <span>{item.location}</span>
                </div>
              )}

              <p className="achievement-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .achievements-section {
          position: relative;
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
        }

        @media (min-width: 768px) {
          .achievements-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .achievement-card {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
          height: 100%;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .achievement-card:hover {
          border-color: rgba(139, 92, 246, 0.4);
        }

        .achievement-icon-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .achievement-badge-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          border-radius: var(--radius-md);
          background: rgba(139, 92, 246, 0.12);
          border: 1px solid rgba(139, 92, 246, 0.25);
          color: #c084fc;
        }

        .event-pill {
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.25);
          color: var(--text-accent);
          letter-spacing: 0.05em;
        }

        .achievement-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.35;
        }

        .achievement-location {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .achievement-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};
