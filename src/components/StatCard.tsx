import React from 'react';

interface StatCardProps {
  number: string;
  label: string;
  subtext?: string;
}

export default function StatCard({ number, label, subtext }: StatCardProps) {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 w-full h-full">
      
      {/* SOLUTION TECHNIQUE :
        1. text-2xl : On démarre avec une police plus petite (24px) qui rentre PARTOUT.
        2. sm:text-3xl : Dès que l'écran est un peu plus grand, on passe à 30px.
        3. xl:text-4xl : Uniquement sur les très grands écrans, on passe à 36px.
        4. break-words : Sécurité ultime, si jamais ça doit couper, ça coupera proprement sans sortir du cadre.
      */}
      <span className="text-2xl sm:text-3xl xl:text-4xl font-bold text-black mb-2 text-center break-words w-full">
        {number}
      </span>
      
      <span className="text-sm sm:text-base font-semibold text-gray-900 text-center leading-tight px-1">
        {label}
      </span>
      
      {subtext && (
        <span className="text-xs text-gray-500 mt-2 text-center px-1">
          {subtext}
        </span>
      )}
    </div>
  );
}