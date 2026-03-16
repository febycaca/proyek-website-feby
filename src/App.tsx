import React, { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion'; // Tambahkan motion di sini
import Index from "./pages/Index";
import Akademik from "./Akademik";
import LoadingScreen from "./components/LoadingScreen"; 

const queryClient = new QueryClient();

const App = () => {
  // State untuk mengontrol apakah web masih loading atau tidak
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Memberi waktu 2 detik untuk menampilkan loading screen yang estetik
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        
        {/* AnimatePresence mengelola animasi saat komponen muncul/hilang */}
        <AnimatePresence mode="wait">
          {isLoading && <LoadingScreen key="loader" />}
        </AnimatePresence>

        {/* Konten Utama hanya muncul setelah loading selesai */}
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