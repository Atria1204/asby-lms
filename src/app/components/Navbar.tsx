"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // LOGIC BARU:
  // Cek apakah kita sedang di halaman yang Header-nya Gelap (seperti /courses/...)
  const isDarkHeroPage = pathname.startsWith("/courses/");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // LOGIC WARNA TEKS:
  // 1. Kalau Discroll -> Selalu Gelap (karena background jadi putih kaca)
  // 2. Kalau di Atas & Halaman Course -> PUTIH (biar kelihatan di bg gelap)
  // 3. Kalau di Atas & Halaman Home -> GELAP (karena bg home putih/terang)
  const textColorClass = isScrolled 
    ? "text-asby-dark" 
    : isDarkHeroPage 
      ? "text-white" 
      : "text-asby-dark";

  // Warna sub-teks (LMS)
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
        
        {/* LOGO KIRI */}
        <Link href="/" className="flex items-center gap-3 group z-20">
          
          {/* Logo Image */}
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform overflow-hidden relative group-hover:rotate-12 bg-white ${
              // Kasih shadow kalau di background putih, biar logo pop-up
              isScrolled || !isDarkHeroPage ? "shadow-lg" : "shadow-none"
          }`}>
            <img 
              src="/img/nirvana.png" 
              alt="Logo" 
              className="w-full h-full object-cover" 
            />
          </div>

          <div className="flex flex-col">
            {/* Teks Utama */}
            <span className={`text-lg font-extrabold tracking-tight leading-none transition-colors ${textColorClass}`}>
              Nirvana Ground
            </span>
            {/* Sub Teks */}
            <span className={`text-[12px] font-bold uppercase tracking-widest transition-colors ${subTextColorClass}`}>
              LMS
            </span>
          </div>
        </Link>

        {/* PROFILE KANAN */}
        <div className="flex items-center gap-4 z-20">
            <div className="flex items-center gap-3 pl-4"> 
                {/* Teks Profile */}
                <div className={`text-right hidden sm:block transition-colors ${textColorClass}`}>
                    <p className={`text-xs font-bold ${isScrolled || !isDarkHeroPage ? "opacity-60" : "opacity-80"}`}>Welcome back,</p>
                    <p className="text-sm font-extrabold leading-none">Atria C.</p>
                </div>
                
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full border-2 border-asby-gold p-0.5 cursor-pointer hover:scale-105 transition shadow-md overflow-hidden bg-white">
                    <img 
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Atria" 
                        alt="User" 
                        className="w-full h-full bg-white rounded-full object-cover" 
                    />
                </div>
            </div>
        </div>

      </div>
    </nav>
  );
}