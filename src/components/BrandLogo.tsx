import React from 'react';

export default function BrandLogo({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      // J'élargis la zone de travail (viewBox) pour accueillir le nom long
      viewBox="0 0 500 120" 
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      aria-label="L-PARTNERS GROUP Logo"
    >
      <title>L-PARTNERS GROUP Logo</title>
      
      {/* LIGNE 1 : L-PARTNERS (Serif, Majestueux) */}
      <text 
        x="250" 
        y="70" 
        fontSize="62" 
        fontFamily="Times New Roman, serif" 
        fontWeight="bold" 
        textAnchor="middle" 
        letterSpacing="2"
      >
        L-PARTNERS
      </text>
      
      {/* LIGNE 2 : GROUP (Plus petit, espacé, centré) */}
      <text 
        x="250" 
        y="105" 
        fontSize="24" 
        fontFamily="Arial, sans-serif" 
        fontWeight="normal" 
        textAnchor="middle" 
        letterSpacing="12"
      >
        GROUP
      </text>
      
      {/* Ligne de soulignement optionnelle */}
      <rect x="150" y="115" width="200" height="3" />
    </svg>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> e413b0cbc281b3e0712773b2b936c82f72875c35
