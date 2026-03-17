import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2, Flower } from 'lucide-react';
// Pastikan komponen UI ini sudah kamu install lewat shadcn ya!
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulasi ngirim pesan (Biar nggak error Supabase)
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: 'Pesan Terkirim! ✨',
        description: 'Terima kasih Feby sudah mencoba form ini!',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#fff5f7] dark:bg-[#2D283E] relative overflow-hidden transition-colors duration-500">
      {/* Dekorasi Sakura tetep ada */}
      <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
        <Flower className="w-64 h-64 text-pink-400 rotate-12" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-pink-500 font-medium mb-2 block tracking-widest uppercase text-sm">Kontak</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-pink-100">
            Hubungi Saya!
          </h2>
          <div className="w-20 h-1 bg-pink-300 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto p-8 bg-white/80 dark:bg-card/50 backdrop-blur-md rounded-2xl shadow-xl border border-pink-50 dark:border-pink-900/30">
            <form onSubmit={handleSubmit} className="space-y-6">
               <div className="grid sm:grid-cols-2 gap-4">
                  <Input 
                    name="name" 
                    placeholder="Nama kamu" 
                    value={formData.name} 
                    onChange={handleChange}
                    className="bg-white dark:bg-[#1e1b29] border-pink-100 dark:border-pink-900/50" 
                  />
                  <Input 
                    name="email" 
                    type="email" 
                    placeholder="email@example.com" 
                    value={formData.email} 
                    onChange={handleChange}
                    className="bg-white dark:bg-[#1e1b29] border-pink-100 dark:border-pink-900/50"
                  />
               </div>
               <Input 
                 name="subject" 
                 placeholder="Subjek pesan" 
                 value={formData.subject} 
                 onChange={handleChange}
                 className="bg-white dark:bg-[#1e1b29] border-pink-100 dark:border-pink-900/50"
               />
               <Textarea 
                 name="message" 
                 placeholder="Tulis pesan..." 
                 value={formData.message} 
                 onChange={handleChange}
                 className="bg-white dark:bg-[#1e1b29] border-pink-100 dark:border-pink-900/50"
               />
               <Button type="submit" disabled={isSubmitting} className="w-full bg-pink-500 hover:bg-pink-600">
                 {isSubmitting ? <Loader2 className="animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                 Kirim Pesan
               </Button>
            </form>
        </div>
      </div>
    </section>
  );
}