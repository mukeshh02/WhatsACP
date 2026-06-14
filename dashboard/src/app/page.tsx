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
  ChevronDown, 
  ChevronUp, 
  Download, 
  Database, 
  ShieldCheck, 
  UserCheck, 
  HelpCircle,
  Play,
  FileText,
  Activity
} from 'lucide-react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'kanban' | 'exporter'>('chat');
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({
    0: true,
    1: false,
    2: false,
    3: false,
    4: false
  });

  // AI Polisher sandbox state
  const [polisherInput, setPolisherInput] = useState("ok price address pathao payment done");
  const [polisherTone, setPolisherTone] = useState<'professional' | 'polite' | 'crisp'>('professional');
  const [polisherOutput, setPolisherOutput] = useState("");
  const [isPolishing, setIsPolishing] = useState(false);

  useEffect(() => {
    setMounted(true);
    handlePolish("ok price address pathao payment done", "professional");
  }, []);

  const handlePolish = (text: string, tone: 'professional' | 'polite' | 'crisp') => {
    setIsPolishing(true);
    setTimeout(() => {
      let polished = text.trim();
      if (!polished) {
        setPolisherOutput("Please enter some text to polish.");
        setIsPolishing(false);
        return;
      }
      
      polished = polished.replace(/\bok\b/gi, "Sure, that sounds great");
      polished = polished.replace(/\bdone\b/gi, "completed successfully");
      polished = polished.replace(/\bpathao\b/gi, "please share");
      polished = polished.replace(/\bprice\b/gi, "package pricing details");
      polished = polished.replace(/\baddress\b/gi, "studio address location");
      polished = polished.replace(/\bpayment\b/gi, "booking advance payment");

      if (tone === 'professional') {
        setPolisherOutput(`Hello,\n\n${polished.charAt(0).toUpperCase() + polished.slice(1)}.\n\nPlease let me know if you have any questions.\n\nWarm regards,\nAkash Camera Production`);
      } else if (tone === 'polite') {
        setPolisherOutput(`Hi there! 😊\n\n${polished.charAt(0).toUpperCase() + polished.slice(1)}.\n\nLooking forward to working together! ✨`);
      } else {
        setPolisherOutput(`${polished.charAt(0).toUpperCase() + polished.slice(1)}.`);
      }
      setIsPolishing(false);
    }, 400);
  };

  const triggerPolishingChange = (text: string, tone: 'professional' | 'polite' | 'crisp') => {
    setPolisherInput(text);
    handlePolish(text, tone);
  };

  const toggleFaq = (index: number) => {
    setFaqOpen(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleMockExport = () => {
    toast.success("Successfully exported 48 group members to group_contacts.csv!");
  };

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

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-16 pb-24 flex-1 flex flex-col items-center relative z-10 w-full">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full text-xs font-semibold text-emerald-400 mb-8">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          Akash Camera Production Workflow Engine
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 tracking-tight leading-[1.15] max-w-4xl text-center">
          One Client Group, One Hub. <br />
          <span className="bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Supercharged Workflow.</span>
        </h1>
        
        <p className="text-slate-400 text-base sm:text-lg md:text-xl mt-6 max-w-2xl font-medium leading-relaxed text-center">
          Consolidate your photography pipeline. Sync client WhatsApp groups, organize shoots on a Kanban pipeline, assign crew roles, and export contact logs in a local-first web CRM.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full sm:w-auto">
          <Link href="/register" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white px-8 py-4 rounded-2xl font-bold text-base shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all hover:-translate-y-0.5 group">
            Start Syncing Groups <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/login" className="w-full sm:w-auto inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold text-base transition-colors">
            Access Dashboard
          </Link>
        </div>

        {/* ============================================================== */}
        {/* INTERACTIVE DEMO PLAYGROUND */}
        {/* ============================================================== */}
        <div className="mt-20 w-full max-w-5xl border border-white/10 rounded-3xl bg-slate-900/60 backdrop-blur-md overflow-hidden shadow-2xl">
          {/* Top Bar / Tab Swapper */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between border-b border-white/5 bg-slate-950/60 p-4 gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-rose-500/80"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-amber-500/80"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/80"></span>
              <span className="text-xs font-semibold text-slate-500 ml-2">WhatsACP Live Workspace Mockup</span>
            </div>
            
            <div className="flex bg-slate-900 p-1 rounded-xl border border-white/5 gap-1 font-sans">
              <button 
                onClick={() => setActiveTab('chat')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${activeTab === 'chat' ? 'bg-emerald-500 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
              >
                <MessageSquare className="w-3.5 h-3.5 inline mr-1.5" />
                Live Inbox
              </button>
              <button 
                onClick={() => setActiveTab('kanban')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${activeTab === 'kanban' ? 'bg-emerald-500 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
              >
                <Kanban className="w-3.5 h-3.5 inline mr-1.5" />
                Kanban Pipeline
              </button>
              <button 
                onClick={() => setActiveTab('exporter')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${activeTab === 'exporter' ? 'bg-emerald-500 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
              >
                <Download className="w-3.5 h-3.5 inline mr-1.5" />
                Member Extractor
              </button>
            </div>
          </div>

          {/* Playground Area */}
          <div className="p-6 min-h-[380px] bg-[#0c101d] transition-all">
            
            {/* TAB 1: Chatbox Mockup */}
            {activeTab === 'chat' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[350px] animate-in fade-in duration-300">
                {/* Left Chats Column */}
                <div className="md:col-span-3 border-r border-white/5 pr-4 flex flex-col gap-2.5 overflow-y-auto">
                  <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                    <p className="text-[10px] uppercase font-bold text-emerald-400">Active Group</p>
                    <p className="text-xs font-bold text-white truncate">Sharma Wedding Dec 26</p>
                  </div>
                  <div className="p-2 hover:bg-white/5 rounded-xl transition-colors opacity-60">
                    <p className="text-[10px] uppercase font-bold text-slate-500">Pre-Prod</p>
                    <p className="text-xs font-bold text-slate-300 truncate">Kapoor Pre-Wedding</p>
                  </div>
                  <div className="p-2 hover:bg-white/5 rounded-xl transition-colors opacity-60">
                    <p className="text-[10px] uppercase font-bold text-slate-500">Editing</p>
                    <p className="text-xs font-bold text-slate-300 truncate">Verma Anniversary</p>
                  </div>
                </div>

                {/* Center Chat Pane */}
                <div className="md:col-span-6 flex flex-col justify-between h-full px-2 border-r border-white/5 text-left">
                  <div className="space-y-3 overflow-y-auto pr-1">
                    <div className="bg-slate-900 border border-white/5 p-3 rounded-2xl rounded-tl-none max-w-[85%]">
                      <p className="text-[10px] font-bold text-emerald-400 mb-0.5">Sharma Family (Client)</p>
                      <p className="text-xs text-slate-300 leading-relaxed">Hi Akash, please assign the cinemafilm lead for our shoot and send the HDFC bank account number details.</p>
                    </div>

                    <div className="bg-[#10b981] text-white p-3 rounded-2xl rounded-tr-none max-w-[85%] ml-auto text-left">
                      <p className="text-[10px] font-bold text-emerald-100 mb-0.5">Akash Camera Production (You)</p>
                      <p className="text-xs leading-relaxed">Hi! We have assigned Rahul as the Cinematographer. Bank Details: Account 50200012345678, IFSC HDFC0001234. Let's sync on details.</p>
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-3 mt-2 flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Type a message (AI polisher sandbox below)..." 
                      disabled
                      className="bg-slate-900 border border-white/10 rounded-xl px-3 py-2 text-xs flex-1 text-slate-400 cursor-not-allowed"
                    />
                    <button className="bg-emerald-505 text-slate-400 border border-white/5 px-3 py-2 rounded-xl text-xs font-bold opacity-80 cursor-not-allowed">
                      Send
                    </button>
                  </div>
                </div>

                {/* Right Brief Pane */}
                <div className="md:col-span-3 pl-4 space-y-4 text-left overflow-y-auto">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Crew Roster</h4>
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center bg-white/[0.02] border border-white/5 p-1.5 rounded-lg">
                        <span className="text-[11px] text-slate-300 font-medium">Rahul Sharma</span>
                        <span className="text-[9px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded font-bold">Cinema Lead</span>
                      </div>
                      <div className="flex justify-between items-center bg-white/[0.02] border border-white/5 p-1.5 rounded-lg">
                        <span className="text-[11px] text-slate-300 font-medium">Pooja Patel</span>
                        <span className="text-[9px] bg-indigo-500/10 text-indigo-400 px-1.5 py-0.5 rounded font-bold">Photographer</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Pinned Coordinates</h4>
                    <div className="bg-slate-950 border border-white/5 p-2 rounded-xl text-[10px] space-y-1">
                      <p className="text-slate-400 truncate">📍 Venue: Grand Hyatt Mumbai</p>
                      <p className="text-emerald-400 truncate font-semibold">🔗 drive.google.com/wedding-ref</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: Kanban Pipeline */}
            {activeTab === 'kanban' && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[350px] animate-in fade-in duration-300 text-left">
                {/* Stage 1 */}
                <div className="bg-slate-950/40 p-3 rounded-2xl border border-white/5 flex flex-col gap-2.5">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-xs font-bold text-indigo-400">Pre-Prod</span>
                    <span className="bg-slate-900 text-[10px] text-slate-400 px-1.5 py-0.5 rounded-md">1</span>
                  </div>
                  <div className="bg-[#0b0f19] border border-white/5 p-3 rounded-xl hover:border-indigo-500/30 transition-all cursor-grab">
                    <p className="text-xs font-bold text-white truncate">Amit & Neha Pre-Shoot</p>
                    <div className="flex items-center justify-between mt-2.5">
                      <span className="text-[9px] text-slate-500">Oct 26</span>
                      <span className="text-[9px] bg-indigo-500/15 text-indigo-400 px-1.5 py-0.5 rounded font-semibold">Pre-Shoot</span>
                    </div>
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="bg-slate-950/40 p-3 rounded-2xl border border-white/5 flex flex-col gap-2.5">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-xs font-bold text-amber-400 font-sans">Shooting</span>
                    <span className="bg-slate-900 text-[10px] text-slate-400 px-1.5 py-0.5 rounded-md">1</span>
                  </div>
                  <div className="bg-[#0b0f19] border border-white/5 p-3 rounded-xl hover:border-amber-500/30 transition-all cursor-grab">
                    <p className="text-xs font-bold text-white truncate">Sharma Wedding Dec 26</p>
                    <div className="flex items-center justify-between mt-2.5">
                      <span className="text-[9px] text-slate-500">Dec 26</span>
                      <span className="text-[9px] bg-amber-500/15 text-amber-400 px-1.5 py-0.5 rounded font-semibold">Wedding</span>
                    </div>
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="bg-slate-950/40 p-3 rounded-2xl border border-white/5 flex flex-col gap-2.5">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-xs font-bold text-purple-400">Editing</span>
                    <span className="bg-slate-900 text-[10px] text-slate-400 px-1.5 py-0.5 rounded-md">1</span>
                  </div>
                  <div className="bg-[#0b0f19] border border-white/5 p-3 rounded-xl hover:border-purple-500/30 transition-all cursor-grab">
                    <p className="text-xs font-bold text-white truncate">Verma Anniversary</p>
                    <div className="flex items-center justify-between mt-2.5">
                      <span className="text-[9px] text-slate-500">Nov 26</span>
                      <span className="text-[9px] bg-purple-500/15 text-purple-400 px-1.5 py-0.5 rounded font-semibold">Video Cut</span>
                    </div>
                  </div>
                </div>

                {/* Stage 4 */}
                <div className="bg-slate-950/40 p-3 rounded-2xl border border-white/5 flex flex-col gap-2.5">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-xs font-bold text-emerald-400">Completed</span>
                    <span className="bg-slate-900 text-[10px] text-slate-400 px-1.5 py-0.5 rounded-md">1</span>
                  </div>
                  <div className="bg-[#0b0f19] border border-white/5 p-3 rounded-xl hover:border-emerald-500/30 transition-all opacity-70">
                    <p className="text-xs font-bold text-white truncate line-through decoration-slate-600">Mehta Reception</p>
                    <div className="flex items-center justify-between mt-2.5">
                      <span className="text-[9px] text-slate-500">Sep 26</span>
                      <span className="text-[9px] bg-emerald-500/15 text-emerald-400 px-1.5 py-0.5 rounded font-semibold">Delivered</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: Member Extractor */}
            {activeTab === 'exporter' && (
              <div className="flex flex-col h-[350px] animate-in fade-in duration-300 justify-between text-left">
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
                    <div>
                      <h4 className="text-sm font-bold text-white">Group Member Extractor</h4>
                      <p className="text-[11px] text-slate-400">Scan and pull phone directories from current chat groups instantly.</p>
                    </div>
                    <button 
                      onClick={handleMockExport}
                      className="bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md shadow-emerald-500/10 transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Export Contacts
                    </button>
                  </div>

                  <div className="border border-white/5 rounded-2xl overflow-hidden bg-slate-950/50">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-slate-900 text-slate-400 uppercase text-[10px] border-b border-white/5 font-sans">
                        <tr>
                          <th className="p-3">Phone Number</th>
                          <th className="p-3">Saved Contact Name</th>
                          <th className="p-3">Display Name</th>
                          <th className="p-3">Role</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/[0.02] font-sans">
                        <tr className="hover:bg-white/[0.01]">
                          <td className="p-3 text-white font-mono">+91 98765 43210</td>
                          <td className="p-3 text-slate-300">Priya Sharma</td>
                          <td className="p-3 text-slate-400">Priya Bride</td>
                          <td className="p-3"><span className="bg-slate-900 text-[10px] text-slate-400 px-1.5 py-0.5 rounded border border-white/5">Participant</span></td>
                        </tr>
                        <tr className="hover:bg-white/[0.01]">
                          <td className="p-3 text-white font-mono">+91 98234 56789</td>
                          <td className="p-3 text-slate-300">Raj Verma</td>
                          <td className="p-3 text-slate-400">Raj Groom</td>
                          <td className="p-3"><span className="bg-slate-900 text-[10px] text-slate-400 px-1.5 py-0.5 rounded border border-white/5">Participant</span></td>
                        </tr>
                        <tr className="hover:bg-white/[0.01]">
                          <td className="p-3 text-white font-mono">+91 98123 45678</td>
                          <td className="p-3 text-slate-300">Vikram Planner</td>
                          <td className="p-3 text-slate-400">Vikram Event Lead</td>
                          <td className="p-3"><span className="bg-emerald-500/10 text-emerald-400 text-[10px] px-1.5 py-0.5 rounded font-bold border border-emerald-500/20">Group Admin</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-white/5 flex justify-between items-center">
                  <span className="text-[10px] text-slate-500">Local WhatsApp Session Protocol</span>
                  <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Ready to Fetch Chats
                  </span>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* ============================================================== */}
        {/* INTERACTIVE AI RESPONSE POLISHER PLAYGROUND */}
        {/* ============================================================== */}
        <div className="mt-28 w-full max-w-5xl bg-gradient-to-br from-slate-900/40 to-[#0b0f19] border border-white/5 rounded-3xl p-8 md:p-12 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[80px]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-emerald-500/10 text-emerald-400 p-2 rounded-lg w-fit text-xs font-bold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                Live Feature Demo
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight leading-tight">AI message polisher sandbox</h2>
              <p className="text-slate-400 text-sm leading-relaxed font-sans">
                Akash Camera Production coordinates clients and photographers continuously. Type rough notes or shortcuts below and select a tone to see how the system formats responses instantly on screen.
              </p>
              
              <div className="flex flex-wrap gap-2.5">
                <button 
                  onClick={() => triggerPolishingChange("welcome pricing pathao details do", polisherTone)}
                  className="bg-white/5 hover:bg-white/10 text-slate-300 text-xs px-3 py-1.5 rounded-lg border border-white/5 transition-colors cursor-pointer"
                >
                  "welcome pricing pathao"
                </button>
                <button 
                  onClick={() => triggerPolishingChange("shoot confirmed location map send kro", polisherTone)}
                  className="bg-white/5 hover:bg-white/10 text-slate-300 text-xs px-3 py-1.5 rounded-lg border border-white/5 transition-colors cursor-pointer"
                >
                  "shoot location map send"
                </button>
              </div>
            </div>

            {/* AI Sandbox box */}
            <div className="lg:col-span-7 bg-[#080b13] border border-white/10 rounded-2xl p-5 shadow-inner space-y-4">
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Playground Input</span>
                <div className="flex bg-slate-900 p-0.5 rounded-lg border border-white/5 gap-0.5">
                  {(['professional', 'polite', 'crisp'] as const).map((tone) => (
                    <button
                      key={tone}
                      onClick={() => {
                        setPolisherTone(tone);
                        handlePolish(polisherInput, tone);
                      }}
                      className={`px-3 py-1 rounded-md text-[11px] font-bold capitalize transition-all cursor-pointer ${polisherTone === tone ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-300'}`}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans">
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1.5">Your shorthand notes</label>
                  <textarea 
                    value={polisherInput}
                    onChange={(e) => triggerPolishingChange(e.target.value, polisherTone)}
                    className="w-full h-32 bg-slate-950 border border-white/5 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-emerald-500/50 resize-none font-medium"
                    placeholder="Enter shorthand message..."
                  />
                </div>

                <div className="relative">
                  <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1.5">Polished Response (Output)</label>
                  <div className="w-full h-32 bg-slate-950/40 border border-white/5 rounded-xl p-3 text-xs text-slate-300 overflow-y-auto whitespace-pre-line font-medium leading-relaxed">
                    {isPolishing ? (
                      <span className="text-slate-500 italic animate-pulse">Polishing text...</span>
                    ) : (
                      polisherOutput
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* CORE FEATURES BENTO GRID */}
        {/* ============================================================== */}
        <div className="mt-32 w-full text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Built to optimize group operations</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm md:text-base font-medium">
            Everything your team needs to capture clients, structure crew logs, and coordinate deliverables.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full text-left font-sans">
            {/* Box 1 */}
            <div className="bg-slate-900/30 border border-white/5 hover:border-emerald-500/30 p-8 rounded-3xl hover:bg-slate-900/40 transition-all group flex flex-col justify-between">
              <div>
                <div className="bg-emerald-500/10 text-emerald-400 p-3 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Live WhatsApp Chatbox</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Real-time synchronization using local websockets. Access full chat logs, send media attachments, and use pre-saved templates for packages and booking steps.
                </p>
              </div>
              <span className="text-[10px] text-emerald-400/80 font-bold uppercase tracking-wider mt-6 block">WebSocket Gateway</span>
            </div>

            {/* Box 2 */}
            <div className="bg-slate-900/30 border border-white/5 hover:border-teal-500/30 p-8 rounded-3xl hover:bg-slate-900/40 transition-all group flex flex-col justify-between">
              <div>
                <div className="bg-teal-500/10 text-teal-400 p-3 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform">
                  <Kanban className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Drag-and-Drop Pipeline</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Visually monitor groups on a Kanban interface. Easily move client groups through Pre-Prod, Shooting, Editing, and Revisions stages to keep track of schedules.
                </p>
              </div>
              <span className="text-[10px] text-teal-400/80 font-bold uppercase tracking-wider mt-6 block">Supabase Integration</span>
            </div>

            {/* Box 3 */}
            <div className="bg-slate-900/30 border border-white/5 hover:border-indigo-500/30 p-8 rounded-3xl hover:bg-slate-900/40 transition-all group flex flex-col justify-between">
              <div>
                <div className="bg-indigo-500/10 text-indigo-400 p-3 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform">
                  <Download className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Group Contact Extractor</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Extract and compile all contacts inside wedding groups. Download fully formatted Excel/CSV tables including phone numbers, admin badges, and display names.
                </p>
              </div>
              <span className="text-[10px] text-indigo-400/80 font-bold uppercase tracking-wider mt-6 block">Contact Database</span>
            </div>

            {/* Box 4 */}
            <div className="bg-slate-900/30 border border-white/5 hover:border-emerald-500/30 p-8 rounded-3xl hover:bg-slate-900/40 transition-all group flex flex-col justify-between md:col-span-2">
              <div>
                <div className="bg-emerald-500/10 text-emerald-400 p-3 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Crew Allocation & Roster Board</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Never lose track of photographer schedules. Assign lead camera directors, second shooters, drone pilots, and primary editors directly to group pipelines. Team details are persisted dynamically next to the chat windows.
                </p>
              </div>
              <span className="text-[10px] text-emerald-400/80 font-bold uppercase tracking-wider mt-6 block">Resource Management</span>
            </div>

            {/* Box 5 */}
            <div className="bg-slate-900/30 border border-white/5 hover:border-indigo-500/30 p-8 rounded-3xl hover:bg-slate-900/40 transition-all group flex flex-col justify-between">
              <div>
                <div className="bg-indigo-500/10 text-indigo-400 p-3 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Shoot Filters & Month Sorting</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Sort hundreds of client directories by event months (e.g. Dec 26, Jan 27). Quickly evaluate upcoming shoot load and crew availability in a single dashboard.
                </p>
              </div>
              <span className="text-[10px] text-indigo-400/80 font-bold uppercase tracking-wider mt-6 block">Timeline Management</span>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* LOCAL ARCHITECTURE ENGINE DETAILS */}
        {/* ============================================================== */}
        <div className="mt-32 w-full bg-[#0a0d16] border border-white/5 rounded-3xl p-8 md:p-12 text-left relative overflow-hidden">
          <div className="absolute top-[-50%] right-[-20%] w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px]" />
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <div className="space-y-6 lg:max-w-xl">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">Local Integration Engine</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-sans">
                WhatsACP functions using a secure client-side setup. Instead of routing your private messages through third-party servers or billing you for official cloud API tokens, the application hosts a local bridge.
              </p>
              
              <ul className="space-y-3 font-sans">
                <li className="flex items-center gap-3 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400 animate-pulse" />
                  <span>Runs entirely via WhatsApp Web session protocol</span>
                </li>
                <li className="flex items-center gap-3 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400 animate-pulse" />
                  <span>Encrypted data syncing through your private Supabase database</span>
                </li>
                <li className="flex items-center gap-3 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400 animate-pulse" />
                  <span>No messaging or character count limits — host for free locally</span>
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-96 bg-slate-900 border border-white/10 p-6 rounded-2xl space-y-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-400" />
                Connection Console
              </h4>
              <div className="bg-slate-950 p-4 rounded-xl font-mono text-[10px] text-emerald-400 space-y-1">
                <p className="text-slate-500">// Starting local WhatsACP bridge...</p>
                <p>◇ Injected environment from .env</p>
                <p>◇ WhatsApp Web engine initialized</p>
                <p className="text-white">✅ WhatsApp Client is Ready! (Connected)</p>
                <p>◇ Syncing 515 active chats...</p>
              </div>
              <div className="flex justify-between items-center text-xs font-sans">
                <span className="text-slate-400 font-medium">Database Status:</span>
                <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-bold">Supabase Online</span>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* FAQ SECTION */}
        {/* ============================================================== */}
        <div className="mt-32 w-full max-w-4xl">
          <h2 className="text-3xl font-extrabold text-white text-center tracking-tight">Frequently Asked Questions</h2>
          <p className="text-slate-400 text-center mt-3 text-sm font-medium">
            Learn more about WhatsACP connection nodes, safety parameters, and configuration guides.
          </p>

          <div className="mt-12 space-y-4 text-left font-sans">
            {/* Q1 */}
            <div className="bg-slate-900/40 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300">
              <button 
                onClick={() => toggleFaq(0)}
                className="w-full p-5 text-left flex justify-between items-center font-bold text-slate-100 hover:text-white cursor-pointer"
              >
                <span className="text-sm md:text-base">How does WhatsACP connect to WhatsApp?</span>
                {faqOpen[0] ? <ChevronUp className="w-4 h-4 text-emerald-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
              </button>
              {faqOpen[0] && (
                <div className="px-5 pb-5 text-xs md:text-sm text-slate-400 border-t border-white/[0.03] pt-3 leading-relaxed">
                  WhatsACP triggers a local Node server that uses a Chromium browser instance under the hood. When you scan the WhatsApp Setup QR code in your dashboard, it authenticates a standard WhatsApp Web linked device session on your machine.
                </div>
              )}
            </div>

            {/* Q2 */}
            <div className="bg-slate-900/40 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300">
              <button 
                onClick={() => toggleFaq(1)}
                className="w-full p-5 text-left flex justify-between items-center font-bold text-slate-100 hover:text-white cursor-pointer"
              >
                <span className="text-sm md:text-base">Do I need a paid WhatsApp Business API?</span>
                {faqOpen[1] ? <ChevronUp className="w-4 h-4 text-emerald-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
              </button>
              {faqOpen[1] && (
                <div className="px-5 pb-5 text-xs md:text-sm text-slate-400 border-t border-white/[0.03] pt-3 leading-relaxed">
                  No. WhatsACP utilizes standard Web linked device sessions, meaning you do not need official Meta Business accounts, developer approval, or monthly message billing fees.
                </div>
              )}
            </div>

            {/* Q3 */}
            <div className="bg-slate-900/40 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300">
              <button 
                onClick={() => toggleFaq(2)}
                className="w-full p-5 text-left flex justify-between items-center font-bold text-slate-100 hover:text-white cursor-pointer"
              >
                <span className="text-sm md:text-base">Where is my data stored?</span>
                {faqOpen[2] ? <ChevronUp className="w-4 h-4 text-emerald-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
              </button>
              {faqOpen[2] && (
                <div className="px-5 pb-5 text-xs md:text-sm text-slate-400 border-t border-white/[0.03] pt-3 leading-relaxed">
                  All synchronization data, including project statuses, crew assignments, and pinned documents, is saved in your own private Supabase database. Your local credentials and local server files stay entirely on your host environment.
                </div>
              )}
            </div>

            {/* Q4 */}
            <div className="bg-slate-900/40 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300">
              <button 
                onClick={() => toggleFaq(3)}
                className="w-full p-5 text-left flex justify-between items-center font-bold text-slate-100 hover:text-white cursor-pointer"
              >
                <span className="text-sm md:text-base">How does the Crew Roster feature help my team?</span>
                {faqOpen[3] ? <ChevronUp className="w-4 h-4 text-emerald-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
              </button>
              {faqOpen[3] && (
                <div className="px-5 pb-5 text-xs md:text-sm text-slate-400 border-t border-white/[0.03] pt-3 leading-relaxed">
                  Instead of tracking photographer and cinematographer assignments on external excel sheets, you can append crew members directly to each group pipeline inside the workspace. The roster updates in real-time and remains visible side-by-side with your client chat inbox.
                </div>
              )}
            </div>

            {/* Q5 */}
            <div className="bg-slate-900/40 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300">
              <button 
                onClick={() => toggleFaq(4)}
                className="w-full p-5 text-left flex justify-between items-center font-bold text-slate-100 hover:text-white cursor-pointer"
              >
                <span className="text-sm md:text-base">Can multiple managers use this dashboard?</span>
                {faqOpen[4] ? <ChevronUp className="w-4 h-4 text-emerald-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
              </button>
              {faqOpen[4] && (
                <div className="px-5 pb-5 text-xs md:text-sm text-slate-400 border-t border-white/[0.03] pt-3 leading-relaxed">
                  Yes. Once the main host scans the QR code and activates the Node backend on your local server/server-hosting platform, any team member logged into the Next.js frontend can read chats, update pipelines, and manage rosters from any computer browser.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Final CTA Area */}
        <div className="mt-32 w-full max-w-5xl rounded-3xl bg-gradient-to-r from-emerald-500/20 to-teal-500/10 border border-emerald-500/20 p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_70%)]" />
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight relative z-10">
            Optimize your photography pipeline today
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-4 max-w-lg mx-auto relative z-10 font-semibold leading-relaxed font-sans">
            Scan your WhatsApp code, configure event pipelines, and run Akash Camera Production workflows efficiently.
          </p>
          <div className="mt-10 relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white px-8 py-4 rounded-2xl font-bold text-base shadow-xl shadow-emerald-500/25 transition-all hover:-translate-y-0.5">
              Create Free Account
            </Link>
            <Link href="/login" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold text-base transition-colors">
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
