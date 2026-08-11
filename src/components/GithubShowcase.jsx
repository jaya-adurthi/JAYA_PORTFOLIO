import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Icon } from './Icons';

export const GithubShowcase = () => {
  const { github } = portfolioData.personal;

  return (
    <section id="github" className="section github-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">OPEN SOURCE & REPOSITORIES</span>
          <h2 className="section-title font-serif">GitHub Profile</h2>
          <p className="section-subtitle">
            Explore my public repositories, project codebases, and development activity.
          </p>
        </div>

        <div className="github-card-wrapper">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card github-showcase-card"
          >
            <div className="github-card-content">
              <div className="github-icon-circle">
                <Icon name="Github" size={28} />
              </div>

              <div className="github-info">
                <span className="github-handle">@jaya-adurthi</span>
                <h3 className="github-username font-serif">jaya-adurthi</h3>
                <p className="github-tagline">
                  Public repositories for web apps, student portals, and AI sustainability tools.
                </p>
              </div>

              <div className="btn btn-primary github-action-btn">
                <span>VIEW GITHUB</span>
                <Icon name="ExternalLink" size={14} />
              </div>
            </div>
          </a>
        </div>
      </div>

      <style>{`
        .github-section {
          position: relative;
        }

        .github-card-wrapper {
          max-width: 860px;
          margin: 0 auto;
        }

        .github-showcase-card {
          display: block;
          text-decoration: none;
          padding: 2.5rem;
          border: 1px solid var(--border-color);
          background: var(--bg-card);
          transition: all 0.3s ease;
        }

        .github-showcase-card:hover {
          border-color: var(--border-dark);
          box-shadow: var(--shadow-md);
        }

        .github-card-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.75rem;
        }

        .github-icon-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          flex-shrink: 0;
        }

        .github-info {
          flex: 1;
          min-width: 250px;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .github-handle {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-accent);
        }

        .github-username {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .github-tagline {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .github-action-btn {
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
};
