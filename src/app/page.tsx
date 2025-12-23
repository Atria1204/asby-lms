// src/app/page.tsx
import CourseCard from "./components/CourseCard"; // <--- INI CARA MANGGIL FILE LAIN (IMPORT)
import Navbar from "./components/Navbar";

export default function Home() {
  const courses = [
    { title: "Belajar HTML Dasar", lessons: 12, color: "bg-blue-100", icon: "🌐" },
    { title: "Javascript untuk Pemula", lessons: 20, color: "bg-orange-100", icon: "⚡" },
    { title: "Desain UI dengan Figma", lessons: 8, color: "bg-purple-100", icon: "🎨" },
    { title: "Python Data Science", lessons: 15, color: "bg-green-100", icon: "🐍" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* 2. PASANG NAVBAR DISINI (Paling Atas) */}
      <Navbar /> 

      {/* Konten Utama dikasih padding (p-8) biar gak mepet navbar */}
      <main className="p-8">
      
        <div className="min-h-screen bg-gray-50 p-8 font-sans">
          <div className="max-w-6xl mx-auto mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Asby Learning Center</h1>
            <p className="text-gray-500">Tingkatkan skill kamu dengan materi terbaik.</p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              // Kodenya jadi jauuuuh lebih pendek & rapi kan?
              <CourseCard 
                key={index}
                title={course.title}
                lessons={course.lessons}
                color={course.color}
                icon={course.icon}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}