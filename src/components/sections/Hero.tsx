"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AfricaNetworkMap } from '../ui/AfricanPattern';
import { portfolioData } from '../../data/portfolioData';
import { Mail, ArrowRight, Download, Calendar } from 'lucide-react';

export const Hero: React.FC = () => {
  const { socials, name, resumeUrl } = portfolioData.personalInfo;

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
      case 'email': return <Mail size={18} />;
      case 'kaggle':
        return (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M18.8 22.1h-4.3l-5.6-7.8-1.5 1.5v6.3H3.1V1.9h4.3v11.2l6.8-8.6h4.3l-7.7 9.8 8 7.8z" />
          </svg>
        );
      default: return null;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[100svh] pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 flex items-center overflow-hidden bg-grain bg-warm-white"
    >
      {/* Decorative subtle ambient glows */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-glow-orange opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[260px] sm:w-[400px] h-[260px] sm:h-[400px] bg-glow-teal opacity-45 pointer-events-none" />

      {/* Floating Animated Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ y: [0, -14, 0], rotate: [0, 45, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-6 sm:left-10 w-5 h-5 sm:w-6 sm:h-6 border-2 border-[#E8A317] rounded-md opacity-25"
        />
        <motion.div 
          animate={{ y: [0, 12, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-8 sm:right-1/4 w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-[#138A8A] opacity-25"
        />
        <motion.div 
          animate={{ x: [0, 8, 0], y: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-6 sm:right-10 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#F47C20] opacity-15 rotate-12"
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-center">
          
          {/* Left / Top Text Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            
            {/* 1. Intro Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#138A8A]/10 border border-[#138A8A]/20 text-[#138A8A] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4 md:mb-5 shadow-xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#138A8A] animate-pulse" />
              <span>Hello, I&apos;m {name}</span>
            </motion.div>

            {/* 2. Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-heading text-[2.15rem] leading-[1.12] sm:text-5xl md:text-6xl font-bold tracking-tight text-[#4B2E2A] mb-4 sm:mb-6"
            >
              <span className="block">Turning Data Into</span>
              <span className="text-[#138A8A]">Intelligence.</span>{' '}
              <span className="inline">Building AI for</span>{' '}
              <span className="text-[#F47C20]">Africa</span> <span className="text-[#4B2E2A]">and</span>{' '}
              <span className="text-[#E8A317]">Beyond.</span>
            </motion.h1>

            {/* 3. Short Description */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-[15px] sm:text-base md:text-lg text-[#4B2E2A]/80 max-w-2xl leading-relaxed mb-6 sm:mb-8"
            >
              I&apos;m a Data Analyst and AI Engineer passionate about building intelligent systems that transform healthcare, business, education, and society through Data, Machine Learning, NLP, Computer Vision, and Automation.
            </motion.p>

            {/* 4. Actions & CTAs Group */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-stretch sm:items-center w-full mb-6 sm:mb-8"
            >
              {/* Primary CTA */}
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, '#projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-[#F47C20] text-white text-[15px] sm:text-base font-semibold hover:bg-[#F47C20]/90 active:scale-[0.98] transition-all duration-200 shadow-md shadow-[#F47C20]/25 group text-center"
              >
                <span>View My Work</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full border border-[#4B2E2A]/20 bg-white/80 backdrop-blur-xs text-[#4B2E2A] text-[15px] sm:text-base font-semibold hover:border-[#F47C20] hover:text-[#F47C20] active:scale-[0.98] transition-all duration-200 shadow-xs group text-center"
              >
                <span>Let&apos;s Collaborate</span>
                <Calendar size={18} className="transition-transform duration-300 group-hover:scale-110 text-[#4B2E2A]/70 group-hover:text-[#F47C20]" />
              </a>

              {/* Resume Action */}
              <div className="w-full sm:w-auto flex justify-center sm:justify-start pt-1 sm:pt-0">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[#4B2E2A]/75 hover:text-[#F47C20] hover:bg-[#4B2E2A]/5 text-xs sm:text-sm font-semibold transition-all duration-200 group"
                  aria-label="Download Victor Iheanacho's Resume"
                >
                  <Download size={15} className="transition-transform duration-200 group-hover:translate-y-0.5" />
                  <span>Download Resume</span>
                </a>
              </div>
            </motion.div>

            {/* 5. Social Links (Compact Row) */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 sm:gap-4 w-full"
            >
              <span className="text-[11px] sm:text-xs font-bold text-[#4B2E2A]/50 uppercase tracking-wider shrink-0">
                Let&apos;s connect:
              </span>
              <div className="flex items-center gap-2 sm:gap-2.5">
                {Object.entries(socials).map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#4B2E2A]/15 bg-white/70 backdrop-blur-xs flex items-center justify-center text-[#4B2E2A]/70 hover:text-[#F47C20] hover:border-[#F47C20]/40 hover:bg-[#F47C20]/5 active:scale-95 transition-all duration-200 shadow-xs"
                    aria-label={key}
                  >
                    {getSocialIcon(key)}
                  </a>
                ))}
              </div>
            </motion.div>

          </motion.div>

          {/* Right / Bottom Visual Column */}
          <div className="lg:col-span-5 flex justify-center items-center relative select-none w-full pt-4 sm:pt-6 lg:pt-0">
            <div className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] relative flex items-center justify-center">
              
              {/* African Neural Network map in background */}
              <div className="absolute inset-0 scale-[1.12] sm:scale-[1.18] z-0 opacity-80 sm:opacity-85 pointer-events-none">
                <AfricaNetworkMap />
              </div>

              {/* Dotted rotating orbit decoration */}
              <div className="absolute inset-0 border border-dashed border-[#E8A317]/30 rounded-full animate-spin-slow pointer-events-none" />

              {/* Profile Image Container */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[310px] md:h-[310px] rounded-full overflow-hidden border-[6px] sm:border-8 border-white bg-[#FAF8F3] shadow-xl sm:shadow-2xl relative z-10"
              >
                <Image 
                  src="/img/viktor_profile_pic.jpeg" 
                  alt="Victor Iheanacho Portrait" 
                  fill 
                  priority
                  sizes="(max-width: 640px) 200px, (max-width: 768px) 260px, 310px"
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
