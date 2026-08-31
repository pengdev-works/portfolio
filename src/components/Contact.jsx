import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle2, MessageSquare, MapPin, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setErrorMsg('');

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
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Fallback to mailto if API fails
        window.location.href = `mailto:topelparagas@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(
          formData.name
        )}&body=${encodeURIComponent(formData.message + '\n\nSender Email: ' + formData.email)}`;
        setSubmitted(true);
      }
    } catch (err) {
      // Fallback to mailto
      window.location.href = `mailto:topelparagas@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(formData.message + '\n\nSender Email: ' + formData.email)}`;
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-noise bg-[#090A0F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column - Heading & Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Let's Connect</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Have an idea? <span className="text-gradient-emerald">Let's build it.</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Whether it's a website, tourism platform, management system, or something completely new, I'm always interested in turning ideas into working software.
            </p>

            {/* Quick Contact Info Cards */}
            <div className="space-y-4 pt-2">

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#10141F] border border-white/10">
                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 font-semibold uppercase">
                    Direct Email
                  </div>
                  <a
                    href="mailto:topelparagas@gmail.com"
                    className="text-sm font-mono font-medium text-white hover:text-emerald-400 transition-colors"
                  >
                    topelparagas@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#10141F] border border-white/10">
                <div className="p-3 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 font-semibold uppercase">
                    Location
                  </div>
                  <div className="text-sm font-medium text-white">
                    Poblacion, La Paz, Abra, Philippines 🇵🇭
                  </div>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="pt-4">
              <div className="text-xs font-mono text-slate-400 mb-3 font-semibold uppercase">
                Connect Across Platforms
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/pengdev-works"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-[#10141F] hover:bg-emerald-500/10 text-slate-300 hover:text-emerald-400 border border-white/10 hover:border-emerald-500/30 transition-all"
                  title="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-[#10141F] hover:bg-emerald-500/10 text-slate-300 hover:text-emerald-400 border border-white/10 hover:border-emerald-500/30 transition-all"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:topelparagas@gmail.com"
                  className="p-3 rounded-xl bg-[#10141F] hover:bg-emerald-500/10 text-slate-300 hover:text-emerald-400 border border-white/10 hover:border-emerald-500/30 transition-all"
                  title="Send Direct Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-[#10141F] border border-white/10 shadow-2xl relative">

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out, Jhon Christopher Paragas has received your message and will respond to <span className="text-emerald-400 font-mono">topelparagas@gmail.com</span> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 uppercase mb-2">
                      Your Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Maria Santos"
                      className="w-full px-4 py-3 rounded-xl bg-[#090A0F] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-emerald-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 uppercase mb-2">
                      Email Address <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. maria@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#090A0F] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-emerald-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 uppercase mb-2">
                      Project Details or Message <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project idea, management system requirements, or inquiry..."
                      className="w-full px-4 py-3 rounded-xl bg-[#090A0F] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {errorMsg && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base transition-all shadow-lg shadow-emerald-500/20 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
