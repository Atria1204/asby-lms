// src/app/page.tsx

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  
  const categories = [
    { title: "The AIESEC Way", slug: "the-aiesec-way", description: "Pahami 'Why', sejarah, dan values organisasi.", icon: "🌏", progress: 100, status: "completed", totalLessons: 5, completedLessons: 5 },
    { title: "Functional Knowledge", slug: "functional-knowledge", description: "Hard skill & soft skill sesuai role departemen.", icon: "🚀", progress: 45, status: "in-progress", totalLessons: 10, completedLessons: 4 },
    { title: "Tools & Resources", slug: "tools-resources", description: "Gudang link, booklet, dan tools tracking.", icon: "💎", progress: 0, status: "open", totalLessons: 8, completedLessons: 0 },
    { title: "Final Assessment", slug: "final-assessment", description: "Buktikan kemampuanmu sebelum dilantik!", icon: "🎯", progress: 0, status: "locked", totalLessons: 1, completedLessons: 0 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-asby-light selection:text-asby-dark flex flex-col">
      <Navbar />

      {/* ========================================================= */}
      {/* 1. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section className="relative pt-44 pb-[55rem] px-6 bg-gradient-to-b from-white via-blue-50 via-20% to-asby-dark overflow-hidden [mask-image:linear-gradient(to_bottom,black_90%,transparent_95%)]">
        
        {/* Hiasan Background */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/10 rounded-full blur-[120px] pointer-events-none mix-blend-overlay"></div>

        <div className="max-w-7xl mx-auto relative z-10 animate-fade-in-up flex flex-col items-center">
            
            {/* --- CONTAINER LOGO --- */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 transform scale-100 md:scale-105 origin-bottom mb-16">
                {/* 1. Ikon Logo */}
                <div className="relative group">
                    <img 
                      src="/img/logo-icon.png" 
                      alt="Icon" 
                      className="relative z-10 w-32 md:w-44 h-auto object-contain drop-shadow-[0_0_35px_rgba(255,255,255,0.9)] group-hover:rotate-6 transition-transform duration-500"
                    />
                </div>
                {/* 2. Teks Logo */}
                <div className="relative">
                    <img 
                      src="/img/logo-text-only.png" 
                      alt="Integrate to Accelerate" 
                      className="w-full max-w-lg h-auto object-contain drop-shadow-[0_0_35px_rgba(255,255,255,0.9)]"
                    />
                </div>
            </div>

            {/* --- SUBTITLE --- */}
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg md:text-2xl text-blue-50 leading-relaxed font-medium tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                  Your launchpad to leadership excellence.<br className="hidden md:block"/>
                  <span className="text-white font-bold decoration-asby-gold underline underline-offset-8 decoration-2 drop-shadow-md">Master the AIESEC way</span> and unlock your potential.
                </p>

                {/* Scroll Indicator */}
                <div className="flex justify-center mt-20">
                    <div className="animate-bounce text-white/60 flex flex-col items-center hover:text-white transition-colors cursor-pointer drop-shadow-md">
                        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
                        <span className="text-[10px] font-bold uppercase tracking-widest mt-2">Dashboard</span>
                    </div>
                </div>
            </div>

        </div>
      </section>


      {/* ========================================================= */}
      {/* 2. DASHBOARD CARD                                         */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-6 -mt-[52rem] relative z-20 pb-24">
        
        {/* Dashboard Card */}
        <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-asby-dark/40 border-4 border-white/20 flex flex-col md:flex-row items-center justify-between gap-8 mb-16 animate-fade-in-up delay-200">
            
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-extrabold text-asby-dark mb-2 tracking-tight">Hi, Atria! 👋</h2>
                <p className="text-gray-500 mb-6 font-medium">Selamat datang kembali. Progressmu luar biasa!</p>
                
                {/* Main Progress Bar */}
                <div className="bg-gray-50 px-5 py-4 rounded-2xl border border-gray-200 max-w-md mx-auto md:mx-0 shadow-inner">
                    <div className="flex justify-between text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">
                        <span>Total Journey</span><span className="text-asby-teal">35% Completed</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-asby-dark to-asby-teal w-[35%] shadow-md rounded-full relative overflow-hidden">
                           <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Stats */}
            <div className="flex gap-4">
                <div className="text-center px-6 py-5 bg-blue-50/50 rounded-2xl border border-blue-100 hover:border-blue-300 transition-colors">
                    <div className="text-4xl font-extrabold text-asby-dark mb-1">4</div><div className="text-[10px] font-bold text-asby-teal uppercase tracking-wider">Modules</div>
                </div>
                <div className="text-center px-6 py-5 bg-green-50/50 rounded-2xl border border-green-100 hover:border-green-300 transition-colors">
                    <div className="text-4xl font-extrabold text-green-600 mb-1">1</div><div className="text-[10px] font-bold text-green-700 uppercase tracking-wider">Certificate</div>
                </div>
            </div>
        </div>

        {/* Grid Courses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => {
             const isLocked = cat.status === 'locked';
             return (
              <Link key={index} href={isLocked ? '#' : `/courses/${cat.slug}`} className={`block h-full animate-fade-in-up ${isLocked ? 'cursor-not-allowed' : ''}`} style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}>
                <div className={`h-full bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-asby-teal/10 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden ${isLocked ? 'opacity-60 grayscale bg-gray-50' : 'hover:-translate-y-2 hover:border-asby-teal/30'}`}>
                  {isLocked && (<div className="absolute inset-0 bg-gray-100/40 backdrop-blur-[1px] z-10 flex items-center justify-center"><div className="bg-white p-3 rounded-full shadow-sm border border-gray-100"><span className="text-2xl">🔒</span></div></div>)}
                  <div>
                      <div className="flex justify-between items-start mb-6">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-sm ${cat.status === 'completed' ? 'bg-green-100 text-green-600' : 'bg-gray-50 border border-gray-100 text-asby-dark'}`}>{cat.status === 'completed' ? '✓' : cat.icon}</div>
                          <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide border ${cat.status === 'completed' ? 'bg-green-50 text-green-700 border-green-200' : cat.status === 'in-progress' ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-gray-100 text-gray-500 border-gray-200'}`}>{isLocked ? 'Locked' : cat.status.replace('-', ' ')}</span>
                      </div>
                      <h3 className="text-xl font-bold text-asby-dark mb-2 leading-tight group-hover:text-asby-teal transition-colors">{cat.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2 font-medium">{cat.description}</p>
                  </div>
                  <div className="w-full">
                      <div className="flex justify-between text-[10px] font-bold text-gray-400 mb-1"><span>Progress</span><span>{cat.progress}%</span></div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden"><div className={`h-full rounded-full ${cat.status === 'completed' ? 'bg-green-500' : 'bg-asby-gold'}`} style={{ width: `${cat.progress}%` }}></div></div>
                  </div>
                </div>
              </Link>
          )})}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. TIMELINE (INTERACTIVE HOVER)                           */}
      {/* ========================================================= */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
                <span className="bg-asby-gold text-white font-bold uppercase tracking-widest text-[10px] px-4 py-1.5 rounded-full shadow-md shadow-asby-gold/30">
                  Your Path
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-asby-dark mt-4">Probation Timeline</h2>
            </div>
            <div className="relative max-w-4xl mx-auto">
                {/* Garis Tengah */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden md:block"></div>
                
                <div className="space-y-12">
                    
                    {/* Step 1 */}
                    <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 group cursor-default">
                        <div className="md:w-1/2 text-center md:text-right pr-8 transition-all duration-500 group-hover:-translate-y-1">
                            <h3 className="text-xl font-bold text-asby-dark group-hover:text-asby-gold transition-colors">Onboarding</h3>
                            <p className="text-gray-500 text-sm mt-2 group-hover:text-gray-700">Memahami budaya, sejarah, dan nilai-nilai dasar AIESEC (The AIESEC Way).</p>
                        </div>
                        {/* Lingkaran Angka */}
                        <div className="w-8 h-8 rounded-full bg-asby-dark border-4 border-white shadow-lg relative z-10 flex items-center justify-center text-white text-xs transition-all duration-500 group-hover:scale-125 group-hover:bg-asby-gold group-hover:rotate-12 group-hover:shadow-[0_0_15px_rgba(212,155,31,0.5)]">1</div>
                        {/* Label Besar */}
                        <div className="md:w-1/2 pl-8 hidden md:block opacity-20 text-4xl font-bold text-gray-300 transition-all duration-500 group-hover:opacity-100 group-hover:text-asby-dark group-hover:tracking-widest">START</div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 group cursor-default">
                        <div className="md:w-1/2 text-right pr-8 hidden md:block opacity-20 text-4xl font-bold text-gray-300 transition-all duration-500 group-hover:opacity-100 group-hover:text-asby-dark group-hover:tracking-widest">LEARN</div>
                        <div className="w-8 h-8 rounded-full bg-asby-teal border-4 border-white shadow-lg relative z-10 flex items-center justify-center text-white text-xs transition-all duration-500 group-hover:scale-125 group-hover:bg-asby-gold group-hover:rotate-12 group-hover:shadow-[0_0_15px_rgba(212,155,31,0.5)]">2</div>
                        <div className="md:w-1/2 pl-8 text-center md:text-left transition-all duration-500 group-hover:-translate-y-1">
                            <h3 className="text-xl font-bold text-asby-dark group-hover:text-asby-gold transition-colors">Functional Knowledge</h3>
                            <p className="text-gray-500 text-sm mt-2 group-hover:text-gray-700">Pelajari skill spesifik sesuai departemen dan role kamu.</p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 group cursor-default">
                        <div className="md:w-1/2 text-center md:text-right pr-8 transition-all duration-500 group-hover:-translate-y-1">
                            <h3 className="text-xl font-bold text-asby-dark group-hover:text-asby-gold transition-colors">Practical Phase</h3>
                            <p className="text-gray-500 text-sm mt-2 group-hover:text-gray-700">Implementasi ilmu melalui project nyata dan simulasi tugas harian.</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-asby-gold border-4 border-white shadow-lg relative z-10 flex items-center justify-center text-white text-xs transition-all duration-500 group-hover:scale-125 group-hover:bg-asby-dark group-hover:rotate-12 group-hover:shadow-[0_0_15px_rgba(3,62,107,0.5)]">3</div>
                        <div className="md:w-1/2 pl-8 hidden md:block opacity-20 text-4xl font-bold text-gray-300 transition-all duration-500 group-hover:opacity-100 group-hover:text-asby-dark group-hover:tracking-widest">DO</div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 group cursor-default">
                        <div className="md:w-1/2 text-right pr-8 hidden md:block opacity-20 text-4xl font-bold text-gray-300 transition-all duration-500 group-hover:opacity-100 group-hover:text-asby-dark group-hover:tracking-widest">GOAL</div>
                        <div className="w-8 h-8 rounded-full bg-green-500 border-4 border-white shadow-lg relative z-10 flex items-center justify-center text-white text-xs transition-all duration-500 group-hover:scale-125 group-hover:bg-asby-gold group-hover:rotate-12 group-hover:shadow-[0_0_15px_rgba(212,155,31,0.5)]">4</div>
                        <div className="md:w-1/2 pl-8 text-center md:text-left transition-all duration-500 group-hover:-translate-y-1">
                            <h3 className="text-xl font-bold text-asby-dark group-hover:text-asby-gold transition-colors">Final Assessment</h3>
                            <p className="text-gray-500 text-sm mt-2 group-hover:text-gray-700">Review quiz dan kelulusan probation. Welcome to the family!</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. FEATURES                                               */}
      {/* ========================================================= */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group"><div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">⚡</div><h3 className="text-lg font-bold text-asby-dark mb-3">Accelerated Growth</h3><p className="text-gray-500 text-sm leading-relaxed">Materi disusun padat dan terarah untuk mempercepat pemahamanmu.</p></div>
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group"><div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">📊</div><h3 className="text-lg font-bold text-asby-dark mb-3">Real-time Tracking</h3><p className="text-gray-500 text-sm leading-relaxed">Pantau perkembanganmu secara langsung. Sistem otomatis mencatat modul.</p></div>
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group"><div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">📱</div><h3 className="text-lg font-bold text-asby-dark mb-3">Access Anywhere</h3><p className="text-gray-500 text-sm leading-relaxed">Belajar dari mana saja. Platform ini dioptimalkan untuk mobile.</p></div>
            </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}