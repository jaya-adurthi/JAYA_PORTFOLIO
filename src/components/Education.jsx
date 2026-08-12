import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Icon } from './Icons';

export const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Icon name="BookOpen" size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Formal education in Computer Science and Engineering.
          </p>
        </div>

        <div className="education-card-wrapper">
          <div className="glass-card education-card">
            <div className="edu-top-row">
              <div className="edu-icon-badge">
                <Icon name="BookOpen" size={24} />
              </div>
              <div className="edu-duration-badge">
                <span>{education.duration}</span>
              </div>
            </div>

            <div className="edu-main-info">
              <h3 className="edu-degree">{education.degree}</h3>
              <h4 className="edu-college">{education.college}</h4>
            </div>

            <div className="edu-details-grid">
              <div className="detail-item">
                <span className="detail-label">Location</span>
                <span className="detail-value">
                  <Icon name="MapPin" size={14} />
                  <span>{education.location}</span>
                </span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Current CGPA</span>
                <span className="detail-value cgpa-highlight">
                  <span>{education.cgpa}</span>
                </span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Status</span>
                <span className="detail-value">
                  <span className="dot-active"></span>
                  <span>Final Year Student</span>
                </span>
              </div>
            </div>

            <div className="edu-courses-box">
              <span className="courses-title">Core Subjects Covered:</span>
              <div className="courses-tags">
                <span className="badge badge-tech">Data Structures & Algorithms</span>
                <span className="badge badge-tech">Object-Oriented Programming</span>
                <span className="badge badge-tech">Database Management Systems</span>
                <span className="badge badge-tech">Operating Systems & Linux</span>
                <span className="badge badge-tech">Computer Networks</span>
                <span className="badge badge-tech">Software Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .education-section {
          background: rgba(13, 19, 34, 0.4);
          position: relative;
        }

        .education-card-wrapper {
          max-width: 850px;
          margin: 0 auto;
        }

        .education-card {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
          padding: 2.25rem;
          border-color: rgba(59, 130, 246, 0.25);
          position: relative;
          overflow: hidden;
        }

        .education-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 5px;
          height: 100%;
          background: var(--accent-gradient);
        }

        .edu-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .edu-icon-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          background: rgba(59, 130, 246, 0.12);
          border: 1px solid rgba(59, 130, 246, 0.3);
          color: var(--text-accent);
        }

        .edu-duration-badge {
          padding: 0.4rem 1rem;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .edu-main-info {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .edu-degree {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .edu-college {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text-accent);
        }

        .edu-details-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          padding: 1.25rem;
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
        }

        @media (min-width: 640px) {
          .edu-details-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .detail-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .detail-label {
          font-size: 0.775rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .detail-value {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .cgpa-highlight {
          color: #60a5fa;
          font-size: 1.1rem;
        }

        .dot-active {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
        }

        .edu-courses-box {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .courses-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .courses-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }
      `}</style>
    </section>
  );
};
