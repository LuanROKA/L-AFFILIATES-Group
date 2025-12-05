import React from 'react';
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export default function Confidentialite() {
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
        <h1 className="text-4xl font-serif font-bold mb-8">Politique de Confidentialité</h1>
        <p className="mb-6">Chez <strong>L-AFFILIATES GROUP</strong>, la protection de vos données personnelles est une priorité.</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Données collectées</h2>
          <p>Nous collectons les données suivantes lorsque vous utilisez nos formulaires :</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Identité : Nom, Prénom</li>
            <li>Contact : Email, Téléphone</li>
            <li>Projet : Montant d'investissement, Message</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Finalités du traitement</h2>
          <p>Vos données sont utilisées pour :</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Répondre à vos demandes de contact (Base légale : Consentement).</li>
            <li>Gérer la relation commerciale (Base légale : Exécution du contrat).</li>
            <li>Vous envoyer notre newsletter uniquement si vous y avez consenti via la case dédiée.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Destinataires et Transfert</h2>
          <p>Vos données sont strictement confidentielles et ne sont transmises qu'à nos prestataires techniques (Supabase pour la base de données, Slack pour les notifications internes) en conformité avec le RGPD. Nous ne vendons pas vos données.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Durée de conservation</h2>
          <p>Nous conservons vos données pendant une durée de 3 ans après votre dernier contact pour la prospection, et 5 ans pour les données contractuelles.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Vos droits</h2>
          <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et d'effacement de vos données. Pour exercer ce droit, contactez-nous à : <strong></strong>.</p>
        </section>
      </div>
    </main>
  );
}