import React from 'react';
import { Icon } from './Icons';

export const Skills = () => {
  const techSkills = [
    { name: 'Python', icon: 'Code', desc: 'Core Programming & AI Scripting' },
    { name: 'Java', icon: 'Terminal', desc: 'Object-Oriented Fundamentals' },
    { name: 'JavaScript', icon: 'FileCode', desc: 'Web App & ES6 Logic' },
    { name: 'React.js', icon: 'Globe', desc: 'Frontend Framework & UI Components' },
    { name: 'HTML', icon: 'Code', desc: 'Semantic Web Structure' },
    { name: 'CSS', icon: 'Layers', desc: 'Modern Layouts & Styling' },
    { name: 'SQL', icon: 'Database', desc: 'Relational Database Queries' },
    { name: 'Streamlit', icon: 'Cpu', desc: 'Interactive AI & ML Web Apps' },
    { name: 'Git', icon: 'Wrench', desc: 'Version Control System' },
    { name: 'GitHub', icon: 'Github', desc: 'Repository Management & Collaboration' }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Tech Stack</h2>
          <p className="section-subtitle">
            Technologies, programming languages, and tools I use to build applications.
          </p>
        </div>

        <div className="skills-tech-grid">
          {techSkills.map((tech) => (
            <div key={tech.name} className="glass-card skill-tech-card">
              <div className="tech-icon-box">
                <Icon name={tech.icon} size={22} />
              </div>
              <div className="tech-details">
                <h3 className="tech-name">{tech.name}</h3>
                <span className="tech-desc">{tech.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          position: relative;
        }

        .skills-tech-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.15rem;
        }

        @media (min-width: 576px) {
          .skills-tech-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 992px) {
          .skills-tech-grid {
            grid-template-columns: repeat(5, 1fr);
          }
        }

        .skill-tech-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.85rem;
          padding: 1.25rem;
          height: 100%;
          border: 1px solid var(--border-color);
          background: var(--bg-card);
          border-radius: var(--radius-md);
          transition: all 0.25s ease;
        }

        .skill-tech-card:hover {
          background: var(--bg-card-hover);
          border-color: var(--accent-blue);
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
        }

        .tech-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: var(--radius-md);
          background: rgba(37, 99, 235, 0.1);
          border: 1px solid rgba(37, 99, 235, 0.2);
          color: var(--text-accent);
        }

        .tech-details {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .tech-name {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .tech-desc {
          font-size: 0.775rem;
          color: var(--text-muted);
          line-height: 1.3;
        }
      `}</style>
    </section>
  );
};
