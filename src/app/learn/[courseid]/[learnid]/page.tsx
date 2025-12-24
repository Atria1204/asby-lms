// src/app/learn/[courseId]/[lessonId]/page.tsx

import Link from "next/link";

interface PageProps {
  params: Promise<{ courseId: string; lessonId: string }>;
}

export default async function LearningRoom({ params }: PageProps) {
  const { courseId, lessonId } = await params;

  // DATA DUMMY (Daftar Materi di Sidebar)
  const lessons = [
    { id: "intro", title: "Introduction to Departments", type: "video", duration: "15:00", active: lessonId === "intro" },
    { id: "sop", title: "Standard Operating Procedure", type: "pdf", duration: "5 min read", active: lessonId === "sop" },
    { id: "kpi", title: "KPI & Tracking Sheet", type: "video", duration: "10:00", active: lessonId === "kpi" },
    { id: "quiz", title: "Review Quiz", type: "quiz", duration: "10 Soal", active: lessonId === "quiz" },
  ];

  // Cari materi yang lagi dibuka sekarang
  const currentLesson = lessons.find(l => l.id === lessonId) || lessons[0];

  return (
    <div className="flex h-screen bg-white font-sans overflow-hidden">
      
      {/* --- SIDEBAR (DAFTAR MATERI) --- */}
      <aside className="w-80 bg-gray-50 border-r border-gray-200 flex flex-col hidden md:flex">
        
        {/* Header Sidebar */}
        <div className="p-6 border-b border-gray-200">
          <Link href={`/courses/${courseId}`} className="text-xs font-bold text-gray-500 hover:text-blue-600 flex items-center gap-1 mb-2 transition">
            ← Back to Course
          </Link>
          <h2 className="font-bold text-gray-900 leading-tight">
            Functional Knowledge Phase
          </h2>
          <div className="mt-3 w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
            <div className="bg-blue-600 h-full w-1/3 rounded-full"></div>
          </div>
          <p className="text-xs text-gray-400 mt-1">33% Completed</p>
        </div>

        {/* List Lesson */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {lessons.map((lesson, idx) => (
            <Link key={idx} href={`/learn/${courseId}/${lesson.id}`}>
              <div className={`p-3 rounded-lg flex items-center gap-3 transition-all cursor-pointer ${lesson.active ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-gray-200 text-gray-700'}`}>
                {/* Icon Status */}
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${lesson.active ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-500'}`}>
                  {idx + 1}
                </div>
                
                <div className="flex-1">
                  <p className={`text-sm font-medium leading-tight ${lesson.active ? 'text-white' : 'text-gray-800'}`}>
                    {lesson.title}
                  </p>
                  <span className={`text-[10px] ${lesson.active ? 'text-blue-100' : 'text-gray-400'}`}>
                    {lesson.type.toUpperCase()} • {lesson.duration}
                  </span>
                </div>

                {lesson.active && <span className="text-xs animate-pulse">▶</span>}
              </div>
            </Link>
          ))}
        </div>

      </aside>


      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        
        {/* Top Bar Mobile (Hanya muncul di HP) */}
        <div className="md:hidden p-4 border-b border-gray-200 flex justify-between items-center bg-white">
          <Link href={`/courses/${courseId}`} className="text-sm font-bold text-gray-500">← Back</Link>
          <span className="font-bold text-gray-900 truncate max-w-[200px]">{currentLesson.title}</span>
        </div>

        {/* CONTENT VIEWER */}
        <div className="flex-1 overflow-y-auto bg-gray-100 p-4 md:p-8 flex items-center justify-center">
          
          <div className="w-full max-w-5xl">
            {/* VIDEO PLAYER CONTAINER */}
            <div className="bg-black rounded-2xl shadow-2xl aspect-video relative overflow-hidden group">
              {currentLesson.type === 'video' ? (
                // Dummy Video Youtube
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1" 
                  title="Video Player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                // Placeholder buat PDF / Quiz
                <div className="w-full h-full flex flex-col items-center justify-center text-white bg-slate-800">
                  <span className="text-5xl mb-4">📄</span>
                  <h3 className="text-2xl font-bold">Document Viewer</h3>
                  <p className="text-gray-400">File: {currentLesson.title}</p>
                </div>
              )}
            </div>

            {/* JUDUL & NAVIGASI BAWAH */}
            <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{currentLesson.title}</h1>
                <p className="text-gray-500 mt-1">Lesson {lessonId} • Functional Knowledge Phase</p>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <button className="flex-1 md:flex-none px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-bold hover:bg-gray-50 transition">
                  Previous
                </button>
                <button className="flex-1 md:flex-none px-6 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition transform hover:-translate-y-1">
                  Mark as Complete & Next →
                </button>
              </div>
            </div>

          </div>
        </div>

      </main>

    </div>
  );
}