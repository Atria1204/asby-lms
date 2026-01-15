"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  
  // --- TAMBAHAN BARU: STATE DEPARTEMEN & ROLE ---
  const [department, setDepartment] = useState("");
  const [position, setPosition] = useState(""); 
  // ----------------------------------------------

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      // 1. Ambil Nama dari Email
      let nameFromEmail = email.split("@")[0];
      if (nameFromEmail) {
          nameFromEmail = nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1);
      } else {
          nameFromEmail = "AIESECer"; 
      }

      // 2. LOGIC ROLE & PENYIMPANAN
      if (email === "admin@aiesec.net") {
          // KHUSUS ADMIN
          localStorage.setItem("userRole", "admin");
          localStorage.setItem("userName", "Admin LCP");
          // Default data admin
          localStorage.setItem("userDept", "EB"); 
          localStorage.setItem("userPos", "LCP");
      } else {
          // USER BIASA
          localStorage.setItem("userRole", "member");
          localStorage.setItem("userName", nameFromEmail); 
          
          // 🔥 LOGIC BARU: SIMPAN DEPT & POSISI JIKA SIGN UP
          if (isSignUp) {
             localStorage.setItem("userDept", department || "Member");
             localStorage.setItem("userPos", position || "Newie");
          }
      }
      
      // 3. REDIRECT
      if (!isSignUp) {
          window.location.href = "/";
      } else {
          alert("Account created! Redirecting...");
          window.location.href = "/";
      }
    }, 1500);
  };

  return (
    <div className="h-screen flex w-full font-sans overflow-hidden bg-white">
      
      {/* === BAGIAN KIRI: BRANDING (TETAP SAMA) === */}
      <div className="hidden lg:flex w-1/2 relative flex-col justify-between p-16 text-white overflow-hidden bg-asby-dark transition-all duration-500">
        
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-asby-teal/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[15%] left-[-20%] w-[600px] h-[600px] bg-asby-gold/20 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 opacity-[0.05] z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

        <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="flex items-center gap-3 animate-fade-in-down">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform overflow-hidden relative group-hover:rotate-12 bg-white">
                <img src="/img/Nirvana_2026.png" alt="Logo" className="w-full h-full object-cover"  />
                </div>
                <div className="flex flex-col">
                    <span className="text-xl font-black tracking-tight leading-none">Nirvana</span>
                    <span className="text-[10px] tracking-[0.3em] font-bold text-gray-400 uppercase">LMS</span>
                </div>
            </div>

            <div className="max-w-lg animate-fade-in-up delay-100">
                <div className="min-h-[200px] flex flex-col justify-center">
                    <h1 
                        key={isSignUp ? "signup-mode" : "signin-mode"}
                        className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tight animate-fade-in-up"
                    >
                        {isSignUp ? (
                            <>
                                Start Your <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-asby-teal via-yellow-200 to-asby-gold">Golden Journey</span> <br/>
                                Here.
                            </>
                        ) : (
                            <>
                                Where <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-asby-teal via-yellow-200 to-asby-gold">Future Leaders</span> <br/>
                                Are Made.
                            </>
                        )}
                    </h1>
                </div>
                <p className="mt-6 text-lg text-blue-200/70 leading-relaxed font-light border-l-2 border-asby-gold pl-6 transition-all duration-500">
                    "Leadership is not about being in charge. It is about taking care of those in your charge."
                </p>
            </div>

            <div className="animate-fade-in-up delay-200">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md w-fit hover:border-asby-gold/30 transition-all cursor-default">
                    <div className="flex -space-x-3">
                        <div className="w-10 h-10 rounded-full border-2 border-asby-dark bg-gray-300 bg-[url('https://i.pravatar.cc/100?img=33')] bg-cover"></div>
                        <div className="w-10 h-10 rounded-full border-2 border-asby-dark bg-gray-300 bg-[url('https://i.pravatar.cc/100?img=47')] bg-cover"></div>
                        <div className="w-10 h-10 rounded-full border-2 border-asby-dark bg-gray-300 bg-[url('https://i.pravatar.cc/100?img=12')] bg-cover"></div>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-white flex items-center gap-1">120+ Members <span className="text-xs">🚀</span></p>
                        <p className="text-[10px] text-asby-gold font-bold uppercase tracking-wider">Active Learners</p>
                    </div>
                </div>
            </div>
        </div>
      </div>


      {/* === BAGIAN KANAN: FORM === */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-white relative overflow-y-auto">
         
         <div className="w-full max-w-[420px] z-10 py-10">
            
            {/* Header Form */}
            <div className="mb-8 text-center lg:text-left animate-fade-in-up">
                <h2 className="text-3xl font-black text-asby-dark mb-2 tracking-tight transition-all">
                    {isSignUp ? "Create Account" : "Welcome!"}
                </h2>
                <p className="text-gray-500">
                    {isSignUp ? "Join the movement and unlock your potential." : "Enter your credentials to continue your growth journey."}
                </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-2 animate-fade-in-up delay-100">
                
                {/* Input Nama (Sign Up Only) */}
                {isSignUp && (
                    <div className="space-y-1 animate-fade-in-down">
                        <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Full Name</label>
                        <div className="relative group">
                            <input 
                                type="text" 
                                required={isSignUp}
                                placeholder="John Doe"
                                className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-asby-dark font-medium placeholder-gray-400 focus:bg-white focus:border-asby-gold focus:ring-4 focus:ring-asby-gold/10 outline-none transition-all duration-300"
                            />
                            <div className="absolute right-4 top-3.5 text-gray-400">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            </div>
                        </div>
                    </div>
                )}

                {/* 🔥 FITUR BARU: DEPARTMENT (DROPDOWN) & ROLE (INPUT) 🔥 */}
                {isSignUp && (
                    <div className="grid grid-cols-2 gap-3 animate-fade-in-down delay-75">
                        
                        {/* 1. Department (DROPDOWN) */}
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Department</label>
                            <div className="relative">
                                <select 
                                    required={isSignUp}
                                    value={department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-asby-dark font-medium focus:bg-white focus:border-asby-gold focus:ring-4 focus:ring-asby-gold/10 outline-none transition-all duration-300 appearance-none cursor-pointer"
                                >
                                    <option value="" disabled>Select Dept</option>
                                    <option value="TM">Talent Management</option>
                                    <option value="BD">Business Development</option>
                                    <option value="ER">External Relations</option>
                                    <option value="BM">Brand Marketing</option>
                                    <option value="EWA">Engagement With AIESEC</option>
                                    <option value="OGTa/e">Outgoing Global Talent/Teacher</option>
                                    <option value="OGV">Outgoing Global Volunteer</option>
                                    <option value="IGV">Incoming Global Volunteer</option>
                                </select>
                                {/* Icon Panah */}
                                <div className="absolute right-3 top-4 pointer-events-none text-gray-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                </div>
                            </div>
                        </div>

                        {/* 2. Role / Position (INPUT TEXT BIASA) */}
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Role</label>
                            <div className="relative group">
                                <input 
                                    type="text" 
                                    required={isSignUp}
                                    value={position}
                                    onChange={(e) => setPosition(e.target.value)}
                                    placeholder="e.g. Team Member"
                                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-asby-dark font-medium placeholder-gray-400 focus:bg-white focus:border-asby-gold focus:ring-4 focus:ring-asby-gold/10 outline-none transition-all duration-300"
                                />
                            </div>
                        </div>
                        
                    </div>
                )}
                {/* ---------------------------------------------------- */}

                {/* Email */}
                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Email</label>
                    <div className="relative group">
                        <input 
                            type="email" 
                            required
                            placeholder="yourname@aiesec.net" onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-asby-dark font-medium placeholder-gray-400 focus:bg-white focus:border-asby-gold focus:ring-4 focus:ring-asby-gold/10 outline-none transition-all duration-300"
                        />
                        <div className="absolute right-4 top-3.5 text-gray-400 group-focus-within:text-asby-gold transition-colors">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>
                        </div>
                    </div>
                </div>

                {/* Password */}
                <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                        <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Password</label>
                        {!isSignUp && (
                             <Link href="#" className="text-xs font-bold text-asby-gold hover:text-asby-dark transition-colors">Forgot Password?</Link>
                        )}
                    </div>
                    <div className="relative group">
                        <input 
                            type={showPassword ? "text" : "password"} 
                            required
                            placeholder="••••••••"
                            className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-asby-dark font-medium placeholder-gray-400 focus:bg-white focus:border-asby-gold focus:ring-4 focus:ring-asby-gold/10 outline-none transition-all duration-300"
                        />
                        <button 
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-3.5 text-gray-400 hover:text-asby-dark transition-colors"
                        >
                            {showPassword ? (
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Confirm Password */}
                {isSignUp && (
                    <div className="space-y-1.5 animate-fade-in-up">
                        <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Confirm Password</label>
                        <div className="relative group">
                            <input 
                                type="password" 
                                required={isSignUp}
                                placeholder="••••••••"
                                className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-asby-dark font-medium placeholder-gray-400 focus:bg-white focus:border-asby-gold focus:ring-4 focus:ring-asby-gold/10 outline-none transition-all duration-300"
                            />
                        </div>
                    </div>
                )}

                {/* Submit Button */}
                <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full relative group overflow-hidden bg-asby-dark text-white py-4 rounded-xl font-bold text-base shadow-xl shadow-asby-dark/20 hover:bg-gray-900 hover:shadow-asby-dark/40 hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed mt-4 border-b-4 border-transparent hover:border-asby-gold"
                >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                    <span className="relative flex items-center justify-center gap-2">
                        {isLoading ? (
                            <>
                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                {isSignUp ? "Creating Account..." : "Signing In..."}
                            </>
                        ) : (
                            isSignUp ? "Create Account" : "Sign In"
                        )}
                    </span>
                </button>

            </form>

            {/* Toggle Link */}
            <div className="mt-4 text-center animate-fade-in-up delay-200">
                <p className="text-gray-500 text-sm">
                    {isSignUp ? "Already have an account?" : "Don't have an account?"}
                    <button 
                        onClick={() => {
                            setIsSignUp(!isSignUp);
                        }}
                        className="ml-2 font-bold text-asby-gold cursor-pointer hover:underline hover:text-asby-dark transition-colors outline-none"
                    >
                        {isSignUp ? "Sign In" : "Sign Up"}
                    </button>
                </p>
            </div>

         </div>

         {/* Footer Copyright */}
         <div className="absolute bottom-1 text-center w-full text-[10px] text-gray-400 font-medium">
             © 2026 Nirvana LMS. All rights reserved.
         </div>

      </div>
    </div>
  );
}