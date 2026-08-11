import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Icon } from './Icons';

export const Projects = () => {
  const { projects } = portfolioData;

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">MY RECENT WORK</span>
          <h2 className="section-title font-serif">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of my recent work, web platforms, and AI applications built with React and Python.
          </p>
        </div>

        {/* 3 Projects Side-by-Side Grid Layout */}
        <div className={`projects-grid-container ${isVisible ? 'animate-entrance' : ''}`}>
          {projects.map((project, index) => {
            const isFeatured = project.featured;
            const projectNum = `0${index + 1}`;

            return (
              <article
                key={project.id}
                className={`project-grid-card glass-card ${isFeatured ? 'featured-card' : ''}`}
              >
                {/* Top Visual Banner (40% Height) */}
                <div className="card-media-wrapper">
                  <img
                    src={project.bannerImg}
                    alt={project.title}
                    className="card-banner-img"
                  />
                  <div className="media-overlay"></div>
                  
                  <div className="card-badge-row">
                    <span className="category-chip">{project.subtitle}</span>
                    {isFeatured && <span className="featured-pill font-serif">Featured</span>}
                  </div>

                  <span className="card-index-num font-serif">{projectNum}</span>
                </div>

                {/* Card Info & Content */}
                <div className="card-body-content">
                  <h3 className="card-project-title font-serif">{project.title}</h3>

                  <p className="card-project-desc">
                    {project.description}
                  </p>

                  <div className="card-divider"></div>

                  {/* Tech stack labels */}
                  <div className="card-tech-chips">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tech-chip-item">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="card-footer-divider"></div>

                  {/* 3 Action Buttons */}
                  <div className="card-action-buttons">
                    {/* 1. Code / GitHub */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary action-btn"
                    >
                      <Icon name="Github" size={14} />
                      <span>CODE</span>
                    </a>

                    {/* 2. Live Demo / Website */}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary action-btn"
                      >
                        <Icon name="ExternalLink" size={14} />
                        <span>{project.liveButtonText || 'LIVE DEMO'}</span>
                      </a>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-disabled action-btn"
                        disabled
                      >
                        <Icon name="ExternalLink" size={14} />
                        <span>LIVE DEMO</span>
                      </button>
                    )}

                    {/* 3. Demo Video */}
                    <a
                      href={project.demoVideoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline action-btn"
                    >
                      <Icon name="Play" size={14} />
                      <span>VIDEO</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .projects-section {
          position: relative;
        }

        /* 3 Side-by-Side Cards Desktop Grid */
        .projects-grid-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .projects-grid-container.animate-entrance {
          opacity: 1;
          transform: translateY(0);
        }

        @media (min-width: 992px) {
          .projects-grid-container {
            grid-template-columns: repeat(3, 1fr);
            align-items: stretch;
          }
        }

        .project-grid-card {
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .project-grid-card:hover {
          border-color: var(--border-dark);
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        /* Top Media Banner */
        .card-media-wrapper {
          position: relative;
          height: 200px;
          width: 100%;
          overflow: hidden;
          background: var(--bg-secondary);
        }

        .card-banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-grid-card:hover .card-banner-img {
          transform: scale(1.06);
        }

        .media-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.65) 100%);
        }

        .card-badge-row {
          position: absolute;
          top: 1rem;
          left: 1rem;
          right: 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 2;
        }

        .category-chip {
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #ffffff;
          background: rgba(0, 0, 0, 0.6);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-sm);
          backdrop-filter: blur(6px);
        }

        .featured-pill {
          font-size: 0.75rem;
          font-style: italic;
          color: var(--text-accent);
          background: var(--bg-card);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
        }

        .card-index-num {
          position: absolute;
          bottom: 0.75rem;
          right: 1rem;
          font-size: 2rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1;
          z-index: 2;
        }

        /* Card Content Body */
        .card-body-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .card-project-title {
          font-size: 1.45rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.65rem;
          line-height: 1.25;
        }

        .card-project-desc {
          font-size: 0.925rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .card-divider {
          height: 1px;
          background: var(--border-color);
          margin-top: auto;
          margin-bottom: 0.85rem;
        }

        .card-tech-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem 0.65rem;
          margin-bottom: 1.25rem;
        }

        .tech-chip-item {
          font-size: 0.775rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .card-footer-divider {
          height: 1px;
          background: var(--border-color);
          margin-bottom: 1rem;
        }

        .card-action-buttons {
          display: flex;
          gap: 0.4rem;
        }

        .action-btn {
          flex: 1;
          padding: 0.45rem 0.35rem;
          font-size: 0.75rem;
        }
      `}</style>
    </section>
  );
};
