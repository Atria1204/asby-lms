import Navbar from "../../components/Navbar";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CourseLMS({ params }: PageProps) {
  const { id } = await params;
  const formattedTitle = id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  // DATA DUMMY DENGAN STATUS
  const resources = [
    {
      section: "Phase 1: The AIESEC Way",
      description: "Fundamental Organisasi",
      items: [
        { title: "History of AIESEC", type: "video", isCompleted: true, duration: "10m" },
        { title: "AIESEC Way Booklet", type: "doc", isCompleted: true, duration: "PDF" },
        { title: "Leadership Qualities", type: "ppt", isCompleted: false, duration: "Slides" },
      ],
    },
    {
      section: "Phase 2: Functional Knowledge",
      description: "Technical Skills",
      items: [
        { title: "Intro to Department", type: "video", isCompleted: false, duration: "15m" },
        { title: "SOP Document", type: "doc", isCompleted: false, duration: "Read" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans pb-20 selection:bg-asby-light selection:text-asby-dark">
      <Navbar />

      {/* HEADER: COMPACT LMS STYLE */}
      <div className="w-full pt-32 pb-20 px-6 bg-asby-dark border-b border-gray-800 relative overflow-hidden">
         {/* Hiasan Background */}
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-asby-teal/20 to-transparent opacity-30 skew-x-12 pointer-events-none"></div>

         <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10 animate-fade-in-up">
            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-bold text-gray-300 uppercase tracking-wider">
               <span>Course Progress</span>
               <span className="text-white">•</span>
               <span className="text-asby-gold">60% Completed</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
               {formattedTitle}
            </h1>
            
            {/* Progress Bar Besar */}
            <div className="w-full max-w-md h-2 bg-gray-700 rounded-full overflow-hidden mb-2">
                <div className="w-[60%] h-full bg-asby-gold shadow-[0_0_10px_rgba(212,155,31,0.5)]"></div>
            </div>
            <p className="text-gray-400 text-xs">3 of 5 lessons completed</p>
         </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="w-full max-w-4xl mx-auto px-6 -mt-10 relative z-20">
        <div className="space-y-8 animate-fade-in-up delay-200 opacity-0" style={{ animationFillMode: 'forwards' }}> 
          
          {resources.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-200/50 overflow-hidden">
              
              {/* Header Section */}
              <div className="px-8 py-6 border-b border-gray-50 bg-gray-50/30 flex justify-between items-center">
                 <div>
                    <h2 className="text-lg font-bold text-asby-dark">{section.section}</h2>
                    <p className="text-xs text-gray-500">{section.description}</p>
                 </div>
                 {/* Circle Progress Kecil */}
                 <div className="w-8 h-8 rounded-full border-2 border-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-400">
                    2/3
                 </div>
              </div>

              {/* List Materi Checklist */}
              <div className="divide-y divide-gray-50">
                {section.items.map((item, idx) => (
                    <div key={idx} className={`px-8 py-5 flex items-center justify-between hover:bg-gray-50 transition group cursor-pointer ${item.isCompleted ? 'bg-blue-50/20' : ''}`}>
                        
                        <div className="flex items-center gap-4">
                            {/* CHECKBOX CUSTOM */}
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                                item.isCompleted 
                                ? 'bg-green-500 border-green-500 text-white scale-110' 
                                : 'border-gray-300 text-transparent hover:border-asby-teal'
                            }`}>
                                <svg className="w-3 h-3 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>

                            <div>
                                <h3 className={`font-bold text-base transition-colors ${
                                    item.isCompleted ? 'text-gray-500 line-through decoration-gray-300' : 'text-asby-dark group-hover:text-asby-teal'
                                }`}>
                                    {item.title}
                                </h3>
                                <div className="flex items-center gap-2 text-xs text-gray-400 mt-0.5">
                                    <span className="uppercase">{item.type}</span>
                                    <span>•</span>
                                    <span>{item.duration}</span>
                                </div>
                            </div>
                        </div>

                        {/* Tombol Action */}
                        <button className={`px-4 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                            item.isCompleted 
                            ? 'bg-transparent text-green-600 border-transparent' 
                            : 'bg-asby-dark text-white border-asby-dark hover:bg-asby-teal hover:border-asby-teal shadow-md shadow-blue-200'
                        }`}>
                            {item.isCompleted ? 'Review' : 'Start'}
                        </button>

                    </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}