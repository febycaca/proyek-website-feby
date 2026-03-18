import React, { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';
import Index from "./pages/Index";
import Akademik from "./Akademik";
import LoadingScreen from "./components/LoadingScreen"; 
import CustomCursor from "./components/CustomCursor"; 

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

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
        <CustomCursor /> 
        <Toaster />
        <Sonner />
        
        <AnimatePresence mode="wait">
          {isLoading && <LoadingScreen key="loader" />}
        </AnimatePresence> 

        {!isLoading && (
          <motion.div
            className={isDark ? 'dark' : ''}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="min-h-screen bg-white dark:bg-[#2D283E] transition-colors duration-500">
              <BrowserRouter>
                <Routes>
                  {/* Halaman utama (Sertifikat sudah ada di dalam sini) */}
                  <Route path="/" element={<Index />} />
                  <Route path="/akademik" element={<Akademik />} />
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