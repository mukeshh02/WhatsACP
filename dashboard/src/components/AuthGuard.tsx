"use client";

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { supabase } from '@/utils/supabase/client';
import { Loader2 } from 'lucide-react';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = async () => {
      // Check Supabase session exclusively (no local storage mock bypass)
      let session = null;
      try {
        const { data } = await supabase.auth.getSession();
        session = data?.session;
      } catch (err) {
        console.error("Auth session check failed:", err);
      }

      if (!session) {
        // Redirect to login if unauthenticated and trying to access private dashboard pages
        if (pathname !== '/' && pathname !== '/login' && pathname !== '/register') {
          router.replace('/login');
        } else {
          setLoading(false);
        }
      } else {
        // Authenticated! Redirect to overview dashboard if trying to access landing page, login, or register
        if (pathname === '/' || pathname === '/login' || pathname === '/register') {
          router.replace('/overview');
        } else {
          setLoading(false);
        }
      }
    };

    checkAuth();
  }, [pathname, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center text-slate-200">
        <Loader2 className="w-10 h-10 animate-spin text-cyan-500 mb-4" />
        <p className="font-semibold text-sm">Verifying Session...</p>
      </div>
    );
  }

  return <>{children}</>;
}
