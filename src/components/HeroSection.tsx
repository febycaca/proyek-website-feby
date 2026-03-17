import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Youtube, Instagram, Flower } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/febycaca/proyek-website-feby.git', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://www.youtube.com/@hyurachanzz22', label: 'YouTube' },
    { icon: Instagram, href: 'https://www.instagram.com/feyy_ca', label: 'Instagram' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fff5f7]">
      {/* Background 3D tetap di belakang */}
      <ThreeScene />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* SISI KIRI: Bagian Foto Profil */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} // Mulai dari kecil
            animate={{ opacity: 1, scale: 1 }}    // Membesar ke ukuran asli
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-shrink-0 flex justify-center lg:justify-start"
          >
            <div className="relative group">
              {/* Efek Cahaya Soft Pink */}
              <div className="absolute -inset-6 bg-pink-200/40 rounded-full blur-3xl opacity-100 transition-opacity"></div>
              
              {/* Bingkai Putus-putus berputar */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border-2 border-dashed border-pink-300/40 rounded-2xl"
              />

              <div className="relative">
                {/* Bunga Sakura Melayang */}
                <motion.div 
                  animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-6 -right-6 z-20 bg-white p-2 rounded-full shadow-lg border border-pink-100"
                >
                  <Flower className="w-6 h-6 text-pink-400" />
                </motion.div>

                {/* KOTAK FOTO */}
                <div className="relative w-64 h-80 md:w-80 md:h-[450px] overflow-hidden rounded-2xl glass border-2 border-white/40 shadow-2xl z-10">
                  <img 
                    src="/WhatsApp Image 2026-03-13 at 12.59.08.jpeg" 
                    alt="Feby Calista Balqis"
                    className="w-full h-full object-cover"
                  />
                </div>

                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 z-20 bg-white/90 p-1.5 rounded-full shadow-md border border-pink-50"
                >
                  <Flower className="w-4 h-4 text-pink-300" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* SISI KANAN: Bagian Teks */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span 
                className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-pink-600 mb-6 border border-pink-100"
              >
                🌸 welcome!
              </motion.span>
            </motion.div>

            {/* ANIMASI NAMA & JUDUL (SUDAH PINK SEMUA) */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-800"
            >
              Feby Calista Balqis
              <br />
              {/* WARNA UNGU DIGANTI KE ROSE/PINK */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400"> Portofolio</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Saya buat website ini untuk memenuhi tugas coding class X-10. 
              Semoga bermanfaat untuk kita semua. ✨
            </motion.p>

            {/* Tombol Aksi */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <Button 
                size="lg" 
                className="rounded-full px-8 bg-pink-500 hover:bg-pink-600 shadow-lg shadow-pink-200 transition-all hover:scale-105"
                onClick={() => {
                  const element = document.querySelector('#projects');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Lihat Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 border-pink-200 text-pink-500 hover:bg-pink-50 transition-all hover:scale-105"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Let's be friends
              </Button>
            </motion.div>

            {/* Social Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass border border-pink-50 shadow-sm"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + (index * 0.1) }}
                  whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                >
                  <social.icon className="h-5 w-5 text-pink-500" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <motion.button
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full glass border border-pink-100 shadow-md"
      >
        <ArrowDown className="h-5 w-5 text-pink-500" />
      </motion.button>
    </section>
  );
}