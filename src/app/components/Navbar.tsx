"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          
          {/* CONTAINER LOGO - HANYA SHADOW BIASA, TIDAK ADA GLOW */}
          <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform overflow-hidden relative group-hover:rotate-12 bg-white">
            <img 
              src="/img/nirvana.png" 
              alt="Logo" 
              className="w-full h-full object-cover" 
            />
          </div>

          <div className="flex flex-col">
            {/* Teks Selalu Gelap */}
            <span className="text-lg font-extrabold tracking-tight leading-none text-asby-dark">
              Nirvana Ground
            </span>
            <span className="text-[12px] font-bold uppercase tracking-widest text-asby-teal/80">
              LMS
            </span>
          </div>
        </Link>

        {/* PROFILE KANAN */}
        <div className="flex items-center gap-4 z-20">
            <div className="flex items-center gap-3 pl-4"> 
                <div className="text-right hidden sm:block text-asby-dark">
                    <p className="text-xs font-bold opacity-60">Welcome back,</p>
                    <p className="text-sm font-extrabold leading-none">Atria C.</p>
                </div>
                {/* Avatar juga shadow biasa */}
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