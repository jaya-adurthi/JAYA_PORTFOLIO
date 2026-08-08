import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Icon } from './Icons';

const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'GitHub', href: '#github' },
  { name: 'Education', href: '#education' },
  { name: 'Hire Me', href: '#hire-me' },
  { name: 'Contact', href: '#contact' }
];

export const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section scrollSpy
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#hero" className="navbar-brand" onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}>
          <span className="brand-dot"></span>
          <span className="brand-name">{portfolioData.personal.shortName}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name} className="nav-item">
                  <a
                    href={link.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Theme Toggle Button */}
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            aria-label="Toggle dark and light theme"
          >
            <Icon name={theme === 'dark' ? "Sun" : "Moon"} size={18} />
          </button>

          <a
            href={portfolioData.personal.resumePdf}
            download="Adurthi_Jaya_Lakshmi_Durga_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm navbar-resume-btn"
          >
            <Icon name="Download" size={16} />
            <span>Download Resume</span>
          </a>
        </nav>

        {/* Mobile Header Controls */}
        <div className="mobile-header-controls">
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle dark and light theme"
          >
            <Icon name={theme === 'dark' ? "Sun" : "Moon"} size={18} />
          </button>

          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {/* Mobile Menu Drawer Overlay */}
        <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            <ul className="mobile-nav-list">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <li key={link.name} className="mobile-nav-item">
                    <a
                      href={link.href}
                      className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="mobile-menu-footer">
              <a
                href={portfolioData.personal.resumePdf}
                download="Adurthi_Jaya_Lakshmi_Durga_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Icon name="Download" size={18} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 999;
          padding: 1.15rem 0;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background: transparent;
        }

        .navbar-header.scrolled {
          padding: 0.8rem 0;
          background: var(--bg-glass);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--border-color);
          box-shadow: var(--shadow-md);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: var(--text-primary);
          font-weight: 700;
          font-size: 1.2rem;
          letter-spacing: -0.01em;
        }

        .brand-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--accent-blue);
        }

        .brand-name {
          color: var(--text-primary);
        }

        .desktop-nav {
          display: none;
          align-items: center;
          gap: 1.25rem;
        }

        @media (min-width: 992px) {
          .desktop-nav {
            display: flex;
          }
        }

        .nav-list {
          display: flex;
          align-items: center;
          gap: 1rem;
          list-style: none;
        }

        .nav-link {
          text-decoration: none;
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.2s ease;
          position: relative;
          padding: 0.35rem 0;
        }

        .nav-link:hover {
          color: var(--text-primary);
        }

        .nav-link.active {
          color: var(--text-accent);
          font-weight: 600;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--accent-blue);
          border-radius: 2px;
        }

        .mobile-header-controls {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        @media (min-width: 992px) {
          .mobile-header-controls {
            display: none;
          }
        }

        .mobile-menu-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 0.5rem;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .mobile-menu-toggle:hover {
          background: var(--bg-card-hover);
        }

        /* Mobile Menu Drawer */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          height: 100vh;
          background: var(--bg-primary);
          z-index: 998;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 5rem 2rem 3rem;
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-menu-overlay.open {
          transform: translateX(0);
        }

        .mobile-menu-content {
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
        }

        .mobile-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-nav-link {
          text-decoration: none;
          color: var(--text-secondary);
          font-size: 1.15rem;
          font-weight: 600;
          display: block;
          transition: all 0.2s ease;
          padding: 0.4rem 0;
          border-bottom: 1px solid var(--border-color);
        }

        .mobile-nav-link.active,
        .mobile-nav-link:hover {
          color: var(--text-accent);
          padding-left: 0.5rem;
        }

        .mobile-menu-footer {
          margin-top: 1.5rem;
        }

        .btn-full {
          width: 100%;
        }
      `}</style>
    </header>
  );
};
