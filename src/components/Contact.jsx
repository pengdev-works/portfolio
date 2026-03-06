import { Mail, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section-padding">
            <div className="container">
                <h2 className="heading-md">Get In <span className="text-gradient">Touch</span></h2>

                <div className="contact-wrapper">
                    <div className="contact-info glass-panel">
                        <h3 className="contact-title">Let's talk about everything!</h3>
                        <p className="contact-desc text-muted">
                            Don't like forms? Send me an email. I'm currently open to new opportunities
                            and my inbox is always open.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <Mail className="contact-icon" />
                                <span>topelparagas@gmail.com</span>
                            </div>
                            <div className="contact-item">
                                <MapPin className="contact-icon" />
                                <span>Poblacion, La paz, Abra</span>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form glass-panel" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="John Doe" className="form-input" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="john@example.com" className="form-input" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="How can I help you?" className="form-input"></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
