"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { ExternalLink, ArrowRight } from 'lucide-react';

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
      <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
        <rect width="100%" height="100%" fill="#F7F3EB" />
        <circle cx="200" cy="120" r="80" fill={color1} opacity="0.08" />
        <circle cx="200" cy="120" r="50" fill={color2} opacity="0.05" />
        
        {/* Abstract lines simulating AI nodes and connections */}
        <g stroke={color1} strokeWidth="1.5" opacity="0.3">
          <line x1="120" y1="80" x2="200" y2="60" />
          <line x1="200" y1="60" x2="280" y2="80" />
          <line x1="280" y1="80" x2="260" y2="160" />
          <line x1="260" y1="160" x2="140" y2="160" />
          <line x1="140" y1="160" x2="120" y2="80" />
          
          <line x1="200" y1="60" x2="200" y2="120" />
          <line x1="120" y1="80" x2="200" y2="120" />
          <line x1="280" y1="80" x2="200" y2="120" />
          <line x1="260" y1="160" x2="200" y2="120" />
          <line x1="140" y1="160" x2="200" y2="120" />
        </g>
        
        {/* Small nodes */}
        <circle cx="200" cy="60" r="4" fill={color1} />
        <circle cx="120" cy="80" r="4" fill={color2} />
        <circle cx="280" cy="80" r="4" fill={color2} />
        <circle cx="260" cy="160" r="4" fill={color1} />
        <circle cx="140" cy="160" r="4" fill={color1} />
        <circle cx="200" cy="120" r="5" fill="#FAF8F3" stroke={color1} strokeWidth="2" />
        
        {/* Monogram card title */}
        <text 
          x="50%" 
          y="85%" 
          textAnchor="middle" 
          fill="#4B2E2A" 
          opacity="0.8"
          fontFamily="monospace"
          fontSize="11" 
          letterSpacing="1"
        >
          {id.toUpperCase()}.PY
        </text>
      </svg>
    );
  };

  return (
    <section id="projects" className="relative py-20 md:py-28 bg-grain bg-warm-white z-20 border-t border-[#4B2E2A]/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="font-heading text-xs font-semibold uppercase tracking-widest text-[#F47C20] mb-3 block">
              Featured Projects
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-[#4B2E2A]">
              Explore My Work
            </h2>
          </div>
          <p className="font-sans text-sm text-[#4B2E2A]/60 max-w-sm mt-4 md:mt-0">
            Filter through my projects by category to see how I solve complex real-world challenges with data science and software tools.
          </p>
        </div>

        {/* Category Buttons Filter */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-[#4B2E2A]/10 pb-6">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[#138A8A] text-[#FAF8F3] shadow-md'
                  : 'bg-white border border-[#4B2E2A]/15 text-[#4B2E2A]/75 hover:border-[#138A8A]/40'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-[#4B2E2A]/10 rounded-2xl overflow-hidden shadow-sm flex flex-col group hover:shadow-md hover:border-[#138A8A]/20 transition-all duration-300"
              >
                {/* Project Image/SVG Preview */}
                <div className="w-full h-52 sm:h-60 relative overflow-hidden border-b border-[#4B2E2A]/5">
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
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm border border-[#4B2E2A]/10 rounded-full text-xs font-bold text-[#4B2E2A] shadow-sm uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>

                {/* Project Details Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="font-heading text-xl font-bold text-[#4B2E2A] mb-3 group-hover:text-[#F47C20] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="font-sans text-sm text-[#4B2E2A]/75 leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  {/* Problem solved indicator (Crucial for product page layout) */}
                  <div className="bg-[#FAF8F3] border-l-2 border-[#138A8A] p-3 rounded-r-lg mb-6 text-xs text-[#4B2E2A]/85">
                    <strong className="text-[#138A8A] uppercase tracking-wider block mb-0.5">Problem Solved:</strong>
                    {project.details.problem}
                  </div>

                  {/* Tech stack items */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 bg-[#F7F3EB] rounded-md text-[11px] font-semibold text-[#4B2E2A]/75">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex items-center gap-6 mt-auto border-t border-[#4B2E2A]/5 pt-4">
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F47C20] hover:text-[#F47C20]/80 transition-colors uppercase tracking-wider group/link"
                    >
                      Case Study
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover/link:translate-x-0.5" />
                    </Link>

                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#4B2E2A]/60 hover:text-[#4B2E2A] transition-colors uppercase tracking-wider"
                      >
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                    )}

                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#4B2E2A]/60 hover:text-[#4B2E2A] transition-colors uppercase tracking-wider"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View all projects button */}
        <div className="text-center mt-12">
          <button 
            onClick={() => setActiveFilter('All')}
            className="px-6 py-3 rounded-full border border-[#4B2E2A]/25 text-[#4B2E2A] text-sm font-semibold hover:border-[#138A8A] hover:text-[#138A8A] bg-white transition-all shadow-sm"
          >
            View All Projects
          </button>
        </div>

      </div>
    </section>
  );
};
