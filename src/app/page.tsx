"use client";
import StatCard from '@/components/StatCard';
import BrandLogo from '@/components/BrandLogo';
import Image from "next/image";
import Link from "next/link";
import SocietyForm from "@/components/SocietyForm";
import AssociateForm from "@/components/AssociateForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-foreground font-sans selection:bg-black selection:text-white">
      {/* --- HEADER --- */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-[1100px] mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            {/* Logo "L" supprimé ici */}
       {/* On donne une largeur confortable pour que le logo soit lisible */}
<div className="w-[140px] md:w-[180px] shrink-0">
  <BrandLogo className="w-full h-auto text-black" />
</div>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="#apropos" className="hover:text-black transition-colors">À propos</Link>
            <Link href="#equipe" className="hover:text-black transition-colors">Équipe</Link>
            <Link href="#societes" className="hover:text-black transition-colors">Portefeuille</Link>
            <Link href="#contact" className="px-5 py-2.5 rounded-full border border-black text-black font-semibold hover:bg-black hover:text-white transition-all duration-300">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* --- HERO --- */}
      <section className="py-20 md:py-24 border-b border-gray-100">
        <div className="max-w-[1100px] mx-auto px-4 grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          <div>
            <span className="text-xs font-bold tracking-[0.15em] text-gray-500 uppercase mb-4 block">Groupe d'actionnaires</span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold leading-[1.1] text-black mb-6">
              Structurer, accompagner et investir dans l'ambition.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl">
              L&A Group identifie des sociétés à fort potentiel pour créer de la valeur durable avec nos associés investisseurs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#inscription" className="px-7 py-3.5 bg-black text-white rounded-lg font-semibold shadow-lg hover:-translate-y-1 transition-transform">
                Inscrire ma société
              </Link>
              <Link href="#associes" className="px-7 py-3.5 border border-gray-300 text-black rounded-lg font-semibold hover:border-black hover:bg-gray-50 transition-colors">
                Devenir associé
              </Link>
            </div>
          </div>
         {/* SECTION CHIFFRES CLÉS (Nouveau Composant) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
          <StatCard 
            number="5-10" 
            label="Dossiers par an" 
            subtext="Sélectionnés avec rigueur"
          />
          <StatCard 
            number="15%" 
            label="Rentabilité cible" 
            subtext="TRI annuel visé"
          />
          <StatCard 
            number="1-10 ans" 
            label="Horizon" 
            subtext="Terme"
          />
          </div>
          </div>
      </section>

      {/* --- A PROPOS --- */}
      <section id="apropos" className="py-20">
        <div className="max-w-[1100px] mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold mb-3 text-black">À propos</h2>
          <p className="text-gray-500 text-lg mb-12">Un groupe, une gouvernance, une exigence.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl border border-gray-200 bg-white">
                <h3 className="font-serif text-xl font-bold mb-3">Holding & Gouvernance</h3>
                <p className="text-gray-600 text-sm">Actionnaire de référence : stratégie long terme et accompagnement opérationnel.</p>
            </div>
            <div className="p-8 rounded-xl border border-gray-200 bg-white">
                <h3 className="font-serif text-xl font-bold mb-3">Investisseurs Associés</h3>
                <p className="text-gray-600 text-sm">Co-investissement dans les sociétés du portefeuille selon votre thèse.</p>
            </div>
            <div className="p-8 rounded-xl border border-gray-200 bg-white">
                <h3 className="font-serif text-xl font-bold mb-3">Accélération</h3>
                <p className="text-gray-600 text-sm">Structuration de la croissance et accès à des synergies groupe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- EQUIPE --- */}
      <section id="equipe" className="py-20 border-t border-gray-100">
        <div className="max-w-[1100px] mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold mb-3 text-black">Notre équipe</h2>
          <p className="text-gray-500 text-lg mb-12">Ceux qui font grandir la vision.</p>
          
          <div className="max-w-sm border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
             <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-lg bg-gray-100">
               <Image
                 src="/team/luan-roka.jpg"
                 alt="Luan Roka PDG"
                 fill
                 className="object-cover"
               />
             </div>
             <h3 className="font-serif text-xl font-bold mb-2 text-black">ROKA Luan — PDG</h3>
             <p className="text-gray-600 text-sm leading-relaxed">
               Fondateur et dirigeant de L&A Group. Entrepreneur ambitieux pilotant la vision et la stratégie d'investissement du groupe.
             </p>
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO --- */}
      <section id="societes" className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-[1100px] mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold mb-3 text-black">Portefeuille</h2>
          <p className="text-gray-500 text-lg mb-12">Découvrez les participations actives.</p>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-100">
                <h3 className="font-serif text-3xl font-bold mb-4 text-black">NUVIO</h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Agent assistant IA autonome pour la gestion et l’automatisation des tâches d’entreprise. 
                </p>
                <div className="flex gap-3">
                  <span className="px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold rounded-full border border-blue-100">SaaS</span>
                  <span className="px-4 py-1.5 bg-purple-50 text-purple-700 text-xs font-bold rounded-full border border-purple-100">IA</span>
                </div>
              </div>
              
              <div className="bg-gray-900 relative min-h-[350px] group overflow-hidden">
                <Image 
                   src="/nuvio/dashboard.png" 
                   alt="Nuvio Dashboard"
                   fill
                   className="object-cover object-top opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FORMULAIRE INSCRIPTION SOCIETE --- */}
      <section id="inscription" className="py-20">
        <div className="max-w-[1100px] mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold mb-3 text-black">Inscrire sa société</h2>
          <p className="text-gray-500 text-lg mb-8">Présentez votre entreprise pour une étude de candidature.</p>
          <SocietyForm />
        </div>
      </section>

      {/* --- FORMULAIRE ASSOCIES --- */}
      <section id="associes" className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-[1100px] mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-3xl font-bold mb-3 text-black">Devenir associé</h2>
            <p className="text-gray-500 text-lg mb-6">Rejoignez le tour de table et co-investissez.</p>
            <p className="text-gray-600 leading-relaxed mb-6">
              En rejoignant L&A Group, vous accédez à un flux qualifié d'opportunités d'investissement et bénéficiez de notre structure de gestion.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <AssociateForm />
          </div>
        </div>
      </section>

      {/* --- PARTENAIRES TEASER --- */}
      <section className="py-20 bg-black text-white text-center">
         <div className="max-w-2xl mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold mb-6">Experts & Talents</h2>
            <p className="text-gray-300 text-lg mb-8">
              Vous êtes expert technique, growth marketer ou closer ? Rejoignez notre collectif 
              <strong> Partenaires à la Performance</strong>.
            </p>
            <Link href="/partenaires" className="inline-block px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-100 transition">
               Découvrir le programme &rarr;
            </Link>
         </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="py-20">
        <div className="max-w-[1100px] mx-auto px-4">
           <h2 className="font-serif text-3xl font-bold mb-12">Contact</h2>
           <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-200 rounded-xl">
                 <strong className="block mb-2 text-black">Email</strong>
                 <a href="mailto:contact.l.et.associes.group@gmail.com" className="text-gray-600 hover:text-black">contact.l.et.associes.group@gmail.com</a>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                 <strong className="block mb-2 text-black">Téléphone</strong>
                 <p className="text-gray-600">07 85 64 47 48</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl bg-white hover:border-black transition-colors">
                 <strong className="block mb-2 text-black">Social</strong>
                 <a 
                   href="https://www.instagram.com/l_associes_group/" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-gray-600 hover:text-black flex items-center gap-2"
                 >
                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                   Suivre sur Instagram
                 </a>
              </div>
           </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-10 text-center text-sm text-gray-500 border-t border-gray-100 mt-20">
  <p className="mb-4">&copy; {new Date().getFullYear()} L&A Group. Tous droits réservés.</p>
  <div className="flex justify-center gap-6">
    <a href="/mentions" className="hover:text-black transition">Mentions Légales</a>
    <a href="/confidentialite" className="hover:text-black transition">Confidentialité</a>
  </div>
</footer>
    </main>
  );
}