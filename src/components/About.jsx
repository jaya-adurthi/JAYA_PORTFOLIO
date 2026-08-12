import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Icon } from './Icons';

export const About = () => {
  const { aboutParagraphs } = portfolioData.personal;

  const focusPoints = [
    {
      title: "Software Engineering",
      desc: "Building clean, scalable applications with React, JavaScript, and Python.",
      icon: "Code"
    },
    {
      title: "Real-World Impact",
      desc: "Developing practical platforms like student portals and AI tools for sustainability.",
      icon: "Globe"
    },
    {
      title: "Continuous Growth",
      desc: "Fast learner committed to exploring new AI frameworks and modern web technologies.",
      icon: "BookOpen"
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate about engineering software solutions that bridge technical complexity with practical everyday utility.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Copy Card */}
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

          {/* Feature Highlights Cards */}
          <div className="about-features">
            {focusPoints.map((point) => (
              <div key={point.title} className="glass-card feature-card">
                <div className="feature-icon-wrapper">
                  <Icon name={point.icon} size={22} />
                </div>
                <div className="feature-info">
                  <h3 className="feature-title">{point.title}</h3>
                  <p className="feature-desc">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background: rgba(17, 24, 39, 0.4);
          position: relative;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
        }

        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 1.1fr 0.9fr;
          }
        }

        .about-main-card {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .about-header-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.3rem 0.8rem;
          border-radius: var(--radius-sm);
          background: rgba(37, 99, 235, 0.1);
          border: 1px solid rgba(37, 99, 235, 0.25);
          color: var(--text-accent);
          font-size: 0.825rem;
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
          font-size: 1rem;
          line-height: 1.7;
        }

        .about-features {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .feature-card {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.25rem;
        }

        .feature-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: var(--radius-md);
          background: rgba(37, 99, 235, 0.1);
          border: 1px solid rgba(37, 99, 235, 0.2);
          color: var(--text-accent);
          flex-shrink: 0;
        }

        .feature-title {
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
          color: var(--text-primary);
        }

        .feature-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
};
