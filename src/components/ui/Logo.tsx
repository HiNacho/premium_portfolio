import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', className = "" }) => {
  const isSmall = size === 'sm';
  const isLarge = size === 'lg';
  
  // Scaled up sizes for visibility and elegance
  const emblemSize = isSmall ? 36 : isLarge ? 56 : 46;
  const textSizeClass = isSmall ? 'text-xl' : isLarge ? 'text-3xl' : 'text-2xl';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Circular Emblem (Africa with Neural/Circuit traces) - Placed in front */}
      <svg 
        width={emblemSize} 
        height={emblemSize} 
        viewBox="0 0 100 100" 
        className="shrink-0"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Glowing outer circle (red/orange gradient) */}
        <circle 
          cx="50" 
          cy="50" 
          r="44" 
          stroke="url(#emblem-circle-grad)" 
          strokeWidth="3.5" 
          fill="rgba(75, 46, 42, 0.03)" 
        />
        
        {/* Africa Outline inside */}
        <path 
          d="M 45 25 
             C 52 25, 54 28, 59 28
             C 62 28, 64 30, 68 34
             C 71 37, 72 40, 77 46
             C 79 48, 77 54, 75 56
             C 73 58, 70 60, 68 64
             C 65 69, 63 76, 59 81
             C 57 84, 53 87, 51 89
             C 49 90, 48 90, 47 88
             C 45 84, 46 80, 43 76
             C 40 72, 38 67, 36 62
             C 34 58, 30 55, 27 52
             C 24 49, 21 47, 19 43
             C 17 40, 19 36, 21 33
             C 24 30, 27 28, 31 28
             C 34 28, 38 27, 41 26
             Z" 
          stroke="#4B2E2A" 
          strokeWidth="1.5" 
          fill="none"
          opacity="0.15"
        />

        {/* Neural Network Circuitry Traces inside Africa */}
        <g stroke="#138A8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Main vertical grid traces */}
          <path d="M 45 35 L 53 45 L 48 55 L 54 65 L 50 78" />
          <path d="M 33 42 L 40 46 L 43 54 L 38 63" />
          <path d="M 64 45 L 59 52 L 62 60 M 62 60 L 57 70" />
          
          {/* Node branches */}
          <line x1="53" y1="45" x2="62" y2="40" stroke="#FAF8F3" strokeWidth="1" />
          <line x1="48" y1="55" x2="40" y2="54" stroke="#FAF8F3" strokeWidth="1" />
          <line x1="54" y1="65" x2="62" y2="60" stroke="#FAF8F3" strokeWidth="1" />
          <line x1="54" y1="65" x2="48" y2="70" stroke="#FAF8F3" strokeWidth="1" />
        </g>

        {/* Micro-nodes (dots on circuitry intersections) */}
        <g fill="#F47C20">
          <circle cx="53" cy="45" r="2.5" />
          <circle cx="48" cy="55" r="2.5" />
          <circle cx="54" cy="65" r="2.5" />
          <circle cx="40" cy="46" r="2" fill="#E8A317" />
          <circle cx="59" cy="52" r="2" fill="#E8A317" />
          <circle cx="50" cy="78" r="3" className="animate-pulse" />
        </g>

        {/* Definitions for Gradients */}
        <defs>
          <linearGradient id="emblem-circle-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F47C20" />
            <stop offset="50%" stopColor="#E8A317" />
            <stop offset="100%" stopColor="#138A8A" />
          </linearGradient>
        </defs>
      </svg>

      {/* Brand Text - Placed after the emblem */}
      <div className={`font-heading font-extrabold ${textSizeClass} tracking-wide flex items-center leading-none`}>
        <span className="text-[#F47C20]">Hi</span>
        <span className="text-[#4B2E2A]">Nacho</span>
      </div>
    </div>
  );
};
