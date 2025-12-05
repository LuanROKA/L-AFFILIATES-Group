import React from 'react';

export default function BrandLogo({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      // J'élargis encore la zone pour "L-AFFILIATES" qui est long
      viewBox="0 0 500 120" 
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      aria-label="L-AFFILIATES GROUP Logo"
    >
      <title>L-AFFILIATES GROUP Logo</title>
      
      {/* LIGNE 1 : L-PARTNERS */}
      <text 
        x="250" 
        y="70" 
        fontSize="58" 
        fontFamily="Times New Roman, serif" 
        fontWeight="bold" 
        textAnchor="middle" 
        letterSpacing="2"
      >
        L-AFFILIATES
      </text>
      
      {/* LIGNE 2 : GROUP (Espacé et centré dessous) */}
      <text 
        x="250" 
        y="105" 
        fontSize="20" 
        fontFamily="Arial, sans-serif" 
        fontWeight="normal" 
        textAnchor="middle" 
        letterSpacing="10"
      >
        GROUP
      </text>
      
      {/* Ligne de soulignement */}
      <rect x="150" y="115" width="200" height="3" />
    </svg>
  );
}
