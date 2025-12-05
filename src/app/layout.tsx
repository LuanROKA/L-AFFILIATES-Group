import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // On importe le module optimisé
import "./globals.css";

// 1. Configuration de la police de texte (Sans Serif)
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", // On crée une variable CSS
  display: "swap",
});

// 2. Configuration de la police de titre (Serif / Luxe)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "L-AFFILIATES GROUP | Investissement & Private Equity",
  description: "Structurez, accompagnez et investissez dans l'ambition.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white text-black`}>
        {children}
      </body>
    </html>
  );
}
