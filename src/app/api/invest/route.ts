import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

// On revient aux variables sécurisées
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nom, email, montant, message, telephone } = body;

    // Sauvegarde Supabase
    const { error } = await supabase
      .from('investisseurs')
      .insert([
        { 
          nom, 
          email, 
          montant_intention: montant || 0,
          message: message,
          // Decommentez si vous avez ajouté la colonne téléphone dans Supabase
          // telephone: telephone 
        }
      ]);

    if (error) throw new Error(error.message);

    // Notif Slack
    try {
      await fetch(process.env.SLACK_WEBHOOK_URL!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `🚀 *Nouveau Lead Investisseur !*\n\n👤 *Nom:* ${nom}\n📧 *Email:* ${email}\n📞 *Tél:* ${telephone}\n💰 *Intention:* ${montant} €`
        }),
      });
    } catch (slackErr) {
      console.error('Erreur Slack:', slackErr);
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}