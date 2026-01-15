"use client";

import { useState, useEffect } from "react";
import AdminSidebar from "../components/admin/AdminSideBar";

// --- DUMMY DATA USER (TETAP SAMA + field needAttention) ---
const initialUsersData = [
  { id: 1, name: "Sarah Johnson", role: "LCVP Marketing", dept: "Marketing", progress: 92, needAttention: false, lastActive: "2 mins ago" },
  { id: 2, name: "Michael Chen", role: "Member", dept: "Finance", progress: 45, needAttention: true, lastActive: "2 days ago" },
  { id: 3, name: "Ahmad Rizky", role: "Team Leader", dept: "Talent Management", progress: 78, needAttention: false, lastActive: "1 hour ago" },
  { id: 4, name: "Jessica Wong", role: "Member", dept: "Marketing", progress: 12, needAttention: true, lastActive: "1 week ago" },
  { id: 5, name: "David Miller", role: "LCVP Finance", dept: "Finance", progress: 100, needAttention: false, lastActive: "5 hours ago" },
  { id: 6, name: "Putri Ayu", role: "Member", dept: "Talent Management", progress: 60, needAttention: false, lastActive: "10 mins ago" },
];

export default function AdminDashboard() {
  // State users agar bisa di-update (checkbox & crud)
  const [users, setUsers] = useState(initialUsersData);
  const [searchTerm, setSearchTerm] = useState("");

  // 👇👇👇 1. COPY DARI SINI (STATE & RUMUS) 👇👇👇
  
  // State Halaman
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; 

  // Reset ke halaman 1 kalau search berubah
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Filter Data dulu sesuai search
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.dept.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 🔥 RUMUS YANG HILANG (INI PENYEBAB ERRORNYA) 🔥
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  // Tombol Next & Prev
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  // State untuk Edit Inline
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editFormData, setEditFormData] = useState<any>({});


  // --- LOGIC BARU: CHECKBOX ATTENTION ---
  const toggleNeedAttention = (id: number) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, needAttention: !user.needAttention } : user
    ));
  };

  // --- LOGIC BARU: CRUD ACTIONS ---
  
  // 1. Start Edit
  const handleStartEdit = (user: any) => {
    setEditingId(user.id);
    setEditFormData({ ...user });
  };

  // 2. Save Edit
  const handleSaveEdit = () => {
    setUsers(users.map(user => 
      user.id === editingId ? { ...user, ...editFormData } : user
    ));
    setEditingId(null);
  };

  // 3. Cancel Edit
  const handleCancelEdit = () => {
    setEditingId(null);
  };

  // 4. Delete User
  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to remove this user?")) {
        setUsers(users.filter(u => u.id !== id));
    }
  };

  // Handle Input Change saat Edit
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };


  return (
    <div className="min-h-screen bg-gray-50 font-sans text-asby-dark pl-64">
      
      <AdminSidebar />

      {/* HEADER (TETAP SAMA) */}
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
        
        {/* 1. STATS CARDS (TETAP SAMA) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <StatCard 
                title="Total Members" 
                value={users.length} 
                icon="👥" 
                variant="blue" 
            />
            <StatCard 
                title="Avg. Completion" 
                value="68%" 
                icon="📈" 
                variant="teal" 
            />
            {/* Update value stats biar dinamis sesuai checkbox */}
            <StatCard 
                title="Need Attention" 
                value={users.filter(u => u.needAttention).length} 
                icon="⚠️" 
                variant="red" 
            />
            <StatCard 
                title="Completed" 
                value={users.filter(u => u.progress === 100).length} 
                icon="🎓" 
                variant="gold" 
            />
        </div>

        {/* 2. TABEL MONITORING (UPDATE KOLOM) */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-xl shadow-gray-200/50 overflow-hidden">
            
            {/* Table Header & Search (TETAP SAMA) */}
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
                            
                            {/* 🔥 KOLOM STATUS DIGANTI ATTENTION */}
                            <th className="px-6 py-4 text-center">Need Attention?</th>
                            
                            {/* 🔥 KOLOM ACTION */}
                            <th className="px-6 py-4 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                        {filteredUsers.map((user) => (
                            <tr key={user.id} className={`group transition-colors ${user.needAttention ? 'bg-red-50/40' : 'hover:bg-blue-50/30'}`}>
                                
                                {/* 1. NAME & ROLE (Bisa Edit) */}
                                <td className="px-6 py-4">
                                    {editingId === user.id ? (
                                        <div className="flex flex-col gap-2">
                                            <input 
                                                type="text" name="name" 
                                                value={editFormData.name} onChange={handleInputChange} 
                                                className="border border-gray-300 p-1 rounded text-xs w-full focus:ring-2 focus:ring-asby-teal outline-none" 
                                                placeholder="Name"
                                            />
                                            <input 
                                                type="text" name="role" 
                                                value={editFormData.role} onChange={handleInputChange} 
                                                className="border border-gray-300 p-1 rounded text-xs w-full focus:ring-2 focus:ring-asby-teal outline-none" 
                                                placeholder="Role"
                                            />
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center font-bold text-gray-600 text-xs">
                                                {user.name.substring(0,2).toUpperCase()}
                                            </div>
                                            <div>
                                                <p className="font-bold text-asby-dark">{user.name}</p>
                                                <p className="text-xs text-gray-500">{user.role}</p>
                                            </div>
                                        </div>
                                    )}
                                </td>

                                {/* 2. DEPARTMENT (Bisa Edit) */}
                                <td className="px-6 py-4 text-gray-600 font-medium">
                                    {editingId === user.id ? (
                                        <input 
                                            type="text" name="dept" 
                                            value={editFormData.dept} onChange={handleInputChange} 
                                            className="border border-gray-300 p-1 rounded text-xs w-full focus:ring-2 focus:ring-asby-teal outline-none" 
                                        />
                                    ) : (
                                        user.dept
                                    )}
                                </td>

                                {/* 3. PROGRESS (Tetap Sama) */}
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

                                {/* 🔥 4. ATTENTION CHECKBOX (Pengganti Status) */}
                                <td className="px-6 py-4 text-center">
                                    <label className="inline-flex items-center cursor-pointer relative">
                                        <input 
                                            type="checkbox" 
                                            checked={user.needAttention} 
                                            onChange={() => toggleNeedAttention(user.id)}
                                            className="sr-only peer"
                                        />
                                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-500"></div>
                                    </label>
                                    <p className={`text-[9px] font-bold mt-1 ${user.needAttention ? 'text-red-500' : 'text-gray-400'}`}>
                                        {user.needAttention ? 'Urgent' : 'Normal'}
                                    </p>
                                </td>

                                {/* 🔥 5. ACTION (CRUD Buttons) */}
                                <td className="px-6 py-4 text-right">
                                    {editingId === user.id ? (
                                        <div className="flex items-center justify-end gap-2">
                                            {/* Save Button */}
                                            <button 
                                                onClick={handleSaveEdit}
                                                className="p-1.5 rounded-lg bg-green-100 text-green-600 hover:bg-green-200 transition-colors"
                                                title="Save"
                                            >
                                                💾
                                            </button>
                                            {/* Cancel Button */}
                                            <button 
                                                onClick={handleCancelEdit}
                                                className="p-1.5 rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
                                                title="Cancel"
                                            >
                                                ❌
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-end gap-2">
                                            {/* Edit Button */}
                                            <button 
                                                onClick={() => handleStartEdit(user)}
                                                className="p-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                                                title="Edit"
                                            >
                                                ✏️
                                            </button>
                                            {/* Delete Button */}
                                            <button 
                                                onClick={() => handleDelete(user.id)}
                                                className="p-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                                                title="Delete"
                                            >
                                                🗑️
                                            </button>
                                        </div>
                                    )}
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* 🔥🔥🔥 BAGIAN BARU: PAGINATION FOOTER 🔥🔥🔥 */}
            <div className="p-4 border-t border-gray-100 bg-gray-50/50 flex flex-col sm:flex-row justify-between items-center gap-4">
                
                {/* Info Text: Menampilkan range data yang sedang dilihat */}
                <p className="text-xs text-gray-500 font-medium">
                    Showing <span className="font-bold text-asby-dark">{filteredUsers.length > 0 ? indexOfFirstItem + 1 : 0}</span> to <span className="font-bold text-asby-dark">{Math.min(indexOfLastItem, filteredUsers.length)}</span> of <span className="font-bold text-asby-dark">{filteredUsers.length}</span> members
                </p>

                {/* Tombol Navigasi Kanan */}
                <div className="flex items-center gap-2">
                    {/* Tombol PREVIOUS */}
                    <button 
                        onClick={handlePrevPage}
                        disabled={currentPage === 1 || filteredUsers.length === 0}
                        className="px-4 py-2 rounded-lg text-xs font-bold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
                    >
                        Previous
                    </button>
                    
                    {/* Indikator Angka Halaman (1, 2, 3...) */}
                    <div className="flex items-center gap-1">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                            <button
                                key={num}
                                onClick={() => setCurrentPage(num)}
                                className={`w-8 h-8 rounded-lg text-xs font-bold flex items-center justify-center transition-all ${
                                    currentPage === num 
                                    ? "bg-asby-teal text-white shadow-md shadow-asby-teal/20" 
                                    : "bg-white text-gray-500 border border-gray-200 hover:bg-gray-50"
                                }`}
                            >
                                {num}
                            </button>
                        ))}
                    </div>

                    {/* Tombol NEXT */}
                    <button 
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages || filteredUsers.length === 0}
                        className="px-4 py-2 rounded-lg text-xs font-bold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
                    >
                        Next
                    </button>
                </div>
            </div>
            {/* 🔥🔥🔥 SELESAI BAGIAN BARU 🔥🔥🔥 */}

        </div>
      </main>
    </div>
  );
}




// --- STAT CARD (TETAP SAMA) ---
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
        <div className={`relative overflow-hidden p-6 rounded-[2rem] border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${theme.wrapper}`}>
            <div className={`absolute -right-6 -bottom-6 text-[6rem] opacity-5 select-none pointer-events-none ${theme.textMain}`}>
                {icon}
            </div>
            <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="mb-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-lg ${theme.iconBg}`}>
                        {icon}
                    </div>
                </div>
                
                <div>
                    <h4 className={`text-sm font-bold uppercase tracking-widest mb-1 ${theme.textSub}`}>
                        {title}
                    </h4>
                    <p className={`text-4xl font-black tracking-tight ${theme.textMain}`}>
                        {value}
                    </p>
                </div>
            </div>
        </div>
    )
}