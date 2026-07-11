"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Code, Flame } from 'lucide-react';

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}

export const Stats: React.FC = () => {
  const stats: StatItem[] = [
    {
      icon: <Award className="w-8 h-8" />,
      value: "10+",
      label: "Projects Completed",
      color: "text-[#F47C20]"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      value: "2+",
      label: "Years of Experience",
      color: "text-[#E8A317]"
    },
    {
      icon: <Code className="w-8 h-8" />,
      value: "5+",
      label: "Technologies Mastered",
      color: "text-[#138A8A]"
    },
    {
      icon: <Flame className="w-8 h-8" />,
      value: "∞",
      label: "Commitment to Growth",
      color: "text-red-500"
    }
  ];

  return (
    <section className="w-full bg-[#FAF8F3] py-8 border-y border-[#4B2E2A]/5 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-white border border-[#4B2E2A]/10 rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 shadow-sm relative overflow-hidden"
        >
          {stats.map((stat, idx) => (
            <div 
              key={stat.label} 
              className={`flex flex-col items-center text-center p-4 ${
                idx !== stats.length - 1 ? 'md:border-r border-[#4B2E2A]/10' : ''
              }`}
            >
              <div className={`${stat.color} mb-3 p-3 bg-light-sand rounded-xl`}>
                {stat.icon}
              </div>
              <span className="font-heading text-3xl md:text-4xl font-extrabold text-[#4B2E2A] mb-1">
                {stat.value}
              </span>
              <span className="font-sans text-xs md:text-sm text-[#4B2E2A]/60 font-semibold tracking-wide uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
