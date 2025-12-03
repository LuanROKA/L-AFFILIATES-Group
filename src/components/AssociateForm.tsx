"use client";
import { useState } from 'react';

export default function AssociateForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      nom: e.target.nom.value,
      email: e.target.email.value,
      telephone: e.target.telephone?.value || "",
      // Si c'est le select, on prend sa valeur, sinon 0
      montant: e.target.montant.value || 0, 
      message: e.target.message?.value || ""
    };

    try {
      const response = await fetch('/api/invest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("✅ Dossier bien reçu ! Nous revenons vers vous sous 24h.");
        e.target.reset(); // Vide le formulaire
      } else {
        alert("❌ Une erreur est survenue.");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Erreur de connexion.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 gap-x-8">
      
      {/* CHAMP NOM */}
      <div className="grid md:grid-cols-2 gap-4 col-span-2">
        <div className="col-span-2 sm:col-span-1">
          <label className="block text-sm font-medium mb-1">Nom complet <span className="text-red-600">*</span></label>
          <input name="nom" required className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Votre nom" />
        </div>

        {/* CHAMP EMAIL */}
        <div className="col-span-2 sm:col-span-1">
          <label className="block text-sm font-medium mb-1">Email <span className="text-red-600">*</span></label>
          <input name="email" type="email" required className="w-full p-3 border border-gray-300 rounded-lg" placeholder="exemple@mail.com" />
        </div>
      </div>

      {/* CHAMP TÉLÉPHONE */}
      <div className="col-span-2">
        <label className="block text-sm font-medium mb-1">Téléphone</label>
        <input name="telephone" type="tel" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="06 12 34 56 78" />
      </div>

      {/* CHAMP TICKET (MONTANT) */}
      <div className="col-span-2">
        <label className="block text-sm font-medium mb-1">Ticket envisagé</label>
        <select name="montant" className="w-full p-3 border border-gray-300 rounded-lg bg-white">
          <option value="10000">10 - 25 k€</option>
          <option value="25000">25 - 50 k€</option>
          <option value="50000">50 - 100 k€</option>
          <option value="100000">+ 100 k€</option>
        </select>
      </div>

      {/* CHAMP MESSAGE */}
      <div className="col-span-2">
        <label className="block text-sm font-medium mb-1">Thèse & Préférences</label>
        <textarea name="message" rows={2} className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Secteurs, géo, horizon..."></textarea>
      </div>


      {/* --- ZONE RGPD --- */}
      <div className="col-span-2 space-y-4 my-4">
        
        {/* Case 1 : CGU (Obligatoire) */}
        <div className="flex items-start gap-3">
          <input 
            type="checkbox" 
            id="cgu" 
            required // Obligatoire pour valider le form
            className="mt-1 w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
          />
          <label htmlFor="cgu" className="text-sm text-gray-600">
            J'ai lu et j'accepte les <a href="/mentions" className="underline text-black hover:text-gray-600">Conditions Générales</a> et la <a href="/confidentialite" className="underline text-black hover:text-gray-600">Politique de Confidentialité</a>. <span className="text-red-600">*</span>
          </label>
        </div>

        {/* Case 2 : Newsletter (Facultative - Opt-in actif) */}
        <div className="flex items-start gap-3">
          <input 
            type="checkbox" 
            id="newsletter" 
            name="newsletter" // On récupérera cette info
            className="mt-1 w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
          />
          <label htmlFor="newsletter" className="text-sm text-gray-600">
            J'accepte de recevoir la newsletter et les opportunités d'investissement de L&A Group.
          </label>
        </div>
      </div>

      {/* BOUTON D'ENVOI */}
      <div className="col-span-2">
        <button 
          type="submit" 
          disabled={loading} 
          className="w-full py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
        >
          {loading ? 'Envoi en cours...' : 'Envoyer ma demande'}
        </button>
      </div>
    </form>
  );
}
