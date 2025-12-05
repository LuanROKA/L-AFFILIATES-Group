import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Mettre à false pour désactiver la maintenance, true pour activer
  const MAINTENANCE_MODE = false; 

  if (!MAINTENANCE_MODE) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/maintenance') || 
      pathname.startsWith('/api') || 
      pathname.startsWith('/_next') || 
      pathname.startsWith('/static') || 
      pathname.includes('.')) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL('/maintenance', request.url));
}

export const config = {
  matcher: '/:path*',
};