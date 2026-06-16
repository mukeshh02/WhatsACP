"use client";

import Link from 'next/link';
import { 
  MessageSquare, 
  Check, 
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function PricingPage() {
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
          <Link href="/features" className="hover:text-white transition-colors">Features</Link>
          <Link href="/pricing" className="text-white transition-colors">Pricing</Link>
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

      {/* Main Pricing Content */}
      <main className="max-w-7xl mx-auto px-6 pt-16 pb-24 relative z-10 w-full flex-1">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Plans & Hosting
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            Transparent pricing for any team scale
          </h1>
          <p className="text-slate-400 text-lg">
            Deploy free locally or supercharge your photography pipeline with our hosted Pro system.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-6xl mx-auto text-left font-sans">
          
          {/* Tier 1: Local Self-Hosted */}
          <div className="bg-slate-900/40 border border-white/5 p-8 rounded-3xl flex flex-col justify-between hover:border-white/10 transition-colors">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white">Self-Hosted</h3>
                <p className="text-slate-400 text-xs mt-1">Run locally on your computer.</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white">$0</span>
                <span className="text-slate-500 text-xs font-semibold">/ forever</span>
              </div>
              <hr className="border-white/5" />
              <ul className="space-y-3.5 text-xs text-slate-300">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>1 Sync Device (Local node bridge)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Local SQLite or Supabase database</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Standard Kanban board views</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Manual CSV contact exports</span>
                </li>
              </ul>
            </div>
            <Link href="/docs" className="w-full text-center bg-white/5 border border-white/10 hover:bg-white/10 text-white py-3 rounded-2xl text-xs font-bold transition-all mt-8">
              Read Setup Docs
            </Link>
          </div>

          {/* Tier 2: Pro Cloud (Highlighted) */}
          <div className="bg-slate-900/60 border border-emerald-500/30 p-8 rounded-3xl flex flex-col justify-between relative shadow-2xl hover:border-emerald-500/50 transition-colors">
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg shadow-emerald-500/20">
              <Sparkles className="w-3 h-3 inline mr-1" />
              Popular
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white">Pro Cloud</h3>
                <p className="text-slate-400 text-xs mt-1">Hosted on our secure cloud server.</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white">$49</span>
                <span className="text-slate-500 text-xs font-semibold">/ month</span>
              </div>
              <hr className="border-white/5" />
              <ul className="space-y-3.5 text-xs text-slate-300">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="font-semibold text-white">Multi-Device Sync (Sync multiple phones)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Hosted database backups (99.9% uptime)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>AI polish templates with custom prompts</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Automated daily contact CSV emails</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Interactive team activity tracking log</span>
                </li>
              </ul>
            </div>
            <Link href="/register" className="w-full text-center bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white py-3 rounded-2xl text-xs font-bold transition-all shadow-md shadow-emerald-500/10 mt-8">
              Start 14-Day Trial
            </Link>
          </div>

          {/* Tier 3: Enterprise Custom */}
          <div className="bg-slate-900/40 border border-white/5 p-8 rounded-3xl flex flex-col justify-between hover:border-white/10 transition-colors">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white">Enterprise</h3>
                <p className="text-slate-400 text-xs mt-1">Dedicated setup for large studios.</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white">Custom</span>
                <span className="text-slate-500 text-xs font-semibold">/ pricing</span>
              </div>
              <hr className="border-white/5" />
              <ul className="space-y-3.5 text-xs text-slate-300">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Custom CRM integrations & plugins</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>On-premise dedicated server setups</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Priority SLA developer support (24/7)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Unlimited chat sync and database nodes</span>
                </li>
              </ul>
            </div>
            <a href="mailto:support@whatsacp.com" className="w-full text-center bg-white/5 border border-white/10 hover:bg-white/10 text-white py-3 rounded-2xl text-xs font-bold transition-all mt-8 block">
              Contact Sales
            </a>
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
