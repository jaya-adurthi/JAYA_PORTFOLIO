import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Icon } from './Icons';

const ROLES = ['Software Engineer', 'Frontend Developer'];

export const Hero = () => {
  const { fullName, summary, profileImg, resumePdf, github, linkedin, email } = portfolioData.personal;

  // Rotating role text state with opacity transition
  const [roleIndex, setRoleIndex] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState('fade-out');
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        setFadeState('fade-in');
      }, 400);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Left Column - Name, Rotating Role, Summary & CTAs */}
        <div className="hero-content">
          <span className="hero-pretitle">Personal Portfolio</span>

          <h1 className="hero-name font-serif">
            {fullName}
          </h1>

          <div className="hero-role-rotating">
            <span className={`rotating-text ${fadeState}`}>
              {ROLES[roleIndex]}
            </span>
          </div>

          <p className="hero-summary">
            {summary}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <Icon name="ChevronRight" size={16} />
            </a>

            <a
              href={resumePdf}
              download="Adurthi_Jaya_Lakshmi_Durga_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <Icon name="Download" size={16} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Links Bar */}
          <div className="hero-social-bar">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-social-link"
              title="GitHub Profile"
            >
              <Icon name="Github" size={16} />
              <span>GitHub</span>
            </a>

            <span className="social-dot">•</span>

            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-social-link"
              title="LinkedIn Profile"
            >
              <Icon name="Linkedin" size={16} />
              <span>LinkedIn</span>
            </a>

            <span className="social-dot">•</span>

            <a
              href={`mailto:${email}`}
              className="editorial-social-link"
              title="Send Email"
            >
              <Icon name="Mail" size={16} />
              <span>Email</span>
            </a>
          </div>

          {/* Highlights summary line */}
          <div className="editorial-highlights-line">
            <span className="highlight-tag">B.Tech CSE Student</span>
            <span className="highlight-sep">|</span>
            <span className="highlight-tag">CGPA 8.26</span>
            <span className="highlight-sep">|</span>
            <span className="highlight-tag">Palakollu, AP</span>
          </div>
        </div>

        {/* Right Column - Profile Visual & Status */}
        <div className="hero-visual">
          <div className="profile-visual-container">
            <div className="profile-wrapper">
              <div className="profile-border-ring">
                <img
                  src={profileImg}
                  alt={fullName}
                  className="profile-img"
                  loading="eager"
                />
              </div>
            </div>

            <div className="available-pill">
              <span className="green-status-dot"></span>
              <span>Available for work</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: 9rem;
          padding-bottom: 5.5rem;
          position: relative;
          min-height: 88vh;
          display: flex;
          align-items: center;
          border-bottom: 1px solid var(--border-color);
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3.5rem;
          align-items: center;
        }

        @media (min-width: 992px) {
          .hero-container {
            grid-template-columns: 1.25fr 0.75fr;
          }
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .hero-pretitle {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--text-accent);
          margin-bottom: 0.75rem;
        }

        .hero-name {
          font-size: 2.75rem;
          font-weight: 600;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 0.85rem;
          color: var(--text-primary);
        }

        @media (min-width: 768px) {
          .hero-name {
            font-size: 3.8rem;
          }
        }

        .hero-role-rotating {
          font-size: 1.35rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          color: var(--text-accent);
          min-height: 2.2rem;
          display: flex;
          align-items: center;
          font-family: var(--font-sans);
          letter-spacing: 0.02em;
        }

        @media (min-width: 768px) {
          .hero-role-rotating {
            font-size: 1.6rem;
          }
        }

        .rotating-text {
          transition: opacity 0.4s ease, transform 0.4s ease;
          display: inline-block;
        }

        .rotating-text.fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .rotating-text.fade-out {
          opacity: 0;
          transform: translateY(-8px);
        }

        .hero-summary {
          font-size: 1.05rem;
          color: var(--text-secondary);
          max-width: 580px;
          margin-bottom: 2rem;
          line-height: 1.7;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
          width: 100%;
        }

        @media (max-width: 576px) {
          .hero-actions .btn {
            width: 100%;
          }
        }

        .hero-social-bar {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 1.75rem;
          flex-wrap: wrap;
        }

        .editorial-social-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          text-decoration: none;
          color: var(--text-secondary);
          font-size: 0.85rem;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .editorial-social-link:hover {
          color: var(--text-primary);
        }

        .social-dot {
          color: var(--border-dark);
          font-size: 0.7rem;
        }

        .editorial-highlights-line {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
          width: 100%;
          max-width: 580px;
        }

        .highlight-sep {
          color: var(--border-color);
        }

        /* Profile Visual styling */
        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .profile-visual-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .profile-wrapper {
          position: relative;
          width: 250px;
          height: 250px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .profile-wrapper {
            width: 280px;
            height: 280px;
          }
        }

        .profile-border-ring {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          padding: 3px;
          background: var(--border-color);
          box-shadow: var(--shadow-sm);
          transition: border-color 0.3s ease;
        }

        .profile-wrapper:hover .profile-border-ring {
          border-color: var(--text-accent);
        }

        .profile-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          object-position: center 20%;
          display: block;
          background: var(--bg-secondary);
        }
      `}</style>
    </section>
  );
};
