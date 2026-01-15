"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function AdminSidebar() {
  const [adminName, setAdminName] = useState("Admin");

  // Ambil nama user dari Login
  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) setAdminName(storedName);
  }, []);

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-asby-dark border-r border-white/10 z-50 flex flex-col text-white">
      
      {/* USER PROFILE (Top) */}
      <div className="p-4 border-b border-white/10">
        <div className="h-16 flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-full bg-asby-gold flex items-center justify-center text-asby-dark font-bold text-xs">
                {adminName.charAt(0).toUpperCase()}
            </div>
            <div>
                <p className="text-sm font-bold py-1">{adminName}</p>
                <p className="text-[12px] text-gray-400">Admin</p>
            </div>
        </div>
      </div>
      

      {/* MENU LINKS (Middle) */}
      <nav className="flex-1 py-6 px-4 flex flex-col gap-2">
        <MenuItem href="/admin" icon="📊" text="Dashboard" active />
      </nav>


      {/* --- TOMBOL BARU: BACK TO PLATFORM --- */}
      {/* Ini tombol buat Admin keluar dari dashboard balik ke mode user biasa */}
      <div className="px-4 pb-4">
        <Link 
            href="/" 
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 text-gray-400 hover:bg-asby-teal hover:text-white hover:shadow-lg hover:shadow-asby-teal/20 transition-all group border border-white/5"
        >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span className="text-xs font-bold uppercase tracking-widest">Back to Platform</span>
        </Link>
      </div>


      {/* LOGO AREA (Bottom) */}
      <div className="h-20 flex items-center gap-3 px-6 border-t border-white/10 bg-asby-dark/50">
        <div className="w-8 h-8 rounded-full flex items-center justify-center transition-transform overflow-hidden relative group-hover:rotate-12 bg-white shadow-lg">
          <img 
              src="/img/Nirvana_2026.png" 
              alt="Logo" 
              className="w-full h-full object-cover" 
            />
        </div>
        <div>
            <h1 className="font-bold text-lg tracking-tight">Nirvana</h1>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest">Management</p>
        </div>
      </div>

    </aside>
  );
}

function MenuItem({ href, icon, text, active = false }: any) {
    return (
        <Link 
            href={href} 
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                active 
                ? "bg-asby-teal text-white shadow-lg shadow-asby-teal/20" 
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
        >
            <span className="text-lg">{icon}</span>
            {text}
        </Link>
    )
}