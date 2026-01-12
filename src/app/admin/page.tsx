"use client";

import { useState } from "react";
import AdminSidebar from "../components/admin/AdminSideBar";

// --- DUMMY DATA USER (TETAP SAMA) ---
const usersData = [
  { id: 1, name: "Sarah Johnson", role: "LCVP Marketing", dept: "Marketing", progress: 92, status: "Active", lastActive: "2 mins ago" },
  { id: 2, name: "Michael Chen", role: "Member", dept: "Finance", progress: 45, status: "Offline", lastActive: "2 days ago" },
  { id: 3, name: "Ahmad Rizky", role: "Team Leader", dept: "Talent Management", progress: 78, status: "Active", lastActive: "1 hour ago" },
  { id: 4, name: "Jessica Wong", role: "Member", dept: "Marketing", progress: 12, status: "Inactive", lastActive: "1 week ago" },
  { id: 5, name: "David Miller", role: "LCVP Finance", dept: "Finance", progress: 100, status: "Completed", lastActive: "5 hours ago" },
  { id: 6, name: "Putri Ayu", role: "Member", dept: "Talent Management", progress: 60, status: "Active", lastActive: "10 mins ago" },
];

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = usersData.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.dept.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-asby-dark pl-64">
      
      <AdminSidebar />

      {/* HEADER */}
      <header className="h-20 bg-white border-b border-gray-200 px-8 flex items-center justify-between sticky top-0 z-30">
        <div>
            <h2 className="text-2xl font-extrabold text-asby-dark">Dashboard Overview</h2>
            <p className="text-xs text-gray-500">Welcome back, monitoring Members progress.</p>
        </div>
        <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 relative transition-colors">
                🔔
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
        </div>
      </header>

      {/* CONTENT AREA */}
      <main className="p-8">
        
        {/* 1. STATS CARDS (Updated: Colorful & Distinct) */}
        {/* Kita tambahkan props 'variant' untuk menentukan warnanya */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <StatCard 
                title="Total Members" 
                value="124" 
                icon="👥" 
                variant="blue" // Warna Biru
            />
            <StatCard 
                title="Avg. Completion" 
                value="68%" 
                icon="📈" 
                variant="teal" // Warna Teal (Khas AIESEC)
            />
            <StatCard 
                title="Need Attention" 
                value="12" 
                icon="⚠️" 
                variant="red" // Warna Merah (Warning)
            />
            <StatCard 
                title="Completed" 
                value="18" 
                icon="🎓" 
                variant="gold" // Warna Emas/Kuning
            />
        </div>

        {/* 2. TABEL MONITORING (TETAP SAMA) */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-xl shadow-gray-200/50 overflow-hidden">
            {/* ... (Isi tabel sama seperti kode sebelumnya, saya singkat biar fokus ke Card) ... */}
            <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                <h3 className="text-lg font-extrabold text-asby-dark">Member Progress</h3>
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="Search member or dept..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2.5 bg-gray-50 border-gray-200 rounded-xl text-sm w-64 focus:outline-none focus:ring-2 focus:ring-asby-teal/20 focus:border-asby-teal transition-all"
                    />
                    <span className="absolute left-3 top-3 text-gray-400 text-xs">🔍</span>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50/50 text-xs uppercase text-gray-400 font-bold tracking-wider">
                        <tr>
                            <th className="px-6 py-4">Name / Role</th>
                            <th className="px-6 py-4">Department</th>
                            <th className="px-6 py-4">Course Progress</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                        {filteredUsers.map((user) => (
                            <tr key={user.id} className="group hover:bg-blue-50/30 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center font-bold text-gray-600 text-xs">
                                            {user.name.substring(0,2).toUpperCase()}
                                        </div>
                                        <div>
                                            <p className="font-bold text-asby-dark">{user.name}</p>
                                            <p className="text-xs text-gray-500">{user.role}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-600 font-medium">{user.dept}</td>
                                <td className="px-6 py-4 w-1/4">
                                    <div className="flex justify-between text-xs font-bold mb-1">
                                        <span className={user.progress === 100 ? "text-green-600" : "text-gray-500"}>{user.progress}%</span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div 
                                            className={`h-full rounded-full transition-all duration-1000 ${
                                                user.progress === 100 ? 'bg-green-500' : 
                                                user.progress < 30 ? 'bg-red-400' : 'bg-asby-gold'
                                            }`} 
                                            style={{ width: `${user.progress}%` }}
                                        ></div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border ${
                                        user.status === 'Active' ? 'bg-green-50 text-green-700 border-green-200' :
                                        user.status === 'Completed' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                                        user.status === 'Offline' ? 'bg-gray-100 text-gray-500 border-gray-200' :
                                        'bg-red-50 text-red-600 border-red-200'
                                    }`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${
                                            user.status === 'Active' ? 'bg-green-500 animate-pulse' : 
                                            user.status === 'Completed' ? 'bg-blue-500' : 'bg-gray-400'
                                        }`}></span>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-gray-400 hover:text-asby-dark transition-colors font-bold text-xl">•••</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      </main>
    </div>
  );
}

// --- SUB-COMPONENT: STAT CARD YANG BARU & KEREN ---

// Definisi warna-arni untuk setiap varian
const cardVariants: any = {
    blue: {
        wrapper: "bg-gradient-to-br from-blue-50/80 to-white border-blue-200 shadow-blue-200/50",
        iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-blue-500/30",
        textMain: "text-blue-900",
        textSub: "text-blue-600/70"
    },
    teal: {
        wrapper: "bg-gradient-to-br from-teal-50/80 to-white border-teal-200 shadow-teal-200/50",
        iconBg: "bg-gradient-to-br from-asby-teal to-teal-600 text-white shadow-teal-500/30",
        textMain: "text-teal-900",
        textSub: "text-teal-700/70"
    },
    red: {
        wrapper: "bg-gradient-to-br from-red-50/80 to-white border-red-200 shadow-red-200/50",
        iconBg: "bg-gradient-to-br from-red-500 to-rose-600 text-white shadow-red-500/30",
        textMain: "text-red-900",
        textSub: "text-red-600/70"
    },
    gold: {
        wrapper: "bg-gradient-to-br from-amber-50/80 to-white border-amber-200 shadow-amber-200/50",
        iconBg: "bg-gradient-to-br from-asby-gold to-amber-500 text-asby-dark shadow-amber-500/30",
        textMain: "text-amber-900",
        textSub: "text-amber-700/70"
    }
};

function StatCard({ title, value, icon, variant = "blue" }: any) {
    const theme = cardVariants[variant];

    return (
        // Wrapper Card: Lebih rounded, ada border tipis berwarna, dan shadow berwarna
        <div className={`relative overflow-hidden p-6 rounded-[2rem] border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${theme.wrapper}`}>
            
            {/* Dekorasi Background (Ikon pudar besar di pojok) */}
            <div className={`absolute -right-6 -bottom-6 text-[6rem] opacity-5 select-none pointer-events-none ${theme.textMain}`}>
                {icon}
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between">
                {/* Bagian Atas: Ikon Saja (Tag trend sudah dihapus) */}
                <div className="mb-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-lg ${theme.iconBg}`}>
                        {icon}
                    </div>
                </div>
                
                {/* Bagian Bawah: Teks */}
                <div>
                    <h4 className={`text-sm font-bold uppercase tracking-widest mb-1 ${theme.textSub}`}>
                        {title}
                    </h4>
                    {/* Angka lebih besar dan tebal */}
                    <p className={`text-4xl font-black tracking-tight ${theme.textMain}`}>
                        {value}
                    </p>
                </div>
            </div>
        </div>
    )
}