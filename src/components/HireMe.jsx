import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Icon } from './Icons';

export const HireMe = () => {
  const { github, linkedin, email } = portfolioData.personal;

  const handleScrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hire-me" className="section hire-me-section">
      <div className="container">
        <div className="hire-me-wrapper glass-card">
          <div className="hire-me-header">
            <h2 className="section-title">Hire Me</h2>
            <p className="hire-me-text">
              I'm currently looking for software development opportunities and internships where I can apply my skills, build real-world solutions, and continue learning.
            </p>
          </div>

          <div className="hire-me-actions">
            <button
              type="button"
              onClick={handleScrollToContact}
              className="btn btn-primary hire-primary-btn"
            >
              <Icon name="Mail" size={18} />
              <span>Get In Touch</span>
            </button>

            <div className="hire-social-links">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <Icon name="Github" size={16} />
                <span>GitHub</span>
              </a>

              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <Icon name="Linkedin" size={16} />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${email}`}
                className="btn btn-secondary btn-sm"
              >
                <Icon name="Mail" size={16} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hire-me-section {
          position: relative;
        }

        .hire-me-wrapper {
          max-width: 850px;
          margin: 0 auto;
          text-align: center;
          padding: 3rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
        }

        .hire-me-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }

        .hire-me-text {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 620px;
          line-height: 1.65;
        }

        .hire-me-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          width: 100%;
        }

        .hire-primary-btn {
          padding: 0.85rem 2rem;
          font-size: 1rem;
        }

        .hire-social-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.75rem;
        }
      `}</style>
    </section>
  );
};
