import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Video, ChevronDown, Flower } from 'lucide-react';

// --- KOMPONEN SAKURA (Efek Jatuh) ---
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

// --- KOMPONEN HIASAN JEPANG (BARU) ---
const JapaneseDecorations = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Lingkaran Matahari Terbit Pink (Kiri Atas) */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-64 h-64 bg-pink-100/50 rounded-full blur-3xl"
      />

      {/* 2. Ikon Bunga Sakura Besar (Kanan Bawah) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-10 -right-10 opacity-10"
      >
        <Flower className="w-48 h-48 text-pink-400" />
      </motion.div>

      {/* 3. Aksen Garis Gelombang (Kiri Bawah) */}
      <div className="absolute bottom-20 left-10 opacity-20">
        <svg width="200" height="40" viewBox="0 0 200 40" fill="none">
          <path d="M0 20C20 20 20 5 40 5C60 5 60 20 80 20C100 20 100 35 120 35C140 35 140 20 160 20C180 20 180 5 200 5" stroke="#F472B6" strokeWidth="2"/>
        </svg>
      </div>
    </div>
  );
};

// --- KOMPONEN UTAMA ---
export default function AboutSection() {
  const [expanded, setExpanded] = useState(0);

  const stats = [
    { icon: Code2, value: '50+', label: 'Projects Selesai' },
    { icon: Video, value: '100+', label: 'Video Konten' },
  ];

  const accordionData = [
    {
      title: "Passionate Developer",
      content: "Halo! Saya Feby. Pelajar yang punya ketertarikan besar di dunia web. Fokus saya sederhana: bikin website yang nggak cuma enak dilihat, tapi juga asyik buat digunain dan disukai oleh berbagai kalangan orang. Yuk, lihat apa yang baru saja saya buat!",
      content2: "Bagi saya, coding adalah soal memecahkan masalah dengan logika yang rapi dan visual yang pas. Di dalam portofolio ini, setiap proyek adalah hasil eksperimen saya dengan teknologi baru.",
      content3: "Mulai dari struktur kode yang efisien sampai detail ikonografi bunga sakura yang mempercantik tampilan. Saya senang membangun sesuatu yang fungsional sekaligus nyaman dipandang."
    },
    {
      title: "Hobby",
      content: "Selain tertarik pada coding, saya juga sangat senang menulis, terutama menulis novel dan cerpen.",
      content2: "Saya percaya bahwa suatu saat saya dapat menerbitkan buku milik saya sendiri.",
      content3: "Mungkin saya bisa membuat sebuah website perbukuan agar semua orang dapat membaca tanpa harus mengeluarkan biaya."
    },
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 bg-[#fff5f7] overflow-hidden border-t-4 border-pink-200">
      
      {/* Efek Bunga Sakura Jatuh */}
      <SakuraFalling />

      {/* Hiasan Latar Belakang Jepang (BARU) */}
      <JapaneseDecorations />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-pink-500 font-medium mb-2 block tracking-widest text-sm uppercase">About Me / アバウトミー</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-gray-800">
            Mengenal Lebih Dekat
          </h2>
          <div className="flex justify-center gap-1">
            <div className="w-16 h-1 bg-pink-300 rounded-full" />
            <Flower className="w-4 h-4 text-pink-400 -mt-1.5" />
            <div className="w-16 h-1 bg-pink-300 rounded-full" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Side: Visual Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="relative group">
              <motion.div 
                whileHover={{ scale: 1.02, rotate: -1 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-card relative z-10 border-4 border-white bg-white p-2"
              >
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center border border-pink-100">
                  <motion.span 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="text-8xl"
                  >
                    👨‍💻
                  </motion.span>
                </div>
              </motion.div>
              
              {/* Efek Sinar Pink di Belakang Foto */}
              <div className="absolute -inset-4 bg-pink-200/50 rounded-2xl blur-2xl -z-10 group-hover:bg-pink-300/60 transition-colors" />

              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-6 -right-6 p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-md z-20 border border-pink-100"
              >
                <p className="font-display font-bold text-2xl text-pink-600">5+ Tahun</p>
                <p className="text-sm text-muted-foreground">Pengalaman</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Accordion & Stats */}
          <div className="space-y-8">
            <div className="space-y-4">
              {accordionData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-pink-100 rounded-xl overflow-hidden bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => setExpanded(expanded === index ? -1 : index)}
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-pink-50/50 transition-colors"
                  >
                    <span className="font-display font-bold text-lg text-gray-700">{item.title}</span>
                    <motion.div
                      animate={{ rotate: expanded === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-5 w-5 text-pink-400" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {expanded === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="p-4 pt-0 space-y-3 text-gray-600 leading-relaxed text-sm md:text-base border-t border-pink-50">
                          <p>{item.content}</p>
                          {item.content2 && <p>{item.content2}</p>}
                          {item.content3 && <p>{item.content3}</p>}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 bg-white rounded-xl text-center shadow-sm border border-pink-100 hover:border-pink-300 transition-all"
                >
                  <stat.icon className="h-6 w-6 text-pink-400 mx-auto mb-2" />
                  <p className="font-display text-2xl font-bold text-gray-800">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}