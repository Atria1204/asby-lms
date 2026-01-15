"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  
  // STATE BARU: Untuk Nama & Dropdown
  const [userName, setUserName] = useState("Atria C."); // Default fallback
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const isDarkHeroPage = pathname.startsWith("/courses/");

  useEffect(() => {
    // 1. Scroll Handler (LOGIC LAMA)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    // 2. Cek Role & Nama (LOGIC BARU)
    const role = localStorage.getItem("userRole");
    const storedName = localStorage.getItem("userName");
    
    if (role === "admin") setIsAdmin(true);
    if (storedName) setUserName(storedName);

    // 3. Close Dropdown kalau klik di luar (LOGIC BARU)
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // FUNGSI LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("userName");
    router.push("/login");
  };

  // LOGIC WARNA TEKS (TETAP SAMA)
  const textColorClass = isScrolled 
    ? "text-asby-dark" 
    : isDarkHeroPage 
      ? "text-white" 
      : "text-asby-dark";

  const subTextColorClass = isScrolled
    ? "text-asby-teal"
    : isDarkHeroPage
      ? "text-blue-200"
      : "text-asby-teal/80";

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 font-sans ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="w-full px-6 lg:px-12 relative flex justify-between items-center h-14">
        
        {/* LOGO KIRI (TETAP SAMA) */}
        <Link href="/" className="flex items-center gap-3 group z-20">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-transform overflow-hidden relative group-hover:rotate-12 bg-white ${
              isScrolled || !isDarkHeroPage ? "shadow-lg" : "shadow-none"
          }`}>
            <img 
              src="/img/Nirvana_2026.png" 
              alt="Logo" 
              className="w-full h-full object-cover" 
            />
          </div>

          <div className="flex flex-col">
            <span className={`text-lg font-extrabold tracking-tight leading-none transition-colors ${textColorClass}`}>
              Nirvana
            </span>
            <span className={`text-[12px] font-bold uppercase tracking-widest transition-colors ${subTextColorClass}`}>
              LMS
            </span>
          </div>
        </Link>

        {/* PROFILE KANAN */}
        <div className="flex items-center gap-6 z-20">
            
            {/* 1. TOMBOL ADMIN (Hanya Muncul Jika Admin) */}
            {isAdmin && (
                <Link 
                    href="/admin"
                    className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-asby-gold/20 border border-asby-gold/50 text-asby-gold text-xs font-bold uppercase tracking-wider hover:bg-asby-gold hover:text-asby-dark transition-all shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_20px_rgba(255,215,0,0.6)] animate-pulse"
                >
                    <span>⚡ Admin Dashboard</span>
                </Link>
            )}

            {/* 2. PROFILE & DROPDOWN WRAPPER */}
            <div className="relative" ref={dropdownRef}>
                
                {/* TRIGGER BUTTON (Profile Area) */}
                <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-3 pl-4 focus:outline-none group"
                > 
                    {/* Teks Profile */}
                    <div className={`text-right hidden sm:block transition-colors ${textColorClass}`}>
                        <p className={`text-xs font-bold ${isScrolled || !isDarkHeroPage ? "opacity-60" : "opacity-80"}`}>Welcome back,</p>
                        <p className="text-sm font-extrabold leading-none truncate max-w-[150px]">
                            {userName}
                        </p>
                    </div>
                    
                    {/* Avatar */}
                    <div className={`w-10 h-10 rounded-full border-2 p-0.5 transition shadow-md overflow-hidden bg-white ${
                        isDropdownOpen ? "border-asby-teal ring-4 ring-asby-teal/20" : "border-asby-gold group-hover:scale-105"
                    }`}>
                        <img 
                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userName}`} 
                            alt="User" 
                            className="w-full h-full bg-white rounded-full object-cover" 
                        />
                    </div>
                </button>

                {/* --- MENU DROPDOWN (BARU) --- */}
                {isDropdownOpen && (
                    <div className="absolute right-0 top-full mt-4 w-60 bg-white rounded-2xl shadow-2xl shadow-blue-900/10 border border-gray-100 overflow-hidden transform origin-top-right transition-all animate-fade-in-up">
                        
                        {/* Info Header */}
                        <div className="p-4 border-b border-gray-100 bg-gray-50/50">
                            <p className="text-sm font-bold text-asby-dark truncate">{userName}</p>
                            <p className="text-xs text-gray-500 font-medium">
                                {isAdmin ? " Admin" : "AIESEC Member"}
                            </p>
                        </div>

                        {/* Logout Button */}
                        <div className="p-2">
                            <button 
                                onClick={handleLogout}
                                className="w-full flex items-center gap-3 px-3 py-2 text-sm font-bold text-red-500 rounded-xl hover:bg-red-50 transition-colors text-left"
                            >
                                <span>🚪</span> Sign Out
                            </button>
                        </div>

                    </div>
                )}
            </div>
        </div>

      </div>
    </nav>
  );
}