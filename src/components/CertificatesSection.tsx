import { motion } from "framer-motion";

const CertificatesSection = () => {
  const certificates = [
    { id: 1, title: "Peringkat 1 kelas VII-8", img: "/sertif1.jpeg" },
    { id: 2, title: "Peringkat 1 kelas VIII-6 semester genap", img: "/sertif2.jpeg" },
    { id: 3, title: "Juara 1 try out kelas VIII khalifah", img: "/sertif3.jpeg" },
    { id: 4, title: "Sertifikat Anggota Lomba POSI 2023", img: "/sertif4.jpeg" },
    { id: 5, title: "Peringkat 1 kelas VIII-6 semester ganjil", img: "/sertif5.jpeg" },
    { id: 6, title: "Peringkat 1 kelas IX-1 semester ganjil", img: "/sertif6.jpeg" },
  ];

  return (
    <section className="py-20 bg-[#fff5f8] dark:bg-[#2D283E]/50 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-[#d87093] dark:text-pink-300 font-space"
          >
            My Achievements 🌸
          </motion.h2>
          <div className="h-1.5 w-24 bg-[#ffb7c5] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -15 }}
              className="bg-white/80 dark:bg-[#3d3552] backdrop-blur-md border-2 border-pink-100 dark:border-pink-900/30 rounded-[2.5rem] overflow-hidden shadow-xl shadow-pink-100/30 p-4"
            >
              {/* Di sini perubahannya: pakai object-contain dan bg-white */}
              <div className="rounded-[2rem] overflow-hidden mb-5 aspect-video relative bg-white/50">
                <img 
                  src={cert.img} 
                  alt={cert.title} 
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="text-center pb-2 px-2">
                <h3 className="text-lg font-bold text-gray-800 dark:text-pink-100 italic leading-tight">
                  {cert.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;