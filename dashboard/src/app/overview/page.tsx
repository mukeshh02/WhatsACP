import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { Activity, Users, MessageCircle, BarChart3, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default async function Home() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  let count = 0;
  try {
    const { count: fetchedCount, error } = await supabase.from('projects').select('*', { count: 'exact', head: true });
    if (!error && fetchedCount !== null) {
      count = fetchedCount;
    }
  } catch (err) {
    console.warn("Failed to fetch projects count from Supabase:", err);
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-slate-100 tracking-tight">Welcome back, Akash 👋</h1>
        <p className="text-gray-500 dark:text-slate-400 mt-2 font-medium">Here is what's happening with your WhatsApp CRM today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
         {/* Stats Cards */}
         <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800/80 flex flex-col justify-between hover:shadow-md transition-all duration-200">
            <div className="flex justify-between items-start">
               <p className="text-sm text-gray-500 dark:text-slate-400 font-semibold uppercase tracking-wider">Total Groups</p>
               <div className="p-2 bg-blue-50 dark:bg-blue-950/30 rounded-lg"><Users className="w-5 h-5 text-blue-600 dark:text-blue-400" /></div>
            </div>
            <p className="text-4xl font-black text-gray-800 dark:text-slate-100 mt-4">{count || 0}</p>
         </div>

         <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800/80 flex flex-col justify-between hover:shadow-md transition-all duration-200">
            <div className="flex justify-between items-start">
               <p className="text-sm text-gray-500 dark:text-slate-400 font-semibold uppercase tracking-wider">Active Devices</p>
               <div className="p-2 bg-green-50 dark:bg-green-950/30 rounded-lg"><Activity className="w-5 h-5 text-green-600 dark:text-green-400" /></div>
            </div>
            <div className="flex items-end gap-2 mt-4">
               <p className="text-4xl font-black text-gray-800 dark:text-slate-100">1</p>
               <span className="text-sm text-green-500 dark:text-green-400 font-medium mb-1">Online</span>
            </div>
         </div>

         <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800/80 flex flex-col justify-between hover:shadow-md transition-all duration-200 opacity-60">
            <div className="flex justify-between items-start">
               <p className="text-sm text-gray-500 dark:text-slate-400 font-semibold uppercase tracking-wider">Auto-Replies</p>
               <div className="p-2 bg-purple-50 dark:bg-purple-950/30 rounded-lg"><MessageCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" /></div>
            </div>
            <p className="text-4xl font-black text-gray-800 dark:text-slate-100 mt-4">N/A</p>
         </div>

         <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800/80 flex flex-col justify-between hover:shadow-md transition-all duration-200">
            <div className="flex justify-between items-start">
               <p className="text-sm text-gray-500 dark:text-slate-400 font-semibold uppercase tracking-wider">Efficiency</p>
               <div className="p-2 bg-orange-50 dark:bg-orange-950/30 rounded-lg"><BarChart3 className="w-5 h-5 text-orange-600 dark:text-orange-400" /></div>
            </div>
            <p className="text-4xl font-black text-gray-800 dark:text-slate-100 mt-4">98%</p>
         </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl p-10 border border-gray-100 dark:border-slate-800/80 shadow-sm text-center py-20 mt-8 bg-gradient-to-br from-white to-blue-50/50 dark:from-slate-900 dark:to-blue-950/20 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
         <h2 className="text-2xl font-bold text-gray-800 dark:text-slate-100 mb-3">Ready to automate your workflow?</h2>
         <p className="text-gray-500 dark:text-slate-400 max-w-md mx-auto mb-8 font-medium">Head over to the WhatsApp Connect page to link your device and start fetching groups in real-time securely from your browser.</p>
         <Link href="/whatsapp" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold shadow-md transition hover:-translate-y-0.5 active:translate-y-0">
            Go to WhatsApp Connect <ArrowRight className="w-4 h-4" />
         </Link>
      </div>
    </div>
  )
}
