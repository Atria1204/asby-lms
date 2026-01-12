interface VideoPlayerProps {
  type: string;          
  source: string | null; 
  title: string;
}

export default function VideoPlayer({ type, source, title }: VideoPlayerProps) {
  
  // LOGIC UKURAN CARD (ADAPTIF)
  // Kalau Video -> aspect-video (16:9)
  // Kalau Doc   -> h-[85vh] (Tinggi biar enak baca)
  // Kalau Quiz  -> h-96 (Pendek secukupnya)
  // Kalau Image -> h-auto min-h-[400px]
  
  const containerHeightClass = 
    type === 'video' ? 'aspect-video' :
    type === 'doc' ? 'h-[85vh] min-h-[500px]' : 
    type === 'gform' ? 'h-96' : 
    'aspect-video'; // default

  return (
    <div className={`w-full bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200 relative group flex items-center justify-center ${containerHeightClass}`}>
      
      {/* 1. VIDEO (YouTube) */}
      {type === 'video' && source ? (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${source}?rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) 
      
      /* 2. GOOGLE FORM (Tampilan Card Persiapan Quiz) */
      /* Desainnya dibuat lebih compact dan menarik */
      : type === 'gform' && source ? (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white text-center p-8">
            
            {/* Icon Hiasan */}
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-6">
                <span className="text-4xl">📝</span>
            </div>

            <h3 className="text-xl md:text-2xl font-extrabold text-asby-dark mb-2">
              Sudah Siap Mengerjakan Kuis?
            </h3>
            <p className="text-gray-500 text-sm max-w-md mb-8 leading-relaxed">
                Kuis ini akan dibuka di tab baru menggunakan Google Form. Pastikan koneksi internetmu lancar ya!
            </p>

            <a 
                href={source}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-200 bg-asby-dark font-lg rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-asby-teal hover:shadow-lg hover:-translate-y-0.5"
            >
                <span>Mulai Kerjakan Kuis</span>
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>

        </div>
      )

      /* 3. GAMBAR */
      : type === 'image' && source ? (
        <div className="relative w-full h-full bg-gray-50 flex items-center justify-center p-4">
            <img 
                src={source} 
                alt={title} 
                className="w-full h-full object-contain rounded-xl" 
            />
        </div>
      )

      /* 4. DOKUMEN (PDF) */
      : type === 'doc' && source ? (
        <iframe
            src={source} 
            className="w-full h-full bg-white"
            title="Document Viewer"
        ></iframe>
      )

      /* 5. DEFAULT */
      : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 text-asby-dark">
          <span className="text-5xl mb-4 opacity-20">📂</span>
          <p className="font-extrabold text-lg opacity-50">Select a lesson to view</p>
        </div>
      )}
      
    </div>
  );
}