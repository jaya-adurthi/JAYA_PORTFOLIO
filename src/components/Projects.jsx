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
        {/* Editorial Section Header */}
        <div className="section-header">
          <span className="section-label">FEATURED WORK</span>
          <h2 className="section-title font-serif">Selected Case Studies</h2>
          <p className="section-subtitle">
            Editorial showcase of web platforms, AI applications, and developer tools built with React and Python.
          </p>
        </div>

        {/* Editorial Showcase Blocks */}
        <div className={`editorial-projects-stack ${isVisible ? 'animate-entrance' : ''}`}>
          {projects.map((project, index) => {
            const isFeatured = project.featured;
            const projectNum = `0${index + 1}`;

            return (
              <article
                key={project.id}
                className={`editorial-project-block glass-card ${isFeatured ? 'featured-block' : ''}`}
              >
                <div className="project-grid-inner">
                  {/* Left Column - Large Image / Video Preview Visual Banner */}
                  <div className="project-visual-column">
                    <div className="project-visual-frame">
                      <img
                        src={project.bannerImg}
                        alt={project.title}
                        className="project-banner-media"
                      />
                      <div className="editorial-media-overlay"></div>
                      <span className="project-index-number font-serif">{projectNum}</span>
                    </div>
                  </div>

                  {/* Right Column - Editorial Information & Actions */}
                  <div className="project-info-column">
                    <div className="project-meta-header">
                      <span className="project-category-tag">{project.subtitle}</span>
                      {isFeatured && <span className="featured-chip font-serif">Featured</span>}
                    </div>

                    <h3 className="project-title font-serif">{project.title}</h3>

                    <p className="project-description">
                      {project.description}
                    </p>

                    {/* Tech stack thin labels */}
                    <div className="project-tech-divider"></div>
                    <div className="project-tech-labels">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="tech-label-item">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="project-actions-divider"></div>

                    {/* 3 Functional Action Buttons */}
                    <div className="project-editorial-actions">
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

        .editorial-projects-stack {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .editorial-projects-stack.animate-entrance {
          opacity: 1;
          transform: translateY(0);
        }

        .editorial-project-block {
          padding: 0;
          overflow: hidden;
          transition: all 0.3s ease;
          border: 1px solid var(--border-color);
        }

        .editorial-project-block:hover {
          border-color: var(--border-dark);
        }

        .project-grid-inner {
          display: grid;
          grid-template-columns: 1fr;
        }

        @media (min-width: 992px) {
          .project-grid-inner {
            grid-template-columns: 1.15fr 1fr;
          }
        }

        /* Visual Column */
        .project-visual-column {
          position: relative;
          background: var(--bg-secondary);
          overflow: hidden;
          min-height: 280px;
        }

        @media (min-width: 992px) {
          .project-visual-column {
            min-height: 380px;
          }
        }

        .project-visual-frame {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .project-banner-media {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .editorial-project-block:hover .project-banner-media {
          transform: scale(1.04);
        }

        .editorial-media-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%);
        }

        .project-index-number {
          position: absolute;
          bottom: 1.25rem;
          left: 1.5rem;
          font-size: 3.5rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1;
          z-index: 2;
        }

        /* Info Column */
        .project-info-column {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        @media (min-width: 768px) {
          .project-info-column {
            padding: 2.75rem;
          }
        }

        .project-meta-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
        }

        .project-category-tag {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-accent);
        }

        .featured-chip {
          font-size: 0.8rem;
          font-style: italic;
          color: var(--text-secondary);
        }

        .project-title {
          font-size: 1.85rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
          line-height: 1.25;
        }

        @media (min-width: 768px) {
          .project-title {
            font-size: 2.25rem;
          }
        }

        .project-description {
          font-size: 0.975rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 1.25rem;
        }

        .project-tech-divider {
          height: 1px;
          background: var(--border-color);
          margin-bottom: 1rem;
        }

        .project-tech-labels {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem 0.85rem;
          margin-bottom: 1.75rem;
        }

        .tech-label-item {
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .project-actions-divider {
          height: 1px;
          background: var(--border-color);
          margin-top: auto;
          margin-bottom: 1.25rem;
        }

        .project-editorial-actions {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
        }

        .action-btn {
          flex: 1;
          min-width: 100px;
        }
      `}</style>
    </section>
  );
};
