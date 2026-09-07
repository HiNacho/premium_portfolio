"use client";

import React, { useState, useEffect, useSyncExternalStore } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete?: () => void;
}

const subscribeReducedMotion = (callback: () => void) => {
  if (typeof window === 'undefined') return () => {};
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  mediaQuery.addEventListener('change', callback);
  return () => mediaQuery.removeEventListener('change', callback);
};

const getReducedMotionSnapshot = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'initial' | 'nacho' | 'says' | 'hi' | 'settled' | 'exit'>('initial');
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    () => false
  );
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (prefersReducedMotion) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onComplete) onComplete();
      }, 600);
      return () => clearTimeout(timer);
    }

    // Sequence timings
    const t1 = setTimeout(() => setPhase('nacho'), 200);
    const t2 = setTimeout(() => setPhase('says'), 750);
    const t3 = setTimeout(() => setPhase('hi'), 1200);
    const t4 = setTimeout(() => setPhase('settled'), 1650);
    const t5 = setTimeout(() => setPhase('exit'), 2050);
    const t6 = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 2650);

    // Lock body scroll during preloader
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      document.body.style.overflow = 'unset';
    };
  }, [onComplete, prefersReducedMotion]);

  // Clean up body overflow when unmounted
  useEffect(() => {
    if (!isVisible) {
      document.body.style.overflow = 'unset';
    }
  }, [isVisible]);

  if (!isVisible) return null;

  if (prefersReducedMotion) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FAF8F3] text-[#4B2E2A] font-heading text-3xl font-bold transition-opacity duration-500 opacity-100">
        <span>Nacho says <span className="text-[#F47C20]">Hi!</span></span>
      </div>
    );
  }

  const nachoLetters = ["N", "a", "c", "h", "o"];

  return (
    <AnimatePresence>
      {phase !== 'exit' ? (
        <motion.div
          key="preloader-overlay"
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%",
            transition: { 
              duration: 0.65, 
              ease: [0.76, 0, 0.24, 1] 
            } 
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FAF8F3] bg-grain overflow-hidden select-none pointer-events-auto"
        >
          {/* Subtle Ambient Radial Glows */}
          <div className="absolute top-1/4 left-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-glow-orange opacity-40 pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-glow-teal opacity-35 pointer-events-none" />

          {/* Center Stage Container */}
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 px-6 text-center">
            
            {/* 1. "Nacho" Wordmark */}
            <div className="flex items-center overflow-hidden py-1">
              {nachoLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 50, opacity: 0, rotate: index % 2 === 0 ? 3 : -3 }}
                  animate={phase !== 'initial' ? { 
                    y: 0, 
                    opacity: 1, 
                    rotate: 0,
                    transition: { 
                      duration: 0.45, 
                      delay: index * 0.06, 
                      ease: [0.22, 1, 0.36, 1] 
                    } 
                  } : {}}
                  className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#4B2E2A] tracking-tight inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* 2. "says" Connective Bridge */}
            <div className="overflow-hidden py-1 flex items-center justify-center">
              <motion.span
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={(phase === 'says' || phase === 'hi' || phase === 'settled') ? { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { 
                    duration: 0.4, 
                    ease: [0.34, 1.56, 0.64, 1] 
                  } 
                } : {}}
                className="font-sans font-medium italic text-xl sm:text-2xl md:text-3xl text-[#138A8A] tracking-wide px-1.5 sm:px-2.5 inline-block"
              >
                says
              </motion.span>
            </div>

            {/* 3. "Hi!" Payoff Moment */}
            <div className="overflow-hidden py-1 flex items-center">
              <motion.div
                initial={{ scale: 0, opacity: 0, rotate: -8 }}
                animate={(phase === 'hi' || phase === 'settled') ? { 
                  scale: 1, 
                  opacity: 1, 
                  rotate: 0,
                  transition: { 
                    duration: 0.5, 
                    ease: [0.34, 1.56, 0.64, 1] 
                  } 
                } : {}}
                className="relative inline-flex items-center"
              >
                <span className="font-heading font-extrabold text-5xl sm:text-6xl md:text-7xl text-[#F47C20] tracking-tight drop-shadow-xs">
                  Hi
                </span>

                {/* Animated Exclamation Mark */}
                <motion.span
                  initial={{ scale: 0, y: -12, rotate: 15 }}
                  animate={(phase === 'hi' || phase === 'settled') ? { 
                    scale: [0, 1.35, 1],
                    y: 0,
                    rotate: [15, -4, 0],
                    transition: { 
                      duration: 0.45, 
                      delay: 0.15, 
                      ease: [0.34, 1.56, 0.64, 1] 
                    } 
                  } : {}}
                  className="font-heading font-extrabold text-5xl sm:text-6xl md:text-7xl bg-gradient-to-tr from-[#F47C20] to-[#E8A317] bg-clip-text text-transparent inline-block ml-0.5 drop-shadow-xs"
                >
                  !
                </motion.span>

                {/* Subtle Ripple Ping on Payoff */}
                {phase === 'hi' && (
                  <motion.span 
                    initial={{ scale: 0.8, opacity: 0.8 }}
                    animate={{ scale: 2.2, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#F47C20]/25 pointer-events-none"
                  />
                )}
              </motion.div>
            </div>

          </div>

          {/* Micro Brand Subtitle that fades in on settled phase */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={phase === 'settled' ? { 
              opacity: 0.7, 
              y: 0,
              transition: { duration: 0.4 } 
            } : { opacity: 0 }}
            className="absolute bottom-10 sm:bottom-12 flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#4B2E2A]/60"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#138A8A]" />
            <span>AI Engineer &bull; Data Analyst</span>
          </motion.div>

        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
