import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-asby-dark border-r border-white/10 z-50 flex flex-col text-white">
      
      {/* USER PROFILE BOTTOM */}
      <div className="p-4 border-t border-white/10">
        <div className="h-20 flex items-center gap-3 px-6 border-b border-white/10">
            <div className="w-10 h-10 rounded-full bg-asby-gold flex items-center justify-center text-asby-dark font-bold text-xs">A</div>
            <div>
                <p className="text-sm font-bold py-1">[nama]</p>
                <p className="text-[12px] text-gray-400">Admin</p>
            </div>
        </div>
      </div>
      

      {/* MENU LINKS */}
      <nav className="flex-1 py-2 px-4 flex flex-col gap-2">
        <MenuItem href="/admin" icon="📊" text="Dashboard" active />
        <MenuItem href="#" icon="⚙️" text="Settings" />
      </nav>

      {/* LOGO AREA */}
      <div className="h-20 flex items-center gap-3 px-6 border-b border-white/10">
        <div className="w-8 h-8 rounded-full flex items-center justify-center transition-transform overflow-hidden relative group-hover:rotate-12 bg-white shadow-lg">
          <img 
              src="/img/Nirvana_2026.png" 
              alt="Logo" 
              className="w-full h-full object-cover rounded-full" 
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