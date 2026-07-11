"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Mail, CheckCircle2, Download } from 'lucide-react';
import { CircularMotif } from '../ui/AfricanPattern';
import { portfolioData } from '../../data/portfolioData';

export const About: React.FC = () => {
  const { name, email, location, experienceYears, resumeUrl } = portfolioData.personalInfo;

  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden bg-grain bg-warm-white">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-glow-gold opacity-50 pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-[350px] h-[350px] bg-glow-orange opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - The Story */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="font-heading text-xs font-semibold uppercase tracking-widest text-[#138A8A] mb-3">
              About Me
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#4B2E2A] mb-4">
              I turn curiosity into solutions <br className="hidden sm:inline" />
              and data into <span className="text-[#F47C20]">impact</span>.
            </h2>
            
            {/* Custom geometric wavy divider line representing flow */}
            <div className="w-16 h-1 bg-gradient-to-r from-[#F47C20] via-[#E8A317] to-[#138A8A] rounded-full mb-8" />

            <div className="font-sans text-base text-[#4B2E2A]/75 space-y-6 leading-relaxed mb-8 max-w-2xl">
              <p>
                My journey is defined by a unique transition. As a <strong>Medical Doctor (MBBS)</strong>, I saw firsthand the systemic bottlenecks in healthcare systems. As a <strong>Data Scientist and AI Engineer</strong>, I decided to build the solutions.
              </p>
              <p>
                I am deeply committed to leveraging Artificial Intelligence, Machine Learning, and Data Analytics to drive real-world impact across Africa. By bridging the gap between medical expertise and data intelligence, I design systems that optimize patient care, automate complex operations, and decode data into actionable plans.
              </p>
              <p>
                Whether fine-tuning Natural Language Processing (NLP) models on clinical texts, implementing Computer Vision models for diagnostic assistance, or orchestrating automated business workflows, my focus remains constant: building technologies that empower society and foster sustainable development.
              </p>
            </div>

            {/* Handwritten Signature */}
            <div className="mb-8">
              <svg 
                width="180" 
                height="60" 
                viewBox="0 0 180 60" 
                fill="none" 
                stroke="#4B2E2A" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="opacity-90"
              >
                {/* Simulated elegant vector script signature path */}
                <path d="M10,40 Q30,25 40,25 T60,35 T80,20 T95,30 T110,15 T130,45" />
                <path d="M40,22 L140,22 Q160,22 150,30 T130,35" stroke="#F47C20" strokeWidth="1.5" opacity="0.8" />
                <path d="M15,42 C30,35 60,30 85,38 C110,46 140,32 165,25" stroke="#E8A317" strokeWidth="1" opacity="0.6" />
              </svg>
              <p className="text-xs font-semibold text-[#4B2E2A]/40 uppercase tracking-widest mt-1">
                Victor Iheanacho &mdash; Data Analyst &amp; AI Engineer
              </p>
            </div>

            <a
              href={resumeUrl}
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#4B2E2A]/20 text-[#4B2E2A] hover:border-[#138A8A] hover:text-[#138A8A] font-semibold transition-all bg-white shadow-sm"
            >
              Download CV
              <Download size={16} />
            </a>
          </div>

          {/* Right Column - Arched Frame & Facts Overlay */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-[300px] h-[400px] sm:w-[340px] sm:h-[450px]">
              
              {/* Outer decorative items */}
              <div className="absolute top-[-10%] right-[-10%] w-[120px] h-[120px] pointer-events-none opacity-40">
                <CircularMotif className="text-[#138A8A]" />
              </div>

              {/* Decorative Geometric Outline background border */}
              <div className="absolute inset-0 border border-[#E8A317]/30 rounded-t-full translate-x-4 translate-y-4 pointer-events-none" />

              {/* Arched Picture Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full h-full rounded-t-full overflow-hidden border-8 border-white bg-light-sand shadow-lg relative z-10"
              >
                <Image
                  src="/img/viktor_profile_pic.jpeg"
                  alt="Victor Iheanacho About Portrait"
                  fill
                  sizes="(max-width: 768px) 300px, 340px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              {/* Overlapping Quick Facts Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute bottom-[-5%] left-[-10%] sm:left-[-15%] right-[10%] bg-white/95 backdrop-blur-md border border-[#4B2E2A]/10 rounded-2xl p-6 shadow-xl z-20"
              >
                <div className="flex flex-col gap-4 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#FAF8F3] text-[#F47C20] rounded-lg">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-[#4B2E2A]/50 font-semibold uppercase">Location</p>
                      <p className="font-semibold text-[#4B2E2A]">{location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#FAF8F3] text-[#E8A317] rounded-lg">
                      <Briefcase size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-[#4B2E2A]/50 font-semibold uppercase">Experience</p>
                      <p className="font-semibold text-[#4B2E2A]">{experienceYears} Years</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#FAF8F3] text-[#138A8A] rounded-lg">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-[#4B2E2A]/50 font-semibold uppercase">Email</p>
                      <p className="font-semibold text-[#4B2E2A]">{email}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Accent colored shapes floating around right section */}
              <div className="absolute right-[-10px] bottom-[20%] w-5 h-5 bg-[#F47C20] rounded-full z-20 opacity-80" />
              <div className="absolute left-[30%] top-[-20px] w-6 h-6 border-2 border-[#E8A317] rotate-45 z-0 opacity-40" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
