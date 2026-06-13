"use client";

import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import { 
  Home, 
  MessageSquare, 
  LayoutDashboard, 
  Settings, 
  Smartphone, 
  Users, 
  LogOut, 
  ChevronRight,
  User
} from 'lucide-react';
import Link from 'next/link';
import AuthGuard from './AuthGuard';
import { supabase } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Public paths that do not show sidebar or header
  const isPublicPage = pathname === '/' || pathname === '/login' || pathname === '/register';

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
    } catch (err) {}

    localStorage.removeItem('whatsacp_session');
    toast.success("Logged out successfully");
    router.replace('/login');
  };

  if (isPublicPage) {
    return <AuthGuard>{children}</AuthGuard>;
  }

  // Resolve active page name for breadcrumbs
  const getPageName = () => {
    switch (pathname) {
      case '/overview': return 'dashboard';
      case '/whatsapp': return 'whatsapp-connect';
      case '/groups': return 'group-manager';
      case '/chat': return 'inbox';
      default: return 'dashboard';
    }
  };

  return (
    <AuthGuard>
      <div className="min-h-screen flex w-full bg-background text-foreground font-sans overflow-hidden transition-colors duration-200">
        
        {/* NARROW ICON-ONLY SIDEBAR (Matches WhatsACP reference) */}
        <aside className="w-20 bg-[#0c101b] flex flex-col items-center fixed left-0 top-0 h-full z-20 shadow-xl py-6 shrink-0 border-r border-slate-900">
          
          {/* Logo: Round green circle with white W */}
          <div className="w-10 h-10 rounded-full bg-[#10b981] flex items-center justify-center text-white font-black text-xl shadow-lg shadow-emerald-500/20 mb-8 cursor-pointer select-none">
            w
          </div>

          {/* Navigation stack */}
          <nav className="flex-1 flex flex-col items-center gap-5 w-full">
            
            {/* Overview / Dashboard */}
            <div className="relative group">
              <Link 
                href="/overview" 
                className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
                  pathname === '/overview' 
                    ? 'bg-white/10 text-white' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <LayoutDashboard className="w-5 h-5" />
              </Link>
              <span className="absolute left-[70px] top-3 scale-0 group-hover:scale-100 transition-all rounded-md bg-slate-800 text-white text-xs font-bold px-2 py-1 z-30 shadow-md pointer-events-none select-none">
                Overview
              </span>
            </div>

            {/* Inbox / Live Chat */}
            <div className="relative group">
              <Link 
                href="/chat" 
                className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
                  pathname === '/chat' 
                    ? 'bg-[#10b981]/15 text-[#10b981] border-l-4 border-[#10b981]' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <MessageSquare className="w-5 h-5" />
              </Link>
              <span className="absolute left-[70px] top-3 scale-0 group-hover:scale-100 transition-all rounded-md bg-slate-800 text-white text-xs font-bold px-2 py-1 z-30 shadow-md pointer-events-none select-none">
                Inbox
              </span>
            </div>

            {/* WhatsApp Setup */}
            <div className="relative group">
              <Link 
                href="/whatsapp" 
                className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
                  pathname === '/whatsapp' 
                    ? 'bg-white/10 text-white' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Smartphone className="w-5 h-5" />
              </Link>
              <span className="absolute left-[70px] top-3 scale-0 group-hover:scale-100 transition-all rounded-md bg-slate-800 text-white text-xs font-bold px-2 py-1 z-30 shadow-md pointer-events-none select-none">
                WhatsApp Setup
              </span>
            </div>

            {/* Group Manager */}
            <div className="relative group">
              <Link 
                href="/groups" 
                className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
                  pathname === '/groups' 
                    ? 'bg-white/10 text-white' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Users className="w-5 h-5" />
              </Link>
              <span className="absolute left-[70px] top-3 scale-0 group-hover:scale-100 transition-all rounded-md bg-slate-800 text-white text-xs font-bold px-2 py-1 z-30 shadow-md pointer-events-none select-none">
                Group Manager
              </span>
            </div>

            {/* Sign Out (at the bottom) */}
            <div className="relative group mt-auto">
              <button 
                onClick={handleLogout}
                className="w-11 h-11 rounded-xl flex items-center justify-center text-slate-400 hover:bg-rose-500/10 hover:text-rose-400 transition-all cursor-pointer"
              >
                <LogOut className="w-5 h-5" />
              </button>
              <span className="absolute left-[70px] top-3 scale-0 group-hover:scale-100 transition-all rounded-md bg-slate-800 text-white text-xs font-bold px-2 py-1 z-30 shadow-md pointer-events-none select-none">
                Sign Out
              </span>
            </div>

          </nav>

        </aside>

        {/* MAIN BODY AREA */}
        <main className="flex-1 ml-20 flex flex-col h-screen overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
          
          {/* TOP BREADCRUMB BAR (Matches inbox_light.png top layout) */}
          <header className="h-14 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 sticky top-0 z-10 flex items-center justify-between px-6 shadow-sm shrink-0 transition-colors duration-200">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 font-semibold text-xs">
              <Home className="w-4 h-4 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer transition-colors" />
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer transition-colors">{getPageName()}</span>
            </div>
            
            {/* Profile Initials & Settings & Dark Mode Toggle */}
            <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
              
              {/* MuiIconButton-style Dark/Light Theme Button */}
              <button 
                onClick={toggleTheme}
                className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall css-1hbkoj9"
                tabIndex={0}
                type="button" 
                aria-label={theme === 'dark' ? "Switch to Light" : "Switch to Dark"}
              >
                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vt8pii" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                  {theme === 'dark' ? (
                    // Sun icon
                    <path fill="currentColor" d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-12.37c-.39-.39-1.02-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.38.39-1.02 0-1.41zm-12.37 12.37c-.39-.39-1.02-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.38.39-1.02 0-1.41z"/>
                  ) : (
                    // Moon icon (requested Mui-style Moon icon path)
                    <path fill="currentColor" d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z" />
                  )}
                </svg>
                <span className="MuiTouchRipple-root css-4mb1j7"></span>
              </button>

              <button className="hover:text-slate-800 dark:hover:text-slate-100 p-1 hover:bg-slate-100 dark:hover:bg-slate-850 rounded-full transition-all cursor-pointer"><Settings className="w-4.5 h-4.5" /></button>
              <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm select-none">
                Pro
              </span>
              <div className="w-8 h-8 rounded-full bg-slate-800 dark:bg-slate-700 text-white flex items-center justify-center font-bold text-xs shadow-inner select-none cursor-pointer">
                AC
              </div>
            </div>
          </header>
          
          {/* Main child viewport */}
          <div className={`flex-1 flex flex-col overflow-hidden ${pathname === '/chat' ? 'p-0' : 'p-8 overflow-y-auto'}`}>
             {children}
          </div>
        </main>
      </div>
    </AuthGuard>
  );
}
