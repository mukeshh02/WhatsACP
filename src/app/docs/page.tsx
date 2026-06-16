"use client";

import Link from 'next/link';
import { 
  MessageSquare, 
  Check, 
  Terminal,
  FileText,
  Activity,
  Play
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function DocsPage() {
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
          <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="/docs" className="text-white transition-colors">Docs</Link>
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

      {/* Main Docs Content */}
      <main className="max-w-6xl mx-auto px-6 pt-16 pb-24 relative z-10 w-full flex-1 text-left font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Navigation Menu */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-slate-900/40 border border-white/5 p-6 rounded-2xl">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Documentation</h4>
              <ul className="space-y-3 text-xs font-bold text-slate-300">
                <li><a href="#getting-started" className="text-emerald-400 hover:text-emerald-300 block">Getting Started</a></li>
                <li><a href="#requirements" className="hover:text-white block">Requirements</a></li>
                <li><a href="#installation" className="hover:text-white block">Installation</a></li>
                <li><a href="#environment" className="hover:text-white block">Environment variables</a></li>
                <li><a href="#starting-servers" className="hover:text-white block">Starting Local Servers</a></li>
                <li><a href="#connecting-whatsapp" className="hover:text-white block">Connecting WhatsApp</a></li>
              </ul>
            </div>
          </div>

          {/* Right Docs details */}
          <div className="lg:col-span-9 space-y-12 max-w-3xl">
            
            {/* Sec 1 */}
            <section id="getting-started" className="space-y-4">
              <h2 className="text-3xl font-extrabold text-white tracking-tight">Getting Started</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                WhatsACP functions on a local server architecture. It features a Node.js backend client (`server.js`) that hosts the WhatsApp Web socket controller, paired with a Next.js frontend dashboard.
              </p>
            </section>

            {/* Sec 2 */}
            <section id="requirements" className="space-y-4">
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-400" />
                Requirements
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Ensure you have the following prerequisites installed on your host machine before configuring the setup:
              </p>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Node.js (v18.x or v20.x recommended)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Supabase Account (Free tier works perfectly)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Git (For cloning files)</span>
                </li>
              </ul>
            </section>

            {/* Sec 3 */}
            <section id="installation" className="space-y-4">
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <Terminal className="w-5 h-5 text-emerald-400" />
                Installation
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Double click the `install_deps.bat` file in the root directory to install required frontend dependencies, or execute manual CLI commands:
              </p>
              <div className="bg-slate-950 p-4 rounded-xl border border-white/5 font-mono text-xs text-emerald-400 space-y-1">
                <p># Install root dependencies (WhatsApp Web.js, Express, Socket.io)</p>
                <p>npm install</p>
                <br />
                <p># Navigate into dashboard directory and install Next.js dependencies</p>
                <p>cd dashboard</p>
                <p>npm install</p>
              </div>
            </section>

            {/* Sec 4 */}
            <section id="environment" className="space-y-4">
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <Activity className="w-5 h-5 text-emerald-400" />
                Environment Variables
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Configure credentials in both `.env` (root directory) and `dashboard/.env.local`. Create these files using the template keys:
              </p>
              <div className="bg-slate-950 p-4 rounded-xl border border-white/5 font-mono text-xs text-emerald-400 space-y-1">
                <p className="text-slate-500"># root .env & dashboard/.env.local configuration</p>
                <p>SUPABASE_URL=https://your-project-id.supabase.co</p>
                <p>SUPABASE_KEY=your-supabase-anon-key</p>
                <p>SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key</p>
                <p>PORT=3001</p>
              </div>
            </section>

            {/* Sec 5 */}
            <section id="starting-servers" className="space-y-4">
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <Play className="w-5 h-5 text-emerald-400" />
                Starting Local Servers
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Run both background servers simultaneously to access the sync dashboard.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-semibold">
                <div className="bg-slate-900 border border-white/5 p-4 rounded-2xl space-y-2">
                  <h4 className="text-white font-bold">1. Start Backend</h4>
                  <p className="text-slate-400 font-normal">Double click `start_backend.bat` in the root folder, which executes:</p>
                  <code className="block bg-slate-950 p-2 rounded-lg font-mono text-emerald-400 font-normal text-[10px]">node server.js</code>
                </div>
                <div className="bg-slate-900 border border-white/5 p-4 rounded-2xl space-y-2">
                  <h4 className="text-white font-bold">2. Start Dashboard</h4>
                  <p className="text-slate-400 font-normal">Double click `start_dashboard.bat` in the root folder, which executes:</p>
                  <code className="block bg-slate-950 p-2 rounded-lg font-mono text-emerald-400 font-normal text-[10px]">npm run dev</code>
                </div>
              </div>
            </section>

            {/* Sec 6 */}
            <section id="connecting-whatsapp" className="space-y-4">
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                Connecting WhatsApp
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Once both servers are running:
              </p>
              <ol className="space-y-3.5 text-xs text-slate-300 pl-4 list-decimal font-sans">
                <li>Open your browser and navigate to <code className="bg-slate-900 px-1.5 py-0.5 rounded text-white font-mono">http://localhost:3000</code>.</li>
                <li>Log in or create a local credentials account.</li>
                <li>Navigate to the **WhatsApp Setup** tab.</li>
                <li>Wait for the QR code to load, and scan it using the *Linked Devices* option inside your phone's WhatsApp application.</li>
                <li>Your client groups and chats will begin syncing automatically to the Kanban pipeline!</li>
              </ol>
            </section>

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
