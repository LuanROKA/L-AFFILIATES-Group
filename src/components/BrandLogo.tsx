import React from 'react';

export default function BrandLogo({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      // Zone de travail définie pour que tout soit bien centré
      viewBox="0 0 300 220" 
      fill="currentColor"
      // On s'assure que le ratio est respecté sans déformation
      preserveAspectRatio="xMidYMid meet"
      className={className}
      // 👇 MISE À JOUR ICI : Nom accessible
      aria-label="L&A Capital Logo"
    >
      {/* 👇 MISE À JOUR ICI : Titre pour le référencement */}
      <title>L&amp;A CAPITAL Logo</title>
      
      {/* --- PARTIE HAUTE : L&A (Inchangé) --- */}
      <text x="10" y="140" fontSize="160" fontFamily="Times New Roman, serif" fontWeight="bold">L</text>
      <text x="105" y="140" fontSize="160" fontFamily="Times New Roman, serif" fontWeight="bold">&amp;</text>
      <text x="200" y="140" fontSize="160" fontFamily="Times New Roman, serif" fontWeight="bold">A</text>
      
      {/* --- PARTIE BASSE : CAPITAL (Modification ici) --- */}
      {/* J'ai remplacé GROUP par CAPITAL en gardant le même style */}
      <text 
        x="150" 
        y="185" 
        fontSize="40" 
        fontFamily="Times New Roman, serif" 
        fontWeight="bold" 
        textAnchor="middle" 
        letterSpacing="6"
      >
        CAPITAL
      </text>
      
      {/* La ligne de soulignement (Inchangée) */}
      <rect x="50" y="200" width="200" height="6" />
      
    </svg>
  );
}
