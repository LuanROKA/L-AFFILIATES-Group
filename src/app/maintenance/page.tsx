import React from 'react';
import BrandLogo from "@/components/BrandLogo";

export default function MaintenancePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center selection:bg-black selection:text-white">
      
      {/* Logo L&A Capital */}
      <div className="w-[180px] md:w-[220px] mb-12">
        <BrandLogo className="w-full h-auto text-black" />
      </div>

      {/* Message */}
      <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-black">
        Site en maintenance
      </h1>
      
      <p className="text-gray-500 text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
        Nous effectuons actuellement une mise à jour importante pour améliorer votre expérience.
        <br />
        <span className="font-semibold text-black">L-PARTNERS GROUP</span> sera de retour très bientôt.
      </p>

      {/* Petite ligne esthétique */}
      <div className="mt-12 w-16 h-1 bg-black mx-auto"></div>
      
    </main>
  );
} 