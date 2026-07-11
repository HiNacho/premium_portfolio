"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { testimonials } = portfolioData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0
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
    <section id="testimonials" className="relative py-20 md:py-28 bg-grain bg-warm-white z-20 border-t border-[#4B2E2A]/5 overflow-hidden">
      {/* Decorative gradient radial highlights */}
      <div className="absolute left-[-100px] bottom-[-100px] w-[300px] h-[300px] bg-glow-orange opacity-40 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <span className="font-heading text-xs font-semibold uppercase tracking-widest text-[#138A8A] mb-3 block">
            Endorsements
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-[#4B2E2A]">
            What People Say
          </h2>
        </div>

        {/* Carousel Window */}
        <div className="relative min-h-[280px] sm:min-h-[220px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full bg-white border border-[#4B2E2A]/10 rounded-3xl p-8 md:p-12 shadow-sm text-center relative flex flex-col items-center"
            >
              {/* Quote icon overlay */}
              <div className="absolute top-6 left-6 text-[#F47C20]/10">
                <Quote size={64} fill="currentColor" />
              </div>

              <p className="font-sans text-base md:text-lg italic text-[#4B2E2A]/85 leading-relaxed mb-8 max-w-2xl relative z-10">
                "{currentTestimonial.quote}"
              </p>

              {/* Avatar indicator */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#F47C20] to-[#E8A317] flex items-center justify-center font-heading text-sm font-bold text-white shadow-sm">
                  {currentTestimonial.avatar}
                </div>
                <div className="text-left">
                  <h4 className="font-heading text-sm font-bold text-[#4B2E2A]">
                    {currentTestimonial.name}
                  </h4>
                  <p className="font-sans text-xs text-[#4B2E2A]/60 font-semibold">
                    {currentTestimonial.role} &mdash; {currentTestimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination arrows */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full border border-[#4B2E2A]/20 bg-white hover:border-[#138A8A] hover:text-[#138A8A] transition-all cursor-pointer shadow-sm group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="transition-transform duration-200 group-hover:-translate-x-0.5" />
          </button>
          
          <div className="flex gap-1.5">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'bg-[#F47C20] w-6' : 'bg-[#4B2E2A]/15 hover:bg-[#4B2E2A]/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-full border border-[#4B2E2A]/20 bg-white hover:border-[#138A8A] hover:text-[#138A8A] transition-all cursor-pointer shadow-sm group"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
