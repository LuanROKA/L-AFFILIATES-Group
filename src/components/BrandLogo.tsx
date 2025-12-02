import React from 'react';

export default function BrandLogo({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      // Je définis une zone de travail carrée/rectangulaire propre
      viewBox="0 0 300 220" 
      fill="currentColor"
      // On s'assure que le ratio est respecté
      preserveAspectRatio="xMidYMid meet"
      className={className}
      aria-label="L&A Group Logo"
    >
      {/* RECONSTRUCTION DU LOGO EN VECTEURS PROPRES 
         J'utilise la police Serif (Times/Playfair) pour coller à votre identité
      */}
      
      {/* Le grand L */}
      <text x="10" y="140" fontSize="160" fontFamily="Times New Roman, serif" fontWeight="bold">L</text>
      
      {/* Le & (esperluette) au milieu */}
      <text x="105" y="140" fontSize="160" fontFamily="Times New Roman, serif" fontWeight="bold">&amp;</text>
      
      {/* Le grand A */}
      <text x="200" y="140" fontSize="160" fontFamily="Times New Roman, serif" fontWeight="bold">A</text>
      
      {/* Le mot GROUP en dessous, centré */}
      <text x="150" y="185" fontSize="40" fontFamily="Times New Roman, serif" fontWeight="bold" textAnchor="middle" letterSpacing="6">
        GROUP
      </text>
      
      {/* La ligne de soulignement */}
      <rect x="50" y="200" width="200" height="6" />
      
    </svg>
  );
}