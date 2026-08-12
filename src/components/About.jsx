import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  const { aboutParagraphs } = portfolioData.personal;

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate about engineering software solutions that bridge technical complexity with practical everyday utility.
          </p>
        </div>

        <div className="about-wrapper">
          {/* Main Centered Copy Card */}
          <div className="glass-card about-main-card">
            <div className="about-header-badge">
              <span>CSE Undergraduate (2023 – 2027)</span>
            </div>

            <div className="about-text-content">
              {aboutParagraphs.map((para, idx) => (
                <p key={idx} className="about-paragraph">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background: rgba(17, 24, 39, 0.4);
          position: relative;
        }

        .about-wrapper {
          max-width: 860px;
          margin: 0 auto;
        }

        .about-main-card {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          padding: 2.25rem;
        }

        .about-header-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-sm);
          background: rgba(37, 99, 235, 0.1);
          border: 1px solid rgba(37, 99, 235, 0.25);
          color: var(--text-accent);
          font-size: 0.85rem;
          font-weight: 600;
          align-self: flex-start;
        }

        .about-text-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .about-paragraph {
          color: var(--text-secondary);
          font-size: 1.025rem;
          line-height: 1.7;
        }
      `}</style>
    </section>
  );
};
