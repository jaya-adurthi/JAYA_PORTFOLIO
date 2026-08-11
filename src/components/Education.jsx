import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Education = () => {
  const { degree, college, duration, cgpa, location } = portfolioData.education;

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">ACADEMIC BACKGROUND</span>
          <h2 className="section-title font-serif">Education</h2>
        </div>

        <div className="education-editorial-card glass-card">
          <div className="edu-card-header">
            <div>
              <span className="edu-year-tag">{duration}</span>
              <h3 className="edu-degree font-serif">{degree}</h3>
              <span className="edu-college">{college}</span>
            </div>
            <div className="edu-cgpa-badge font-serif">
              <span className="cgpa-val">{cgpa}</span>
              <span className="cgpa-label">CGPA</span>
            </div>
          </div>

          <div className="edu-divider"></div>

          <div className="edu-card-footer">
            <span className="edu-location">📍 {location}</span>
            <span className="edu-status">Final-Year B.Tech Student</span>
          </div>
        </div>
      </div>

      <style>{`
        .education-section {
          position: relative;
        }

        .education-editorial-card {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .edu-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1.25rem;
        }

        .edu-year-tag {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--text-accent);
          display: block;
          margin-bottom: 0.35rem;
        }

        .edu-degree {
          font-size: 1.6rem;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .edu-college {
          font-size: 1rem;
          color: var(--text-secondary);
        }

        .edu-cgpa-badge {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          padding: 0.5rem 1.25rem;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          background: var(--bg-secondary);
        }

        .cgpa-val {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .cgpa-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
        }

        .edu-divider {
          height: 1px;
          background: var(--border-color);
        }

        .edu-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.9rem;
          color: var(--text-secondary);
          flex-wrap: wrap;
          gap: 0.5rem;
        }
      `}</style>
    </section>
  );
};
