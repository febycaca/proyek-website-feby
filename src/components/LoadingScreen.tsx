import { motion } from 'framer-motion';
import { Flower2 } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#fff5f7]"
    >
      <div className="relative flex flex-col items-center">
        {/* Lingkaran cahaya pink lembut di belakang bunga */}
        <div className="absolute inset-0 bg-pink-200 blur-3xl opacity-30 animate-pulse rounded-full" />
        
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="relative z-10"
        >
          <Flower2 className="w-14 h-14 text-pink-400" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 flex flex-col items-center gap-1"
        >
          <span className="text-rose-400 tracking-[0.3em] text-[10px] font-bold uppercase">
            Loading
          </span>
          <div className="flex gap-1">
             {[0, 1, 2].map((i) => (
               <motion.div
                 key={i}
                 animate={{ opacity: [0, 1, 0] }}
                 transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                 className="w-1.5 h-1.5 bg-pink-300 rounded-full"
               />
             ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;