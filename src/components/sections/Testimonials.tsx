"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { ChevronLeft, ChevronRight, Quote, Sparkles, Award } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { testimonials } = portfolioData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 60 : -60,
      opacity: 0,
      scale: 0.98
    })
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="relative py-14 sm:py-20 md:py-28 bg-grain bg-warm-white z-20 border-t border-[#4B2E2A]/5 overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute left-[-80px] bottom-[-80px] w-[260px] sm:w-[320px] h-[260px] sm:h-[320px] bg-glow-orange opacity-40 pointer-events-none" />
      <div className="absolute right-[-80px] top-[-80px] w-[260px] sm:w-[320px] h-[260px] sm:h-[320px] bg-glow-teal opacity-30 pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#138A8A]/10 border border-[#138A8A]/20 text-[#138A8A] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs"
          >
            <Sparkles size={12} />
            <span>Endorsements &amp; Philosophy</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#4B2E2A]"
          >
            What Drives My Work
          </motion.h2>
        </div>

        {/* Featured Testimonial / Philosophy Card */}
        <div className="relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="w-full bg-white/95 backdrop-blur-xs border border-[#4B2E2A]/10 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-9 shadow-xs hover:shadow-md transition-all duration-300 relative flex flex-col"
            >
              {/* Top Row: Clean Quote Badge */}
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F47C20]/10 border border-[#F47C20]/20 text-[#F47C20] flex items-center justify-center shadow-xs">
                  <Quote size={18} fill="currentColor" />
                </div>
                
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FAF8F3] border border-[#4B2E2A]/10 text-[10px] sm:text-[11px] font-bold text-[#4B2E2A]/70 uppercase tracking-wider">
                  <Award size={13} className="text-[#E8A317]" />
                  <span>Verified Mission</span>
                </div>
              </div>

              {/* Quote Statement */}
              <p className="font-heading text-sm sm:text-base md:text-lg text-[#4B2E2A] font-medium leading-relaxed mb-6 sm:mb-7">
                &ldquo;{currentTestimonial.quote}&rdquo;
              </p>

              {/* Author Footer */}
              <div className="flex items-center justify-between border-t border-[#4B2E2A]/8 pt-4 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#F47C20] to-[#E8A317] flex items-center justify-center font-heading text-xs sm:text-sm font-bold text-white shadow-xs shrink-0">
                    {currentTestimonial.avatar}
                  </div>
                  <div>
                    <h3 className="font-heading text-xs sm:text-sm font-bold text-[#4B2E2A]">
                      {currentTestimonial.name}
                    </h3>
                    <p className="font-sans text-[10px] sm:text-[11px] text-[#4B2E2A]/60 font-semibold">
                      {currentTestimonial.role} &bull; {currentTestimonial.company}
                    </p>
                  </div>
                </div>

                {/* Integrated Carousel Controls (if more than 1 testimonial) */}
                {testimonials.length > 1 && (
                  <div className="flex items-center gap-1.5 bg-[#FAF8F3] border border-[#4B2E2A]/10 rounded-full p-1 shadow-xs">
                    <button
                      onClick={handlePrev}
                      className="w-7 h-7 rounded-full flex items-center justify-center text-[#4B2E2A]/70 hover:text-[#4B2E2A] hover:bg-white transition-colors active:scale-90 cursor-pointer"
                      aria-label="Previous endorsement"
                    >
                      <ChevronLeft size={15} />
                    </button>
                    
                    <span className="text-[10px] font-bold text-[#4B2E2A]/60 px-1 select-none">
                      {currentIndex + 1}/{testimonials.length}
                    </span>

                    <button
                      onClick={handleNext}
                      className="w-7 h-7 rounded-full flex items-center justify-center text-[#4B2E2A]/70 hover:text-[#4B2E2A] hover:bg-white transition-colors active:scale-90 cursor-pointer"
                      aria-label="Next endorsement"
                    >
                      <ChevronRight size={15} />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
