import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Icon } from './Icons';

export const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Icon name="Briefcase" size={14} />
            <span>Work & Internship</span>
          </div>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Hands-on technical internship building real-world AI applications.
          </p>
        </div>

        <div className="experience-timeline">
          {experience.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot-wrapper">
                <div className="timeline-dot"></div>
                {index !== experience.length - 1 && <div className="timeline-line"></div>}
              </div>

              <div className="glass-card timeline-card">
                <div className="card-top-row">
                  <div className="exp-title-group">
                    <span className="exp-badge">{exp.type}</span>
                    <h3 className="exp-role">{exp.role}</h3>
                    <h4 className="exp-company">{exp.company}</h4>
                  </div>
                  <div className="exp-duration">
                    <Icon name="BookOpen" size={14} />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <p className="exp-description">{exp.description}</p>

                <div className="exp-highlights-list">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="exp-highlight-item">
                      <Icon name="Check" size={16} className="highlight-icon" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="exp-tech-row">
                  <span className="badge badge-tech">Python</span>
                  <span className="badge badge-tech">Streamlit</span>
                  <span className="badge badge-tech">AI & ML</span>
                  <span className="badge badge-tech">Sustainability</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          background: rgba(13, 19, 34, 0.4);
          position: relative;
        }

        .experience-timeline {
          max-width: 850px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .timeline-item {
          display: flex;
          gap: 1.5rem;
          position: relative;
        }

        @media (max-width: 640px) {
          .timeline-item {
            gap: 1rem;
          }
        }

        .timeline-dot-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          padding-top: 0.5rem;
        }

        .timeline-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--accent-blue);
          border: 3px solid var(--bg-primary);
          box-shadow: 0 0 15px var(--accent-blue);
          z-index: 2;
          flex-shrink: 0;
        }

        .timeline-line {
          width: 2px;
          flex: 1;
          background: linear-gradient(to bottom, var(--accent-blue), transparent);
          margin-top: 0.5rem;
        }

        .timeline-card {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .card-top-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .exp-title-group {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .exp-badge {
          display: inline-flex;
          align-self: flex-start;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          background: rgba(139, 92, 246, 0.15);
          border: 1px solid rgba(139, 92, 246, 0.3);
          color: #c084fc;
          font-size: 0.775rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.25rem;
        }

        .exp-role {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .exp-company {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-accent);
        }

        .exp-duration {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-size: 0.85rem;
          font-weight: 500;
        }

        .exp-description {
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.65;
        }

        .exp-highlights-list {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .exp-highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .highlight-icon {
          color: var(--accent-cyan);
          margin-top: 0.2rem;
          flex-shrink: 0;
        }

        .exp-tech-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          padding-top: 0.5rem;
          border-top: 1px solid var(--border-color);
        }
      `}</style>
    </section>
  );
};
