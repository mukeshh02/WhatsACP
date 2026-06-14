"use client";

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
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
import { motion, AnimatePresence } from 'framer-motion';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Public paths that do not show sidebar or header
  const isPublicPage = pathname === '/' || pathname === '/login' || pathname === '/register' || pathname === '/features' || pathname === '/pricing' || pathname === '/docs';

  useEffect(() => {
    if (isPublicPage) return;

    const fetchUser = async () => {
      try {
        const { data } = await supabase.auth.getUser();
        if (data?.user) {
          setUser(data.user);
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };
    fetchUser();
  }, [pathname, isPublicPage]);

  const getInitials = () => {
    if (user?.user_metadata?.full_name) {
      const parts = user.user_metadata.full_name.split(' ');
      if (parts.length >= 2) {
        return (parts[0][0] + parts[1][0]).toUpperCase();
      }
      return parts[0].substring(0, 2).toUpperCase();
    }
    if (user?.email) {
      return user.email.substring(0, 2).toUpperCase();
    }
    return 'AC';
  };

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
      <div className="min-h-screen flex w-full bg-[#f8fafc] text-gray-900 font-sans overflow-hidden">
        
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
        <main className="flex-1 ml-20 flex flex-col h-screen overflow-hidden bg-slate-50">
          
          {/* TOP BREADCRUMB BAR (Matches inbox_light.png top layout) */}
          <header className="h-14 bg-white border-b border-gray-200 sticky top-0 z-10 flex items-center justify-between px-6 shadow-sm shrink-0">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-slate-400 font-semibold text-xs">
              <Home className="w-4 h-4 text-slate-400 hover:text-slate-600 cursor-pointer" />
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="hover:text-slate-600 cursor-pointer">{getPageName()}</span>
            </div>
            
            {/* Profile Initials & Settings */}
            <div className="flex items-center gap-4 text-slate-500 relative">
              <button className="hover:text-slate-800"><Settings className="w-4.5 h-4.5" /></button>
              <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm select-none">
                Pro
              </span>
              
              {/* User Avatar button */}
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="relative focus:outline-none cursor-pointer flex-shrink-0"
              >
                {user?.user_metadata?.avatar_url ? (
                  <img 
                    src={user.user_metadata.avatar_url} 
                    alt={user.user_metadata.full_name || "User Avatar"} 
                    className="w-8 h-8 rounded-full shadow-inner select-none object-cover border border-slate-200"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-[10px] shadow-inner select-none">
                    {getInitials()}
                  </div>
                )}
              </button>

              {/* Profile Dropdown */}
              {dropdownOpen && (
                <>
                  {/* Click outside backdrop */}
                  <div className="fixed inset-0 z-40" onClick={() => setDropdownOpen(false)}></div>
                  
                  <div className="absolute right-0 top-10 w-64 bg-white border border-slate-100 rounded-2xl shadow-xl py-3 px-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200 text-left font-sans">
                    <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                      {user?.user_metadata?.avatar_url ? (
                        <img 
                          src={user.user_metadata.avatar_url} 
                          alt="Avatar" 
                          className="w-10 h-10 rounded-full object-cover border border-slate-200"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-sm">
                          {getInitials()}
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-slate-800 truncate">{user?.user_metadata?.full_name || "User"}</p>
                        <p className="text-[10px] text-slate-400 truncate mt-0.5">{user?.email || "loading..."}</p>
                      </div>
                    </div>
                    <div className="pt-2">
                      <button 
                        onClick={() => {
                          setDropdownOpen(false);
                          handleLogout();
                        }}
                        className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-rose-500 hover:bg-rose-50 rounded-xl transition-colors text-left cursor-pointer"
                      >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </header>
          
          {/* Main child viewport */}
          <div className={`flex-1 flex flex-col overflow-hidden ${pathname === '/chat' ? 'p-0' : 'p-8 overflow-y-auto'}`}>
             <AnimatePresence mode="wait">
               <motion.div
                 key={pathname}
                 initial={{ opacity: 0, y: 8 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -8 }}
                 transition={{ duration: 0.12, ease: "easeInOut" }}
                 className="flex-1 flex flex-col overflow-hidden h-full w-full"
               >
                 {children}
               </motion.div>
             </AnimatePresence>
          </div>
        </main>
      </div>
    </AuthGuard>
  );
}
