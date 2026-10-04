import React from 'react';
import '../assets/styles/Contact.scss';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Contact() {
  return (
    <div id="contact" className="contact-container">
      <div className="items-container">
        <div className="contact_wrapper">
          <div className="contact-header">
            <span className="contact-badge">GET IN TOUCH</span>
            <h1>Contact Me</h1>
            <p className="contact-tagline">
              Got a project waiting to be realized, an opportunity to discuss, or just want to say hello? Let's connect!
            </p>
          </div>

          {/* ── Direct contact cards (Centered) ─────────────────────────────── */}
          <div className="contact-direct-cards">

            {/* Email card - Direct Gmail Web */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=marawan.elbob@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-direct-card contact-direct-card--email"
              aria-label="Send an email via Gmail"
            >
              <div className="contact-direct-card__icon-ring">
                <EmailIcon />
              </div>
              <div className="contact-direct-card__body">
                <span className="contact-direct-card__label">Email Me</span>
                <span className="contact-direct-card__value">marawan.elbob@gmail.com</span>
              </div>
              <span className="contact-direct-card__arrow">→</span>
            </a>

            {/* WhatsApp / Phone card */}
            <a
              href="https://wa.me/201286047962"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-direct-card contact-direct-card--whatsapp"
              aria-label="Chat on WhatsApp"
            >
              <div className="contact-direct-card__icon-ring contact-direct-card__icon-ring--green">
                <WhatsAppIcon />
              </div>
              <div className="contact-direct-card__body">
                <span className="contact-direct-card__label">WhatsApp / Call</span>
                <span className="contact-direct-card__value">+20 128 604 7962</span>
              </div>
              <span className="contact-direct-card__arrow">→</span>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;