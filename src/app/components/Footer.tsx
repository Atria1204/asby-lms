import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-asby-dark text-white pt-20 pb-10 border-t border-white/5 overflow-hidden">
      
      {/* 1. BACKGROUND ELEMENT (Watermark & Glow) */}
      {/* Glow effect di pojok kanan atas footer */}
      <div className="absolute top-10 left-[-440] w-[500px] h-[500px] bg-asby-teal rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      
      {/* Watermark Text Besar di Background 
      <div className="absolute bottom-20 left-10 text-[10rem] font-black text-white/[0.02] leading-none pointer-events-none select-none -translate-x-10 translate-y-20 z-0">
        INTEGRATE TO ACCELERATE
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* === BRAND SECTION (Lebih Lebar: 5 Kolom) === */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Logo & Nama */}
            <div className="flex items-center gap-4">
                <div className="relative w-12 h-12">
                    <div className="absolute inset-0 bg-asby-teal/20 blur-lg rounded-full"></div>
                    <img 
                      src="/img/Nirvana_2026.png" 
                      alt="Nirvana Logo" 
                      className="relative w-full h-full object-contain drop-shadow-lg" 
                    />
                </div>
                <div>
                    <h2 className="text-2xl font-black tracking-tight text-white leading-none">
                        Nirvana 
                    </h2>
                </div>
            </div>

            {/* Separator 'Golden Fade' (Konsisten sama Course Page) */}
            <div className="h-[3px] w-full max-w-xs bg-gradient-to-r from-asby-gold via-asby-gold/20 to-transparent"></div>

            {/* Deskripsi */}
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Platform terintegrasi untuk mendukung pengembangan anggota AIESEC in Surabaya. 
              Track progress, akses materi, dan akselerasi pertumbuhanmu menuju kepemimpinan masa depan.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-2">
                <SocialIcon href="https://instagram.com/aiesecsurabaya" label="Instagram">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </SocialIcon>
                <SocialIcon href="https://linkedin.com/company/aiesec-in-surabaya" label="LinkedIn">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5v-8.306c0-4.613 6.135-4.967 6.135 0v8.306h5v-9.699c0-7.394-7.893-7.174-9.967-3.496v-3.111z"/>
                </SocialIcon>
                <SocialIcon href="https://aiesec.org" label="Website">
                     <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.183-.443 3.057h-2.551zm-4-3.057v3.057h-2.551c-.231-.874-.384-1.914-.443-3.057h2.994zm-2.033-2h-3.528c.115-1.396.467-2.709 1.002-3.882l2.526 3.882zm4.033 0v-4.55l-2.43 3.55h2.43zm2 0h2.431l-2.431-3.55v3.55zm-1.615-5.698c1.378 1.621 2.296 3.659 2.563 5.698h-4.975c.168-1.042.502-2.083.996-3.125.438-.923.957-1.802 1.416-2.573zm6.65 1.816c.536 1.173.888 2.486 1.002 3.882h-3.528l2.526-3.882z"/>
                </SocialIcon>
            </div>
          </div>

          {/* === NAVIGATION LINKS (Grid 2 Kolom) === */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            {/* Column 1 */}
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-asby-teal flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-asby-teal"></span> Platform
              </h4>
              <ul className="space-y-3">
                <FooterLink href="/" text="Dashboard" />
                <FooterLink href="#" text="Resources" />
                <FooterLink href="#" text="My Profile" />
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-asby-teal flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-asby-teal"></span> Support
              </h4>
              <ul className="space-y-3">
                <FooterLink href="#" text="FAQ" />
                <FooterLink href="#" text="Contact" />
                <FooterLink href="#" text="Report Bug" />
                <FooterLink href="https://aiesec.org" text="Global Website" />
              </ul>
            </div>
          </div>

          {/* === QUOTE / DECORATION (Sisa Kolom) === */}
          <div className="lg:col-span-3">
             <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden group hover:border-asby-teal/50 transition-colors">
                 {/* Decorative Quote Icon 

[Image of Quote icon svg]
 */}
                 <div className="absolute top-2 right-4 text-6xl text-white/5 font-serif">”</div>
                 
                 <p className="text-gray-300 text-sm italic leading-relaxed relative z-10">
                   "Striving for excellence is not a destination, but a continuous journey of growth."
                 </p>
                 <div className="mt-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-asby-gold flex items-center justify-center text-asby-dark font-bold text-xs">
                        AS
                    </div>
                    <div>
                        <p className="text-xs font-bold text-white">AIESEC Surabaya</p>
                        <p className="text-[10px] text-gray-500">Since 1948</p>
                    </div>
                 </div>
             </div>
          </div>

        </div>

        {/* === BOTTOM BAR === */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 font-medium">
            © 2026 <span className="text-white">AIESEC in Surabaya</span>. All rights reserved.
          </p>
          <div className="flex gap-6 text-[10px] font-bold text-gray-500 uppercase tracking-wider">
             <Link href="#" className="hover:text-asby-teal transition-colors">Privacy Policy</Link>
             <Link href="#" className="hover:text-asby-teal transition-colors">Terms of Use</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

// --- SUB-COMPONENTS (Biar kode rapi) ---

// 1. Link dengan Animasi Geser & Ganti Warna
function FooterLink({ href, text }: { href: string; text: string }) {
    return (
        <li>
            <Link href={href} className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-all duration-300">
                {/* Panah kecil yang muncul pas di-hover */}
                <span className="w-1 h-1 rounded-full bg-asby-teal opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">{text}</span>
            </Link>
        </li>
    )
}

// 2. Tombol Sosial Media SVG
function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
    return (
        <Link 
            href={href} 
            target="_blank" 
            aria-label={label}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-gray-400 border border-white/5 hover:bg-asby-teal hover:text-white hover:border-asby-teal hover:-translate-y-1 transition-all duration-300"
        >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {children}
            </svg>
        </Link>
    )
}