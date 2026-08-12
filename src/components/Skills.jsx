import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">MY TOOLBELT</span>
          <h2 className="section-title font-serif">Technical Skills</h2>
          <p className="section-subtitle">
            Core technologies, programming languages, and modern tools utilized in application development.
          </p>
        </div>

        {/* Editorial Category Grid */}
        <div className="skills-editorial-grid">
          {skills.map((skillGroup, groupIdx) => (
            <div key={groupIdx} className="skills-category-column glass-card">
              <h3 className="category-title font-serif">{skillGroup.category}</h3>
              <ul className="editorial-tech-list">
                {skillGroup.items.map((item) => (
                  <li key={item} className="editorial-tech-item">
                    <span className="tech-bullet">—</span>
                    <span className="tech-name">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          position: relative;
        }

        .skills-editorial-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .skills-editorial-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 992px) {
          .skills-editorial-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .skills-category-column {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.75rem;
        }

        .category-title {
          font-size: 1.25rem;
          color: var(--text-primary);
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--border-color);
        }

        .editorial-tech-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .editorial-tech-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .tech-bullet {
          color: var(--text-accent);
          font-weight: 400;
        }

        .tech-name {
          color: var(--text-primary);
          font-weight: 500;
        }
      `}</style>
    </section>
  );
};
