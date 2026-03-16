import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Video, ChevronDown, Flower } from 'lucide-react';

// --- KOMPONEN SAKURA ---
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

// --- KOMPONEN HIASAN JEPANG ---
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
      <SakuraFalling />
      <JapaneseDecorations />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-pink-500 font-medium mb-2 block tracking-widest text-sm uppercase">About Me / アバウトミー</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-gray-800">
            This is me!
          </h2>
          <div className="flex justify-center items-center gap-2">
            <div className="w-16 h-1 bg-pink-300 rounded-full" />
            <Flower className="w-5 h-5 text-pink-400" />
            <div className="w-16 h-1 bg-pink-300 rounded-full" />
          </div>
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
                className="aspect-square rounded-2xl overflow-hidden shadow-xl relative z-10 border-4 border-white bg-white p-2"
              >
                <div className="w-full h-full rounded-xl overflow-hidden bg-pink-50">
                  {/*pict.jpeg */}
                  <img 
                    src="/foto-feby.jpg" 
                    alt="Feby Calista Balqis" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              <div className="absolute -inset-4 bg-pink-200/50 rounded-2xl blur-2xl -z-10" />
            </div>
          </motion.div>

          <div className="space-y-8">
            <div className="space-y-4">
              {accordionData.map((item, index) => (
                <motion.div
                  key={index}
                  className="border border-pink-100 rounded-xl overflow-hidden bg-white/60 backdrop-blur-sm"
                >
                  <button
                    onClick={() => setExpanded(expanded === index ? -1 : index)}
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-pink-50/50 transition-colors"
                  >
                    <span className="font-display font-bold text-lg text-gray-700">{item.title}</span>
                    <ChevronDown className={`h-5 w-5 text-pink-400 transition-transform ${expanded === index ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {expanded === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <div className="p-4 pt-0 text-gray-600 text-sm md:text-base border-t border-pink-50">
                          <p>{item.content}</p>
                          <p className="mt-2">{item.content2}</p>
                          <p className="mt-2">{item.content3}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}