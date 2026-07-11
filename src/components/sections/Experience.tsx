"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { ChevronDown, Calendar, Building2, Terminal } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>('Internships');
  const [expandedItem, setExpandedItem] = useState<string | null>('exp-1'); // default expanded
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const categories = ['Internships', 'Research', 'Leadership'];

  const filteredExperience = experience.filter(item => item.category === activeCategory);

  const toggleExpand = (id: string) => {
    if (expandedItem === id) {
      setExpandedItem(null);
    } else {
      setExpandedItem(id);
    }
  };

  return (
    <section id="experience" className="relative py-20 md:py-28 bg-[#FAF8F3]/60 z-20 border-t border-[#4B2E2A]/5">
      {/* Glow highlight */}
      <div className="absolute right-0 top-1/4 w-[300px] h-[300px] bg-glow-teal opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-heading text-xs font-semibold uppercase tracking-widest text-[#F47C20] mb-3 block">
            Professional Path
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-[#4B2E2A] mb-4">
            Work &amp; Leadership Experience
          </h2>
          <p className="font-sans text-sm md:text-base text-[#4B2E2A]/65 leading-relaxed">
            A chronicle of my professional appointments, clinical informatics leadership, and research projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Category Toggles Column */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setCurrentSlide(0);
                  // Auto-expand first item in newly selected category
                  const firstItem = experience.find(item => item.category === cat);
                  setExpandedItem(firstItem ? firstItem.id : null);
                }}
                className={`px-5 py-3 rounded-xl text-xs font-bold tracking-wider uppercase text-left whitespace-nowrap lg:whitespace-normal transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#4B2E2A] text-[#FAF8F3] shadow-md'
                    : 'bg-white border border-[#4B2E2A]/10 text-[#4B2E2A]/70 hover:border-[#4B2E2A]/30 hover:bg-[#FAF8F3]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Right Accordion List Column */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {activeCategory === 'Internships' ? (
                <motion.div
                  key="internships-slider"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="bg-white border border-[#4B2E2A]/10 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between min-h-[360px]"
                >
                  <div>
                    {/* Slider Header */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="pr-4">
                        <span className="font-sans text-xs font-bold text-[#F47C20] uppercase tracking-wider block mb-1">
                          {filteredExperience[currentSlide]?.period}
                        </span>
                        <h3 className="font-heading text-lg sm:text-xl font-bold text-[#4B2E2A]">
                          {filteredExperience[currentSlide]?.role}
                        </h3>
                        <p className="font-sans text-sm text-[#4B2E2A]/60 font-semibold mt-1.5 flex items-center gap-1">
                          <Building2 size={14} />
                          {filteredExperience[currentSlide]?.organization}
                        </p>
                      </div>
                      
                      {/* Slider Navigation Buttons */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => setCurrentSlide(prev => (prev > 0 ? prev - 1 : filteredExperience.length - 1))}
                          className="p-2 rounded-full border border-[#4B2E2A]/10 bg-[#FAF8F3] hover:bg-[#4B2E2A] hover:text-[#FAF8F3] transition-all duration-300 text-[#4B2E2A] cursor-pointer animate-none"
                          aria-label="Previous Internship"
                        >
                          <ChevronDown size={16} className="rotate-90" />
                        </button>
                        <button
                          onClick={() => setCurrentSlide(prev => (prev < filteredExperience.length - 1 ? prev + 1 : 0))}
                          className="p-2 rounded-full border border-[#4B2E2A]/10 bg-[#FAF8F3] hover:bg-[#4B2E2A] hover:text-[#FAF8F3] transition-all duration-300 text-[#4B2E2A] cursor-pointer animate-none"
                          aria-label="Next Internship"
                        >
                          <ChevronDown size={16} className="-rotate-90" />
                        </button>
                      </div>
                    </div>

                    {/* Slider Content */}
                    <div className="border-t border-[#4B2E2A]/5 pt-6">
                      <motion.ul 
                        key={filteredExperience[currentSlide]?.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        {filteredExperience[currentSlide]?.bullets.map((bullet, index) => (
                          <li key={index} className="flex items-start gap-3 text-sm text-[#4B2E2A]/75 leading-relaxed">
                            <Terminal size={14} className="text-[#F47C20] mt-1 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </motion.ul>
                    </div>
                  </div>

                  {/* Dot Indicators */}
                  <div className="flex justify-center gap-2 mt-8">
                    {filteredExperience.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                          currentSlide === idx ? 'bg-[#138A8A] w-6' : 'bg-[#4B2E2A]/20'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="experiences-accordion"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  {filteredExperience.length > 0 ? (
                    filteredExperience.map((item) => {
                      const isExpanded = expandedItem === item.id;
                      return (
                        <div
                          key={item.id}
                          className={`rounded-2xl border transition-all duration-300 bg-white ${
                            isExpanded 
                              ? 'border-[#138A8A] shadow-md shadow-[#138A8A]/5' 
                              : 'border-[#4B2E2A]/10 hover:border-[#4B2E2A]/25'
                          }`}
                        >
                          {/* Header block (Toggle Trigger) */}
                          <button
                            onClick={() => toggleExpand(item.id)}
                            className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                          >
                            <div className="pr-4">
                              <h3 className="font-heading text-base sm:text-lg font-bold text-[#4B2E2A]">
                                {item.role}
                              </h3>
                              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-[#4B2E2A]/60 font-semibold">
                                <span className="flex items-center gap-1">
                                  <Building2 size={12} />
                                  {item.organization}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Calendar size={12} />
                                  {item.period}
                                </span>
                              </div>
                            </div>
                            
                            <motion.div
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className={`p-1.5 rounded-full border ${isExpanded ? 'bg-[#138A8A]/10 border-[#138A8A]/20 text-[#138A8A]' : 'bg-[#FAF8F3] border-[#4B2E2A]/10 text-[#4B2E2A]/50'}`}
                            >
                              <ChevronDown size={16} />
                            </motion.div>
                          </button>

                          {/* Collapsible Content */}
                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="px-6 pb-6 border-t border-[#4B2E2A]/5 pt-5 bg-gradient-to-b from-white to-[#FAF8F3]/20">
                                  <ul className="space-y-3">
                                    {item.bullets.map((bullet, index) => (
                                      <li key={index} className="flex items-start gap-3 text-sm text-[#4B2E2A]/75 leading-relaxed">
                                        <Terminal size={14} className="text-[#F47C20] mt-1 shrink-0" />
                                        <span>{bullet}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })
                  ) : (
                    <div className="p-8 text-center bg-white border border-[#4B2E2A]/10 rounded-2xl text-sm text-[#4B2E2A]/50">
                      No experience records registered in this category.
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
