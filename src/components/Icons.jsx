export const GithubIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

export const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const BrandLogo = ({ className = "w-8 h-8" }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="blade-light" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ecfccb" />
        <stop offset="100%" stopColor="#d9f99d" />
      </linearGradient>
      <linearGradient id="blade-med" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d9f99d" />
        <stop offset="100%" stopColor="#bef264" />
      </linearGradient>
      <linearGradient id="blade-dark" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#bef264" />
        <stop offset="100%" stopColor="#a3e635" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* 4 Spinning Blade Clusters */}
    {[0, 90, 180, 270].map((angle, i) => (
      <g key={i} transform={`rotate(${angle}, 50, 50)`}>
        {/* Curved Cyan Swoosh */}
        <path 
          d="M 50,15 A 35,35 0 0,1 85,50" 
          fill="none" 
          stroke="#06b6d4" 
          strokeWidth="2.5" 
          strokeLinecap="round"
          filter="url(#glow)"
        />
        {/* 3 Blade Segments */}
        <path d="M 52,10 L 68,0 L 78,15 L 60,25 Z" fill="url(#blade-light)" />
        <path d="M 68,-2 L 85,-10 L 92,8 L 75,18 Z" fill="url(#blade-med)" opacity="0.8" />
        <path d="M 85,-12 L 100,-18 L 105,2 L 88,10 Z" fill="url(#blade-dark)" opacity="0.6" />
      </g>
    ))}
    
    {/* Center Core Circle (Subtle) */}
    <circle cx="50" cy="50" r="22" fill="#022c22" opacity="0.8" />
    <circle cx="50" cy="50" r="22" fill="none" stroke="#06b6d4" strokeWidth="1" opacity="0.5" />
    
    {/* Center 'A' */}
    <text 
      x="50" 
      y="64" 
      fontSize="40" 
      fontWeight="900" 
      fill="#ecfccb" 
      textAnchor="middle" 
      fontFamily="system-ui, sans-serif"
    >
      A
    </text>
  </svg>
);
