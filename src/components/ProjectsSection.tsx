import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const projects = [
  {
    title: 'Cahaya di Tirai Sakura',
    description: 'perjalanan cinta dan perjuangan hidup seorang mahasiswa kedokteran bernama Tiara.',
    tags: ['Drama', 'Romansa'],
    image: '/book-1.jpg', 
    isEmoji: false,
    color: 'from-pink-400/20 to-rose-400/20',
    github: '', 
    demo: '#', 
  },
  {
    title: 'Mariposa 2',
    description: 'Sequel dari karya sebelumnya dengan cerita yang lebih dalam dan karakter yang lebih berkembang.',
    tags: ['Remaja', 'Romansa'],
    image: '/book-2.avif',
    isEmoji: false,
    color: 'from-fuchsia-400/20 to-pink-400/20',
    github: '', 
    demo: '', 
  },
  {
    title: 'I Want To Eat Your Pancreas',
    description: 'Kisah menyentuh tentang seorang siswa introvert dan teman sekelasnya yang menderita penyakit pankreas.',
    tags: ['Drama', 'Romansa'],
    image: '/book-3.jpg',
    isEmoji: false,
    color: 'from-rose-400/20 to-orange-400/20',
    github: '',
    demo: '',
  },
  {
    title: 'Anonymous Crush',
    description: 'perjalanan Abeyla yang terjebak dalam hubungan rumit dengan teman anonymous chat-nya.',
    tags: ['Fiksi remaja', 'Romansa'],
    image: '/book-4.jpg',
    isEmoji: false,
    color: 'from-pink-300/20 to-indigo-300/20',
    github: '',
    demo: '',
  }
];

export default function ProjectsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false })
  ]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-pink-500 font-medium mb-2 block">Library</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Favorite Books</h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative max-w-5xl mx-auto px-12">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex">
              {projects.map((project) => (
                <div key={project.title} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-3">
                  <div className="h-full p-6 glass rounded-2xl shadow-card border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300">
                    
                    {/* HANYA MENGUBAH BAGIAN INI: object-contain dan bg-white agar tidak kepotong */}
                    <div className={`aspect-square rounded-xl mb-4 flex items-center justify-center bg-white overflow-hidden`}>
                      {project.isEmoji ? (
                        <span className="text-6xl">{project.image}</span>
                      ) : (
                        <img 
                          src={project.image}
                          alt={project.title} 
                          className="w-full h-full object-contain"
                        />
                      )}
                    </div>
                    
                    <div className="space-y-3 text-left">
                      <h3 className="font-display text-lg font-bold text-pink-700">{project.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2 py-1 text-[10px] rounded-md bg-pink-100 text-pink-600">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-2 pt-2">
                        {project.github && project.github !== '#' && (
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0 rounded-full bg-white/50" asChild>
                            <a href={project.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4" /></a>
                          </Button>
                        )}
                        
                        {project.demo && project.demo !== '#' && (
                          <Button size="sm" className="h-8 rounded-full bg-pink-500 hover:bg-pink-600" asChild>
                            <a href={project.demo} target="_blank" rel="noreferrer" className="text-xs">Lihat Karya</a>
                          </Button>
                        )}
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={scrollPrev} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md text-pink-500 z-10">
            <ChevronLeft size={24} />
          </button>
          <button onClick={scrollNext} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md text-pink-500 z-10">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}