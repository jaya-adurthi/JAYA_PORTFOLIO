import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Icon } from './Icons';

export const Projects = () => {
  const { projects } = portfolioData;

  // Track flipped state per project card
  const [flippedCards, setFlippedCards] = useState({});
  // Intersection observer state for scroll entrance animation
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
      { threshold: 0.15 }
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

  const toggleFlip = (id, e) => {
    // If click originated from inside an anchor or action button, do not flip
    if (e.target.closest('a') || e.target.closest('button.action-btn')) {
      return;
    }
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="projects" ref={sectionRef} className="section projects-section">
      <div className="container">
        {/* Section Header with Developer Visual Intro */}
        <div className="section-header">
          <div className="projects-intro-icon-box">
            <Icon name="Terminal" size={24} />
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of my recent work and projects — click or tap any card to explore live deployments and repositories.
          </p>
        </div>

        <div className={`projects-grid ${isVisible ? 'animate-entrance' : ''}`}>
          {projects.map((project, index) => {
            const isFlipped = !!flippedCards[project.id];
            const isFeatured = project.featured;

            return (
              <div
                key={project.id}
                className="flip-card-perspective"
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={(e) => toggleFlip(project.id, e)}
              >
                <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                  {/* ================= FRONT SIDE (With Large 42% Top Banner Image) ================= */}
                  <div className={`glass-card flip-card-front ${isFeatured ? 'card-featured' : ''}`}>
                    {/* Top 42% Height Project Banner Image */}
                    <div className="card-banner-wrapper">
                      <img
                        src={project.bannerImg}
                        alt={project.title}
                        className="card-banner-img"
                      />
                      <div className="banner-overlay"></div>
                      
                      <div className="banner-badges-header">
                        <span className={`badge ${isFeatured ? 'badge-featured' : 'badge-tech'}`}>
                          {project.subtitle}
                        </span>
                        {isFeatured && (
                          <span className="featured-star-pill">Featured Project</span>
                        )}
                      </div>
                    </div>

                    {/* Front Details below image */}
                    <div className="front-card-body">
                      <div className="front-info">
                        <h3 className="front-project-title">{project.title}</h3>
                        <p className="front-project-teaser">{project.subtitle}</p>
                      </div>

                      <div className="front-flip-prompt">
                        <Icon name="ChevronRight" size={16} className="prompt-icon" />
                        <span>Tap / Click to explore</span>
                      </div>
                    </div>
                  </div>

                  {/* ================= BACK SIDE (Project Specs & 3 Functional Action Buttons) ================= */}
                  <div className={`glass-card flip-card-back ${isFeatured ? 'card-featured' : ''}`}>
                    <div className="back-header">
                      <div className="back-title-group">
                        <h3 className="back-project-title">{project.title}</h3>
                        <span className="back-project-subtitle">{project.subtitle}</span>
                      </div>
                      <button
                        type="button"
                        className="flip-back-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFlip(project.id, e);
                        }}
                        title="Flip back"
                        aria-label="Flip back to front"
                      >
                        ✕
                      </button>
                    </div>

                    <p className="back-description">{project.description}</p>

                    <div className="tech-chips-wrapper">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="tech-chip">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="card-divider"></div>

                    {/* 3 Action Buttons Aligned at Bottom */}
                    <div className="card-actions">
                      {/* 1. GitHub Code Button */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary action-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Icon name="Github" size={15} />
                        <span>GitHub</span>
                      </a>

                      {/* 2. Live Demo / Website Button */}
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary action-btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Icon name="ExternalLink" size={15} />
                          <span>{project.liveButtonText || 'Live Demo'}</span>
                        </a>
                      ) : (
                        <button
                          type="button"
                          className="btn btn-disabled action-btn"
                          disabled
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Icon name="ExternalLink" size={15} />
                          <span>Live Demo</span>
                        </button>
                      )}

                      {/* 3. Demo Video Button */}
                      <a
                        href={project.demoVideoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline action-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Icon name="Play" size={15} />
                        <span>Demo Video</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .projects-section {
          position: relative;
        }

        .projects-intro-icon-box {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          border-radius: var(--radius-md);
          background: rgba(37, 99, 235, 0.1);
          border: 1px solid rgba(37, 99, 235, 0.25);
          color: var(--text-accent);
          margin-bottom: 0.85rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .projects-grid.animate-entrance {
          opacity: 1;
          transform: translateY(0);
        }

        @media (min-width: 992px) {
          .projects-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* 3D Flip Card Perspective Container */
        .flip-card-perspective {
          perspective: 1000px;
          height: 440px;
          cursor: pointer;
        }

        .animate-entrance .flip-card-perspective {
          animation: cardFadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes cardFadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: left;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }

        .flip-card-inner.flipped {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          overflow: hidden;
        }

        /* Front Styling */
        .flip-card-front {
          transform: rotateY(0deg);
          padding: 0;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
        }

        .card-banner-wrapper {
          position: relative;
          height: 42%;
          width: 100%;
          overflow: hidden;
        }

        .card-banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.4s ease;
        }

        .flip-card-perspective:hover .card-banner-img {
          transform: scale(1.05);
        }

        .banner-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(15, 23, 42, 0.9) 100%);
        }

        .banner-badges-header {
          position: absolute;
          top: 1rem;
          left: 1rem;
          right: 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 2;
        }

        .badge-featured {
          background: rgba(15, 23, 42, 0.85);
          border-color: rgba(37, 99, 235, 0.35);
          color: var(--text-accent);
          backdrop-filter: blur(8px);
        }

        .featured-star-pill {
          font-size: 0.725rem;
          font-weight: 600;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          background: rgba(37, 99, 235, 0.85);
          color: #ffffff;
          backdrop-filter: blur(8px);
        }

        .front-card-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
        }

        .front-info {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .front-project-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .front-project-teaser {
          font-size: 0.925rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .front-flip-prompt {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-accent);
          padding-top: 0.75rem;
          border-top: 1px solid var(--border-color);
        }

        .prompt-icon {
          animation: bounceRight 1.5s infinite;
        }

        @keyframes bounceRight {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }

        /* Back Styling */
        .flip-card-back {
          transform: rotateY(180deg);
          padding: 1.75rem;
          justify-content: space-between;
          background: var(--bg-card);
          border: 1px solid var(--accent-blue);
        }

        .back-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.5rem;
        }

        .back-title-group {
          display: flex;
          flex-direction: column;
        }

        .back-project-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .back-project-subtitle {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-accent);
        }

        .flip-back-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .flip-back-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          color: var(--text-primary);
        }

        .back-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin: 0.5rem 0;
        }

        .tech-chips-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 0.5rem;
        }

        .tech-chip {
          display: inline-flex;
          align-items: center;
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 500;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
        }

        .card-divider {
          height: 1px;
          background: var(--border-color);
          width: 100%;
          margin-top: auto;
          margin-bottom: 0.75rem;
        }

        .card-actions {
          display: flex;
          gap: 0.4rem;
        }

        .action-btn {
          flex: 1;
          padding: 0.5rem 0.35rem;
          font-size: 0.775rem;
          font-weight: 600;
        }
      `}</style>
    </section>
  );
};
