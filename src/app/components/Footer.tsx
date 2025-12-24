// src/app/components/Footer.tsx

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-asby-dark text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
                <div className="bg-gradient-to-br from-asby-dark to-asby-teal w-10 h-10 rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform overflow-hidden relative">
                    <img 
                    src="/img/nirvana.png" 
                    alt="Logo" 
                    className="w-full h-full object-cover" 
                    />
                </div>
                <div className="flex flex-col">
                    <span className="text-xl font-bold tracking-tight">Nirvana Ground</span>
                    <span className={`text-[12px] font-bold uppercase tracking-widest text-asby-teal`}>
                    LMS
                    </span>
                </div>
            </div>
            <p className="text-blue-200/60 text-sm leading-relaxed max-w-sm">
              Platform terintegrasi untuk mendukung pengembangan anggota AIESEC in Surabaya. 
              Track progress, akses materi, dan akselerasi pertumbuhanmu.
            </p>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-asby-teal">Platform</h4>
            <ul className="space-y-4 text-sm text-blue-100/70">
              <li><Link href="/" className="hover:text-white transition-colors">Dashboard</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Leaderboard</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Resources</Link></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-asby-teal">Support</h4>
            <ul className="space-y-4 text-sm text-blue-100/70">
              <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="https://aiesec.org" target="_blank" className="hover:text-white transition-colors">AIESEC.org</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-blue-200/40">
            © 2026 AIESEC in Surabaya.
          </p>
          <div className="flex gap-6">
             {/* Social Icons (Dummy) */}
             <div className="w-4 h-4 bg-white/10 rounded-full"></div>
             <div className="w-4 h-4 bg-white/10 rounded-full"></div>
             <div className="w-4 h-4 bg-white/10 rounded-full"></div>
          </div>
        </div>

      </div>
    </footer>
  );
}