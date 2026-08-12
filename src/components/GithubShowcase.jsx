import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Icon } from './Icons';

export const GithubShowcase = () => {
  const { github } = portfolioData.personal;

  return (
    <section id="github" className="section github-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">GitHub</h2>
          <p className="section-subtitle">
            Explore my coding journey, repositories and open-source work.
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
                <Icon name="Github" size={32} />
              </div>

              <div className="github-info">
                <h3 className="github-username">jaya-adurthi</h3>
                <p className="github-tagline">
                  Public repositories for web apps, student portals, and AI sustainability tools.
                </p>
              </div>

              <div className="btn btn-primary github-action-btn">
                <span>View My GitHub</span>
                <Icon name="ExternalLink" size={16} />
              </div>
            </div>
          </a>
        </div>
      </div>

      <style>{`
        .github-section {
          background: rgba(17, 24, 39, 0.4);
          position: relative;
        }

        .github-card-wrapper {
          max-width: 800px;
          margin: 0 auto;
        }

        .github-showcase-card {
          display: block;
          text-decoration: none;
          padding: 2.25rem;
          border: 1px solid var(--border-color);
          background: var(--bg-card);
          transition: all 0.3s ease;
          border-radius: var(--radius-lg);
        }

        .github-showcase-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent-blue);
          box-shadow: var(--shadow-md);
        }

        .github-card-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .github-icon-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(37, 99, 235, 0.1);
          border: 1px solid rgba(37, 99, 235, 0.25);
          color: var(--text-primary);
          flex-shrink: 0;
        }

        .github-info {
          flex: 1;
          min-width: 250px;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .github-username {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .github-tagline {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .github-action-btn {
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
};
