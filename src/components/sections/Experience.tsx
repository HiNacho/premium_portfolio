"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { ChevronLeft, ChevronRight, Building2, Briefcase, FlaskConical, Users, Sparkles, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>('Internships');
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const categories = [
    { id: 'Internships', label: 'Internships', icon: <Briefcase className="w-3.5 h-3.5" /> },
    { id: 'Research', label: 'Research', icon: <FlaskConical className="w-3.5 h-3.5" /> },
    { id: 'Leadership', label: 'Leadership', icon: <Users className="w-3.5 h-3.5" /> },
  ];

  const filteredExperience = experience.filter(item => item.category === activeCategory);
  const currentItem = filteredExperience[currentSlide] || filteredExperience[0];

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentSlide(0);
  };

  const handlePrev = () => {
    setCurrentSlide(prev => (prev > 0 ? prev - 1 : filteredExperience.length - 1));
  };

  const handleNext = () => {
    setCurrentSlide(prev => (prev < filteredExperience.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="experience" className="relative py-14 sm:py-20 md:py-28 bg-[#FAF8F3]/60 z-20 border-t border-[#4B2E2A]/5 overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute right-0 top-1/4 w-[260px] sm:w-[300px] h-[260px] sm:h-[300px] bg-glow-teal opacity-45 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F47C20]/10 border border-[#F47C20]/20 text-[#F47C20] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs"
          >
            <Sparkles size={12} />
            <span>Professional Path</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#4B2E2A] mb-3"
          >
            Work &amp; Leadership Experience
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-sans text-[13px] sm:text-sm md:text-base text-[#4B2E2A]/65 leading-relaxed max-w-lg mx-auto"
          >
            A chronicle of my professional appointments, clinical informatics leadership, and research projects.
          </motion.p>
        </div>

        {/* Category Tabs Pill Bar */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 p-1 bg-white/90 backdrop-blur-xs border border-[#4B2E2A]/10 rounded-full shadow-xs">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200 active:scale-95 cursor-pointer ${
                    isActive
                      ? 'bg-[#4B2E2A] text-[#FAF8F3] shadow-sm'
                      : 'text-[#4B2E2A]/70 hover:text-[#4B2E2A] hover:bg-[#FAF8F3]'
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

        {/* Main Experience Card */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${currentItem?.id || currentSlide}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/95 backdrop-blur-xs border border-[#4B2E2A]/10 rounded-2xl p-5 sm:p-7 md:p-8 shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden"
            >
              {/* Card Top Header */}
              <div className="flex items-start justify-between gap-4 mb-5 sm:mb-6">
                <div className="min-w-0">
                  {/* Period Badge */}
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#F47C20]/10 border border-[#F47C20]/20 text-[#F47C20] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                    {currentItem?.period}
                  </span>

                  {/* Role Title */}
                  <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-[#4B2E2A] leading-tight">
                    {currentItem?.role}
                  </h3>

                  {/* Organization */}
                  <div className="flex items-center gap-1.5 mt-1.5 text-xs sm:text-sm font-semibold text-[#4B2E2A]/70">
                    <Building2 size={15} className="text-[#138A8A] shrink-0" />
                    <span className="truncate">{currentItem?.organization}</span>
                  </div>
                </div>

                {/* Slider Controls (if more than 1 item) */}
                {filteredExperience.length > 1 && (
                  <div className="flex items-center gap-1.5 shrink-0 bg-[#FAF8F3] border border-[#4B2E2A]/10 rounded-full p-1 shadow-xs">
                    <button
                      onClick={handlePrev}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-[#4B2E2A]/70 hover:text-[#4B2E2A] hover:bg-white transition-colors active:scale-90 cursor-pointer"
                      aria-label="Previous experience"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    
                    <span className="text-[11px] font-bold text-[#4B2E2A]/60 px-1 select-none">
                      {currentSlide + 1}/{filteredExperience.length}
                    </span>

                    <button
                      onClick={handleNext}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-[#4B2E2A]/70 hover:text-[#4B2E2A] hover:bg-white transition-colors active:scale-90 cursor-pointer"
                      aria-label="Next experience"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                )}
              </div>

              {/* Impact Bullets */}
              <div className="border-t border-[#4B2E2A]/8 pt-5">
                <ul className="space-y-3 sm:space-y-3.5">
                  {currentItem?.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-[#4B2E2A]/80 leading-relaxed">
                      <div className="p-1 rounded-md bg-[#138A8A]/10 text-[#138A8A] shrink-0 mt-0.5">
                        <CheckCircle2 size={13} />
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pagination Dots (if multi-slide) */}
              {filteredExperience.length > 1 && (
                <div className="flex justify-center items-center gap-1.5 mt-6 pt-4 border-t border-[#4B2E2A]/5">
                  {filteredExperience.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        currentSlide === idx 
                          ? 'bg-[#138A8A] w-6' 
                          : 'bg-[#4B2E2A]/20 hover:bg-[#4B2E2A]/40 w-1.5'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
