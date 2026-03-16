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
import CustomCursor from "./components/CustomCursor"; // 🌸 Import kursor baru kamu

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Menampilkan Loading Screen Sakura selama 2 detik
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* 🌸 Custom Cursor diletakkan paling atas agar selalu terlihat */}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/akademik" element={<Akademik />} />
              </Routes>
            </BrowserRouter>
          </motion.div>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;