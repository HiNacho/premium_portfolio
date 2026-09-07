"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { Cpu, Terminal, Layers, Database, BarChart3, Cloud, Sparkles } from 'lucide-react';

interface TechItem {
  name: string;
  logo: string;
  category: string;
}

export const TechStack: React.FC = () => {
  const { techStack } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Tech', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'programming', label: 'Programming', icon: <Terminal className="w-3.5 h-3.5" /> },
    { id: 'machineLearning', label: 'Machine Learning', icon: <Cpu className="w-3.5 h-3.5" /> },
    { id: 'frameworks', label: 'Frameworks', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'cloud', label: 'Cloud & DevOps', icon: <Cloud className="w-3.5 h-3.5" /> },
    { id: 'databases', label: 'Databases', icon: <Database className="w-3.5 h-3.5" /> },
    { id: 'visualization', label: 'Data Viz', icon: <BarChart3 className="w-3.5 h-3.5" /> },
  ];

  const getToolsToDisplay = (): TechItem[] => {
    if (activeCategory === 'all') {
      return Object.entries(techStack).flatMap(([cat, list]) => 
        list.map(item => ({ ...item, category: cat }))
      );
    }
    const selectedList = techStack[activeCategory as keyof typeof techStack] || [];
    return selectedList.map(item => ({
      ...item,
      category: activeCategory
    }));
  };

  const getCategoryMeta = (cat: string) => {
    switch (cat) {
      case 'programming': 
        return {
          label: 'Languages',
          badgeBg: 'bg-[#F47C20]/10 text-[#F47C20]',
          border: 'hover:border-[#F47C20]/40',
          gradient: 'from-[#F47C20]/15 to-[#F47C20]/5',
          accent: '#F47C20'
        };
      case 'frameworks': 
        return {
          label: 'Framework',
          badgeBg: 'bg-[#E8A317]/10 text-[#E8A317]',
          border: 'hover:border-[#E8A317]/40',
          gradient: 'from-[#E8A317]/15 to-[#E8A317]/5',
          accent: '#E8A317'
        };
      case 'machineLearning': 
        return {
          label: 'AI & ML',
          badgeBg: 'bg-[#138A8A]/10 text-[#138A8A]',
          border: 'hover:border-[#138A8A]/40',
          gradient: 'from-[#138A8A]/15 to-[#138A8A]/5',
          accent: '#138A8A'
        };
      case 'cloud': 
        return {
          label: 'DevOps',
          badgeBg: 'bg-[#2E8B57]/10 text-[#2E8B57]',
          border: 'hover:border-[#2E8B57]/40',
          gradient: 'from-[#2E8B57]/15 to-[#2E8B57]/5',
          accent: '#2E8B57'
        };
      case 'databases': 
        return {
          label: 'Data Storage',
          badgeBg: 'bg-[#4B2E2A]/10 text-[#4B2E2A]',
          border: 'hover:border-[#4B2E2A]/40',
          gradient: 'from-[#4B2E2A]/15 to-[#4B2E2A]/5',
          accent: '#4B2E2A'
        };
      case 'visualization': 
        return {
          label: 'BI & Analytics',
          badgeBg: 'bg-pink-500/10 text-pink-700',
          border: 'hover:border-pink-500/40',
          gradient: 'from-pink-500/15 to-pink-500/5',
          accent: '#ec4899'
        };
      default: 
        return {
          label: 'Tech',
          badgeBg: 'bg-[#4B2E2A]/10 text-[#4B2E2A]',
          border: 'hover:border-[#4B2E2A]/40',
          gradient: 'from-[#FAF8F3] to-white',
          accent: '#4B2E2A'
        };
    }
  };

  const displayedTools = getToolsToDisplay();

  return (
    <section id="tech-stack" className="relative py-14 sm:py-20 md:py-28 bg-[#FAF8F3]/60 border-t border-[#4B2E2A]/5 z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#138A8A]/10 border border-[#138A8A]/20 text-[#138A8A] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#138A8A]" />
            <span>Tools &amp; Technologies</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#4B2E2A] mb-3"
          >
            My Tech Stack
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-sans text-[13px] sm:text-sm md:text-base text-[#4B2E2A]/70 leading-relaxed max-w-lg mx-auto"
          >
            The programming languages, frameworks, AI/ML libraries, cloud systems, and databases I leverage in production.
          </motion.p>
        </div>

        {/* Horizontal Mobile-Friendly Scrollable Filter Pills */}
        <div className="relative mb-8 sm:mb-10 -mx-4 sm:mx-0 px-4 sm:px-0">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none sm:justify-center no-scrollbar touch-pan-x">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`shrink-0 inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 active:scale-95 ${
                    isActive
                      ? 'bg-[#4B2E2A] text-[#FAF8F3] shadow-md shadow-[#4B2E2A]/20'
                      : 'bg-white/90 backdrop-blur-xs border border-[#4B2E2A]/10 text-[#4B2E2A]/70 hover:border-[#4B2E2A]/30 hover:text-[#4B2E2A]'
                  }`}
                >
                  <span className={isActive ? 'text-[#F47C20]' : 'opacity-60'}>
                    {cat.icon}
                  </span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Tool Grid - Mobile Optimized 2-column on small / 3 on tablet / 4 on md / 6 on lg */}
        <motion.div 
          layout
          className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-3 md:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {displayedTools.map((tool, idx) => {
              const meta = getCategoryMeta(tool.category);
              return (
                <motion.div
                  key={`${tool.name}-${tool.category}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ duration: 0.25, delay: idx * 0.02 }}
                  whileHover={{ y: -3 }}
                  className={`p-3 sm:p-4 rounded-2xl border border-[#4B2E2A]/8 bg-white/95 backdrop-blur-xs flex flex-col items-center justify-between text-center shadow-xs transition-all duration-200 group ${meta.border}`}
                >
                  {/* Category Pill Tag */}
                  <span className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-2 ${meta.badgeBg}`}>
                    {meta.label}
                  </span>

                  {/* Monogram Badge */}
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${meta.gradient} border border-[#4B2E2A]/10 flex items-center justify-center font-heading font-extrabold text-sm sm:text-base text-[#4B2E2A] mb-2 shadow-xs group-hover:scale-105 transition-transform duration-200`}>
                    {tool.logo}
                  </div>

                  {/* Tool Name */}
                  <span className="font-heading font-bold text-xs sm:text-sm text-[#4B2E2A] tracking-tight line-clamp-1 leading-snug">
                    {tool.name}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
