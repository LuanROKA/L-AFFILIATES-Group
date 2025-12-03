import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // BOUTON MAINTENANCE : Mettre à true pour activer, false pour désactiver
  const MAINTENANCE_MODE = true

  // Si la maintenance est désactivée, on laisse passer la requête immédiatement
  if (!MAINTENANCE_MODE) {
    return NextResponse.next();
  }

  // --- MODE MAINTENANCE ACTIVÉ ---

  const { pathname } = request.nextUrl;

  // 1. Autoriser l'accès à la page de maintenance elle-même (évite une boucle infinie)
  if (pathname.startsWith('/maintenance')) {
    return NextResponse.next();
  }

  // 2. Autoriser l'accès aux fichiers techniques nécessaires (API, internes Next.js, assets statiques)
  // Cela garantit que les images, styles et scripts chargent toujours sur la page de maintenance
  if (
    pathname.startsWith('/api') ||     // Routes API
    pathname.startsWith('/_next') ||   // Fichiers internes Next.js
    pathname.startsWith('/static') ||  // Dossier static
    pathname.includes('.')             // Fichiers avec extensions (ex: logo.png, style.css)
  ) {
    return NextResponse.next();
  }

  // 3. Rediriger tout le reste du trafic vers la page de maintenance
  const maintenanceUrl = new URL('/maintenance', request.url);
  return NextResponse.redirect(maintenanceUrl);
}

export const config = {
  // Appliquer ce middleware à tous les chemins
  matcher: '/:path*',
};