"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

export const TechStack: React.FC = () => {
  const { techStack } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Tech' },
    { id: 'programming', label: 'Programming' },
    { id: 'frameworks', label: 'Frameworks' },
    { id: 'machineLearning', label: 'Machine Learning' },
    { id: 'cloud', label: 'Cloud & DevOps' },
    { id: 'databases', label: 'Databases' },
    { id: 'visualization', label: 'Data Viz' },
  ];

  const getToolsToDisplay = () => {
    if (activeCategory === 'all') {
      return Object.entries(techStack).flatMap(([cat, list]) => 
        list.map(item => ({ ...item, category: cat }))
      );
    }
    return techStack[activeCategory as keyof typeof techStack].map(item => ({
      ...item,
      category: activeCategory
    }));
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'programming': return 'border-[#F47C20]/30 bg-[#F47C20]/5 text-[#F47C20]';
      case 'frameworks': return 'border-[#E8A317]/30 bg-[#E8A317]/5 text-[#E8A317]';
      case 'machineLearning': return 'border-[#138A8A]/30 bg-[#138A8A]/5 text-[#138A8A]';
      case 'cloud': return 'border-[#2E8B57]/30 bg-[#2E8B57]/5 text-[#2E8B57]';
      case 'databases': return 'border-[#4B2E2A]/30 bg-[#4B2E2A]/5 text-[#4B2E2A]';
      case 'visualization': return 'border-pink-500/30 bg-pink-500/5 text-pink-700';
      default: return 'border-[#4B2E2A]/10 bg-[#FAF8F3] text-[#4B2E2A]';
    }
  };

  return (
    <section id="tech-stack" className="relative py-20 md:py-28 bg-[#FAF8F3]/40 border-t border-[#4B2E2A]/5 z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-heading text-xs font-semibold uppercase tracking-widest text-[#138A8A] mb-3 block">
            Tools &amp; Technologies
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-[#4B2E2A] mb-4">
            My Tech Stack
          </h2>
          <p className="font-sans text-sm md:text-base text-[#4B2E2A]/65 leading-relaxed">
            The programming languages, libraries, frameworks, cloud systems, and database architectures I use daily.
          </p>
        </div>

        {/* Tab filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-[#4B2E2A] text-[#FAF8F3] shadow-md'
                  : 'bg-white border border-[#4B2E2A]/15 text-[#4B2E2A]/70 hover:border-[#4B2E2A]/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Tool Grid */}
        <motion.div 
          layout
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {getToolsToDisplay().map((tool, idx) => (
              <motion.div
                key={`${tool.name}-${idx}`}
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -3 }}
                className={`p-4 rounded-xl border flex flex-col items-center justify-center text-center bg-white shadow-sm transition-all ${getCategoryColor(tool.category)}`}
              >
                {/* Styled Monogram / Icon container */}
                <div className="w-12 h-12 rounded-lg bg-white border border-[#4B2E2A]/10 shadow-sm flex items-center justify-center font-heading text-base font-bold mb-3">
                  {tool.logo}
                </div>
                <span className="font-sans text-xs font-semibold text-[#4B2E2A]">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
