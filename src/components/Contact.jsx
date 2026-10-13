import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Code2, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#cf492c', '#ffffff', '#e65637']
    });

    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="space-y-2 mb-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#cf492c] tracking-wider uppercase font-semibold">
            <Mail className="w-4 h-4" />
            <span>06. INITIATE COMMUNICATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-mono text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="font-mono text-xs sm:text-sm text-gray-400 leading-relaxed pt-2">
            Whether you want to discuss backend microservices, full-stack software applications, core CS concepts, or engineering opportunities, my inbox is always open.
          </p>
          <div className="w-20 h-1 bg-[#cf492c] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact & Social Matrix */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Copy Card */}
            <div className="bg-[#13100e] border border-[#cf492c]/40 rounded-lg p-6 hard-shadow glow-box space-y-4 font-mono">
              <div className="text-xs text-[#cf492c] font-bold uppercase tracking-wider">
                Direct Email Connection
              </div>
              <div className="text-sm font-semibold text-white break-all bg-[#090807] p-3 rounded border border-white/10 flex items-center justify-between">
                <span>{personalInfo.email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="ml-2 p-1.5 bg-[#cf492c] text-black rounded hover:bg-[#e65637] transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <div className="text-xs text-emerald-400 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied email to clipboard!</span>
                </div>
              )}
            </div>

            {/* Social Links Matrix Grid */}
            <div className="bg-[#13100e] border border-white/10 rounded-lg p-6 hard-shadow space-y-4 font-mono">
              <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                Digital Presence & Profiles
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 bg-[#090807] border border-white/10 hover:border-[#cf492c] rounded text-gray-300 hover:text-white transition-all group"
                >
                  <GithubIcon className="w-4 h-4 text-[#cf492c] group-hover:scale-110 transition-transform" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 bg-[#090807] border border-white/10 hover:border-[#cf492c] rounded text-gray-300 hover:text-white transition-all group"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#cf492c] group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7 bg-[#13100e] border border-[#cf492c]/30 rounded-lg p-6 sm:p-8 hard-shadow space-y-6">
            
            <div className="font-mono space-y-1">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-[#cf492c]" />
                <span>Send Message Dispatch</span>
              </h3>
              <p className="text-xs text-gray-400">Fill out the form below to send a direct message.</p>
            </div>

            {formSubmitted ? (
              <div className="p-6 bg-[#090807] border border-emerald-500/40 rounded-lg text-center font-mono space-y-3 animate-fadeIn">
                <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Message Dispatched Successfully!</h4>
                <p className="text-xs text-gray-300">
                  Thank you for reaching out, {formData.name}. I will get back to you shortly at {formData.email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-gray-300 font-semibold block">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full bg-[#090807] text-white p-3 border border-white/10 focus:border-[#cf492c] rounded focus:outline-none placeholder-gray-600"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-gray-300 font-semibold block">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full bg-[#090807] text-white p-3 border border-white/10 focus:border-[#cf492c] rounded focus:outline-none placeholder-gray-600"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-gray-300 font-semibold block">SUBJECT</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Engineering Role / Project Inquiry"
                    className="w-full bg-[#090807] text-white p-3 border border-white/10 focus:border-[#cf492c] rounded focus:outline-none placeholder-gray-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-gray-300 font-semibold block">MESSAGE *</label>
                  <textarea
                    required
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Type your message here..."
                    className="w-full bg-[#090807] text-white p-3 border border-white/10 focus:border-[#cf492c] rounded focus:outline-none placeholder-gray-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#cf492c] hover:bg-[#e65637] text-black font-mono text-sm font-bold rounded transition-all hard-shadow flex items-center justify-center gap-2 active:translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
