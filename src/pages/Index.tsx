import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificatesSection from '@/components/CertificatesSection'; // Pastikan file ini ada di src/components/
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { motion } from "framer-motion";
import Carousel from "@/components/Carousel"; 

const Index = () => {
  const [isDark, setIsDark] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0 });

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') setIsDark(true);

    const handleMouseMove = (e: MouseEvent) => {
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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-500">
      
      {/* 🌸 Bunga Sakura Interaktif (Floating) */}
      <motion.div
        animate={{ y: [0, -20, 0], x: mousePos.x * -30 }}
        transition={{ 
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          x: { type: "spring", stiffness: 50, damping: 20 } 
        }}
        className="fixed top-20 right-10 text-5xl z-50 pointer-events-none drop-shadow-lg"
      >
        🌸
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], x: mousePos.x * -50 }}
        transition={{ 
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          x: { type: "spring", stiffness: 40, damping: 25 } 
        }}
        className="fixed top-1/2 left-5 text-3xl z-50 pointer-events-none opacity-70"
      >
        🌸
      </motion.div>

      {/* Navbar */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      {/* Konten Utama */}
      <HeroSection />
      
      <AboutSection />

      <div className="container mx-auto px-4 py-10 text-center">
        <h2 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-6 font-space italic">
          Aesthetic Japanese Vibes 🌸
        </h2>
        <Carousel />
      </div>

      <SkillsSection />
      
      <ProjectsSection />

      {/* 🌸 BAGIAN SERTIFIKAT FEBY (DI SINI LOKASINYA) 🌸 */}
      <div id="certificates" className="relative">
         <CertificatesSection />
      </div>

      <ContactSection />
      
      <Footer />
    </div>
  );
};

export default Index;