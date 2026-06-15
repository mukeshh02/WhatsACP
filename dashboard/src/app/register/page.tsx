"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase/client";
import { MessageSquare, Mail, Lock, User, Loader2, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    try {
      // 1. Try Supabase Auth Signup
      let supabaseError = null;
      try {
        if (process.env.NEXT_PUBLIC_SUPABASE_URL?.includes("placeholder")) {
          throw new Error("Supabase is using placeholder URL, bypassing fetch.");
        }
        
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: name,
            },
          },
        });
        if (error) {
          supabaseError = error;
        } else if (data.user) {
          toast.success("Successfully registered! Please sign in.");
          router.push("/login");
          return;
        }
      } catch (err: any) {
        supabaseError = err;
      }

      // 2. If Supabase fails, or isn't fully configured/linked, fallback to a local mock session
      console.warn("Supabase signup failed or not configured, falling back to local registration:", supabaseError);
      
      // Save local mock session
      localStorage.setItem(
        "whatsacp_session",
        JSON.stringify({
          email: email,
          name: name,
          role: "admin",
          createdAt: new Date().toISOString(),
        })
      );
      
      toast.success("Registered and logged in via offline fallback!");
      router.replace("/overview");
    } catch (err: any) {
      toast.error(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      if (process.env.NEXT_PUBLIC_SUPABASE_URL?.includes("placeholder")) {
        throw new Error("Supabase is using placeholder URL, Google Sign-In is unavailable.");
      }

      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (error) {
        throw error;
      }
    } catch (err: any) {
      toast.error(err.message || "Failed to initialize Google Sign-In");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#0b0f19] text-slate-100 font-sans flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Main glass card */}
      <div className="w-full max-w-md bg-white/[0.02] border border-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-500">
        
        {/* Brand logo */}
        <div className="flex flex-col items-center mb-8">
          <Link href="/" className="flex items-center gap-2.5 mb-2 group">
            <div className="bg-gradient-to-br from-indigo-500 to-violet-600 text-white p-2.5 rounded-xl shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <MessageSquare className="w-6 h-6" />
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-white">WhatsACP</span>
          </Link>
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mt-1">Akash Camera Production</p>
        </div>

        <h2 className="text-2xl font-bold text-center text-white mb-6">Create Account</h2>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Full Name field */}
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Full Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-slate-500" />
              </div>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full pl-11 pr-4 py-3 bg-white/[0.03] border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all font-medium text-sm"
                placeholder="Akash Kumar"
              />
            </div>
          </div>

          {/* Email field */}
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-slate-500" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-11 pr-4 py-3 bg-white/[0.03] border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all font-medium text-sm"
                placeholder="akash@example.com"
              />
            </div>
          </div>

          {/* Password field */}
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-slate-500" />
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-11 pr-4 py-3 bg-white/[0.03] border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all font-medium text-sm"
                placeholder="•••••••• (min 6 chars)"
              />
            </div>
          </div>

          {/* Confirm Password field */}
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Confirm Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-slate-500" />
              </div>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="block w-full pl-11 pr-4 py-3 bg-white/[0.03] border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all font-medium text-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 text-white py-3.5 rounded-2xl font-bold text-sm shadow-lg shadow-indigo-500/15 hover:shadow-indigo-500/25 transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none cursor-pointer mt-4"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Creating Account...
              </>
            ) : (
              <>
                Register Account <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px bg-white/10 flex-1"></div>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Or</span>
          <div className="h-px bg-white/10 flex-1"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full inline-flex items-center justify-center gap-3 bg-white text-slate-900 hover:bg-slate-100 py-4 px-6 rounded-2xl font-bold text-sm shadow-lg shadow-white/5 hover:shadow-white/10 transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none cursor-pointer border border-slate-200"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Sign In with Google
        </button>

        {/* Login link */}
        <div className="mt-8 text-center text-sm text-slate-400 font-medium">
          Already have an account?{" "}
          <Link href="/login" className="text-indigo-400 font-bold hover:underline transition-colors">
            Sign in here
          </Link>
        </div>

      </div>
    </div>
  );
}
