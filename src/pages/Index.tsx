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
  // 🌙 Biarkan tetap 'true' jika kamu ingin defaultnya mode gelap yang estetik
  const [isDark, setIsDark] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0 });

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      setIsDark(true);
    } else if (saved === 'light') {
      setIsDark(false);
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth) * 2 - 1 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      {/* 🌸 Bunga Sakura Interaktif (Tetap Ada) */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
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

      <motion.div
        animate={{ 
          y: [0, 15, 0],
          x: mousePos.x * -50 
        }}
        transition={{ 
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          x: { type: "spring", stiffness: 40, damping: 25 } 
        }}
        className="fixed top-1/2 left-5 text-3xl z-50 pointer-events-none opacity-70"
      >
        🌸
      </motion.div>

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

      {/* 🚀 Navbar bersih tanpa kirim fungsi ganti tema lagi */}
      
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