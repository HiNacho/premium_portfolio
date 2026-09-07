"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Mail, Download, Sparkles, Activity, Brain, Eye, Cpu } from 'lucide-react';
import { CircularMotif } from '../ui/AfricanPattern';
import { portfolioData } from '../../data/portfolioData';

export const About: React.FC = () => {
  const { email, location, experienceYears, resumeUrl } = portfolioData.personalInfo;

  const expertisePillars = [
    {
      icon: <Activity className="w-4 h-4 text-[#F47C20]" />,
      title: "Healthcare AI & Analytics",
      description: "Optimizing patient care & systemic operational bottlenecks.",
      bg: "bg-[#F47C20]/5 border-[#F47C20]/15"
    },
    {
      icon: <Brain className="w-4 h-4 text-[#138A8A]" />,
      title: "NLP & Clinical Texts",
      description: "Decoding complex clinical records & unstructured language data.",
      bg: "bg-[#138A8A]/5 border-[#138A8A]/15"
    },
    {
      icon: <Eye className="w-4 h-4 text-[#E8A317]" />,
      title: "Computer Vision",
      description: "Implementing vision models for assistive intelligence.",
      bg: "bg-[#E8A317]/5 border-[#E8A317]/15"
    },
    {
      icon: <Cpu className="w-4 h-4 text-[#4B2E2A]" />,
      title: "ML Systems & Automation",
      description: "Building production pipelines that empower sustainable growth.",
      bg: "bg-[#4B2E2A]/5 border-[#4B2E2A]/15"
    }
  ];

  return (
    <section id="about" className="relative py-14 sm:py-20 md:py-28 overflow-hidden bg-grain bg-warm-white">
      {/* Decorative background ambient glows */}
      <div className="absolute top-1/4 left-0 w-[240px] sm:w-[300px] h-[240px] sm:h-[300px] bg-glow-gold opacity-50 pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] bg-glow-orange opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column - The Story */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#138A8A]/10 border border-[#138A8A]/20 text-[#138A8A] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4 shadow-xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#138A8A] animate-pulse" />
              <span>About Me</span>
            </motion.div>

            {/* Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold tracking-tight text-[#4B2E2A] leading-tight mb-3 sm:mb-4"
            >
              I turn curiosity into solutions <br className="hidden sm:inline" />
              and data into <span className="text-[#F47C20]">impact</span>.
            </motion.h2>
            
            {/* Accent divider line */}
            <div className="w-16 h-1 bg-gradient-to-r from-[#F47C20] via-[#E8A317] to-[#138A8A] rounded-full mb-6 sm:mb-8" />

            {/* Featured Story Callout Card (Doctor to AI Engineer) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full bg-white/95 backdrop-blur-xs border border-[#4B2E2A]/10 rounded-2xl p-4 sm:p-6 mb-6 shadow-xs relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#F47C20] to-[#138A8A]" />
              
              <div className="flex items-center gap-2 mb-2 text-[#F47C20] font-heading font-bold text-xs uppercase tracking-wider">
                <Sparkles size={14} />
                <span>The Unique Transition</span>
              </div>
              
              <p className="font-sans text-[14px] sm:text-[15px] text-[#4B2E2A]/90 leading-relaxed font-medium">
                As a <strong className="text-[#4B2E2A] font-bold">Medical Doctor (MBBS)</strong>, I saw firsthand the systemic bottlenecks in healthcare systems. As a <strong className="text-[#138A8A] font-bold">Data Scientist &amp; AI Engineer</strong>, I decided to build the intelligent solutions.
              </p>
            </motion.div>

            {/* Core Mission Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-sans text-[14px] sm:text-base text-[#4B2E2A]/80 leading-relaxed mb-6"
            >
              I am deeply committed to leveraging Artificial Intelligence, Machine Learning, and Data Analytics to drive real-world impact across Africa and beyond&mdash;bridging clinical domain expertise with data intelligence to optimize patient care, automate complex operations, and decode data into actionable plans.
            </motion.p>

            {/* 4-Pillar Expertise Grid (Mobile Optimized) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 w-full mb-6 sm:mb-8"
            >
              {expertisePillars.map((pillar) => (
                <div 
                  key={pillar.title}
                  className={`p-3 sm:p-3.5 rounded-xl border flex items-start gap-3 transition-colors ${pillar.bg}`}
                >
                  <div className="p-1.5 bg-white rounded-lg shadow-xs shrink-0 mt-0.5">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xs sm:text-sm text-[#4B2E2A]">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-[11px] sm:text-xs text-[#4B2E2A]/70 leading-normal mt-0.5">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Signature & Download Action Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 w-full pt-2"
            >
              {/* Signature Lockup */}
              <div className="flex items-center gap-3">
                <div className="w-auto h-9 sm:h-11">
                  <svg 
                    width="140" 
                    height="40" 
                    viewBox="0 0 180 60" 
                    fill="none" 
                    stroke="#4B2E2A" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="opacity-90 w-full h-full"
                  >
                    <path d="M10,40 Q30,25 40,25 T60,35 T80,20 T95,30 T110,15 T130,45" />
                    <path d="M40,22 L140,22 Q160,22 150,30 T130,35" stroke="#F47C20" strokeWidth="1.5" opacity="0.8" />
                    <path d="M15,42 C30,35 60,30 85,38 C110,46 140,32 165,25" stroke="#E8A317" strokeWidth="1" opacity="0.6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#4B2E2A] leading-tight">Victor Iheanacho</p>
                  <p className="text-[10px] sm:text-[11px] font-semibold text-[#4B2E2A]/50 uppercase tracking-wider">MBBS &bull; AI Engineer</p>
                </div>
              </div>

              {/* Download CV CTA */}
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-full border border-[#4B2E2A]/20 text-[#4B2E2A] hover:border-[#F47C20] hover:text-[#F47C20] font-semibold text-xs sm:text-sm transition-all bg-white shadow-xs group text-center"
              >
                <span>Download CV</span>
                <Download size={14} className="transition-transform duration-200 group-hover:translate-y-0.5" />
              </a>
            </motion.div>

          </div>

          {/* Right Column - Arched Frame & Facts Overlay */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative pt-6 sm:pt-10 lg:pt-0">
            <div className="relative w-[260px] h-[340px] xs:w-[280px] xs:h-[370px] sm:w-[320px] sm:h-[420px]">
              
              {/* Outer decorative circular motif */}
              <div className="absolute top-[-10%] right-[-10%] w-[100px] sm:w-[120px] h-[100px] sm:h-[120px] pointer-events-none opacity-40">
                <CircularMotif className="text-[#138A8A]" />
              </div>

              {/* Decorative Geometric Outline background border */}
              <div className="absolute inset-0 border border-[#E8A317]/30 rounded-t-full translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 pointer-events-none" />

              {/* Arched Picture Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full h-full rounded-t-full overflow-hidden border-[6px] sm:border-8 border-white bg-light-sand shadow-lg relative z-10"
              >
                <Image
                  src="/img/viktor_profile_pic.jpeg"
                  alt="Victor Iheanacho About Portrait"
                  fill
                  sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, 340px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              {/* Accent colored shapes floating around right section */}
              <div className="absolute right-[-10px] bottom-[20%] w-4 h-4 sm:w-5 sm:h-5 bg-[#F47C20] rounded-full z-20 opacity-80" />
              <div className="absolute left-[30%] top-[-15px] w-5 h-5 sm:w-6 sm:h-6 border-2 border-[#E8A317] rotate-45 z-0 opacity-40" />
            </div>

            {/* Facts Card - Responsive positioning on mobile & desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-[280px] xs:max-w-[300px] sm:max-w-[320px] -mt-10 sm:-mt-12 lg:absolute lg:bottom-[-5%] lg:left-[-10%] lg:right-[10%] bg-white/95 backdrop-blur-md border border-[#4B2E2A]/10 rounded-2xl p-4 sm:p-5 shadow-xl z-20 relative"
            >
              <div className="flex flex-col gap-3 sm:gap-4 text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#F47C20]/10 text-[#F47C20] flex items-center justify-center shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#4B2E2A]/50 font-semibold uppercase">Location</p>
                    <p className="font-semibold text-[#4B2E2A]">{location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#E8A317]/10 text-[#E8A317] flex items-center justify-center shrink-0">
                    <Briefcase size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#4B2E2A]/50 font-semibold uppercase">Experience</p>
                    <p className="font-semibold text-[#4B2E2A]">{experienceYears} Years</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#138A8A]/10 text-[#138A8A] flex items-center justify-center shrink-0">
                    <Mail size={16} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] text-[#4B2E2A]/50 font-semibold uppercase">Email</p>
                    <p className="font-semibold text-[#4B2E2A] truncate">{email}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
