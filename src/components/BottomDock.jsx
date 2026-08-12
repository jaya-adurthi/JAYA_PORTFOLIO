import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Icon } from './Icons';

export const BottomDock = ({ theme, toggleTheme }) => {
  const { github, linkedin, email } = portfolioData.personal;

  const handleScrollToHome = (e) => {
    e.preventDefault();
    const heroEl = document.getElementById('hero');
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bottom-dock-wrapper">
      <div className="bottom-dock-container">
        {/* 1. Home Link */}
        <a
          href="#hero"
          onClick={handleScrollToHome}
          className="dock-item"
          title="Scroll to Home"
          aria-label="Scroll to Home"
        >
          <Icon name="Globe" size={18} />
          <span className="dock-label">Home</span>
        </a>

        <div className="dock-divider"></div>

        {/* 2. GitHub Link */}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="dock-item"
          title="GitHub Profile"
          aria-label="GitHub Profile"
        >
          <Icon name="Github" size={18} />
          <span className="dock-label">GitHub</span>
        </a>

        {/* 3. LinkedIn Link */}
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="dock-item"
          title="LinkedIn Profile"
          aria-label="LinkedIn Profile"
        >
          <Icon name="Linkedin" size={18} />
          <span className="dock-label">LinkedIn</span>
        </a>

        {/* 4. Email Link */}
        <a
          href={`mailto:${email}`}
          className="dock-item"
          title="Send Email"
          aria-label="Send Email"
        >
          <Icon name="Mail" size={18} />
          <span className="dock-label">Email</span>
        </a>

        <div className="dock-divider"></div>

        {/* 5. Theme Toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          className="dock-item dock-btn"
          title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
          aria-label="Toggle theme mode"
        >
          <Icon name={theme === 'dark' ? "Sun" : "Moon"} size={18} />
          <span className="dock-label">Theme</span>
        </button>
      </div>

      <style>{`
        .bottom-dock-wrapper {
          position: fixed;
          bottom: 1.25rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 900;
          pointer-events: auto;
          max-width: 92vw;
        }

        .bottom-dock-container {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.4rem 0.85rem;
          background: var(--bg-glass);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-full);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: var(--shadow-lg);
        }

        .dock-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.45rem 0.75rem;
          border-radius: var(--radius-full);
          text-decoration: none;
          color: var(--text-secondary);
          font-size: 0.825rem;
          font-weight: 600;
          transition: all 0.2s ease;
          background: transparent;
          border: none;
          cursor: pointer;
        }

        .dock-item:hover {
          color: var(--text-accent);
          background: rgba(37, 99, 235, 0.12);
        }

        .dock-label {
          display: none;
        }

        @media (min-width: 640px) {
          .dock-label {
            display: inline;
          }
        }

        .dock-divider {
          width: 1px;
          height: 20px;
          background: var(--border-color);
          margin: 0 0.15rem;
        }

        .dock-btn {
          font-family: inherit;
        }
      `}</style>
    </div>
  );
};
