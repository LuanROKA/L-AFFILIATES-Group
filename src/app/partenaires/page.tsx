import Link from "next/link";
import PartnerForm from "@/components/PartnerForm"; // Vérifiez que ce chemin est bon chez vous
import BrandLogo from "@/components/BrandLogo"; // On importe notre super logo vectoriel

export default function PartenairesPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-black selection:text-white">
      
      {/* --- NAVIGATION SIMPLIFIÉE --- */}
      <nav className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white/90 backdrop-blur z-50">
        
        {/* 1. LE LOGO (CLIQUABLE VERS L'ACCUEIL) */}
        <Link href="/" className="hover:opacity-80 transition-opacity">
          {/* On utilise BrandLogo avec les bonnes dimensions */}
          <div className="w-[140px] md:w-[180px] shrink-0 cursor-pointer">
            <BrandLogo className="w-full h-auto text-black" />
          </div>
        </Link>

        {/* 2. LE BOUTON RETOUR */}
        <Link 
          href="/" 
          className="text-sm font-medium text-gray-500 hover:text-black transition flex items-center gap-2"
        >
          &larr; Retour à l'accueil
        </Link>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="bg-black text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-xs font-bold tracking-wider uppercase mb-6 text-gray-300">
            Programme Experts
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Valorisez votre expertise. <br />
            Partagez le succès.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Rejoignez <span className="text-white font-semibold">Partenaires à la Performance</span>. 
            Le collectif d'élite (Tech, Growth, Sales) qui intervient sur nos participations 
            en échange d'une rémunération attractive.
          </p>
        </div>
      </section>

      {/* --- FORMULAIRE --- */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
           {/* Assurez-vous que ce composant existe bien dans votre projet */}
           <PartnerForm />
        </div>
      </section>

    </main>
  );
}