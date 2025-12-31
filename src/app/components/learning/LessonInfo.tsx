import { useState } from "react";

interface LessonInfoProps {
  activeLesson: any;
}

export default function LessonInfo({ activeLesson }: LessonInfoProps) {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="flex flex-col gap-6">
      {/* JUDUL & TABS */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-asby-dark leading-tight">
          {activeLesson?.title}
        </h2>
        
        <div className="flex gap-2 border-b border-gray-200 pb-1">
          {["Overview", "Catatan", "Resources"].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-bold transition-all relative ${
                activeTab === tab 
                ? "text-asby-dark" 
                : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-[-1px] left-0 right-0 h-1 bg-asby-dark rounded-t-full"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* KONTEN TAB */}
      <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
        {activeTab === "Overview" && (
          <div className="animate-fade-in-up">
            <h3 className="font-bold text-lg mb-3 text-asby-dark">Tentang Lesson Ini</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Dalam modul ini, kamu akan mempelajari dasar-dasar yang sangat penting. Materi ini dirancang untuk memberikan pemahaman mendalam tentang nilai-nilai dan budaya AIESEC. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium consectetur, quaerat quidem est numquam officia? Hic nesciunt, molestiae ut reprehenderit modi, itaque cupiditate blanditiis necessitatibus eos cumque est delectus tempora. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe nam dolor laborum laudantium iusto et, reiciendis suscipit nesciunt fuga sit dicta vel quibusdam, tempora fugiat odio? In, blanditiis numquam? Sapiente. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim recusandae quo nam et minus vero ea labore, soluta delectus nesciunt illo consequuntur voluptatibus totam repudiandae. Accusamus, aut tenetur? Voluptates, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptas, consequatur corrupti dolore, dolor ipsum velit cum quia tempora nostrum perspiciatis provident natus. Reiciendis dolor beatae similique pariatur ad omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihil unde necessitatibus possimus quisquam quos laborum perferendis, illum vel facilis quis aperiam, voluptatem rerum quo laudantium. Provident ut nostrum modi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi consequuntur excepturi et molestias iure neque voluptates ullam impedit alias voluptatem! Fugit, numquam sunt cumque placeat molestias quisquam facilis quibusdam! Ullam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consequatur eveniet ducimus eos consectetur totam facere, aut fugiat deserunt maiores ratione exercitationem modi sequi inventore blanditiis officiis quaerat minus quisquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione perferendis ea accusamus debitis commodi, in veniam quaerat fugiat blanditiis, natus cumque pariatur quod tempora rem, eligendi eveniet velit asperiores. Cum!
            </p>
            <div className="flex items-center gap-6 pt-6 border-t border-gray-50 text-xs font-bold text-gray-400 uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <span className="text-lg">⏱️</span> {activeLesson?.duration || "10 min"}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">📂</span> {activeLesson?.type === 'video' ? 'Video Format' : 'Reading Material'}
              </div>
            </div>
          </div>
        )}
        {activeTab === "Catatan" && <p className="text-gray-500 text-sm italic">Belum ada catatan pribadi.</p>}
        {activeTab === "Resources" && <p className="text-gray-500 text-sm italic">Tidak ada lampiran file untuk materi ini.</p>}
      </div>
    </div>
  );
}