"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AfricaNetworkMap } from '../ui/AfricanPattern';
import { portfolioData } from '../../data/portfolioData';
import { Mail, ArrowRight, Download, Calendar } from 'lucide-react';

export const Hero: React.FC = () => {
  const { socials, name, title, resumeUrl } = portfolioData.personalInfo;

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getSocialIcon = (key: string) => {
    switch (key) {
      case 'github':
        return (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        );
      case 'linkedin': 
        return (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        );
      case 'twitter': 
        return (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        );
      case 'email': return <Mail size={20} />;
      case 'kaggle':
        return (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M18.8 22.1h-4.3l-5.6-7.8-1.5 1.5v6.3H3.1V1.9h4.3v11.2l6.8-8.6h4.3l-7.7 9.8 8 7.8z" />
          </svg>
        );
      default: return null;
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-24 md:pt-32 pb-16 flex items-center overflow-hidden bg-grain bg-warm-white"
    >
      {/* Decorative radial glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-glow-orange opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-glow-teal opacity-50 pointer-events-none" />

      {/* Floating Animated Geometric Shapes (Subtle African Heritage) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 45, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-6 h-6 border-2 border-[#E8A317] rounded-md opacity-25"
        />
        <motion.div 
          animate={{ y: [0, 15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-8 h-8 rounded-full border border-[#138A8A] opacity-25"
        />
        <motion.div 
          animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-10 w-4 h-4 bg-[#F47C20] opacity-15 rotate-12"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#138A8A]/10 text-[#138A8A] text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#138A8A] animate-pulse" />
              Hello, I'm {name}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#4B2E2A] leading-[1.08] mb-6"
            >
              Turning Data Into <span className="text-[#138A8A]">Intelligence</span>. <br className="hidden md:inline" />
              Building AI for <span className="text-[#F47C20]">Africa</span> and <span className="text-[#E8A317]">Beyond</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-base sm:text-lg text-[#4B2E2A]/75 max-w-2xl leading-relaxed mb-8"
            >
              I'm a Data Analyst and AI Engineer passionate about building intelligent systems that transform healthcare, business, education, and society through Data, Machine Learning, NLP, Computer Vision, and Automation.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 items-center mb-10 w-full"
            >
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, '#projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F47C20] text-white text-sm sm:text-base font-semibold hover:bg-[#F47C20]/90 transition-colors shadow-md shadow-[#F47C20]/15 group"
              >
                View My Work
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#4B2E2A]/20 text-[#4B2E2A] text-sm sm:text-base font-semibold hover:border-[#F47C20] hover:text-[#F47C20] transition-all group bg-white"
              >
                Let's Collaborate
                <Calendar size={18} className="transition-transform duration-300 group-hover:scale-110" />
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-[#4B2E2A]/80 hover:text-[#4B2E2A] text-sm font-semibold transition-colors"
              >
                Download Resume
                <Download size={16} />
              </a>
            </motion.div>

            {/* Social Connect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <span className="text-xs font-semibold text-[#4B2E2A]/50 uppercase tracking-wider">
                Let's connect:
              </span>
              <div className="flex gap-3">
                {Object.entries(socials).map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full border border-[#4B2E2A]/10 text-[#4B2E2A]/60 hover:text-[#F47C20] hover:border-[#F47C20]/30 hover:bg-[#F47C20]/5 transition-all duration-300"
                    aria-label={key}
                  >
                    {getSocialIcon(key)}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Image/Canvas Column */}
          <div className="lg:col-span-5 flex justify-center items-center relative select-none w-full">
            <div className="w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[430px] md:h-[430px] relative flex items-center justify-center">
              
              {/* African Neural Network map in background */}
              <div className="absolute inset-0 scale-[1.15] z-0 opacity-85">
                <AfricaNetworkMap />
              </div>

              {/* Dotted border background decoration */}
              <div className="absolute inset-0 border border-dashed border-[#E8A317]/30 rounded-full animate-spin-slow pointer-events-none" />

              {/* Profile Image Container - Restored to clean minimalistic size, and slightly enlarged */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] rounded-full overflow-hidden border-8 border-white bg-[#FAF8F3] shadow-2xl relative z-10"
              >
                <Image 
                  src="/img/viktor_profile_pic.jpeg" 
                  alt="Victor Iheanacho Portrait" 
                  fill 
                  priority
                  sizes="(max-width: 768px) 240px, (max-width: 1200px) 300px, 340px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              {/* Interactive nodes floating over the face circle */}
              <div className="absolute top-1/4 right-[4%] z-20 w-3 h-3 bg-[#E8A317] rounded-full shadow-md animate-ping" />
              <div className="absolute bottom-[10%] left-[8%] z-20 w-2.5 h-2.5 bg-[#138A8A] rounded-full shadow-md" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
