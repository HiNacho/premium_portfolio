"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Code, Flame } from 'lucide-react';

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
  bgTint: string;
  color: string;
}

export const Stats: React.FC = () => {
  const stats: StatItem[] = [
    {
      icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />,
      value: "10+",
      label: "Projects Completed",
      bgTint: "bg-[#F47C20]/10 text-[#F47C20] border-[#F47C20]/20",
      color: "text-[#F47C20]"
    },
    {
      icon: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />,
      value: "2+",
      label: "Years of Experience",
      bgTint: "bg-[#E8A317]/10 text-[#E8A317] border-[#E8A317]/20",
      color: "text-[#E8A317]"
    },
    {
      icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
      value: "5+",
      label: "Technologies Mastered",
      bgTint: "bg-[#138A8A]/10 text-[#138A8A] border-[#138A8A]/20",
      color: "text-[#138A8A]"
    },
    {
      icon: <Flame className="w-5 h-5 sm:w-6 sm:h-6" />,
      value: "∞",
      label: "Commitment to Growth",
      bgTint: "bg-red-500/10 text-red-500 border-red-500/20",
      color: "text-red-500"
    }
  ];

  return (
    <section className="w-full bg-[#FAF8F3] py-6 sm:py-8 md:py-10 border-y border-[#4B2E2A]/8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
        >
          {stats.map((stat, idx) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white/90 backdrop-blur-xs border border-[#4B2E2A]/8 rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col items-center text-center shadow-xs hover:shadow-md hover:border-[#F47C20]/30 transition-all duration-300 group"
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center border mb-2.5 sm:mb-3 group-hover:scale-110 transition-transform duration-300 ${stat.bgTint}`}>
                {stat.icon}
              </div>
              <span className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#4B2E2A] tracking-tight mb-0.5 sm:mb-1">
                {stat.value}
              </span>
              <span className="font-sans text-[11px] sm:text-xs md:text-sm text-[#4B2E2A]/70 font-semibold tracking-wider uppercase leading-snug">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
