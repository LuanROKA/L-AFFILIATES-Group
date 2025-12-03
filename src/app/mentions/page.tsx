import React from 'react';
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans selection:bg-black selection:text-white">
      
      {/* --- HEADER DE NAVIGATION (Logo + Retour) --- */}
      <nav className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white/90 backdrop-blur z-50">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <div className="w-[140px] md:w-[180px] shrink-0 cursor-pointer">
            <BrandLogo className="w-full h-auto text-black" />
          </div>
        </Link>

        <Link 
          href="/" 
          className="text-sm font-medium text-gray-500 hover:text-black transition flex items-center gap-2"
        >
          &larr; Retour à l'accueil
        </Link>
      </nav>

      {/* --- CONTENU LÉGAL --- */}
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-serif font-bold mb-8">Mentions Légales</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Éditeur du site</h2>
          <p className="mb-2">Le présent site est la propriété de l'entreprise <strong>L&A Group</strong>.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Forme juridique :</strong> [SAS / SARL...] au capital de [MONTANT] €</li>
            <li><strong>Siège social :</strong> [VOTRE ADRESSE COMPLÈTE]</li>
            <li><strong>Immatriculation :</strong> RCS de [VILLE] sous le numéro [NUMÉRO SIREN]</li>
            <li><strong>Numéro de TVA intracommunautaire :</strong> [VOTRE NUMÉRO DE TVA]</li>
            <li><strong>Directeur de la publication :</strong> ROKA Luan</li>
            <li><strong>Contact :</strong> contact.l.et.associes.group@gmail.com</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Hébergement du site</h2>
          <p className="mb-2">Le site est hébergé par :</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Nom de l'hébergeur :</strong> Vercel Inc.</li>
            <li><strong>Adresse :</strong> 340 S Lemon Ave #4133 Walnut, CA 91789, USA</li>
            <li><strong>Site web :</strong> https://vercel.com</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Propriété intellectuelle</h2>
          <p>L’ensemble du contenu de ce site (images, textes, code) est protégé par le droit d’auteur. Toute reproduction sans autorisation est interdite.</p>
        </section>
      </div>
    </main>
  );
}
