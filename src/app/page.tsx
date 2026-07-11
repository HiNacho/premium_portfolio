import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { About } from '@/components/sections/About';
import { Expertise } from '@/components/sections/Expertise';
import { TechStack } from '@/components/sections/TechStack';
import { Projects } from '@/components/sections/Projects';
import { Blog } from '@/components/sections/Blog';
import { Education } from '@/components/sections/Education';
import { Certifications } from '@/components/sections/Certifications';
import { Experience } from '@/components/sections/Experience';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      {/* Floating navigation header */}
      <Navbar />
      
      {/* Core single-page flow */}
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero />
        
        {/* Bridge: Stats block */}
        <Stats />
        
        {/* Section 2: About Me */}
        <About />
        
        {/* Section 3: My Expertise */}
        <Expertise />
        
        {/* Section 8: Tech Stack */}
        <TechStack />
        
        {/* Section 4: Featured Projects */}
        <Projects />
        
        {/* Section 5: Blog */}
        <Blog />
        
        {/* Sections 6 & 7: Education & Certifications (Split Layout from Image 2) */}
        <section id="academic-journey" className="relative py-20 md:py-28 bg-[#FAF8F3]/40 border-t border-[#4B2E2A]/5 z-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Section 6: Education */}
              <Education />
              {/* Section 7: Certifications */}
              <Certifications />
            </div>
          </div>
        </section>

        {/* Section 9: Experience */}
        <Experience />
        
        {/* Section 10: Testimonials */}
        <Testimonials />
        
        {/* Section 11: Contact */}
        <Contact />
      </main>

      {/* Footer element with patterns */}
      <Footer />
    </>
  );
}
