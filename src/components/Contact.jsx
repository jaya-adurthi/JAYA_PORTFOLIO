import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Icon } from './Icons';

export const Contact = () => {
  const { email, phone, location, github, linkedin } = portfolioData.personal;
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">GET IN TOUCH</span>
          <h2 className="section-title font-serif">Contact Information</h2>
          <p className="section-subtitle">
            Feel free to reach out for internship opportunities, project collaborations, or technical inquiries.
          </p>
        </div>

        <div className="contact-editorial-grid">
          {/* Email Card */}
          <div className="contact-card glass-card">
            <div className="contact-card-top">
              <span className="card-label">EMAIL ADDRESS</span>
              <Icon name="Mail" size={20} className="contact-icon" />
            </div>
            <a href={`mailto:${email}`} className="contact-val font-serif">
              {email}
            </a>
            <button
              type="button"
              className="btn btn-secondary btn-sm copy-btn"
              onClick={() => copyToClipboard(email, 'email')}
            >
              <span>{copiedField === 'email' ? 'COPIED!' : 'COPY EMAIL'}</span>
            </button>
          </div>

          {/* Phone Card */}
          <div className="contact-card glass-card">
            <div className="contact-card-top">
              <span className="card-label">PHONE NUMBER</span>
              <Icon name="Phone" size={20} className="contact-icon" />
            </div>
            <a href={`tel:${phone}`} className="contact-val font-serif">
              {phone}
            </a>
            <button
              type="button"
              className="btn btn-secondary btn-sm copy-btn"
              onClick={() => copyToClipboard(phone, 'phone')}
            >
              <span>{copiedField === 'phone' ? 'COPIED!' : 'COPY PHONE'}</span>
            </button>
          </div>

          {/* Location Card */}
          <div className="contact-card glass-card">
            <div className="contact-card-top">
              <span className="card-label">LOCATION</span>
              <Icon name="MapPin" size={20} className="contact-icon" />
            </div>
            <span className="contact-val font-serif">{location}</span>
            <span className="location-sub">Andhra Pradesh, India</span>
          </div>
        </div>

        <div className="contact-social-bar glass-card">
          <span className="social-title font-serif">Direct Profiles</span>
          <div className="social-links-group">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <Icon name="Github" size={14} />
              <span>GITHUB</span>
            </a>

            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <Icon name="Linkedin" size={14} />
              <span>LINKEDIN</span>
            </a>

            <a
              href={`mailto:${email}`}
              className="btn btn-primary btn-sm"
            >
              <Icon name="Mail" size={14} />
              <span>SEND EMAIL</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          position: relative;
        }

        .contact-editorial-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        @media (min-width: 768px) {
          .contact-editorial-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .contact-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.25rem;
          min-height: 180px;
        }

        .contact-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .card-label {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: var(--text-accent);
        }

        .contact-icon {
          color: var(--text-secondary);
        }

        .contact-val {
          font-size: 1.15rem;
          color: var(--text-primary);
          text-decoration: none;
          line-height: 1.3;
          word-break: break-all;
        }

        .location-sub {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .copy-btn {
          align-self: flex-start;
          margin-top: auto;
        }

        .contact-social-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.25rem;
          padding: 1.75rem 2.25rem;
        }

        .social-title {
          font-size: 1.25rem;
          color: var(--text-primary);
        }

        .social-links-group {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
      `}</style>
    </section>
  );
};
