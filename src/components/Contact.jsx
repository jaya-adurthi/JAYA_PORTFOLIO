import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Icon } from './Icons';

export const Contact = () => {
  const { email, phone, location, github, linkedin } = portfolioData.personal;
  const [copiedItem, setCopiedItem] = useState(null);

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => {
      setCopiedItem(null);
    }, 3000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Let's build something meaningful together.
          </p>
        </div>

        {/* Copy Notification Toast */}
        {copiedItem && (
          <div className="toast-notification">
            <Icon name="Check" size={18} />
            <span>Copied {copiedItem} to clipboard!</span>
          </div>
        )}

        <div className="contact-wrapper">
          <div className="glass-card contact-card">
            <div className="contact-cta-box">
              <h3 className="cta-heading">Open for Opportunities & Collaborations</h3>
              <p className="cta-subtext">
                Whether you have an internship position, project idea, software question, or just want to connect, feel free to reach out directly!
              </p>
            </div>

            <div className="contact-methods-grid">
              {/* Email Card */}
              <div className="contact-item-card">
                <div className="contact-icon-box">
                  <Icon name="Mail" size={20} />
                </div>
                <div className="contact-details">
                  <span className="item-label">Email Address</span>
                  <a href={`mailto:${email}`} className="item-value">
                    {email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(email, 'Email')}
                  className="copy-btn"
                  title="Copy email address"
                >
                  <Icon name={copiedItem === 'Email' ? 'Check' : 'Copy'} size={16} />
                </button>
              </div>

              {/* Phone Card */}
              <div className="contact-item-card">
                <div className="contact-icon-box">
                  <Icon name="Phone" size={20} />
                </div>
                <div className="contact-details">
                  <span className="item-label">Phone Number</span>
                  <a href={`tel:${phone}`} className="item-value">
                    {phone}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(phone, 'Phone number')}
                  className="copy-btn"
                  title="Copy phone number"
                >
                  <Icon name={copiedItem === 'Phone number' ? 'Check' : 'Copy'} size={16} />
                </button>
              </div>

              {/* Location Card */}
              <div className="contact-item-card">
                <div className="contact-icon-box">
                  <Icon name="MapPin" size={20} />
                </div>
                <div className="contact-details">
                  <span className="item-label">Location</span>
                  <span className="item-value-text">{location}</span>
                </div>
              </div>
            </div>

            {/* Social profiles */}
            <div className="contact-socials-row">
              <span className="socials-label">Connect Online:</span>
              <div className="socials-buttons">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  <Icon name="Github" size={16} />
                  <span>GitHub</span>
                </a>

                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  <Icon name="Linkedin" size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background: rgba(17, 24, 39, 0.4);
          position: relative;
        }

        .contact-wrapper {
          max-width: 800px;
          margin: 0 auto;
        }

        .contact-card {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding: 2.25rem;
        }

        .contact-cta-box {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-color);
        }

        .cta-heading {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .cta-subtext {
          color: var(--text-secondary);
          max-width: 560px;
          font-size: 0.975rem;
          line-height: 1.6;
        }

        .contact-methods-grid {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .contact-item-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.25rem;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          transition: all 0.2s ease;
        }

        .contact-item-card:hover {
          border-color: rgba(37, 99, 235, 0.3);
        }

        .contact-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          background: rgba(37, 99, 235, 0.1);
          border: 1px solid rgba(37, 99, 235, 0.2);
          color: var(--text-accent);
          flex-shrink: 0;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .item-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .item-value {
          color: var(--text-primary);
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .item-value:hover {
          color: var(--text-accent);
        }

        .item-value-text {
          color: var(--text-primary);
          font-weight: 600;
          font-size: 1rem;
        }

        .copy-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.45rem;
          border-radius: var(--radius-sm);
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .copy-btn:hover {
          background: rgba(37, 99, 235, 0.15);
          color: var(--text-primary);
          border-color: var(--accent-blue);
        }

        .contact-socials-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
        }

        .socials-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .socials-buttons {
          display: flex;
          gap: 0.75rem;
        }
      `}</style>
    </section>
  );
};
