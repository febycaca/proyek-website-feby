import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Flower, BookHeart, UserCircle, Sparkles } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  return (
    <section id="about" className="relative py-20 md:py-32 bg-[#fff9fa] dark:bg-[#1a1625] overflow-hidden border-t-4 border-pink-100 dark:border-pink-900/20">
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
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-pink-100">
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
              <div className="absolute -inset-4 bg-gradient-to-tr from-pink-200 to-rose-100 rounded-[2rem] blur-xl opacity-50 -z-10 animate-pulse" />
              
              <motion.div 
                whileHover={{ y: -10, rotate: 1 }}
                className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white dark:border-pink-950/30 bg-white"
              >
                <img 
                  src="/pict.jpeg" 
                  alt="Feby Calista Balqis" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-6 -right-6 z-20 bg-white dark:bg-pink-900 p-3 rounded-full shadow-lg border border-pink-50 dark:border-pink-800"
              >
                <UserCircle className="w-8 h-8 text-pink-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* BAGIAN ACCORDION - Menggunakan Shadcn UI */}
          <div className="space-y-4">
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              
              {/* Item 1: Developer */}
              <AccordionItem value="item-0" className="border-none mb-4 bg-white/40 dark:bg-pink-950/10 backdrop-blur-md px-6 rounded-2xl shadow-sm border border-white/20">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-pink-50 dark:bg-pink-900/30 rounded-lg">
                      <Code2 className="w-5 h-5 text-pink-400" />
                    </div>
                    <span className="font-bold text-lg text-rose-900/80 dark:text-pink-100">Passionate Developer</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-rose-900/70 dark:text-pink-200/70 leading-relaxed text-base space-y-4">
                  <p>Halo! Saya Feby. Pelajar yang punya ketertarikan besar di dunia web. Fokus saya sederhana: bikin website yang nggak cuma enak dilihat, tapi juga asyik buat digunain.</p>
                  <p className="font-medium italic text-pink-500">Coding adalah soal memecahkan masalah dengan logika yang rapi dan visual yang pas.</p>
                  <p>Di portofolio ini, setiap proyek adalah hasil eksperimen saya dengan teknologi baru, mulai dari struktur kode sampai detail sakuranya juga.</p>
                </AccordionContent>
              </AccordionItem>

              {/* Item 2: Hobby */}
              <AccordionItem value="item-1" className="border-none bg-white/40 dark:bg-pink-950/10 backdrop-blur-md px-6 rounded-2xl shadow-sm border border-white/20">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-pink-50 dark:bg-pink-900/30 rounded-lg">
                      <BookHeart className="w-5 h-5 text-pink-400" />
                    </div>
                    <span className="font-bold text-lg text-rose-900/80 dark:text-pink-100">Hobby & Dreams</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-rose-900/70 dark:text-pink-200/70 leading-relaxed text-base space-y-4">
                  <p>Selain koding, saya sangat senang menulis, terutama novel dan cerpen. Menulis adalah cara saya bercerita melalui kata-kata.</p>
                  <div className="flex items-center gap-2 text-pink-500 font-medium">
                    <Sparkles className="w-4 h-4" />
                    <p>Mimpi saya adalah menerbitkan buku sendiri suatu hari nanti.</p>
                  </div>
                  <p>Saya juga bercita-cita membuat website perbukuan gratis agar semua orang bisa membaca tanpa terkendala biaya.</p>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}