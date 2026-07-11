"use client";

import React, { useState, use } from 'react';
import Link from 'next/link';
import { portfolioData, Project } from '@/data/portfolioData';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ChevronLeft, ExternalLink, Database, Cpu, Award, Copy, Check, BarChart, Settings, Lightbulb, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectDetail({ params }: PageProps) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;

  const project = portfolioData.projects.find((p) => p.id === id) as Project | undefined;
  
  const [activeTab, setActiveTab] = useState<'overview' | 'methodology' | 'code'>('overview');
  const [copied, setCopied] = useState(false);

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center min-h-[60vh] bg-grain bg-warm-white py-20 px-6">
          <h1 className="font-heading text-3xl font-bold text-[#4B2E2A] mb-4">Project Not Found</h1>
          <p className="font-sans text-sm text-[#4B2E2A]/60 mb-8">The case study you are looking for does not exist or has been moved.</p>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F47C20] text-white text-sm font-semibold hover:bg-[#F47C20]/90 transition-colors"
          >
            <ChevronLeft size={16} />
            Back to Projects
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 md:pt-32 pb-20 bg-grain bg-warm-white relative z-10">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          
          {/* Back Navigation */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4B2E2A]/60 hover:text-[#F47C20] transition-colors uppercase tracking-wider mb-8 group"
          >
            <ChevronLeft size={14} className="transition-transform duration-200 group-hover:-translate-x-0.5" />
            Back to Home
          </Link>

          {/* Project Header Banner */}
          <div className="border border-[#4B2E2A]/10 bg-white rounded-3xl p-6 md:p-10 shadow-sm mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-[#138A8A]/10 text-[#138A8A] border border-[#138A8A]/20 rounded-full text-xs font-bold uppercase tracking-wider">
                {project.category}
              </span>
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-[#FAF8F3] border border-[#4B2E2A]/10 rounded-full text-xs font-medium text-[#4B2E2A]/70">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#4B2E2A] leading-tight mb-6">
              {project.title}
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#4B2E2A]/80 leading-relaxed mb-8 max-w-4xl">
              {project.summary}
            </p>

            <div className="flex flex-wrap items-center gap-6 border-t border-[#4B2E2A]/10 pt-6">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#4B2E2A]/25 text-[#4B2E2A] text-sm font-semibold hover:border-[#138A8A] hover:text-[#138A8A] transition-colors bg-[#FAF8F3]/50"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub Repository
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F47C20] text-white text-sm font-semibold hover:bg-[#F47C20]/90 transition-colors shadow-md shadow-[#F47C20]/10"
                >
                  <ExternalLink size={16} />
                  Live System Demo
                </a>
              )}
            </div>
          </div>

          {/* Asymmetrical Grid Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            
            {/* Left Column: Tabbed Content Panel */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              
              {/* Tab Selector */}
              <div className="flex border-b border-[#4B2E2A]/10">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-6 py-3 font-heading text-sm font-bold uppercase tracking-wider border-b-2 transition-all ${
                    activeTab === 'overview' 
                      ? 'border-[#F47C20] text-[#F47C20]' 
                      : 'border-transparent text-[#4B2E2A]/50 hover:text-[#4B2E2A]'
                  }`}
                >
                  Overview &amp; Problem
                </button>
                <button
                  onClick={() => setActiveTab('methodology')}
                  className={`px-6 py-3 font-heading text-sm font-bold uppercase tracking-wider border-b-2 transition-all ${
                    activeTab === 'methodology' 
                      ? 'border-[#F47C20] text-[#F47C20]' 
                      : 'border-transparent text-[#4B2E2A]/50 hover:text-[#4B2E2A]'
                  }`}
                >
                  Methodology &amp; Architecture
                </button>
                {project.details.codeSnippet && (
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-6 py-3 font-heading text-sm font-bold uppercase tracking-wider border-b-2 transition-all ${
                      activeTab === 'code' 
                        ? 'border-[#F47C20] text-[#F47C20]' 
                        : 'border-transparent text-[#4B2E2A]/50 hover:text-[#4B2E2A]'
                    }`}
                  >
                    Implementation Code
                  </button>
                )}
              </div>

              {/* Tab Outputs */}
              <div className="bg-white border border-[#4B2E2A]/10 rounded-2xl p-6 sm:p-8 shadow-sm">
                
                {/* 1. Overview */}
                {activeTab === 'overview' && (
                  <div className="space-y-8 animate-fade-in">
                    <div>
                      <h2 className="font-heading text-xl font-bold text-[#4B2E2A] flex items-center gap-2 mb-4">
                        <Compass className="text-[#138A8A]" size={20} />
                        Project Overview
                      </h2>
                      <p className="font-sans text-sm sm:text-base text-[#4B2E2A]/75 leading-relaxed">
                        {project.details.overview}
                      </p>
                    </div>

                    <div className="border-t border-[#4B2E2A]/5 pt-6">
                      <h2 className="font-heading text-xl font-bold text-[#4B2E2A] flex items-center gap-2 mb-4">
                        <Settings className="text-[#F47C20]" size={20} />
                        The Problem
                      </h2>
                      <p className="font-sans text-sm sm:text-base text-[#4B2E2A]/75 leading-relaxed">
                        {project.details.problem}
                      </p>
                    </div>

                    <div className="border-t border-[#4B2E2A]/5 pt-6">
                      <h2 className="font-heading text-xl font-bold text-[#4B2E2A] flex items-center gap-2 mb-4">
                        <Database className="text-[#E8A317]" size={20} />
                        Dataset Sourced
                      </h2>
                      <p className="font-sans text-sm sm:text-base text-[#4B2E2A]/75 leading-relaxed">
                        {project.details.dataset}
                      </p>
                    </div>
                  </div>
                )}

                {/* 2. Methodology & Architecture */}
                {activeTab === 'methodology' && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="font-heading text-xl font-bold text-[#4B2E2A] flex items-center gap-2 mb-4">
                        <Lightbulb className="text-[#F47C20]" size={20} />
                        Methodology Applied
                      </h2>
                      <p className="font-sans text-sm sm:text-base text-[#4B2E2A]/75 leading-relaxed">
                        {project.details.methodology}
                      </p>
                    </div>

                    <div className="border-t border-[#4B2E2A]/5 pt-6">
                      <h2 className="font-heading text-xl font-bold text-[#4B2E2A] flex items-center gap-2 mb-4">
                        <Cpu className="text-[#138A8A]" size={20} />
                        System Architecture
                      </h2>
                      <p className="font-sans text-sm sm:text-base text-[#4B2E2A]/75 leading-relaxed mb-6">
                        {project.details.architecture}
                      </p>
                      
                      {/* Stylized architecture block diagram */}
                      <div className="bg-[#FAF8F3] border border-[#4B2E2A]/10 rounded-xl p-5 font-mono text-xs text-[#4B2E2A]/70 flex flex-col md:flex-row items-center justify-around gap-4 text-center">
                        <div className="bg-white border border-[#4B2E2A]/20 p-3 rounded shadow-sm w-36">
                          <strong>Sourced Feeds</strong>
                          <p className="text-[10px] text-[#4B2E2A]/50 mt-1">Raw CSV / DB Logs</p>
                        </div>
                        <div className="text-xl text-[#F47C20] font-bold">&rarr;</div>
                        <div className="bg-white border border-[#138A8A]/30 p-3 rounded shadow-sm w-36">
                          <strong>Processing Engine</strong>
                          <p className="text-[10px] text-[#138A8A] mt-1">Python ETL / Models</p>
                        </div>
                        <div className="text-xl text-[#F47C20] font-bold">&rarr;</div>
                        <div className="bg-white border border-[#E8A317]/30 p-3 rounded shadow-sm w-36">
                          <strong>Interactive UI</strong>
                          <p className="text-[10px] text-[#E8A317] mt-1">React Dashboard</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Code Block */}
                {activeTab === 'code' && project.details.codeSnippet && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#4B2E2A]/50 uppercase tracking-wider">
                        Language: {project.details.codeSnippet.language}
                      </span>
                      <button
                        onClick={() => handleCopyCode(project.details.codeSnippet!.code)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#F47C20] hover:text-[#F47C20]/80 transition-colors uppercase tracking-wider"
                      >
                        {copied ? (
                          <>
                            <Check size={14} className="text-green-600" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy size={14} />
                            Copy Code
                          </>
                        )}
                      </button>
                    </div>

                    <pre className="bg-[#4B2E2A] text-[#FAF8F3] p-6 rounded-xl overflow-x-auto text-xs font-mono leading-relaxed border border-black/10">
                      <code>{project.details.codeSnippet.code}</code>
                    </pre>
                  </div>
                )}

              </div>
            </div>

            {/* Right Column: Metadata & Tools Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              
              {/* Core Tools Card */}
              <div className="bg-white border border-[#4B2E2A]/10 rounded-2xl p-6 shadow-sm">
                <h3 className="font-heading text-base font-bold text-[#4B2E2A] mb-4 uppercase tracking-wider">
                  Tools Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.details.toolsUsed.map((tool) => (
                    <span 
                      key={tool}
                      className="px-3.5 py-1.5 bg-[#FAF8F3] border border-[#4B2E2A]/15 rounded-lg text-xs font-semibold text-[#4B2E2A]/85 hover:border-[#F47C20]/40 transition-colors cursor-pointer"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenges Card */}
              <div className="bg-white border border-[#4B2E2A]/10 rounded-2xl p-6 shadow-sm">
                <h3 className="font-heading text-base font-bold text-[#4B2E2A] mb-3 uppercase tracking-wider">
                  Challenges Faced
                </h3>
                <p className="font-sans text-xs text-[#4B2E2A]/75 leading-relaxed">
                  {project.details.challenges}
                </p>
              </div>

              {/* Lessons Learned Card */}
              <div className="bg-white border border-[#4B2E2A]/10 rounded-2xl p-6 shadow-sm">
                <h3 className="font-heading text-base font-bold text-[#4B2E2A] mb-3 uppercase tracking-wider">
                  Key Learnings
                </h3>
                <p className="font-sans text-xs text-[#4B2E2A]/75 leading-relaxed">
                  {project.details.lessonsLearned}
                </p>
              </div>

            </div>
          </div>

          {/* Visualizations Section */}
          <div className="border border-[#4B2E2A]/10 bg-white rounded-3xl p-6 md:p-8 shadow-sm mb-10">
            <h2 className="font-heading text-xl font-bold text-[#4B2E2A] flex items-center gap-2 mb-6">
              <BarChart className="text-[#138A8A]" size={22} />
              Key Visualizations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.details.visualizations.map((viz) => (
                <div 
                  key={viz.title} 
                  className="p-5 rounded-xl bg-[#FAF8F3]/50 border border-[#4B2E2A]/10 hover:border-[#138A8A]/30 transition-colors"
                >
                  <span className="text-[10px] font-bold text-[#138A8A] uppercase tracking-wider block mb-1">
                    {viz.type}
                  </span>
                  <h4 className="font-heading text-sm font-bold text-[#4B2E2A] mb-2">
                    {viz.title}
                  </h4>
                  <p className="font-sans text-xs text-[#4B2E2A]/70 leading-relaxed">
                    {viz.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Results & Impact Summary (Stripe style large numbers) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Results block */}
            <div className="bg-gradient-to-br from-white to-[#FAF8F3] border border-[#E8A317]/20 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-heading text-xs font-semibold uppercase tracking-widest text-[#E8A317] mb-2 block">
                  Performance Metric
                </span>
                <h3 className="font-heading text-lg font-bold text-[#4B2E2A] mb-3">
                  Statistical Outcomes
                </h3>
                <p className="font-sans text-sm text-[#4B2E2A]/75 leading-relaxed">
                  {project.details.results}
                </p>
              </div>
              <div className="w-full h-1 bg-[#E8A317]/20 rounded-full mt-6" />
            </div>

            {/* Impact block */}
            <div className="bg-gradient-to-br from-white to-[#FAF8F3] border border-[#F47C20]/20 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-heading text-xs font-semibold uppercase tracking-widest text-[#F47C20] mb-2 block">
                  Real-world Impact
                </span>
                <h3 className="font-heading text-lg font-bold text-[#4B2E2A] mb-3">
                  Societal Transformations
                </h3>
                <p className="font-sans text-sm text-[#4B2E2A]/75 leading-relaxed text-[#4B2E2A] font-semibold">
                  {project.details.impact}
                </p>
              </div>
              <div className="w-full h-1 bg-[#F47C20]/30 rounded-full mt-6" />
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
