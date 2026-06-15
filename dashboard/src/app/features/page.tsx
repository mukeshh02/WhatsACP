"use client";

import Link from 'next/link';
import { 
  MessageSquare, 
  ArrowRight, 
  Smartphone, 
  Kanban, 
  Calendar, 
  Users, 
  ShieldAlert, 
  Sparkles, 
  Check, 
  Download, 
  Database, 
  ShieldCheck, 
  UserCheck, 
  Activity,
  ArrowUpRight
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function FeaturesPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen w-full bg-[#0b0f19] text-slate-100 font-sans selection:bg-emerald-500 selection:text-white flex flex-col relative overflow-x-hidden">
      
      {/* Background gradients container to clip bottom overflows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-20%] w-[60%] h-[50%] bg-indigo-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-[30%] right-[-20%] w-[50%] h-[60%] bg-emerald-500/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/10 rounded-full blur-[130px]" />
      </div>

      {/* Header */}
      <header className="max-w-7xl mx-auto w-full px-6 py-5 flex items-center justify-between border-b border-white/5 relative z-10">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-2.5 rounded-xl shadow-lg shadow-emerald-500/20">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl tracking-tight text-white leading-none">WhatsACP</span>
              <span className="text-[10px] text-emerald-400 font-bold tracking-wider uppercase mt-1">Group Sync CRM</span>
            </div>
          </Link>
        </div>

        {/* Center navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
          <Link href="/features" className="text-white transition-colors">Features</Link>
          <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            Sign In
          </Link>
          <Link href="/register" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-emerald-500/15 hover:shadow-emerald-500/20 transition-all hover:-translate-y-0.5">
            Get Started
          </Link>
        </div>
      </header>

      {/* Main Feature Content */}
      <main className="max-w-7xl mx-auto px-6 pt-16 pb-24 relative z-10 w-full flex-1">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Features Guide
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            Features designed for creative operations
          </h1>
          <p className="text-slate-400 text-lg">
            WhatsACP combines instant messaging synchronization with pipeline trackers and resource roster allocation.
          </p>
        </div>

        {/* Deep Dive Section 1: Live Inbox */}
        <div className="mt-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-emerald-500/10 text-emerald-400 p-3 rounded-2xl w-fit">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Live WhatsApp Chat Inbox</h2>
            <p className="text-slate-400 text-sm leading-relaxed font-sans">
              Communicate in real-time without leaving your pipeline page. The local WebSocket bridge instantly synchronizes incoming messages from your phone session to the dashboard screen.
            </p>
            <ul className="space-y-3 font-sans text-xs text-slate-300">
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Synchronize media attachments (images, audio, PDF guides)</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Pre-saved canned responses for payment details, Packages, and address locations</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Inline message quoting and thread replies</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-7 bg-[#080b13] border border-white/5 p-6 rounded-3xl relative overflow-hidden">
            <div className="bg-slate-950 p-4 rounded-2xl border border-white/10 text-left font-sans">
              <div className="border-b border-white/5 pb-2.5 mb-3 flex justify-between items-center">
                <span className="text-xs font-bold text-white">Inbox Stream</span>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-bold">Connected</span>
              </div>
              <div className="space-y-3">
                <div className="bg-slate-900 border border-white/5 p-3 rounded-xl max-w-[80%]">
                  <p className="text-[9px] font-bold text-emerald-400">Sharma Wedding Lead</p>
                  <p className="text-xs text-slate-300">Can we assign Pooja as the lead photographer and Rahul for cinematics?</p>
                </div>
                <div className="bg-emerald-600 text-white p-3 rounded-xl max-w-[80%] ml-auto">
                  <p className="text-xs">Yes, both are allocated. Pinned to the brief board now.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deep Dive Section 2: Kanban */}
        <div className="mt-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:flex-row-reverse">
          <div className="lg:col-span-7 bg-[#080b13] border border-white/5 p-6 rounded-3xl order-last lg:order-first">
            <div className="grid grid-cols-3 gap-3 text-left font-sans">
              <div className="bg-slate-950 p-3 rounded-2xl border border-white/5 space-y-2">
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider block">Pre-Prod</span>
                <div className="bg-slate-900 p-2.5 rounded-xl border border-white/10 text-[10px] text-slate-300 font-semibold truncate">Kapoor Pre-Wedding</div>
              </div>
              <div className="bg-slate-950 p-3 rounded-2xl border border-white/5 space-y-2">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">Shooting</span>
                <div className="bg-slate-900 p-2.5 rounded-xl border border-white/10 text-[10px] text-slate-300 font-semibold truncate">Sharma Wedding</div>
              </div>
              <div className="bg-slate-950 p-3 rounded-2xl border border-white/5 space-y-2">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">Editing</span>
                <div className="bg-slate-900 p-2.5 rounded-xl border border-white/10 text-[10px] text-slate-300 font-semibold truncate">Mehta Anniversary</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-teal-500/10 text-teal-400 p-3 rounded-2xl w-fit">
              <Kanban className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Drag-and-Drop Kanban Boards</h2>
            <p className="text-slate-400 text-sm leading-relaxed font-sans">
              Manage client groups across multiple production stages. Drag group directories from Pre-Prod, Shooting, Editing, to Completed, and see status changes write to Supabase immediately.
            </p>
            <ul className="space-y-3 font-sans text-xs text-slate-300">
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Keep track of wedding and shoot timelines in columns</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Instant status updates reflect to any teammate logged in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Deep Dive Section 3: Roster & Extractor */}
        <div className="mt-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-indigo-500/10 text-indigo-400 p-3 rounded-2xl w-fit">
              <Users className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Crew Roster & Member Extractor</h2>
            <p className="text-slate-400 text-sm leading-relaxed font-sans">
              Allocate photographers and film operators to group pipelines. Extract list directories of group members into a CSV spreadsheet for coordinator reachouts and contact archives.
            </p>
            <ul className="space-y-3 font-sans text-xs text-slate-300">
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Assign primary editors and drone pilots to client groups</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Scan and export participant tables with admin badges</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Persistent crew records side-by-side with chats</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-7 bg-[#080b13] border border-white/5 p-6 rounded-3xl text-left">
            <div className="border border-white/5 rounded-2xl overflow-hidden bg-slate-950 font-sans">
              <div className="p-4 border-b border-white/5 bg-slate-900/50 flex justify-between items-center">
                <span className="text-xs font-bold text-slate-300">Sharma Group Roster</span>
                <span className="text-[10px] bg-indigo-500/15 text-indigo-400 px-2 py-0.5 rounded font-bold">2 Crew Assigned</span>
              </div>
              <div className="p-4 space-y-2">
                <div className="flex justify-between items-center bg-white/[0.01] border border-white/5 p-2 rounded-xl">
                  <span className="text-xs text-white">Rahul (Video Cut)</span>
                  <span className="text-[9px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-bold">Cinema Lead</span>
                </div>
                <div className="flex justify-between items-center bg-white/[0.01] border border-white/5 p-2 rounded-xl">
                  <span className="text-xs text-white">Amit (Photography)</span>
                  <span className="text-[9px] bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded font-bold">Second Shoot</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid / CTA */}
        <div className="mt-32 text-center bg-gradient-to-r from-emerald-500/20 to-teal-500/10 border border-emerald-500/20 p-8 md:p-16 rounded-3xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05),transparent_70%)]" />
          <h2 className="text-3xl font-black text-white relative z-10">
            Configure your client pipeline in minutes
          </h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto mt-3 relative z-10 leading-relaxed font-sans">
            Connect your phone session via QR code, populate event categories, and coordinate shooters efficiently.
          </p>
          <div className="mt-8 relative z-10 flex gap-4 justify-center">
            <Link href="/register" className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-xl shadow-emerald-500/20">
              Start Free Setup
            </Link>
            <Link href="/login" className="bg-white/5 border border-white/10 text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-white/10 transition-colors">
              Access Workspace
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 text-center relative z-10 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-500/20 text-emerald-400 p-1.5 rounded-lg">
              <MessageSquare className="w-4 h-4" />
            </div>
            <span className="font-bold text-slate-300">WhatsACP CRM</span>
          </div>
          <p className="text-xs text-slate-600 font-medium">
            © 2026 Akash Camera Production WhatsACP. Built for high-performance creative agency operations.
          </p>
        </div>
      </footer>
    </div>
  );
}
