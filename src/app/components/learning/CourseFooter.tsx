"use client";

interface CourseFooterProps {
  onPrev: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
  prevTitle?: string;
  nextTitle?: string;
}

export default function CourseFooter({ onPrev, onNext, isFirst, isLast, prevTitle, nextTitle }: CourseFooterProps) {
  return (
    // Height diperkecil jadi h-14 (56px) dan padding diperkecil
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-14 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] flex items-center">
      <div className="w-full max-w-[1600px] mx-auto flex justify-between items-center px-4 md:px-8">
        
        {/* TOMBOL KIRI (SEBELUMNYA) */}
        <button
          onClick={onPrev}
          disabled={isFirst}
          className={`group flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-200 ${
            isFirst 
              ? "opacity-0 pointer-events-none" 
              : "hover:bg-gray-100 text-gray-500 hover:text-asby-dark"
          }`}
        >
          <div className="text-lg pb-0.5">←</div>
          <div className="text-left hidden md:block">
            <p className="text-[10px] uppercase font-bold text-gray-400 leading-none mb-0.5">Sebelumnya</p>
            <p className="text-xs font-bold truncate max-w-[150px] leading-none">{prevTitle}</p>
          </div>
        </button>

        {/* Indikator Tengah */}
        <div className="hidden md:block h-1 w-8 bg-gray-100 rounded-full"></div>

        {/* TOMBOL KANAN (SELANJUTNYA) */}
        <button
          onClick={onNext}
          disabled={isLast}
          // Animasi translate-y DIHAPUS, cukup hover warna saja
          className={`group flex items-center gap-2 px-4 py-1.5 rounded-lg transition-all duration-200 ${
            isLast
              ? "opacity-50 cursor-not-allowed bg-gray-100"
              : "bg-asby-dark text-white hover:bg-asby-teal shadow-md shadow-asby-dark/10"
          }`}
        >
          <div className="text-right hidden md:block">
            <p className="text-[10px] uppercase font-bold text-blue-200 leading-none mb-0.5">Selanjutnya</p>
            <p className="text-xs font-bold truncate max-w-[150px] leading-none">{nextTitle}</p>
          </div>
          <div className="text-lg pb-0.5">→</div>
        </button>

      </div>
    </footer>
  );
}