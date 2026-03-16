import { motion } from 'framer-motion';
import { Heart, Camera, Sparkles, Sun, Coffee, Flower2, Moon, Palette } from 'lucide-react';

const moodItems = [
  {
    id: 1,
    title: 'Meow',
    description: 'I love cat.',
    image: 'gambar1.jpg',
    color: 'from-pink-200 to-rose-100',
    rotation: '-rotate-3',
    icon: <Flower2 className="h-4 w-4" />,
    tapeColor: 'bg-pink-200/40'
  },
  {
    id: 2,
    title: 'Sony Angel',
    description: 'cute dolls.',
    image: 'gambar2.jpg',
    color: 'from-orange-100 to-rose-100',
    rotation: 'rotate-2',
    icon: <Coffee className="h-4 w-4" />,
    tapeColor: 'bg-rose-200/40'
  },
  {
    id: 3,
    title: 'Baby Girl',
    description: 'Cute and innocent.',
    image: 'gambar3.webp',
    color: 'from-pink-300 to-fuchsia-100',
    rotation: 'rotate-1',
    icon: <Sun className="h-4 w-4" />,
    tapeColor: 'bg-fuchsia-200/40'
  },
  {
    id: 4,
    title: 'myself',
    description: 'Selfie time.',
    image: 'ME.jpeg',
    color: 'from-rose-100 to-pink-200',
    rotation: '-rotate-2',
    icon: <Palette className="h-4 w-4" />,
    tapeColor: 'bg-pink-300/40'
  },
  {
    id: 5,
    title: 'Lovely City',
    description: 'Kota yang indah.',
    image: 'gambar5.jpg',
    color: 'from-indigo-100 to-pink-100',
    rotation: 'rotate-3',
    icon: <Moon className="h-4 w-4" />,
    tapeColor: 'bg-indigo-200/40'
  },
  {
    id: 6,
    title: 'Book vibes',
    description: 'Hanyut dalam imajinasi.',
    image: 'gambar6.jpg',
    color: 'from-pink-100 to-rose-200',
    rotation: '-rotate-1',
    icon: <Sparkles className="h-4 w-4" />,
    tapeColor: 'bg-rose-100/40'
  },
  {
    id: 7,
    title: 'Musicholic',
    description: 'good music,good mood.',
    image: 'gambar7.jpg',
    color: 'from-rose-200 to-pink-300',
    rotation: 'rotate-2',
    icon: <Camera className="h-4 w-4" />,
    tapeColor: 'bg-pink-200/60'
  },
  {
    id: 8,
    title: 'Our sakura girl',
    description: 'Beautiful.',
    image: 'gambar8.jpg',
    color: 'from-fuchsia-100 to-rose-100',
    rotation: '-rotate-3',
    icon: <Heart className="h-4 w-4" />,
    tapeColor: 'bg-fuchsia-100/50'
  },
];

export default function SakuraMoodboard() {
  return (
    <section id="moodboard" className="py-20 bg-[#fff9fa] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Judul Estetik */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex justify-center items-center gap-3 mb-3 text-pink-400">
            <Sparkles className="animate-pulse" />
            <span className="font-medium tracking-[0.3em] uppercase text-xs">Aesthetic Collection</span>
            <Sparkles className="animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-rose-900 mb-4 tracking-tight">
            my random moods
          </h2>
          <p className="text-rose-400 font-serif italic">"Cherry blossoms and sweet memories"</p>
          <div className="w-16 h-1 bg-pink-200 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Grid Papan Kreasi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {moodItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0, 
                zIndex: 20,
                transition: { duration: 0.2 } 
              }}
              className={`relative p-3 bg-white shadow-[0_10px_30px_-15px_rgba(251,182,206,0.5)] rounded-sm transition-all ${item.rotation} border-b-[30px] border-white`}
            >
              {/* Tape Dekoratif */}
              <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-7 ${item.tapeColor} backdrop-blur-[2px] -rotate-2 z-30 shadow-sm border-x border-white/20`} />
              
              {/* Frame Foto */}
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <div className={`absolute inset-0 bg-gradient-to-tr ${item.color} opacity-30 mix-blend-overlay z-10`} />
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-2 right-2 z-20">
                  <Heart className="h-5 w-5 text-white/80 fill-rose-400/40" />
                </div>
              </div>
              
              {/* Keterangan */}
              <div className="mt-4 px-1 text-left">
                <div className="flex items-center gap-2 text-rose-800 mb-1">
                  {item.icon}
                  <h3 className="text-sm font-bold tracking-wide uppercase">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[11px] leading-relaxed text-rose-400/80 font-medium font-mono">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}