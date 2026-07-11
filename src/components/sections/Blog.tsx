"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { Clock, Calendar, ArrowUpRight } from 'lucide-react';

export const Blog: React.FC = () => {
  const { blogs } = portfolioData;

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'SQL': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Healthcare': return 'bg-[#138A8A]/10 text-[#138A8A] border-[#138A8A]/20';
      case 'Data Analytics': return 'bg-[#F47C20]/10 text-[#F47C20] border-[#F47C20]/20';
      case 'Privacy & AI': return 'bg-[#E8A317]/10 text-[#E8A317] border-[#E8A317]/20';
      case 'Career': return 'bg-[#E8A317]/10 text-[#E8A317] border-[#E8A317]/20';
      case 'AI & Film': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'AI & Education': return 'bg-[#138A8A]/10 text-[#138A8A] border-[#138A8A]/20';
      case 'AI & SEO': return 'bg-[#F47C20]/10 text-[#F47C20] border-[#F47C20]/20';
      default: return 'bg-[#4B2E2A]/5 text-[#4B2E2A] border-[#4B2E2A]/10';
    }
  };

  // Return a unique graphic thumbnail SVG for the blog posts
  const getThumbnailSVG = (title: string, category: string) => {
    let color = "#F47C20";
    if (category === 'Healthcare' || category === 'AI & Education') color = "#138A8A";
    else if (category === 'SQL' || category === 'AI & Film') color = "#7C3AED";
    else if (category === 'Privacy & AI' || category === 'Career') color = "#E8A317";
    else if (category === 'AI & SEO') color = "#F47C20";

    return (
      <svg viewBox="0 0 400 200" className="w-full h-full object-cover">
        <rect width="100%" height="100%" fill="#F7F3EB" opacity="0.6" />
        
        {/* Horizontal coding lines / database blocks mockups */}
        <g fill="#4B2E2A" opacity="0.08">
          <rect x="30" y="30" width="340" height="15" rx="3" />
          <rect x="30" y="55" width="200" height="12" rx="3" />
          <rect x="30" y="75" width="280" height="12" rx="3" />
          <rect x="30" y="95" width="150" height="12" rx="3" />
        </g>
        
        {/* Colorful highlight curves */}
        <path d="M 0 150 Q 150 120 250 170 T 400 130" stroke={color} strokeWidth="2.5" fill="none" opacity="0.25" />
        <path d="M 0 170 Q 120 150 220 180 T 400 150" stroke="#FAF8F3" strokeWidth="2" fill="none" opacity="0.6" />

        {/* Dynamic visual tag indicator */}
        <circle cx="340" cy="150" r="25" fill={color} opacity="0.1" />
        <text 
          x="340" 
          y="155" 
          textAnchor="middle" 
          fill={color} 
          fontWeight="bold" 
          fontSize="18"
          fontFamily="monospace"
        >
          {category[0]}
        </text>
      </svg>
    );
  };

  return (
    <section id="blog" className="relative py-20 md:py-28 bg-[#FAF8F3]/60 z-20 border-t border-[#4B2E2A]/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="font-heading text-xs font-semibold uppercase tracking-widest text-[#138A8A] mb-3 block">
              Latest from the Blog
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-[#4B2E2A]">
              Insights &amp; Writing
            </h2>
          </div>
          <p className="font-sans text-sm text-[#4B2E2A]/60 max-w-sm mt-4 md:mt-0">
            Documenting my engineering process, SQL performance guides, and insights at the intersection of AI and medical care.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((post, idx) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white border border-[#4B2E2A]/10 rounded-xl overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-all duration-300"
            >
              {/* Card Thumbnail */}
              <div className="w-full h-40 relative overflow-hidden border-b border-[#4B2E2A]/5 bg-light-sand">
                {post.thumbnail ? (
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  getThumbnailSVG(post.title, post.category)
                )}
              </div>

              {/* Card Details */}
              <div className="p-5 flex flex-col flex-grow">
                {/* Meta details */}
                <div className="flex items-center gap-3 text-[11px] text-[#4B2E2A]/65 mb-3 font-semibold uppercase">
                  <span className={`px-2.5 py-0.5 rounded-full border ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock size={11} />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <Link
                  href={post.externalLink || `/blog/${post.slug}`}
                  target={post.externalLink ? "_blank" : undefined}
                  rel={post.externalLink ? "noopener noreferrer" : undefined}
                >
                  <h3 className="font-heading text-base font-bold text-[#4B2E2A] mb-3 leading-snug group-hover:text-[#F47C20] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                {/* Summary */}
                <p className="font-sans text-xs text-[#4B2E2A]/70 leading-relaxed mb-4 line-clamp-3">
                  {post.summary}
                </p>

                {/* Publish Date and Link */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#4B2E2A]/5 text-[11px] font-bold text-[#4B2E2A]/55">
                  <span className="inline-flex items-center gap-1 font-medium">
                    <Calendar size={11} />
                    {post.date}
                  </span>
                  
                  <Link
                    href={post.externalLink || `/blog/${post.slug}`}
                    target={post.externalLink ? "_blank" : undefined}
                    rel={post.externalLink ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-0.5 text-[#F47C20] uppercase tracking-wider hover:underline"
                  >
                    Read
                    <ArrowUpRight size={12} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
