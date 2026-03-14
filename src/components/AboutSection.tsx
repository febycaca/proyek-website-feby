import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Video, ChevronDown } from 'lucide-react';

// --- BAGIAN EFEK SAKURA ---
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

// --- BAGIAN UTAMA WEBSITE ---
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
    <section id="about" className="relative py-20 md:py-32 bg-muted/30 overflow-hidden">
      <SakuraFalling />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-pink-400 font-medium mb-2 block">Tentang Saya</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Mengenal Lebih Dekat
          </h2>
          <div className="w-20 h-1 bg-pink-300 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="relative group">
              <motion.div 
                whileHover={{ scale: 1.02, rotate: -1 }}
                className="aspect-square rounded-2xl overflow-hidden glass shadow-card relative z-10 border border-pink-100"
              >
                <div className="w-full h-full bg-gradient-to-br from-pink-50 to-orange-50 flex items-center justify-center">
                  <motion.span 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="text-8xl"
                  >
                    👨‍💻
                  </motion.span>
                </div>
              </motion.div>
              <div className="absolute -inset-4 bg-pink-200/20 rounded-2xl blur-2xl -z-10 group-hover:bg-pink-200/30 transition-colors" />
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-6 -right-6 p-4 glass rounded-xl shadow-card z-20 border border-pink-100"
              >
                <p className="font-display font-bold text-2xl text-pink-500">5+ Tahun</p>
                <p className="text-sm text-muted-foreground">Pengalaman</p>
              </motion.div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <div className="space-y-4">
              {accordionData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-pink-100 rounded-xl overflow-hidden bg-white/40 backdrop-blur-sm"
                >
                  <button
                    onClick={() => setExpanded(expanded === index ? -1 : index)}
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-pink-50 transition-colors"
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
                        <div className="p-4 pt-0 space-y-3 text-gray-600 leading-relaxed text-sm md:text-base">
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

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 bg-white/50 backdrop-blur-md rounded-xl text-center shadow-sm border border-pink-50 hover:border-pink-200 transition-all"
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