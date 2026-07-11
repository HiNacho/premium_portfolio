import React from 'react';

// Ndebele geometric repeating pattern border
export const NdebeleBorder: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg 
      viewBox="0 0 800 20" 
      className={`w-full h-auto text-primary-orange ${className}`} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <pattern id="ndebele-pattern" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
        {/* Chevron Triangles */}
        <path d="M 0 20 L 10 0 L 20 20 Z" fill="currentColor" opacity="0.15" />
        <path d="M 20 20 L 30 0 L 40 20 Z" fill="currentColor" opacity="0.08" />
        
        {/* Colorful highlights */}
        <path d="M 10 0 L 20 20 L 30 0 Z" fill="#E8A317" opacity="0.3" />
        <path d="M 0 0 L 5 10 L 10 0" stroke="#138A8A" strokeWidth="1.5" />
        <path d="M 30 0 L 35 10 L 40 0" stroke="#138A8A" strokeWidth="1.5" />
        
        {/* Connecting horizontal line */}
        <line x1="0" y1="0" x2="40" y2="0" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        <line x1="0" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      </pattern>
      <rect width="100%" height="20" fill="url(#ndebele-pattern)" />
    </svg>
  );
};

// Elegant Adinkra-inspired mask/symbol
export const AdinkraMask: React.FC<{ className?: string; size?: number }> = ({ className = "", size = 48 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      className={`text-primary-orange fill-current ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Abstract stylized mask incorporating organic African curves and modern nodes */}
      <path d="M50,10 C20,10 20,45 20,65 C20,80 35,90 50,90 C65,90 80,80 80,65 C80,45 80,10 50,10 Z M50,15 C74,15 74,45 74,65 C74,77 62,85 50,85 C38,85 26,77 26,65 C26,45 26,15 50,15 Z" />
      
      {/* Center symbol: Sankofa or Dwennimmen RAM Horn curves */}
      <path d="M50,28 C45,28 40,32 40,38 C40,44 48,46 50,52 C52,46 60,44 60,38 C60,32 55,28 50,28 Z" stroke="#FAF8F3" strokeWidth="2" fill="none" />
      <path d="M50,52 C45,52 35,56 35,64 C35,72 45,76 50,70 C55,76 65,72 65,64 C65,56 55,52 50,52 Z" stroke="#FAF8F3" strokeWidth="2" fill="none" />
      
      {/* Decorative dots / connections */}
      <circle cx="50" cy="22" r="3" fill="#E8A317" />
      <circle cx="50" cy="78" r="3" fill="#E8A317" />
      <circle cx="15" cy="50" r="2" fill="#138A8A" />
      <circle cx="85" cy="50" r="2" fill="#138A8A" />
    </svg>
  );
};

// Circular dotted background pattern
export const CircularMotif: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={`absolute opacity-20 pointer-events-none ${className}`}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
      <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10 15" />
      <circle cx="100" cy="100" r="30" stroke="#F47C20" strokeWidth="1" />
      
      {/* Ray indicators */}
      <line x1="100" y1="0" x2="100" y2="200" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <line x1="0" y1="100" x2="200" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
};

// Neural Network Map of Africa (Scalable and animated outline)
export const AfricaNetworkMap: React.FC<{ className?: string }> = ({ className = "" }) => {
  // Key points tracing Africa's shape inside a 200x200 canvas
  const borderNodes = [
    { x: 80, y: 15 },   // Tunisia / North
    { x: 100, y: 18 },  // Libya / North-East
    { x: 120, y: 22 },  // Egypt / East
    { x: 125, y: 35 },  // Red Sea coast
    { x: 145, y: 55 },  // Horn of Africa (Somalia)
    { x: 135, y: 70 },  // East Africa coast
    { x: 122, y: 88 },  // Mozambique / Madagascar channel
    { x: 110, y: 110 }, // South-East Africa
    { x: 100, y: 135 }, // Durban / South Africa
    { x: 92, y: 148 },  // Cape Town / South Tip
    { x: 82, y: 130 },  // Namibia coast
    { x: 78, y: 112 },  // Angola / West coast
    { x: 74, y: 92 },   // Gabon / Gulf of Guinea
    { x: 62, y: 80 },   // Cameroon bend
    { x: 50, y: 78 },   // Nigeria coast
    { x: 30, y: 74 },   // Ivory Coast / Liberia
    { x: 18, y: 65 },   // Senegal / West Tip
    { x: 22, y: 48 },   // Mauritania
    { x: 32, y: 32 },   // Morocco
    { x: 55, y: 22 },   // Algeria north
    { x: 70, y: 18 },   // Tunis
  ];

  // Inside filling nodes to simulate deep neural network density
  const innerNodes = [
    { x: 55, y: 35 },   // Sahara West
    { x: 75, y: 35 },   // Sahara Central
    { x: 95, y: 35 },   // Egypt / Sudan West
    { x: 110, y: 45 },  // Ethiopia
    { x: 45, y: 55 },   // West Africa inner
    { x: 62, y: 52 },   // Nigeria / Niger
    { x: 82, y: 58 },   // Chad / Central Africa
    { x: 100, y: 62 },  // South Sudan / East Africa
    { x: 78, y: 76 },   // Congo Basin
    { x: 92, y: 78 },   // Great Lakes
    { x: 115, y: 74 },  // Kenya / Tanzania
    { x: 86, y: 98 },   // Zambia / Angola border
    { x: 102, y: 96 },  // Zimbabwe / Malawi
    { x: 90, y: 118 },  // Botswana / Kalahari
    { x: 96, y: 132 },  // Johannesburg
  ];

  const allNodes = [...borderNodes, ...innerNodes];

  // Calculate links between nodes that are physically close to each other
  const links: { source: number; target: number }[] = [];
  const maxDistance = 35; // connection threshold

  for (let i = 0; i < allNodes.length; i++) {
    for (let j = i + 1; j < allNodes.length; j++) {
      const dx = allNodes[i].x - allNodes[j].x;
      const dy = allNodes[i].y - allNodes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < maxDistance) {
        links.push({ source: i, target: j });
      }
    }
  }

  return (
    <svg 
      viewBox="0 0 170 170" 
      className={`w-full h-full text-african-gold ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="map-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8A317" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FAF8F3" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F47C20" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#E8A317" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#138A8A" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Underlay glow */}
      <circle cx="85" cy="85" r="75" fill="url(#map-glow)" />

      {/* Connecting Network Lines */}
      <g stroke="url(#line-grad)" strokeWidth="0.6">
        {links.map((link, idx) => (
          <line 
            key={idx}
            x1={allNodes[link.source].x}
            y1={allNodes[link.source].y}
            x2={allNodes[link.target].x}
            y2={allNodes[link.target].y}
            className="opacity-40 animate-pulse-slow"
            style={{ animationDelay: `${idx * 50}ms` }}
          />
        ))}
      </g>

      {/* Network Nodes */}
      <g>
        {allNodes.map((node, idx) => {
          const isBorder = idx < borderNodes.length;
          return (
            <circle 
              key={idx}
              cx={node.x}
              cy={node.y}
              r={isBorder ? 1.5 : 1}
              fill={isBorder ? "#F47C20" : "#138A8A"}
              className="transition-transform duration-300 hover:scale-150 cursor-pointer"
            >
              <title>{isBorder ? 'Border Gateway' : 'Inner Node'}</title>
            </circle>
          );
        })}
      </g>

      {/* Flowing data packet indicators */}
      <g fill="#F47C20">
        <circle cx="80" cy="15" r="2" className="animate-ping" style={{ animationDuration: '3s' }} />
        <circle cx="145" cy="55" r="2" className="animate-ping" style={{ animationDuration: '4s' }} />
        <circle cx="92" cy="148" r="2" className="animate-ping" style={{ animationDuration: '2.5s' }} />
      </g>
    </svg>
  );
};
