"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { ExternalLink, ArrowRight, Sparkles } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  
  const filters = [
    'All',
    'Data Analytics',
    'Machine Learning',
    'NLP',
    'Computer Vision',
    'Automation'
  ];

  const filteredProjects = activeFilter === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === activeFilter);

  // Return a unique geometric background SVG for project card previews
  const getPlaceholderSVG = (id: string, category: string) => {
    let color1 = "#F47C20"; // orange
    let color2 = "#E8A317"; // gold
    
    if (category === 'Machine Learning') {
      color1 = "#E8A317";
      color2 = "#4B2E2A";
    } else if (category === 'NLP') {
      color1 = "#138A8A";
      color2 = "#E8A317";
    } else if (category === 'Computer Vision') {
      color1 = "#2E8B57";
      color2 = "#138A8A";
    } else if (category === 'Automation') {
      color1 = "#4B2E2A";
      color2 = "#F47C20";
    }

    return (
      <svg viewBox="0 0 400 220" className="w-full h-full object-cover">
        <rect width="100%" height="100%" fill="#F7F3EB" />
        <circle cx="200" cy="110" r="70" fill={color1} opacity="0.08" />
        <circle cx="200" cy="110" r="40" fill={color2} opacity="0.05" />
        
        {/* Abstract lines simulating AI nodes and connections */}
        <g stroke={color1} strokeWidth="1.5" opacity="0.3">
          <line x1="120" y1="70" x2="200" y2="50" />
          <line x1="200" y1="50" x2="280" y2="70" />
          <line x1="280" y1="70" x2="260" y2="150" />
          <line x1="260" y1="150" x2="140" y2="150" />
          <line x1="140" y1="150" x2="120" y2="70" />
          
          <line x1="200" y1="50" x2="200" y2="110" />
          <line x1="120" y1="70" x2="200" y2="110" />
          <line x1="280" y1="70" x2="200" y2="110" />
        </g>
        
        {/* Small nodes */}
        <circle cx="200" cy="50" r="3.5" fill={color1} />
        <circle cx="120" cy="70" r="3.5" fill={color2} />
        <circle cx="280" cy="70" r="3.5" fill={color2} />
        <circle cx="260" cy="150" r="3.5" fill={color1} />
        <circle cx="140" cy="150" r="3.5" fill={color1} />
        <circle cx="200" cy="110" r="4.5" fill="#FAF8F3" stroke={color1} strokeWidth="2" />
        
        {/* Monogram card title */}
        <text 
          x="50%" 
          y="88%" 
          textAnchor="middle" 
          fill="#4B2E2A" 
          opacity="0.75"
          fontFamily="monospace"
          fontSize="10" 
          letterSpacing="1"
        >
          {id.toUpperCase()}.PY
        </text>
      </svg>
    );
  };

  return (
    <section id="projects" className="relative py-14 sm:py-20 md:py-28 bg-grain bg-warm-white z-20 border-t border-[#4B2E2A]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F47C20]/10 border border-[#F47C20]/20 text-[#F47C20] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs">
              <Sparkles size={12} />
              <span>Featured Projects</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#4B2E2A]">
              Explore My Work
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#4B2E2A]/65 max-w-sm mt-3 md:mt-0 leading-relaxed">
            Filter through my portfolio to explore production ML pipelines, healthcare analytics, and automated AI systems.
          </p>
        </div>

        {/* Horizontal Mobile-Friendly Scrollable Filter Pills */}
        <div className="relative mb-8 -mx-4 sm:mx-0 px-4 sm:px-0">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar touch-pan-x">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`shrink-0 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 active:scale-95 ${
                    isActive
                      ? 'bg-[#138A8A] text-[#FAF8F3] shadow-sm shadow-[#138A8A]/25'
                      : 'bg-white/90 backdrop-blur-xs border border-[#4B2E2A]/10 text-[#4B2E2A]/70 hover:border-[#138A8A]/30 hover:text-[#138A8A]'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Cards Grid - Compact Modern 2-Column */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="bg-white/95 backdrop-blur-xs border border-[#4B2E2A]/10 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-[#138A8A]/30 transition-all duration-300 flex flex-col group"
              >
                {/* Compact Project Image / Preview Banner */}
                <div className="w-full h-40 sm:h-44 md:h-48 relative overflow-hidden border-b border-[#4B2E2A]/5 bg-light-sand">
                  {project.image ? (
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    getPlaceholderSVG(project.id, project.category)
                  )}
                  {/* Category Badge overlay */}
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-white/95 backdrop-blur-md border border-[#4B2E2A]/10 rounded-full text-[10px] sm:text-[11px] font-bold text-[#4B2E2A] shadow-xs uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Compact Project Details Content */}
                <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                  
                  {/* Title */}
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#4B2E2A] mb-1.5 group-hover:text-[#F47C20] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  
                  {/* Summary */}
                  <p className="font-sans text-xs sm:text-[13px] text-[#4B2E2A]/75 leading-relaxed mb-3 line-clamp-2">
                    {project.summary}
                  </p>

                  {/* Compact Problem Solved Callout */}
                  <div className="bg-[#FAF8F3] border-l-2 border-[#138A8A] px-3 py-2 rounded-r-lg mb-3.5 text-[11px] sm:text-xs text-[#4B2E2A]/80 leading-relaxed">
                    <span className="text-[#138A8A] font-bold uppercase tracking-wider block text-[10px]">Problem Solved:</span>
                    <p className="line-clamp-2">{project.details.problem}</p>
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 bg-[#F7F3EB] rounded-md text-[10px] sm:text-[11px] font-semibold text-[#4B2E2A]/70">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTAs Footer */}
                  <div className="flex items-center justify-between border-t border-[#4B2E2A]/8 pt-3 mt-1">
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F47C20] hover:text-[#F47C20]/80 transition-colors uppercase tracking-wider group/link"
                    >
                      <span>Case Study</span>
                      <ArrowRight size={13} className="transition-transform duration-300 group-hover/link:translate-x-0.5" />
                    </Link>

                    <div className="flex items-center gap-3">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-[#4B2E2A]/60 hover:text-[#4B2E2A] transition-colors uppercase tracking-wider"
                          aria-label={`${project.title} GitHub repository`}
                        >
                          <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          <span>GitHub</span>
                        </a>
                      )}

                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-[#4B2E2A]/60 hover:text-[#4B2E2A] transition-colors uppercase tracking-wider"
                          aria-label={`${project.title} live demo`}
                        >
                          <ExternalLink size={13} />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View all projects button */}
        <div className="text-center mt-10">
          <button 
            onClick={() => setActiveFilter('All')}
            className="px-5 py-2.5 rounded-full border border-[#4B2E2A]/20 text-[#4B2E2A] text-xs sm:text-sm font-semibold hover:border-[#138A8A] hover:text-[#138A8A] bg-white transition-all shadow-xs"
          >
            View All Projects
          </button>
        </div>

      </div>
    </section>
  );
};
