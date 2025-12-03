import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // INTERRUPTEUR : Mettre "true" pour activer la maintenance
  const MAINTENANCE_MODE = true;

  // Si la maintenance est éteinte, on laisse passer tout le monde
  if (!MAINTENANCE_MODE) {
    return NextResponse.next();
  }

  // --- LOGIQUE DE MAINTENANCE ---

  const { pathname } = request.nextUrl;

  // 1. On laisse passer la page de maintenance elle-même (sinon boucle infinie)
  if (pathname.startsWith('/maintenance')) {
    return NextResponse.next();
  }

  // 2. On laisse passer les fichiers techniques (API, Système Next.js, Images, CSS)
  if (
    pathname.startsWith('/api') ||     // Routes API
    pathname.startsWith('/_next') ||   // Fichiers internes Next.js
    pathname.startsWith('/static') ||  // Dossier static
    pathname.includes('.')             // Fichiers avec extension (logo.png, style.css)
  ) {
    return NextResponse.next();
  }

  // 3. Pour tout le reste, on redirige vers la page maintenance
  const maintenanceUrl = new URL('/maintenance', request.url);
  return NextResponse.redirect(maintenanceUrl);
}

export const config = {
  matcher: '/:path*',
};