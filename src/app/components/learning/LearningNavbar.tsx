import Link from "next/link";

interface LearningNavbarProps {
  title: string;          // <-- Balikin Title Course ke sini
  progress: number;
  completedLessons: number;
  totalLessons: number;
}

export default function LearningNavbar({ title, progress, completedLessons, totalLessons }: LearningNavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-asby-dark border-b border-gray-800 z-50 px-4 md:px-6 flex items-center justify-between shadow-lg">
      
      {/* KIRI: Tombol Back + JUDUL COURSE */}
      <div className="flex items-center h-full gap-4 md:gap-6">
        <Link 
          href="/" 
          className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-gray-700 hover:border-white/20"
          title="Kembali ke Dashboard"
        >
          <span className="text-lg pb-0.5">←</span>
        </Link>

        {/* Separator & Judul Course */}
        <div className="h-8 border-l border-yellow-600 pl-4 md:pl-6 flex items-center">
            <h1 className="text-sm md:text-base font-extrabold text-white tracking-wide truncate max-w-[150px] md:max-w-md">
                {title}
            </h1>
        </div>
      </div>

      {/* KANAN: Progress Bar (Tetap Ada) */}
      <div className="w-24 md:w-64 flex flex-col items-end md:items-stretch">
        <div className="flex justify-between w-full text-[9px] font-bold text-gray-400 mb-1.5 uppercase">
          <span className="hidden md:inline">Your Progress</span>
          <span className="text-white ml-auto md:ml-0">{progress}%</span>
        </div>
        <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-asby-gold to-yellow-400 rounded-full shadow-[0_0_10px_rgba(255,215,0,0.5)] transition-all duration-500" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

    </header>
  );
}