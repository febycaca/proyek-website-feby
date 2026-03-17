import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificatesSection from '@/components/CertificatesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { motion } from "framer-motion";
import Carousel from "@/components/Carousel"; 

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  // 🌸 1. Tambahkan state untuk posisi mouse
  const [mousePos, setMousePos] = useState({ x: 0 });

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') setIsDark(true);

    // 🌸 2. Fungsi untuk tangkap gerakan mouse
    const handleMouseMove = (e: MouseEvent) => {
      // Kita ambil posisi X relatif terhadap tengah layar (-1 sampai 1)
      setMousePos({ x: (e.clientX / window.innerWidth) * 2 - 1 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      {/* 🌸 3. Kumpulan Bunga Sakura Interaktif */}
      {/* Bunga 1 (Kanan Atas) */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          // Bergeser ke kiri saat mouse ke kanan (mousePos.x * -30)
          x: mousePos.x * -30 
        }}
        transition={{ 
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          x: { type: "spring", stiffness: 50, damping: 20 } 
        }}
        className="fixed top-20 right-10 text-5xl z-50 pointer-events-none drop-shadow-lg"
      >
        🌸
      </motion.div>

      {/* Bunga 2 (Kiri Tengah) */}
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          x: mousePos.x * -50 // Geser lebih jauh
        }}
        transition={{ 
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          x: { type: "spring", stiffness: 40, damping: 25 } 
        }}
        className="fixed top-1/2 left-5 text-3xl z-50 pointer-events-none opacity-70"
      >
        🌸
      </motion.div>

      {/* Bunga 3 (Kanan Bawah) */}
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          x: mousePos.x * -20 
        }}
        transition={{ 
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          x: { type: "spring", stiffness: 60, damping: 15 } 
        }}
        className="fixed bottom-20 right-1/4 text-4xl z-50 pointer-events-none opacity-60"
      >
        🌸
      </motion.div>

      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <HeroSection />
      
      <AboutSection />

      <div className="container mx-auto px-4 py-10 text-center">
        <h2 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-6 font-space">
          Aesthetic japanese vibes 🌸
        </h2>
        <Carousel />
      </div>

      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;