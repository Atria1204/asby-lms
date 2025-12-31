"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import LearningNavbar from "@/app/components/learning/LearningNavbar";
import VideoPlayer from "@/app/components/learning/VideoPlayer";
import LessonInfo from "@/app/components/learning/LessonInfo";
import CourseSidebar from "@/app/components/learning/CourseSidebar";
import CourseFooter from "@/app/components/learning/CourseFooter";

// --- DATA DUMMY (SAMA SEPERTI SEBELUMNYA) ---
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

  const [activeLesson, setActiveLesson] = useState<any>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
    if (direction === 'next' && nextLesson) setActiveLesson(nextLesson);
    if (direction === 'prev' && prevLesson) setActiveLesson(prevLesson);
  };

  useEffect(() => {
    if (course && course.sections.length > 0 && !activeLesson) {
        setActiveLesson(course.sections[0].items[0]);
    }
  }, [course, activeLesson]);

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
        
        {/* === TOMBOL BUKA SIDEBAR (NEMPEL KANAN) === */}
        {/* Menggunakan Icon Hamburger (Garis Tiga) */}
        {!isSidebarOpen && (
            <button 
                onClick={() => setIsSidebarOpen(true)}
                // right-0: Nempel kanan pas
                // rounded-l-xl: Melengkung cuma di kiri
                className="fixed right-0 top-24 z-50 bg-asby-dark text-white w-12 h-12 flex items-center justify-center rounded-l-xl shadow-lg hover:bg-asby-teal transition-all animate-fade-in-left"
                title="Buka Daftar Materi"
            >
                {/* Icon Hamburger */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        )}

        {/* === AREA KIRI: KONTEN UTAMA === */}
        <main className="flex-1 overflow-y-auto custom-scrollbar relative bg-gray-50">
           {/* max-w dibuat agak lebar biar enak kalau sidebar tutup */}
           <div className={`px-4 md:px-8 py-8 mx-auto pb-32 transition-all duration-300 ${isSidebarOpen ? 'max-w-5xl' : 'max-w-6xl'}`}>
              
              <div className="flex flex-col gap-8">
                  <VideoPlayer 
                      type={activeLesson?.type}
                      source={activeLesson?.source} 
                      title={activeLesson?.title} 
                  />
                  <LessonInfo activeLesson={activeLesson} />
              </div>

           </div>
        </main>

        {/* === AREA KANAN: SIDEBAR === */}
        <aside 
            className={`bg-white border-l border-gray-200 transition-all duration-500 ease-in-out overflow-hidden flex-shrink-0 relative z-20 ${
                isSidebarOpen ? 'w-[350px] opacity-100' : 'w-0 opacity-0'
            }`}
        >
            <div className="w-[350px]"> 
                <CourseSidebar 
                    course={course} 
                    activeLesson={activeLesson} 
                    setActiveLesson={setActiveLesson}
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
      />

    </div>
  );
}