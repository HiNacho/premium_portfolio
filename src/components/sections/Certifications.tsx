"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { Award, ArrowUpRight } from 'lucide-react';

export const Certifications: React.FC = () => {
  const { certifications } = portfolioData;

  const renderLogo = (type: string) => {
    let color = "text-[#FAF8F3] bg-[#E8A317]";
    let text = "AW";
    
    if (type === 'deeplearning') {
      color = "text-white bg-slate-900";
      text = "DL";
    } else if (type === 'spark') {
      color = "text-white bg-[#E8A317]";
      text = "SP";
    } else if (type === 'wqu') {
      color = "text-white bg-[#138A8A]";
      text = "WQ";
    } else if (type === 'freecodecamp') {
      color = "text-white bg-slate-950 border border-slate-800";
      text = "FC";
    } else if (type === 'genomac') {
      color = "text-white bg-purple-700";
      text = "GM";
    } else if (type === 'ibm') {
      color = "text-white bg-blue-600";
      text = "IB";
    } else if (type === 'google') {
      color = "text-white bg-red-500";
      text = "G";
    }

    return (
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-heading text-xs font-bold shadow-sm ${color}`}>
        {text}
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="font-heading text-xs font-semibold uppercase tracking-widest text-[#138A8A] mb-3 block">
            Validated Competencies
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#4B2E2A]">
            Certifications
          </h2>
        </div>
        <a 
          href="#contact" 
          className="text-xs font-bold text-[#F47C20] hover:underline uppercase tracking-wider inline-flex items-center gap-1"
        >
          Verify All
          <ArrowUpRight size={14} />
        </a>
      </div>

      {/* Certifications List */}
      <div className="space-y-4">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.credential}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="flex items-center gap-4 p-4 rounded-xl border border-[#4B2E2A]/10 bg-white hover:border-[#138A8A]/30 transition-colors shadow-sm group"
          >
            {/* Logo */}
            {renderLogo(cert.logoType)}

            {/* Content info */}
            <div className="flex-grow min-w-0">
              <h3 className="font-heading text-sm sm:text-base font-bold text-[#4B2E2A] leading-tight truncate group-hover:text-[#F47C20] transition-colors">
                {cert.credential}
              </h3>
              <p className="font-sans text-xs text-[#4B2E2A]/60 font-semibold mt-0.5 truncate">
                {cert.provider}
              </p>
            </div>

            {/* Year & verification link */}
            <div className="flex items-center gap-4 text-right">
              <span className="font-sans text-xs text-[#4B2E2A]/50 font-bold hidden sm:inline">
                {cert.year}
              </span>
              <a
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-[#FAF8F3] text-[#4B2E2A]/50 group-hover:text-[#F47C20] group-hover:bg-[#F47C20]/5 transition-colors border border-[#4B2E2A]/5"
                aria-label="View credential details"
              >
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
