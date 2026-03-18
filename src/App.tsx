import React, { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';
import Index from "./pages/Index";
import Akademik from "./Akademik";
import Sertifikat from "./CertificatesSection"; // 🌸 Import halaman sertifikat baru
import LoadingScreen from "./components/LoadingScreen"; 
import CustomCursor from "./components/CustomCursor"; 

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // 🌙 State untuk Dark Mode
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    // Menampilkan Loading Screen Sakura selama 2 detik
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // 🌙 Effect untuk pasang class "dark" di body HTML
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* 🌸 Custom Cursor */}
        <CustomCursor /> 

        <Toaster />
        <Sonner />
        
        {/* Animasi Transisi Loading Screen */}
        <AnimatePresence mode="wait">
          {isLoading && <LoadingScreen key="loader" />}
        </AnimatePresence> 

        {/* Konten Utama Website */}
        {!isLoading && (
          <motion.div
            className={isDark ? 'dark' : ''} // Memastikan class dark terpasang
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Div pembungkus warna background utama */}
            <div className="min-h-screen bg-white dark:bg-[#2D283E] transition-colors duration-500">
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/akademik" element={<Akademik />} />
                  <Route path="/sertifikat" element={<Sertifikat />} /> {/* 🌸 Rute baru untuk sertifikat */}
                </Routes>
              </BrowserRouter>
            </div>
          </motion.div>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;