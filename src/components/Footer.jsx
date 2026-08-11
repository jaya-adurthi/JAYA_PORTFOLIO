import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Icon } from './Icons';

export const Footer = () => {
  const { fullName, shortName, github, linkedin, email } = portfolioData.personal;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand-col">
            <span className="footer-brand font-serif">{shortName}</span>
            <p className="footer-tagline">
              Software Engineer & Frontend Developer portfolio built with React and Vite.
            </p>
          </div>

          <div className="footer-links-col">
            <a href="#hero" className="footer-link">HOME</a>
            <a href="#about" className="footer-link">ABOUT</a>
            <a href="#projects" className="footer-link">PROJECTS</a>
            <a href="#skills" className="footer-link">SKILLS</a>
            <a href="#contact" className="footer-link">CONTACT</a>
          </div>

          <div className="footer-social-col">
            <a href={github} target="_blank" rel="noopener noreferrer" className="footer-icon-btn" title="GitHub">
              <Icon name="Github" size={16} />
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="footer-icon-btn" title="LinkedIn">
              <Icon name="Linkedin" size={16} />
            </a>
            <a href={`mailto:${email}`} className="footer-icon-btn" title="Email">
              <Icon name="Mail" size={16} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="copyright-text">
            © {currentYear} {fullName}. All rights reserved.
          </span>
          <span className="footer-location">Palakollu, Andhra Pradesh, India</span>
        </div>
      </div>

      <style>{`
        .footer-section {
          padding: 4rem 0 3rem;
          background: var(--bg-primary);
          border-top: 1px solid var(--border-color);
          position: relative;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 2rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid var(--border-color);
        }

        .footer-brand-col {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          max-width: 380px;
        }

        .footer-brand {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .footer-tagline {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .footer-links-col {
          display: flex;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .footer-link {
          text-decoration: none;
          color: var(--text-secondary);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          transition: color 0.2s ease;
        }

        .footer-link:hover {
          color: var(--text-primary);
        }

        .footer-social-col {
          display: flex;
          gap: 0.75rem;
        }

        .footer-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .footer-icon-btn:hover {
          border-color: var(--text-primary);
          color: var(--text-primary);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1.75rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          flex-wrap: wrap;
          gap: 0.75rem;
        }
      `}</style>
    </footer>
  );
};
