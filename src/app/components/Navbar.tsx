// src/app/components/Navbar.tsx

export default function Navbar() {
  return (
    // 'sticky top-0 z-50' biar navbar nempel terus di atas pas di-scroll
    <nav className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      
      {/* 1. BAGIAN KIRI: LOGO */}
      <div className="flex items-center gap-2">
        <div className="bg-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold">
          A
        </div>
        <span className="text-xl font-bold text-gray-800 tracking-tight">ASBY LMS</span>
      </div>

      {/* 2. BAGIAN TENGAH: SEARCH BAR */}
      {/* 'hidden md:block' artinya disembunyiin di HP, muncul di layar laptop */}
      <div className="hidden md:block flex-1 max-w-md mx-8">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Cari materi pembelajaran..." 
            className="w-full bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          {/* Ikon search pura-pura */}
          <span className="absolute right-3 top-2.5 text-gray-400 text-xs">🔍</span>
        </div>
      </div>

      {/* 3. BAGIAN KANAN: MENU & PROFILE */}
      <div className="flex items-center gap-4">
        <button className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">My Learning</button>
        
        {/* Avatar Bulat */}
        <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden border border-gray-300 cursor-pointer">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
            alt="User" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </nav>
  );
}