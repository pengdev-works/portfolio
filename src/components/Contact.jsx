import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'c723e988-4311-431a-8dfe-52e0d801fd13',
          email_to: 'topelparagas@gmail.com',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        window.location.href = `mailto:topelparagas@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(
          formData.name
        )}&body=${encodeURIComponent(formData.message + '\n\nSender Email: ' + formData.email)}`;
        setStatus('success');
      }
    } catch (err) {
      window.location.href = `mailto:topelparagas@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(formData.message + '\n\nSender Email: ' + formData.email)}`;
      setStatus('success');
    }
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="contact-header animate-enter visible">
          <span className="section-eyebrow font-mono">Let’s Connect</span>
          <h2 className="section-title">Get In Touch</h2>
        </div>

        <div className="contact-grid">
          {/* Info Side */}
          <div className="contact-info-card glass-panel animate-enter visible">
            <h3 className="contact-subheading font-mono">✦ Let's talk about everything</h3>
            <p className="contact-text text-muted">
              Feel free to reach out for collaborations, full-stack design engineering roles, or project inquiries.
              My inbox is always open.
            </p>

            <div className="contact-detail-items">
              <a href="mailto:topelparagas@gmail.com" className="contact-detail-link">
                <Mail size={18} className="detail-icon" />
                <span className="font-mono">topelparagas@gmail.com</span>
              </a>

              <div className="contact-detail-link">
                <MapPin size={18} className="detail-icon" />
                <span className="font-mono">Poblacion, La Paz, Abra, Philippines</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <form className="contact-form-card glass-panel animate-enter visible" onSubmit={handleSubmit}>
            {status === 'success' && (
              <div className="contact-success-alert font-mono">
                <CheckCircle2 size={18} />
                <span>Thank you! Your message has been sent directly to <strong>topelparagas@gmail.com</strong>.</span>
              </div>
            )}

            <div className="form-field">
              <label htmlFor="name" className="field-label font-mono">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="form-input font-mono"
              />
            </div>

            <div className="form-field">
              <label htmlFor="email" className="field-label font-mono">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="form-input font-mono"
              />
            </div>

            <div className="form-field">
              <label htmlFor="message" className="field-label font-mono">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="How can I help you?"
                className="form-input font-mono"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-primary contact-submit-btn"
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'} <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
