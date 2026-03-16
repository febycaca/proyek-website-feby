import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Spring setting supaya gerakan lingkaran luarnya "kenyal" dan halus
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 16); // 16 adalah setengah dari lebar lingkaran (32px)
      cursorY.set(e.clientY - 16);
    };

    const checkHover = () => {
      // Biar kalau kena tombol atau link, kursornya membesar
      const hoveredEl = document.querySelectorAll('button, a, input, [role="button"]');
      hoveredEl.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovered(true));
        el.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    window.addEventListener('mousemove', mouseMove);
    checkHover();

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* 1. Titik Inti (Dot) - nempel banget sama mouse */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-pink-500 rounded-full pointer-events-none z-[9999]"
        style={{
          transform: `translate3d(${mousePosition.x - 4}px, ${mousePosition.y - 4}px, 0)`,
        }}
      />

      {/* 2. Lingkaran Luar (Trailing Circle) - gerakannya agak telat sedikit */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-pink-300 rounded-full pointer-events-none z-[9998]"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovered ? 1.5 : 1, // Membesar kalau kena tombol
          backgroundColor: isHovered ? 'rgba(251, 207, 232, 0.3)' : 'transparent',
        }}
        transition={{ type: 'spring', ...springConfig }}
      />
    </>
  );
};

export default CustomCursor;