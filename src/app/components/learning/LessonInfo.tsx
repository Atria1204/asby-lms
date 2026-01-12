interface LessonInfoProps {
  activeLesson: any;
}

export default function LessonInfo({ activeLesson }: LessonInfoProps) {
  return (
    <div className="flex flex-col gap-6">
      
      {/* JUDUL DIHAPUS DARI SINI (Pindah ke page.tsx) */}

      {/* KONTEN TAB (Langsung Deskripsi) */}
      <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
      
          <div className="animate-fade-in-up">
            <h3 className="font-bold text-lg mb-3 text-asby-dark">Tentang Lesson Ini</h3>
            
            {/* Teks Deskripsi Panjang */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6 text-justify">
              {activeLesson?.description || "Dalam modul ini, kamu akan mempelajari dasar-dasar yang sangat penting. Materi ini dirancang untuk memberikan pemahaman mendalam tentang nilai-nilai dan budaya AIESEC. Pastikan kamu mencatat poin-poin penting karena ini akan menjadi fondasi untuk materi selanjutnya."}
              {/* Saya persingkat dummy text-nya biar kodenya rapi, nanti isi sendiri ya */}
            </p>

            <div className="flex items-center gap-6 pt-6 border-t border-gray-50 text-xs font-bold text-gray-400 uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <span className="text-lg">⏱️</span> {activeLesson?.duration || "10 min"}
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}