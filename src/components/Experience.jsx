import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">WORK EXPERIENCE</span>
          <h2 className="section-title font-serif">Internships & Roles</h2>
        </div>

        <div className="experience-editorial-stack">
          {experience.map((exp, idx) => (
            <article key={idx} className="experience-card glass-card">
              <div className="exp-card-header">
                <div>
                  <span className="exp-duration">{exp.duration} • {exp.type}</span>
                  <h3 className="exp-role font-serif">{exp.role}</h3>
                  <span className="exp-company">{exp.company}</span>
                </div>
              </div>

              <p className="exp-description">{exp.description}</p>

              <div className="exp-divider"></div>

              <ul className="exp-highlights-list">
                {exp.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="exp-highlight-item">
                    <span className="bullet">—</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          position: relative;
        }

        .experience-editorial-stack {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .experience-card {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .exp-duration {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--text-accent);
          display: block;
          margin-bottom: 0.35rem;
        }

        .exp-role {
          font-size: 1.6rem;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .exp-company {
          font-size: 1rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .exp-description {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        .exp-divider {
          height: 1px;
          background: var(--border-color);
        }

        .exp-highlights-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .exp-highlight-item {
          display: flex;
          gap: 0.6rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .bullet {
          color: var(--text-accent);
        }
      `}</style>
    </section>
  );
};
