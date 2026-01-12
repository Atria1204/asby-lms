"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import LearningNavbar from "@/app/components/learning/LearningNavbar";
import VideoPlayer from "@/app/components/learning/VideoPlayer";
import LessonInfo from "@/app/components/learning/LessonInfo";
import CourseSidebar from "@/app/components/learning/CourseSidebar";
import CourseFooter from "@/app/components/learning/CourseFooter";

// --- DATA DUMMY ---
const courseData: Record<string, any> = {
  "the-aiesec-way": {
    title: "The AIESEC Way",
    progress: 60,
    totalLessons: 5,
    completedLessons: 3,
    totalDuration: "2h 15m",
    sections: [
      {
        section: "Phase 1: The AIESEC Way",
        items: [
          { id: 1, title: "History of AIESEC", type: "video", isCompleted: true, duration: "10m", source: "bQ34_s54qAo" }, 
          { id: 2, title: "AIESEC Way Booklet", type: "doc", isCompleted: true, duration: "15m", source: "https://pdfobject.com/pdf/sample.pdf" },
          { id: 3, title: "Leadership Qualities", type: "ppt", isCompleted: true, duration: "20m", source: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1000" },
          { 
            id: 99, 
            title: "Quiz: Phase 1 Review", 
            type: "gform", 
            isCompleted: false, 
            duration: "10m",
            // Link Google Form
            source: "https://docs.google.com/forms/d/e/1FAIpQLSd9f_GgYpTqLqZ0sZ7rX9j7vX9j7vX9j7vX9j7vX9j7vX9j7v/viewform", 
            description: "Kerjakan kuis ini di Google Form. Klik tombol di layar untuk membuka."
          },
        ],
      },
      {
        section: "Phase 2: Functional Knowledge",
        items: [
          { id: 4, title: "Intro to Department", type: "video", isCompleted: false, duration: "15m", source: "bQ34_s54qAo" },
          { id: 5, title: "SOP Document", type: "doc", isCompleted: false, duration: "30m", source: "https://pdfobject.com/pdf/sample.pdf" },
        ],
      },
    ]
  },
  "functional-knowledge": {
    title: "Functional Knowledge",
    progress: 20,
    totalLessons: 10,
    completedLessons: 2,
    totalDuration: "4h 30m",
    sections: [
      {
        section: "Onboarding Dept",
        items: [
          { id: 101, title: "Intro to Marketing", type: "video", isCompleted: true, duration: "20m", source: "bQ34_s54qAo" },
          { id: 102, title: "Understanding Customer", type: "video", isCompleted: false, duration: "15m", source: "bQ34_s54qAo" },
        ],
      },
    ]
  }
};

export default function CourseLMS() {
  const params = useParams();
  const id = params.id as string;
  const course = courseData[id];

  // State
  const [activeLesson, setActiveLesson] = useState<any>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // --- LOGIC 1: AMBIL DATA DARI LOCAL STORAGE SAAT LOAD (Agar tidak reset saat refresh) ---
  useEffect(() => {
    if (!course) return;

    // Cek apakah ada data tersimpan di browser
    const savedLessonId = localStorage.getItem(`lastLesson_${id}`);
    
    // Ambil semua lesson untuk pencarian
    const allLessons = course.sections.flatMap((section: any) => section.items);
    
    if (savedLessonId) {
        // Jika ada history, cari lessonnya
        const foundLesson = allLessons.find((item: any) => item.id.toString() === savedLessonId);
        if (foundLesson) {
            setActiveLesson(foundLesson);
        } else {
            // Fallback kalau ID gak ketemu, pake yg pertama
            setActiveLesson(allLessons[0]);
        }
    } else {
        // Jika belum ada history sama sekali, set lesson pertama
        setActiveLesson(allLessons[0]);
    }

    // Auto close sidebar di mobile
    if (window.innerWidth < 1024) setIsSidebarOpen(false);
  }, [id, course]);


  // --- LOGIC 2: FUNGSI GANTI MATERI (HANDLE KLIK) ---
  const handleLessonChange = (item: any) => {
    // 1. Simpan state aktif
    setActiveLesson(item);
    
    // 2. Simpan ke LocalStorage biar aman pas refresh
    localStorage.setItem(`lastLesson_${id}`, item.id.toString());

    // 4. Auto close sidebar di mobile
    if (window.innerWidth < 1024) setIsSidebarOpen(false);
  };


  // --- SETUP NAVIGASI NEXT/PREV ---
  const getAllLessons = () => {
    if (!course) return [];
    return course.sections.flatMap((section: any) => section.items);
  };

  const allLessons = getAllLessons();
  const currentIndex = allLessons.findIndex((item: any) => item?.id === activeLesson?.id);
  const isFirstLesson = currentIndex === 0;
  const isLastLesson = currentIndex === allLessons.length - 1;
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  const handleNavigation = (direction: 'next' | 'prev') => {
    if (direction === 'next' && nextLesson) handleLessonChange(nextLesson);
    if (direction === 'prev' && prevLesson) handleLessonChange(prevLesson);
  };

  if (!course) return <div className="min-h-screen flex items-center justify-center text-asby-dark font-bold">Loading Content...</div>;

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-asby-dark overflow-hidden flex flex-col">
      
      <LearningNavbar 
        title={course.title}
        progress={course.progress}
        completedLessons={course.completedLessons}
        totalLessons={course.totalLessons}
      />

      <div className="flex flex-1 pt-16 h-screen overflow-hidden relative">
        
        {!isSidebarOpen && (
            <button 
                onClick={() => setIsSidebarOpen(true)}
                className="fixed right-0 top-24 z-50 bg-asby-dark text-white w-10 h-12 flex items-center justify-center rounded-l-xl shadow-lg hover:bg-asby-teal transition-colors"
                title="Buka Daftar Materi"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        )}

        {/* AREA KIRI: KONTEN UTAMA */}
        <main 
            className="flex-1 overflow-y-auto custom-scrollbar relative bg-gray-50 w-full min-w-0"
            style={{ scrollbarGutter: 'stable' }} 
        >
           <div className="w-full max-w-6xl mx-auto px-6 md:px-12 py-10 pb-32">
              
              {activeLesson ? (
                  <div className="flex flex-col gap-8">
                      <div className="mb-2">
                        <h1 className="text-2xl md:text-4xl font-extrabold text-asby-dark leading-tight mb-4">
                            {activeLesson.title}
                        </h1>
                        <div className="flex items-center gap-3">
                            <div className="h-[2px] w-full max-w-2xl bg-gradient-to-r from-asby-gold via-asby-gold/30 to-transparent rounded-full"></div>
                        </div>
                      </div>

                      <VideoPlayer 
                          type={activeLesson.type}
                          source={activeLesson.source} 
                          title={activeLesson.title} 
                      />
                      
                      <LessonInfo activeLesson={activeLesson} />
                  </div>
              ) : (
                 <div className="flex items-center justify-center h-64">Loading Lesson...</div>
              )}

           </div>
        </main>

        {/* AREA KANAN: SIDEBAR */}
        <aside 
            className={`
                bg-white border-l border-gray-200 
                overflow-hidden flex-shrink-0 relative z-20
                transition-[width] duration-300 ease-in-out will-change-auto
                ${isSidebarOpen ? 'w-[350px]' : 'w-0'}
            `}
        >
            <div className="w-[350px] h-full"> 
                <CourseSidebar 
                    course={course} 
                    activeLesson={activeLesson} 
                    setActiveLesson={handleLessonChange} // Pake handler baru yg ada logic LocalStorage
                    isSidebarOpen={isSidebarOpen}
                    toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
                />
            </div>
        </aside>

      </div>

      <CourseFooter 
        onPrev={() => handleNavigation('prev')}
        onNext={() => handleNavigation('next')}
        isFirst={isFirstLesson}
        isLast={isLastLesson}
        prevTitle={prevLesson?.title}
        nextTitle={nextLesson?.title}
        currentLessonTitle={activeLesson?.title || "Loading..."}
      />

    </div>
  );
}