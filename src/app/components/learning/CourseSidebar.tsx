"use client";

import { useState } from "react";

interface CourseSidebarProps {
  course: any;
  activeLesson: any;
  setActiveLesson: (item: any) => void;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  completedIds: number[];
}

export default function CourseSidebar({ 
  course, 
  activeLesson, 
  setActiveLesson,
  isSidebarOpen,
  toggleSidebar,
  completedIds
}: CourseSidebarProps) {
  
  const [openSections, setOpenSections] = useState<number[]>([0]);

  const toggleSection = (index: number) => {
    if (openSections.includes(index)) {
      setOpenSections(openSections.filter((i) => i !== index));
    } else {
      setOpenSections([...openSections, index]);
    }
  };

  return (
    <div className={`bg-white border-l border-gray-200 h-[calc(100vh-4rem)] flex flex-col transition-all duration-300`}>
      
      {/* Header Sidebar */}
      <div className="p-5 border-b border-gray-100 bg-white z-10 flex justify-between items-center sticky top-0">
        <div>
          <h3 className="font-extrabold text-asby-dark text-base mb-0.5">Course Content</h3>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wide">{course.totalLessons} lessons • {course.totalDuration}</p>
        </div>
        
        {/* Tombol Close diganti Panah Kanan */}
        <button 
          onClick={toggleSidebar}
          className="text-gray-400 hover:text-asby-dark hover:bg-gray-100 p-2 rounded-lg transition-colors"
          title="Tutup Sidebar"
        >
          {/* Icon Panah Kanan */}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      {/* List Materi */}
      <div className="overflow-y-auto custom-scrollbar flex-1 pb-24">
        {course.sections.map((section: any, sectionIdx: number) => {
          
          const completedCount = section.items.filter((i: any) => i.isCompleted).length;
          const totalCount = section.items.length;
          const isOpen = openSections.includes(sectionIdx);

          return (
            <div key={sectionIdx} className="border-b border-gray-100 last:border-0">
              
              {/* HEADER SECTION (PHASE) */}
              <button 
                onClick={() => toggleSection(sectionIdx)}
                className={`w-full px-5 py-3 flex items-center justify-between transition-all text-left relative ${
                  isOpen 
                    ? 'bg-gray-50 text-asby-dark' 
                    : 'bg-white hover:bg-gray-50 text-gray-600'
                }`}
              >
                {/* [UPDATE] Garis Kuning Emas DIHAPUS sesuai request */}
                
                <div>
                  <h4 className={`text-[11px] font-extrabold uppercase tracking-wide mb-1 ${isOpen ? 'text-asby-dark' : 'text-gray-500'}`}>
                    {section.section}
                  </h4>
                  <p className="text-[9px] text-gray-400 font-bold">
                    {completedCount}/{totalCount} Selesai
                  </p>
                </div>
                
                {/* Icon Chevron */}
                <div className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-asby-dark' : ''}`}>
                  ▼
                </div>
              </button>
              
              {/* ITEM LIST */}
              <div 
                 className={`transition-all duration-500 ease-in-out overflow-hidden ${
                   isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                 }`}
              >
                {section.items.map((item: any, idx: number) => {
                  const isActive = activeLesson?.id === item.id;

                  const isDone = completedIds.includes(item.id); 
                  
                  return (
                    <div 
                      key={idx}
                      onClick={() => setActiveLesson(item)}
                      className={`group relative flex gap-3 p-4 pl-5 cursor-pointer transition-all border-b border-gray-50 hover:bg-gray-50 ${
                        isActive ? 'bg-blue-50/40' : 'bg-white'
                      }`}
                    >
                      {/* Marker Lesson Aktif (Tetap ada biar user tau mana yg diputar) */}
                      {isActive && <div className="absolute left-0 top-0 bottom-0 w-1 bg-asby-gold"></div>}

                      <div className="mt-0.5 flex-shrink-0">
                        {/* 🔥 UBAH DI SINI: Gunakan 'isDone' untuk menampilkan centang hijau */}
                        {isDone ? (
                          <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-[10px] font-bold">✓</div>
                        ) : isActive ? (
                          <div className="w-5 h-5 rounded-full bg-asby-dark text-white flex items-center justify-center text-[8px]">▶</div>
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                        )}
                      </div>

                      <div className="flex-1">
                        <h4 className={`text-xs font-bold mb-1 leading-snug ${isActive ? 'text-asby-dark' : 'text-gray-600 group-hover:text-asby-dark'}`}>
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-2 text-[9px] text-gray-400 font-bold uppercase">
                          <span>{item.type}</span>
                          <span>•</span>
                          <span>{item.duration}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}