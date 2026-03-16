import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  { id: 1, title: "sakura flower", img: "https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=800" },
  { id: 2, title: "Japan view", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800" },
  { id: 3, title: "Sakura Vibes", img: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=800" },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 my-8">
      <div className="relative w-full max-w-[600px] h-[350px] overflow-hidden rounded-3xl shadow-xl border-4 border-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img src={slides[index].img} className="w-full h-full object-cover" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-500/50 to-transparent" />
            <h3 className="absolute bottom-5 left-5 text-white text-xl font-bold">{slides[index].title}</h3>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex gap-2">
        {slides.map((_, i) => (
          <div key={i} className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-pink-500' : 'w-2 bg-pink-200'}`} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;