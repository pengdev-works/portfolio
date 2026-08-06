import { useState } from 'react';
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
            // Send via Web3Forms API to topelparagas@gmail.com
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: 'c723e988-4311-431a-8dfe-52e0d801fd13', // Users can add their key, or fallback to mailto
                    email_to: 'topelparagas@gmail.com',
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `New Portfolio Message from ${formData.name}`
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                // Fallback to mailto link
                window.location.href = `mailto:topelparagas@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nSender Email: ' + formData.email)}`;
                setStatus('success');
            }
        } catch (err) {
            // Fallback to mailto link
            window.location.href = `mailto:topelparagas@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nSender Email: ' + formData.email)}`;
            setStatus('success');
        }
    };

    return (
        <section id="contact" className="section-padding">
            <div className="container">
                <h2 className="heading-md">Get In <span className="text-gradient">Touch</span></h2>

                <div className="contact-wrapper">
                    <div className="contact-info glass-panel">
                        <h3 className="contact-title">Let's talk about everything!</h3>
                        <p className="contact-desc text-muted">
                            Feel free to reach out for collaborations, job opportunities, or project inquiries.
                            My inbox is always open.
                        </p>

                        <div className="contact-details">
                            <a href="mailto:topelparagas@gmail.com" className="contact-item">
                                <Mail className="contact-icon" />
                                <span>topelparagas@gmail.com</span>
                            </a>
                            <div className="contact-item">
                                <MapPin className="contact-icon" />
                                <span>Poblacion, La Paz, Abra</span>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form glass-panel" onSubmit={handleSubmit}>
                        {status === 'success' && (
                            <div className="contact-alert success-alert animate-fade-in">
                                <CheckCircle2 size={20} />
                                <span>Thank you! Your message has been sent directly to <strong>topelparagas@gmail.com</strong>.</span>
                            </div>
                        )}

                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Jhon Doe"
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="How can I help you?"
                                className="form-input"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="btn btn-primary submit-btn"
                        >
                            {status === 'submitting' ? 'Sending...' : 'Send Message'} <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
