import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Icon } from './Icons';

const ROLES = ['Software Engineer', 'Frontend Developer'];

export const Hero = () => {
  const { fullName, summary, profileImg, resumePdf, github, linkedin, email } = portfolioData.personal;

  // Typing animation state
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout;

    if (!isDeleting && displayText !== currentRole) {
      // Typing next character
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }, 90);
    } else if (!isDeleting && displayText === currentRole) {
      // Finished typing full word -> pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayText !== '') {
      // Deleting character
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }, 45);
    } else if (isDeleting && displayText === '') {
      // Finished deleting -> switch to next role
      setIsDeleting(false);
      setRoleIndex((prevIndex) => (prevIndex + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Left Column - Name, Typing Role, Actions & Social Bar */}
        <div className="hero-content">
          <h1 className="hero-name">
            {fullName}
          </h1>

          <h2 className="hero-role-typing">
            <span className="typing-text">{displayText}</span>
            <span className="blinking-cursor">|</span>
          </h2>

          <p className="hero-summary">
            {summary}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View My Projects</span>
              <Icon name="ChevronRight" size={18} />
            </a>

            <a
              href={resumePdf}
              download="Adurthi_Jaya_Lakshmi_Durga_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <Icon name="Download" size={18} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Links Bar */}
          <div className="hero-social-bar">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Icon name="Github" size={18} />
              <span>GitHub</span>
            </a>

            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <Icon name="Linkedin" size={18} />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${email}`}
              className="social-icon-link"
              title="Send Email"
              aria-label="Send Email"
            >
              <Icon name="Mail" size={18} />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Right Column - Clean Professional Profile Picture & Available for Work Badge */}
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

            {/* Available for Work Pill Badge centered directly below profile image */}
            <div className="available-pill">
              <span className="green-status-dot"></span>
              <span>Available for work</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: 8rem;
          padding-bottom: 4.5rem;
          position: relative;
          min-height: 85vh;
          display: flex;
          align-items: center;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }

        @media (min-width: 992px) {
          .hero-container {
            grid-template-columns: 1.2fr 0.8fr;
          }
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .hero-name {
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        @media (min-width: 768px) {
          .hero-name {
            font-size: 3.25rem;
          }
        }

        .hero-role-typing {
          font-family: var(--font-sans);
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 1.25rem;
          color: var(--text-accent);
          min-height: 2.2rem;
          display: flex;
          align-items: center;
          letter-spacing: -0.01em;
        }

        @media (min-width: 768px) {
          .hero-role-typing {
            font-size: 1.65rem;
          }
        }

        .blinking-cursor {
          display: inline-block;
          margin-left: 2px;
          color: var(--text-accent);
          animation: cursorBlink 0.9s infinite;
          font-weight: 400;
        }

        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hero-summary {
          font-size: 1.05rem;
          color: var(--text-secondary);
          max-width: 580px;
          margin-bottom: 1.75rem;
          line-height: 1.65;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
          margin-bottom: 1.75rem;
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
          gap: 1rem;
          flex-wrap: wrap;
        }

        .social-icon-link {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          text-decoration: none;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 600;
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-md);
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          transition: all 0.2s ease;
        }

        .social-icon-link:hover {
          color: var(--text-accent);
          border-color: var(--accent-blue);
          transform: translateY(-1px);
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
            width: 290px;
            height: 290px;
          }
        }

        .profile-border-ring {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          padding: 3px;
          background: var(--border-color);
          box-shadow: var(--shadow-md);
          transition: border-color 0.25s ease;
        }

        .profile-wrapper:hover .profile-border-ring {
          background: var(--accent-blue);
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
