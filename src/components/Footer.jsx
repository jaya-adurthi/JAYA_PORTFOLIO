import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Icon } from './Icons';

export const Footer = () => {
  const { fullName, email, github, linkedin } = portfolioData.personal;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand-dot"></span>
            <span className="footer-brand-name">{fullName}</span>
          </div>

          <div className="footer-social-links">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-link"
              title="GitHub"
              aria-label="GitHub Profile"
            >
              <Icon name="Github" size={18} />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-link"
              title="LinkedIn"
              aria-label="LinkedIn Profile"
            >
              <Icon name="Linkedin" size={18} />
            </a>
            <a
              href={`mailto:${email}`}
              className="footer-icon-link"
              title="Email"
              aria-label="Email Me"
            >
              <Icon name="Mail" size={18} />
            </a>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © {currentYear} {fullName}. All rights reserved.
          </p>

          <p className="built-with-text">
            <span>Built with React</span>
          </p>
        </div>
      </div>

      <style>{`
        .footer-section {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          padding: 2.5rem 0 1.75rem;
          margin-top: 4rem;
        }

        .footer-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .footer-brand-name {
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--text-primary);
        }

        .footer-social-links {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .footer-icon-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: var(--radius-md);
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .footer-icon-link:hover {
          color: var(--text-accent);
          border-color: var(--accent-blue);
          transform: translateY(-1px);
        }

        .footer-divider {
          height: 1px;
          background: var(--border-color);
          width: 100%;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .built-with-text {
          font-weight: 500;
          color: var(--text-secondary);
        }
      `}</style>
    </footer>
  );
};
