import Link from "next/link";

interface LearningNavbarProps {
  title: string;
  progress: number;
  completedLessons: number;
  totalLessons: number;
}

export default function LearningNavbar({ title, progress, completedLessons, totalLessons }: LearningNavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-asby-dark border-b border-gray-800 z-50 px-6 flex items-center justify-between shadow-lg">
      {/* KIRI: Back & Title */}
      <div className="flex items-center h-full gap-6">
        <Link href="/" className="flex items-center justify-center w-8 h-8 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-white-700 hover:border-white/20">
          <span className="text-lg pb-0.5">←</span>
        </Link>
        <div className="border-l border-yellow-700 pl-6 h-8 flex items-center">
          <h1 className="text-base font-extrabold text-white tracking-wide truncate max-w-[200px] md:max-w-none">
            {title}
          </h1>
        </div>
      </div>

      {/* KANAN: Progress Bar */}
      <div className="hidden md:block w-64">
        <div className="flex justify-between text-[9px] font-bold text-gray-400 mb-1.5 uppercase">
          <span>Your Progress</span>
          <span className="text-white">{progress}% Completed</span>
        </div>
        <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-asby-gold to-yellow-400 rounded-full shadow-[0_0_10px_rgba(255,215,0,0.5)]" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </header>
  );
}