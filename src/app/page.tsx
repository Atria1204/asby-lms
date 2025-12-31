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
      {/* 1. HERO SECTION (RESPONSIVE FIX)                          */}
      {/* ========================================================= */}
      {/* PERBAIKAN RESPONSIF:
          - pb-48: Padding bawah normal di HP.
          - lg:pb-[55rem]: Padding bawah RAKSASA cuma di Laptop (lg).
      */}
      <section className="relative pt-32 lg:pt-44 pb-35 lg:pb-[55rem] px-6 bg-gradient-to-b from-white via-blue-50 via-5% to-asby-dark overflow-hidden [mask-image:linear-gradient(to_bottom,black_88%,transparent_95%)]">
        
        {/* Hiasan Background */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] lg:w-[800px] h-[800px] lg:h-[800px] bg-white/10 rounded-full blur-[120px] lg:blur-[120px] pointer-events-none mix-blend-overlay"></div>

        <div className="max-w-7xl mx-auto relative z-10 animate-fade-in-up flex flex-col items-center">
            
            {/* --- CONTAINER LOGO --- */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 transform scale-90 lg:scale-105 origin-bottom mb-10 lg:mb-16">
                {/* 1. Ikon Logo */}
                <div className="relative group">
                    <img 
                      src="/img/logo-icon.png" 
                      alt="Icon" 
                      className="relative z-10 w-24 lg:w-44 h-auto object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] lg:drop-shadow-[0_0_35px_rgba(255,255,255,0.9)] group-hover:rotate-6 transition-transform duration-500"
                    />
                </div>
                {/* 2. Teks Logo */}
                <div className="relative">
                    <img 
                      src="/img/logo-text-only.png" 
                      alt="Integrate to Accelerate" 
                      className="w-64 lg:w-full max-w-lg h-auto object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] lg:drop-shadow-[0_0_35px_rgba(255,255,255,0.9)]"
                    />
                </div>
            </div>

            {/* --- SUBTITLE --- */}
            <div className="max-w-4xl mx-auto text-center px-4">
                <p className="text-sm lg:text-2xl text-blue-50 leading-relaxed font-medium tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                  Your launchpad to leadership excellence.<br className="hidden md:block"/>
                  <span className="text-white font-bold decoration-asby-gold underline underline-offset-4 lg:underline-offset-8 decoration-2 drop-shadow-md block mt-1 lg:inline">Master the AIESEC way and unlock your potential.</span>
                </p>

                {/* Scroll Indicator */}
                <div className="flex justify-center mt-12 lg:mt-22">
                    <div className="animate-bounce text-white/60 flex flex-col items-center hover:text-white transition-colors cursor-pointer drop-shadow-md">
                        <div className="w-[1px] h-10 lg:h-16 bg-gradient-to-b from-white to-transparent"></div>
                        <span className="text-[10px] font-bold uppercase tracking-widest mt-2">Dashboard</span>
                    </div>
                </div>
            </div>

        </div>
      </section>


      {/* ========================================================= */}
      {/* 2. DASHBOARD CARD (RESPONSIVE FIX)                        */}
      {/* ========================================================= */}
      {/* PERBAIKAN RESPONSIF:
          - -mt-24: Margin negatif kecil di HP (biar ga numpuk parah).
          - lg:-mt-[46rem]: Margin negatif RAKSASA cuma di Laptop.
      */}
      <section className="max-w-7xl mx-auto px-4 lg:px-6 -mt-24 lg:-mt-[50rem] relative z-20 pb-12 lg:pb-30">
        
        {/* Dashboard Card */}
        <div className="bg-white rounded-[1.5rem] lg:rounded-[2rem] p-6 lg:p-10 shadow-xl lg:shadow-2xl lg:shadow-asby-dark/40 border-2 lg:border-4 border-white/20 flex flex-col md:flex-row items-center justify-between gap-8 mb-12 animate-fade-in-up delay-200">
            
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left w-full">
                <h2 className="text-2xl lg:text-3xl font-extrabold text-asby-dark mb-2 tracking-tight">Hi, Atria! 👋</h2>
                <p className="text-sm lg:text-base text-gray-500 mb-6 font-medium">Selamat datang kembali. Progressmu luar biasa!</p>
                
                {/* Main Progress Bar */}
                <div className="bg-gray-50 px-4 py-3 lg:px-5 lg:py-4 rounded-xl border border-gray-200 w-full shadow-inner">
                    <div className="flex justify-between text-[10px] lg:text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">
                        <span>Total Journey</span><span className="text-asby-teal">35% Completed</span>
                    </div>
                    <div className="w-full h-2 lg:h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-asby-dark to-asby-teal w-[35%] shadow-md rounded-full relative overflow-hidden">
                           <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Stats */}
            <div className="flex gap-3 lg:gap-4 w-full md:w-auto">
                <div className="flex-1 md:flex-none text-center px-4 py-4 lg:px-6 lg:py-5 bg-blue-50/50 rounded-xl lg:rounded-2xl border border-blue-100 hover:border-blue-300 transition-colors">
                    <div className="text-2xl lg:text-4xl font-extrabold text-asby-dark mb-1">4</div><div className="text-[8px] lg:text-[10px] font-bold text-asby-teal uppercase tracking-wider">Modules</div>
                </div>
                <div className="flex-1 md:flex-none text-center px-4 py-4 lg:px-6 lg:py-5 bg-green-50/50 rounded-xl lg:rounded-2xl border border-green-100 hover:border-green-300 transition-colors">
                    <div className="text-2xl lg:text-4xl font-extrabold text-green-600 mb-1">1</div><div className="text-[8px] lg:text-[10px] font-bold text-green-700 uppercase tracking-wider">Certificate</div>
                </div>
            </div>
        </div>

        {/* Grid Courses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((cat, index) => {
             const isLocked = cat.status === 'locked';
             return (
              <Link key={index} href={isLocked ? '#' : `/courses/${cat.slug}`} className={`block h-full animate-fade-in-up ${isLocked ? 'cursor-not-allowed' : ''}`} style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}>
                <div className={`h-full bg-white rounded-2xl lg:rounded-3xl p-5 lg:p-6 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-asby-teal/10 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden ${isLocked ? 'opacity-60 grayscale bg-gray-50' : 'hover:-translate-y-2 hover:border-asby-teal/30'}`}>
                  {isLocked && (<div className="absolute inset-0 bg-gray-100/40 backdrop-blur-[1px] z-10 flex items-center justify-center"><div className="bg-white p-3 rounded-full shadow-sm border border-gray-100"><span className="text-2xl">🔒</span></div></div>)}
                  <div>
                      <div className="flex justify-between items-start mb-4 lg:mb-6">
                          <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl flex items-center justify-center text-lg lg:text-2xl shadow-sm ${cat.status === 'completed' ? 'bg-green-100 text-green-600' : 'bg-gray-50 border border-gray-100 text-asby-dark'}`}>{cat.status === 'completed' ? '✓' : cat.icon}</div>
                          <span className={`text-[9px] lg:text-[10px] font-bold px-2 py-1 lg:px-3 lg:py-1 rounded-full uppercase tracking-wide border ${cat.status === 'completed' ? 'bg-green-50 text-green-700 border-green-200' : cat.status === 'in-progress' ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-gray-100 text-gray-500 border-gray-200'}`}>{isLocked ? 'Locked' : cat.status.replace('-', ' ')}</span>
                      </div>
                      <h3 className="text-lg lg:text-xl font-bold text-asby-dark mb-2 leading-tight group-hover:text-asby-teal transition-colors">{cat.title}</h3>
                      <p className="text-gray-500 text-xs lg:text-sm leading-relaxed mb-4 lg:mb-6 line-clamp-2 font-medium">{cat.description}</p>
                  </div>
                  <div className="w-full">
                      <div className="flex justify-between text-[9px] lg:text-[10px] font-bold text-gray-400 mb-1"><span>Progress</span><span>{cat.progress}%</span></div>
                      <div className="w-full h-1.5 lg:h-2 bg-gray-100 rounded-full overflow-hidden"><div className={`h-full rounded-full ${cat.status === 'completed' ? 'bg-green-500' : 'bg-asby-gold'}`} style={{ width: `${cat.progress}%` }}></div></div>
                  </div>
                </div>
              </Link>
          )})}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. TIMELINE (RESPONSIVE FIX)                              */}
      {/* ========================================================= */}
      {/* PERBAIKAN:
          - HP: Layout jadi 'flex-row' (Angka di kiri, Teks di kanan). Rapi, tidak numpuk tengah.
          - Laptop: Layout 'md:flex-row' (Zig-zag dengan text-align right/left).
      */}
      <section className="pt-0 pb-24 lg:pb-32 bg-gradient-to-b from-transparent via-white/80 to-white relative z-30">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12 lg:mb-20">
                <span className="bg-asby-gold text-white font-bold uppercase tracking-widest text-[10px] px-4 py-1.5 rounded-full shadow-md shadow-asby-gold/30">Your Path</span>
                <h2 className="text-2xl lg:text-4xl font-extrabold text-asby-dark mt-4">Probation Timeline</h2>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
                {/* Garis Tengah (Hanya muncul di Laptop/MD ke atas) */}
                <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-gray-200 md:-translate-x-1/2 block"></div>
                
                <div className="space-y-8 lg:space-y-12">
                    
                    {/* Step 1 */}
                    <div className="relative flex flex-row md:flex-row items-start md:items-center justify-between gap-4 md:gap-8 group cursor-default">
                        {/* Kiri (Laptop: Teks, HP: Hidden/Circle) */}
                        <div className="pl-12 md:pl-0 w-full md:w-1/2 text-left md:text-right pr-0 md:pr-8 transition-all duration-500 group-hover:-translate-y-1 order-2 md:order-1">
                            <h3 className="text-lg lg:text-xl font-bold text-asby-dark group-hover:text-asby-gold transition-colors">Onboarding</h3>
                            <p className="text-gray-500 text-sm mt-1 lg:mt-2 group-hover:text-gray-700">Memahami budaya, sejarah, dan nilai-nilai dasar AIESEC.</p>
                        </div>
                        {/* Tengah (Angka) */}
                        <div className="absolute left-0 md:static w-10 h-10 md:w-8 md:h-8 rounded-full bg-asby-dark border-4 border-white shadow-lg z-10 flex items-center justify-center text-white text-xs transition-all duration-500 group-hover:scale-125 group-hover:bg-asby-gold group-hover:rotate-12 group-hover:shadow-[0_0_15px_rgba(212,155,31,0.5)] order-1 md:order-2">1</div>
                        {/* Kanan (Laptop: Big Text, HP: Hidden) */}
                        <div className="hidden md:block md:w-1/2 pl-8 opacity-20 text-4xl font-bold text-gray-300 transition-all duration-500 group-hover:opacity-100 group-hover:text-asby-dark group-hover:tracking-widest order-3">START</div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex flex-row md:flex-row items-start md:items-center justify-between gap-4 md:gap-8 group cursor-default">
                        {/* Kiri (Laptop: Big Text) */}
                        <div className="hidden md:block md:w-1/2 text-right pr-8 opacity-20 text-4xl font-bold text-gray-300 transition-all duration-500 group-hover:opacity-100 group-hover:text-asby-dark group-hover:tracking-widest">LEARN</div>
                        {/* Tengah (Angka) */}
                        <div className="absolute left-0 md:static w-10 h-10 md:w-8 md:h-8 rounded-full bg-asby-teal border-4 border-white shadow-lg z-10 flex items-center justify-center text-white text-xs transition-all duration-500 group-hover:scale-125 group-hover:bg-asby-gold group-hover:rotate-12 group-hover:shadow-[0_0_15px_rgba(212,155,31,0.5)]">2</div>
                        {/* Kanan (Laptop: Teks, HP: Teks) */}
                        <div className="pl-12 md:pl-8 w-full md:w-1/2 text-left transition-all duration-500 group-hover:-translate-y-1">
                            <h3 className="text-lg lg:text-xl font-bold text-asby-dark group-hover:text-asby-gold transition-colors">Functional Knowledge</h3>
                            <p className="text-gray-500 text-sm mt-1 lg:mt-2 group-hover:text-gray-700">Pelajari skill spesifik sesuai departemen dan role kamu.</p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex flex-row md:flex-row items-start md:items-center justify-between gap-4 md:gap-8 group cursor-default">
                        <div className="pl-12 md:pl-0 w-full md:w-1/2 text-left md:text-right pr-0 md:pr-8 transition-all duration-500 group-hover:-translate-y-1 order-2 md:order-1">
                            <h3 className="text-lg lg:text-xl font-bold text-asby-dark group-hover:text-asby-gold transition-colors">Practical Phase</h3>
                            <p className="text-gray-500 text-sm mt-1 lg:mt-2 group-hover:text-gray-700">Implementasi ilmu melalui project nyata dan simulasi tugas harian.</p>
                        </div>
                        <div className="absolute left-0 md:static w-10 h-10 md:w-8 md:h-8 rounded-full bg-asby-gold border-4 border-white shadow-lg z-10 flex items-center justify-center text-white text-xs transition-all duration-500 group-hover:scale-125 group-hover:bg-asby-dark group-hover:rotate-12 group-hover:shadow-[0_0_15px_rgba(3,62,107,0.5)] order-1 md:order-2">3</div>
                        <div className="hidden md:block md:w-1/2 pl-8 opacity-20 text-4xl font-bold text-gray-300 transition-all duration-500 group-hover:opacity-100 group-hover:text-asby-dark group-hover:tracking-widest order-3">DO</div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative flex flex-row md:flex-row items-start md:items-center justify-between gap-4 md:gap-8 group cursor-default">
                        <div className="hidden md:block md:w-1/2 text-right pr-8 opacity-20 text-4xl font-bold text-gray-300 transition-all duration-500 group-hover:opacity-100 group-hover:text-asby-dark group-hover:tracking-widest">GOAL</div>
                        <div className="absolute left-0 md:static w-10 h-10 md:w-8 md:h-8 rounded-full bg-green-500 border-4 border-white shadow-lg z-10 flex items-center justify-center text-white text-xs transition-all duration-500 group-hover:scale-125 group-hover:bg-asby-gold group-hover:rotate-12 group-hover:shadow-[0_0_15px_rgba(212,155,31,0.5)]">4</div>
                        <div className="pl-12 md:pl-8 w-full md:w-1/2 text-left transition-all duration-500 group-hover:-translate-y-1">
                            <h3 className="text-lg lg:text-xl font-bold text-asby-dark group-hover:text-asby-gold transition-colors">Final Assessment</h3>
                            <p className="text-gray-500 text-sm mt-1 lg:mt-2 group-hover:text-gray-700">Review quiz dan kelulusan probation. Welcome to the family!</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. FEATURES                                               */}
      {/* ========================================================= */}
      <section className="py-16 lg:py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                <div className="bg-white p-6 lg:p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group"><div className="w-12 h-12 lg:w-14 lg:h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-xl lg:text-2xl mb-4 lg:mb-6 group-hover:scale-110 transition-transform">⚡</div><h3 className="text-base lg:text-lg font-bold text-asby-dark mb-2 lg:mb-3">Accelerated Growth</h3><p className="text-gray-500 text-xs lg:text-sm leading-relaxed">Materi disusun padat dan terarah untuk mempercepat pemahamanmu.</p></div>
                <div className="bg-white p-6 lg:p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group"><div className="w-12 h-12 lg:w-14 lg:h-14 bg-green-50 rounded-2xl flex items-center justify-center text-xl lg:text-2xl mb-4 lg:mb-6 group-hover:scale-110 transition-transform">📊</div><h3 className="text-base lg:text-lg font-bold text-asby-dark mb-2 lg:mb-3">Real-time Tracking</h3><p className="text-gray-500 text-xs lg:text-sm leading-relaxed">Pantau perkembanganmu secara langsung. Sistem otomatis mencatat modul.</p></div>
                <div className="bg-white p-6 lg:p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group"><div className="w-12 h-12 lg:w-14 lg:h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-xl lg:text-2xl mb-4 lg:mb-6 group-hover:scale-110 transition-transform">📱</div><h3 className="text-base lg:text-lg font-bold text-asby-dark mb-2 lg:mb-3">Access Anywhere</h3><p className="text-gray-500 text-xs lg:text-sm leading-relaxed">Belajar dari mana saja. Platform ini dioptimalkan untuk mobile.</p></div>
            </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}