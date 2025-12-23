// src/app/components/CourseCard.tsx

// Kita definisikan "cetakan" datanya (TypeScript)
interface CourseProps {
  title: string;
  lessons: number;
  color: string;
  icon: string;
}

export default function CourseCard({ title, lessons, color, icon }: CourseProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
      
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center text-2xl`}>
          {icon}
        </div>
        <span className="text-xs font-medium bg-gray-100 text-gray-600 py-1 px-2 rounded">Free</span>
      </div>

      <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-400 mt-1">{lessons} Video Pembelajaran</p>
      
      <div className="mt-6">
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>Progress</span>
          <span>0%</span>
        </div>
        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
          <div className="bg-blue-600 h-full w-0 rounded-full"></div>
        </div>
      </div>

    </div>
  );
}