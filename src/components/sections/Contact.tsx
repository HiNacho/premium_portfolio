"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { AfricaNetworkMap } from '../ui/AfricanPattern';
import { Mail, Calendar, Send, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const { socials, email, location, calendlyUrl } = portfolioData.personalInfo;
  
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('sending');
    // Simulate API request
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  const getSocialIcon = (key: string) => {
    switch (key) {
      case 'github':
        return (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        );
      case 'linkedin':
        return (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        );
      case 'twitter':
        return (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        );
      default: return <Mail size={18} />;
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-[#FAF8F3]/60 z-20 border-t border-[#4B2E2A]/5 overflow-hidden">
      
      {/* Absolute background Africa outline (Watermark styling) */}
      <div className="absolute right-[-10%] bottom-[-5%] w-[450px] h-[450px] opacity-10 pointer-events-none z-0">
        <AfricaNetworkMap />
      </div>
      
      <div className="absolute left-[-100px] top-1/4 w-[300px] h-[300px] bg-glow-gold opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left info column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="font-heading text-xs font-semibold uppercase tracking-widest text-[#F47C20] mb-3 block">
              Get In Touch
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#4B2E2A] mb-6">
              Let's build something <br />
              together.
            </h2>
            
            <p className="font-sans text-sm sm:text-base text-[#4B2E2A]/70 leading-relaxed mb-8 max-w-sm">
              I'm always open to discussing new projects, research opportunities, clinical informatics workflows, or technical consulting.
            </p>

            {/* Direct contact items */}
            <div className="space-y-4 mb-8 w-full">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#4B2E2A]/10 hover:border-[#F47C20]/30 transition-all w-full shadow-sm group"
              >
                <div className="p-2.5 rounded-lg bg-[#FAF8F3] text-[#F47C20] group-hover:bg-[#F47C20]/5 transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[10px] text-[#4B2E2A]/50 font-bold uppercase block">Email me at</span>
                  <span className="font-semibold text-sm text-[#4B2E2A]">{email}</span>
                </div>
              </a>

              <a
                href={calendlyUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#4B2E2A]/10 hover:border-[#138A8A]/30 transition-all w-full shadow-sm group"
              >
                <div className="p-2.5 rounded-lg bg-[#FAF8F3] text-[#138A8A] group-hover:bg-[#138A8A]/5 transition-colors">
                  <Calendar size={18} />
                </div>
                <div>
                  <span className="text-[10px] text-[#4B2E2A]/50 font-bold uppercase block">Intro meeting</span>
                  <span className="font-semibold text-sm text-[#4B2E2A]">Schedule a 15-minute chat</span>
                </div>
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {Object.entries(socials)
                .filter(([key]) => key !== 'email')
                .map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full border border-[#4B2E2A]/15 text-[#4B2E2A]/60 hover:text-[#FAF8F3] hover:bg-[#FAF8F3] hover:bg-opacity-0 hover:bg-[#4B2E2A] transition-all"
                    aria-label={`Check our ${key}`}
                  >
                    {getSocialIcon(key)}
                  </a>
              ))}
            </div>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-white border border-[#4B2E2A]/10 rounded-2xl p-6 sm:p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-[#4B2E2A]/70 uppercase">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Victor Iheanacho"
                      className="px-4 py-3 rounded-xl border border-[#4B2E2A]/15 focus:outline-none focus:border-[#F47C20] focus:ring-1 focus:ring-[#F47C20] text-sm text-[#4B2E2A] bg-[#FAF8F3]/30"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-[#4B2E2A]/70 uppercase">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="victor@nacho.ai"
                      className="px-4 py-3 rounded-xl border border-[#4B2E2A]/15 focus:outline-none focus:border-[#F47C20] focus:ring-1 focus:ring-[#F47C20] text-sm text-[#4B2E2A] bg-[#FAF8F3]/30"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-xs font-bold text-[#4B2E2A]/70 uppercase">Topic / Subject</label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project collaboration details"
                    className="px-4 py-3 rounded-xl border border-[#4B2E2A]/15 focus:outline-none focus:border-[#F47C20] focus:ring-1 focus:ring-[#F47C20] text-sm text-[#4B2E2A] bg-[#FAF8F3]/30"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-[#4B2E2A]/70 uppercase">Your Message *</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, ideas, or questions..."
                    className="px-4 py-3 rounded-xl border border-[#4B2E2A]/15 focus:outline-none focus:border-[#F47C20] focus:ring-1 focus:ring-[#F47C20] text-sm text-[#4B2E2A] bg-[#FAF8F3]/30 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status !== 'idle'}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold text-white shadow-md shadow-[#F47C20]/10 transition-all cursor-pointer ${
                    status === 'success' 
                      ? 'bg-green-600 shadow-green-600/10' 
                      : 'bg-[#F47C20] hover:bg-[#F47C20]/90'
                  }`}
                >
                  {status === 'idle' && (
                    <>
                      Send Message
                      <Send size={15} />
                    </>
                  )}
                  {status === 'sending' && (
                    <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  )}
                  {status === 'success' && (
                    <>
                      Message Sent!
                      <Check size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
