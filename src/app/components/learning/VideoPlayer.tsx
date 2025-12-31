interface VideoPlayerProps {
  type: string;          // 'video' | 'image' | 'doc'
  source: string | null; // YouTube ID atau URL
  title: string;
}

export default function VideoPlayer({ type, source, title }: VideoPlayerProps) {
  return (
    <div className="w-full bg-black rounded-3xl overflow-hidden shadow-2xl shadow-asby-dark/20 border border-gray-200 aspect-video relative group flex items-center justify-center">
      
      {/* LOGIKA PEMILIHAN KONTEN */}
      
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
      
      /* 2. GAMBAR (Infografis/Diagram) */
      : type === 'image' && source ? (
        <div className="relative w-full h-full bg-gray-900 flex items-center justify-center">
            <img 
                src={source} 
                alt={title} 
                className="w-full h-full object-contain" 
            />
        </div>
      )

      /* 3. DOKUMEN (PDF Viewer via Iframe) */
      : type === 'doc' && source ? (
        <iframe
            src={source} 
            className="w-full h-full bg-white"
            title="Document Viewer"
        ></iframe>
      )

      /* 4. DEFAULT / KOSONG */
      : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 text-asby-dark">
          <span className="text-5xl mb-4 opacity-20">📂</span>
          <p className="font-extrabold text-lg opacity-50">Select a lesson to view</p>
        </div>
      )}
      
    </div>
  );
}