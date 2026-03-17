import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, ChevronDown, Flower, BookHeart, UserCircle } from 'lucide-react';

// Efek Bunga Sakura Berguguran
const SakuraFalling = () => {
  const petals = Array.from({ length: 15 });
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((_, i) => (
        <motion.div
          key={i}
          initial={{ top: -20, left: `${Math.random() * 100}%`, opacity: 0, rotate: 0 }}
          animate={{ 
            top: "110%", 
            left: `${Math.random() * 100}%`, 
            opacity: [0, 1, 1, 0],
            rotate: 360 
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 20,
            ease: "linear"
          }}
          className="absolute w-3 h-3 bg-[#ffd1dc] rounded-[100%_0%_100%_20%] blur-[0.5px]"
        />
      ))}
    </div>
  );
};

// Dekorasi Lingkaran Lembut
const JapaneseDecorations = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-64 h-64 bg-pink-100/50 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-10 -right-10 opacity-10"
      >
        <Flower className="w-48 h-48 text-pink-400" />
      </motion.div>
    </div>
  );
};

export default function AboutSection() {
  const [expanded, setExpanded] = useState(0);

  const accordionData = [
    {
      title: "Passionate Developer",
      icon: <Code2 className="w-5 h-5 text-pink-400" />,
      content: "Halo! Saya Feby. Pelajar yang punya ketertarikan besar di dunia web. Fokus saya sederhana: bikin website yang nggak cuma enak dilihat, tapi juga asyik buat digunain dan disukai oleh berbagai kalangan orang.",
      content2: "Bagi saya, coding adalah soal memecahkan masalah dengan logika yang rapi dan visual yang pas. Di dalam portofolio ini, setiap proyek adalah hasil eksperimen saya dengan teknologi baru.",
      content3: "Mulai dari struktur kode yang efisien sampai detail ikonografi bunga sakura yang mempercantik tampilan."
    },
    {
      title: "Hobby & Dreams",
      icon: <BookHeart className="w-5 h-5 text-pink-400" />,
      content: "Selain tertarik pada coding, saya juga sangat senang menulis, terutama menulis novel dan cerpen.",
      content2: "Saya percaya bahwa suatu saat saya dapat menerbitkan buku milik saya sendiri.",
      content3: "Mungkin saya bisa membuat sebuah website perbukuan agar semua orang dapat membaca tanpa harus mengeluarkan biaya."
    },
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 bg-[#fff9fa] overflow-hidden border-t-4 border-pink-100">
      <SakuraFalling />
      <JapaneseDecorations />

      <div className="container mx-auto px-4 relative z-10">
        {/* JUDUL SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-pink-400 font-medium mb-2 block tracking-[0.3em] text-xs uppercase">About Me / アバウトミー</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            This is me!
          </h2>
          <div className="flex justify-center items-center gap-2">
            <div className="w-12 h-[2px] bg-pink-200" />
            <Flower className="w-5 h-5 text-pink-300 animate-spin-slow" />
            <div className="w-12 h-[2px] bg-pink-200" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* BAGIAN FOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Bingkai Belakang */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-pink-200 to-rose-100 rounded-[2rem] blur-xl opacity-50 -z-10 animate-pulse" />
              
              <motion.div 
                whileHover={{ y: -10, rotate: 1 }}
                className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white bg-white"
              >
                <img 
                  src="/pict.jpeg" 
                  alt="Feby Calista Balqis" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Hiasan Ikon Bunga Kecil */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-6 -right-6 z-20 bg-white p-3 rounded-full shadow-lg border border-pink-50"
              >
                <UserCircle className="w-8 h-8 text-pink-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* BAGIAN ACCORDION */}
          <div className="space-y-6">
            {accordionData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="rounded-2xl overflow-hidden bg-white/40 backdrop-blur-md border border-white shadow-sm hover:shadow-md transition-all"
              >
                <button
                  onClick={() => setExpanded(expanded === index ? -1 : index)}
                  className="w-full p-5 flex items-center justify-between text-left transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-pink-50 rounded-lg group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="font-bold text-lg text-rose-900/80">{item.title}</span>
                  </div>
                  <ChevronDown className={`h-5 w-5 text-pink-300 transition-transform duration-300 ${expanded === index ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {expanded === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-rose-900/70 text-sm md:text-base space-y-3 font-medium">
                        <div className="w-full h-[1px] bg-pink-50 mb-4" />
                        <p className="leading-relaxed">{item.content}</p>
                        <p className="italic text-pink-500">{item.content2}</p>
                        <p className="leading-relaxed">{item.content3}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}