import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  const { aboutParagraphs } = portfolioData.personal;

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">ABOUT ME</span>
          <h2 className="section-title font-serif">Academic & Engineering Focus</h2>
        </div>

        <div className="about-grid">
          <div className="about-paragraphs-column">
            {aboutParagraphs.map((paragraph, index) => (
              <p key={index} className="about-text">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="about-editorial-box glass-card">
            <h3 className="box-title font-serif">Core Specializations</h3>
            <ul className="spec-list">
              <li className="spec-item">
                <span className="spec-num">01</span>
                <div className="spec-info">
                  <span className="spec-name">Frontend Web Engineering</span>
                  <span className="spec-desc">React.js, JavaScript (ES6+), HTML5, CSS3, Vite</span>
                </div>
              </li>
              <li className="spec-item">
                <span className="spec-num">02</span>
                <div className="spec-info">
                  <span className="spec-name">Python & AI Web Applications</span>
                  <span className="spec-desc">Streamlit, Python script automation, AI integrations</span>
                </div>
              </li>
              <li className="spec-item">
                <span className="spec-num">03</span>
                <div className="spec-info">
                  <span className="spec-name">Problem Solving & Architecture</span>
                  <span className="spec-desc">Data Structures, SQL, Clean Code & Version Control</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          position: relative;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 1.1fr 0.9fr;
          }
        }

        .about-paragraphs-column {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .about-text {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .about-editorial-box {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .box-title {
          font-size: 1.5rem;
          color: var(--text-primary);
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-color);
        }

        .spec-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .spec-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .spec-num {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-accent);
          padding-top: 0.15rem;
        }

        .spec-info {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .spec-name {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .spec-desc {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
};
