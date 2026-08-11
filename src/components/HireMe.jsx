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
            <span className="section-label">CAREER OPPORTUNITIES</span>
            <h2 className="section-title font-serif">Hire Me</h2>
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
              <Icon name="Mail" size={16} />
              <span>GET IN TOUCH</span>
            </button>

            <div className="hire-social-links">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <Icon name="Github" size={14} />
                <span>GITHUB</span>
              </a>

              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <Icon name="Linkedin" size={14} />
                <span>LINKEDIN</span>
              </a>

              <a
                href={`mailto:${email}`}
                className="btn btn-secondary btn-sm"
              >
                <Icon name="Mail" size={14} />
                <span>EMAIL</span>
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
          max-width: 860px;
          margin: 0 auto;
          text-align: center;
          padding: 3.5rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2.25rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
        }

        .hire-me-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .hire-me-text {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 640px;
          line-height: 1.7;
          margin-top: 0.5rem;
        }

        .hire-me-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          width: 100%;
        }

        .hire-primary-btn {
          padding: 0.9rem 2.25rem;
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
