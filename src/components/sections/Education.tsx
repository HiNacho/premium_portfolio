"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <div className="w-full">
      <span className="font-heading text-xs font-semibold uppercase tracking-widest text-[#F47C20] mb-3 block">
        Academic Journey
      </span>
      <h2 className="font-heading text-3xl font-bold tracking-tight text-[#4B2E2A] mb-12">
        Education
      </h2>

      {/* Timeline Wrapper */}
      <div className="relative border-l-2 border-[#E8A317]/30 ml-4 pl-8 space-y-12 py-2">
        {education.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative group"
          >
            {/* Pulsing indicator node */}
            <div className="absolute left-[-41px] top-1.5 w-6 h-6 rounded-full border-4 border-[#FAF8F3] bg-[#E8A317] group-hover:bg-[#F47C20] group-hover:scale-110 transition-all duration-300 shadow-sm" />

            <span className="font-sans text-xs font-bold text-[#F47C20] uppercase tracking-wider block mb-1">
              {item.period}
            </span>
            <h3 className="font-heading text-lg font-bold text-[#4B2E2A] leading-snug mb-1">
              {item.title}
            </h3>
            <p className="font-sans text-sm text-[#4B2E2A]/60 font-semibold mb-3">
              {item.institution}
            </p>
            <p className="font-sans text-sm text-[#4B2E2A]/75 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
