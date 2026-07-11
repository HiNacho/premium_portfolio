"use client";

import React, { use } from 'react';
import Link from 'next/link';
import { portfolioData, BlogPost } from '@/data/portfolioData';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ChevronLeft, Calendar, Clock, ArrowLeft, Share2, Link2 } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogDetail({ params }: PageProps) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  const post = portfolioData.blogs.find((b) => b.slug === slug) as BlogPost | undefined;

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center min-h-[60vh] bg-[#FAF8F3] py-20 px-6">
          <h1 className="font-heading text-3xl font-bold text-[#4B2E2A] mb-4">Post Not Found</h1>
          <p className="font-sans text-sm text-[#4B2E2A]/60 mb-8">The blog article you are looking for does not exist or has been removed.</p>
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F47C20] text-white text-sm font-semibold hover:bg-[#F47C20]/90 transition-colors"
          >
            <ChevronLeft size={16} />
            Back to Articles
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'SQL': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Healthcare': return 'bg-[#138A8A]/10 text-[#138A8A] border-[#138A8A]/20';
      case 'Data Analytics': return 'bg-[#F47C20]/10 text-[#F47C20] border-[#F47C20]/20';
      case 'Career': return 'bg-[#E8A317]/10 text-[#E8A317] border-[#E8A317]/20';
      default: return 'bg-[#4B2E2A]/5 text-[#4B2E2A] border-[#4B2E2A]/10';
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 md:pt-32 pb-20 bg-grain bg-warm-white relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Back button */}
          <Link
            href="/#blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4B2E2A]/60 hover:text-[#F47C20] transition-colors uppercase tracking-wider mb-8 group"
          >
            <ChevronLeft size={14} className="transition-transform duration-200 group-hover:-translate-x-0.5" />
            Back to Insights
          </Link>

          {/* Article Header */}
          <header className="mb-10 border-b border-[#4B2E2A]/10 pb-8">
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4B2E2A]/65 uppercase mb-4">
              <span className={`px-2.5 py-0.5 rounded-full border ${getCategoryColor(post.category)}`}>
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar size={12} />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock size={12} />
                {post.readTime}
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#4B2E2A] leading-tight mb-6">
              {post.title}
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#4B2E2A]/70 italic leading-relaxed">
              {post.summary}
            </p>
          </header>

          {/* Article Content Render */}
          <article className="prose prose-stone max-w-none mb-12">
            <div className="font-sans text-sm sm:text-base text-[#4B2E2A]/85 leading-relaxed space-y-6">
              {post.content.split('\n\n').map((block, idx) => {
                if (block.startsWith('###')) {
                  return (
                    <h3 key={idx} className="font-heading text-lg sm:text-xl font-bold text-[#4B2E2A] pt-4 mb-2">
                      {block.replace('###', '').trim()}
                    </h3>
                  );
                }
                if (block.startsWith('*')) {
                  const bulletItems = block.split('\n');
                  return (
                    <ul key={idx} className="list-disc pl-5 space-y-2 mb-4">
                      {bulletItems.map((bullet, bidx) => (
                        <li key={bidx} className="text-[#4B2E2A]/80">
                          {bullet.replace('*', '').trim()}
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (block.startsWith('```')) {
                  const lines = block.split('\n');
                  const code = lines.slice(1, -1).join('\n');
                  const lang = lines[0].replace('```', '').trim();
                  return (
                    <pre key={idx} className="bg-[#4B2E2A] text-[#FAF8F3] p-5 rounded-xl overflow-x-auto text-xs font-mono my-4 border border-black/10">
                      <code>{code}</code>
                    </pre>
                  );
                }
                return (
                  <p key={idx}>
                    {block}
                  </p>
                );
              })}
            </div>
          </article>

          {/* Social shares and author bio */}
          <div className="border-t border-[#4B2E2A]/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-light-sand overflow-hidden relative">
                {/* Author profile avatar */}
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#F47C20]">
                  <rect width="40" height="40" fill="#F7F3EB" />
                  <path d="M20 22C24.4183 22 28 18.4183 28 14C28 9.58172 24.4183 6 20 6C15.5817 6 12 9.58172 12 14C12 18.4183 15.5817 22 20 22Z" fill="currentColor" opacity="0.15" />
                  <path d="M20 25C13.3726 25 8 30.3726 8 37H32C32 30.3726 26.6274 25 20 25Z" fill="currentColor" opacity="0.2" />
                </svg>
              </div>
              <div>
                <h4 className="font-heading text-xs font-bold text-[#4B2E2A]">Written by Victor Iheanacho</h4>
                <p className="font-sans text-[10px] text-[#4B2E2A]/50 font-bold uppercase tracking-wide">Data Analyst &amp; AI Engineer</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#4B2E2A]/50 uppercase tracking-wide mr-2">Share post:</span>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="p-2 rounded-full border border-[#4B2E2A]/10 text-[#4B2E2A]/60 hover:text-[#F47C20] hover:bg-[#F47C20]/5 transition-colors"
                aria-label="Share on X"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="p-2 rounded-full border border-[#4B2E2A]/10 text-[#4B2E2A]/60 hover:text-[#F47C20] hover:bg-[#F47C20]/5 transition-colors"
                aria-label="Share on LinkedIn"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }}
                className="p-2 rounded-full border border-[#4B2E2A]/10 text-[#4B2E2A]/60 hover:text-[#F47C20] hover:bg-[#F47C20]/5 transition-colors"
                aria-label="Copy link"
              >
                <Link2 size={14} />
              </button>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
