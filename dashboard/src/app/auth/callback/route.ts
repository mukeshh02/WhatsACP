import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  // if "next" is in param, use it as the redirect destination
  const next = searchParams.get('next') ?? '/overview';

  if (code) {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    
    // Exchange OAuth authorization code for a session
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
    console.error("OAuth code exchange error:", error);
  }

  // return the user to login with an error message
  return NextResponse.redirect(`${origin}/login?error=Could not authenticate user`);
}
