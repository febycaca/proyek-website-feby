import React from 'react';
import { motion } from 'framer-motion';

const Akademik = () => {
  return (
    <div className="p-10 bg-pink-50 min-h-screen relative overflow-hidden">
      
      {/* --- KODE LANGKAH 4 DIMASUKKAN DI SINI --- */}
      <motion.div
        animate={{ 
          y: [0, -20, 0], 
          rotate: [0, 20, 0] 
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-10 right-10 text-4xl"
      >
        🌸
      </motion.div>
      {/* ----------------------------------------- */}

      <h1 className="text-3xl font-bold text-pink-600 text-center mb-10">
        Laman Akademik Kelas X-10
      </h1>

      <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md border border-pink-200">
        <p className="text-gray-700 text-center">Selamat datang di daftar pelajaran Feby!</p>
      </div>
      
    </div>
  );
};

export default Akademik;