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
import Carousel from "@/components/Carousel"; // Pastikan jalurnya benar

const Index = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') setIsDark(true);
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
      
      {/* Animasi Sakura Melayang */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="fixed top-20 right-10 text-5xl z-50 pointer-events-none"
      >
        🌸
      </motion.div>

      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <HeroSection />
      
      <AboutSection />

      {/* Bagian Galeri Carousel */}
      <div className="container mx-auto px-4 py-10 text-center">
        <h2 className="text-3xl font-bold text-pink-600 mb-6 font-space">
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