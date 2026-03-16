import { Languages } from 'lucide-react';

export default function TranslateButton() {
  return (
    <div className="fixed bottom-24 right-6 z-[100] flex flex-col items-end gap-2">
      {/* Label kecil estetik dengan animasi bounce lembut */}
      <div className="animate-bounce">
        <span className="bg-white/90 backdrop-blur-sm text-pink-500 text-[10px] px-3 py-1 rounded-full shadow-sm border border-pink-100 font-bold uppercase tracking-[0.2em]">
          Translate ✨
        </span>
      </div>
      
      {/* Box Utama */}
      <div className="p-3 bg-white/80 backdrop-blur-md rounded-3xl shadow-[0_10px_25px_-5px_rgba(251,182,206,0.4)] border border-pink-100 transition-all duration-300 hover:shadow-pink-200/60 group">
        
        {/* Header Button (Ikon & Teks) */}
        <div className="flex items-center gap-2 px-2 pb-2 border-b border-pink-50 mb-2 text-pink-400">
          <Languages size={18} className="group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-xs font-bold uppercase tracking-wider">Select Language</span>
        </div>

        {/* Tempat Widget Google Translate Muncul.
            Saran: Berikan sedikit styling di CSS agar dropdown-nya tidak berantakan.
        */}
        <div 
          id="google_translate_element" 
          className="min-w-[120px] min-h-[30px] flex justify-center items-center"
        >
          {/* Widget Google akan otomatis "disuntikkan" ke sini oleh script di index.html */}
        </div>
      </div>
    </div>
  );
}